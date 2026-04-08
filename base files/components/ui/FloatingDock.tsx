'use client';
import { cn } from "@/lib/utils";
import { AnimatePresence, motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import Link from "next/link";
import { useRef, useState } from "react";

type DockItem = { title: string; icon: React.ReactNode; href: string; };

export const FloatingDock = ({ items, className }: { items: DockItem[]; className?: string; }) => {
  return <FloatingDockDesktop items={items} className={className} />;
};

const FloatingDockDesktop = ({ items, className }: { items: DockItem[]; className?: string; }) => {
  const mouseY = useMotionValue(Infinity);
  return (
    <motion.div
      onMouseMove={(e) => mouseY.set(e.pageY)}
      onMouseLeave={() => mouseY.set(Infinity)}
      className={cn(
        "fixed right-4 top-1/2 -translate-y-1/2 z-[200] hidden lg:flex flex-col items-center gap-3 rounded-2xl bg-white/10 backdrop-blur-sm py-4 px-2 border border-white/20",
        className
      )}
    >
      {items.map((item) => (
        <IconContainerVertical mouseY={mouseY} key={item.title} {...item} />
      ))}
    </motion.div>
  );
};

function IconContainerVertical({
  mouseY,
  title,
  icon,
  href,
}: {
  mouseY: ReturnType<typeof useMotionValue<number>>;
  title: string;
  icon: React.ReactNode;
  href: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const distance = useTransform(mouseY, (val: number) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { y: 0, height: 0 };
    return val - bounds.y - bounds.height / 2;
  });
  const sizeTransform = useTransform(distance, [-100, 0, 100], [36, 56, 36]);
  const size = useSpring(sizeTransform, { mass: 0.1, stiffness: 150, damping: 12 });
  const iconSizeTransform = useTransform(distance, [-100, 0, 100], [18, 28, 18]);
  const iconSize = useSpring(iconSizeTransform, { mass: 0.1, stiffness: 150, damping: 12 });
  const [hovered, setHovered] = useState(false);

  return (
    <Link href={href}>
      <motion.div
        ref={ref}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="relative flex items-center justify-center rounded-full shadow-lg transition-colors duration-200"
        style={{
          width: size,
          height: size,
          backgroundColor: hovered ? '#FF5F05' : 'white',
          color: hovered ? 'white' : '#13294B',
        }}
      >
        <AnimatePresence>
          {hovered && (
            <motion.div
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 10 }}
              className="absolute right-full mr-3 top-1/2 -translate-y-1/2 text-white font-title uppercase tracking-widest text-xs px-3 py-2 rounded-l-md whitespace-nowrap shadow-xl"
              style={{ backgroundColor: '#13294B' }}
            >
              {title}
            </motion.div>
          )}
        </AnimatePresence>
        <motion.div
          style={{ width: iconSize, height: iconSize }}
          className="flex items-center justify-center"
        >
          {icon}
        </motion.div>
      </motion.div>
    </Link>
  );
}

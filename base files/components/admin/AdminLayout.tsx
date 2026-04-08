'use client';
import React, { useState } from 'react';
import Link from 'next/link';

const NavItem = ({ title, icon, href, active = false }: { title: string, icon: string, href: string, active?: boolean }) => (
  <Link 
    href={href} 
    className={`flex items-center gap-4 py-4 px-6 mb-4 font-title uppercase tracking-widest text-sm transition-all duration-300 border-l-4 ${active ? 'bg-primary-orange text-white border-white' : 'text-white/40 border-transparent hover:bg-white/10 hover:text-white'}`}
  >
    <span>{icon}</span>
    {title}
  </Link>
);

export const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="flex h-screen bg-nearBlack overflow-hidden">
      {/* Sidebar Overlay */}
      <aside className={`h-full bg-nearBlack border-r border-white/10 flex flex-col transition-all duration-500 overflow-hidden ${sidebarOpen ? 'w-[300px]' : 'w-[0px]'}`}>
         {/* Branding */}
         <div className="p-10 mb-10 border-b border-white/5">
            <h2 className="text-white font-title text-3xl uppercase tracking-widest text-center">Avista <span className="text-primary-orange">Admin</span></h2>
         </div>

         {/* Navigation Items */}
         <nav className="flex-grow">
            <NavItem title="Overview" icon="🏠" href="/admin/dashboard" active />
            <NavItem title="Listings" icon="🏡" href="/admin/properties" />
            <NavItem title="Blog Posts" icon="📝" href="/admin/blog" />
            <NavItem title="Leads & Form" icon="📧" href="/admin/leads" />
            <NavItem title="Settings" icon="⚙️" href="/admin/settings" />
         </nav>

         {/* Logout & Profile */}
         <div className="p-8 border-t border-white/5 text-center">
            <button className="text-white/40 font-title uppercase tracking-widest text-[10px] hover:text-primary-orange transition-colors">Sign Out 👋</button>
         </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-grow overflow-y-auto bg-white/5 backdrop-blur-xl relative flex flex-col">
         {/* Header */}
         <header className="h-[100px] border-b border-white/5 flex items-center justify-between px-12 shrink-0">
            <button 
               onClick={() => setSidebarOpen(!sidebarOpen)}
               className="text-white text-3xl p-4 hover:scale-110 active:scale-95 transition-transform"
            >
               ☰
            </button>
            <div className="flex items-center gap-6">
               <div className="w-[45px] h-[45px] rounded-full bg-primary-orange flex items-center justify-center text-white font-bold shadow-2xl">BC</div>
               <span className="text-white font-title uppercase tracking-widest text-sm hidden md:block">Bernardo Corrales</span>
            </div>
         </header>

         {/* Page Content Holder */}
         <div className="p-12 h-0 flex-grow">
            {children}
         </div>
      </main>
    </div>
  );
};

<section class="as-marquee-text-4-area wa-p-relative wa-fix pb-90">
    <?php if(!empty( $settings['image_1']['url'] )) : ?>
    <div class="as-marquee-text-4-bg-img wa-p-relative">
        <img src="<?php echo esc_url($settings['image_1']['url']); ?>" alt="<?php echo function_exists('avista_img_alt_text') ? avista_img_alt_text($settings['image_1']['url']) : ''; ?>" class="w-100">
    </div>
    <?php endif; ?>
    <div class="wa_marquee_left_nopause d-inline-block ">
        <div class="as-marquee-text-4-text">
            <?php foreach( $settings['list_items'] as $list ) : ?>
            <h3 class="as-h-1 text-elm"><?php echo esc_html( $list['info_label'] ); ?></h3>
            <?php \Elementor\Icons_Manager::render_icon( $list['info_icon'], [ 'aria-hidden' => 'true' ] ); ?>
            <?php endforeach; ?>
        </div>
    </div>
    <div class="wa_marquee_right_nopause d-inline-block ">
        <div class="as-marquee-text-4-text">
            <?php foreach( $settings['list_items_2'] as $list ) : ?>
            <h3 class="as-h-1 text-elm"><?php echo esc_html( $list['info_label'] ); ?></h3>
            <?php \Elementor\Icons_Manager::render_icon( $list['info_icon'], [ 'aria-hidden' => 'true' ] ); ?>
            <?php endforeach; ?>
        </div>
    </div>
</section>
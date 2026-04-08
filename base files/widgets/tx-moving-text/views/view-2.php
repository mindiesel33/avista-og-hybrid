<?php
    if($settings['enable_dark_mode'] === 'yes') {
        $dark_mode = 'has-dark';
    } else {
        $dark_mode = '';
    }
?>
<section class="as-marquee-text-2-area wa-fix tx-section <?php echo esc_attr($dark_mode); ?>">
    <div class="wa_marquee_left_nopause d-inline-block">
        <div class="as-marquee-text-2-wrap">
            <?php foreach( $settings['list_items'] as $list ) : ?>
            <h3 class="as-h-2 as-marquee-text-2-text">
                <?php echo esc_html( $list['info_label'] ); ?>
                <?php \Elementor\Icons_Manager::render_icon( $list['info_icon'], [ 'aria-hidden' => 'true' ] ); ?>
            </h3>
            <?php endforeach; ?>
        </div>
    </div>
</section>
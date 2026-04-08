<?php
    if($settings['enable_dark_mode'] === 'yes') {
        $dark_mode = 'has-dark';
    } else {
        $dark_mode = '';
    }
?>
<section class="as-marquee-text-1-area wa-fix <?php echo esc_attr($dark_mode); ?>">
    <div class="as-marquee-text-1-wrap-1">
        <div class="wa_marquee_left_nopause d-inline-block">
            <div class="as-marquee-text-1-content">
                <?php foreach( $settings['list_items'] as $list ) : ?>
                    <?php if(!empty( $list['info_label'] )) : ?>
                    <h6 class="as-h-1 text-elm">
                        <?php echo esc_html( $list['info_label'] ); ?>
                    </h6>
                    <?php endif; ?>

                    <?php if(!empty( $list['image_1']['url'] )) : ?>
                    <img src="<?php echo esc_url( $list['image_1']['url'] ); ?>"
                    alt="<?php if(function_exists('avista_img_alt_text')) { echo avista_img_alt_text( $list['image_1']['url'] ); } ?>">
                    <?php endif; ?>
                <?php endforeach; ?>
            </div>
        </div>
    </div>

    <?php if( $settings['enable_moving_text_2'] === 'yes' ) : ?>
    <div class="as-marquee-text-1-wrap-2">
        <div class="wa_marquee_right_nopause d-inline-block">
            <div class="as-marquee-text-1-content">
                <?php foreach( $settings['list_items_2'] as $list ) : ?>
                    <?php if(!empty( $list['info_label'] )) : ?>
                    <h6 class="as-h-1 text-elm"><?php echo esc_html( $list['info_label'] ); ?></h6>
                    <?php endif; ?>

                    <?php if(!empty( $list['image_1']['url'] )) : ?>
                    <img src="<?php echo esc_url( $list['image_1']['url'] ); ?>"
                    alt="<?php if(function_exists('avista_img_alt_text')) { echo avista_img_alt_text( $list['image_1']['url'] ); } ?>">
                    <?php endif; ?>

                <?php endforeach; ?>
            </div>
        </div>
    </div>
    <?php endif; ?>
</section>
<?php
    if($settings['enable_dark_mode'] === 'yes') {
        $dark_mode = 'has-dark';
    } else {
        $dark_mode = '';
    }
?>
<section class="as-marquee-text-3-area wa-fix pb-80 tx-section <?php echo esc_attr( $dark_mode ); ?>">

    <!-- left-marquee -->
    <div class="d-inline-block mb-30">
        <div class="as-marquee-text-3-wrap as_mt3_ani_left">
            <?php foreach( $settings['list_items'] as $list ) : ?>
            <h2 class="as-h-1 text-elm"><?php echo esc_html( $list['info_label'] ); ?></h2>
            <?php if(!empty( $list['image_1']['url'] )) : ?>
            <div class="img-elm wa-fix wa-img-cover">
                <img src="<?php echo esc_url( $list['image_1']['url'] ); ?>"
                alt="<?php if(function_exists('avista_img_alt_text')) { echo avista_img_alt_text( $list['image_1']['url'] ); } ?>">
            </div>
            <?php endif; ?>
            <?php endforeach; ?>
        </div>
    </div>

    <!-- right-marquee -->
    <?php if( $settings['enable_moving_text_2'] === 'yes' ) : ?>
    <div class="d-inline-block">
        <div class="as-marquee-text-3-wrap as_mt3_ani_right">
            <?php foreach( $settings['list_items_2'] as $list ) : ?>
            <h2 class="as-h-1 text-elm"><?php echo esc_html( $list['info_label'] ); ?></h2>
            <?php if(!empty( $list['image_1']['url'] )) : ?>
            <div class="img-elm wa-fix wa-img-cover">
                <img src="<?php echo esc_url( $list['image_1']['url'] ); ?>"
                alt="<?php if(function_exists('avista_img_alt_text')) { echo avista_img_alt_text( $list['image_1']['url'] ); } ?>">
            </div>
            <?php endif; ?>
            <?php endforeach; ?>
        </div>
    </div>
    <?php endif; ?>

</section>
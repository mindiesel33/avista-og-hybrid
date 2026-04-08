<?php
    if($settings['enable_dark_mode'] === 'yes') {
        $dark_mode = 'has-dark';
    } else {
        $dark_mode = '';
    }
?>
<section class="as-trust-2-area wa-fix wa-p-relative tx-section <?php echo esc_attr($dark_mode); ?>">
    <?php if( $settings['enable_video'] === 'yes' ) : ?>
    <div class="as-trust-2-video wa-video-cover">
        <?php
            if ( $settings['video_source'] === 'youtube' ) {
                $video_url = 'https://www.youtube.com/embed/' . esc_attr( $settings['video_link']['url'] ) . '?autoplay=1&mute=1&loop=1';
            } elseif ( $settings['video_source'] === 'vimeo' ) {
                $video_url = 'https://player.vimeo.com/video/' . esc_attr( $settings['video_link']['url'] ) . '?autoplay=1&loop=1';
            } else {
                $video_url = esc_url( $settings['video_link']['url'] );
            }
        if ( $settings['video_source'] === 'youtube' || $settings['video_source'] === 'vimeo' ) :
        ?>
        <iframe
            src="<?php echo $video_url; ?>"
            frameborder="0"
            allow="autoplay; fullscreen"
            allowfullscreen>
        </iframe>
        <?php else : ?>
        <video src="<?php echo esc_url($video_url); ?>" autoplay muted loop></video>
        <?php endif; ?>
    </div>
    <?php endif; ?>

    <div class="container as-container-2">
        <div class="as-trust-2-content">
            <?php if( $settings['enable_description'] === 'yes' ) : ?>
            <p class="as-h-2 as-trust-2-comment wow fadeInUp2 tx-description" data-wow-delay=".1s">
                <?php echo wp_kses($settings['description'], true); ?>
            </p>
            <?php endif; ?>

            <?php if( $settings['enable_author_box'] === 'yes' ) : ?>
            <div class="as-trust-2-author wow fadeInUp2" data-wow-delay=".3s">
                <?php if(!empty( $settings['author_image']['url'] )) : ?>
                <div class="img-elm wa-fix wa-fix">
                    <img src="<?php echo esc_url($settings['author_image']['url']); ?>" alt="<?php if(function_exists('avista_img_alt_text')) { echo avista_img_alt_text( $settings['author_image']['url'] ); } ?>">
                </div>
                <?php endif; ?>

                <div class="content-wrap">
                    <?php if(!empty( $settings['author_title_1'] )) : ?>
                    <h5 class="as-h-2 name"><?php echo esc_html($settings['author_title_1']); ?></h5>
                    <?php endif; ?>

                    <?php if(!empty( $settings['author_title_2'] )) : ?>
                    <p class="as-p-2 bio">
                        <?php echo wp_kses($settings['author_title_2'], true); ?>
                    </p>
                    <?php endif; ?>
                </div>
            </div>
            <?php endif; ?>

        </div>
    </div>

    <?php if( $settings['enable_moving_text'] === 'yes' ) : ?>
    <div class="as-trust-2-marquee">
        <div class="wa_marquee_left_nopause d-inline-block">
            <div class="as-trust-2-marquee-wrap">

                <?php foreach( $settings['list_items'] as $list ) : ?>
                <h4 class="as-h-2 text-elm">
                    <?php \Elementor\Icons_Manager::render_icon( $list['info_icon'], [ 'aria-hidden' => 'true' ] ); ?>
                    <?php echo esc_html( $list['info_label'] ); ?>
                </h4>
                <?php endforeach; ?>

            </div>
        </div>
    </div>
    <?php endif; ?>
</section>
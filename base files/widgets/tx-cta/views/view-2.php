<?php
    if($settings['enable_dark_mode'] === 'yes') {
        $dark_mode = 'has-dark';
    } else {
        $dark_mode = '';
    }
?>
<section class="as-cta-2-area pt-90 tx-section <?php echo esc_attr($dark_mode); ?>">
    <div class="container as-container-1">
        <div class="as-cta-2-wrap">

            <!-- left-content -->
            <div class="as-cta-2-left">
                <?php if( $settings['enable_author_box'] === 'yes' ) : ?>
                <div class="as-cta-2-left-top">

                    <div class="as-cta-2-booking">
                        <?php if(!empty( $settings['author_title_1'] )) : ?>
                        <h4 class="as-h-1 title wa_title_spilt_1">
                            <?php echo esc_html($settings['author_title_1']); ?>
                        </h4>
                        <?php endif; ?>

                        <?php if(!empty( $settings['author_title_2'] )) : ?>
                        <p class="as-p-1 disc wow fadeInUp2" data-wow-delay=".2s">
                            <?php echo esc_html($settings['author_title_2']); ?>
                        </p>
                        <?php endif; ?>

                        <div class="btn-x-mail wow fadeInUp2" data-wow-delay=".3s" >
                            <?php if(!empty( $settings['author_button_text'] )) : ?>
                            <a href="<?php echo esc_url($settings['author_button_link']['url']); ?>"
                            target="<?php echo esc_attr($settings['author_button_link']['is_external'] ? '_blank' : '_self'); ?>"
                            rel="<?php echo esc_attr($settings['author_button_link']['nofollow'] ? 'nofollow' : ''); ?>"
                            aria-label="<?php echo esc_attr($settings['author_button_text']); ?>" class="as-pr-btn-1-v2">
                                <span class="text">
                                    <?php echo esc_html($settings['author_button_text']); ?>
                                </span>

                                <?php if( $settings['enable_author_button_icon'] === 'yes' ) : ?>
                                <span class="icon">
                                    <?php \Elementor\Icons_Manager::render_icon( $settings['author_button_icon_1'], [ 'aria-hidden' => 'true' ] ); ?>
                                </span>
                                <?php endif; ?>
                            </a>
                            <?php endif; ?>

                            <?php if(!empty( $settings['author_info'] )) : ?>
                            <div class="as-p-1 mail">
                                <?php echo wp_kses($settings['author_info'], true); ?>
                            </div>
                            <?php endif; ?>
                        </div>
                    </div>

                    <div class="as-cta-2-manager">
                        <?php if(!empty( $settings['author_image']['url'] )) : ?>
                        <div class="img-elm wa-fix wa-img-cover">
                            <img src="<?php echo esc_url($settings['author_image']['url']); ?>" alt="<?php if(function_exists('avista_img_alt_text')) { echo avista_img_alt_text( $settings['author_image']['url'] ); } ?>">
                        </div>
                        <?php endif; ?>

                        <h4 class="as-h-1 text-elm">
                            <?php echo esc_html($settings['author_info_2_left']); ?>
                            <?php if(!empty( $settings['author_info_middle_image']['url'] )) : ?>
                            <img src="<?php echo esc_url($settings['author_info_middle_image']['url']); ?>" alt="<?php if(function_exists('avista_img_alt_text')) { echo avista_img_alt_text( $settings['author_info_middle_image']['url'] ); } ?>"> <?php endif; ?>
                            <?php echo esc_html($settings['author_info_2_right']); ?>
                        </h4>
                    </div>
                </div>
                <?php endif; ?>

                <!-- projects -->
                <?php if( $settings['enable_info_box'] === 'yes' ) : ?>
                <div class="as-cta-2-projects">
                    <div class="title-x-btn">
                        <?php if(!empty( $settings['info_title'] )) : ?>
                        <h4 class="as-h-1 title wa_title_spilt_1">
                            <?php echo esc_html($settings['info_title']); ?>
                        </h4>
                        <?php endif; ?>

                        <!-- pr-btn -->
                        <?php if(!empty( $settings['info_button_text'] )) : ?>
                        <a href="<?php echo esc_url($settings['info_button_link']['url']); ?>"
                        target="<?php echo esc_attr($settings['info_button_link']['is_external'] ? '_blank' : '_self'); ?>"
                        rel="<?php echo esc_attr($settings['info_button_link']['nofollow'] ? 'nofollow' : ''); ?>"
                        aria-label="<?php echo esc_attr($settings['info_button_text']); ?>" class="as-pr-btn-1 wa_btn_split_1 wa_magnetic_btn_1 wow fadeInRight2" data-wow-delay=".2s">
                            <span class="text">
                                <?php echo esc_html($settings['info_button_text']); ?>
                            </span>

                            <?php if( $settings['enable_info_button_icon'] === 'yes' ) : ?>
                            <span class="icon">
                                <span class="icon-fix wa-fix">
                                    <?php \Elementor\Icons_Manager::render_icon( $settings['info_button_icon_1'], [ 'aria-hidden' => 'true' ] ); ?>
                                    <?php \Elementor\Icons_Manager::render_icon( $settings['info_button_icon_2'], [ 'aria-hidden' => 'true' ] ); ?>
                                </span>
                            </span>
                            <?php endif; ?>
                        </a>
                        <?php endif; ?>
                    </div>
                    <div class="as-cta-2-projects-ss">
                        <?php if(!empty( $settings['info_image_1']['url'] )) : ?>
                        <div class="ss-elm">
                            <img src="<?php echo esc_url($settings['info_image_1']['url']); ?>" alt="<?php if(function_exists('avista_img_alt_text')) { echo avista_img_alt_text( $settings['info_image_1']['url'] ); } ?>">
                        </div>
                        <?php endif; ?>

                        <?php if(!empty( $settings['info_image_2']['url'] )) : ?>
                        <div class="ss-elm wa-fix">
                            <img class="wow slideInLeft" src="<?php echo esc_url($settings['info_image_2']['url']); ?>" alt="<?php if(function_exists('avista_img_alt_text')) { echo avista_img_alt_text( $settings['info_image_2']['url'] ); } ?>">
                        </div>
                        <?php endif; ?>

                        <?php if(!empty( $settings['info_image_3']['url'] )) : ?>
                        <div class="ss-elm wa-fix">
                            <img class="wow slideInLeft" data-wow-delay=".1s" src="<?php echo esc_url($settings['info_image_3']['url']); ?>" alt="<?php if(function_exists('avista_img_alt_text')) { echo avista_img_alt_text( $settings['info_image_3']['url'] ); } ?>">
                        </div>
                        <?php endif; ?>

                        <?php if(!empty( $settings['info_image_4']['url'] )) : ?>
                        <div class="ss-elm wa-fix">
                            <img class="wow slideInLeft" data-wow-delay=".2s" src="<?php echo esc_url($settings['info_image_4']['url']); ?>" alt="<?php if(function_exists('avista_img_alt_text')) { echo avista_img_alt_text( $settings['info_image_4']['url'] ); } ?>">
                        </div>
                        <?php endif; ?>

                    </div>
                </div>
                <?php endif; ?>
            </div>

            <!-- right-form -->
            <div class="as-cta-2-form-wrap">
                <div class="as-cta-2-form-content">
                    <?php if(!empty( $settings['form_title'] )) : ?>
                    <p class="as-p-1 subtitle"><span class="dot"></span>
                        <?php echo wp_kses( $settings['form_title'], true ); ?>
                    </p>
                    <?php endif; ?>

                    <?php if(!empty( $settings['form_title_2'] )) : ?>
                    <h3 class="as-h-1 title">
                        <?php echo wp_kses( $settings['form_title_2'], true ); ?>
                    </h3>
                    <?php endif; ?>
                </div>
                <div class="tx-form">
                    <?php
                        if(!empty( $settings['form_shortcode'] )) {
                            echo do_shortcode( $settings['form_shortcode'] );
                        }
                    ?>
                </div>
            </div>
        </div>
    </div>
</section>
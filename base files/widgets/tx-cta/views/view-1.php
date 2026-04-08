<?php
    if($settings['enable_dark_mode'] === 'yes') {
        $dark_mode = 'has-dark';
    } else {
        $dark_mode = '';
    }
?>
<section class="as-cta-1-area tx-section <?php echo esc_attr($dark_mode); ?>">
    <!-- top-experience -->
    <div class="container as-container-1">
        <div class="as-cta-1-experi">
            <?php if( $settings['enable_count_box'] === 'yes' ) : ?>
            <p class="as-cta-1-experi-title as-h-1">
                <span class="number">
                    <span class="odometer" data-count="<?php echo esc_attr($settings['count_number']); ?>">00</span><?php echo esc_html($settings['count_prefix']); ?>
                </span>
                <?php echo esc_html($settings['count_title']); ?>
            </p>
            <?php endif; ?>

            <?php if( $settings['enable_tags'] === 'yes' ) : ?>
            <div class="as-cta-1-experi-services">
                <?php
                    $id = 1;
                    foreach($settings['tags'] as $list ) :
                    if( $id === 1 ) {
                        $wow_delay = '.2s';
                        $anim_class = 'fadeInLeft2';
                    } else if( $id === 2 ) {
                        $wow_delay = '.1s';
                        $anim_class = 'fadeInLeft2';
                    } else if( $id === 3 ) {
                        $wow_delay = '';
                        $anim_class = 'fadeIn';
                    } else if( $id === 4 ) {
                        $wow_delay = '.1s';
                        $anim_class = 'fadeInRight2';
                    } else if( $id === 5 ) {
                        $wow_delay = '.2s';
                        $anim_class = 'fadeInRight2';
                    } else{
                        $wow_delay = '';
                        $anim_class = 'fadeIn';
                    }
                    $id++;
                ?>
                <a href="<?php echo esc_url($list['tag_link']['url']); ?>"
                target="<?php echo esc_attr($list['tag_link']['is_external'] ? '_blank' : '_self'); ?>"
                rel="<?php echo esc_attr($list['tag_link']['nofollow'] ? 'nofollow' : ''); ?>"
                aria-label="<?php echo esc_attr($list['tag_name']); ?>"
                class="link-elm as-h-1 wow fadeInLeft2"
                data-wow-delay="<?php echo esc_attr($wow_delay); ?>">
                    <?php echo esc_html($list['tag_name']); ?>
                </a>
                <?php endforeach; ?>
            </div>
            <?php endif; ?>

        </div>
    </div>

    <!-- bottom-content -->
    <div class="as-cta-1-bg wa-fix">
        <div class="container as-container-1">
            <div class="as-cta-1-wrap wa-p-relative cta1_trigger">
                <!-- social -->
                <div class="as-cta-1-social">
                    <?php
                        $id = 1;
                        foreach($settings['social_links'] as $list ) :
                        if( $id === 1 ) {
                            $wow_delay = '.2s';
                            $anim_class = 'fadeInLeft2';
                        } else if( $id === 2 ) {
                            $wow_delay = '.1s';
                            $anim_class = 'fadeInLeft2';
                        } else if( $id === 3 ) {
                            $wow_delay = '';
                            $anim_class = 'fadeInRight2';
                        } else if( $id === 4 ) {
                            $wow_delay = '.1s';
                            $anim_class = 'fadeInRight2';
                        } else{
                            $wow_delay = '';
                            $anim_class = 'fadeIn';
                        }
                        $id++;
                     ?>
                    <a href="<?php echo esc_url($list['social_link']['url']); ?>"
                    target="<?php echo esc_attr( $list['social_link']['is_external'] ? '_blank' : '_self' ); ?>"
                    rel="<?php echo esc_attr( $list['social_link']['nofollow'] ? 'nofollow' : '' ); ?>"
                    aria-label="<?php echo esc_attr($list['social_name']); ?>"
                    class="link-elm as-p-1 wow <?php echo esc_attr($anim_class); ?> wa_magnetic_btn_1" data-wow-delay="<?php echo esc_attr($wow_delay); ?>">
                        <?php echo esc_html($list['social_name']); ?>
                        <?php \Elementor\Icons_Manager::render_icon( $list['social_icon'], [ 'aria-hidden' => 'true' ] ); ?>
                    </a>
                    <?php endforeach; ?>
                </div>

                <div class="as-cta-1-content">

                    <?php if(!empty( $settings['sub_title'] )) : ?>
                    <h3 class="as-h-1 title-1 tx-subTitle">
                        <?php echo esc_html($settings['sub_title']); ?>
                    </h3>
                    <?php endif; ?>

                    <?php if(!empty( $settings['title'] )) : ?>
                    <h2 class="as-h-1 title-2 tx-title">
                        <?php echo esc_html($settings['title']); ?>
                    </h2>
                    <?php endif; ?>

                    <div class="btn-wrap">

                        <!-- pr-btn -->
                        <?php if( $settings['enable_button'] === 'yes' ) : ?>
                        <a href="<?php echo esc_url($settings['button_link']['url']); ?>"
                        target="<?php echo esc_attr($settings['button_link']['is_external'] ? '_blank' : '_self'); ?>"
                        rel="<?php echo esc_attr($settings['button_link']['nofollow'] ? 'nofollow' : ''); ?>"
                        aria-label="<?php echo esc_attr($settings['button_text']); ?>" class="as-pr-btn-1 wa_btn_split_1 wa_magnetic_btn_1 tx-button">
                            <span class="text"><?php echo esc_html($settings['button_text']); ?></span>
                            <?php if( $settings['enable_button_icon'] === 'yes' ) : ?>
                            <span class="icon">
                                <span class="icon-fix wa-fix">
                                    <?php \Elementor\Icons_Manager::render_icon( $settings['button_icon'], [ 'aria-hidden' => 'true' ] ); ?>
                                    <?php \Elementor\Icons_Manager::render_icon( $settings['button_icon_2'], [ 'aria-hidden' => 'true' ] ); ?>
                                </span>
                            </span>
                            <?php endif; ?>
                        </a>
                        <?php endif; ?>

                        <?php if( $settings['enable_button_2'] === 'yes' ) : ?>
                        <a href="<?php echo esc_url($settings['button_2_link']['url']); ?>"
                        target="<?php echo esc_attr($settings['button_2_link']['is_external'] ? '_blank' : '_self'); ?>"
                        rel="<?php echo esc_attr($settings['button_2_link']['nofollow'] ? 'nofollow' : ''); ?>"
                        aria-label="<?php echo esc_attr($settings['button_2_text']); ?>" class="as-pr-btn-1 wa_btn_split_1 wa_magnetic_btn_1 tx-button_2">
                            <span class="text">
                                <?php echo esc_html($settings['button_2_text']); ?>
                            </span>
                            <?php if( $settings['enable_button_icon_2'] === 'yes' ) : ?>
                            <?php \Elementor\Icons_Manager::render_icon( $settings['button_2_icon'], [ 'aria-hidden' => 'true' ] ); ?>
                            <?php endif; ?>
                        </a>
                        <?php endif; ?>

                    </div>

                    <?php if( $settings['enable_scroll_down'] === 'yes' ) : ?>
                    <div class="text-center">
                        <a href="<?php echo esc_url($settings['scroll_link']['url']); ?>"
                        target="<?php echo esc_attr($settings['scroll_link']['is_external'] ? '_blank' : '_self'); ?>"
                        rel="<?php echo esc_attr($settings['scroll_link']['nofollow'] ? 'nofollow' : ''); ?>"
                        aria-label="<?php echo esc_html($settings['scroll_text']); ?>" class="as-cta-1-scroll-btn">
                            <div class="icon-elm"></div>
                            <p class="as-p-1 text-elm">
                                <?php echo esc_html($settings['scroll_text']); ?>
                            </p>
                        </a>
                    </div>
                    <?php endif; ?>
                </div>

                <!-- img-1 -->
                 <?php if(!empty( $settings['image_1']['url'] )) : ?>
                <div class="as-cta-1-img-1 wa-fix wa-img-cover">
                    <img src="<?php echo esc_url($settings['image_1']['url']); ?>" alt="<?php if(function_exists('avista_img_alt_text')) { echo avista_img_alt_text( $settings['image_1']['url'] ); } ?>">
                </div>
                <?php endif; ?>

                <!-- img-2 -->
                <?php if(!empty( $settings['image_2']['url'] )) : ?>
                <div class="as-cta-1-img-2 wa-fix wa-img-cover">
                    <img src="<?php echo esc_url($settings['image_2']['url']); ?>" alt="<?php if(function_exists('avista_img_alt_text')) { echo avista_img_alt_text( $settings['image_2']['url'] ); } ?>">
                </div>
                <?php endif; ?>

                <?php if(!empty( $settings['image_3']['url'] )) : ?>
                <div class="as-cta-1-hand-1 wa-fix">
                    <img src="<?php echo esc_url($settings['image_3']['url']); ?>" alt="<?php if(function_exists('avista_img_alt_text')) { echo avista_img_alt_text( $settings['image_3']['url'] ); } ?>">
                </div>
                <?php endif; ?>

                <?php if(!empty( $settings['image_4']['url'] )) : ?>
                <div class="as-cta-1-hand-2 wa-fix">
                    <img src="<?php echo esc_url($settings['image_4']['url']); ?>" alt="<?php if(function_exists('avista_img_alt_text')) { echo avista_img_alt_text( $settings['image_4']['url'] ); } ?>">
                </div>
                <?php endif; ?>
            </div>

        </div>
    </div>
</section>
 <div class="lb-about-10-area wa-p-relative pt-120 wa-fix tx-section">
    <?php if(!empty( $settings['image_1']['url'] )) : ?>
    <div class="lb-about-10-bg wa-img-cover">
        <img src="<?php echo esc_url($settings['image_1']['url']); ?>" alt="<?php echo function_exists('avista_img_alt_text') ? avista_img_alt_text($settings['image_1']['url']) : ''; ?>">
    </div>
    <?php endif; ?>

    <?php if(!empty( $settings['image_2']['url'] )) : ?>
    <img class="lb-about-10-bg-shape wow slideInRight" src="<?php echo esc_url($settings['image_2']['url']); ?>" alt="<?php echo function_exists('avista_img_alt_text') ? avista_img_alt_text($settings['image_2']['url']) : ''; ?>">
    <?php endif; ?>
    <div class="container lb-container-1">
        <div class="lb-about-10-wrap">

            <!-- left-img -->
            <div class="lb-about-10-left wa-p-relative">
                <?php if(!empty( $settings['image_3']['url'] )) : ?>
                <div class="lb-about-10-laptop">
                    <img src="<?php echo esc_url($settings['image_3']['url']); ?>" alt="<?php echo function_exists('avista_img_alt_text') ? avista_img_alt_text($settings['image_3']['url']) : ''; ?>">
                </div>
                <?php endif; ?>

                <?php if(!empty( $settings['image_4']['url'] )) : ?>
                <div class="lb-about-10-img wa-item-parallax">
                    <img src="<?php echo esc_url($settings['image_4']['url']); ?>" alt="<?php echo function_exists('avista_img_alt_text') ? avista_img_alt_text($settings['image_4']['url']) : ''; ?>">
                </div>
                <?php endif; ?>
            </div>

            <!-- right-content -->
            <div class="lb-about-10-content">
                <?php
                    if($settings['enable_title'] === 'yes') {
                    $this->add_render_attribute( 'title', 'class', 'tx-title lb-sec-title-3 wa-split-clr wa-capitalize' );
                        printf('<%1$s %2$s>%3$s</%1$s>',
                            tag_escape($settings['title_tag']),
                            $this->get_render_attribute_string('title'),
                            elh_element_kses_basic( $settings['title'] )
                        );
                    }
				?>
                <?php if( $settings['enable_description'] === 'yes' ) : ?>
                <p class="lb-p-3 disc wow fadeInUp" data-wow-delay=".7s"><?php echo elh_element_kses_intermediate($settings['description']); ?></p>
                <?php endif; ?>

                <?php if( $settings['enable_button'] === 'yes' ) : ?>
                <div class="btn-wrap wow fadeInUp" data-wow-delay="1.2s">
                    <a href="<?php echo esc_url($settings['button_link']['url']); ?>"
                    target="<?php echo esc_attr($settings['button_link']['is_external'] ? '_blank' : '_self'); ?>"
                    rel="<?php echo esc_attr($settings['button_link']['nofollow'] ? 'nofollow' : ''); ?>" class="lb-pr-btn-3 btn-split-right">
                        <span class="text"><?php echo elh_element_kses_intermediate( $settings['button_text'] ); ?></span>
                    </a>
                </div>
                <?php endif; ?>
            </div>
        </div>
    </div>
</div>
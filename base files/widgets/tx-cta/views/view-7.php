<div class="lb-cta-12-area">
    <div class="container lb-container-1">
        <div class="lb-cta-12-wrap wa-p-relative" data-background="<?php echo $settings['image_1']['url'] ? esc_url($settings['image_1']['url']) : ''; ?>">
            <div class="lb-cta-12-content">
                <?php
                    if($settings['enable_title'] === 'yes') {
                    $this->add_render_attribute( 'title', 'class', 'tx-title lb-sec-title-5 wa-split-up wa-capitalize' );
                        printf('<%1$s %2$s>%3$s</%1$s>',
                            tag_escape($settings['title_tag']),
                            $this->get_render_attribute_string('title'),
                            elh_element_kses_basic( $settings['title'] )
                        );
                    }
				?>
                <?php if( $settings['enable_description'] === 'yes' ) : ?>
                <p class="lb-p-5 disc wow fadeInUp" data-wow-duration="2s"><?php echo elh_element_kses_intermediate($settings['description']); ?></p>
                <?php endif; ?>

                <?php if( $settings['enable_app_links'] === 'yes' ) : ?>
                <div class="lb-cta-12-content-link wow fadeInUp" data-wow-delay="2.3s">
                    <?php if(!empty( $settings['app_image_1']['url'] )) : ?>
                    <a href="<?php echo esc_url($settings['app_link_1']['url']); ?>"
                    target="<?php echo esc_attr($settings['app_link_1']['is_external'] ? '_blank' : '_self'); ?>"
                    rel="<?php echo esc_attr($settings['app_link_1']['nofollow'] ? 'nofollow' : ''); ?>"
                     class="link-elm d-inline-block">
                        <img src="<?php echo esc_url($settings['app_image_1']['url']); ?>" alt="<?php echo function_exists('avista_img_alt_text') ? avista_img_alt_text($settings['app_image_1']['url']) : ''; ?>">
                    </a>
                    <?php endif; ?>

                    <?php if(!empty( $settings['app_image_2']['url'] )) : ?>
                    <a href="<?php echo esc_url($settings['app_link_2']['url']); ?>"
                    target="<?php echo esc_attr($settings['app_link_2']['is_external'] ? '_blank' : '_self'); ?>"
                    rel="<?php echo esc_attr($settings['app_link_2']['nofollow'] ? 'nofollow' : ''); ?>"
                     class="link-elm d-inline-block">
                        <img src="<?php echo esc_url($settings['app_image_2']['url']); ?>" alt="<?php echo function_exists('avista_img_alt_text') ? avista_img_alt_text($settings['app_image_2']['url']) : ''; ?>">
                    </a>
                    <?php endif; ?>
                </div>
                <?php endif; ?>
            </div>

            <?php if(!empty( $settings['image_2']['url'] )) : ?>
            <div class="lb-cta-12-img wow slideInUp" data-wow-duration="2s">
                <img src="<?php echo esc_url( $settings['image_2']['url'] ); ?>" alt="<?php if(function_exists('avista_img_alt_text')) { echo avista_img_alt_text( $settings['image_2']['url'] ); } ?>">
            </div>
            <?php endif; ?>
        </div>
    </div>
</div>
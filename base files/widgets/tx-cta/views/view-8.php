<div class="lb-cta-15-area wa-p-relative">
    <div class="container lb-container-2">
        <div class="lb-cta-15-wrap bg-default" data-background="<?php echo $settings['image_1']['url'] ? esc_url($settings['image_1']['url']) : ''; ?>">
            <?php
                if($settings['enable_title'] === 'yes') {
                $this->add_render_attribute( 'title', 'class', 'tx-title lb-h-15 title wa-split-up wa-capitalize' );
                    printf('<%1$s %2$s>%3$s</%1$s>',
                        tag_escape($settings['title_tag']),
                        $this->get_render_attribute_string('title'),
                        elh_element_kses_basic( $settings['title'] )
                    );
                }
            ?>

            <?php if( $settings['enable_button'] === 'yes' ) : ?>
            <div class="btn-wrap wow fadeInUp" data-wow-delay=".5s">
                <a href="<?php echo esc_url($settings['button_link']['url']); ?>"
                    target="<?php echo esc_attr($settings['button_link']['is_external'] ? '_blank' : '_self'); ?>"
                    rel="<?php echo esc_attr($settings['button_link']['nofollow'] ? 'nofollow' : ''); ?>" class="lb-pr-btn-15 btn-split-right">
                    <span class="text"><?php echo elh_element_kses_intermediate( $settings['button_text'] ); ?></span>
                </a>
            </div>
            <?php endif; ?>
        </div>
    </div>
</div>
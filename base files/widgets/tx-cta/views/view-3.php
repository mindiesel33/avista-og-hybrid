<?php
    if($settings['enable_dark_mode'] === 'yes') {
        $dark_mode = 'has-dark';
    } else {
        $dark_mode = '';
    }
?>
<section class="as-our-story-2-area pt-130 pb-90 tx-section <?php echo esc_attr($dark_mode); ?>">
    <div class="container as-container-2">

        <!-- section-title -->
        <div class="as-our-story-2-sec-title mb-75">
            <?php if( $settings['enable_sub_title'] === 'yes' ) : ?>
            <h6 class="as-subtitle-2 tx-subTitle">
                <?php echo elh_element_kses_intermediate($settings['sub_title']); ?>
            </h6>
            <?php endif; ?>

            <?php
                if($settings['enable_title'] === 'yes') {
                $this->add_render_attribute( 'title', 'class', 'tx-title as-sec-title-2 wa_title_spilt_1' );
                    printf('<%1$s %2$s>%3$s</%1$s>',
                        tag_escape($settings['title_tag']),
                        $this->get_render_attribute_string('title'),
                        elh_element_kses_basic( $settings['title'] )
                    );
                }
            ?>
        </div>

        <div class="as-our-story-2-wrap">

            <!-- left -->
            <?php if(!empty( $settings['image_1']['url'] )) : ?>
            <div class="as-our-story-2-img wa-img-cover wa-fix">
                <img class="wa_parallax_img" src="<?php echo esc_url($settings['image_1']['url']); ?>" alt="<?php if(function_exists('avista_img_alt_text')) { echo avista_img_alt_text( $settings['image_1']['url'] ); } ?>">
            </div>
            <?php endif; ?>

            <!-- right -->
            <div class="as-our-story-2-right">
                <?php if(!empty( $settings['image_2']['url'] )) : ?>
                <div class="as-our-story-2-img-2 wa-fix wa-img-cover">
                    <img class="wa_parallax_img" src="<?php echo esc_url($settings['image_2']['url']); ?>" alt="<?php if(function_exists('avista_img_alt_text')) { echo avista_img_alt_text( $settings['image_2']['url'] ); } ?>">
                </div>
                <?php endif; ?>

                <?php if( $settings['enable_description'] === 'yes' ) : ?>
                <p class="as-p-2 right-disc wow fadeInUp2 tx-description" data-wow-delay=".1s">
                    <?php echo elh_element_kses_intermediate($settings['description']); ?>
                </p>
                <?php endif; ?>

                <?php if( $settings['enable_button'] === 'yes' ) : ?>
                <div class="btn-wrap wow fadeInUp2" data-wow-delay=".2s">
					<a href="<?php echo esc_url($settings['button_link']['url']); ?>"
						target="<?php echo esc_attr($settings['button_link']['is_external'] ? '_blank' : '_self'); ?>"
						rel="<?php echo esc_attr($settings['button_link']['nofollow'] ? 'nofollow' : ''); ?>"
						class="as-pr-btn-2 tx-button">
                        <?php if(!empty( $settings['button_icon'] )) : ?>
                        <span class="icon" >
                            <?php \Elementor\Icons_Manager::render_icon( $settings['button_icon'], ['aria-hidden' => 'true'] ); ?>
                        </span>
                        <?php endif; ?>
						<span class="text"><?php echo elh_element_kses_intermediate( $settings['button_text'] ); ?></span>
					</a>
                </div>
				<?php endif; ?>
            </div>
        </div>
    </div>
</section>
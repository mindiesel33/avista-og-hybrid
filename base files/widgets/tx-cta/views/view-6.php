<div class="lb-testimonial-12-area wa-fix wa-p-relative">
	<?php if(!empty( $settings['image_1']['url'] )) : ?>
	<div class="lb-testimonial-12-bg-img">
		<img class="wow zoomInRight" data-wow-duration="1.5s" src="<?php echo esc_url( $settings['image_1']['url'] ); ?>" alt="<?php if(function_exists('avista_img_alt_text')) { echo avista_img_alt_text( $settings['image_1']['url'] ); } ?>">
	</div>
	<?php endif; ?>
	<div class="container lb-container-1">
		<div class="lb-testimonial-12-item">
			<?php if(!empty( $settings['quote_icon'] )) : ?>
			<div class="icon">
				<?php \Elementor\Icons_Manager::render_icon( $settings['quote_icon'], ['aria-hidden' => 'true'] ); ?>
			</div>
			<?php endif; ?>

			<?php if( $settings['enable_description'] === 'yes' ) : ?>
			<p class="lb-p-5 comment wa-split-up wa-capitalize">
				<?php echo elh_element_kses_intermediate($settings['description']); ?>
			</p>
			<?php endif; ?>
			<?php if(!empty( $settings['image_2']['url'] )) : ?>
			<div class="author-img wa-fix wa-img-cover">
				<img src="<?php echo esc_url( $settings['image_2']['url'] ); ?>" alt="<?php if(function_exists('avista_img_alt_text')) { echo avista_img_alt_text( $settings['image_2']['url'] ); } ?>">
			</div>
			<?php endif; ?>
		</div>
	</div>

	<?php if( $settings['enable_shape'] === 'yes' ) : ?>
	<div class="lb-testimonial-12-bg-line">
		<span class="single-line"></span>
		<span class="single-line"></span>
		<span class="single-line"></span>
		<span class="single-line"></span>
		<span class="single-line"></span>
		<span class="single-line"></span>
	</div>
	<?php endif; ?>
</div>
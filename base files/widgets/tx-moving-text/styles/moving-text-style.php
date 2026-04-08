<?php
use Elementor\Controls_Manager;
use \Elementor\Group_Control_Typography;

$this->start_controls_section(
    '_section_style_moving_text',
    [
        'label' => __( 'Moving Text STYLE', 'avista-core' ),
        'tab'   => Controls_Manager::TAB_STYLE,
    ]
);

// moving text box bg color
$this->add_control(
    'moving_text_box_bg_color',
    [
        'label'     => __( 'Box Background Color', 'avista-core' ),
        'type'      => Controls_Manager::COLOR,
        'selectors' => [
            '{{WRAPPER}} .as-marquee-text-1-wrap-1' => 'background-color: {{VALUE}};',
        ],
    ]
);

// moving text color
$this->add_control(
    'moving_text_color',
    [
        'label'     => __( 'Text Color', 'avista-core' ),
        'type'      => Controls_Manager::COLOR,
        'selectors' => [
            '{{WRAPPER}} .as-marquee-text-1-content .text-elm' => 'color: {{VALUE}};',
        ],
    ]
);

// typography
$this->add_group_control(
    Group_Control_Typography::get_type(),
    [
        'name'     => 'moving_text_typography',
        'label'    => __( 'Typography', 'avista-core' ),
        'selector' => '{{WRAPPER}} .as-marquee-text-1-content .text-elm',
    ]
);

// box 2 bg color
$this->add_control(
    'moving_text_box_2_bg_color',
    [
        'label'     => __( 'Box 2 Background Color', 'avista-core' ),
        'type'      => Controls_Manager::COLOR,
        'selectors' => [
            '{{WRAPPER}} .as-marquee-text-1-wrap-2' => 'background-color: {{VALUE}};',
        ],
        'condition' => [
            'design_style' => 'style_1',
        ],
    ]
);

// box 2 color
$this->add_control(
    'moving_text_box_2_color',
    [
        'label'     => __( 'Box 2 Color', 'avista-core' ),
        'type'      => Controls_Manager::COLOR,
        'selectors' => [
            '{{WRAPPER}} .as-marquee-text-1-wrap-2 .text-elm' => 'color: {{VALUE}};',
        ],
        'condition' => [
            'design_style' => 'style_1',
        ],
    ]
);

// typography box 2
$this->add_group_control(
    Group_Control_Typography::get_type(),
    [
        'name'     => 'moving_text_box_2_typography',
        'label'    => __( 'Box 2 Typography', 'avista-core' ),
        'selector' => '{{WRAPPER}} .as-marquee-text-1-wrap-2 .text-elm',
        'condition' => [
            'design_style' => 'style_1',
        ],
    ]
);


$this->end_controls_section();
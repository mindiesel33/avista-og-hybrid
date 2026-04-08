<?php
use Elementor\Controls_Manager;
use \Elementor\Group_Control_Border;
use \Elementor\Group_Control_Typography;

$this->start_controls_section(
    '_section_style_count',
    [
        'label' => __( 'COUNT STYLE', 'avista-core' ),
        'tab'   => Controls_Manager::TAB_STYLE,
    ]
);


// count number color
$this->add_control(
    'info_box_count_color',
    [
        'label'     => __( 'Count Number Color', 'avista-core' ),
        'type'      => Controls_Manager::COLOR,
        'selectors' => [
            '{{WRAPPER}} .as-cta-1-experi-title .number .odometer' => 'color: {{VALUE}};',
        ],
    ]
);

// typography
$this->add_group_control(
    Group_Control_Typography::get_type(),
    [
        'name'     => 'info_box_count_typography',
        'label'    => __( 'Typography', 'avista-core' ),
        'selector' => '{{WRAPPER}} .as-cta-1-experi-title .number .odometer',
    ]
);

// count prefix color
$this->add_control(
    'info_box_count_prefix_color',
    [
        'label'     => __( 'Count Prefix Color', 'avista-core' ),
        'type'      => Controls_Manager::COLOR,
        'selectors' => [
            '{{WRAPPER}} .as-cta-1-experi-title .number' => 'color: {{VALUE}};',
        ],
    ]
);

// typography
$this->add_group_control(
    Group_Control_Typography::get_type(),
    [
        'name'     => 'info_box_count_prefix_typography',
        'label'    => __( 'Typography', 'avista-core' ),
        'selector' => '{{WRAPPER}} .as-cta-1-experi-title .number',
    ]
);

// count title color
$this->add_control(
    'info_box_count_title_color',
    [
        'label'     => __( 'Count Title Color', 'avista-core' ),
        'type'      => Controls_Manager::COLOR,
        'selectors' => [
            '{{WRAPPER}} .as-cta-1-experi-title' => 'color: {{VALUE}};',
        ],
    ]
);

// typography
$this->add_group_control(
    Group_Control_Typography::get_type(),
    [
        'name'     => 'info_box_count_title_typography',
        'label'    => __( 'Typography', 'avista-core' ),
        'selector' => '{{WRAPPER}} .as-cta-1-experi-title',
    ]
);

// end
$this->end_controls_section();
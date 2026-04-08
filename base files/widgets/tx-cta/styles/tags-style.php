<?php
use Elementor\Controls_Manager;
use \Elementor\Group_Control_Border;
use \Elementor\Group_Control_Typography;

$this->start_controls_section(
    '_section_style_tags',
    [
        'label' => __( 'TAGS STYLE', 'avista-core' ),
        'tab'   => Controls_Manager::TAB_STYLE,
    ]
);

// tag color
$this->add_control(
    'cta_tags_color',
    [
        'label'     => __( 'Tag Color', 'avista-core' ),
        'type'      => Controls_Manager::COLOR,
        'selectors' => [
            '{{WRAPPER}} .as-cta-1-experi-services .link-elm' => 'color: {{VALUE}};',
        ],
    ]
);

// typography
$this->add_group_control(
    Group_Control_Typography::get_type(),
    [
        'name'     => 'cta_tags_typography',
        'label'    => __( 'Typography', 'avista-core' ),
        'selector' => '{{WRAPPER}} .as-cta-1-experi-services .link-elm',
    ]
);

// tag background color
$this->add_control(
    'cta_tags_bg_color',
    [
        'label'     => __( 'Tag Background Color', 'avista-core' ),
        'type'      => Controls_Manager::COLOR,
        'selectors' => [
            '{{WRAPPER}} .as-cta-1-experi-services .link-elm' => 'background-color: {{VALUE}};',
        ],
    ]
);

// tag border group
$this->add_group_control(
    Group_Control_Border::get_type(),
    [
        'name'      => 'cta_tags_border',
        'label'     => __( 'Border', 'avista-core' ),
        'selector'  => '{{WRAPPER}} .as-cta-1-experi-services .link-elm',
    ]
);

// tag border radius
$this->add_control(
    'cta_tags_border_radius',
    [
        'label'      => __( 'Border Radius', 'avista-core' ),
        'type'       => Controls_Manager::DIMENSIONS,
        'size_units' => [ 'px', '%', 'em' ],
        'selectors'  => [
            '{{WRAPPER}} .as-cta-1-experi-services .link-elm' => 'border-radius: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
        ],
    ]
);

// tag hover color
$this->add_control(
    'cta_tags_hover_color',
    [
        'label'     => __( 'Tag Hover Color', 'avista-core' ),
        'type'      => Controls_Manager::COLOR,
        'selectors' => [
            '{{WRAPPER}} .as-cta-1-experi-services .link-elm:hover' => 'color: {{VALUE}};',
        ],
    ]
);

// tag hover background color
$this->add_control(
    'cta_tags_hover_bg_color',
    [
        'label'     => __( 'Tag Hover Background Color', 'avista-core' ),
        'type'      => Controls_Manager::COLOR,
        'selectors' => [
            '{{WRAPPER}} .as-cta-1-experi-services .link-elm:hover' => 'background-color: {{VALUE}};',
        ],
    ]
);


// end
$this->end_controls_section();
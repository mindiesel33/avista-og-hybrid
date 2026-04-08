<?php
use Elementor\Controls_Manager;
use \Elementor\Group_Control_Border;
use \Elementor\Group_Control_Typography;

$this->start_controls_section(
    '_section_author_box_style',
    [
        'label' => __( 'AUTHOR BOX STYLE', 'avista-core' ),
        'tab'   => Controls_Manager::TAB_STYLE,
    ]
);

// author box background color
$this->add_control(
    'author_box_background_color',
    [
        'label'     => __( 'Background Color', 'avista-core' ),
        'type'      => Controls_Manager::COLOR,
        'selectors' => [
            '{{WRAPPER}} .as-cta-2-booking' => 'background-color: {{VALUE}};',
        ],
    ]
);

// author box border group control
$this->add_group_control(
    Group_Control_Typography::get_type(),
    [
        'name'     => 'author_box_typography',
        'label'    => __( 'Typography', 'avista-core' ),
        'selector' => '
            {{WRAPPER}} .as-cta-2-booking
        ',
    ]
);

// border radius
$this->add_responsive_control(
    'author_box_border_radius',
    [
        'label'      => __( 'Border Radius', 'avista-core' ),
        'type'       => Controls_Manager::DIMENSIONS,
        'size_units' => ['px', '%'],
        'selectors'  => [
            '{{WRAPPER}} .as-cta-2-booking' => 'border-radius: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
        ],
    ]
);

// title color
$this->add_control(
    'author_box_title_color',
    [
        'label'     => __( 'Title Color', 'avista-core' ),
        'type'      => Controls_Manager::COLOR,
        'selectors' => [
            '{{WRAPPER}} .as-cta-2-booking .title' => 'color: {{VALUE}};',
        ],
    ]
);

// typography
$this->add_group_control(
    Group_Control_Typography::get_type(),
    [
        'name'     => 'author_box_title_typography',
        'label'    => __( 'Title Typography', 'avista-core' ),
        'selector' => '
            {{WRAPPER}} .as-cta-2-booking .title
        ',
    ]
);

// description color
$this->add_control(
    'author_box_description_color',
    [
        'label'     => __( 'Description Color', 'avista-core' ),
        'type'      => Controls_Manager::COLOR,
        'selectors' => [
            '{{WRAPPER}} .as-cta-2-booking .disc' => 'color: {{VALUE}};',
        ],
    ]
);

// typography
$this->add_group_control(
    Group_Control_Typography::get_type(),
    [
        'name'     => 'author_box_description_typography',
        'label'    => __( 'Description Typography', 'avista-core' ),
        'selector' => '
            {{WRAPPER}} .as-cta-2-booking .disc
        ',
    ]
);

// button color
$this->add_control(
    'author_box_button_color',
    [
        'label'     => __( 'Button Color', 'avista-core' ),
        'type'      => Controls_Manager::COLOR,
        'selectors' => [
            '{{WRAPPER}} .as-pr-btn-1-v2' => 'color: {{VALUE}};',
        ],
    ]
);

// button typography
$this->add_group_control(
    Group_Control_Typography::get_type(),
    [
        'name'     => 'author_box_button_typography',
        'label'    => __( 'Button Typography', 'avista-core' ),
        'selector' => '
            {{WRAPPER}} .as-pr-btn-1-v2
        ',
    ]
);

// button background color
$this->add_control(
    'author_box_button_background_color',
    [
        'label'     => __( 'Button Background Color', 'avista-core' ),
        'type'      => Controls_Manager::COLOR,
        'selectors' => [
            '{{WRAPPER}} .as-pr-btn-1-v2' => 'background-color: {{VALUE}};',
        ],
    ]
);

// button hover color
$this->add_control(
    'author_box_button_hover_color',
    [
        'label'     => __( 'Button Hover Color', 'avista-core' ),
        'type'      => Controls_Manager::COLOR,
        'selectors' => [
            '{{WRAPPER}} .as-pr-btn-1-v2:hover' => 'color: {{VALUE}};',
        ],
    ]
);

// button hover background color
$this->add_control(
    'author_box_button_hover_background_color',
    [
        'label'     => __( 'Button Hover Background Color', 'avista-core' ),
        'type'      => Controls_Manager::COLOR,
        'selectors' => [
            '{{WRAPPER}} .as-pr-btn-1-v2::after' => 'background-color: {{VALUE}};',
        ],
    ]
);

// info color
$this->add_control(
    'author_box_info_color',
    [
        'label'     => __( 'Info Color', 'avista-core' ),
        'type'      => Controls_Manager::COLOR,
        'selectors' => [
            '{{WRAPPER}} .as-p-1.mail' => 'color: {{VALUE}};',
        ],
    ]
);

// typography
$this->add_group_control(
    Group_Control_Typography::get_type(),
    [
        'name'     => 'author_box_info_typography',
        'label'    => __( 'Info Typography', 'avista-core' ),
        'selector' => '
            {{WRAPPER}} .as-p-1.mail
        ',
    ]
);

// mail color
$this->add_control(
    'author_box_mail_color',
    [
        'label'     => __( 'Mail Color', 'avista-core' ),
        'type'      => Controls_Manager::COLOR,
        'selectors' => [
            '{{WRAPPER}} .as-cta-2-booking .mail a' => 'color: {{VALUE}};',
        ],
    ]
);

// mail typography
$this->add_group_control(
    Group_Control_Typography::get_type(),
    [
        'name'     => 'author_box_mail_typography',
        'label'    => __( 'Mail Typography', 'avista-core' ),
        'selector' => '
            {{WRAPPER}} .as-cta-2-booking .mail a
        ',
    ]
);

// author rigt titler color
$this->add_control(
    'author_box_right_title_color',
    [
        'label'     => __( 'Right Title Color', 'avista-core' ),
        'type'      => Controls_Manager::COLOR,
        'selectors' => [
            '{{WRAPPER}} .as-cta-2-manager .text-elm' => 'color: {{VALUE}};',
        ],
    ]
);

// author right title typography
$this->add_group_control(
    Group_Control_Typography::get_type(),
    [
        'name'     => 'author_box_right_title_typography',
        'label'    => __( 'Right Title Typography', 'avista-core' ),
        'selector' => '
            {{WRAPPER}} .as-cta-2-manager .text-elm
        ',
    ]
);

// info box title color
$this->add_control(
    'author_box_info_box_title_color',
    [
        'label'     => __( 'Info Box Title Color', 'avista-core' ),
        'type'      => Controls_Manager::COLOR,
        'selectors' => [
            '{{WRAPPER}} .as-cta-2-projects .title' => 'color: {{VALUE}};',
        ],
    ]
);

// typography
$this->add_group_control(
    Group_Control_Typography::get_type(),
    [
        'name'     => 'author_box_info_box_title_typography',
        'label'    => __( 'Info Box Title Typography', 'avista-core' ),
        'selector' => '
            {{WRAPPER}} .as-cta-2-projects .title
        ',
    ]
);

// info button color
$this->add_control(
    'author_box_info_button_color',
    [
        'label'     => __( 'Info Button Color', 'avista-core' ),
        'type'      => Controls_Manager::COLOR,
        'selectors' => [
            '{{WRAPPER}} .as-cta-2-projects .as-pr-btn-1' => 'color: {{VALUE}};',
        ],
    ]
);

// info button bg color
$this->add_control(
    'author_box_info_button_bg_color',
    [
        'label'     => __( 'Info Button Background Color', 'avista-core' ),
        'type'      => Controls_Manager::COLOR,
        'selectors' => [
            '{{WRAPPER}} .as-cta-2-projects .as-pr-btn-1' => 'background-color: {{VALUE}};',
        ],
    ]
);

// info button typography
$this->add_group_control(
    Group_Control_Typography::get_type(),
    [
        'name'     => 'author_box_info_button_typography',
        'label'    => __( 'Info Button Typography', 'avista-core' ),
        'selector' => '
            {{WRAPPER}} .as-cta-2-projects .as-pr-btn-1
        ',
    ]
);

// button hover text color
$this->add_control(
    'author_box_info_button_hover_color',
    [
        'label'     => __( 'Info Button Hover Text Color', 'avista-core' ),
        'type'      => Controls_Manager::COLOR,
        'selectors' => [
            '{{WRAPPER}} .as-cta-2-projects .as-pr-btn-1:hover' => 'color: {{VALUE}};',
        ],
    ]
);

// button hover background color
$this->add_control(
    'author_box_info_button_hover_bg_color',
    [
        'label'     => __( 'Info Button Hover Background Color', 'avista-core' ),
        'type'      => Controls_Manager::COLOR,
        'selectors' => [
            '{{WRAPPER}} .as-cta-2-projects .as-pr-btn-1:hover' => 'background-color: {{VALUE}};',
        ],
    ]
);

// end
$this->end_controls_section();
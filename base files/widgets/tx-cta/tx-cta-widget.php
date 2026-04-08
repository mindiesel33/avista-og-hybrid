<?php

namespace ElementHelper\Widget;

use \Elementor\Controls_Manager;
use \Elementor\Repeater;
use \Elementor\Utils;

defined( 'ABSPATH' ) || die();

class Tx_Cta extends Element_El_Widget {

    /**
     * Get widget name.
     *
     * Retrieve Avista Core widget name.
     *
     * @return string Widget name.
     * @since 1.0.0
     * @access public
     *
     */
    public function get_name() {
        return 'tx_cta';
    }

    /**
     * Get widget title.
     *
     * @return string Widget title.
     * @since 1.0.0
     * @access public
     *
     */
    public function get_title() {
        return __( 'TX Cta', 'avista-core' );
    }

    public function get_custom_help_url() {
        return 'http://elementor.themexriver.com/widgets/gradient-heading/';
    }

    /**
     * Get widget icon.
     *
     * @return string Widget icon.
     * @since 1.0.0
     * @access public
     *
     */
    public function get_icon() {
        return 'elh-widget-icon eicon-t-letter';
    }

    public function get_keywords() {
        return ['btn', 'cta', 'avista', 'avista cta'];
    }

    public function elh_element_animations() {
        return [
            'none'              => __( 'None', 'telnet-core' ),
            'fadeIn'            => __( 'Fade In', 'telnet-core' ),
            'fadeInUp'          => __( 'Fade In Up', 'telnet-core' ),
            'fadeInDown'        => __( 'Fade In Down', 'telnet-core' ),
            'fadeInLeft'        => __( 'Fade In Left', 'telnet-core' ),
            'fadeInRight'       => __( 'Fade In Right', 'telnet-core' ),
            'fadeInUpBig'       => __( 'Fade In Up Big', 'telnet-core' ),
            'fadeInDownBig'     => __( 'Fade In Down Big', 'telnet-core' ),
            'fadeInLeftBig'     => __( 'Fade In Left Big', 'telnet-core' ),
            'fadeInRightBig'    => __( 'Fade In Right Big', 'telnet-core' ),
            'bounceIn'          => __( 'Bounce In', 'telnet-core' ),
            'bounceInUp'        => __( 'Bounce In Up', 'telnet-core' ),
            'bounceInDown'      => __( 'Bounce In Down', 'telnet-core' ),
            'bounceInLeft'      => __( 'Bounce In Left', 'telnet-core' ),
            'bounceInRight'     => __( 'Bounce In Right', 'telnet-core' ),
            'rotateIn'          => __( 'Rotate In', 'telnet-core' ),
            'rotateInUpLeft'    => __( 'Rotate In Up Left', 'telnet-core' ),
            'rotateInDownLeft'  => __( 'Rotate In Down Left', 'telnet-core' ),
            'rotateInUpRight'   => __( 'Rotate In Up Right', 'telnet-core' ),
            'rotateInDownRight' => __( 'Rotate In Down Right', 'telnet-core' ),
            'lightSpeedIn'      => __( 'Light Speed In', 'telnet-core' ),
            'rollIn'            => __( 'Roll In', 'telnet-core' ),
            'zoomIn'            => __( 'Zoom In', 'telnet-core' ),
            'zoomInUp'          => __( 'Zoom In Up', 'telnet-core' ),
            'zoomInDown'        => __( 'Zoom In Down', 'telnet-core' ),
            'zoomInLeft'        => __( 'Zoom In Left', 'telnet-core' ),
            'zoomInRight'       => __( 'Zoom In Right', 'telnet-core' ),
            'slideInUp'         => __( 'Slide In Up', 'telnet-core' ),
            'slideInDown'       => __( 'Slide In Down', 'telnet-core' ),
            'slideInLeft'       => __( 'Slide In Left', 'telnet-core' ),
            'slideInRight'      => __( 'Slide In Right', 'telnet-core' ),
        ];
    }

    protected function register_content_controls() {

        //Settings
        $this->start_controls_section(
            '_section_choose_design',
            [
                'label' => __( 'Choose Design', 'avista-core' ),
                'tab'   => Controls_Manager::TAB_CONTENT,
            ]
        );

        $this->add_control(
            'design_style',
            [
                'label'              => __( 'Design Style', 'avista-core' ),
                'type'               => Controls_Manager::SELECT,
                'options'            => [
                    'style_1' => __( 'Style 1: Home 1', 'avista-core' ),
                    'style_2' => __( 'Style 2: Home 1', 'avista-core' ),
                    'style_3' => __( 'Style 3: Home 4', 'avista-core' ),
                    'style_4' => __( 'Style 4: Home 4', 'avista-core' ),
                ],
                'default'            => 'style_1',
                'frontend_available' => true,
                'style_transfer'     => true,
            ]
        );

        $this->end_controls_section();

        // images
        $this->start_controls_section(
            '_section_images',
            [
                'label' => __( 'Images', 'avista-core' ),
                'tab'   => Controls_Manager::TAB_CONTENT,
            ]
        );

        // IMAGE_1
        $this->add_control(
            'image_1',
            [
                'label'       => __( 'Image 1', 'avista-core' ),
                'type'        => Controls_Manager::MEDIA,
                'label_block' => true,
                'default'     => [
                    'url' => \Elementor\Utils::get_placeholder_image_src(),
                ],
            ]
        );

        // IMAGE_2
        $this->add_control(
            'image_2',
            [
                'label'       => __( 'Image 2', 'avista-core' ),
                'type'        => Controls_Manager::MEDIA,
                'label_block' => true,
                'default'     => [
                    'url' => \Elementor\Utils::get_placeholder_image_src(),
                ],
            ]
        );

        // image_3
        $this->add_control(
            'image_3',
            [
                'label'       => __( 'Image 3', 'avista-core' ),
                'type'        => Controls_Manager::MEDIA,
                'label_block' => true,
                'default'     => [
                    'url' => \Elementor\Utils::get_placeholder_image_src(),
                ],
                'condition'   => [
                    'design_style' => ['style_1', 'style_2'],
                ]
            ]
        );

        // image_4
        $this->add_control(
            'image_4',
            [
                'label'       => __( 'Image 4', 'avista-core' ),
                'type'        => Controls_Manager::MEDIA,
                'label_block' => true,
                'default'     => [
                    'url' => \Elementor\Utils::get_placeholder_image_src(),
                ],
                'condition'   => [
                    'design_style' => ['style_1', 'style_2'],
                ]
            ]
        );

        // END
        $this->end_controls_section();

        $this->start_controls_section(
            '_section_title',
            [
                'label' => __( 'Title & Description', 'avista-core' ),
                'tab'   => Controls_Manager::TAB_CONTENT,
            ]
        );

        // sub_title
        $this->add_control(
            'sub_title',
            [
                'label'       => __( 'Sub Title', 'avista-core' ),
                'label_block' => true,
                'type'        => Controls_Manager::TEXTAREA,
                'rows'        => 4,
                'default'     => 'Sub Title',
                'placeholder' => __( 'Sub Title Text', 'avista-core' ),
                'dynamic'     => [
                    'active' => true,
                ],
                'condition'   => [
                    'enable_sub_title' => 'yes',
                ],
            ]
        );

        $this->add_control(
            'title',
            [
                'label'       => __( 'Title', 'avista-core' ),
                'label_block' => true,
                'type'        => Controls_Manager::TEXTAREA,
                'rows'        => 4,
                'default'     => 'Heading Title',
                'placeholder' => __( 'Heading Text', 'avista-core' ),
                'dynamic'     => [
                    'active' => true,
                ],
                'condition'   => [
                    'enable_title' => 'yes',
                ],
            ]
        );

        $this->add_control(
            'title_tag',
            [
                'label'     => __( 'Title HTML Tag', 'avista-core' ),
                'type'      => Controls_Manager::CHOOSE,
                'options'   => [
                    'h1' => [
                        'title' => __( 'H1', 'avista-core' ),
                        'icon'  => 'eicon-editor-h1',
                    ],
                    'h2' => [
                        'title' => __( 'H2', 'avista-core' ),
                        'icon'  => 'eicon-editor-h2',
                    ],
                    'h3' => [
                        'title' => __( 'H3', 'avista-core' ),
                        'icon'  => 'eicon-editor-h3',
                    ],
                    'h4' => [
                        'title' => __( 'H4', 'avista-core' ),
                        'icon'  => 'eicon-editor-h4',
                    ],
                    'h5' => [
                        'title' => __( 'H5', 'avista-core' ),
                        'icon'  => 'eicon-editor-h5',
                    ],
                    'h6' => [
                        'title' => __( 'H6', 'avista-core' ),
                        'icon'  => 'eicon-editor-h6',
                    ],
                ],
                'default'   => 'h2',
                'toggle'    => false,
                'condition' => [
                    'enable_title' => 'yes',
                ],
            ]
        );

        // description
        $this->add_control(
            'description',
            [
                'label'       => __( 'Description', 'avista-core' ),
                'label_block' => true,
                'type'        => Controls_Manager::TEXTAREA,
                'rows'        => 4,
                'default'     => 'The opportunity to work abroad is a popular prospect, one',
                'placeholder' => __( 'Description Text', 'avista-core' ),
                'dynamic'     => [
                    'active' => true,
                ],
                'condition'   => [
                    'enable_description' => 'yes',
                ],
            ]
        );

        $this->end_controls_section();

        // BUTTON
        $this->start_controls_section(
            '_section_button',
            [
                'label'     => __( 'Button', 'avista-core' ),
                'tab'       => Controls_Manager::TAB_CONTENT,
                'condition' => [
                    'enable_button' => 'yes',
                ],
            ]
        );

        // enable button
        $this->add_control(
            'enable_button',
            [
                'label'        => __( 'Enable Button', 'avista-core' ),
                'type'         => Controls_Manager::SWITCHER,
                'label_on'     => __( 'Show', 'avista-core' ),
                'label_off'    => __( 'Hide', 'avista-core' ),
                'return_value' => 'yes',
                'default'      => 'yes',
            ]
        );

        // BUTTON TEXT
        $this->add_control(
            'button_text',
            [
                'label'       => __( 'Button Text', 'avista-core' ),
                'label_block' => true,
                'type'        => Controls_Manager::TEXT,
                'default'     => __( 'Button Text', 'avista-core' ),
                'placeholder' => __( 'Button Text', 'avista-core' ),
                'dynamic'     => [
                    'active' => true,
                ],
            ]
        );

        // BUTTON LINK
        $this->add_control(
            'button_link',
            [
                'label'       => __( 'Button Link', 'avista-core' ),
                'label_block' => true,
                'type'        => Controls_Manager::URL,
                'placeholder' => __( 'https://your-link.com', 'avista-core' ),
                'dynamic'     => [
                    'active' => true,
                ],
            ]
        );

        // ENABLE BUTTON ICON
        $this->add_control(
            'enable_button_icon',
            [
                'label'        => __( 'Enable Button Icon', 'avista-core' ),
                'type'         => Controls_Manager::SWITCHER,
                'label_on'     => __( 'Show', 'avista-core' ),
                'label_off'    => __( 'Hide', 'avista-core' ),
                'return_value' => 'yes',
                'default'      => 'no',
            ]
        );

        // BUTTON ICON
        $this->add_control(
            'button_icon',
            [
                'label'       => __( 'Button Icon', 'avista-core' ),
                'label_block' => true,
                'type'        => Controls_Manager::ICONS,
                'default'     => [
                    'value'   => 'fas fa-angle-right',
                    'library' => 'fa-solid',
                ],
                'condition'   => [
                    'enable_button_icon' => 'yes',
                ],
            ]
        );

        // button_icon_2
        $this->add_control(
            'button_icon_2',
            [
                'label'       => __( 'Button Icon 2', 'avista-core' ),
                'label_block' => true,
                'type'        => Controls_Manager::ICONS,
                'default'     => [
                    'value'   => 'fas fa-angle-right',
                    'library' => 'fa-solid',
                ],
                'condition'   => [
                    'enable_button_icon' => 'yes',
                    'design_style'       => ['style_1', 'style_2'],
                ],
            ]
        );


        // enable_button_2
        $this->add_control(
            'enable_button_2',
            [
                'label'        => __( 'Enable Button 2', 'avista-core' ),
                'type'         => Controls_Manager::SWITCHER,
                'label_on'     => __( 'Show', 'avista-core' ),
                'label_off'    => __( 'Hide', 'avista-core' ),
                'return_value' => 'yes',
                'default'      => 'no',
                'condition'   => [
                    'design_style'       => ['style_1'],
                ],
            ]
        );

        // button_2_text
        $this->add_control(
            'button_2_text',
            [
                'label'       => __( 'Button 2 Text', 'avista-core' ),
                'label_block' => true,
                'type'        => Controls_Manager::TEXT,
                'default'     => __( 'Button 2 Text', 'avista-core' ),
                'placeholder' => __( 'Button 2 Text', 'avista-core' ),
                'dynamic'     => [
                    'active' => true,
                ],
                'condition'   => [
                    'enable_button_2' => 'yes',
                    'design_style'       => ['style_1'],
                ],
            ]
        );

        // button_2_link
        $this->add_control(
            'button_2_link',
            [
                'label'       => __( 'Button 2 Link', 'avista-core' ),
                'label_block' => true,
                'type'        => Controls_Manager::URL,
                'placeholder' => __( 'https://your-link.com', 'avista-core' ),
                'dynamic'     => [
                    'active' => true,
                ],
                'condition'   => [
                    'enable_button_2' => 'yes',
                    'design_style'       => ['style_1'],
                ],
            ]
        );

        // enable_button_icon_2
        $this->add_control(
            'enable_button_icon_2',
            [
                'label'        => __( 'Enable Button Icon 2', 'avista-core' ),
                'type'         => Controls_Manager::SWITCHER,
                'label_on'     => __( 'Show', 'avista-core' ),
                'label_off'    => __( 'Hide', 'avista-core' ),
                'return_value' => 'yes',
                'default'      => 'no',
                'condition'    => [
                    'enable_button_2' => 'yes',
                    'design_style'       => ['style_1'],
                ],
            ]
        );

        // button_icon_2
        $this->add_control(
            'button_2_icon',
            [
                'label'       => __( 'Button Icon 2', 'avista-core' ),
                'label_block' => true,
                'type'        => Controls_Manager::ICONS,
                'default'     => [
                    'value'   => 'fas fa-angle-right',
                    'library' => 'fa-solid',
                ],
                'condition'   => [
                    'enable_button_icon_2' => 'yes',
                    'design_style'       => ['style_1'],
                ],
            ]
        );

        // END
        $this->end_controls_section();

           // video box
        $this->start_controls_section(
            '_section_video_box',
            [
                'label' => __( 'Video Box', 'avista-core' ),
                'tab'   => Controls_Manager::TAB_CONTENT,
            ]
        );

        // enable_video
        $this->add_control(
            'enable_video',
            [
                'label'        => __( 'Enable Video', 'avista-core' ),
                'type'         => Controls_Manager::SWITCHER,
                'label_on'     => __( 'Yes', 'avista-core' ),
                'label_off'    => __( 'No', 'avista-core' ),
                'return_value' => 'yes',
                'default'      => 'no',
            ]
        );

        // video source
        $this->add_control(
            'video_source',
            [
                'label'   => __( 'Video Source', 'avista-core' ),
                'type'    => Controls_Manager::SELECT,
                'options' => [
                    'youtube'    => __( 'YouTube', 'avista-core' ),
                    'vimeo'      => __( 'Vimeo', 'avista-core' ),
                    'self_hosted'=> __( 'Self Hosted', 'avista-core' ),
                ],
                'default' => 'youtube',
            ]
        );

        // video link
        $this->add_control(
            'video_link',
            [
                'label'       => __( 'Video Link', 'avista-core' ),
                'type'        => Controls_Manager::URL,
                'placeholder' => __( 'https://your-link.com', 'avista-core' ),
                'dynamic'     => [
                    'active' => true,
                ],
            ]
        );

        // video_text
        $this->add_control(
            'video_text',
            [
                'label'       => __( 'Video Text', 'avista-core' ),
                'type'        => Controls_Manager::TEXT,
                'placeholder' => __( 'Enter your video text', 'avista-core' ),
                'default'     => __( 'Watch Video', 'avista-core' ),
                'condition'   => [
                    'enable_video' => 'yes',
                ],
            ]
        );

        // video_icon
        $this->add_control(
            'video_icon',
            [
                'label'   => __( 'Video Icon', 'avista-core' ),
                'type'    => Controls_Manager::ICONS,
                'default' => [
                    'value'   => 'fas fa-play',
                    'library' => 'solid',
                ],
                'condition' => [
                    'enable_video' => 'yes',
                ],
            ]
        );

        // video button link
        $this->add_control(
            'video_button_link',
            [
                'label'       => __( 'Video Button Link', 'avista-core' ),
                'type'        => Controls_Manager::URL,
                'placeholder' => __( 'https://your-link.com', 'avista-core' ),
                'dynamic'     => [
                    'active' => true,
                ],
                'condition'   => [
                    'enable_video' => 'yes',
                ],
            ]
        );

        // end
        $this->end_controls_section();

        // tags
        $this->start_controls_section(
            '_section_tags',
            [
                'label' => __( 'Tags', 'avista-core' ),
                'tab'   => Controls_Manager::TAB_CONTENT,
            ]
        );

        // enable_tags
        $this->add_control(
            'enable_tags',
            [
                'label'        => __( 'Enable Tags', 'avista-core' ),
                'type'         => Controls_Manager::SWITCHER,
                'label_on'     => __( 'Show', 'avista-core' ),
                'label_off'    => __( 'Hide', 'avista-core' ),
                'return_value' => 'yes',
                'default'      => 'yes',
            ]
        );

        // repater
        $repeater = new Repeater();

        // tag name
        $repeater->add_control(
            'tag_name',
            [
                'label'       => __( 'Tag Name', 'avista-core' ),
                'label_block' => true,
                'type'        => Controls_Manager::TEXT,
                'default'     => __( 'Tag Name', 'avista-core' ),
                'placeholder' => __( 'Enter your tag name', 'avista-core' ),
            ]
        );

        // tag link
        $repeater->add_control(
            'tag_link',
            [
                'label'       => __( 'Tag Link', 'avista-core' ),
                'label_block' => true,
                'type'        => Controls_Manager::URL,
                'placeholder' => __( 'https://your-link.com', 'avista-core' ),
                'dynamic'     => [
                    'active' => true,
                ],
            ]
        );

        // tags
        $this->add_control(
            'tags',
            [
                'label'       => __( 'Tags', 'avista-core' ),
                'type'        => Controls_Manager::REPEATER,
                'fields'      => $repeater->get_controls(),
                'default'     => [
                    [
                        'tag_name' => __( 'Tag Name', 'avista-core' ),
                    ],
                ],
                'title_field' => '{{{ tag_name }}}',
                'condition'   => [
                    'enable_tags' => 'yes',
                ],
            ]
        );

        // end
        $this->end_controls_section();

        $this->start_controls_section(
            '_section_list_items',
            [
                'label' => __( 'Social Links', 'avista-core' ),
                'tab'   => Controls_Manager::TAB_CONTENT,
            ]
        );

        $repeater = new \Elementor\Repeater();

        // list icon
        $repeater->add_control(
            'social_icon',
            [
                'label'       => __( 'Icon', 'avista-core' ),
                'type'        => Controls_Manager::ICONS,
                'default'     => [
                    'value'   => 'fas fa-check',
                    'library' => 'solid',
                ],
                'label_block' => true,
            ]
        );

        // list_link
        $repeater->add_control(
            'social_link',
            [
                'label'       => __( 'Social Link', 'avista-core' ),
                'type'        => Controls_Manager::URL,
                'label_block' => true,
                'default'     => [
                    'url' => '#',
                ],
            ]
        );

        // social_name
        $repeater->add_control(
            'social_name',
            [
                'label'       => esc_html__( 'Social Name', 'avista-core' ),
                'type'        => \Elementor\Controls_Manager::TEXT,
                'default'     => esc_html__( 'Social Name', 'avista-core' ),
                'placeholder' => esc_html__( 'Social Name', 'avista-core' ),
            ]
        );

        $this->add_control(
            'social_links',
            [
                'label'  => __( 'Social Links', 'avista-core' ),
                'type'   => Controls_Manager::REPEATER,
                'fields' => $repeater->get_controls(),
            ]
        );

        // end
        $this->end_controls_section();

        // scroll down
        $this->start_controls_section(
            '_section_scroll_down',
            [
                'label' => __( 'Scroll Down', 'avista-core' ),
                'tab'   => Controls_Manager::TAB_CONTENT,
            ]
        );

        // enable scroll down
        $this->add_control(
            'enable_scroll_down',
            [
                'label'        => __( 'Enable Scroll Down', 'avista-core' ),
                'type'         => Controls_Manager::SWITCHER,
                'label_on'     => __( 'Show', 'avista-core' ),
                'label_off'    => __( 'Hide', 'avista-core' ),
                'return_value' => 'yes',
                'default'      => 'yes',
            ]
        );

        // scroll_text
        $this->add_control(
            'scroll_text',
            [
                'label'       => __( 'Scroll Text', 'avista-core' ),
                'type'        => Controls_Manager::TEXT,
                'label_block' => true,
                'default'     => __( 'Scroll Down', 'avista-core' ),
                'condition'   => [
                    'enable_scroll_down' => 'yes',
                ],
            ]
        );

        // scroll_link
        $this->add_control(
            'scroll_link',
            [
                'label'       => __( 'Scroll Link', 'avista-core' ),
                'type'        => Controls_Manager::URL,
                'label_block' => true,
                'default'     => [
                    'url' => '#',
                ],
                'condition'   => [
                    'enable_scroll_down' => 'yes',
                ],
            ]
        );

        // end
        $this->end_controls_section();

        // count box
        $this->start_controls_section(
            '_section_count_box',
            [
                'label' => __( 'Count Box', 'avista-core' ),
                'tab'   => Controls_Manager::TAB_CONTENT,
            ]
        );

        // enbale count box
        $this->add_control(
            'enable_count_box',
            [
                'label'        => __( 'Enable Count Box', 'avista-core' ),
                'type'         => Controls_Manager::SWITCHER,
                'label_on'     => __( 'Show', 'avista-core' ),
                'label_off'    => __( 'Hide', 'avista-core' ),
                'return_value' => 'yes',
                'default'      => 'yes',
            ]
        );

        // count numbewr
        $this->add_control(
            'count_number',
            [
                'label'       => __( 'Count Number', 'avista-core' ),
                'type'        => Controls_Manager::NUMBER,
                'label_block' => true,
                'default'     => 15,
                'condition'   => [
                    'enable_count_box' => 'yes',
                ],
            ]
        );

        // count prefix
        $this->add_control(
            'count_prefix',
            [
                'label'       => __( 'Count Prefix', 'avista-core' ),
                'type'        => Controls_Manager::TEXT,
                'label_block' => true,
                'default'     => '+',
                'condition'   => [
                    'enable_count_box' => 'yes',
                ],
            ]
        );

        // count title
        $this->add_control(
            'count_title',
            [
                'label'       => __( 'Count Title', 'avista-core' ),
                'type'        => Controls_Manager::TEXT,
                'label_block' => true,
                'default'     => 'Years of experiences of these industries!',
                'condition'   => [
                    'enable_count_box' => 'yes',
                ],
            ]
        );

        // end
        $this->end_controls_section();

        // author box
        $this->start_controls_section(
            '_section_author_box',
            [
                'label' => __( 'Author Box', 'avista-core' ),
                'tab'   => Controls_Manager::TAB_CONTENT,
                'condition' => [
                    'design_style' => ['style_2', 'style_4'],
                ],
            ]
        );

        // enbale author box
        $this->add_control(
            'enable_author_box',
            [
                'label'        => __( 'Enable Author Box', 'avista-core' ),
                'type'         => Controls_Manager::SWITCHER,
                'label_on'     => __( 'Show', 'avista-core' ),
                'label_off'    => __( 'Hide', 'avista-core' ),
                'return_value' => 'yes',
                'default'      => 'yes',
            ]
        );

        // author title 1
        $this->add_control(
            'author_title_1',
            [
                'label'       => __( 'Author Title 1', 'avista-core' ),
                'type'        => Controls_Manager::TEXT,
                'label_block' => true,
                'default'     => 'Hi I’m Lisa, Customer Manager',
                'condition'   => [
                    'enable_author_box' => 'yes',
                ],
            ]
        );

        // author title 2
        $this->add_control(
            'author_title_2',
            [
                'label'       => __( 'Author Title 2', 'avista-core' ),
                'type'        => Controls_Manager::TEXT,
                'label_block' => true,
                'default'     => 'Let me help you to find the best solution for your needs.',
                'condition'   => [
                    'enable_author_box' => 'yes',
                ],
            ]
        );

        // author buttoon text
        $this->add_control(
            'author_button_text',
            [
                'label'       => __( 'Author Button Text', 'avista-core' ),
                'type'        => Controls_Manager::TEXT,
                'label_block' => true,
                'default'     => 'Contact Me',
                'condition'   => [
                    'enable_author_box' => 'yes',
                    'design_style' => ['style_2', 'style_4'],
                ],
            ]
        );

        // author button link
        $this->add_control(
            'author_button_link',
            [
                'label'       => __( 'Author Button Link', 'avista-core' ),
                'type'        => Controls_Manager::URL,
                'label_block' => true,
                'default'     => [
                    'url' => '#',
                ],
                'condition'   => [
                    'enable_author_box' => 'yes',
                    'design_style' => ['style_2', 'style_4'],
                ],
            ]
        );

        // enable author button icon
        $this->add_control(
            'enable_author_button_icon',
            [
                'label'        => __( 'Enable Author Button Icon', 'avista-core' ),
                'type'         => Controls_Manager::SWITCHER,
                'label_on'     => __( 'Show', 'avista-core' ),
                'label_off'    => __( 'Hide', 'avista-core' ),
                'return_value' => 'yes',
                'default'      => 'no',
                'condition'    => [
                    'enable_author_box' => 'yes',
                    'design_style' => ['style_2', 'style_4'],
                ],
            ]
        );

        // author button icon 1
        $this->add_control(
            'author_button_icon_1',
            [
                'label'       => __( 'Author Button Icon 1', 'avista-core' ),
                'type'        => Controls_Manager::ICONS,
                'label_block' => true,
                'default'     => [
                    'value'   => 'fas fa-angle-right',
                    'library' => 'fa-solid',
                ],
                'condition'   => [
                    'enable_author_button_icon' => 'yes',
                    'design_style' => ['style_2', 'style_4'],
                ],
            ]
        );

        // author button icon 2
        $this->add_control(
            'author_button_icon_2',
            [
                'label'       => __( 'Author Button Icon 2', 'avista-core' ),
                'type'        => Controls_Manager::ICONS,
                'label_block' => true,
                'default'     => [
                    'value'   => 'fas fa-angle-right',
                    'library' => 'fa-solid',
                ],
                'condition'   => [
                    'enable_author_button_icon' => 'yes',
                    'design_style' => ['style_2', 'style_4'],
                ],
            ]
        );

        // author info
        $this->add_control(
            'author_info',
            [
                'label'       => __( 'Author Info', 'avista-core' ),
                'type'        => Controls_Manager::WYSIWYG,
                'label_block' => true,
                'default'     => 'Available for freelance work. Let’s talk.',
                'condition'   => [
                    'enable_author_box' => 'yes',
                    'design_style' => ['style_2', 'style_4'],
                ],
            ]
        );

        // author image
        $this->add_control(
            'author_image',
            [
                'label'       => __( 'Author Image', 'avista-core' ),
                'type'        => Controls_Manager::MEDIA,
                'label_block' => true,
                'default'     => [
                    'url' => \Elementor\Utils::get_placeholder_image_src(),
                ],
                'condition'   => [
                    'enable_author_box' => 'yes',
                ],
            ]
        );

        // author info 2
        $this->add_control(
            'author_info_2_left',
            [
                'label'       => __( 'Author Info 2', 'avista-core' ),
                'type'        => Controls_Manager::TEXT,
                'label_block' => true,
                'default'     => 'Available for freelance work. Let’s talk.',
                'condition'   => [
                    'enable_author_box' => 'yes',
                    'design_style' => ['style_2', 'style_4'],
                ],
            ]
        );

        // author info middle image
        $this->add_control(
            'author_info_middle_image',
            [
                'label'       => __( 'Author Info Middle Image', 'avista-core' ),
                'type'        => Controls_Manager::MEDIA,
                'label_block' => true,
                'default'     => [
                    'url' => \Elementor\Utils::get_placeholder_image_src(),
                ],
                'condition'   => [
                    'enable_author_box' => 'yes',
                ],
            ]
        );

        // author_info_2_RIGHT
        $this->add_control(
            'author_info_2_right',
            [
                'label'       => __( 'Author Info 2', 'avista-core' ),
                'type'        => Controls_Manager::TEXT,
                'label_block' => true,
                'default'     => 'Available for freelance work. Let’s talk.',
                'condition'   => [
                    'enable_author_box' => 'yes',
                    'design_style' => ['style_2', 'style_4'],
                ],
            ]
        );

        // end
        $this->end_controls_section();

        // Info box
        $this->start_controls_section(
            '_section_info_box',
            [
                'label' => __( 'Info Box', 'avista-core' ),
                'tab'   => Controls_Manager::TAB_CONTENT,
            ]
        );

        // enable info box
        $this->add_control(
            'enable_info_box',
            [
                'label'        => __( 'Enable Info Box', 'avista-core' ),
                'type'         => Controls_Manager::SWITCHER,
                'label_on'     => __( 'Show', 'avista-core' ),
                'label_off'    => __( 'Hide', 'avista-core' ),
                'return_value' => 'yes',
                'default'      => 'yes',
            ]
        );

        // info tite
        $this->add_control(
            'info_title',
            [
                'label'       => __( 'Info Title', 'avista-core' ),
                'type'        => Controls_Manager::TEXT,
                'label_block' => true,
                'default'     => 'Need Help? Call Us',
                'condition'   => [
                    'enable_info_box' => 'yes',
                ],
            ]
        );

        // info button text
        $this->add_control(
            'info_button_text',
            [
                'label'       => __( 'Info Button Text', 'avista-core' ),
                'type'        => Controls_Manager::TEXT,
                'label_block' => true,
                'default'     => '1-800-123-4567',
                'condition'   => [
                    'enable_info_box' => 'yes',
                ],
            ]
        );

        // info button link
        $this->add_control(
            'info_button_link',
            [
                'label'       => __( 'Info Button Link', 'avista-core' ),
                'type'        => Controls_Manager::URL,
                'label_block' => true,
                'default'     => [
                    'url' => 'tel:1-800-123-4567',
                ],
                'condition'   => [
                    'enable_info_box' => 'yes',
                ],
            ]
        );

        // enable info button icon
        $this->add_control(
            'enable_info_button_icon',
            [
                'label'        => __( 'Enable Info Button Icon', 'avista-core' ),
                'type'         => Controls_Manager::SWITCHER,
                'label_on'     => __( 'Show', 'avista-core' ),
                'label_off'    => __( 'Hide', 'avista-core' ),
                'return_value' => 'yes',
                'default'      => 'no',
                'condition'    => [
                    'enable_info_box' => 'yes',
                ],
            ]
        );

        // info button icon
        $this->add_control(
            'info_button_icon_1',
            [
                'label'       => __( 'Info Button Icon', 'avista-core' ),
                'type'        => Controls_Manager::ICONS,
                'label_block' => true,
                'default'     => [
                    'value'   => 'fas fa-angle-right',
                    'library' => 'fa-solid',
                ],
                'condition'   => [
                    'enable_info_button_icon' => 'yes',
                ],
            ]
        );

        // info button icon
        $this->add_control(
            'info_button_icon_2',
            [
                'label'       => __( 'Info Button Icon', 'avista-core' ),
                'type'        => Controls_Manager::ICONS,
                'label_block' => true,
                'default'     => [
                    'value'   => 'fas fa-angle-right',
                    'library' => 'fa-solid',
                ],
                'condition'   => [
                    'enable_info_button_icon' => 'yes',
                ],
            ]
        );

        // info image_1
        $this->add_control(
            'info_image_1',
            [
                'label'       => __( 'Info Image 1', 'avista-core' ),
                'type'        => Controls_Manager::MEDIA,
                'label_block' => true,
                'default'     => [
                    'url' => \Elementor\Utils::get_placeholder_image_src(),
                ],
                'condition'   => [
                    'enable_info_box' => 'yes',
                ],
            ]
        );

        // info image_2
        $this->add_control(
            'info_image_2',
            [
                'label'       => __( 'Info Image 2', 'avista-core' ),
                'type'        => Controls_Manager::MEDIA,
                'label_block' => true,
                'default'     => [
                    'url' => \Elementor\Utils::get_placeholder_image_src(),
                ],
                'condition'   => [
                    'enable_info_box' => 'yes',
                ],
            ]
        );

        // info image 3
        $this->add_control(
            'info_image_3',
            [
                'label'       => __( 'Info Image 3', 'avista-core' ),
                'type'        => Controls_Manager::MEDIA,
                'label_block' => true,
                'default'     => [
                    'url' => \Elementor\Utils::get_placeholder_image_src(),
                ],
                'condition'   => [
                    'enable_info_box' => 'yes',
                ],
            ]
        );

        // info image 4
        $this->add_control(
            'info_image_4',
            [
                'label'       => __( 'Info Image 4', 'avista-core' ),
                'type'        => Controls_Manager::MEDIA,
                'label_block' => true,
                'default'     => [
                    'url' => \Elementor\Utils::get_placeholder_image_src(),
                ],
                'condition'   => [
                    'enable_info_box' => 'yes',
                ],
            ]
        );

         // end
        $this->end_controls_section();

         // CONTACT NUMBER
        $this->start_controls_section(
            '_section_contact_info',
            [
                'label' => __( 'Form ShortCode', 'avista-core' ),
                'tab'   => Controls_Manager::TAB_CONTENT,
            ]
        );

        // form title
        $this->add_control(
            'form_title',
            [
                'label'       => __( 'Form Title', 'avista-core' ),
                'type'        => Controls_Manager::TEXT,
                'label_block' => true,
            ]
        );

        // form title 2
        $this->add_control(
            'form_title_2',
            [
                'label'       => __( 'Form Title 2', 'avista-core' ),
                'type'        => Controls_Manager::TEXT,
                'label_block' => true,
            ]
        );

        $this->add_control(
            'form_shortcode',
            [
                'label'     => __( 'Form Shortcode', 'avista-core' ),
                'type'      => Controls_Manager::TEXTAREA,
                'default'   => '[forminator_form id="123"]',
            ]
        );

        $this->end_controls_section();


        $this->start_controls_section(
            '_section_moving_items',
            [
                'label' => __( 'Moving Text', 'avista-core' ),
                'tab'   => Controls_Manager::TAB_CONTENT,
                'condition' => [
                    'design_style' => ['style_4'],
                ]
            ]
        );

        // enable moving text
        $this->add_control(
            'enable_moving_text',
            [
                'label'       => __( 'Enable Moving Text', 'avista-core' ),
                'type'        => Controls_Manager::SWITCHER,
                'label_on'     => __( 'Show', 'avista-core' ),
                'label_off'    => __( 'Hide', 'avista-core' ),
                'return_value' => 'yes',
                'default'      => 'no',
            ]
        );

        $repeater = new \Elementor\Repeater();

        $repeater->add_control(
            'info_label',
            [
                'label'       => __( 'Info Label', 'avista-core' ),
                'type'        => Controls_Manager::TEXT,
                'default'     => __( 'Info Label', 'avista-core' ),
                'label_block' => true,
            ]
        );

        // info icon
        $repeater->add_control(
            'info_icon',
            [
                'label'       => __( 'Info Icon', 'avista-core' ),
                'type'        => Controls_Manager::ICONS,
                'label_block' => true,
                'default'     => [
                    'value'   => 'fas fa-angle-right',
                    'library' => 'fa-solid',
                ],
            ]
        );

        $this->add_control(
            'list_items',
            [
                'label'       => __( 'Info Lists', 'avista-core' ),
                'type'        => Controls_Manager::REPEATER,
                'fields'      => $repeater->get_controls(),
                'default'     => [
                    [
                        'info_label' => __( 'Info Text', 'avista-core' ),
                    ],
                ],
                'title_field' => '{{{ info_label }}}',
            ]
        );

        $this->end_controls_section();

        // SETTINGS
        $this->start_controls_section(
            '_section_settings',
            [
                'label' => __( 'Settings', 'avista-core' ),
                'tab'   => Controls_Manager::TAB_CONTENT,
            ]
        );

        // enable_shape
        $this->add_control(
            'enable_shape',
            [
                'label'        => __( 'Enable Shape', 'avista-core' ),
                'type'         => Controls_Manager::SWITCHER,
                'label_on'     => __( 'Show', 'avista-core' ),
                'label_off'    => __( 'Hide', 'avista-core' ),
                'return_value' => 'yes',
                'default'      => 'yes',
                'condition'    => [
                    'design_style' => ['style_6'],
                ],
            ]
        );

        // ENABLE SUB TITLE
        $this->add_control(
            'enable_sub_title',
            [
                'label'        => __( 'Enable Sub Title', 'avista-core' ),
                'type'         => Controls_Manager::SWITCHER,
                'label_on'     => __( 'Show', 'avista-core' ),
                'label_off'    => __( 'Hide', 'avista-core' ),
                'return_value' => 'yes',
                'default'      => 'yes',
            ]
        );

        // ENABLE TITLE
        $this->add_control(
            'enable_title',
            [
                'label'        => __( 'Enable Title', 'avista-core' ),
                'type'         => Controls_Manager::SWITCHER,
                'label_on'     => __( 'Show', 'avista-core' ),
                'label_off'    => __( 'Hide', 'avista-core' ),
                'return_value' => 'yes',
                'default'      => 'yes',
            ]
        );

        // ENABLE DESCRIPTION
        $this->add_control(
            'enable_description',
            [
                'label'        => __( 'Enable Description', 'avista-core' ),
                'type'         => Controls_Manager::SWITCHER,
                'label_on'     => __( 'Show', 'avista-core' ),
                'label_off'    => __( 'Hide', 'avista-core' ),
                'return_value' => 'yes',
                'default'      => 'yes',
            ]
        );

         // enabe dark mode
        $this->add_control(
            'enable_dark_mode',
            [
                'label'        => __( 'Enable Dark Mode', 'avista-core' ),
                'type'         => Controls_Manager::SWITCHER,
                'label_on'     => __( 'Show', 'avista-core' ),
                'label_off'    => __( 'Hide', 'avista-core' ),
                'return_value' => 'yes',
                'default'      => 'no',
            ]
        );

        $this->end_controls_section();

    }

    protected function register_style_controls() {

        $dir = dirname( __FILE__ );
        $style_files = glob( $dir . '/styles/*.php' );

        if ( $style_files ) {
            foreach ( $style_files as $style_file ) {
                include $style_file;
            }
        }

    }

    protected function render() {

        $settings = $this->get_settings_for_display();
        $dir = dirname( __FILE__ );

        $style = !empty( $settings['design_style'] ) ? $settings['design_style'] : 'style_1';

        // Support for infinite styles: view-1.php, view-2.php, ..., view-n.php
        if (preg_match('/^style_(\d+)$/', $style, $matches)) {
            $view_file = $dir . '/views/view-' . $matches[1] . '.php';
            if (file_exists($view_file)) {
            include $view_file;
            } else {
            include $dir . '/views/view-1.php';
            }
        } else {
            include $dir . '/views/view-1.php';
        }
    }
}

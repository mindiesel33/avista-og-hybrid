<?php

namespace ElementHelper\Widget;

use \Elementor\Controls_Manager;
use \Elementor\Group_Control_Border;
use \Elementor\Repeater;
use \Elementor\Core\Schemes\Typography;
use \Elementor\Group_Control_Box_Shadow;
use \Elementor\Group_Control_Text_Shadow;
use \Elementor\Group_Control_Typography;
use \Elementor\Utils;

defined( 'ABSPATH' ) || die();

class Tx_Moving_Text extends Element_El_Widget {

    /**
     * Get widget name.
     *
     * Retrieve Element Helper widget name.
     *
     * @return string Widget name.
     * @since 1.0.0
     * @access public
     *
     */
    public function get_name() {
        return 'tx_moving_text';
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
        return __( 'TX Moving Text', 'avista-core' );
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
        return ['btn', 'lists', 'info', 'info lists'];
    }

    protected function register_content_controls() {

        //Settings
        $this->start_controls_section(
            '_section_settings',
            [
                'label' => __( 'Settings', 'avista-core' ),
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
                    'style_2' => __( 'Style 2: Home 4', 'avista-core' ),
                    'style_3' => __( 'Style 3: Home 3', 'avista-core' ),
                    'style_4' => __( 'Style 4: Home 2', 'avista-core' ),
                ],
                'default'            => 'style_1',
                'frontend_available' => true,
                'style_transfer'     => true,
            ]
        );

        $this->end_controls_section();

        // IMAGE SECTION
        $this->start_controls_section(
            '_section_image',
            [
                'label' => __( 'Image', 'avista-core' ),
                'tab'   => Controls_Manager::TAB_CONTENT,
                'condition' => [
                    'design_style' => [ 'style_3' ]
                ]
            ]
        );

        // IMAGE 1
        $this->add_control(
            'image_1',
            [
                'label'       => __( 'Image 1', 'avista-core' ),
                'label_block' => true,
                'type'        => Controls_Manager::MEDIA,
                'default'     => [
                    'url' => Utils::get_placeholder_image_src(),
                ],
                'dynamic'     => [
                    'active' => true,
                ],
            ]
        );

        // END
        $this->end_controls_section();

        $this->start_controls_section(
            '_section_list_items',
            [
                'label' => __( 'List Items', 'avista-core' ),
                'tab'   => Controls_Manager::TAB_CONTENT,
            ]
        );

        $repeater = new \Elementor\Repeater();

         // design style
         $repeater->add_control(
            'design_style',
            [
                'label'              => __( 'Design Style', 'avista-core' ),
                'type'               => Controls_Manager::SELECT,
                'options'            => [
                    'style_1' => __( 'Style 1: Home 1', 'avista-core' ),
                    'style_2' => __( 'Style 2: Home 4', 'avista-core' ),
                    'style_3' => __( 'Style 3: Home 3', 'avista-core' ),
                    'style_4' => __( 'Style 4: Home 4', 'avista-core' ),
                ],
                'default'            => 'style_1',
                'frontend_available' => true,
                'style_transfer'     => true,
            ]
        );

        $repeater->add_control(
            'info_label',
            [
                'label'       => __( 'Info Label', 'avista-core' ),
                'type'        => Controls_Manager::TEXT,
                'default'     => __( 'Info Label', 'avista-core' ),
                'label_block' => true,
            ]
        );

        // image_1
        $repeater->add_control(
            'image_1',
            [
                'label'   => __( 'Image', 'avista-core' ),
                'type'    => Controls_Manager::MEDIA,
                'default' => [
                    'url' => Utils::get_placeholder_image_src(),
                ],
                'condition' => [
                    'design_style' => ['style_1', 'style_4'],
                ]
            ]
        );

        // info icon
        $repeater->add_control(
            'info_icon',
            [
                'label'   => __( 'Info Icon', 'avista-core' ),
                'type'    => Controls_Manager::ICONS,
                'default' => [
                    'value'   => 'fas fa-info-circle',
                    'library' => 'fa-solid',
                ],
                'condition' => [
                    'design_style' => ['style_2', 'style_3'],
                ]
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

        $this->start_controls_section(
            '_section_list_items_2',
            [
                'label' => __( 'List Items 2', 'avista-core' ),
                'tab'   => Controls_Manager::TAB_CONTENT,
            ]
        );

        // enable moving text 2
        $this->add_control(
            'enable_moving_text_2',
            [
                'label'        => __( 'Enable Moving Text 2', 'avista-core' ),
                'type'         => Controls_Manager::SWITCHER,
                'label_on'     => __( 'Yes', 'avista-core' ),
                'label_off'    => __( 'No', 'avista-core' ),
                'return_value' => 'yes',
                'default'      => 'no',
            ]
        );

        $repeater = new \Elementor\Repeater();

         // design style
         $repeater->add_control(
            'design_style',
            [
                'label'              => __( 'Design Style', 'avista-core' ),
                'type'               => Controls_Manager::SELECT,
                'options'            => [
                    'style_1' => __( 'Style 1: Home 1', 'avista-core' ),
                    'style_2' => __( 'Style 2: Home 3', 'avista-core' ),
                    'style_3' => __( 'Style 3: Home 2', 'avista-core' ),
                ],
                'default'            => 'style_1',
                'frontend_available' => true,
                'style_transfer'     => true,
            ]
        );

        $repeater->add_control(
            'info_label',
            [
                'label'       => __( 'Info Label', 'avista-core' ),
                'type'        => Controls_Manager::TEXT,
                'default'     => __( 'Info Label', 'avista-core' ),
                'label_block' => true,
            ]
        );

        // image_1
        $repeater->add_control(
            'image_1',
            [
                'label'   => __( 'Image', 'avista-core' ),
                'type'    => Controls_Manager::MEDIA,
                'default' => [
                    'url' => Utils::get_placeholder_image_src(),
                ],
                'condition' => [
                    'design_style' => ['style_1','style_3'],
                ]
            ]
        );

        // info icon
        $repeater->add_control(
            'info_icon',
            [
                'label'   => __( 'Info Icon', 'avista-core' ),
                'type'    => Controls_Manager::ICONS,
                'default' => [
                    'value'   => 'fas fa-info-circle',
                    'library' => 'fa-solid',
                ],
                'condition' => [
                    'design_style' => ['style_2'],
                ]
            ]
        );

        $this->add_control(
            'list_items_2',
            [
                'label'       => __( 'Info Lists 2', 'avista-core' ),
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

        $style = !empty($settings['design_style']) ? $settings['design_style'] : 'style_1';

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

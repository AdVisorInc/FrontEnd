import AccordionsSvg from 'src/components/base/components-svgs/accordions.svg';
import AlertsSvg from 'src/components/base/components-svgs/alerts.svg';
import AreaChartsSvg from 'src/components/base/components-svgs/area-charts.svg';
import AutocompleteSvg from 'src/components/base/components-svgs/autocomplete.svg';
import AvatarsSvg from 'src/components/base/components-svgs/avatars.svg';
import BadgesSvg from 'src/components/base/components-svgs/badges.svg';
import BarChartsSvg from 'src/components/base/components-svgs/bar-charts.svg';
import BreadcrumbsSvg from 'src/components/base/components-svgs/breadcrumbs.svg';
import ButtonGroupsSvg from 'src/components/base/components-svgs/button-groups.svg';
import ButtonsSvg from 'src/components/base/components-svgs/buttons.svg';
import CardHeadingsSvg from 'src/components/base/components-svgs/card-headings.svg';
import CardShellsSvg from 'src/components/base/components-svgs/card-shells.svg';
import CheckboxesSvg from 'src/components/base/components-svgs/checkboxes.svg';
import ChipsSvg from 'src/components/base/components-svgs/chips.svg';
import ComposedBlocksSvg from 'src/components/base/components-svgs/composed-blocks.svg';
import ComposedVisualizationBlocksSvg from 'src/components/base/components-svgs/composed-visualization-blocks.svg';
import ContentGridsSvg from 'src/components/base/components-svgs/content-grids.svg';
import ContentShellsSvg from 'src/components/base/components-svgs/content-shells.svg';
import DataGridListsSvg from 'src/components/base/components-svgs/data-grid-lists.svg';
import DatepickerSvg from 'src/components/base/components-svgs/datepicker.svg';
import DescriptionGridListsSvg from 'src/components/base/components-svgs/description-grid-lists.svg';
import DialogsSvg from 'src/components/base/components-svgs/dialogs.svg';
import DividersSvg from 'src/components/base/components-svgs/dividers.svg';
import DrawersSvg from 'src/components/base/components-svgs/drawers.svg';
import DropdownsSvg from 'src/components/base/components-svgs/dropdowns.svg';
import EmptyStatesSvg from 'src/components/base/components-svgs/empty-states.svg';
import FormLayoutsSvg from 'src/components/base/components-svgs/form-layouts.svg';
import FoundationSvg from 'src/components/base/components-svgs/foundation.svg';
import GaugeIndicatorsSvg from 'src/components/base/components-svgs/gauge-indicators.svg';
import HorizontalListsSvg from 'src/components/base/components-svgs/horizontal-lists.svg';
import HorizontalMenusSvg from 'src/components/base/components-svgs/horizontal-menus.svg';
import IconGridListsSvg from 'src/components/base/components-svgs/icon-grid-lists.svg';
import ImageGridListsSvg from 'src/components/base/components-svgs/image-grid-lists.svg';
import InputSvg from 'src/components/base/components-svgs/input.svg';
import LineChartsSvg from 'src/components/base/components-svgs/line-charts.svg';
import ListContainersSvg from 'src/components/base/components-svgs/list-containers.svg';
import NavigationOverlaysSvg from 'src/components/base/components-svgs/navigation-overlays.svg';
import NotificationsSvg from 'src/components/base/components-svgs/notifications.svg';
import PageHeadingsSvg from 'src/components/base/components-svgs/page-headings.svg';
import PaginationSvg from 'src/components/base/components-svgs/pagination.svg';
import PieDoughnutChatrsSvg from 'src/components/base/components-svgs/pie-doughnut-charts.svg';
import PopoversSvg from 'src/components/base/components-svgs/popovers.svg';
import ProgressGridListsSvg from 'src/components/base/components-svgs/progress-grid-lists.svg';
import ProgressIndicatorsSvg from 'src/components/base/components-svgs/progress-indicators.svg';
import RadioGroupsSvg from 'src/components/base/components-svgs/radio-groups.svg';
import RatingsSvg from 'src/components/base/components-svgs/ratings.svg';
import SectionHeadingsSvg from 'src/components/base/components-svgs/section-headings.svg';
import SelectSvg from 'src/components/base/components-svgs/select.svg';
import SkeletonSvg from 'src/components/base/components-svgs/skeleton.svg';
import SliderSvg from 'src/components/base/components-svgs/slider.svg';
import SparklineChartsSvg from 'src/components/base/components-svgs/sparkline-charts.svg';
import SpeedDialsSvg from 'src/components/base/components-svgs/speed-dials.svg';
import StackedListsSvg from 'src/components/base/components-svgs/stacked-lists.svg';
import StatsGridListsSvg from 'src/components/base/components-svgs/stats-grid-lists.svg';
import SteppersSvg from 'src/components/base/components-svgs/steppers.svg';
import SwitchesSvg from 'src/components/base/components-svgs/switches.svg';
import TablesSvg from 'src/components/base/components-svgs/tables.svg';
import TabsSvg from 'src/components/base/components-svgs/tabs.svg';
import TextareaSvg from 'src/components/base/components-svgs/textarea.svg';
import TimelinesSvg from 'src/components/base/components-svgs/timelines.svg';
import ToggleButtonsSvg from 'src/components/base/components-svgs/toggle-buttons.svg';
import TooltipsSvg from 'src/components/base/components-svgs/tooltips.svg';
import UploadSvg from 'src/components/base/components-svgs/upload.svg';
import UserAuthSvg from 'src/components/base/components-svgs/user-auth.svg';
import VerticalMenusSvg from 'src/components/base/components-svgs/vertical-menus.svg';

export const configData = {
  categories: [
    {
      name: 'Application UI Components',
      description:
        'Dive into a comprehensive suite of components tailored for modern applications. From intricate data visualizations to user-friendly tables, lists, and buttons—our collection ensures a seamless user experience while promoting efficiency in development. Sculpted for scalability, every piece ensures consistency across your application, optimizing both design and functionality.',
      subCategories: [
        {
          name: 'Layout',
          components: [
            {
              type: 'content-shells',
              image: <ContentShellsSvg />,
              variants: [
                {
                  name: 'calendar',
                  path: 'content-shells/calendar',
                  description: 'Interactive calendar for event tracking and scheduling.',
                },
                {
                  name: 'file-manager',
                  path: 'content-shells/file-manager',
                  description: 'File management system for organizing and accessing documents.',
                },
                {
                  name: 'invoice-details',
                  path: 'content-shells/invoice-details',
                  description: '',
                },
                {
                  name: 'jobs-platform',
                  path: 'content-shells/jobs-platform',
                  description: 'Job listing and application platform for recruitment processes.',
                },
                {
                  name: 'mailbox',
                  path: 'content-shells/mailbox',
                  description: 'Email interface for sending, receiving, and organizing messages.',
                },
                {
                  name: 'messenger',
                  path: 'content-shells/messenger',
                  description: 'Instant messaging application for real-time communication.',
                },
                {
                  name: 'product-details',
                  path: 'content-shells/product-details',
                  description: '',
                },
                {
                  name: 'projects-board',
                  path: 'content-shells/projects-board',
                  description: 'Project management tool for tracking progress and collaboration.',
                },
                {
                  name: 'storefront',
                  path: 'content-shells/storefront',
                  description: '',
                },
                {
                  name: 'tasks',
                  path: 'content-shells/tasks',
                  description: 'Task manager for creating, organizing, and tracking to-dos.',
                },
                {
                  name: 'user-profile',
                  path: 'content-shells/user-profile',
                  description: '',
                },
              ],
            },
            {
              type: 'card-shells',
              image: <CardShellsSvg />,
              variants: [
                {
                  name: 'bottom-border-accent',
                  path: 'card-shells/bottom-border-accent',
                  description: 'A card shell featuring a distinctive accent on the bottom border.',
                },
                {
                  name: 'composed-large',
                  path: 'card-shells/composed-large',
                  description:
                    'A large card shell with a composed layout for various content types.',
                },
                {
                  name: 'composed-large-alternate',
                  path: 'card-shells/composed-large-alternate',
                  description: 'An alternative layout for the large composed card shell.',
                },
                {
                  name: 'composed-large-stacked',
                  path: 'card-shells/composed-large-stacked',
                  description: 'A large composed card shell with a stacked layout design.',
                },
                {
                  name: 'content-scrollable',
                  path: 'card-shells/content-scrollable',
                  description: 'A card shell with scrollable content.',
                },
                {
                  name: 'content-scrollable-custom',
                  path: 'card-shells/content-scrollable-custom',
                  description: 'A card shell with scrollable content with custom scrollbar.',
                },
                {
                  name: 'content-scrollable-footer',
                  path: 'card-shells/content-scrollable-footer',
                  description: 'A card shell with scrollable content and a footer.',
                },
                {
                  name: 'content-scrollable-footer-well',
                  path: 'card-shells/content-scrollable-footer-well',
                  description:
                    'A card shell with scrollable content and a footer on a gray background.',
                },
                {
                  name: 'content-scrollable-section',
                  path: 'card-shells/content-scrollable-section',
                  description: 'A card shell with scrollable content and an additional section.',
                },
                {
                  name: 'content-scrollable-section-well',
                  path: 'card-shells/content-scrollable-section-well',
                  description:
                    'A card shell with scrollable content and a section on a gray background.',
                },
                {
                  name: 'dark-background',
                  path: 'card-shells/dark-background',
                  description: 'A card shell with a dark background for a sleek, modern look.',
                },
                {
                  name: 'footer',
                  path: 'card-shells/footer',
                  description: 'A card shell with a footer.',
                },
                {
                  name: 'footer-divider-well',
                  path: 'card-shells/footer-divider-well',
                  description:
                    'A card shell with a footer on a gray background, separated by a divider.',
                },
                {
                  name: 'footer-well',
                  path: 'card-shells/footer-well',
                  description: 'A card shell with a footer on a gray background.',
                },
                {
                  name: 'gradient-background',
                  path: 'card-shells/gradient-background',
                  description:
                    'A card shell with a gradient background for a dynamic visual effect.',
                },
                {
                  name: 'header',
                  path: 'card-shells/header',
                  description: 'A card shell with a header.',
                },
                {
                  name: 'header-footer',
                  path: 'card-shells/header-footer',
                  description: 'A card shell with both a header and footer.',
                },
                {
                  name: 'header-well',
                  path: 'card-shells/header-well',
                  description: 'A card shell with a header on a gray background.',
                },
                {
                  name: 'header-well-divider',
                  path: 'card-shells/header-well-divider',
                  description:
                    'A card shell with a header on a gray background, separated by a divider.',
                },
                {
                  name: 'header-well-scrollable-search',
                  path: 'card-shells/header-well-scrollable-search',
                  description:
                    'A card shell with a header on a gray background and a scrollable search area.',
                },
                {
                  name: 'left-indicator-accent',
                  path: 'card-shells/left-indicator-accent',
                  description:
                    'A card shell featuring a left-side indicator accent for emphasis or categorization.',
                },
                {
                  name: 'simple',
                  path: 'card-shells/simple',
                  description: 'A basic card shell.',
                },
                {
                  name: 'top-border-accent',
                  path: 'card-shells/top-border-accent',
                  description:
                    'A card shell featuring a top border accent for added visual interest.',
                },
              ],
            },
            {
              type: 'list-containers',
              image: <ListContainersSvg />,
              variants: [
                {
                  name: 'basic',
                  path: 'list-containers/basic',
                  description:
                    'A fundamental list container layout, suitable for a variety of content.',
                },
                {
                  name: 'basic-card',
                  path: 'list-containers/basic-card',
                  description:
                    'A basic list container styled as a card, offering a defined boundary for content.',
                },
                {
                  name: 'basic-card-dividers',
                  path: 'list-containers/basic-card-dividers',
                  description:
                    'List container with card style and dividers, organizing content into clear sections.',
                },
                {
                  name: 'basic-card-dividers-middle',
                  path: 'list-containers/basic-card-dividers-middle',
                  description:
                    'A variant of the basic card with dividers focused in the middle of the container.',
                },
                {
                  name: 'basic-dividers',
                  path: 'list-containers/basic-dividers',
                  description:
                    'Basic list container featuring dividers to separate and structure content.',
                },
                {
                  name: 'basic-dividers-middle',
                  path: 'list-containers/basic-dividers-middle',
                  description:
                    'A list container with dividers concentrated in the middle for a unique layout.',
                },
                {
                  name: 'basic-stacked',
                  path: 'list-containers/basic-stacked',
                  description:
                    'A stacked version of the basic list container, layering content for depth.',
                },
                {
                  name: 'basic-stacked-card',
                  path: 'list-containers/basic-stacked-card',
                  description:
                    'Stacked list container within a card format for a more pronounced presentation.',
                },
                {
                  name: 'basic-stacked-card-dividers',
                  path: 'list-containers/basic-stacked-card-dividers',
                  description:
                    'Stacked card with dividers, combining elevation with clear content separation.',
                },
                {
                  name: 'basic-stacked-dividers',
                  path: 'list-containers/basic-stacked-dividers',
                  description:
                    'Stacked list container equipped with dividers to enhance content organization.',
                },
                {
                  name: 'basic-stacked-dividers-middle',
                  path: 'list-containers/basic-stacked-dividers-middle',
                  description:
                    'This variant focuses dividers in the middle of a stacked list container.',
                },
                {
                  name: 'basic-stacked-dividers-middle-alt',
                  path: 'list-containers/basic-stacked-dividers-middle-alt',
                  description:
                    'An alternative design to the middle-focused dividers in a stacked list container.',
                },
                {
                  name: 'grid-dividers-three-columns',
                  path: 'list-containers/grid-dividers-three-columns',
                  description:
                    'A grid layout with dividers, organized into three columns for content distribution.',
                },
                {
                  name: 'grid-dividers-two-columns',
                  path: 'list-containers/grid-dividers-two-columns',
                  description:
                    'Two-column grid list container with dividers for segmenting content clearly.',
                },
              ],
            },
            {
              type: 'dividers',
              image: <DividersSvg />,
              variants: [
                {
                  name: 'button',
                  path: 'dividers/button',
                  description: 'A simple divider used to segregate individual buttons.',
                },
                {
                  name: 'button-group',
                  path: 'dividers/button-group',
                  description: 'Divider meant for distinguishing buttons within a button group.',
                },
                {
                  name: 'chip',
                  path: 'dividers/chip',
                  description: 'Divider intended for separating chip elements.',
                },
                {
                  name: 'icon',
                  path: 'dividers/icon',
                  description: 'A divider designed to differentiate between icons.',
                },
                {
                  name: 'text',
                  path: 'dividers/text',
                  description: 'A divider tailored for text-based content separation.',
                },
                {
                  name: 'vertical-chip',
                  path: 'dividers/vertical-chip',
                  description: 'Divider designed to segregate inline chip elements vertically.',
                },
                {
                  name: 'vertical-text',
                  path: 'dividers/vertical-text',
                  description: 'A vertical divider used to separate inline text elements.',
                },
              ],
            },
            {
              type: 'foundation',
              image: <FoundationSvg />,
              variants: [
                {
                  name: 'accent-colors',
                  path: 'foundation/accent-colors',
                  description:
                    'Vibrant shades tailored to bring attention to key elements and actions.',
                },
                {
                  name: 'neutral-colors',
                  path: 'foundation/neutral-colors',
                  description:
                    'Balanced colors offering understated elegance without overwhelming the design.',
                },
                {
                  name: 'shadows',
                  path: 'foundation/shadows',
                  description:
                    'Depth-enhancing shadows, perfect for element distinction and focus.',
                },
                {
                  name: 'state-colors',
                  path: 'foundation/state-colors',
                  description:
                    'Colors optimized for UI states, enhancing feedback and interactivity.',
                },
                {
                  name: 'state-shadows',
                  path: 'foundation/state-shadows',
                  description:
                    'Dynamic shadows responding to UI states, enriching user interactions.',
                },
                {
                  name: 'typography',
                  path: 'foundation/typography',
                  description:
                    'Expertly curated fonts and styles ensuring readability and brand consistency.',
                },
              ],
            },
            {
              type: 'content-grids',
              image: <ContentGridsSvg />,
              variants: [
                {
                  name: 'grid1',
                  path: 'content-grids/grid1',
                  description: 'Foundational layout for simple content presentations.',
                },
                {
                  name: 'grid2',
                  path: 'content-grids/grid2',
                  description: 'Two-column layout for side-by-side content.',
                },
                {
                  name: 'grid3',
                  path: 'content-grids/grid3',
                  description: 'Dynamic grid for intricate content arrangements.',
                },
                {
                  name: 'grid4',
                  path: 'content-grids/grid4',
                  description: 'Modular layout for consistent content rhythm.',
                },
                {
                  name: 'grid5',
                  path: 'content-grids/grid5',
                  description: 'Nested design for hierarchical content display.',
                },
                {
                  name: 'grid6',
                  path: 'content-grids/grid6',
                  description: 'Responsive layout for multi-block content.',
                },
                {
                  name: 'grid7',
                  path: 'content-grids/grid7',
                  description: 'Advanced system for layered content.',
                },
                {
                  name: 'grid8',
                  path: 'content-grids/grid8',
                  description: 'Multi-column design for diverse content.',
                },
                {
                  name: 'grid9',
                  path: 'content-grids/grid9',
                  description: 'Engaging layout for interactive content.',
                },
                {
                  name: 'grid10',
                  path: 'content-grids/grid10',
                  description: 'Optimized grid for fluid content arrangements.',
                },
                {
                  name: 'grid11',
                  path: 'content-grids/grid11',
                  description: 'Example grid layouts to use as guidance.',
                },
                {
                  name: 'grid12',
                  path: 'content-grids/grid12',
                  description: 'Example grid layouts to use as guidance with complex grid system.',
                },
              ],
            },
          ],
        },
        {
          name: 'Elements',
          components: [
            {
              type: 'buttons',
              image: <ButtonsSvg />,
              variants: [
                {
                  name: 'icon',
                  path: 'buttons/icon',
                  description: 'Soft button for icon-centric actions.',
                },
                {
                  name: 'icon-buttons',
                  path: 'buttons/icon-buttons',
                  description: 'Button with only icons.',
                },
                {
                  name: 'leading-icons',
                  path: 'buttons/leading-icons',
                  description: 'Button with leading icon for clarity.',
                },
                {
                  name: 'loading',
                  path: 'buttons/loading',
                  description: 'Button with loading indicator.',
                },
                {
                  name: 'outlined-primary',
                  path: 'buttons/outlined-primary',
                  description: 'Primary button with a defined outline.',
                },
                {
                  name: 'outlined-secondary',
                  path: 'buttons/outlined-secondary',
                  description: 'Secondary button with a distinct outline.',
                },
                {
                  name: 'primary',
                  path: 'buttons/primary',
                  description: 'Bold button for primary actions and CTAs.',
                },
                {
                  name: 'rounded',
                  path: 'buttons/rounded',
                  description: 'Buttons that have a full border radius.',
                },
                {
                  name: 'scenes',
                  path: 'buttons/scenes',
                  description: 'Various button designs adaptable to different scenes or contexts.',
                },
                {
                  name: 'secondary',
                  path: 'buttons/secondary',
                  description: 'Versatile button for secondary actions.',
                },
                {
                  name: 'soft',
                  path: 'buttons/soft',
                  description: 'Smooth-edged button for secondary actions.',
                },
                {
                  name: 'states',
                  path: 'buttons/states',
                  description: 'Button showcasing various interactive states.',
                },
                {
                  name: 'text-primary',
                  path: 'buttons/text-primary',
                  description: 'Minimalist button emphasizing primary text.',
                },
                {
                  name: 'text-secondary',
                  path: 'buttons/text-secondary',
                  description: 'Elegant button highlighting secondary text.',
                },
                {
                  name: 'trailing-icons',
                  path: 'buttons/trailing-icons',
                  description: 'Button with trailing icon for context.',
                },
                {
                  name: 'upload',
                  path: 'buttons/upload',
                  description: 'Button tailored for uploading actions.',
                },
              ],
            },
            {
              type: 'button-groups',
              image: <ButtonGroupsSvg />,
              variants: [
                {
                  name: 'contained',
                  path: 'button-groups/contained',
                  description:
                    'A fundamental group of buttons for common use-cases, offering cohesive actions.',
                },
                {
                  name: 'icon-label',
                  path: 'button-groups/icon-label',
                  description:
                    'Buttons combining icons with labels, enhancing clarity and recognition.',
                },
                {
                  name: 'icon-only',
                  path: 'button-groups/icon-only',
                  description:
                    'Group of icon buttons for actions where visuals speak louder than words.',
                },
                {
                  name: 'outlined',
                  path: 'button-groups/outlined',
                  description:
                    'A set of secondary-styled buttons, ideal for less prominent actions or filters.',
                },
                {
                  name: 'split',
                  path: 'button-groups/split',
                  description:
                    'Buttons with a primary action and a split dropdown for related actions.',
                },
                {
                  name: 'switches-alternate',
                  path: 'button-groups/switches-alternate',
                  description:
                    'An alternate design for button groups featuring switch-like functionality.',
                },
                {
                  name: 'text',
                  path: 'button-groups/text',
                  description:
                    'Text-only buttons grouped together, providing a clean and unobtrusive option.',
                },
              ],
            },
            {
              type: 'toggle-buttons',
              image: <ToggleButtonsSvg />,
              variants: [
                {
                  name: 'exclusive',
                  path: 'toggle-buttons/exclusive',
                  description: 'A toggle button where only one option can be selected at a time.',
                },
                {
                  name: 'multiple-selection',
                  path: 'toggle-buttons/multiple-selection',
                  description:
                    'Toggle buttons that allow for multiple options to be selected simultaneously.',
                },
                {
                  name: 'single',
                  path: 'toggle-buttons/single',
                  description: 'A single toggle button for binary choices.',
                },
                {
                  name: 'with-text',
                  path: 'toggle-buttons/with-text',
                  description: 'Toggle button featuring an accompanying text label.',
                },
                {
                  name: 'vertical',
                  path: 'toggle-buttons/vertical',
                  description: 'A set of vertically aligned toggle buttons.',
                },
                {
                  name: 'enforce-value',
                  path: 'toggle-buttons/enforce-value',
                  description: 'Toggle button that enforces a value to be always selected.',
                },
              ],
            },
            {
              type: 'badges',
              image: <BadgesSvg />,
              variants: [
                {
                  name: 'alignments',
                  path: 'badges/alignments',
                  description:
                    'Variety of badge positions showcasing alignment options on parent elements.',
                },
                {
                  name: 'avatar',
                  path: 'badges/avatar',
                  description:
                    'Badges tailored for avatars, indicating user status or notifications.',
                },
                {
                  name: 'basic',
                  path: 'badges/basic',
                  description: 'Classic badge style for straightforward notifications and counts.',
                },
                {
                  name: 'dot',
                  path: 'badges/dot',
                  description: 'Minimalist dot badges to subtly indicate updates or presence.',
                },
                {
                  name: 'dot-large',
                  path: 'badges/dot-large',
                  description:
                    'An enlarged dot badge for more prominent visibility while maintaining a minimalist design.',
                },
                {
                  name: 'dot-ring',
                  path: 'badges/dot-ring',
                  description:
                    'Dot badge encircled by a ring, combining the simplicity of the dot with an added layer of emphasis.',
                },
                {
                  name: 'inline',
                  path: 'badges/inline',
                  description:
                    'Badges designed to fit seamlessly within textual content or inline elements.',
                },
                {
                  name: 'overlaps',
                  path: 'badges/overlaps',
                  description:
                    'Badge style designed to overlap onto container elements, typically icons or avatars.',
                },
              ],
            },
            {
              type: 'chips',
              image: <ChipsSvg />,
              variants: [
                {
                  name: 'action',
                  path: 'chips/action',
                  description:
                    'Interactive chips designed with actions or commands, facilitating quick user tasks.',
                },
                {
                  name: 'avatar',
                  path: 'chips/avatar',
                  description:
                    'Chips incorporating avatars for visual emphasis, often used in user-related contexts.',
                },
                {
                  name: 'basic',
                  path: 'chips/basic',
                  description:
                    'Standard chips for compact display of information, tags, or actions.',
                },
                {
                  name: 'basic-dot',
                  path: 'chips/basic-dot',
                  description:
                    'Simplified chips with dots for discreet data representation or selection.',
                },
                {
                  name: 'icon',
                  path: 'chips/icon',
                  description: 'Chips enriched with icons for better context and visual appeal.',
                },
                {
                  name: 'outlined',
                  path: 'chips/outlined',
                  description:
                    'Chips with defined boundaries using outlines, providing clear distinction in a UI.',
                },
                {
                  name: 'outlined-dot',
                  path: 'chips/outlined-dot',
                  description:
                    'Outlined chips accentuated with dots for both clarity and subtle emphasis.',
                },
              ],
            },
            {
              type: 'avatars',
              image: <AvatarsSvg />,
              variants: [
                {
                  name: 'avatar-group-tooltips',
                  path: 'avatars/avatar-group-tooltips',
                  description:
                    'Set of overlapped avatars showcasing shared content or group collaboration with tooltips.',
                },
                {
                  name: 'groups',
                  path: 'avatars/groups',
                  description: 'Cluster of avatars representing groups or teams.',
                },
                {
                  name: 'icon',
                  path: 'avatars/icon',
                  description:
                    'Avatar with icons for generic user representation or specific roles.',
                },
                {
                  name: 'image',
                  path: 'avatars/image',
                  description: 'Standard avatar displaying user profile pictures.',
                },
                {
                  name: 'initials',
                  path: 'avatars/initials',
                  description:
                    'Avatar showcasing user initials, ideal for when an image is unavailable.',
                },
                {
                  name: 'state-error',
                  path: 'avatars/state-error',
                  description: '',
                },
                {
                  name: 'state-info',
                  path: 'avatars/state-info',
                  description: '',
                },
                {
                  name: 'state-light',
                  path: 'avatars/state-light',
                  description: '',
                },
                {
                  name: 'state-primary',
                  path: 'avatars/state-primary',
                  description: '',
                },
                {
                  name: 'state-secondary',
                  path: 'avatars/state-secondary',
                  description: '',
                },
                {
                  name: 'state-success',
                  path: 'avatars/state-success',
                  description: '',
                },
                {
                  name: 'state-warning',
                  path: 'avatars/state-warning',
                  description: '',
                },
                {
                  name: 'variants',
                  path: 'avatars/variants',
                  description: 'Variety of avatars with different shapes, sizes, and appearances.',
                },
                {
                  name: 'with-badge',
                  path: 'avatars/with-badge',
                  description: 'Avatar adorned with badges to indicate statuses or notifications.',
                },
                {
                  name: 'with-text',
                  path: 'avatars/with-text',
                  description: 'Avatar combined with textual information, enhancing user context.',
                },
              ],
            },
            {
              type: 'dropdowns',
              image: <DropdownsSvg />,
              variants: [
                {
                  name: 'alternate',
                  path: 'dropdowns/alternate',
                  description: 'An alternative design for the standard dropdown.',
                },
                {
                  name: 'basic',
                  path: 'dropdowns/basic',
                  description: 'A basic dropdown with minimal styling.',
                },
                {
                  name: 'composed',
                  path: 'dropdowns/composed',
                  description: 'A dropdown designed with a composite structure.',
                },
                {
                  name: 'context',
                  path: 'dropdowns/context',
                  description: 'A contextual dropdown adjusting to its content.',
                },
                {
                  name: 'dividers',
                  path: 'dropdowns/dividers',
                  description: 'Dropdown with dividers to segment content.',
                },
                {
                  name: 'footer',
                  path: 'dropdowns/footer',
                  description: 'A dropdown featuring a footer section.',
                },
                {
                  name: 'grid-navigation',
                  path: 'dropdowns/grid-navigation',
                  description: 'A grid dropdown geared for navigation purposes.',
                },
                {
                  name: 'grid-navigation-accent',
                  path: 'dropdowns/grid-navigation-accent',
                  description:
                    'A variant of the grid navigation dropdown with accentuated design elements.',
                },
                {
                  name: 'header',
                  path: 'dropdowns/header',
                  description: 'Dropdown with a distinctive header.',
                },
                {
                  name: 'icons',
                  path: 'dropdowns/icons',
                  description: 'Dropdown items adorned with icons.',
                },
                {
                  name: 'language',
                  path: 'dropdowns/language',
                  description: 'A dropdown designed for language selection.',
                },
                {
                  name: 'mega-menu',
                  path: 'dropdowns/mega-menu',
                  description: 'An expansive dropdown designed for extensive navigation.',
                },
                {
                  name: 'profile',
                  path: 'dropdowns/profile',
                  description: 'Profile-centric dropdown with user details.',
                },
                {
                  name: 'selected',
                  path: 'dropdowns/selected',
                  description: '',
                },
                {
                  name: 'selected-accent',
                  path: 'dropdowns/selected-accent',
                  description: '',
                },
                {
                  name: 'transitions',
                  path: 'dropdowns/transitions',
                  description: 'Dropdown with smooth transitions for interactions.',
                },
              ],
            },
            {
              type: 'ratings',
              image: <RatingsSvg />,
              variants: [
                {
                  name: 'basic',
                  path: 'ratings/basic',
                  description: 'A simple rating system with standard star icons.',
                },
                {
                  name: 'hover',
                  path: 'ratings/hover',
                  description:
                    'Displays a preview of the rating value when users hover over the stars.',
                },
                {
                  name: 'icons',
                  path: 'ratings/icons',
                  description:
                    'Uses custom icons for ratings instead of the traditional star icons.',
                },
                {
                  name: 'precision',
                  path: 'ratings/precision',
                  description:
                    'Allows users to select ratings with decimal values, for more precise feedback.',
                },
                {
                  name: 'radio',
                  path: 'ratings/radio',
                  description:
                    'Integrates radio buttons to select ratings, providing a different user experience.',
                },
                {
                  name: 'sizes',
                  path: 'ratings/sizes',
                  description:
                    'Showcases different sizes of the rating icons, catering to varied design needs.',
                },
              ],
            },
            {
              type: 'accordions',
              image: <AccordionsSvg />,
              variants: [
                {
                  name: 'alternate',
                  path: 'accordions/alternate',
                  description: 'An alternate style accordion with customizable features.',
                },
                {
                  name: 'avatar',
                  path: 'accordions/avatar',
                  description: 'Accordion design incorporating avatars for visual representation.',
                },
                {
                  name: 'basic',
                  path: 'accordions/basic',
                  description: 'A basic, straightforward accordion layout for general use.',
                },
                {
                  name: 'filters',
                  path: 'accordions/filters',
                  description: '',
                },
                {
                  name: 'plus',
                  path: 'accordions/plus',
                  description:
                    'An enhanced accordion with additional features and functionalities.',
                },
              ],
            },
            {
              type: 'progress-indicators',
              image: <ProgressIndicatorsSvg />,
              variants: [
                {
                  name: 'circular',
                  path: 'progress-indicators/circular',
                  description: 'Circular format for a minimalistic progress indication.',
                },
                {
                  name: 'circular-colors',
                  path: 'progress-indicators/circular-colors',
                  description: 'Colorful circular bars to represent various progress states.',
                },
                {
                  name: 'linear',
                  path: 'progress-indicators/linear',
                  description: 'Straightforward horizontal progress tracking.',
                },
                {
                  name: 'linear-alternate',
                  path: 'progress-indicators/linear-alternate',
                  description: 'Creative twist on the standard linear bar.',
                },
                {
                  name: 'linear-alternate-slim',
                  path: 'progress-indicators/linear-alternate-slim',
                  description:
                    'A sleek, slim linear progress bar perfect for minimalist interfaces.',
                },
                {
                  name: 'linear-buffer',
                  path: 'progress-indicators/linear-buffer',
                  description: 'Linear bar with buffering for uncertain timelines.',
                },
                {
                  name: 'linear-indeterminate',
                  path: 'progress-indicators/linear-indeterminate',
                  description: 'Indicates ongoing, undefined progress.',
                },
                {
                  name: 'linear-gradients',
                  path: 'progress-indicators/linear-gradients',
                  description:
                    'A linear progress bar with gradient effects for a modern, dynamic look.',
                },
              ],
            },
          ],
        },
        {
          name: 'Navigation',
          components: [
            {
              type: 'horizontal-menus',
              image: <HorizontalMenusSvg />,
              variants: [
                {
                  name: 'accent-dropdown',
                  path: 'horizontal-menus/accent-dropdown',
                  description: 'A horizontal menu featuring dropdowns with accentuated styling.',
                },
                {
                  name: 'basic-dropdown',
                  path: 'horizontal-menus/basic-dropdown',
                  description:
                    'A straightforward horizontal menu with basic dropdown functionality.',
                },
                {
                  name: 'line',
                  path: 'horizontal-menus/line',
                  description:
                    'A line-styled horizontal menu offering a sleek and minimalistic design.',
                },
                {
                  name: 'pills',
                  path: 'horizontal-menus/pills',
                  description:
                    'Pill-shaped menu items for a modern, rounded look in horizontal navigation.',
                },
                {
                  name: 'rounded',
                  path: 'horizontal-menus/rounded',
                  description:
                    'A horizontal menu with rounded edges, offering a smooth, friendly aesthetic.',
                },
                {
                  name: 'tabs',
                  path: 'horizontal-menus/tabs',
                  description:
                    'Tab-like horizontal menu items for intuitive, sectioned navigation.',
                },
                {
                  name: 'tabs-dropdown',
                  path: 'horizontal-menus/tabs-dropdown',
                  description:
                    'Combines tab navigation with dropdown elements for a comprehensive menu.',
                },
              ],
            },
            {
              type: 'vertical-menus',
              image: <VerticalMenusSvg />,
              variants: [
                {
                  name: 'accent-dropdown',
                  path: 'vertical-menus/accent-dropdown',
                  description: 'A vertical menu with an accentuated dropdown style.',
                },
                {
                  name: 'brand-dropdown',
                  path: 'vertical-menus/brand-dropdown',
                  description: 'Vertical menu featuring a branded dropdown design.',
                },
                {
                  name: 'dark-dropdown',
                  path: 'vertical-menus/dark-dropdown',
                  description: 'A dark-themed dropdown menu for vertical navigation.',
                },
                {
                  name: 'gray-dropdown',
                  path: 'vertical-menus/gray-dropdown',
                  description:
                    'Vertical menu with a gray dropdown design, offering a neutral aesthetic.',
                },
                {
                  name: 'grid',
                  path: 'vertical-menus/grid',
                  description: 'Vertical menu arranged in a grid format.',
                },
                {
                  name: 'grid-accent',
                  path: 'vertical-menus/grid-accent',
                  description: 'A grid-style vertical menu with accentuated elements.',
                },
                {
                  name: 'grid-centered',
                  path: 'vertical-menus/grid-centered',
                  description: 'Vertical menu in a grid layout with centered alignment.',
                },
                {
                  name: 'grid-description',
                  path: 'vertical-menus/grid-gradients',
                  description: 'Grid-based vertical menu with additional descriptive elements.',
                },
                {
                  name: 'grid-gradients',
                  path: 'vertical-menus/grid-gradients',
                  description: 'Vertical menu in a grid layout featuring gradient styling.',
                },
                {
                  name: 'indicator',
                  path: 'vertical-menus/indicator',
                  description: 'Vertical menu with indicators for active or focused items.',
                },
                {
                  name: 'pills',
                  path: 'vertical-menus/pills',
                  description: 'Vertical menu styled with pill-shaped elements.',
                },
                {
                  name: 'rounded',
                  path: 'vertical-menus/rounded',
                  description: 'Vertical menu with rounded design elements.',
                },
                {
                  name: 'rounded-dropdown',
                  path: 'vertical-menus/rounded-dropdown',
                  description: 'A vertical menu with a rounded dropdown style.',
                },
                {
                  name: 'small',
                  path: 'vertical-menus/small',
                  description: 'Compact vertical menu with smaller elements.',
                },
                {
                  name: 'square',
                  path: 'vertical-menus/square',
                  description: 'Vertical menu with square-shaped elements.',
                },
                {
                  name: 'state',
                  path: 'vertical-menus/state',
                  description:
                    'Vertical menu with elements that change based on state (active, inactive, hover, etc.).',
                },
                {
                  name: 'white-dropdown',
                  path: 'vertical-menus/white-dropdown',
                  description: 'Vertical menu with a clean, white dropdown style.',
                },
              ],
            },
            {
              type: 'pagination',
              image: <PaginationSvg />,
              variants: [
                {
                  name: 'basic',
                  path: 'pagination/basic',
                  description:
                    'A standard, straightforward pagination layout suitable for most applications.',
                },
                {
                  name: 'buttons',
                  path: 'pagination/buttons',
                  description: 'Pagination using button elements for navigation between pages.',
                },
                {
                  name: 'full-width',
                  path: 'pagination/full-width',
                  description:
                    'A full-width pagination layout, extending across the available space.',
                },
                {
                  name: 'outlined',
                  path: 'pagination/outlined',
                  description:
                    'Pagination with an outlined style, providing a clear boundary for each page link.',
                },
                {
                  name: 'ranges',
                  path: 'pagination/ranges',
                  description:
                    'Pagination that includes range selection, allowing users to jump between wider intervals.',
                },
                {
                  name: 'rounded',
                  path: 'pagination/rounded',
                  description: 'Pagination with rounded edges for a softer, more modern look.',
                },
                {
                  name: 'simple',
                  path: 'pagination/simple',
                  description:
                    'A simplified version of pagination, focusing on minimalism and ease of use.',
                },
                {
                  name: 'sizes',
                  path: 'pagination/sizes',
                  description:
                    'Various size options for pagination, allowing customization to fit different design needs.',
                },
                {
                  name: 'table',
                  path: 'pagination/table',
                  description:
                    'Pagination designed specifically for use with tables, integrating seamlessly into tabular layouts.',
                },
              ],
            },
            {
              type: 'tabs',
              image: <TabsSvg />,
              variants: [
                {
                  name: 'alternate',
                  path: 'tabs/alternate',
                  description:
                    'An alternate design of tabs, offering a unique style different from the basic layout.',
                },
                {
                  name: 'basic',
                  path: 'tabs/basic',
                  description:
                    'The fundamental and standard design of tabs for navigation and content organization.',
                },
                {
                  name: 'basic-alternate',
                  path: 'tabs/basic-alternate',
                  description:
                    'A variation of the basic tabs, offering an alternative visual style.',
                },
                {
                  name: 'basic-gradient',
                  path: 'tabs/basic-gradient',
                  description: '',
                },
                {
                  name: 'line',
                  path: 'tabs/line',
                  description:
                    'Tabs with a line indicator, providing a clean and minimalist design.',
                },
                {
                  name: 'line-alternate',
                  path: 'tabs/line-alternate',
                  description:
                    'A line-style tabs variant with an alternate design approach for visual distinction.',
                },
                {
                  name: 'pills',
                  path: 'tabs/pills',
                  description:
                    'Pill-shaped tabs, offering a more rounded and distinct tab navigation option.',
                },
                {
                  name: 'rounded',
                  path: 'tabs/rounded',
                  description:
                    'Tabs with rounded corners, giving a softer and more approachable aesthetic.',
                },
                {
                  name: 'scrollable',
                  path: 'tabs/scrollable',
                  description:
                    'Tabs designed to be scrollable, suitable for accommodating a large number of tab items.',
                },
                {
                  name: 'shadow',
                  path: 'tabs/shadow',
                  description:
                    'Tabs featuring a shadow effect, adding depth and emphasis to the tab structure.',
                },
              ],
            },
            {
              type: 'steppers',
              image: <SteppersSvg />,
              variants: [
                {
                  name: 'bullets',
                  path: 'steppers/bullets',
                  description: 'Stepper design using bullet points to indicate steps in a process.',
                },
                {
                  name: 'bullets-stacked',
                  path: 'steppers/bullets-stacked',
                  description:
                    'A variation of bullet steppers with a stacked layout for a compact representation of steps.',
                },
                {
                  name: 'circles',
                  path: 'steppers/circles',
                  description: 'Circular steppers that visually represent steps in a process.',
                },
                {
                  name: 'circles-stacked',
                  path: 'steppers/circles-stacked',
                  description:
                    'Stacked circle steppers providing a vertically aligned representation of progress stages.',
                },
                {
                  name: 'line',
                  path: 'steppers/line',
                  description:
                    'A linear stepper design, indicating progress along a straight line.',
                },
                {
                  name: 'progress',
                  path: 'steppers/progress',
                  description:
                    'Progress steppers that showcase the advancement through stages in a clear, linear format.',
                },
              ],
            },
            {
              type: 'breadcrumbs',
              image: <BreadcrumbsSvg />,
              variants: [
                {
                  name: 'basic',
                  path: 'breadcrumbs/basic',
                  description: 'Standard breadcrumb navigation for basic website structures.',
                },
                {
                  name: 'chips',
                  path: 'breadcrumbs/chips',
                  description: 'Breadcrumb style using chip elements for each navigation point.',
                },
                {
                  name: 'collapsed',
                  path: 'breadcrumbs/collapsed',
                  description:
                    'Breadcrumbs that collapse to save space, showing key navigation points.',
                },
                {
                  name: 'full-width',
                  path: 'breadcrumbs/full-width',
                  description: 'Full-width breadcrumb design for broader navigation visibility.',
                },
                {
                  name: 'icons',
                  path: 'breadcrumbs/icons',
                  description: 'Breadcrumbs with icons, adding visual cues to navigation links.',
                },
                {
                  name: 'last-active',
                  path: 'breadcrumbs/last-active',
                  description:
                    'Breadcrumb style where the last item is highlighted as the current page.',
                },
                {
                  name: 'navigation',
                  path: 'breadcrumbs/navigation',
                  description: '',
                },
                {
                  name: 'rounded',
                  path: 'breadcrumbs/rounded',
                  description: 'Breadcrumbs with rounded edges for a softer UI appearance.',
                },
                {
                  name: 'separators',
                  path: 'breadcrumbs/separators',
                  description: 'Breadcrumbs with customized separators between navigation items.',
                },
              ],
            },
            {
              type: 'speed-dials',
              image: <SpeedDialsSvg />,
              variants: [
                {
                  name: 'custom-close-icon',
                  path: 'speed-dials/custom-close-icon',
                  description:
                    'Speed dial variant with a custom icon for closing, providing a unique user interface element.',
                },
                {
                  name: 'persistent-tooltips',
                  path: 'speed-dials/persistent-tooltips',
                  description:
                    'Speed dial featuring persistent tooltips, offering constant visual cues for each action.',
                },
                {
                  name: 'positions',
                  path: 'speed-dials/positions',
                  description:
                    'This variant demonstrates different positioning options for speed dials within the UI.',
                },
              ],
            },
          ],
        },
        {
          name: 'Feedback',
          components: [
            {
              type: 'alerts',
              image: <AlertsSvg />,
              variants: [
                {
                  name: 'actions',
                  path: 'alerts/actions',
                  description: 'Alerts designed for interactive user actions.',
                },
                {
                  name: 'basic',
                  path: 'alerts/basic',
                  description: 'Simple and straightforward alert layout for general purposes.',
                },
                {
                  name: 'completed',
                  path: 'alerts/completed',
                  description: 'Alerts indicating the completion of a process or task.',
                },
                {
                  name: 'completed-alternate',
                  path: 'alerts/completed-alternate',
                  description: 'An alternative design for alerts signaling task completion.',
                },
                {
                  name: 'description',
                  path: 'alerts/description',
                  description: 'Alerts focused on delivering detailed descriptions.',
                },
                {
                  name: 'failed',
                  path: 'alerts/failed',
                  description: 'Alerts specifically for notifying about failures or errors.',
                },
                {
                  name: 'failed-alternate',
                  path: 'alerts/failed-alternate',
                  description: 'Alternative design for alerts related to failures or errors.',
                },
                {
                  name: 'filled',
                  path: 'alerts/outlined',
                  description: 'Solidly filled alerts for high visibility.',
                },
                {
                  name: 'icons',
                  path: 'alerts/icons',
                  description: 'Icon-based alerts for quick visual communication.',
                },
                {
                  name: 'notification',
                  path: 'alerts/notification',
                  description: 'General notification alerts for various purposes.',
                },
                {
                  name: 'notification-alternate',
                  path: 'alerts/notification-alternate',
                  description: 'An alternative style for general notification alerts.',
                },
                {
                  name: 'outlined',
                  path: 'alerts/outlined',
                  description: 'Alerts with outlined designs for a distinct appearance.',
                },
                {
                  name: 'progress',
                  path: 'alerts/progress',
                  description: 'Alerts indicating progress of ongoing tasks or processes.',
                },
                {
                  name: 'progress-alternate',
                  path: 'alerts/progress-alternate',
                  description: 'Alternate design for alerts showing task or process progress.',
                },
                {
                  name: 'transition',
                  path: 'alerts/transition',
                  description: 'Alerts designed to indicate transitions or changes.',
                },
              ],
            },
            {
              type: 'empty-states',
              image: <EmptyStatesSvg />,
              variants: [
                {
                  name: 'basic',
                  path: 'empty-states/basic',
                  description: 'A standard empty state layout for general purposes.',
                },
                {
                  name: 'basic-large',
                  path: 'empty-states/basic-large',
                  description: '',
                },
                {
                  name: 'basic-small',
                  path: 'empty-states/basic-small',
                  description: 'A compact version of the basic empty state for smaller areas.',
                },
                {
                  name: 'dashed-action',
                  path: 'empty-states/dashed-action',
                  description: 'An empty state with a dashed outline and a call to action.',
                },
                {
                  name: 'image-title',
                  path: 'empty-states/image-title',
                  description: 'An empty state featuring an image with a title.',
                },
                {
                  name: 'next-steps',
                  path: 'empty-states/next-steps',
                  description: 'This layout suggests the next steps a user can take.',
                },
                {
                  name: 'no-results',
                  path: 'empty-states/no-results',
                  description: 'Used to indicate when no results are found in a search or query.',
                },
                {
                  name: 'recommandations',
                  path: 'empty-states/recommandations',
                  description: 'A layout tailored for presenting recommendations or suggestions.',
                },
                {
                  name: 'title-action',
                  path: 'empty-states/title-action',
                  description: 'An empty state layout with a title and a primary action.',
                },
                {
                  name: 'title-description',
                  path: 'empty-states/title-description',
                  description: 'An empty state that combines a title with a descriptive text.',
                },
                {
                  name: 'title-description-action',
                  path: 'empty-states/title-description-action',
                  description:
                    'An empty state that features a title, description, and an action button.',
                },
              ],
            },
            {
              type: 'skeleton',
              image: <SkeletonSvg />,
              variants: [
                {
                  name: 'animation',
                  path: 'skeleton/animation',
                  description:
                    'Skeleton screen with animation effects for a dynamic loading experience.',
                },
                {
                  name: 'basic',
                  path: 'skeleton/basic',
                  description:
                    'A basic skeleton screen layout, providing a placeholder while content is loading.',
                },
                {
                  name: 'color',
                  path: 'skeleton/color',
                  description:
                    'Skeleton screen featuring color variations to match different design themes.',
                },
                {
                  name: 'pulsate',
                  path: 'skeleton/pulsate',
                  description:
                    'Skeleton screen with a pulsating effect, indicating content is in the process of loading.',
                },
                {
                  name: 'wave',
                  path: 'skeleton/wave',
                  description:
                    'A skeleton screen with a wave-like loading animation for a visually engaging placeholder.',
                },
              ],
            },
          ],
        },
        {
          name: 'Headings',
          components: [
            {
              type: 'page-headings',
              image: <PageHeadingsSvg />,
              variants: [
                {
                  name: 'basic',
                  path: 'page-headings/basic',
                  description:
                    'A standard page heading layout with a clear and straightforward design.',
                },
                {
                  name: 'basic-actions',
                  path: 'page-headings/basic-actions',
                  description:
                    'A basic page heading format enhanced with action buttons for user interaction.',
                },
                {
                  name: 'breadcrumb',
                  path: 'page-headings/breadcrumb',
                  description:
                    'A page heading layout featuring breadcrumb navigation for enhanced user guidance.',
                },
                {
                  name: 'breadcrumbs-inner',
                  path: 'page-headings/breadcrumbs-inner',
                  description:
                    'A unique heading style that integrates breadcrumbs within the header for a seamless navigation experience.',
                },
                {
                  name: 'icon',
                  path: 'page-headings/icon',
                  description:
                    'A visually appealing page heading design that includes thematic icons for an enhanced visual appeal.',
                },
                {
                  name: 'icon-actions',
                  path: 'page-headings/icon-actions',
                  description:
                    'Combines iconic elements with actionable buttons, offering both aesthetic and functional benefits.',
                },
                {
                  name: 'icon-breadcrumbs',
                  path: 'page-headings/icon-breadcrumbs',
                  description:
                    'This variant merges icons with breadcrumb trails, providing a rich and navigable heading structure.',
                },
                {
                  name: 'tabs',
                  path: 'page-headings/tabs',
                  description:
                    'Incorporates tabbed navigation within the page heading, offering a clean and organized layout.',
                },
                {
                  name: 'tabs-breadcrumbs',
                  path: 'page-headings/tabs-breadcrumbs',
                  description:
                    'A sophisticated layout that combines tabs and breadcrumbs for a comprehensive navigation experience.',
                },
              ],
            },
            {
              type: 'card-headings',
              image: <CardHeadingsSvg />,
              variants: [
                {
                  name: 'avatar',
                  path: 'card-headings/avatar',
                  description: 'A simple card heading with an avatar.',
                },
                {
                  name: 'avatar-actions',
                  path: 'card-headings/avatar-actions',
                  description: 'A card heading featuring an avatar with associated actions.',
                },
                {
                  name: 'avatar-actions-alternate',
                  path: 'card-headings/avatar-actions-alternate',
                  description: 'An alternate layout for the avatar card heading with actions.',
                },
                {
                  name: 'centered-title',
                  path: 'card-headings/centered-title',
                  description: 'A card heading with a title centered within.',
                },
                {
                  name: 'centered-title-description',
                  path: 'card-headings/centered-title-description',
                  description: 'A centered title card heading accompanied by a brief description.',
                },
                {
                  name: 'title',
                  path: 'card-headings/title',
                  description: 'A straightforward card heading with a title.',
                },
                {
                  name: 'title-action',
                  path: 'card-headings/title-action',
                  description: 'A title-based card heading that includes an action button.',
                },
                {
                  name: 'title-chip',
                  path: 'card-headings/title-chip',
                  description:
                    'Card heading featuring a title with an accompanying chip for added context.',
                },
                {
                  name: 'title-description',
                  path: 'card-headings/title-description',
                  description: 'A card heading featuring a title followed by a short description.',
                },
                {
                  name: 'title-description-actions',
                  path: 'card-headings/title-description-actions',
                  description: 'A card heading with a title, description, and associated actions.',
                },
                {
                  name: 'title-description-centered-reversed',
                  path: 'card-headings/title-description-centered-reversed',
                  description:
                    'Card heading with a centered title and reversed layout, accompanied by a description.',
                },
                {
                  name: 'title-description-reversed',
                  path: 'card-headings/title-description-reversed',
                  description:
                    'Card heading with a reversed layout, featuring a title followed by a description.',
                },
                {
                  name: 'title-description-reversed-avatar',
                  path: 'card-headings/title-description-reversed-avatar',
                  description:
                    'A reversed layout card heading with a title, description, and an avatar.',
                },
                {
                  name: 'title-description-reversed-well',
                  path: 'card-headings/title-description-reversed-well',
                  description:
                    'Card heading with a reversed layout, title, and description, presented in a well-defined style.',
                },
                {
                  name: 'title-description-tabs',
                  path: 'card-headings/title-description-tabs',
                  description:
                    'A card heading featuring a title, description, and tabbed navigation options.',
                },
                {
                  name: 'title-large',
                  path: 'card-headings/title-large',
                  description: 'A card heading with a prominently displayed large title.',
                },
                {
                  name: 'title-large-description',
                  path: 'card-headings/title-large-description',
                  description: 'A large title card heading accompanied by a description.',
                },
              ],
            },
            {
              type: 'section-headings',
              image: <SectionHeadingsSvg />,
              variants: [
                {
                  name: 'basic',
                  path: 'section-headings/basic',
                  description:
                    'A straightforward and traditional design for section headings, suitable for various content types.',
                },
                {
                  name: 'tabs',
                  path: 'section-headings/tabs',
                  description:
                    'Section headings designed with a tabbed interface, ideal for categorizing content within a section.',
                },
                {
                  name: 'value-pairs',
                  path: 'section-headings/value-pairs',
                  description:
                    'Headings that incorporate key-value pairs, useful for sections with data-driven content.',
                },
              ],
            },
          ],
        },
        {
          name: 'Overlays',
          components: [
            {
              type: 'notifications',
              image: <NotificationsSvg />,
              variants: [
                {
                  name: 'backup',
                  path: 'notifications/backup',
                  description:
                    'Notification layout focused on backup-related actions or status updates.',
                },
                {
                  name: 'call-request',
                  path: 'notifications/call-request',
                  description:
                    'A notification design specifically for call requests or communication alerts.',
                },
                {
                  name: 'failed',
                  path: 'notifications/failed',
                  description: 'Notification variant indicating failed processes or errors.',
                },
                {
                  name: 'failed-alternate',
                  path: 'notifications/failed-alternate',
                  description:
                    'An alternative layout for notifications related to failures or errors.',
                },
                {
                  name: 'message',
                  path: 'notifications/message',
                  description:
                    'Designed to display message-related notifications, possibly with user interaction options.',
                },
                {
                  name: 'positions',
                  path: 'notifications/positions',
                  description:
                    'Notifications with a focus on varying positions or layouts within the user interface.',
                },
                {
                  name: 'request',
                  path: 'notifications/request',
                  description:
                    'Notification style tailored for requests, such as permissions or user actions.',
                },
                {
                  name: 'states',
                  path: 'notifications/states',
                  description:
                    'Notification variants designed to reflect different states or statuses.',
                },
                {
                  name: 'update',
                  path: 'notifications/update',
                  description:
                    'A notification layout specifically for updates, such as software or status changes.',
                },
                {
                  name: 'user',
                  path: 'notifications/user',
                  description:
                    'User-centric notification design, likely incorporating user data or actions.',
                },
              ],
            },
            {
              type: 'dialogs',
              image: <DialogsSvg />,
              variants: [
                {
                  name: 'alert',
                  path: 'dialogs/alert',
                  description:
                    'Dialogs designed for alert messages, warnings, or critical information.',
                },
                {
                  name: 'alert-alternate',
                  path: 'dialogs/alert-alternate',
                  description: '',
                },
                {
                  name: 'basic',
                  path: 'dialogs/basic',
                  description:
                    'Basic dialog layout for general use, adaptable for various content types.',
                },
                {
                  name: 'body-scroll',
                  path: 'dialogs/body-scroll',
                  description: 'Dialogs with a body-scroll feature for lengthy content.',
                },
                {
                  name: 'confirmation',
                  path: 'dialogs/confirmation',
                  description:
                    'Dialogs specifically designed for confirmation actions, such as accepting or declining.',
                },
                {
                  name: 'confirmation-alternate',
                  path: 'dialogs/confirmation-alternate',
                  description:
                    'An alternative style for confirmation dialogs, offering a different visual approach.',
                },
                {
                  name: 'content-scroll',
                  path: 'dialogs/content-scroll',
                  description:
                    'Dialogs with scrollable content, suitable for presenting detailed information.',
                },
                {
                  name: 'content-scroll-well',
                  path: 'dialogs/content-scroll-well',
                  description:
                    "Scrollable content dialogs with a 'well' design for depth and emphasis.",
                },
                {
                  name: 'customization',
                  path: 'dialogs/customization',
                  description:
                    'Customizable dialogs that can be tailored to specific user needs or preferences.',
                },
                {
                  name: 'full-screen',
                  path: 'dialogs/full-screen',
                  description:
                    'Full-screen dialogs for immersive content presentation or complex interactions.',
                },
                {
                  name: 'sidebar-navigation',
                  path: 'dialogs/sidebar-navigation',
                  description:
                    'Dialogs featuring sidebar navigation for efficient user flow and organization.',
                },
                {
                  name: 'tabs-navigation',
                  path: 'dialogs/tabs-navigation',
                  description:
                    'Dialogs organized with tabbed navigation for structured content display.',
                },
                {
                  name: 'transitions',
                  path: 'dialogs/transitions',
                  description:
                    'Dialogs enhanced with transition effects for a dynamic user experience.',
                },
              ],
            },
            {
              type: 'navigation-overlays',
              image: <NavigationOverlaysSvg />,
              variants: [
                {
                  name: 'basic',
                  path: 'navigation-overlays/basic',
                  description:
                    'A straightforward navigation overlay, providing essential navigation elements in a clear layout.',
                },
                {
                  name: 'search-alternate',
                  path: 'navigation-overlays/search-alternate',
                  description:
                    'An alternate design for a search-focused navigation overlay, possibly featuring enhanced functionality or styling.',
                },
                {
                  name: 'tabs',
                  path: 'navigation-overlays/tabs',
                  description:
                    'Navigation overlay utilizing a tabbed interface for organized and accessible content.',
                },
              ],
            },
            {
              type: 'drawers',
              image: <DrawersSvg />,
              variants: [
                {
                  name: 'basic-dark-backdrop',
                  path: 'drawers/basic-dark-backdrop',
                  description:
                    'Drawer variant with a dark backdrop, providing a strong visual contrast.',
                },
                {
                  name: 'basic-invisible-backdrop',
                  path: 'drawers/basic-invisible-backdrop',
                  description:
                    'Drawer with an invisible backdrop for a seamless integration with the page.',
                },
                {
                  name: 'basic-light-backdrop',
                  path: 'drawers/basic-light-backdrop',
                  description:
                    'Standard drawer style with a light backdrop for subtle visual separation.',
                },
                {
                  name: 'dark',
                  path: 'drawers/dark',
                  description: 'Drawer with a dark theme, offering a sleek and modern look.',
                },
                {
                  name: 'file-details',
                  path: 'drawers/file-details',
                  description:
                    'Drawer specifically designed to present file details or document information.',
                },
                {
                  name: 'multi-column',
                  path: 'drawers/multi-column',
                  description: 'Multi-column drawer for organizing content or navigation elements.',
                },
                {
                  name: 'notifications',
                  path: 'drawers/notifications',
                  description: '',
                },
                {
                  name: 'widgets',
                  path: 'drawers/widgets',
                  description:
                    'Drawer featuring an outlined container, ideal for showing widgets data.',
                },
                {
                  name: 'positions',
                  path: 'drawers/positions',
                  description:
                    'Drawer showcasing various positioning options for different UI contexts.',
                },
                {
                  name: 'wide-form',
                  path: 'drawers/wide-form',
                  description: 'A wide drawer variant, suitable for forms or extended content.',
                },
              ],
            },
            {
              type: 'popovers',
              image: <PopoversSvg />,
              variants: [
                {
                  name: 'basic',
                  path: 'popovers/basic',
                  description:
                    'A straightforward popover for simple contextual information display.',
                },
                {
                  name: 'composed',
                  path: 'popovers/composed',

                  description:
                    'Advanced popover combining multiple elements for richer content presentation.',
                },
                {
                  name: 'dark',
                  path: 'popovers/dark',
                  description: 'A dark-themed popover for a striking visual contrast in UIs.',
                },
                {
                  name: 'hover',
                  path: 'popovers/hover',
                  description:
                    'Popover triggered by hover action, ideal for user-friendly interactions.',
                },
                {
                  name: 'positions',
                  path: 'popovers/positions',
                  description:
                    'Versatile popover with adjustable positions for flexible UI placement.',
                },
              ],
            },
            {
              type: 'tooltips',
              image: <TooltipsSvg />,
              variants: [
                {
                  name: 'basic',
                  path: 'tooltips/basic',
                  description: 'A simple and essential tooltip for concise information display.',
                },
                {
                  name: 'colors',
                  path: 'tooltips/colors',
                  description: 'Colorful tooltips to add visual interest and categorization.',
                },
                {
                  name: 'light',
                  path: 'tooltips/light',
                  description: 'A light-themed tooltip for a subtle and clean appearance.',
                },
                {
                  name: 'positions',
                  path: 'tooltips/positions',
                  description:
                    'Adjustable positioned tooltips for contextual relevance and flexibility.',
                },
              ],
            },
          ],
        },
        {
          name: 'Lists',
          components: [
            {
              type: 'stacked-lists',
              image: <StackedListsSvg />,
              variants: [
                {
                  name: 'account-security',
                  path: 'stacked-lists/account-security',
                  description: 'This card variant comes with a header section.',
                },
                {
                  name: 'avatar-label-action',
                  path: 'stacked-lists/avatar-label-action',
                  description: 'Stacked list featuring avatars, labels, and action items.',
                },
                {
                  name: 'chat',
                  path: 'stacked-lists/chat',
                  description: 'A stacked list layout designed for chat interfaces.',
                },
                {
                  name: 'doctors-list',
                  path: 'stacked-lists/doctors-list',
                  description:
                    'List focusing on doctor profiles, ideal for healthcare applications.',
                },
                {
                  name: 'landing-pages',
                  path: 'stacked-lists/landing-pages',
                  description: 'List variant showcasing different landing page designs or options.',
                },
                {
                  name: 'latest-actions',
                  path: 'stacked-lists/latest-actions',
                  description: 'A list displaying the most recent actions or activities.',
                },
                {
                  name: 'latest-issues',
                  path: 'stacked-lists/latest-issues',
                  description:
                    'List detailing recent issues or concerns, suitable for tracking or management interfaces.',
                },
                {
                  name: 'members-select-input',
                  path: 'stacked-stacked-lists/members-select-input',
                  description:
                    'A list design for selecting members, with input fields for filtering or adding members.',
                },
                {
                  name: 'messenger',
                  path: 'stacked-lists/messenger',
                  description:
                    'A list layout designed for messenger or chat application interfaces.',
                },
                {
                  name: 'navigation-pills',
                  path: 'stacked-lists/navigation-pills',
                  description:
                    'A navigational list using pill-style elements for selecting different views or sections.',
                },
                {
                  name: 'open-tickets',
                  path: 'stacked-lists/open-tickets',
                  description:
                    'List focused on displaying open or active tickets, commonly used in helpdesk or support tools.',
                },
                {
                  name: 'patient-notifications',
                  path: 'stacked-lists/patient-notifications',
                  description:
                    'List layout for showing notifications or updates specifically for patients.',
                },
                {
                  name: 'portfolio',
                  path: 'stacked-lists/portfolio',
                  description: 'List variant designed to showcase portfolio items or projects.',
                },
                {
                  name: 'pricing-plans',
                  path: 'stacked-lists/pricing-plans',
                  description:
                    'List layout ideal for presenting different pricing plans or packages.',
                },
                {
                  name: 'products-roadmap',
                  path: 'stacked-lists/products-roadmap',
                  description:
                    'A list format that outlines a roadmap or timeline for product development.',
                },
                {
                  name: 'recent-activity',
                  path: 'stacked-lists/recent-activity',
                  description: 'List highlighting recent activities or user interactions.',
                },
                {
                  name: 'recent-files',
                  path: 'stacked-lists/recent-files',
                  description: 'List showing recently accessed or modified files.',
                },
                {
                  name: 'recent-transactions',
                  path: 'stacked-lists/recent-transactions',
                  description:
                    'A list layout focusing on recent financial transactions or account activity.',
                },
                {
                  name: 'shopping-card',
                  path: 'stacked-lists/shopping-card',
                  description:
                    'A list variant used for shopping cart interfaces, showing selected items and pricing.',
                },
                {
                  name: 'top-grossing',
                  path: 'stacked-lists/top-grossing',
                  description:
                    'List showcasing top-grossing items or categories, useful for sales and marketing insights.',
                },
                {
                  name: 'top-sellers',
                  path: 'stacked-lists/top-sellers',
                  description:
                    'A list focused on top-selling products or services, highlighting market trends.',
                },
                {
                  name: 'top-trainers',
                  path: 'stacked-lists/top-trainers',
                  description:
                    'List featuring top trainers or instructors, likely in a fitness or educational context.',
                },
                {
                  name: 'transactions',
                  path: 'stacked-lists/transactions',
                  description:
                    'List layout displaying transaction details, commonly used in financial applications.',
                },
                {
                  name: 'upcoming-consults',
                  path: 'stacked-lists/upcoming-consults',
                  description:
                    'A list of upcoming consultations or appointments, particularly relevant in healthcare settings.',
                },
                {
                  name: 'updates',
                  path: 'stacked-lists/updates',
                  description: 'List designed to inform users about recent updates or changes.',
                },
                {
                  name: 'user-analytics',
                  path: 'stacked-lists/user-analytics',
                  description: 'A list format that presents analytics for various metrics.',
                },
                {
                  name: 'users-list',
                  path: 'stacked-lists/users-list',
                  description: 'A list format that presents user profiles or account information.',
                },
                {
                  name: 'virtual-servers',
                  path: 'stacked-lists/virtual-servers',
                  description: 'List detailing virtual server instances or configurations.',
                },
                {
                  name: 'weekly-sales',
                  path: 'stacked-lists/weekly-sales',
                  description: 'A list focusing on sales data compiled on a weekly basis.',
                },
              ],
            },
            {
              type: 'horizontal-lists',
              image: <HorizontalListsSvg />,
              variants: [
                {
                  name: 'horizontal-icons',
                  path: 'horizontal-lists/horizontal-icons',
                  description: 'A horizontal list layout emphasizing icons for visual engagement.',
                },
                {
                  name: 'horizontal-numbers',
                  path: 'horizontal-lists/horizontal-numbers',
                  description:
                    'A numeric-focused horizontal list, ideal for rankings or statistics.',
                },
                {
                  name: 'icon-grids',
                  path: 'horizontal-lists/icon-grids',
                  description: 'Grid-style icon presentations in a horizontal list format.',
                },
                {
                  name: 'invoice-stats',
                  path: 'horizontal-lists/invoice-stats',
                  description: '',
                },
                {
                  name: 'reports',
                  path: 'horizontal-lists/reports',
                  description:
                    'List designed for displaying various types of reports or analytics.',
                },
                {
                  name: 'revenue-progress',
                  path: 'horizontal-lists/revenue-progress',
                  description:
                    'A list layout tailored for tracking and displaying revenue progress.',
                },
                {
                  name: 'stats-blocks',
                  path: 'horizontal-lists/stats-blocks',
                  description:
                    'List format that presents key statistics or metrics in block format.',
                },
                {
                  name: 'team-overview',
                  path: 'horizontal-lists/team-overview',
                  description: '',
                },
                {
                  name: 'top-users',
                  path: 'horizontal-lists/top-users',
                  description: 'Designed to showcase top users or performers in a horizontal list.',
                },
              ],
            },
            {
              type: 'tables',
              image: <TablesSvg />,
              variants: [
                {
                  name: 'employee-status',
                  path: 'tables/employee-status',
                  description:
                    'Table layout designed to display employee status and related metrics.',
                },
                {
                  name: 'files',
                  path: 'tables/files',
                  description: '',
                },
                {
                  name: 'invoices',
                  path: 'tables/invoices',
                  description: '',
                },
                {
                  name: 'leaderboard',
                  path: 'tables/leaderboard',
                  description:
                    'A table format that presents a leaderboard, ideal for competitions or ranking scenarios.',
                },
                {
                  name: 'orders-list',
                  path: 'tables/orders-list',
                  description:
                    'Table designed to list orders, useful for tracking sales, inventory, or purchase orders.',
                },
                {
                  name: 'pending-tickets',
                  path: 'tables/pending-tickets',
                  description:
                    'Table layout focusing on tickets that are pending action or review.',
                },
                {
                  name: 'products',
                  path: 'tables/products',
                  description: '',
                },
                {
                  name: 'projects',
                  path: 'tables/projects',
                  description: '',
                },
                {
                  name: 'recent-orders',
                  path: 'tables/recent-orders',
                  description:
                    'Table showcasing recent orders, suitable for e-commerce or retail scenarios.',
                },
                {
                  name: 'recent-orders-card',
                  path: 'tables/recent-orders-card',
                  description:
                    'A card-style table layout displaying recent orders with additional design elements.',
                },
                {
                  name: 'recent-patients',
                  path: 'tables/recent-patients',
                  description:
                    'Table format for displaying recent patient records or appointments.',
                },
                {
                  name: 'security-logs',
                  path: 'tables/security-logs',
                  description: '',
                },
                {
                  name: 'technical-support',
                  path: 'tables/technical-support',
                  description: 'Table designed for listing technical support queries or tickets.',
                },
                {
                  name: 'top-products',
                  path: 'tables/top-products',
                  description: 'Table layout that highlights top-selling or most popular products.',
                },
                {
                  name: 'transactions-list',
                  path: 'tables/transactions-list',
                  description:
                    'Table format focusing on financial transactions, suitable for banking or accounting applications.',
                },
                {
                  name: 'users',
                  path: 'tables/users',
                  description: '',
                },
                {
                  name: 'weekly-sales',
                  path: 'tables/weekly-sales',
                  description:
                    'Table showcasing weekly sales data, ideal for retail or sales performance monitoring.',
                },
              ],
            },
            {
              type: 'timelines',
              image: <TimelinesSvg />,
              variants: [
                {
                  name: 'alternate',
                  path: 'timelines/alternate',
                  description:
                    'An alternate design for the timeline, offering a different visual approach.',
                },
                {
                  name: 'basic',
                  path: 'timelines/basic',
                  description:
                    'The fundamental and straightforward design of a timeline for chronological display.',
                },
                {
                  name: 'checklist',
                  path: 'timelines/checklist',
                  description: '',
                },
                {
                  name: 'events',
                  path: 'timelines/events',
                  description:
                    'A timeline layout specifically designed to showcase events in a chronological order.',
                },
                {
                  name: 'icons',
                  path: 'timelines/icons',
                  description:
                    'A timeline variant where each entry is represented with unique icons for visual emphasis.',
                },
                {
                  name: 'onboarding',
                  path: 'timelines/onboarding',
                  description: '',
                },
                {
                  name: 'tasks',
                  path: 'timelines/tasks',
                  description:
                    'A task-focused timeline, ideal for tracking project milestones or task completion.',
                },
              ],
            },
          ],
        },
        {
          name: 'Grid Data Display',
          components: [
            {
              type: 'data-grid-lists',
              image: <DataGridListsSvg />,
              variants: [
                {
                  name: 'avatar-groups-details',
                  path: 'data-grid-lists/avatar-groups-details',
                  description:
                    'A data grid list featuring avatars and group details, ideal for user-centric data.',
                },
                {
                  name: 'avatar-groups-details-accent',
                  path: 'data-grid-lists/avatar-groups-details-accent',
                  description:
                    'This avatars cards groups use an accent background for all the card examples.',
                },
                {
                  name: 'counter-card',
                  path: 'data-grid-lists/counter-card',
                  description:
                    'Grid list card focused on numerical counters, suitable for analytics and summaries.',
                },
                {
                  name: 'counter-card-accent',
                  path: 'data-grid-lists/counter-card-accent',
                  description:
                    'An accentuated version of the counter card, adding visual emphasis to data.',
                },
                {
                  name: 'numbers-icons-cards',
                  path: 'data-grid-lists/numbers-icons-cards',
                  description:
                    'Grid list combining numbers and icons for a visually engaging data presentation.',
                },
                {
                  name: 'numbers-icons-cards-accent',
                  path: 'data-grid-lists/numbers-icons-cards-accent',
                  description:
                    'Enhanced version of the numbers and icons cards with additional accent features.',
                },
                {
                  name: 'projects',
                  path: 'data-grid-lists/projects',
                  description: '',
                },
              ],
            },
            {
              type: 'stats-grid-lists',
              image: <StatsGridListsSvg />,
              variants: [
                {
                  name: 'accent-border',
                  path: 'stats-grid-lists/accent-border',
                  description:
                    'Grid lists featuring an accentuated border for a visually distinct appearance.',
                },
                {
                  name: 'accent-icon-indicators',
                  path: 'stats-grid-lists/accent-icon-indicators',
                  description:
                    'Statistical grids with accentuated icons serving as indicators for various metrics.',
                },
                {
                  name: 'accent-indicator-panels',
                  path: 'stats-grid-lists/accent-indicator-panels',
                  description:
                    'Panels with accent indicators, providing a clear and engaging display of statistics.',
                },
                {
                  name: 'accent-separator-numbers',
                  path: 'stats-grid-lists/accent-separator-numbers',
                  description:
                    'Grid lists with accented separators and numbers, emphasizing key statistical data.',
                },
                {
                  name: 'active-icon-cards',
                  path: 'stats-grid-lists/active-icon-cards',
                  description:
                    'Cards featuring active icons, designed to represent various statistical data points dynamically.',
                },
                {
                  name: 'active-subscriptions',
                  path: 'stats-grid-lists/active-subscriptions',
                  description:
                    'Lists focused on displaying information about active subscriptions in a statistical format.',
                },
                {
                  name: 'alternate-icon-indicators',
                  path: 'stats-grid-lists/alternate-icon-indicators',
                  description:
                    'Grid lists with an alternative approach to icon indicators, offering a fresh perspective on statistics.',
                },
                {
                  name: 'gradient-accent-border',
                  path: 'stats-grid-lists/gradient-accent-border',
                  description:
                    'Statistics grids featuring borders with gradient accents, adding a modern touch to data presentation.',
                },
                {
                  name: 'monthly-comparison',
                  path: 'stats-grid-lists/monthly-comparison',
                  description:
                    'Grid lists designed for comparing monthly statistics, ideal for tracking trends or changes over time.',
                },
                {
                  name: 'sales-alerts-alternate',
                  path: 'stats-grid-lists/sales-alerts-alternate',
                  description:
                    'Alternate design for sales alert grids, offering a different view of sales data and notifications.',
                },
                {
                  name: 'sales-stats',
                  path: 'stats-grid-lists/sales-stats',
                  description:
                    'Grid lists dedicated to showcasing sales statistics in an organized and accessible format.',
                },
                {
                  name: 'wallets',
                  path: 'stats-grid-lists/wallets',
                  description:
                    'Grid lists focusing on wallet statistics, suitable for financial applications or dashboards.',
                },
              ],
            },
            {
              type: 'description-grid-lists',
              image: <DescriptionGridListsSvg />,
              variants: [
                {
                  name: 'appointments',
                  path: 'description-grid-lists/appointments',
                  description: 'Grid lists designed to display appointment schedules or bookings.',
                },
                {
                  name: 'conferences',
                  path: 'description-grid-lists/conferences',
                  description:
                    'Lists tailored for showcasing conference schedules or speaker information.',
                },
                {
                  name: 'datacenter-clusters',
                  path: 'description-grid-lists/datacenter-clusters',
                  description:
                    'Grids focused on displaying datacenter clusters and related information.',
                },
                {
                  name: 'doctor-profile',
                  path: 'description-grid-lists/doctor-profile',
                  description:
                    'Specialized lists for presenting profiles and details of medical professionals.',
                },
                {
                  name: 'prescriptions-requests',
                  path: 'description-grid-lists/prescriptions-requests',
                  description:
                    'Lists for managing and displaying prescription requests and statuses.',
                },
                {
                  name: 'profile',
                  path: 'description-grid-lists/profile',
                  description: '',
                },
                {
                  name: 'profile-card',
                  path: 'description-grid-lists/profile-card',
                  description:
                    'Grid lists featuring profile cards for individual users or personnel.',
                },
                {
                  name: 'profile-details-accent',
                  path: 'description-grid-lists/profile-details-accent',
                  description: 'Enhanced profile detail lists with accent features for emphasis.',
                },
                {
                  name: 'profile-navigation-blocks',
                  path: 'description-grid-lists/profile-navigation-blocks',
                  description:
                    'Navigation-focused grid lists for detailed user profile interfaces.',
                },
                {
                  name: 'profile-progress',
                  path: 'description-grid-lists/profile-progress',
                  description:
                    'Grid lists displaying progress or achievements within user profiles.',
                },
                {
                  name: 'recent-questions',
                  path: 'description-grid-lists/recent-questions',
                  description: 'Lists for showcasing recently asked questions or FAQs.',
                },
                {
                  name: 'revenue-block',
                  path: 'description-grid-lists/revenue-block',
                  description: 'Lists aimed at presenting revenue statistics or financial data.',
                },
                {
                  name: 'top-agents',
                  path: 'description-grid-lists/top-agents',
                  description: 'Lists highlighting top-performing agents or employees.',
                },
                {
                  name: 'upcoming-events',
                  path: 'description-grid-lists/upcoming-events',
                  description: 'Grid lists detailing upcoming events, seminars, or meetings.',
                },
                {
                  name: 'user-blocks',
                  path: 'description-grid-lists/user-blocks',
                  description:
                    'User-centric blocks for displaying individual information or status.',
                },
                {
                  name: 'user-info-blocks',
                  path: 'description-grid-lists/user-info-blocks',
                  description:
                    'Grid lists specifically designed for detailed user information presentation.',
                },
              ],
            },
            {
              type: 'progress-grid-lists',
              image: <ProgressGridListsSvg />,
              variants: [
                {
                  name: 'budget',
                  path: 'progress-grid-lists/budget',
                  description: 'A progress grid focusing on budget tracking or financial goals.',
                },
                {
                  name: 'fitness-blocks',
                  path: 'progress-grid-lists/fitness-blocks',
                  description:
                    'Grid lists designed for fitness progress tracking, displaying various workout or health metrics.',
                },
                {
                  name: 'fitness-blocks-alternate',
                  path: 'progress-grid-lists/fitness-blocks-alternate',
                  description:
                    'An alternative layout for fitness progress, possibly offering a different perspective or metrics.',
                },
                {
                  name: 'gradient-accent-progress',
                  path: 'progress-grid-lists/gradient-accent-progress',
                  description:
                    'Progress grids featuring gradient accents, emphasizing visual appeal and clarity.',
                },
                {
                  name: 'gradient-horizontal-progress',
                  path: 'progress-grid-lists/gradient-horizontal-progress',
                  description:
                    'Horizontal progress indicators with gradient styling, providing a modern look.',
                },
                {
                  name: 'horizontal-status-progress',
                  path: 'progress-grid-lists/horizontal-status-progress',
                  description:
                    'Grids focused on horizontal progress indicators for various status updates or milestones.',
                },
                {
                  name: 'icon-progress-blocks',
                  path: 'progress-grid-lists/icon-progress-blocks',
                  description:
                    'Progress blocks incorporating icons for a more intuitive and engaging display.',
                },
                {
                  name: 'lists',
                  path: 'progress-grid-lists/lists',
                  description:
                    'List-based progress grids, ideal for tasks, goals, or step-by-step progress tracking.',
                },
                {
                  name: 'minimal-progress-cards',
                  path: 'progress-grid-lists/minimal-progress-cards',
                  description:
                    'A minimalistic approach to progress cards, focusing on simplicity and clarity.',
                },
                {
                  name: 'monthly-targets',
                  path: 'progress-grid-lists/monthly-targets',
                  description:
                    'Grids designed for tracking and visualizing progress towards monthly targets or goals.',
                },
                {
                  name: 'profile-card-alternate',
                  path: 'progress-grid-lists/profile-card-alternate',
                  description:
                    'An alternate design to the standard profile progress card, possibly with different metrics or layout.',
                },
                {
                  name: 'project-management',
                  path: 'progress-grid-lists/project-management',
                  description:
                    'Grid lists tailored for project management, showcasing progress in various aspects of projects.',
                },
                {
                  name: 'sales-country',
                  path: 'progress-grid-lists/sales-country',
                  description:
                    'Progress grids focusing on sales metrics, possibly segmented by country or region.',
                },
                {
                  name: 'sessions-country',
                  path: 'progress-grid-lists/sessions-country',
                  description:
                    'Grids displaying session data, potentially broken down by country or geographic region.',
                },
                {
                  name: 'shadow-icons-progress',
                  path: 'progress-grid-lists/shadow-icons-progress',
                  description:
                    'Icon-based progress indicators with shadow effects, adding depth and emphasis.',
                },
                {
                  name: 'status-progress-cards',
                  path: 'progress-grid-lists/status-progress-cards',
                  description:
                    'Progress cards that focus on status updates, ideal for tracking project milestones or personal achievements.',
                },
                {
                  name: 'team-performance',
                  path: 'progress-grid-lists/team-performance',
                  description:
                    'Grids showcasing team performance metrics, useful in corporate or collaborative environments.',
                },
                {
                  name: 'user-analytics',
                  path: 'progress-grid-lists/user-analytics',
                  description:
                    'Analytics-focused progress grids, providing insights into user behavior or engagement.',
                },
                {
                  name: 'weekly-sales',
                  path: 'progress-grid-lists/weekly-sales',
                  description:
                    'Weekly sales performance presented in a grid format, useful for tracking and analysis.',
                },
              ],
            },
            {
              type: 'image-grid-lists',
              image: <ImageGridListsSvg />,
              variants: [
                {
                  name: 'action-cards',
                  path: 'image-grid-lists/action-cards',
                  description:
                    'Image grid lists designed as action cards for interactive purposes.',
                },
                {
                  name: 'bank-account',
                  path: 'image-grid-lists/bank-account',
                  description:
                    'Grid lists themed around bank account information, featuring relevant images.',
                },
                {
                  name: 'bank-account-minimal',
                  path: 'image-grid-lists/bank-account-minimal',
                  description:
                    'A minimalistic design approach to bank account information in a grid list format.',
                },
                {
                  name: 'circle-profile-panel',
                  path: 'image-grid-lists/circle-profile-panel',
                  description: 'Circular profile images incorporated into a grid panel layout.',
                },
                {
                  name: 'commerce-cards',
                  path: 'image-grid-lists/commerce-cards',
                  description:
                    'Grid lists tailored for commerce and retail with image-focused cards.',
                },
                {
                  name: 'company-card',
                  path: 'image-grid-lists/company-card',
                  description: 'Corporate-themed image grid lists resembling company cards.',
                },
                {
                  name: 'dark-overlay',
                  path: 'image-grid-lists/dark-overlay',
                  description: 'Image grid lists with a dark overlay for added depth and focus.',
                },
                {
                  name: 'data-centers',
                  path: 'image-grid-lists/data-centers',
                  description:
                    'Grid lists focusing on data center themes, complete with relevant imagery.',
                },
                {
                  name: 'full-report',
                  path: 'image-grid-lists/full-report',
                  description:
                    'Grid lists designed to provide a comprehensive overview or full reports.',
                },
                {
                  name: 'gradient-fill',
                  path: 'image-grid-lists/gradient-fill',
                  description:
                    'Grid lists with a gradient fill, creating a visually appealing background.',
                },
                {
                  name: 'hover-cards',
                  path: 'image-grid-lists/hover-cards',
                  description:
                    'Interactive image grid lists that change or reveal content on hover.',
                },
                {
                  name: 'hover-reveal',
                  path: 'image-grid-lists/hover-reveal',
                  description:
                    'Grid lists with a hover effect that reveals additional information or options.',
                },
                {
                  name: 'monthly-goals',
                  path: 'image-grid-lists/monthly-goals',
                  description:
                    'Grid lists designed to track and display monthly goals or achievements.',
                },
                {
                  name: 'monthly-stats',
                  path: 'image-grid-lists/monthly-stats',
                  description: 'List showing statistics or data trends on a monthly basis.',
                },
                {
                  name: 'profile-image-cards',
                  path: 'image-grid-lists/profile-image-cards',
                  description:
                    'Grid lists showcasing profiles, each card featuring a prominent image.',
                },
                {
                  name: 'recent-courses',
                  path: 'image-grid-lists/recent-courses',
                  description: 'Grid lists focusing on recently accessed or available courses.',
                },
                {
                  name: 'rounded-profile-panel',
                  path: 'image-grid-lists/rounded-profile-panel',
                  description:
                    'Grid list panels with rounded profiles, often used for user interfaces.',
                },
                {
                  name: 'status-shadow-icons',
                  path: 'image-grid-lists/status-shadow-icons',
                  description:
                    'Grid lists where each item combines an image with status icons and shadow effects.',
                },
                {
                  name: 'training-programs',
                  path: 'image-grid-lists/training-programs',
                  description:
                    'Grid lists dedicated to showcasing various training programs or courses.',
                },
                {
                  name: 'upgrade-account',
                  path: 'image-grid-lists/upgrade-account',
                  description:
                    'Grid lists designed to encourage account upgrades, featuring persuasive imagery.',
                },
                {
                  name: 'upgrade-account-alternate',
                  path: 'image-grid-lists/upgrade-account-alternate',
                  description:
                    'An alternative layout for upgrade-account grid lists, offering a different visual approach.',
                },
              ],
            },
            {
              type: 'icon-grid-lists',
              image: <IconGridListsSvg />,
              variants: [
                {
                  name: 'accent-background',
                  path: 'icon-grid-lists/accent-background',
                  description: 'Grid lists with an accentuated background for visual emphasis.',
                },
                {
                  name: 'account-verification',
                  path: 'icon-grid-lists/account-verification',
                  description:
                    'Grid lists tailored for displaying account verification steps or statuses.',
                },
                {
                  name: 'activity-card',
                  path: 'icon-grid-lists/activity-card',
                  description: '',
                },
                {
                  name: 'avatar-cards',
                  path: 'icon-grid-lists/avatar-cards',
                  description:
                    'Icon grid lists incorporating avatar images, ideal for user-focused data.',
                },
                {
                  name: 'card-details',
                  path: 'icon-grid-lists/card-details',
                  description:
                    'Grid lists designed to display detailed information in a card format.',
                },
                {
                  name: 'customers-status',
                  path: 'icon-grid-lists/customers-status',
                  description:
                    'Grids focusing on customer statuses, visually represented through icons.',
                },
                {
                  name: 'navigation-cards',
                  path: 'icon-grid-lists/navigation-cards',
                  description: 'Grid lists combining navigation elements with card layouts.',
                },
                {
                  name: 'offset-icons',
                  path: 'icon-grid-lists/offset-icons',
                  description: 'Icon grids with an offset arrangement for a dynamic visual effect.',
                },
                {
                  name: 'offset-icons-left',
                  path: 'icon-grid-lists/offset-icons-left',
                  description: 'Similar to offset-icons, but with a focus on the left alignment.',
                },
                {
                  name: 'performance',
                  path: 'icon-grid-lists/performance',
                  description: '',
                },
                {
                  name: 'rounded-avatar-cards',
                  path: 'icon-grid-lists/rounded-avatar-cards',
                  description:
                    'Grid lists with rounded avatars, combining imagery with concise data.',
                },
                {
                  name: 'task-search',
                  path: 'icon-grid-lists/task-search',
                  description: '',
                },
              ],
            },
            {
              type: 'composed-blocks',
              image: <ComposedBlocksSvg />,
              variants: [
                {
                  name: 'camera',
                  path: 'composed-blocks/camera',
                  description: 'A composed block focused on camera or photography-related content.',
                },
                {
                  name: 'composed-navigation',
                  path: 'composed-blocks/composed-navigation',
                  description: 'Navigation block with a composed structure for complex interfaces.',
                },
                {
                  name: 'learning-profile',
                  path: 'composed-blocks/learning-profile',
                  description:
                    'Designed specifically for showcasing learning or educational profiles.',
                },
                {
                  name: 'messenger',
                  path: 'composed-blocks/messenger',
                  description:
                    'A messenger-themed composed block for chat or communication interfaces.',
                },
                {
                  name: 'multi-panel',
                  path: 'composed-blocks/multi-panel',
                  description:
                    'Composed block with multiple panels for detailed content segmentation.',
                },
                {
                  name: 'my-cards',
                  path: 'composed-blocks/my-cards',
                  description:
                    'Personalized card-like composed blocks for individual user information.',
                },
                {
                  name: 'navigation-blocks',
                  path: 'composed-blocks/navigation-blocks',
                  description:
                    'Blocks specifically designed for navigation purposes within an application.',
                },
                {
                  name: 'navigation-list',
                  path: 'composed-blocks/navigation-list',
                  description: 'List-style navigation block for straightforward user guidance.',
                },
                {
                  name: 'profile-blocks',
                  path: 'composed-blocks/profile-blocks',
                  description: 'Blocks tailored for displaying user profile information.',
                },
                {
                  name: 'profile-blocks-alternate',
                  path: 'composed-blocks/profile-blocks-alternate',
                  description: 'An alternate design for profile information composed blocks.',
                },
                {
                  name: 'profile-composed',
                  path: 'composed-blocks/profile-composed',
                  description:
                    'Composed blocks for a detailed and structured display of profile data.',
                },
                {
                  name: 'profile-list',
                  path: 'composed-blocks/profile-list',
                  description:
                    'Profile information displayed in a list format within a composed block.',
                },
                {
                  name: 'profile-list-accent',
                  path: 'composed-blocks/profile-list-accent',
                  description: 'Profile list block with accentuated design elements for emphasis.',
                },
                {
                  name: 'user-navigation',
                  path: 'composed-blocks/user-navigation',
                  description:
                    'User navigation block tailored for individual user journey through an app.',
                },
                {
                  name: 'user-navigation-alternate',
                  path: 'composed-blocks/user-navigation-alternate',
                  description: 'An alternate layout for user navigation within composed blocks.',
                },
                {
                  name: 'weather',
                  path: 'composed-blocks/weather',
                  description:
                    'A weather-focused composed block for displaying meteorological data.',
                },
              ],
            },
          ],
        },

        {
          name: 'Data Visualization',
          components: [
            {
              type: 'area-charts',
              image: <AreaChartsSvg />,
              variants: [
                {
                  name: 'income-reports',
                  path: 'area-charts/income-reports',
                  description: 'Charts detailing income reports for financial analysis.',
                },
                {
                  name: 'monthly-sales',
                  path: 'area-charts/monthly-sales',
                  description: 'Visualization of monthly sales data.',
                },
                {
                  name: 'power-consumption',
                  path: 'area-charts/power-consumption',
                  description: 'Charts representing power consumption over a period of time.',
                },
                {
                  name: 'sale-statistics',
                  path: 'area-charts/sale-statistics',
                  description: 'Statistical analysis of sales data presented in a chart.',
                },
                {
                  name: 'sales-alerts',
                  path: 'area-charts/sales-alerts',
                  description: 'Charts focused on highlighting alerts in sales trends.',
                },
                {
                  name: 'watch-list',
                  path: 'area-charts/watch-list',
                  description: 'Charts for monitoring selected metrics or indicators.',
                },
                {
                  name: 'weekly-sales',
                  path: 'area-charts/weekly-sales',
                  description: 'Graphical representation of sales data on a weekly basis.',
                },
              ],
            },
            {
              type: 'bar-charts',
              image: <BarChartsSvg />,
              variants: [
                {
                  name: 'active-servers',
                  path: 'bar-charts/active-servers',
                  description: 'Charts displaying data on active server usage and trends.',
                },
                {
                  name: 'financial-year',
                  path: 'bar-charts/financial-year',
                  description: 'Annual financial data representation in bar chart format.',
                },
                {
                  name: 'resources-alarm',
                  path: 'bar-charts/resources-alarm',
                  description: 'Bar charts indicating alarms or alerts in resource usage.',
                },
                {
                  name: 'revenue-progress',
                  path: 'bar-charts/revenue-progress',
                  description: 'Visualizing revenue progress over time using bar charts.',
                },
                {
                  name: 'tasks-analytics',
                  path: 'bar-charts/tasks-analytics',
                  description: '',
                },
                {
                  name: 'time-spent',
                  path: 'bar-charts/time-spent',
                  description: 'Charts depicting time spent on various activities or tasks.',
                },
                {
                  name: 'total-revenue',
                  path: 'bar-charts/total-revenue',
                  description: 'Overall revenue visualization across different periods or sectors.',
                },
                {
                  name: 'traffic-sources',
                  path: 'bar-charts/traffic-sources',
                  description: 'Analysis of traffic sources presented in bar chart format.',
                },
                {
                  name: 'transactions-statistics',
                  path: 'bar-charts/transactions-statistics',
                  description: 'Statistical data on transactions represented through bar charts.',
                },
                {
                  name: 'users-list',
                  path: 'bar-charts/users-list',
                  description:
                    'User-related data, such as activity or demographics, shown in bar chart form.',
                },
                {
                  name: 'visitors',
                  path: 'bar-charts/visitors',
                  description: 'Charts showing visitor data, patterns, and trends.',
                },
                {
                  name: 'visitors-overview',
                  path: 'bar-charts/visitors-overview',
                  description:
                    'Comprehensive overview of visitor data and analytics in bar chart format.',
                },
              ],
            },
            {
              type: 'line-charts',
              image: <LineChartsSvg />,
              variants: [
                {
                  name: 'audience-overview',
                  path: 'line-charts/audience-overview',
                  description:
                    'Line chart providing an overview of audience metrics or engagement over time.',
                },
                {
                  name: 'burned-calories',
                  path: 'line-charts/burned-calories',
                  description:
                    'Chart focused on visualizing calories burned, often used in health and fitness contexts.',
                },
                {
                  name: 'health-status',
                  path: 'line-charts/health-status',
                  description:
                    'A line chart depicting various health-related metrics, suitable for medical or personal tracking.',
                },
                {
                  name: 'hospital-status',
                  path: 'line-charts/hospital-status',
                  description:
                    'Chart designed to showcase hospital status, including patient counts or resource usage.',
                },
                {
                  name: 'investments',
                  path: 'line-charts/investments',
                  description:
                    'Investment-related line chart, ideal for tracking financial performance over time.',
                },
                {
                  name: 'sales',
                  path: 'line-charts/sales',
                  description:
                    'Sales-focused line chart, commonly used to analyze sales trends and performance.',
                },
              ],
            },
            {
              type: 'sparkline-charts',
              image: <SparklineChartsSvg />,
              variants: [
                {
                  name: 'accent-border-sparklines',
                  path: 'sparkline-charts/accent-border-sparklines',
                  description:
                    'Sparkline charts featuring an accentuated border for visual emphasis.',
                },
                {
                  name: 'crypto-sparklines',
                  path: 'sparkline-charts/crypto-sparklines',
                  description:
                    'Sparkline charts specifically designed for displaying cryptocurrency data trends.',
                },
                {
                  name: 'crypto-watchlist',
                  path: 'sparkline-charts/crypto-watchlist',
                  description:
                    'A set of sparkline charts ideal for monitoring cryptocurrency watchlists.',
                },
                {
                  name: 'detailed-sparklines',
                  path: 'sparkline-charts/detailed-sparklines',
                  description:
                    'Sparklines with detailed data representation, providing an in-depth look at trends.',
                },
                {
                  name: 'energy',
                  path: 'sparkline-charts/energy',
                  description:
                    'Sparkline charts tailored for displaying energy consumption or production data.',
                },
                {
                  name: 'energy-status',
                  path: 'sparkline-charts/energy-status',
                  description:
                    'Charts focusing on the status and trends in energy usage or resources.',
                },
                {
                  name: 'event-tickets',
                  path: 'sparkline-charts/event-tickets',
                  description:
                    'Sparkline charts for visualizing trends in event ticket sales or attendance.',
                },
                {
                  name: 'expanded-sparklines',
                  path: 'sparkline-charts/expanded-sparklines',
                  description:
                    'An expanded form of sparklines, offering a broader view of the data trends.',
                },
                {
                  name: 'fitness-parameters',
                  path: 'sparkline-charts/fitness-parameters',
                  description: 'Charts designed to track various fitness parameters over time.',
                },
                {
                  name: 'helpdesk-status',
                  path: 'sparkline-charts/helpdesk-status',
                  description:
                    'Charts providing a quick overview of helpdesk or customer support performance metrics.',
                },
                {
                  name: 'minimal-charts',
                  path: 'sparkline-charts/minimal-charts',
                  description:
                    'Minimalistic sparkline charts focusing on simplicity and clean presentation.',
                },
                {
                  name: 'new-accounts',
                  path: 'sparkline-charts/new-accounts',
                  description: 'Charts showing the trend or growth of new account creations.',
                },
                {
                  name: 'new-subscriptions-sparklines',
                  path: 'sparkline-charts/new-subscriptions-sparklines',
                  description: 'Charts tracking the rate of new subscriptions or sign-ups.',
                },
                {
                  name: 'quarter-report',
                  path: 'sparkline-charts/quarter-report',
                  description: 'Sparklines designed to present quarterly reports or data trends.',
                },
                {
                  name: 'recent-sales-sparklines',
                  path: 'sparkline-charts/recent-sales-sparklines',
                  description: 'Charts focusing on the visualization of recent sales data.',
                },
                {
                  name: 'reports-alternate-sparklines',
                  path: 'sparkline-charts/reports-alternate-sparklines',
                  description: 'Alternative designs for sparkline charts used in reporting.',
                },
                {
                  name: 'reports-sparklines',
                  path: 'sparkline-charts/reports-sparklines',
                  description: 'Sparkline charts commonly used in various types of reports.',
                },
                {
                  name: 'sales-sparklines',
                  path: 'sparkline-charts/sales-sparklines',
                  description:
                    'Charts designed to showcase sales data and trends in a compact format.',
                },
                {
                  name: 'sparklines-progress',
                  path: 'sparkline-charts/sparklines-progress',
                  description:
                    'Sparkline charts that are used to indicate progress in various contexts.',
                },
                {
                  name: 'traffic',
                  path: 'sparkline-charts/traffic',
                  description:
                    'Charts ideal for visualizing web traffic or similar data over time.',
                },
                {
                  name: 'user-overview',
                  path: 'sparkline-charts/user-overview',
                  description: 'Charts providing a quick overview of user engagement or activity.',
                },
              ],
            },
            {
              type: 'gauge-indicators',
              image: <GaugeIndicatorsSvg />,
              variants: [
                {
                  name: 'circular-progress-cards',
                  path: 'gauge-indicators/circular-progress-cards',
                  description:
                    'Gauge indicators designed as cards, featuring circular progress indicators.',
                },
                {
                  name: 'circular-progress-extended',
                  path: 'gauge-indicators/circular-progress-extended',
                  description:
                    'Extended version of circular progress indicators, offering detailed information.',
                },
                {
                  name: 'conversions-gauge',
                  path: 'gauge-indicators/conversions-gauge',
                  description:
                    'A gauge specifically designed to track and display conversion metrics.',
                },
                {
                  name: 'expanded-status-display',
                  path: 'gauge-indicators/expanded-status-display',
                  description: 'Expanded gauge indicators for a comprehensive status display.',
                },
                {
                  name: 'gauge-indicators',
                  path: 'gauge-indicators/gauge-indicators',
                  description:
                    'Standard gauge indicators for representing various metrics and progress.',
                },
                {
                  name: 'monthly-goals',
                  path: 'gauge-indicators/monthly-goals',
                  description:
                    'Gauges tailored to track and display progress towards monthly goals.',
                },
                {
                  name: 'premium-sellers',
                  path: 'gauge-indicators/premium-sellers',
                  description:
                    'Indicators designed to highlight the performance of premium sellers or products.',
                },
                {
                  name: 'progress-stats',
                  path: 'gauge-indicators/progress-stats',
                  description: 'Progress statistics visualized through intuitive gauge indicators.',
                },
                {
                  name: 'progress-stats-accent-border',
                  path: 'gauge-indicators/progress-stats-accent-border',
                  description: 'Progress stats with an added accent border for emphasis.',
                },
                {
                  name: 'recent-customers',
                  path: 'gauge-indicators/recent-customers',
                  description:
                    'Gauges designed to provide insights into recent customer activities or numbers.',
                },
                {
                  name: 'server-status',
                  path: 'gauge-indicators/server-status',
                  description:
                    'Indicators focused on displaying server status and performance metrics.',
                },
              ],
            },
            {
              type: 'pie-doughnut-charts',
              image: <PieDoughnutChatrsSvg />,
              variants: [
                {
                  name: 'account-balance',
                  path: 'pie-doughnut-charts/account-balance',
                  description:
                    'A pie or doughnut chart representing different aspects of account balances.',
                },
                {
                  name: 'customer-satisfaction',
                  path: 'pie-doughnut-charts/customer-satisfaction',
                  description:
                    'A chart showing customer satisfaction levels in different categories.',
                },
                {
                  name: 'expenses',
                  path: 'pie-doughnut-charts/expenses',
                  description:
                    'This chart variant focuses on visualizing various expense categories.',
                },
                {
                  name: 'healthcare-status',
                  path: 'pie-doughnut-charts/healthcare-status',
                  description:
                    'A chart tailored for displaying different metrics in healthcare, such as patient demographics or treatment outcomes.',
                },
                {
                  name: 'hospital-departments',
                  path: 'pie-doughnut-charts/hospital-departments',
                  description:
                    'A pie or doughnut chart detailing the distribution of various departments within a hospital or healthcare facility.',
                },
                {
                  name: 'profile-goals',
                  path: 'pie-doughnut-charts/profile-goals',
                  description:
                    'A chart typically used in personal profiles to illustrate goal completion or progress.',
                },
                {
                  name: 'sales-categories',
                  path: 'pie-doughnut-charts/sales-categories',
                  description:
                    'This variant is focused on depicting sales data across different categories or products.',
                },
                {
                  name: 'usage-stats',
                  path: 'pie-doughnut-charts/usage-stats',
                  description: 'Usage statistics gauges for monitoring and displaying usage data.',
                },
              ],
            },
            {
              type: 'composed-visualization-blocks',
              image: <ComposedVisualizationBlocksSvg />,
              variants: [
                {
                  name: 'composed-gauge',
                  path: 'composed-visualization-blocks/composed-gauge',
                  description:
                    'A visualization block featuring a gauge-style display for metrics and data.',
                },
                {
                  name: 'financial-status',
                  path: 'composed-visualization-blocks/financial-status',
                  description:
                    'Block focused on presenting financial status through various visual elements.',
                },
                {
                  name: 'inventory',
                  path: 'composed-visualization-blocks/inventory',
                  description:
                    'Visualization block designed for showcasing inventory metrics and data.',
                },
                {
                  name: 'returning-customers',
                  path: 'composed-visualization-blocks/returning-customers',
                  description: 'A block highlighting data and metrics about returning customers.',
                },
              ],
            },
          ],
        },
        {
          name: 'Forms',
          components: [
            {
              type: 'form-layouts',
              image: <FormLayoutsSvg />,
              variants: [
                {
                  name: 'company',
                  path: 'form-layouts/company',
                  description: 'A form layout designed for company or organization information.',
                },
                {
                  name: 'company-stacked',
                  path: 'form-layouts/company-stacked',
                  description:
                    'A stacked layout variant for company forms, offering an organized appearance.',
                },
                {
                  name: 'create-product',
                  path: 'form-layouts/create-product',
                  description: '',
                },
                {
                  name: 'edit-profile-details',
                  path: 'form-layouts/edit-profile-details',
                  description: '',
                },
                {
                  name: 'profile',
                  path: 'form-layouts/profile',
                  description: 'A standard form layout for individual user profiles.',
                },
                {
                  name: 'profile-cards',
                  path: 'form-layouts/profile-cards',
                  description:
                    'A form layout using card elements, suitable for detailed profile information.',
                },
                {
                  name: 'profile-stacked',
                  path: 'form-layouts/profile-stacked',
                  description: 'A stacked form layout specifically designed for user profile data.',
                },
                {
                  name: 'settings-notifications',
                  path: 'form-layouts/settings-notifications',
                  description: '',
                },
                {
                  name: 'settings-security',
                  path: 'form-layouts/settings-security',
                  description: '',
                },
              ],
            },
            {
              type: 'user-auth',
              image: <UserAuthSvg />,
              variants: [
                {
                  name: 'login',
                  path: 'user-auth/login',
                  description:
                    'A standard layout for a login interface, offering essential fields for user authentication.',
                },
                {
                  name: 'login-cover',
                  path: 'user-auth/login-cover',
                  description:
                    'A login layout with an additional cover image or graphic, enhancing visual appeal.',
                },
                {
                  name: 'recover-password',
                  path: 'user-auth/recover-password',
                  description: 'A dedicated layout for users to recover or reset their passwords.',
                },
                {
                  name: 'recover-password-cover',
                  path: 'user-auth/recover-password-cover',
                  description:
                    'Provides a visually enriched interface for password recovery, incorporating a cover image to foster a calming user experience.',
                },
                {
                  name: 'register',
                  path: 'user-auth/register-cover',
                  description:
                    'The registration interface, potentially with an engaging cover image or design.',
                },
                {
                  name: 'register-cover',
                  path: 'user-auth/register-cover',
                  description:
                    'A comprehensive sign-up layout with an attractive cover image or design to create a strong first impression for new users.',
                },
                {
                  name: 'verification-code',
                  path: 'user-auth/verification-code',
                  description:
                    'A layout designed for inputting verification codes, often used in multi-factor authentication processes.',
                },
                {
                  name: 'verification-code-cover',
                  path: 'user-auth/verification-code-cover',
                  description:
                    'This layout combines the functionality of code verification with additional graphic elements to enhance user engagement during the authentication phase.',
                },
              ],
            },
            {
              type: 'autocomplete',
              image: <AutocompleteSvg />,
              variants: [
                {
                  name: 'add-dialog',
                  path: 'autocomplete/add-dialog',
                  description: 'Autocomplete feature integrated with an add-dialog mechanism.',
                },
                {
                  name: 'basic',
                  path: 'autocomplete/basic',
                  description: 'The basic version of the autocomplete feature.',
                },
                {
                  name: 'checkboxes',
                  path: 'autocomplete/checkboxes',
                  description:
                    'Autocomplete variant with integrated checkboxes for multiple selections.',
                },
                {
                  name: 'indicator',
                  path: 'autocomplete/indicator',
                  description: 'Autocomplete option with visual indicators for status or type.',
                },
                {
                  name: 'multiselect',
                  path: 'autocomplete/multiselect',
                  description:
                    'Enhanced autocomplete allowing for the selection of multiple items.',
                },
              ],
            },
            {
              type: 'checkboxes',
              image: <CheckboxesSvg />,
              variants: [
                {
                  name: 'basic',
                  path: 'checkboxes/basic',
                  description: 'Standard checkboxes for basic selection needs.',
                },
                {
                  name: 'cards',
                  path: 'checkboxes/cards',
                  description:
                    'Checkboxes integrated within card elements for interactive content.',
                },
                {
                  name: 'cards-grid',
                  path: 'checkboxes/cards-grid',
                  description: 'Grid-style layout of checkboxes within card elements.',
                },
                {
                  name: 'checkmarks',
                  path: 'checkboxes/checkmarks',
                  description: 'Distinctive checkmark style checkboxes for clear visibility.',
                },
                {
                  name: 'colors',
                  path: 'checkboxes/colors',
                  description: 'Colorful checkboxes offering visual variety and emphasis.',
                },
                {
                  name: 'icon',
                  path: 'checkboxes/icon',
                  description: 'Icon-based checkboxes for a graphical approach to selection.',
                },
                {
                  name: 'list',
                  path: 'checkboxes/list',
                  description: 'Checkboxes presented in a list format for organized selections.',
                },
                {
                  name: 'list-card',
                  path: 'checkboxes/list-card',
                  description: 'List format checkboxes integrated within card layouts.',
                },
                {
                  name: 'list-card-description',
                  path: 'checkboxes/list-card-description',
                  description: 'List card checkboxes complemented with descriptions for context.',
                },
                {
                  name: 'select-avatar',
                  path: 'checkboxes/select-avatar',
                  description: 'Avatar selection checkboxes for user-centric interfaces.',
                },
                {
                  name: 'sizes',
                  path: 'checkboxes/sizes',
                  description: 'Variety of checkbox sizes for different UI needs.',
                },
              ],
            },
            {
              type: 'radio-groups',
              image: <RadioGroupsSvg />,
              variants: [
                {
                  name: 'basic',
                  path: 'radio-groups/basic',
                  description: 'A basic radio group layout for simple selection options.',
                },
                {
                  name: 'cards',
                  path: 'radio-groups/cards',
                  description:
                    'Radio button options presented within card layouts for enhanced visual appeal.',
                },
                {
                  name: 'cards-image',
                  path: 'radio-groups/cards-image',
                  description:
                    'Radio groups incorporated into cards with images, offering a more graphical selection process.',
                },
                {
                  name: 'colors',
                  path: 'radio-groups/colors',
                  description:
                    'Radio buttons with color options, allowing for a visually intuitive choice.',
                },
                {
                  name: 'icon',
                  path: 'radio-groups/icon',
                  description: 'Radio groups that use icons as part of their selection indicators.',
                },
                {
                  name: 'list',
                  path: 'radio-groups/list',
                  description:
                    'Radio buttons organized in a list format, suitable for longer sets of options.',
                },
                {
                  name: 'list-card',
                  path: 'radio-groups/list-card',
                  description:
                    'A list of radio buttons each within a card layout, combining structure with design.',
                },
                {
                  name: 'list-card-description',
                  path: 'radio-groups/list-card-description',
                  description:
                    'List-style radio groups with cards, each featuring additional descriptive text.',
                },
                {
                  name: 'list-description',
                  path: 'radio-groups/list-description',
                  description:
                    'Radio button lists with added descriptions for each option, providing more context.',
                },
                {
                  name: 'my-cards',
                  path: 'radio-groups/my-cards',
                  description: '',
                },
                {
                  name: 'product-colors',
                  path: 'radio-groups/product-colors',
                  description: '',
                },
                {
                  name: 'select-avatar',
                  path: 'radio-groups/select-avatar',
                  description:
                    'Radio groups designed for selecting avatars, typically used in profile settings.',
                },
                {
                  name: 'sizes',
                  path: 'radio-groups/sizes',
                  description:
                    'Radio buttons available in various sizes, offering flexibility for different design needs.',
                },
                {
                  name: 'small-cards',
                  path: 'radio-groups/small-cards',
                  description:
                    'Compact card-style radio buttons, suitable for space-efficient designs.',
                },
              ],
            },
            {
              type: 'select',
              image: <SelectSvg />,
              variants: [
                {
                  name: 'basic',
                  path: 'select/basic',
                  description:
                    'A basic and straightforward select dropdown, providing a list of options to choose from.',
                },
                {
                  name: 'checkmark',
                  path: 'select/checkmark',
                  description:
                    'Select dropdown featuring checkmark indicators for selected options.',
                },
                {
                  name: 'filled',
                  path: 'select/filled',
                  description:
                    'A filled-style select dropdown, offering a more pronounced visual presence.',
                },
                {
                  name: 'indicator-description',
                  path: 'select/indicator-description',
                  description:
                    'Select dropdown that includes descriptive indicators alongside options.',
                },
                {
                  name: 'multiselect-basic',
                  path: 'select/multiselect-basic',
                  description:
                    'A basic multiselect dropdown, allowing selection of multiple options.',
                },
                {
                  name: 'multiselect-checkbox',
                  path: 'select/multiselect-checkbox',
                  description:
                    'Multiselect dropdown using checkboxes for selecting multiple options.',
                },
                {
                  name: 'multiselect-chip',
                  path: 'select/multiselect-chip',
                  description:
                    'A multiselect dropdown where selected options are displayed as chips.',
                },
                {
                  name: 'native',
                  path: 'select/native',
                  description:
                    'A native-style select dropdown, adhering to default browser styles.',
                },
              ],
            },
            {
              type: 'switches',
              image: <SwitchesSvg />,
              variants: [
                {
                  name: 'basic',
                  path: 'switches/basic',
                  description:
                    'A basic and straightforward switch design for simple on/off functionality.',
                },
                {
                  name: 'card',
                  path: 'switches/card',
                  description:
                    'Switches integrated within a card layout, suitable for settings or preferences panels.',
                },
                {
                  name: 'card-dividers',
                  path: 'switches/card-dividers',
                  description:
                    'Switches presented on cards with dividers, enhancing organization and clarity.',
                },
                {
                  name: 'card-dividers-middle',
                  path: 'switches/card-dividers-middle',
                  description:
                    'A variation of switch cards with dividers placed in the middle for a distinct layout.',
                },
                {
                  name: 'colors',
                  path: 'switches/colors',
                  description:
                    'Switches available in various colors, offering customization to match different UI themes.',
                },
                {
                  name: 'list',
                  path: 'switches/list',
                  description:
                    'Switches presented in a list format, ideal for settings or option lists.',
                },
                {
                  name: 'positions',
                  path: 'switches/positions',
                  description:
                    'Switches with various position options, providing flexibility in UI design.',
                },
                {
                  name: 'sizes',
                  path: 'switches/sizes',
                  description:
                    'Switches offered in different sizes to accommodate different space requirements and design needs.',
                },
                {
                  name: 'switches',
                  path: 'switches/switches',
                  description:
                    'Switches styled differently that toggle interaction across the parent component.',
                },
                {
                  name: 'thermostat',
                  path: 'switches/thermostat',
                  description: 'This integration shows an UI built for a thermostat component.',
                },
              ],
            },
            {
              type: 'textarea',
              image: <TextareaSvg />,
              variants: [
                {
                  name: 'basic',
                  path: 'textarea/basic',
                  description:
                    'A basic textarea component, providing a simple and straightforward area for text input.',
                },
                {
                  name: 'wysiwyg-editor',
                  path: 'textarea/wysiwyg-editor',
                  description:
                    "A 'What You See Is What You Get' editor textarea, allowing for rich text formatting and content creation.",
                },
              ],
            },
            {
              type: 'input',
              image: <InputSvg />,
              variants: [
                {
                  name: 'composed',
                  path: 'input/composed',
                  description:
                    'An input variant with a composite structure, possibly including additional elements like icons or buttons.',
                },
                {
                  name: 'filled',
                  path: 'input/filled',
                  description:
                    'Filled-style input fields, offering a distinct visual presence with a solid background.',
                },
                {
                  name: 'masks',
                  path: 'input/masks',
                  description:
                    'Input fields with masking capabilities, useful for formatting content like dates or phone numbers.',
                },
                {
                  name: 'number-selector',
                  path: 'input/number-selector',
                  description: '',
                },
                {
                  name: 'outlined',
                  path: 'input/outlined',
                  description:
                    'Input fields with an outlined style, providing a clear boundary and focus.',
                },
                {
                  name: 'outlined-label-inset',
                  path: 'input/outlined-label-inset',
                  description:
                    'Outlined input fields with an inset label, combining clarity and efficient use of space.',
                },
                {
                  name: 'outlined-label-inset-visible',
                  path: 'input/outlined-label-inset-visible',
                  description:
                    'A variant of the outlined input with a visibly inset label, enhancing label readability.',
                },
                {
                  name: 'search',
                  path: 'input/search',
                  description:
                    'Input fields specifically designed for search functionality, often including a search icon.',
                },
                {
                  name: 'validation',
                  path: 'input/validation',
                  description:
                    'Input fields with built-in validation features, providing immediate feedback on user input.',
                },
              ],
            },
            {
              type: 'upload',
              image: <UploadSvg />,
              variants: [
                {
                  name: 'avatar',
                  path: 'upload/avatar',
                  description:
                    'Upload interface specifically designed for updating or uploading avatar images.',
                },
                {
                  name: 'file-list',
                  path: 'upload/file-list',
                  description:
                    'A layout for uploading and displaying a list of files, with standard styling.',
                },
                {
                  name: 'file-list-accent',
                  path: 'upload/file-list-accent',
                  description:
                    'A variation of the file list upload, featuring accentuated design elements for added visual appeal.',
                },
                {
                  name: 'profile-cover',
                  path: 'upload/profile-cover',
                  description:
                    'An upload interface tailored for profile cover images, supporting custom dimensions and layouts.',
                },
              ],
            },
            {
              type: 'datepicker',
              image: <DatepickerSvg />,
              variants: [
                {
                  name: 'basic',
                  path: 'datepicker/basic',
                  description: 'Simple and efficient design for straightforward date selection.',
                },
                {
                  name: 'inline',
                  path: 'datepicker/inline',
                  description:
                    'Always-visible calendar for embedding directly within content layouts.',
                },
                {
                  name: 'landscape',
                  path: 'datepicker/landscape',
                  description:
                    'Wider view suitable for landscape orientations and broader displays.',
                },
                {
                  name: 'mobile',
                  path: 'datepicker/mobile',
                  description:
                    'Mobile-optimized with a touch-friendly interface for smaller screens.',
                },
                {
                  name: 'views',
                  path: 'datepicker/views',
                  description: 'Multiple view options for flexible date navigation and selection.',
                },
              ],
            },
            {
              type: 'slider',
              image: <SliderSvg />,
              variants: [
                {
                  name: 'basic',
                  path: 'slider/basic',
                  description:
                    'A simple and straightforward slider for basic range selection needs.',
                },
                {
                  name: 'colors',
                  path: 'slider/colors',
                  description:
                    'Slider variant featuring different color options, allowing customization to match design themes.',
                },
                {
                  name: 'label-visible',
                  path: 'slider/label-visible',
                  description:
                    'Slider with always visible labels, providing clear value indication as users adjust the slider.',
                },
                {
                  name: 'marks',
                  path: 'slider/marks',
                  description:
                    'A slider with marked intervals, offering visual cues about available range options.',
                },
                {
                  name: 'range-slider',
                  path: 'slider/range-slider',
                  description:
                    'A slider designed for selecting a range of values, featuring two handles for defining the start and end points.',
                },
                {
                  name: 'sizes',
                  path: 'slider/sizes',
                  description:
                    'This slider variant offers different sizes, providing flexibility for various design spaces.',
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};

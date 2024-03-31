import { SvgIconComponent } from '@mui/icons-material';
import AccessTimeTwoTone from '@mui/icons-material/AccessTimeTwoTone';
import ArticleTwoTone from '@mui/icons-material/ArticleTwoTone';
import AssignmentTwoTone from '@mui/icons-material/AssignmentTwoTone';
import BookTwoTone from '@mui/icons-material/BookTwoTone';
import BrushTwoTone from '@mui/icons-material/BrushTwoTone';
import CategoryTwoTone from '@mui/icons-material/CategoryTwoTone';
import DashboardTwoTone from '@mui/icons-material/DashboardTwoTone';
import EmojiEventsTwoTone from '@mui/icons-material/EmojiEventsTwoTone';
import EventTwoTone from '@mui/icons-material/EventTwoTone';
import FeedbackTwoTone from '@mui/icons-material/FeedbackTwoTone';
import FolderTwoTone from '@mui/icons-material/FolderTwoTone';
import PeopleTwoTone from '@mui/icons-material/PeopleTwoTone';
import ReceiptTwoTone from '@mui/icons-material/ReceiptTwoTone';
import SlideshowTwoTone from '@mui/icons-material/SlideshowTwoTone';
import TableChartTwoTone from '@mui/icons-material/TableChartTwoTone';

export const iconMapping: { [key: string]: SvgIconComponent } = {
  SlideshowTwoTone,
  FolderTwoTone,
  AssignmentTwoTone,
  BookTwoTone,
  TableChartTwoTone,
  BrushTwoTone,
  ArticleTwoTone,
  FeedbackTwoTone,
  AccessTimeTwoTone,
  EventTwoTone,
  ReceiptTwoTone,
  DashboardTwoTone,
  PeopleTwoTone,
  CategoryTwoTone,
  EmojiEventsTwoTone,
};

export type Category = 'folders' | 'files' | 'users' | 'images';

export interface Item {
  id: number;
  title: string;
  description: string;
  avatar: string;
  category: Category;
}

export const dummyData: Item[] = [
  // Folders
  {
    id: 1,
    title: 'Meeting Notes',
    description: 'Notes from various team meetings',
    avatar: 'FolderTwoTone',
    category: 'folders',
  },
  {
    id: 2,
    title: 'Project Delta',
    description: 'Files related to Project Delta initiative',
    avatar: 'FolderTwoTone',
    category: 'folders',
  },
  {
    id: 3,
    title: 'HR Policies',
    description: 'Human resources policies and guidelines',
    avatar: 'FolderTwoTone',
    category: 'folders',
  },
  {
    id: 4,
    title: 'Expense Reports',
    description: 'Monthly expense reports and receipts',
    avatar: 'FolderTwoTone',
    category: 'folders',
  },
  {
    id: 5,
    title: 'Client Presentations',
    description: 'Presentations for clients and stakeholders',
    avatar: 'FolderTwoTone',
    category: 'folders',
  },
  {
    id: 6,
    title: 'Marketing Plans',
    description: 'Quarterly marketing plans and strategies',
    avatar: 'FolderTwoTone',
    category: 'folders',
  },
  {
    id: 7,
    title: 'Competitor Analysis',
    description: 'Research files on competitor analysis',
    avatar: 'FolderTwoTone',
    category: 'folders',
  },
  {
    id: 8,
    title: 'Tech Reviews',
    description: 'Technical review documents and feedback',
    avatar: 'FolderTwoTone',
    category: 'folders',
  },
  {
    id: 9,
    title: 'Training Material',
    description: 'Onboarding and training resources for new hires',
    avatar: 'FolderTwoTone',
    category: 'folders',
  },
  {
    id: 10,
    title: 'Annual Reports',
    description: 'Yearly business performance reports',
    avatar: 'FolderTwoTone',
    category: 'folders',
  },
  // Files
  {
    id: 12,
    title: 'Company_Overview.pptx',
    description: 'Company overview presentation Q1',
    avatar: 'SlideshowTwoTone',
    category: 'files',
  },
  {
    id: 13,
    title: 'Contract_John_Doe.docx',
    description: 'Signed contract with John Doe',
    avatar: 'AssignmentTwoTone',
    category: 'files',
  },
  {
    id: 14,
    title: 'Employee_Handbook.pdf',
    description: 'The complete guide for new employees',
    avatar: 'BookTwoTone',
    category: 'files',
  },
  {
    id: 15,
    title: 'Sales_Forecast.q4.csv',
    description: 'CSV file with Q4 sales forecast data',
    avatar: 'TableChartTwoTone',
    category: 'files',
  },
  {
    id: 16,
    title: 'Website_Redesign_Mockup.sketch',
    description: 'Mockup designs for the website redesign project',
    avatar: 'BrushTwoTone',
    category: 'files',
  },
  {
    id: 17,
    title: 'Research_Summary.pdf',
    description: 'Summary of the latest research findings',
    avatar: 'ArticleTwoTone',
    category: 'files',
  },
  {
    id: 18,
    title: 'Product_Catalog_2023.pdf',
    description: 'The 2023 product catalog with all listings',
    avatar: 'CategoryTwoTone',
    category: 'files',
  },
  {
    id: 19,
    title: 'Customer_Feedback_2022.json',
    description: 'Compiled customer feedback from 2022',
    avatar: 'FeedbackTwoTone',
    category: 'files',
  },
  {
    id: 20,
    title: 'Event_Planning_Checklist.docx',
    description: 'Checklist for upcoming corporate event planning',
    avatar: 'EmojiEventsTwoTone',
    category: 'files',
  },
  // Users
  {
    id: 26,
    title: 'Alex Johnson',
    description: 'Lead Graphic Designer',
    avatar: '/avatars/1.png',
    category: 'users',
  },
  {
    id: 27,
    title: 'Samira Iqbal',
    description: 'IT Support Specialist',
    avatar: '/avatars/2.png',
    category: 'users',
  },
  {
    id: 28,
    title: 'Daniel Smith',
    description: 'Senior Accountant',
    avatar: '/avatars/3.png',
    category: 'users',
  },
  {
    id: 29,
    title: 'Liu Wei',
    description: 'Marketing Director',
    avatar: '/avatars/4.png',
    category: 'users',
  },
  {
    id: 30,
    title: 'Olivia Martinez',
    description: 'Human Resources Manager',
    avatar: '/avatars/5.png',
    category: 'users',
  },
  {
    id: 31,
    title: 'Raj Patel',
    description: 'Product Manager',
    avatar: '/avatars/1.png',
    category: 'users',
  },
  {
    id: 32,
    title: 'Emma Dubois',
    description: 'Front-end Developer',
    avatar: '/avatars/2.png',
    category: 'users',
  },
  {
    id: 33,
    title: 'Michael Brown',
    description: 'Sales Executive',
    avatar: '/avatars/3.png',
    category: 'users',
  },
  {
    id: 34,
    title: 'Sophia Lee',
    description: 'Customer Success Advocate',
    avatar: '/avatars/4.png',
    category: 'users',
  },
  {
    id: 35,
    title: 'Omar Al Khayyam',
    description: 'Data Scientist',
    avatar: '/avatars/5.png',
    category: 'users',
  },
  {
    id: 36,
    title: 'Annual Report Cover',
    description: 'The cover image for our 2023 annual report',
    avatar: '/placeholders/spotlight-search/annual-report-cover.png',
    category: 'images',
  },
  {
    id: 37,
    title: 'Marketing Campaign',
    description: 'Image used for spring marketing campaign',
    avatar: '/placeholders/spotlight-search/spring-campaign.png',
    category: 'images',
  },
  {
    id: 38,
    title: 'Product Launch',
    description: 'Banner image for the new product launch',
    avatar: '/placeholders/spotlight-search/product-launch.png',
    category: 'images',
  },
  {
    id: 39,
    title: 'Team Offsite',
    description: 'Photo from the annual team offsite meeting',
    avatar: '/placeholders/spotlight-search/team-offsite.png',
    category: 'images',
  },
  {
    id: 40,
    title: 'Leadership Retreat',
    description: 'Group picture of the leadership retreat event',
    avatar: '/placeholders/spotlight-search/leadership-retreat.png',
    category: 'images',
  },
  {
    id: 41,
    title: 'Holiday Party',
    description: 'Snapshot of the team during the holiday celebration',
    avatar: '/placeholders/spotlight-search/holiday-party.png',
    category: 'images',
  },
  {
    id: 42,
    title: 'Customer Workshop',
    description: 'A moment captured during a customer workshop session',
    avatar: '/placeholders/spotlight-search/customer-workshop.png',
    category: 'images',
  },
  {
    id: 43,
    title: 'Corporate Volunteer Day',
    description: 'Employees taking part in the corporate volunteer day',
    avatar: '/placeholders/spotlight-search/volunteer-day.png',
    category: 'images',
  },
];

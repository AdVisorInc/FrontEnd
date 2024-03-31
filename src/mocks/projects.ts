import { subDays } from 'date-fns';
import type { Project } from 'src/models/project';

class ProjectsApi {
  getProjects(): Promise<Project[]> {
    const projects: Project[] = [
      {
        id: '1',
        name: 'Website Redesign',
        screenshot: '/placeholders/covers/1.jpg',
        description: 'Redesigning the corporate website with a modern UI/UX approach.',
        tags: ['UX', 'Design'],
        startDate: subDays(new Date(), 10).getTime(),
        dueDate: subDays(new Date(), 60).getTime(),
        memberIds: [
          {
            id: '1',
            name: 'Alex Johnson',
            avatar: '/avatars/1.png',
          },
          {
            id: '3',
            name: 'Emily Taylor',
            avatar: '/avatars/3.png',
          },
          {
            id: '5',
            name: 'Michael Brown',
            avatar: '/avatars/5.png',
          },
          {
            id: '7',
            name: 'Michael Brown',
            avatar: '/avatars/4.png',
          },
        ],
        progress: 40,
        status: 'in_progress',
      },
      {
        id: '39',
        name: 'Mobile Banking App Development',
        screenshot: '/placeholders/covers/2.jpg',
        description: 'Creating a secure and user-friendly mobile banking application.',
        tags: ['Mobile App', 'Finance'],
        startDate: subDays(new Date(), 20).getTime(),
        dueDate: subDays(new Date(), 120).getTime(),
        memberIds: [
          { id: '3', name: 'Emily Taylor', avatar: '/avatars/3.png' },
          { id: '4', name: 'David Wilson', avatar: '/avatars/4.png' },
          { id: '5', name: 'Michael Brown', avatar: '/avatars/5.png' },
        ],
        progress: 65,
        status: 'in_progress',
      },
      {
        id: '40',
        name: 'E-Commerce Website Optimization',
        screenshot: '/placeholders/covers/3.jpg',
        description: 'Improving the performance and user experience of an e-commerce platform.',
        tags: ['E-Commerce', 'Optimization'],
        startDate: subDays(new Date(), 15).getTime(),
        dueDate: subDays(new Date(), 90).getTime(),
        memberIds: [
          { id: '1', name: 'Alex Johnson', avatar: '/avatars/1.png' },
          { id: '2', name: 'Sarah Miller', avatar: '/avatars/2.png' },
        ],
        progress: 50,
        status: 'in_progress',
      },
      {
        id: '41',
        name: 'AI-Powered Chatbot Development',
        screenshot: '/placeholders/covers/4.jpg',
        description: 'Building an AI-driven chatbot for customer service automation.',
        tags: ['AI', 'Chatbot'],
        startDate: subDays(new Date(), 5).getTime(),
        dueDate: subDays(new Date(), 60).getTime(),
        memberIds: [
          { id: '3', name: 'Emily Taylor', avatar: '/avatars/3.png' },
          { id: '5', name: 'Michael Brown', avatar: '/avatars/5.png' },
        ],
        progress: 30,
        status: 'not_started',
      },
      {
        id: '42',
        name: 'Virtual Reality Game Development',
        screenshot: '/placeholders/covers/5.jpg',
        description: 'Creating an immersive virtual reality gaming experience.',
        tags: ['VR', 'Gaming'],
        startDate: subDays(new Date(), 25).getTime(),
        dueDate: subDays(new Date(), 150).getTime(),
        memberIds: [
          { id: '1', name: 'Alex Johnson', avatar: '/avatars/1.png' },
          { id: '4', name: 'David Wilson', avatar: '/avatars/4.png' },
        ],
        progress: 40,
        status: 'in_progress',
      },
      {
        id: '43',
        name: 'Smart Home Automation System',
        screenshot: '/placeholders/covers/6.jpg',
        description: 'Developing an integrated system for smart home automation.',
        tags: ['IoT', 'Home Automation'],
        startDate: subDays(new Date(), 30).getTime(),
        dueDate: subDays(new Date(), 180).getTime(),
        memberIds: [
          { id: '2', name: 'Sarah Miller', avatar: '/avatars/2.png' },
          { id: '5', name: 'Michael Brown', avatar: '/avatars/5.png' },
        ],
        progress: 70,
        status: 'in_progress',
      },
      {
        id: '26',
        name: 'Video Streaming Service Upgrade',
        screenshot: '/placeholders/covers/7.jpg',
        description: 'Enhancing the user interface and streaming capabilities of a video platform.',
        tags: ['UI/UX', 'Streaming'],
        startDate: subDays(new Date(), 40).getTime(),
        dueDate: subDays(new Date(), 200).getTime(),
        memberIds: [
          { id: '1', name: 'Alex Johnson', avatar: '/avatars/1.png' },
          { id: '3', name: 'Emily Taylor', avatar: '/avatars/3.png' },
          { id: '4', name: 'David Wilson', avatar: '/avatars/4.png' },
        ],
        progress: 60,
        status: 'in_progress',
      },
      {
        id: '38',
        name: 'Automated Inventory Management System',
        screenshot: '/placeholders/covers/1.jpg',
        description: 'Developing an automated system for inventory tracking and management.',
        tags: ['Automation', 'Inventory'],
        startDate: subDays(new Date(), 25).getTime(),
        dueDate: subDays(new Date(), 150).getTime(),
        memberIds: [
          { id: '2', name: 'Sarah Miller', avatar: '/avatars/2.png' },
          { id: '5', name: 'Michael Brown', avatar: '/avatars/5.png' },
          { id: '1', name: 'Alex Johnson', avatar: '/avatars/1.png' },
        ],
        progress: 80,
        status: 'in_progress',
      },
      {
        id: '20',
        name: 'Data Analysis Platform',
        screenshot: '/placeholders/covers/2.jpg',
        description: 'Developing a data analysis platform for marketing insights.',
        tags: ['Data Science', 'Backend'],
        startDate: subDays(new Date(), 30).getTime(),
        dueDate: subDays(new Date(), 180).getTime(),
        memberIds: [
          {
            id: '2',
            name: 'Sarah Miller',
            avatar: '/avatars/2.png',
          },
          {
            id: '4',
            name: 'David Wilson',
            avatar: '/avatars/4.png',
          },
          {
            id: '5',
            name: 'Michael Brown',
            avatar: '/avatars/5.png',
          },
        ],
        progress: 75,
        status: 'in_progress',
      },
      {
        id: '21',
        name: 'Mobile App Development',
        screenshot: '/placeholders/covers/3.jpg',
        description: 'Creating a cross-platform mobile application for online retail.',
        tags: ['Mobile', 'React Native'],
        startDate: subDays(new Date(), 20).getTime(),
        dueDate: subDays(new Date(), 120).getTime(),
        memberIds: [
          {
            id: '1',
            name: 'Alex Johnson',
            avatar: '/avatars/1.png',
          },
          {
            id: '3',
            name: 'Emily Taylor',
            avatar: '/avatars/3.png',
          },
          {
            id: '2',
            name: 'Sarah Miller',
            avatar: '/avatars/2.png',
          },
        ],
        progress: 65,
        status: 'in_progress',
      },
      {
        id: '22',
        name: 'Cloud Infrastructure Setup',
        screenshot: '/placeholders/covers/4.jpg',
        description: 'Setting up and configuring cloud infrastructure for a SaaS platform.',
        tags: ['Cloud', 'DevOps'],
        startDate: subDays(new Date(), 5).getTime(),
        dueDate: subDays(new Date(), 90).getTime(),
        memberIds: [
          {
            id: '4',
            name: 'David Wilson',
            avatar: '/avatars/4.png',
          },
          {
            id: '5',
            name: 'Michael Brown',
            avatar: '/avatars/5.png',
          },
        ],
        progress: 30,
        status: 'not_started',
      },
      {
        id: '44',
        name: 'Healthcare Patient Management System',
        screenshot: '/placeholders/covers/5.jpg',
        description:
          'Developing a system for efficient management of patient records in healthcare.',
        tags: ['Healthcare', 'Management'],
        startDate: subDays(new Date(), 40).getTime(),
        dueDate: subDays(new Date(), 200).getTime(),
        memberIds: [
          { id: '2', name: 'Sarah Miller', avatar: '/avatars/2.png' },
          { id: '3', name: 'Emily Taylor', avatar: '/avatars/3.png' },
        ],
        progress: 55,
        status: 'in_progress',
      },
      {
        id: '45',
        name: 'Augmented Reality Learning Tool',
        screenshot: '/placeholders/covers/6.jpg',
        description:
          'Creating an augmented reality app to enhance interactive learning experiences.',
        tags: ['AR', 'Education'],
        startDate: subDays(new Date(), 10).getTime(),
        dueDate: subDays(new Date(), 90).getTime(),
        memberIds: [
          { id: '1', name: 'Alex Johnson', avatar: '/avatars/1.png' },
          { id: '4', name: 'David Wilson', avatar: '/avatars/4.png' },
        ],
        progress: 80,
        status: 'completed',
      },
      {
        id: '46',
        name: 'Cryptocurrency Exchange Platform',
        screenshot: '/placeholders/covers/7.jpg',
        description: 'Building a secure and user-friendly platform for cryptocurrency trading.',
        tags: ['Fintech', 'Blockchain'],
        startDate: subDays(new Date(), 15).getTime(),
        dueDate: subDays(new Date(), 120).getTime(),
        memberIds: [
          { id: '3', name: 'Emily Taylor', avatar: '/avatars/3.png' },
          { id: '5', name: 'Michael Brown', avatar: '/avatars/5.png' },
        ],
        progress: 60,
        status: 'in_progress',
      },
      {
        id: '47',
        name: 'Smart Agricultural System',
        screenshot: '/placeholders/covers/1.jpg',
        description:
          'Implementing IoT solutions for monitoring and optimizing agricultural practices.',
        tags: ['IoT', 'Agriculture'],
        startDate: subDays(new Date(), 20).getTime(),
        dueDate: subDays(new Date(), 180).getTime(),
        memberIds: [
          { id: '2', name: 'Sarah Miller', avatar: '/avatars/2.png' },
          { id: '4', name: 'David Wilson', avatar: '/avatars/4.png' },
        ],
        progress: 45,
        status: 'not_started',
      },
      {
        id: '48',
        name: 'Enterprise Resource Planning System',
        screenshot: '/placeholders/covers/2.jpg',
        description: 'Developing an ERP system to streamline business processes and operations.',
        tags: ['Business', 'ERP'],
        startDate: subDays(new Date(), 25).getTime(),
        dueDate: subDays(new Date(), 365).getTime(),
        memberIds: [
          { id: '1', name: 'Alex Johnson', avatar: '/avatars/1.png' },
          { id: '3', name: 'Emily Taylor', avatar: '/avatars/3.png' },
        ],
        progress: 30,
        status: 'not_started',
      },
      {
        id: '49',
        name: 'Online Food Delivery Application',
        screenshot: '/placeholders/covers/3.jpg',
        description: 'Creating a mobile application for ordering and delivering food online.',
        tags: ['Mobile App', 'FoodTech'],
        startDate: subDays(new Date(), 5).getTime(),
        dueDate: subDays(new Date(), 150).getTime(),
        memberIds: [
          { id: '2', name: 'Sarah Miller', avatar: '/avatars/2.png' },
          { id: '5', name: 'Michael Brown', avatar: '/avatars/5.png' },
        ],
        progress: 70,
        status: 'in_progress',
      },
      {
        id: '23',
        name: 'E-commerce Website Optimization',
        screenshot: '/placeholders/covers/4.jpg',
        description: 'Optimizing performance and user experience for an e-commerce website.',
        tags: ['Optimization', 'Web'],
        startDate: subDays(new Date(), 15).getTime(),
        dueDate: subDays(new Date(), 45).getTime(),
        memberIds: [
          {
            id: '2',
            name: 'Sarah Miller',
            avatar: '/avatars/2.png',
          },
          {
            id: '3',
            name: 'Emily Taylor',
            avatar: '/avatars/3.png',
          },
        ],
        progress: 50,
        status: 'in_progress',
      },
      {
        id: '24',
        name: 'AI Chatbot Integration',
        screenshot: '/placeholders/covers/5.jpg',
        description: 'Integrating an AI chatbot for customer support on the company website.',
        tags: ['AI', 'Chatbot'],
        startDate: subDays(new Date(), 10).getTime(),
        dueDate: subDays(new Date(), 70).getTime(),
        memberIds: [
          {
            id: '1',
            name: 'Alex Johnson',
            avatar: '/avatars/1.png',
          },
          {
            id: '5',
            name: 'Michael Brown',
            avatar: '/avatars/5.png',
          },
        ],
        progress: 40,
        status: 'in_progress',
      },
      {
        id: '25',
        name: 'Social Media Marketing Campaign',
        screenshot: '/placeholders/covers/6.jpg',
        description: 'Launching a new social media campaign for brand awareness.',
        tags: ['Marketing', 'Social Media'],
        startDate: subDays(new Date(), 3).getTime(),
        dueDate: subDays(new Date(), 30).getTime(),
        memberIds: [
          {
            id: '2',
            name: 'Sarah Miller',
            avatar: '/avatars/2.png',
          },
          {
            id: '3',
            name: 'Emily Taylor',
            avatar: '/avatars/3.png',
          },
          {
            id: '4',
            name: 'David Wilson',
            avatar: '/avatars/4.png',
          },
        ],
        progress: 75,
        status: 'completed',
      },
    ];

    return Promise.resolve(projects);
  }

  getProject(): Promise<Project> {
    const project: Project = {
      id: '1',
      name: 'Website Redesign',
      screenshot: '/placeholders/covers/1.jpg',
      description: 'Redesigning the corporate website with a modern UI/UX approach.',
      tags: ['UX', 'Design'],
      startDate: subDays(new Date(), 10).getTime(),
      dueDate: subDays(new Date(), 60).getTime(),
      memberIds: [
        {
          id: '1',
          name: 'Alex Johnson',
          avatar: '/avatars/1.png',
        },
        {
          id: '3',
          name: 'Emily Taylor',
          avatar: '/avatars/3.png',
        },
        {
          id: '5',
          name: 'Michael Brown',
          avatar: '/avatars/5.png',
        },
      ],
      progress: 40,
      status: 'in_progress',
    };

    return Promise.resolve(project);
  }
}

export const projectsApi = new ProjectsApi();

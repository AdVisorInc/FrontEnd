import {PlaceType} from "../components/application-ui/dropdowns/google-maps/google-maps-dropdown";

export interface UserSettings {
  language?: string;
  timezone?: string;
}
export interface User {
  uuid: string;
  avatar_url?: string;
  cover_url?: string;
  email?: string;
  first_name?: string;
  last_name?: string;
  jobtitle?: string;
  username?: string;
  location?: string;
  role?: string;
  coverImg?: string;
  followers?: number;
  description?: string;
  posts?: string;
  date_of_birth?: string;
  address?: PlaceType;
  userSettings?: UserSettings;
  [key: string]: any;
}

class UsersApi {
  getUsers(): Promise<User[]> {
    const users: User[] = [
      {
        uuid: '1',
        name: 'Alice Johnson',
        avatar: '/avatars/1.png',
        email: 'alice.johnson@example.com',
        jobtitle: 'Digital Marketing Manager',
        username: 'AliceMktg',
        location: 'Newport City',
        role: 'admin',
        coverImg: '/placeholders/covers/1.jpg',
        followers: 1,
        description: 'Passionate about digital marketing trends and social media strategies.',
        posts: '15',
      },
      {
        uuid: '2',
        name: 'Bob Smith',
        avatar: '/avatars/2.png',
        email: 'bob.smith@example.com',
        jobtitle: 'Senior Software Engineer',
        username: 'DevBob',
        location: 'Techville',
        role: 'subscriber',
        coverImg: '/placeholders/covers/2.jpg',
        followers: 2,
        description:
          'Dedicated software engineer with a knack for creating intuitive user experiences.',
        posts: '10',
      },
      {
        uuid: '3',
        name: 'Cynthia Ray',
        avatar: '/avatars/3.png',
        email: 'cynthia.ray@example.com',
        jobtitle: 'Project Manager',
        username: 'CynthiaPM',
        location: 'Riverbank City',
        role: 'customer',
        coverImg: '/placeholders/covers/3.jpg',
        followers: 3,
        description:
          'Expert in managing diverse projects with a focus on efficiency and collaboration.',
        posts: '20',
      },
      {
        uuid: '4',
        name: 'Daniel Green',
        avatar: '/avatars/4.png',
        email: 'daniel.green@example.com',
        jobtitle: 'Creative Director',
        username: 'CreativeDan',
        location: 'Uptown',
        role: 'admin',
        coverImg: '/placeholders/covers/4.jpg',
        followers: 4,
        description: 'Leading creative campaigns with innovative uuideas and a modern approach.',
        posts: '9',
      },
      {
        uuid: '5',
        name: 'Evan Turner',
        avatar: '/avatars/5.png',
        email: 'evan.turner@example.com',
        jobtitle: 'IT Analyst',
        username: 'EvanTech',
        location: 'Greenwood',
        role: 'customer',
        coverImg: '/placeholders/covers/5.jpg',
        followers: 5,
        description: 'Analyzing tech trends and provuuiding insightful IT solutions.',
        posts: '7',
      },
      {
        uuid: '6',
        name: 'Fiona Grant',
        avatar: '/avatars/1.png',
        email: 'fiona.grant@example.com',
        jobtitle: 'Human Resources Coordinator',
        username: 'FionaHR',
        location: 'Hilltop',
        role: 'subscriber',
        coverImg: '/placeholders/covers/6.jpg',
        followers: 6,
        description:
          'Dedicated to creating a positive work environment and fostering professional growth.',
        posts: '14',
      },
      {
        uuid: '7',
        name: 'George Hall',
        avatar: '/avatars/2.png',
        email: 'george.hall@example.com',
        jobtitle: 'Business Development Manager',
        username: 'GeorgeBiz',
        location: 'Laketown',
        role: 'admin',
        coverImg: '/placeholders/covers/1.jpg',
        followers: 7,
        description:
          'Strategizing new business opportunities and building strong client relationships.',
        posts: '19',
      },
      {
        uuid: '8',
        name: 'Hannah Scott',
        avatar: '/avatars/3.png',
        email: 'hannah.scott@example.com',
        jobtitle: 'Account Executive',
        username: 'HannahSales',
        location: 'Riverfield',
        role: 'subscriber',
        coverImg: '/placeholders/covers/2.jpg',
        followers: 8,
        description: 'Expert in client management and driving sales growth.',
        posts: '23',
      },
      {
        uuid: '9',
        name: 'Isaac Newton',
        avatar: '/avatars/4.png',
        email: 'isaac.newton@example.com',
        jobtitle: 'Research Scientist',
        username: 'IsaacSci',
        location: 'Techton',
        role: 'customer',
        coverImg: '/placeholders/covers/3.jpg',
        followers: 9,
        description: 'Exploring the frontiers of science and technology.',
        posts: '30',
      },
      {
        uuid: '10',
        name: 'Julia Cruz',
        avatar: '/avatars/5.png',
        email: 'julia.cruz@example.com',
        jobtitle: 'Graphic Designer',
        username: 'JuliaDesigns',
        location: 'CreativeVille',
        role: 'subscriber',
        coverImg: '/placeholders/covers/4.jpg',
        followers: 10,
        description: 'Creating visually stunning designs that speak volumes.',
        posts: '27',
      },
      {
        uuid: '11',
        name: 'Kevin Lopez',
        avatar: '/avatars/1.png',
        email: 'kevin.lopez@example.com',
        jobtitle: 'Operations Manager',
        username: 'KevinOps',
        location: 'IndustryHub',
        role: 'admin',
        coverImg: '/placeholders/covers/5.jpg',
        followers: 11,
        description: 'Ensuring seamless operations and efficient management processes.',
        posts: '14',
      },
      {
        uuid: '12',
        name: 'Laura Martin',
        avatar: '/avatars/2.png',
        email: 'laura.martin@example.com',
        jobtitle: 'Content Writer',
        username: 'LauraWrites',
        location: 'Wordtown',
        role: 'subscriber',
        coverImg: '/placeholders/covers/6.jpg',
        followers: 12,
        description: 'Crafting compelling content that captivates audiences.',
        posts: '21',
      },
      {
        uuid: '13',
        name: 'Miguel Gonzalez',
        avatar: '/avatars/3.png',
        email: 'miguel.gonzalez@example.com',
        jobtitle: 'Data Analyst',
        username: 'MiguelData',
        location: 'DataCity',
        role: 'customer',
        coverImg: '/placeholders/covers/1.jpg',
        followers: 13,
        description: 'Transforming data into insights and strategic actions.',
        posts: '18',
      },
      {
        uuid: '14',
        name: 'Nina Patel',
        avatar: '/avatars/4.png',
        email: 'nina.patel@example.com',
        jobtitle: 'UI/UX Designer',
        username: 'NinaDesign',
        location: 'DesignTown',
        role: 'admin',
        coverImg: '/placeholders/covers/2.jpg',
        followers: 14,
        description: 'Designing intuitive and engaging user experiences.',
        posts: '26',
      },
      {
        uuid: '15',
        name: 'Oscar Wallace',
        avatar: '/avatars/5.png',
        email: 'oscar.wallace@example.com',
        jobtitle: 'Marketing Coordinator',
        username: 'OscarMktg',
        location: 'Marketville',
        role: 'subscriber',
        coverImg: '/placeholders/covers/3.jpg',
        followers: 15,
        description: 'Coordinating marketing efforts to maximize brand exposure.',
        posts: '17',
      },
      {
        uuid: '16',
        name: 'Pamela Wright',
        avatar: '/avatars/1.png',
        email: 'pamela.wright@example.com',
        jobtitle: 'Chief Financial Officer',
        username: 'PamelaCFO',
        location: 'FinanceCity',
        role: 'admin',
        coverImg: '/placeholders/covers/4.jpg',
        followers: 16,
        description: 'Directing financial strategies for sustainable growth.',
        posts: '22',
      },
      {
        uuid: '17',
        name: 'Quentin Ramirez',
        avatar: '/avatars/2.png',
        email: 'quentin.ramirez@example.com',
        jobtitle: 'Network Administrator',
        username: 'QuentinNet',
        location: 'Netville',
        role: 'customer',
        coverImg: '/placeholders/covers/5.jpg',
        followers: 21,
        description: 'Maintaining robust and secure network infrastructures.',
        posts: '12',
      },
      {
        uuid: '18',
        name: 'Rachel Kim',
        avatar: '/avatars/3.png',
        email: 'rachel.kim@example.com',
        jobtitle: 'Public Relations Specialist',
        username: 'RachelPR',
        location: 'MediaCity',
        role: 'subscriber',
        coverImg: '/placeholders/covers/6.jpg',
        followers: 20,
        description: 'Building and maintaining positive public images for businesses.',
        posts: '29',
      },
      {
        uuid: '19',
        name: 'Steven Ford',
        avatar: '/avatars/4.png',
        email: 'steven.ford@example.com',
        jobtitle: 'Sales Director',
        username: 'StevenSales',
        location: 'SalesTown',
        role: 'admin',
        coverImg: '/placeholders/covers/1.jpg',
        followers: 19,
        description: 'Leading sales teams to achieve outstanding results.',
        posts: '33',
      },
      {
        uuid: '20',
        name: 'Tracy Nguyen',
        avatar: '/avatars/5.png',
        email: 'tracy.nguyen@example.com',
        jobtitle: 'Product Manager',
        username: 'TracyProd',
        location: 'InnovationHub',
        role: 'subscriber',
        coverImg: '/placeholders/covers/2.jpg',
        followers: 18,
        description: 'Overseeing product development from concept to launch.',
        posts: '16',
      },
    ];

    return Promise.resolve(users);
  }

  getUser(): Promise<User> {
    const user: User = {
      uuid: '1',
      name: 'Alice Johnson',
      avatar: '/avatars/1.png',
      email: 'alice.johnson@example.com',
      jobtitle: 'Digital Marketing Manager',
      username: 'AliceMktg',
      location: 'Newport City',
      role: 'admin',
      coverImg: '/placeholders/covers/1.jpg',
      followers: 17,
      description: 'Passionate about digital marketing trends and social media strategies.',
      posts: '15',
    };

    return Promise.resolve(user);
  }
}

export const usersApi = new UsersApi();

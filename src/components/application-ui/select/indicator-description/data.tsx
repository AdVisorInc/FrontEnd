export interface Member {
  name: string;
  detail: string;
  avatar: string;
}

export const membersList: Member[] = [
  {
    name: 'Alice Johnson',
    detail: 'Project Manager',
    avatar: '/avatars/1.png',
  },
  {
    name: 'Bob Smith',
    detail: 'Lead Developer',
    avatar: '/avatars/2.png',
  },
  {
    name: 'Carol Williams',
    detail: 'UX Designer',
    avatar: '/avatars/3.png',
  },
  {
    name: 'David Brown',
    detail: 'Quality Assurance',
    avatar: '/avatars/4.png',
  },
  {
    name: 'Eve Davis',
    detail: 'DevOps Engineer',
    avatar: '/avatars/5.png',
  },
];

import { FC, useState } from 'react';
import UserSwitcher from './user-switcher';

const SelectedDropdown: FC = () => {
  const sampleUsers = [
    {
      id: 1,
      name: 'Benjamin Wallace',
      avatar: '/avatars/4.png',
      userRole: 'Software Engineer',
    },
    {
      id: 2,
      name: 'Jane Smith',
      avatar: '/avatars/3.png',
      userRole: 'Product Manager',
    },
    {
      id: 3,
      name: 'Alice Johnson',
      avatar: '/avatars/2.png',
      userRole: 'UX Designer',
    },
    {
      id: 4,
      name: 'Robert Brown',
      avatar: '/avatars/1.png',
      userRole: 'Data Scientist',
    },
    {
      id: 5,
      name: 'Lucy Williams',
      avatar: '/avatars/5.png',
      userRole: 'Business Analyst',
    },
  ];

  const [currentUser, setCurrentUser] = useState(sampleUsers[0]);

  const handleUserSwitch = (tenant: any) => {
    setCurrentUser(tenant);
  };

  return (
    <UserSwitcher
      users={sampleUsers}
      currentUser={currentUser}
      onSwitch={handleUserSwitch}
    />
  );
};

export default SelectedDropdown;

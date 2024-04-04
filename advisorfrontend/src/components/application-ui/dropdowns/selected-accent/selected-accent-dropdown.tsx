import { FC, useState } from 'react';
import TenantSwitcher from './tenant-switcher';

const SelectedAccentDropdown: FC = () => {
  const sampleTenants = [
    {
      id: 1,
      name: 'TechSolutions',
      logo: '/placeholders/logo/adobe.jpg',
      description: 'A leading tech consultancy firm.',
    },
    {
      id: 2,
      name: 'GreenGrocers',
      logo: '/placeholders/logo/ibm.jpg',
      description: 'Organic produce suppliers since 1990.',
    },
    {
      id: 3,
      name: 'UrbanArch',
      logo: '/placeholders/logo/oracle.jpg',
      description: 'Modern architectural designs and solutions.',
    },
  ];

  const [currentTenant, setCurrentTenant] = useState(sampleTenants[0]);

  const handleTenantSwitch = (tenant: any) => {
    setCurrentTenant(tenant);
  };

  return (
    <TenantSwitcher
      tenants={sampleTenants}
      currentTenant={currentTenant}
      onSwitch={handleTenantSwitch}
    />
  );
};

export default SelectedAccentDropdown;

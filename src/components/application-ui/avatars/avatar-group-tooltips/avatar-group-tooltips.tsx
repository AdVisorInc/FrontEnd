import { Avatar, AvatarGroup, Link, Tooltip } from '@mui/material';
import { useTranslation } from 'react-i18next';

const Component = () => {
  const { t } = useTranslation();

  return (
    <AvatarGroup max={4}>
      <Tooltip
        arrow
        placement="top"
        title={`${t('View profile for')} Remy Sharp`}
      >
        <Avatar
          component={Link}
          onClick={(e) => e.preventDefault()}
          href=""
          alt="Remy Sharp"
          src="/avatars/1.png"
        />
      </Tooltip>
      <Tooltip
        arrow
        placement="top"
        title={`${t('View profile for')} Travis Howard`}
      >
        <Avatar
          component={Link}
          onClick={(e) => e.preventDefault()}
          href=""
          alt="Travis Howard"
          src="/avatars/2.png"
        />
      </Tooltip>
      <Tooltip
        arrow
        placement="top"
        title={t('View profile for') + ' Cindy Baker'}
      >
        <Avatar
          component={Link}
          onClick={(e) => e.preventDefault()}
          href=""
          alt="Cindy Baker"
          src="/avatars/3.png"
        />
      </Tooltip>
      <Tooltip
        arrow
        placement="top"
        title={t('View profile for') + ' Agnes Walker'}
      >
        <Avatar
          component={Link}
          onClick={(e) => e.preventDefault()}
          href=""
          alt="Agnes Walker"
          src="/avatars/4.png"
        />
      </Tooltip>
      <Tooltip
        arrow
        placement="top"
        title={t('View profile for') + ' Trevor Henderson'}
      >
        <Avatar
          component={Link}
          onClick={(e) => e.preventDefault()}
          href=""
          alt="Trevor Henderson"
          src="/avatars/5.png"
        />
      </Tooltip>
    </AvatarGroup>
  );
};

export default Component;

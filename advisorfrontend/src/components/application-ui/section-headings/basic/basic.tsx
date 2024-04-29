import {
  CalendarMonthTwoTone,
  DownloadTwoTone,
  SaveAltOutlined,
  UnpublishedOutlined,
  VerifiedUserOutlined,
} from '@mui/icons-material';
import ExpandMoreTwoToneIcon from '@mui/icons-material/ExpandMoreTwoTone';
import StarTwoToneIcon from '@mui/icons-material/StarTwoTone';
import {
  Breadcrumbs,
  Button,
  CardHeader,
  Chip,
  Divider,
  Link,
  Stack,
  Theme,
  Typography,
  useMediaQuery,
  Menu,
  MenuItem, useTheme,
} from '@mui/material';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';
import {Fragment, useState} from 'react';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { Organization } from 'src/slices/organization';

// basic.tsx
export interface BreadcrumbItem {
  label: string;
  href: string;
  options?: Array<Organization>;
  selectedOption?: number;
  onOptionChange?: (optionId: number) => void;
}
interface SectionHeadingProps {
  title?: string;
  breadcrumbs?: BreadcrumbItem[];
  actions?: React.ReactNode;
  subheader?: React.ReactNode;
  icon?: React.ReactNode;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({
                                                         title,
                                                         breadcrumbs,
                                                         actions,
                                                         subheader,
                                                         icon,
                                                       }) => {
  const router = useRouter();
  const theme = useTheme();

  const mdUp = useMediaQuery((theme: Theme) => theme.breakpoints.up('md'));
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [selectedOption, setSelectedOption] = useState<number | undefined>(undefined);

  const handleClick = (href: string) => {
    router.push(href);
    toast.success('Redirecting to ' + href, {
      position: 'top-right',
    });
  };

  const handleOptionClick = (event: React.MouseEvent<HTMLElement>, item: BreadcrumbItem) => {
    setAnchorEl(event.currentTarget);
    setSelectedOption(item.selectedOption);
  };

  const handleOptionClose = () => {
    setAnchorEl(null);
  };

  const handleOptionChange = (optionId: number, item: BreadcrumbItem) => {
    if (item.onOptionChange) {
      item.onOptionChange(optionId);
    }
    handleOptionClose();
  };

  const renderBreadcrumbItem = (item: BreadcrumbItem, index: number) => {
    if (item.options) {
      const selectedOptionName = item.options.find((option) => option.id === item.selectedOption)?.name;
      return (
        <Chip
          key={index}
          component="a"
          color="secondary"
          onClick={(event) => handleOptionClick(event, item)}
          size="small"
          label={selectedOptionName || `Select ${item.label}`}
          icon={<ExpandMoreTwoToneIcon fontSize="small" />}
        />
      );
    }
    return (
      <Chip
        key={index}
        component="a"
        href={item.href}
        color={index === breadcrumbs.length - 1 ? 'primary' : 'secondary'}
        onClick={() => handleClick(item.href)}
        size="small"
        label={item.label}
      />
    );
  };

  return (
    <CardHeader
      disableTypography
      title={
        <>
          <Breadcrumbs
            separator={
              <NavigateNextIcon
                sx={{
                  color: 'neutral.500',
                }}
                fontSize="small"
              />
            }
            aria-label="breadcrumb"
            maxItems={mdUp ? 12 : 3}
          >
            {breadcrumbs.map((item, index) => (
              renderBreadcrumbItem(item, index)
            ))}
          </Breadcrumbs>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleOptionClose}
          >
            {breadcrumbs
              .find((item) => item.selectedOption === selectedOption)
              ?.options?.map((option) => (
                <MenuItem
                  key={option.id}
                  onClick={() =>
                    handleOptionChange(
                      option.id,
                      breadcrumbs.find((item) => item.selectedOption === selectedOption)!
                    )
                  }
                >
                  {option.name}
                </MenuItem>
              ))}
          </Menu>
          <Stack
            pt={0.5}
            spacing={2}
            direction={{ xs: 'column', sm: 'row' }}
            alignItems={{ xs: 'flex-start', sm: 'center' }}
            justifyContent="space-between"
            mt={2}
          >
            <Stack direction="row" alignItems="center" spacing={2}>
              {icon}
              <Typography noWrap variant="h3" fontWeight={600}>
                {title}
              </Typography>
            </Stack>
            {actions && (
              <Stack direction="row" alignItems="center" spacing={2}>
                {actions}
              </Stack>
            )}
          </Stack>
        </>
      }
      subheader={subheader}
    />
  );
};

export default SectionHeading;

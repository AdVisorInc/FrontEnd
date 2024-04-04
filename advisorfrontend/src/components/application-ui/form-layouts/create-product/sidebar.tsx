import EditTwoToneIcon from '@mui/icons-material/EditTwoTone';
import {
  alpha,
  Box,
  Button,
  Card,
  CardHeader,
  Checkbox,
  Chip,
  Divider,
  Drawer,
  FormControlLabel,
  Unstable_Grid2 as Grid,
  List,
  ListItem,
  ListItemText,
  Stack,
  styled,
  SwipeableDrawer,
  Switch,
  Theme,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import PropTypes from 'prop-types';
import { ChangeEvent, FC, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Scrollbar } from 'src/components/base/scrollbar';

const DotLegend = styled('span')(
  ({ theme }) => `
    border-radius: 22px;
    width: ${theme.spacing(1.5)};
    height: ${theme.spacing(1.5)};
    display: inline-block;
    margin-right: ${theme.spacing(0.5)};
`
);

interface ProductTags {
  key: number;
  label: string;
}

interface CreateProductSidebarProps {
  parentContainer?: HTMLDivElement | null;
  onClose?: () => void;
  onOpen?: () => void;
  open?: boolean;
}

export const CreateProductSidebar: FC<CreateProductSidebarProps> = (props) => {
  const { parentContainer, onClose, onOpen, open, ...other } = props;
  const { t } = useTranslation();
  const lgUp = useMediaQuery((theme: Theme) => theme.breakpoints.up('lg'));
  const theme = useTheme();

  const [checked, setChecked] = useState([true, false]);

  const handleChange1 = (event: ChangeEvent<HTMLInputElement>) => {
    setChecked([event.target.checked, event.target.checked]);
  };

  const handleChange2 = (event: ChangeEvent<HTMLInputElement>) => {
    setChecked([event.target.checked, checked[1]]);
  };

  const handleChange3 = (event: ChangeEvent<HTMLInputElement>) => {
    setChecked([checked[0], event.target.checked]);
  };

  const [productTags, setProductTags] = useState<ProductTags[]>([
    { key: 0, label: 'new' },
    { key: 1, label: 'fresh' },
    { key: 2, label: 'electronics' },
    { key: 3, label: 'computer' },
    { key: 4, label: 'software' },
  ]);

  const handleDelete = (productTagToDelete: ProductTags) => () => {
    setProductTags((productTags) =>
      productTags.filter((productTag) => productTag.key !== productTagToDelete.key)
    );
  };

  const children = (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        ml: 2,
      }}
    >
      <FormControlLabel
        label="Appliances"
        control={
          <Checkbox
            checked={checked[0]}
            onChange={handleChange2}
          />
        }
      />
      <FormControlLabel
        label="Outdoor equipment"
        control={
          <Checkbox
            checked={checked[1]}
            onChange={handleChange3}
          />
        }
      />
    </Box>
  );

  const sidebarContent = (
    <Stack
      spacing={2}
      sx={{
        p: 2,
      }}
    >
      <Card>
        <CardHeader
          action={
            <Button
              size="small"
              variant="outlined"
              startIcon={<EditTwoToneIcon />}
            >
              {t('Edit')}
            </Button>
          }
          title={t('Publish')}
        />
        <Divider />
        <Box p={2}>
          <FormControlLabel
            control={
              <Switch
                color="primary"
                defaultChecked
              />
            }
            label={t('Virtual Product')}
          />
        </Box>
        <Divider />
        <List
          dense
          sx={{
            p: 2,
          }}
        >
          <ListItem disableGutters>
            <ListItemText
              sx={{
                width: 120,
                flex: 'initial',
              }}
              primary={t('Status')}
              primaryTypographyProps={{ variant: 'subtitle2' }}
            />
            <b>Draft</b>
          </ListItem>
          <ListItem disableGutters>
            <ListItemText
              sx={{
                width: 120,
                flex: 'initial',
              }}
              primary={t('Visibility')}
              primaryTypographyProps={{ variant: 'subtitle2' }}
            />
            <b>Visible</b>
          </ListItem>
          <ListItem disableGutters>
            <ListItemText
              sx={{
                width: 120,
                flex: 'initial',
              }}
              primary={
                <>
                  <Typography
                    variant="body1"
                    sx={{
                      pt: 0.5,
                      display: 'flex',
                      alignItems: 'center',
                    }}
                  >
                    <DotLegend style={{ background: theme.palette.success.main }} />
                    {t('SEO Score')}
                  </Typography>
                </>
              }
            />
            <b>{t('Good')}</b>
          </ListItem>
        </List>
        <Divider />
        <Box p={2}>
          <Grid
            container
            spacing={2}
          >
            <Grid
              xs={12}
              sm={6}
            >
              <Button
                fullWidth
                variant="outlined"
                size="small"
              >
                {t('Preview')}
              </Button>
            </Grid>
            <Grid
              xs={12}
              sm={6}
            >
              <Button
                fullWidth
                variant="outlined"
                size="small"
                color="secondary"
              >
                {t('Save draft')}
              </Button>
            </Grid>
            <Grid xs={12}>
              <Button
                fullWidth
                variant="contained"
              >
                {t('Publish now')}
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Card>
      <Card>
        <CardHeader
          action={
            <Button
              size="small"
              variant="outlined"
            >
              {t('Add category')}
            </Button>
          }
          title={t('Categories')}
        />
        <Divider />
        <Box p={2}>
          <FormControlLabel
            control={
              <Checkbox
                checked={checked[0] && checked[1]}
                indeterminate={checked[0] !== checked[1]}
                onChange={handleChange1}
              />
            }
            label="Electronics"
          />
          {children}

          <FormControlLabel
            control={<Checkbox />}
            label="Digital products"
          />
          <FormControlLabel
            control={<Checkbox />}
            label="Software memberships"
          />
        </Box>
      </Card>
      <Card>
        <CardHeader title={t('Product Tags')} />
        <Divider />
        <Box p={2}>
          {productTags.map((data) => {
            return (
              <Chip
                sx={{
                  m: 1,
                }}
                key={data.key}
                variant="outlined"
                label={data.label}
                onDelete={handleDelete(data)}
              />
            );
          })}
          {productTags.length === 0 && (
            <Typography
              sx={{
                py: 2,
              }}
              variant="subtitle2"
              textAlign="center"
              color="text.secondary"
            >
              {t('There are no product tags')}
            </Typography>
          )}
        </Box>
      </Card>
    </Stack>
  );

  if (lgUp) {
    return (
      <Drawer
        anchor="right"
        open={open}
        PaperProps={{
          sx: {
            position: 'relative',
            width: 420,
            backgroundColor: (theme) =>
              theme.palette.mode === 'dark' ? alpha(theme.palette.neutral[25], 0.02) : 'neutral.25',
            boxShadow: (theme) => theme.shadows[0],
          },
        }}
        SlideProps={{ container: parentContainer }}
        variant="persistent"
        {...other}
      >
        <Scrollbar>{sidebarContent}</Scrollbar>
      </Drawer>
    );
  }

  return (
    <SwipeableDrawer
      anchor="right"
      onClose={onClose}
      onOpen={onOpen}
      open={open}
      PaperProps={{
        sx: {
          maxWidth: '100%',
          width: { xs: 340, sm: 380, md: 400 },
          pointerEvents: 'auto',
          position: 'absolute',
          boxShadow: (theme) => theme.shadows[24],
        },
      }}
      variant="temporary"
      {...other}
    >
      <Scrollbar>{sidebarContent}</Scrollbar>
    </SwipeableDrawer>
  );
};

CreateProductSidebar.propTypes = {
  parentContainer: PropTypes.any,
  onClose: PropTypes.func,
  onOpen: PropTypes.func,
  open: PropTypes.bool,
};

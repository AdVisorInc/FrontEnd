import HelpOutlineTwoToneIcon from '@mui/icons-material/HelpOutlineTwoTone';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import {
  alpha,
  Autocomplete,
  Box,
  Card,
  CardHeader,
  Checkbox,
  Container,
  Divider,
  FormControl,
  FormControlLabel,
  Unstable_Grid2 as Grid,
  IconButton,
  InputAdornment,
  Select,
  Tab,
  Tabs,
  TextField,
  Theme,
  Tooltip,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { ChangeEvent, useRef, useState } from 'react';
import { ButtonIcon } from 'src/components/base/styles/button-icon';
import { useCustomization } from 'src/hooks/use-customization';
import { useSidebarDrawer } from 'src/hooks/use-sidebar-drawer';
import { CreateProductSidebar } from './sidebar';
import 'react-quill/dist/quill.snow.css';
import { useTranslation } from 'react-i18next';
import DocumentsUploadList from 'src/components/application-ui/upload/file-list/documents-upload-list';
import { QuillEditor } from 'src/components/base/styles/quill-editor';

const CreateProductForm = () => {
  const customization = useCustomization();

  const parentRef = useRef<HTMLDivElement | null>(null);
  const lgUp = useMediaQuery((theme: Theme) => theme.breakpoints.up('lg'));
  const sidebarDrawer = useSidebarDrawer();
  const theme = useTheme();
  const { t } = useTranslation();

  const productTags = [
    { title: t('new') },
    { title: t('fresh') },
    { title: t('2021') },
    { title: t('electronics') },
  ];

  const [currentTab, setCurrentTab] = useState<string>('general');

  const tabs = [
    { value: 'general', label: t('General') },
    { value: 'inventory', label: t('Inventory') },
    { value: 'shipping', label: t('Shipping') },
  ];

  const handleTabsChange = (_event: ChangeEvent<{}>, value: string): void => {
    setCurrentTab(value);
  };

  return (
    <Box
      display="flex"
      flex={1}
      position="relative"
      zIndex={2}
      ref={parentRef}
      overflow="hidden"
    >
      <Box
        flex={1}
        position="relative"
        overflow="hidden"
        zIndex={5}
        sx={{
          mr: sidebarDrawer.open ? 0 : lgUp ? '-420px' : 0,
          transition: sidebarDrawer.open
            ? theme.transitions.create('margin', {
                easing: theme.transitions.easing.easeOut,
                duration: theme.transitions.duration.enteringScreen,
              })
            : theme.transitions.create('margin', {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.leavingScreen,
              }),
        }}
      >
        <Container maxWidth={customization.stretch ? false : 'xl'}>
          <Box
            py={{ xs: 2, sm: 3 }}
            display="flex"
            alignItems="center"
            justifyContent="space-between"
          >
            <Typography
              variant="h3"
              fontWeight={600}
            >
              Add new product
            </Typography>
            {!lgUp && (
              <ButtonIcon
                color="primary"
                variant="outlined"
                size="small"
                onClick={sidebarDrawer.handleToggle}
              >
                <MenuRoundedIcon />
              </ButtonIcon>
            )}
          </Box>
        </Container>
        <Divider />
        <Container
          sx={{
            mt: { xs: 2, sm: 3 },
          }}
          maxWidth={customization.stretch ? false : 'xl'}
        >
          <Grid
            container
            spacing={{ xs: 2, sm: 3 }}
          >
            <Grid xs={12}>
              <TextField
                fullWidth
                name="title"
                placeholder={t('Project title here...')}
                variant="outlined"
              />
            </Grid>
            <Grid xs={12}>
              <FormControl fullWidth>
                <Typography
                  variant="h6"
                  gutterBottom
                  component="label"
                  fontWeight={500}
                >
                  Bio
                  <Typography
                    variant="subtitle2"
                    color="text.secondary"
                  >
                    Write a short description for this profile
                  </Typography>
                </Typography>
                <Box>
                  <QuillEditor
                    placeholder="Start writing..."
                    sx={{ minHeight: 180 }}
                  />
                </Box>
              </FormControl>
            </Grid>
            <Grid xs={12}>
              <Autocomplete
                multiple
                freeSolo
                sx={{
                  m: 0,
                }}
                limitTags={5}
                options={productTags}
                // @ts-ignore
                getOptionLabel={(option) => option.title}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    fullWidth
                    variant="outlined"
                    placeholder={t('Select project tags...')}
                  />
                )}
              />
            </Grid>

            <Grid xs={12}>
              <Typography
                sx={{ pb: 2 }}
                variant="h5"
              >
                {t('Additional Information')}
              </Typography>
              <Card>
                <Tabs
                  sx={{
                    backgroundColor: (theme) =>
                      theme.palette.mode === 'dark'
                        ? alpha(theme.palette.neutral[25], 0.02)
                        : 'neutral.25',
                    px: 2,
                  }}
                  onChange={handleTabsChange}
                  value={currentTab}
                  variant="scrollable"
                  scrollButtons="auto"
                  textColor="primary"
                  indicatorColor="primary"
                >
                  {tabs.map((tab) => (
                    <Tab
                      sx={{
                        fontSize: 15,
                        py: 2,
                        fontWeight: 600,
                      }}
                      key={tab.value}
                      label={tab.label}
                      value={tab.value}
                    />
                  ))}
                </Tabs>
                <Divider />
                <Box p={{ xs: 2, sm: 3 }}>
                  {currentTab === 'general' && (
                    <Grid
                      container
                      spacing={{ xs: 2, sm: 3 }}
                    >
                      <Grid
                        xs={12}
                        md={6}
                      >
                        <FormControl
                          fullWidth
                          variant="outlined"
                        >
                          <Typography
                            variant="h6"
                            gutterBottom
                            component="label"
                            htmlFor="regular_price"
                            fontWeight={500}
                          >
                            {t('Regular price')}
                          </Typography>
                          <TextField
                            fullWidth
                            name="regular_price"
                            id="regular_price"
                            variant="outlined"
                            placeholder={t('Price')}
                          />
                        </FormControl>
                      </Grid>
                      <Grid
                        xs={12}
                        md={6}
                      >
                        <FormControl
                          fullWidth
                          variant="outlined"
                        >
                          <Typography
                            variant="h6"
                            gutterBottom
                            component="label"
                            htmlFor="sale_price"
                            fontWeight={500}
                          >
                            {t('Sale price')}
                          </Typography>
                          <TextField
                            fullWidth
                            name="sale_price"
                            variant="outlined"
                            placeholder={t('Sale price')}
                          />
                        </FormControl>
                      </Grid>
                      <Grid
                        xs={12}
                        md={6}
                      >
                        <FormControl
                          fullWidth
                          variant="outlined"
                        >
                          <Typography
                            variant="h6"
                            gutterBottom
                            component="label"
                            htmlFor="tax_status"
                            fontWeight={500}
                          >
                            {t('Tax Status')}
                          </Typography>
                          <Select
                            native
                            inputProps={{
                              name: 'tax_status',
                              id: 'tax_status',
                            }}
                          >
                            <option
                              aria-label="None"
                              value=""
                            >
                              {t('None')}
                            </option>
                            <option value={1}>{t('Taxable')}</option>
                          </Select>
                        </FormControl>
                      </Grid>
                      <Grid
                        xs={12}
                        md={6}
                      >
                        <FormControl
                          fullWidth
                          variant="outlined"
                        >
                          <Typography
                            variant="h6"
                            gutterBottom
                            component="label"
                            htmlFor="tax_status"
                            fontWeight={500}
                          >
                            {t('Tax Status')}
                          </Typography>
                          <Select
                            native
                            inputProps={{
                              name: 'tax_status',
                              id: 'tax_status',
                            }}
                          >
                            <option
                              aria-label="None"
                              value=""
                            >
                              {t('None')}
                            </option>
                            <option value={1}>{t('Standard')}</option>
                          </Select>
                        </FormControl>
                      </Grid>
                    </Grid>
                  )}
                  {currentTab === 'inventory' && (
                    <Grid
                      container
                      spacing={{ xs: 2, sm: 3 }}
                    >
                      <Grid
                        xs={12}
                        md={6}
                      >
                        <FormControl
                          fullWidth
                          variant="outlined"
                        >
                          <Typography
                            variant="h6"
                            gutterBottom
                            component="label"
                            htmlFor="sku"
                            fontWeight={500}
                          >
                            {t('SKU')}
                          </Typography>
                          <TextField
                            fullWidth
                            id="sku"
                            name="sku"
                            variant="outlined"
                            placeholder={t('Stock quantity')}
                            InputProps={{
                              endAdornment: (
                                <InputAdornment position="end">
                                  <Tooltip
                                    arrow
                                    placement="top"
                                    title={t(
                                      'This field helps identify the current product stocks'
                                    )}
                                  >
                                    <IconButton
                                      size="small"
                                      sx={{
                                        ml: 1,
                                      }}
                                      color="primary"
                                    >
                                      <HelpOutlineTwoToneIcon fontSize="small" />
                                    </IconButton>
                                  </Tooltip>
                                </InputAdornment>
                              ),
                            }}
                          />
                        </FormControl>
                      </Grid>
                      <Grid
                        xs={12}
                        md={6}
                      >
                        <FormControl
                          fullWidth
                          variant="outlined"
                        >
                          <Typography
                            variant="h6"
                            gutterBottom
                            component="label"
                            htmlFor="stock_status"
                            fontWeight={500}
                          >
                            {t('Stock Status')}
                          </Typography>
                          <Select
                            native
                            inputProps={{
                              name: 'stock_status',
                              id: 'stock_status',
                            }}
                          >
                            <option
                              aria-label="None"
                              value=""
                            >
                              {t('None')}
                            </option>
                            <option value={1}>{t('In stock')}</option>
                            <option value={1}>{t('Out of stock')}</option>
                            <option value={1}>{t('Back in stock soon')}</option>
                          </Select>
                        </FormControl>
                      </Grid>
                      <Grid xs={12}>
                        <FormControlLabel
                          control={<Checkbox defaultChecked />}
                          label={t('Sold individually')}
                        />
                        <Typography
                          variant="h6"
                          color="text.secondary"
                          fontWeight={400}
                        >
                          {t(
                            'Enable this to only allow one of this item to be bought in a single order'
                          )}
                        </Typography>
                      </Grid>
                    </Grid>
                  )}
                  {currentTab === 'shipping' && (
                    <Grid
                      container
                      spacing={{ xs: 2, sm: 3 }}
                    >
                      <Grid xs={12}>
                        <FormControl
                          fullWidth
                          variant="outlined"
                        >
                          <Typography
                            variant="h6"
                            gutterBottom
                            component="label"
                            htmlFor="stock_status"
                            fontWeight={500}
                          >
                            {t('Weight')}
                          </Typography>
                          <Box
                            display="flex"
                            alignItems="center"
                          >
                            <TextField
                              InputProps={{
                                endAdornment: <InputAdornment position="end">Kg</InputAdornment>,
                              }}
                              fullWidth
                              name="weight"
                              id="weight"
                              value={12}
                              variant="outlined"
                              placeholder={t('Weight')}
                            />
                            <Tooltip
                              arrow
                              placement="top"
                              title={t(
                                'Your have the weight units set to kilograms in your app settings'
                              )}
                            >
                              <IconButton
                                size="small"
                                sx={{
                                  ml: 1,
                                }}
                                color="primary"
                              >
                                <HelpOutlineTwoToneIcon fontSize="small" />
                              </IconButton>
                            </Tooltip>
                          </Box>
                        </FormControl>
                      </Grid>
                      <Grid
                        xs={12}
                        md={6}
                      >
                        <FormControl
                          fullWidth
                          variant="outlined"
                        >
                          <Typography
                            variant="h6"
                            gutterBottom
                            component="label"
                            htmlFor="length"
                            fontWeight={500}
                          >
                            {t('Length')}
                          </Typography>
                          <TextField
                            InputProps={{
                              endAdornment: (
                                <InputAdornment position="end">
                                  <Typography
                                    fontWeight={600}
                                    color="text.primary"
                                  >
                                    CM
                                  </Typography>
                                </InputAdornment>
                              ),
                            }}
                            fullWidth
                            id="length"
                            name="length"
                            variant="outlined"
                            placeholder={t('Length')}
                          />
                        </FormControl>
                      </Grid>
                      <Grid
                        xs={12}
                        md={6}
                      >
                        <FormControl
                          fullWidth
                          variant="outlined"
                        >
                          <Typography
                            variant="h6"
                            gutterBottom
                            component="label"
                            htmlFor="width"
                            fontWeight={500}
                          >
                            {t('Width')}
                          </Typography>
                          <TextField
                            InputProps={{
                              endAdornment: (
                                <InputAdornment position="end">
                                  <Typography
                                    fontWeight={600}
                                    color="text.primary"
                                  >
                                    CM
                                  </Typography>
                                </InputAdornment>
                              ),
                            }}
                            fullWidth
                            name="width"
                            id="width"
                            variant="outlined"
                            label={t('Width')}
                            placeholder={t('Width')}
                          />
                        </FormControl>
                      </Grid>
                      <Grid
                        xs={12}
                        sm={8}
                        md={6}
                      >
                        <FormControl
                          fullWidth
                          variant="outlined"
                        >
                          <Typography
                            variant="h6"
                            gutterBottom
                            component="label"
                            htmlFor="shipping_class"
                            fontWeight={500}
                          >
                            {t('Shipping class')}
                          </Typography>
                          <Select
                            native
                            inputProps={{
                              name: 'shipping_class',
                              id: 'shipping_class',
                            }}
                          >
                            <option
                              aria-label="None"
                              value=""
                            >
                              {t('None')}
                            </option>
                            <option value={1}>{t('No shipping class')}</option>
                          </Select>
                        </FormControl>
                      </Grid>
                    </Grid>
                  )}
                </Box>
              </Card>
            </Grid>
            <Grid xs={12}>
              <Card sx={{ mb: { xs: 2, sm: 3 } }}>
                <CardHeader
                  sx={{
                    backgroundColor: (theme) =>
                      theme.palette.mode === 'dark'
                        ? alpha(theme.palette.neutral[25], 0.02)
                        : 'neutral.25',
                  }}
                  title={t('Product Images')}
                />
                <Divider />
                <Box p={{ xs: 2, sm: 3 }}>
                  <DocumentsUploadList />
                </Box>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <CreateProductSidebar
        parentContainer={parentRef.current}
        onClose={sidebarDrawer.handleClose}
        onOpen={sidebarDrawer.handleOpen}
        open={sidebarDrawer.open}
      />
    </Box>
  );
};

export default CreateProductForm;

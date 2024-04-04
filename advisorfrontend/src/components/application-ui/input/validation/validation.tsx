import { zodResolver } from '@hookform/resolvers/zod';
import CheckRoundedIcon from '@mui/icons-material/CheckRounded';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import LocalOfferRoundedIcon from '@mui/icons-material/LocalOfferRounded';
import MailOutlineRoundedIcon from '@mui/icons-material/MailOutlineRounded';
import PeopleOutlineRoundedIcon from '@mui/icons-material/PeopleOutlineRounded';
import SaveRoundedIcon from '@mui/icons-material/SaveRounded';
import SortRoundedIcon from '@mui/icons-material/SortRounded';
import {
  alpha,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Divider,
  FilledInput,
  FormControl,
  FormGroup,
  FormHelperText,
  FormLabel,
  Unstable_Grid2 as Grid,
  IconButton,
  InputAdornment,
  ListSubheader,
  MenuItem,
  OutlinedInput,
  Select,
  Tooltip,
  Typography,
} from '@mui/material';
import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import InputMask from 'react-input-mask';
import { AvatarState } from 'src/components/base/styles/avatar';
import { ButtonIcon } from 'src/components/base/styles/button-icon';
import { CardIndicatorColor } from 'src/components/base/styles/card-indicator-color';
import { z } from 'zod';

const schema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.string().email('Invalid email address'),
  validation: z.string().email('Invalid email address'),
  website: z.string().url('Invalid URL'),
  members: z.string().min(1, 'Members field is required'),
  price: z.string().regex(/^\$?\d+(,\d{3})*(\.\d{1,2})?$/, 'Price is required'),
  currency: z
    .union([z.literal('USD'), z.literal('EUR'), z.literal('GBP')])
    .nullable()
    .refine((val) => val === 'USD', { message: 'Only USD is allowed' }),
});

type FormData = z.infer<typeof schema>;

const Component = () => {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    setValue,
    formState: { errors, isDirty },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: '',
      email: '',
      validation: '',
      website: '',
      members: '',
      price: '',
      currency: 'USD',
    },
  });

  const currencyValue = watch('currency', 'USD');

  const handleCurrencyChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    const value = event.target.value as 'USD' | 'EUR' | 'GBP';
    setValue('currency', value, { shouldValidate: true });
  };

  const onSubmit: SubmitHandler<FormData> = () => {
    toast.custom(
      (t) => (
        <CardIndicatorColor
          elevation={21}
          indicatorColor="success"
          className={`${t.visible ? 'animate-enter' : 'animate-leave'}`}
        >
          <CardContent
            sx={{
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <AvatarState
              state="success"
              variant="rounded"
              useShadow
              sx={{
                width: 38,
                height: 38,
                mt: 0.4,
              }}
            >
              <CheckRoundedIcon fontSize="small" />
            </AvatarState>
            <Box ml={2}>
              <Typography variant="h6">Save Successful</Typography>

              <Typography
                variant="subtitle1"
                color="text.secondary"
              >
                The form has been successfully saved!
              </Typography>
            </Box>
            <IconButton
              sx={{
                ml: 2,
                p: 0.2,
                position: 'absolute',
                right: (theme) => theme.spacing(1),
                top: (theme) => theme.spacing(1),
              }}
              size="small"
              onClick={() => toast.dismiss(t.id)}
            >
              <CloseRoundedIcon fontSize="inherit" />
            </IconButton>
          </CardContent>
        </CardIndicatorColor>
      ),
      {
        position: 'top-right',
      }
    );
  };

  const handleReset = () => {
    reset();
    toast.custom(
      (t) => (
        <CardIndicatorColor
          elevation={21}
          indicatorColor="error"
          className={`${t.visible ? 'animate-enter' : 'animate-leave'}`}
        >
          <CardContent
            sx={{
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <AvatarState
              state="error"
              variant="rounded"
              useShadow
              sx={{
                width: 38,
                height: 38,
                mt: 0.4,
              }}
            >
              <CheckRoundedIcon fontSize="small" />
            </AvatarState>
            <Box ml={2}>
              <Typography variant="h6">Reset</Typography>

              <Typography
                variant="subtitle1"
                color="text.secondary"
              >
                The form has been reset!
              </Typography>
            </Box>
            <IconButton
              sx={{
                ml: 2,
                p: 0.2,
                position: 'absolute',
                right: (theme) => theme.spacing(1),
                top: (theme) => theme.spacing(1),
              }}
              size="small"
              onClick={() => toast.dismiss(t.id)}
            >
              <CloseRoundedIcon fontSize="inherit" />
            </IconButton>
          </CardContent>
        </CardIndicatorColor>
      ),
      {
        position: 'top-right',
      }
    );
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Card>
        <FormGroup>
          <FormLabel
            sx={{
              backgroundColor: (theme) =>
                theme.palette.mode === 'dark'
                  ? alpha(theme.palette.neutral[25], 0.02)
                  : 'neutral.25',
              p: 2,
              borderRadius: (theme) => theme.shape.borderRadius + 'px',
            }}
            htmlFor="name-input"
          >
            <Typography
              variant="h5"
              color="text.primary"
            >
              User details
            </Typography>
            <Typography variant="subtitle2">Add the information you see fit</Typography>
          </FormLabel>
          <Divider />
          <CardContent>
            <Grid
              container
              spacing={{ xs: 2, md: 2 }}
            >
              <Grid
                xs={12}
                md={6}
              >
                <FormControl
                  fullWidth
                  error={!!errors.name}
                >
                  <Typography
                    variant="h6"
                    gutterBottom
                    component="label"
                    htmlFor="name-input"
                    fontWeight={500}
                  >
                    Name
                  </Typography>
                  <FilledInput
                    {...register('name')}
                    id="name-input"
                    hiddenLabel
                    placeholder="Write your name"
                  />
                  <FormHelperText>{errors.name?.message}</FormHelperText>
                </FormControl>
              </Grid>
              <Grid
                xs={12}
                md={6}
              >
                <FormControl
                  fullWidth
                  disabled
                >
                  <Typography
                    variant="h6"
                    gutterBottom
                    component="label"
                    htmlFor="company-input"
                    fontWeight={500}
                  >
                    Company (Disabled)
                  </Typography>
                  <FilledInput
                    id="company-input"
                    hiddenLabel
                  />
                </FormControl>
              </Grid>
              <Grid xs={12}>
                <FormControl
                  fullWidth
                  error={!!errors.email}
                >
                  <Typography
                    variant="h6"
                    gutterBottom
                    component="label"
                    htmlFor="email-input"
                    fontWeight={500}
                  >
                    Email
                  </Typography>
                  <FilledInput
                    {...register('email')}
                    type="email"
                    hiddenLabel
                    id="email-input"
                    placeholder="Write your email"
                    startAdornment={
                      <InputAdornment position="start">
                        <MailOutlineRoundedIcon fontSize="small" />
                      </InputAdornment>
                    }
                  />
                  <FormHelperText>{errors.email?.message}</FormHelperText>
                </FormControl>
              </Grid>
              <Divider />
              <Grid
                xs={12}
                md={6}
              >
                <FormControl
                  fullWidth
                  error={!!errors.website}
                >
                  <Typography
                    variant="h6"
                    gutterBottom
                    component="label"
                    htmlFor="website-input"
                    fontWeight={500}
                  >
                    Website
                  </Typography>
                  <FilledInput
                    {...register('website')}
                    id="website-input"
                    type="text"
                    hiddenLabel
                    placeholder="http://example.com"
                    endAdornment={
                      <InputAdornment position="end">
                        <Divider
                          sx={{ ml: 1 }}
                          orientation="vertical"
                          flexItem
                        />
                        <Button
                          size="small"
                          color="secondary"
                          variant="outlined"
                        >
                          Change
                        </Button>
                      </InputAdornment>
                    }
                  />
                  <FormHelperText>{errors.website?.message}</FormHelperText>
                </FormControl>
              </Grid>
              <Grid
                xs={12}
                md={6}
              >
                <FormControl
                  fullWidth
                  error={!!errors.members}
                >
                  <Typography
                    variant="h6"
                    gutterBottom
                    component="label"
                    htmlFor="members-input"
                    fontWeight={500}
                  >
                    Members
                  </Typography>
                  <FilledInput
                    {...register('members')}
                    id="members-input"
                    type="text"
                    hiddenLabel
                    placeholder="Members"
                    sx={{ pr: 0.5 }}
                    startAdornment={
                      <InputAdornment position="start">
                        <PeopleOutlineRoundedIcon />
                      </InputAdornment>
                    }
                    endAdornment={
                      <InputAdornment position="end">
                        <Divider
                          sx={{ ml: 1 }}
                          orientation="vertical"
                          flexItem
                        />
                        <Tooltip
                          title="Sort"
                          arrow
                          placement="top"
                        >
                          <ButtonIcon
                            size="small"
                            sx={{
                              mr: 0.5,
                            }}
                            color="secondary"
                            variant="contained"
                            startIcon={<SortRoundedIcon />}
                          />
                        </Tooltip>
                      </InputAdornment>
                    }
                  />
                  <FormHelperText>{errors.members?.message}</FormHelperText>
                </FormControl>
              </Grid>
              <Grid
                xs={12}
                md={6}
              >
                <FormControl
                  margin="none"
                  variant="outlined"
                  fullWidth
                  error={!!errors.price || !!errors.currency}
                >
                  <Typography
                    variant="h6"
                    gutterBottom
                    component="label"
                    htmlFor="price-input"
                    fontWeight={500}
                  >
                    Price
                    <Typography
                      component="span"
                      color="text.secondary"
                    >
                      *
                    </Typography>
                  </Typography>
                  <InputMask
                    mask="$999.99"
                    maskChar={null}
                    {...register('price')}
                  >
                    {
                      //@ts-ignore
                      (inputProps) => (
                        <OutlinedInput
                          {...inputProps}
                          id="price-input"
                          type="text"
                          placeholder="0.00"
                          sx={{
                            pr: 0,
                            '.MuiInputAdornment-outlined': {
                              height: '100%',

                              '.MuiOutlinedInput-notchedOutline': {
                                borderWidth: 0,
                              },
                            },
                          }}
                          startAdornment={
                            <InputAdornment position="start">
                              <LocalOfferRoundedIcon />
                            </InputAdornment>
                          }
                          endAdornment={
                            <InputAdornment position="end">
                              <Divider
                                sx={{ ml: 1 }}
                                orientation="vertical"
                                flexItem
                              />

                              <Select
                                {...register('currency')}
                                id="currency-input"
                                displayEmpty
                                value={currencyValue}
                                //@ts-ignore
                                onChange={handleCurrencyChange}
                                error={!!errors.currency}
                              >
                                <ListSubheader disableSticky>Select currency</ListSubheader>
                                <MenuItem value="USD">USD</MenuItem>
                                <MenuItem value="EUR">EUR</MenuItem>
                                <MenuItem value="GBP">GBP</MenuItem>
                              </Select>
                            </InputAdornment>
                          }
                        />
                      )
                    }
                  </InputMask>

                  <FormHelperText>{errors.price?.message}</FormHelperText>
                  {errors.currency && <FormHelperText>{errors.currency.message}</FormHelperText>}
                </FormControl>
              </Grid>
            </Grid>
          </CardContent>
          <CardActions
            sx={{
              width: '100%',
              justifyContent: 'flex-end',
              backgroundColor: (theme) =>
                theme.palette.mode === 'dark'
                  ? alpha(theme.palette.neutral[25], 0.02)
                  : 'neutral.25',
            }}
          >
            <Button
              type="button"
              onClick={handleReset}
              disabled={!isDirty}
            >
              Reset
            </Button>
            <Button
              variant="contained"
              type="submit"
              startIcon={<SaveRoundedIcon />}
            >
              Save
            </Button>
          </CardActions>
        </FormGroup>
      </Card>
    </form>
  );
};

export default Component;

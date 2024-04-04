import ArchiveTwoToneIcon from '@mui/icons-material/ArchiveTwoTone';
import DeleteTwoToneIcon from '@mui/icons-material/DeleteTwoTone';
import LocalOfferTwoToneIcon from '@mui/icons-material/LocalOfferTwoTone';
import MarkEmailReadTwoToneIcon from '@mui/icons-material/MarkEmailReadTwoTone';
import {
  alpha,
  Avatar,
  Box,
  Card,
  Checkbox,
  Divider,
  ListItemAvatar,
  ListItemText,
  Stack,
  Tooltip,
  Typography,
  useTheme,
} from '@mui/material';
import { format } from 'date-fns';
import NextLink from 'next/link';
import PropTypes from 'prop-types';
import type { ChangeEvent, FC } from 'react';
import { useTranslation } from 'react-i18next';
import { ListItemWrapper } from 'src/components/application-ui/stacked-lists/pricing-plans/pricing-plans';
import { ButtonIcon } from 'src/components/base/styles/button-icon';
import type { Mail } from 'src/models/mailbox';
import { useSelector } from 'src/store';

interface ResultsItemProps {
  mailbox: Mail;
  href: string;
  onDeselect?: () => void;
  onSelect?: () => void;
  selected: boolean;
}

export const ResultsItem: FC<ResultsItemProps> = (props) => {
  const { mailbox, onDeselect, onSelect, selected, href } = props;
  const { tags } = useSelector((state) => state.mailbox);

  const { t } = useTranslation();

  const handleCheckboxChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const { checked } = event.target;

    if (checked && onSelect) {
      onSelect();
    }

    if (!checked && onDeselect) {
      onDeselect();
    }
  };

  const theme = useTheme();

  return (
    <Box
      sx={{
        boxShadow: selected && `0 0 0 2px ${theme.palette.primary.main}`,
        backgroundColor: mailbox.opened
          ? theme.palette.mode === 'dark'
            ? alpha(theme.palette.neutral[25], 0.05)
            : 'neutral.25'
          : 'none',
        a: { textDecoration: 'none', flex: 1 },
      }}
    >
      <ListItemWrapper
        sx={{
          alignItems: 'flex-start',
          flexDirection: { xs: 'column', md: 'row' },
          p: 1.5,
        }}
      >
        <ListItemAvatar>
          <Checkbox
            size="small"
            checked={selected}
            onChange={handleCheckboxChange}
          />
        </ListItemAvatar>
        <NextLink
          href={href}
          passHref
        >
          <Box
            my={{ xs: 2, md: 0 }}
            display="flex"
            flexDirection="column"
            alignItems="flex-start"
          >
            <Box
              display="flex"
              alignItems="center"
              mb={1}
            >
              <Avatar
                sx={{ mr: 1, width: 34, height: 34 }}
                src={mailbox.from.avatar}
              />
              <Typography
                variant="h6"
                noWrap
                color="text.primary"
                fontWeight={mailbox.opened ? 400 : 500}
              >
                {mailbox.from.name}
              </Typography>
            </Box>
            <ListItemText
              primary={
                <Typography
                  variant="h5"
                  color="text.primary"
                  fontWeight={mailbox.opened ? 400 : 500}
                  sx={{
                    mb: 0.3,
                  }}
                >
                  {mailbox.subject}
                </Typography>
              }
              secondary={
                <Typography
                  color="text.secondary"
                  variant="subtitle2"
                >
                  {mailbox.summary}
                </Typography>
              }
              disableTypography
            />
          </Box>
        </NextLink>
        <Stack
          direction="row"
          spacing={2}
          alignItems="center"
          divider={
            <Divider
              flexItem
              orientation="vertical"
            />
          }
        >
          {mailbox.tagIds.length > 0 ? (
            <Stack
              direction="row"
              spacing={0.5}
            >
              {mailbox.tagIds.map((tagId: string) => {
                const tag = tags.find((_tag) => _tag.id === tagId);

                if (!tag) return null;

                return (
                  <Tooltip
                    arrow
                    placement="top"
                    title={tag.name}
                    key={tag.id}
                  >
                    <ButtonIcon
                      size="small"
                      sx={{
                        width: 34,
                        height: 34,
                        color: tag.color,
                        background: alpha(tag.color, 0.08),

                        '&:hover': {
                          background: alpha(tag.color, 0.12),
                        },
                      }}
                    >
                      <LocalOfferTwoToneIcon
                        fontSize="small"
                        color="inherit"
                      />
                    </ButtonIcon>
                  </Tooltip>
                );
              })}
            </Stack>
          ) : null}
          <Typography
            variant="subtitle2"
            color="text.secondary"
          >
            {format(mailbox.date, 'dd MMMM')}
          </Typography>
        </Stack>

        <Card className="MuiActionButtons">
          <Tooltip
            arrow
            placement="top"
            title={t('Archive')}
          >
            <ButtonIcon color="primary">
              <ArchiveTwoToneIcon fontSize="small" />
            </ButtonIcon>
          </Tooltip>
          <Tooltip
            arrow
            placement="top"
            title={t('Mark as read')}
          >
            <ButtonIcon color="primary">
              <MarkEmailReadTwoToneIcon fontSize="small" />
            </ButtonIcon>
          </Tooltip>
          <Tooltip
            arrow
            placement="top"
            title={t('Delete')}
          >
            <ButtonIcon
              sx={{ ml: 1 }}
              color="error"
            >
              <DeleteTwoToneIcon fontSize="small" />
            </ButtonIcon>
          </Tooltip>
        </Card>
      </ListItemWrapper>
    </Box>
  );
};

ResultsItem.propTypes = {
  // @ts-ignore
  mailbox: PropTypes.object.isRequired,
  onDeselect: PropTypes.func,
  onSelect: PropTypes.func,
  selected: PropTypes.bool.isRequired,
};

ResultsItem.defaultProps = {
  onDeselect: () => {},
  onSelect: () => {},
};

import { Box, Card, Divider, Pagination, Stack, Typography } from '@mui/material';
import type { FC } from 'react';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { getMails } from 'src/slices/mailbox';
import { useDispatch, useSelector } from 'src/store';
import ResultsActionBar from './results-actionbar';
import { ResultsItem } from './results-item';

interface MailboxResultsProps {
  tag: string;
}

export const MailboxResults: FC<MailboxResultsProps> = (props) => {
  const { tag } = props;

  const dispatch = useDispatch();
  const { mails } = useSelector((state) => state.mailbox);
  const [selectedMails, setSelectedMails] = useState<string[]>([]);
  const { t } = useTranslation();

  useEffect(() => {
    dispatch(getMails({ tag }));
  }, [tag]);

  const handleSelectAllMails = (): void => {
    setSelectedMails(mails.allIds.map((mailId) => mailId));
  };

  const handleDeselectAllMails = (): void => {
    setSelectedMails([]);
  };

  const handleSelectOneMail = (mailId: string): void => {
    setSelectedMails((prevSelectedMails) => {
      if (!prevSelectedMails.includes(mailId)) {
        return [...prevSelectedMails, mailId];
      }

      return prevSelectedMails;
    });
  };

  const handleDeselectOneMail = (mailId: string): void => {
    setSelectedMails((prevSelectedMails) => prevSelectedMails.filter((id) => id !== mailId));
  };

  return (
    <Box>
      <ResultsActionBar
        onDeselectAll={handleDeselectAllMails}
        onSelectAll={handleSelectAllMails}
        selectedMails={selectedMails.length}
        mails={mails.allIds.length}
      />
      <Divider />

      {mails.allIds.length === 0 && (
        <Typography
          sx={{
            py: 5,
          }}
          variant="h3"
          fontWeight={400}
          color="text.secondary"
          align="center"
        >
          {t('There are no messages in this category')}
        </Typography>
      )}
      <Box p={{ xs: 0, sm: 2, md: 3 }}>
        <Card
          sx={{
            borderWidth: { xs: 0, sm: 1 },
          }}
          variant="outlined"
        >
          <Stack divider={<Divider />}>
            {mails.allIds.map((mailId: string) => (
              <ResultsItem
                mailbox={mails.byId[mailId]}
                key={mailId}
                href={tag && tag !== 'inbox' ? `?mailId=${mailId}&tag=${tag}` : `?mailId=${mailId}`}
                onDeselect={() => handleDeselectOneMail(mailId)}
                onSelect={() => handleSelectOneMail(mailId)}
                selected={selectedMails.includes(mailId)}
              />
            ))}
          </Stack>
        </Card>
      </Box>
      {mails.allIds.length !== 0 && (
        <Box
          pb={{ xs: 2, sm: 3 }}
          display="flex"
          justifyContent="center"
        >
          <Pagination
            shape="rounded"
            size="large"
            count={3}
            variant="outlined"
            color="primary"
          />
        </Box>
      )}
    </Box>
  );
};

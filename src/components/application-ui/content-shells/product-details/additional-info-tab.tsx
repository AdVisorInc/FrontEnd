import Masonry from '@mui/lab/Masonry';
import { Box, Card, CardActionArea, Container, Typography } from '@mui/material';
import PropTypes from 'prop-types';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Product } from 'src/models/product';

interface AdditionalInfoTabProps {
  product: Product;
}

const AdditionalInfoTab: FC<AdditionalInfoTabProps> = ({ product }) => {
  const { t } = useTranslation();
  const heights = [250, 175, 290, 170, 150, 150, 130, 280, 150, 190, 130, 150, 230, 150, 280];

  return (
    <Box p={{ xs: 2, sm: 3 }}>
      <Typography
        variant="h4"
        sx={{
          pb: 2,
        }}
      >
        {t('Description')}
      </Typography>
      <p>
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
        laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
        architecto beatae vitae dicta sunt explicabo.
      </p>

      <p>
        Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
        velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam
        quaerat voluptatem.
      </p>

      <p>
        Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam,
        nisi ut aliquid ex ea commodi consequatur?
      </p>
      <Typography
        variant="h3"
        sx={{ pb: { xs: 2, sm: 3 }, pt: { xs: 2, sm: 3 } }}
        align="center"
      >
        {t('Masonry gallery')}
      </Typography>
      <Box>
        <Container maxWidth="lg">
          <Masonry
            columns={{ xs: 1, sm: 2, md: 3 }}
            spacing={{ xs: 1, sm: 3 }}
          >
            {product.images.map((value, index) => {
              return (
                <Card
                  variant="outlined"
                  sx={{
                    border: 0,
                    height: heights[index % heights.length],
                  }}
                  key={value}
                >
                  <CardActionArea
                    sx={{
                      width: '100%',
                      height: '100%',
                      filter: 'grayscale(60%)',
                      backgroundPosition: 'center',
                      backgroundSize: 'cover',
                      backgroundImage: `url("${value}")`,

                      '&:hover': {
                        filter: 'grayscale(0%)',
                      },
                    }}
                  />
                </Card>
              );
            })}
          </Masonry>
        </Container>
      </Box>
    </Box>
  );
};

AdditionalInfoTab.propTypes = {
  // @ts-ignore
  product: PropTypes.object.isRequired,
};

export default AdditionalInfoTab;

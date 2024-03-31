import { Button, Card, CardContent, Grid, Tooltip } from '@mui/material';

const Component = () => {
  return (
    <Card>
      <CardContent>
        <Grid
          container
          justifyContent="center"
        >
          <Grid item>
            <Tooltip
              arrow
              title="Top-start tooltip"
              placement="top-start"
            >
              <Button
                color="secondary"
                variant="outlined"
              >
                top-start
              </Button>
            </Tooltip>
            <Tooltip
              arrow
              title="Top tooltip"
              placement="top"
            >
              <Button
                sx={{ mx: 1 }}
                color="secondary"
                variant="outlined"
              >
                top
              </Button>
            </Tooltip>
            <Tooltip
              arrow
              title="Top-end tooltip"
              placement="top-end"
            >
              <Button
                color="secondary"
                variant="outlined"
              >
                top-end
              </Button>
            </Tooltip>
          </Grid>
        </Grid>
        <Grid
          container
          justifyContent="center"
        >
          <Grid
            item
            xs={6}
            gap={1}
          >
            <Tooltip
              arrow
              title="Left-start tooltip"
              placement="left-start"
            >
              <Button
                color="secondary"
                variant="outlined"
              >
                left-start
              </Button>
            </Tooltip>
            <br />
            <Tooltip
              arrow
              title="Left tooltip"
              placement="left"
            >
              <Button
                sx={{ my: 1 }}
                color="secondary"
                variant="outlined"
              >
                left
              </Button>
            </Tooltip>
            <br />
            <Tooltip
              arrow
              title="Left-end tooltip"
              placement="left-end"
            >
              <Button
                color="secondary"
                variant="outlined"
              >
                left-end
              </Button>
            </Tooltip>
          </Grid>
          <Grid
            container
            xs={6}
            alignItems="flex-end"
            direction="column"
          >
            <Grid item>
              <Tooltip
                arrow
                title="Right-start tooltip"
                placement="right-start"
              >
                <Button
                  color="secondary"
                  variant="outlined"
                >
                  right-start
                </Button>
              </Tooltip>
            </Grid>
            <Grid item>
              <Tooltip
                arrow
                title="Right tooltip"
                placement="right"
              >
                <Button
                  sx={{ my: 1 }}
                  color="secondary"
                  variant="outlined"
                >
                  right
                </Button>
              </Tooltip>
            </Grid>
            <Grid item>
              <Tooltip
                arrow
                title="Right-end tooltip"
                placement="right-end"
              >
                <Button
                  color="secondary"
                  variant="outlined"
                >
                  right-end
                </Button>
              </Tooltip>
            </Grid>
          </Grid>
        </Grid>
        <Grid
          container
          justifyContent="center"
        >
          <Grid item>
            <Tooltip
              arrow
              title="Bottom-start tooltip"
              placement="bottom-start"
            >
              <Button
                color="secondary"
                variant="outlined"
              >
                bottom-start
              </Button>
            </Tooltip>
            <Tooltip
              arrow
              title="Bottom tooltip"
              placement="bottom"
            >
              <Button
                sx={{ mx: 1 }}
                color="secondary"
                variant="outlined"
              >
                bottom
              </Button>
            </Tooltip>
            <Tooltip
              arrow
              title="Bottom-end tooltip"
              placement="bottom-end"
            >
              <Button
                color="secondary"
                variant="outlined"
              >
                bottom-end
              </Button>
            </Tooltip>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default Component;

import React from 'react';
import { useOvermind } from '../overmind';
import { Typography, Divider, Box, Button } from '@material-ui/core';

const InviteSuccessMessage = () => {

  const { actions } = useOvermind();

  return (
    <>
      <Typography variant='h6' align='center'>
        All done!
      </Typography>
      <Divider variant='middle' />
      <Box pt={3}>
        <Typography variant='p' align='center'>
          You will be one of the first to experience Broccoli &amp; Co. when we launch
        </Typography>
      </Box>
      <Box pt={4} pb={3}>
        <Button
          variant='outlined'
          fullWidth
          onClick={() => actions.toggleInviteModal(false)}
        >
          OK
        </Button>
      </Box>
    </>
  );
};

export default InviteSuccessMessage;

import React from 'react';
import { useOvermind } from './overmind';
import { AppBar, Toolbar, Typography, Box, Button } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/core/styles';

import theme from './Theme';
import style from './App.module.scss';
import InviteModal from './inviteModal/InviteModal';

const App = () => {
  const { state, actions } = useOvermind();
  return (
    <ThemeProvider theme={theme}>
      <div className={style.app}>
        <AppBar position='relative'>
          <Toolbar>
            <Typography variant='h6'>{state.title}</Typography>
          </Toolbar>
        </AppBar>
        <div className={style.contents}>
          <Box pb={4}>
            <Typography variant='h2'>
              A better way<br/>
              to enjoy every day.
            </Typography>
          </Box>
          <Box pb={4}>
            <Typography variant='h5'>
              Be the first to know when we launch.
            </Typography>
          </Box>
          <Button variant='outlined' onClick={() => actions.toggleInviteModal(true)}>
            Request an Invite
          </Button>
        </div>
        <div className={style.footer}>
          <p>
            Made with{' '}
            <span role='img' aria-label='love'>
              ❤️
            </span>{' '}
            in Melbourne
          </p>
        </div>
      </div>
      <InviteModal />
    </ThemeProvider>
  );
}

export default App;

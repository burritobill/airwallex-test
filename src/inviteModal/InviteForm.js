import React from 'react';
import { useOvermind } from '../overmind';
import { useForm } from 'react-hook-form';

import {
  Typography,
  Divider,
  Box,
  TextField,
  Button
} from '@material-ui/core';
import { Alert } from '@material-ui/lab';

const InviteForm = () => {
  const { state, actions } = useOvermind();
  const { register, handleSubmit, getValues, errors } = useForm();

  const onSubmit = data => {
    actions.sendInviteRequest(data);
  };

  return (
    <>
      <Typography variant='h6' align='center' gutterBottom>
        Request an Invite
      </Typography>
      <Divider variant='middle' />
      <Box pt={3}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <TextField
            name='inviteName'
            id='invite-name'
            label='Full name'
            variant='filled'
            fullWidth
            margin='normal'
            error={Boolean(errors.inviteName)}
            autoFocus
            helperText={errors.inviteName && 'This field is required'}
            inputRef={register({
              required: true
            })}
          />
          <TextField
            name='inviteEmail'
            id='invite-email'
            label='Email'
            variant='filled'
            fullWidth
            margin='normal'
            error={Boolean(errors.inviteEmail)}
            helperText={
              errors.inviteEmail &&
              (errors.inviteEmail.type === 'pattern'
                ? 'Needs to be a valid email'
                : 'This field is required')
            }
            inputRef={register({
              required: true,
              pattern: /^(([^<>()[\]\\.,;:\s@']+(\.[^<>()[\]\\.,;:\s@']+)*)|('.+'))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            })}
          />
          <TextField
            name='inviteEmailConfirm'
            id='invite-email-confirm'
            label='Confirm email'
            variant='filled'
            fullWidth
            margin='normal'
            error={Boolean(errors.inviteEmailConfirm)}
            helperText={
              errors.inviteEmailConfirm &&
              (errors.inviteEmailConfirm.type === 'required'
                ? 'This field is required'
                : errors.inviteEmailConfirm.message)
            }
            inputRef={register({
              required: true,
              validate: value =>
                value === getValues().inviteEmail || 'The emails do not match'
            })}
          />
          <Box pt={4} pb={3}>
            {state.invite.error ? (
              <Box pb={2}>
                <Alert severity='warning'>
                  There was an issue submitting your request
                </Alert>
              </Box>
            ) : null}
            <Button variant='outlined' type='submit' fullWidth>
              Send
            </Button>
          </Box>
        </form>
      </Box>
    </>
  );
};

export default InviteForm;

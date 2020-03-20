import React from 'react';
import { useOvermind } from '../overmind';
import classnames from 'classnames';
import {
  Modal,
  Paper,
  ClickAwayListener,
  Backdrop,
  Fade,
  LinearProgress
} from '@material-ui/core';
import style from './InviteModal.module.scss';
import InviteForm from './InviteForm';
import InviteSuccessMessage from './InviteSuccessMessage';

const InviteModal = () => {
  const { state, actions } = useOvermind();

  return (
    <Modal
      className={style.modal}
      open={state.invite.open}
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500
      }}
      closeAfterTransition
    >
      <Fade in={state.invite.open}>
        <div className={classnames('modalWrapper', style.removeOutline)}>
          <ClickAwayListener
            onClickAway={() => actions.toggleInviteModal(false)}
          >
            <Paper tabIndex={-1} elevation={2} className={style.modalInner}>
              {!state.invite.success ? (
                <InviteForm />
              ) : (
                <InviteSuccessMessage />
              )}
              {state.invite.requesting ? (
                <LinearProgress className={style.loader} />
              ) : null}
            </Paper>
          </ClickAwayListener>
        </div>
      </Fade>
    </Modal>
  );
};

export default InviteModal;

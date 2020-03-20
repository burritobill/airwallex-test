export const toggleInviteModal = ({ state }, value) => {
  state.invite.open = value;
  if (value) {
    state.invite.success = false;
    state.invite.error = false;
  }
};

export const sendInviteRequest = async ({ state, effects }, formData) => {
  state.invite.requesting = true;
  try {
    await effects.http.post(
      'https://l94wc2001h.execute-api.ap-southeast-2.amazonaws.com/prod/fake-auth',
      {
        name: formData.inviteName,
        email: formData.inviteEmail
      }
    );
    state.invite.success = true;
    state.invite.error = false;
  } catch(err) {
    state.invite.error = true;
  }
  state.invite.requesting = false;
};

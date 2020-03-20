import { createOvermindMock } from 'overmind';
import { config } from './';

describe('Actions', () => {
  describe('toggleInviteModal', () => {
    test('should hide modal when passed in false', () => {
      const overmind = createOvermindMock(config);
      overmind.actions.toggleInviteModal(false);
      expect(overmind.state.invite.open).toEqual(false);
    });
    test('should open modal when passed in true', () => {
      const overmind = createOvermindMock(config);
      overmind.actions.toggleInviteModal(true);
      expect(overmind.state.invite.open).toBe(true);
    });
  });

  describe('sendInviteRequest', () => {
    test('should set success state if request is successful', async () => {
      const overmind = createOvermindMock(config, {
        http: {
          post(url, formData) {
            return Promise.resolve();
          }
        }
      });
      await overmind.actions.sendInviteRequest({
        inviteName: 'Tess Persson',
        email: 'tess.persson@test.com'
      });
      expect(overmind.state.invite.success).toBe(true);
      expect(overmind.state.invite.error).toBe(false);
    });
    test('should set error state if request is unsuccessful', async () => {
      const overmind = createOvermindMock(config, {
        http: {
          post(url, formData) {
            return Promise.reject();
          }
        }
      });
      await overmind.actions.sendInviteRequest({
        inviteName: 'Tess Persson',
        email: 'tess.persson@test.com'
      });
      expect(overmind.state.invite.success).toBe(false);
      expect(overmind.state.invite.error).toBe(true);
    });
  });

});

import InviteModal from './InviteModal';
import { overmindWrapper } from '../overmind/wrapper';

describe('InviteModal', () => {
  test('modal should be visible if modal state set to open', () => {
    const wrapper = overmindWrapper(
      {
        invite: {
          open: true
        }
      },
      InviteModal
    );
    expect(wrapper.exists('.modalWrapper')).toBe(true);
  });
  test('modal should not be visible if modal state not set to open', () => {
    const wrapper = overmindWrapper(
      {
        invite: {
          open: false
        }
      },
      InviteModal
    );
    expect(wrapper.exists('.modalWrapper')).toBe(false);
  });
});

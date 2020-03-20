import InviteForm from './InviteForm';
import { overmindWrapper } from '../overmind/wrapper';
import { useForm } from 'react-hook-form';

jest.mock('react-hook-form', () => ({
  useForm: jest.fn()
}));


const mockErrors = (errors) => {
  return () => ({
    errors,
    handleSubmit: () => {},
    register: () => {},
    getValues: () => {}
  });
};


describe('InviteForm', () => {
  test('field required messages should be shown when fields are empty', () => {
    useForm.mockImplementation(mockErrors({
      inviteName: true,
      inviteEmail: true,
      inviteEmailConfirm: {
        type: "required"
      }
    }));
    const wrapper = overmindWrapper(
      {
        invite: {
          error: false
        }
      },
      InviteForm
    );
    expect(wrapper.exists('#invite-name-helper-text')).toBe(true);
    expect(wrapper.exists('#invite-email-helper-text')).toBe(true);
    expect(wrapper.exists('#invite-email-confirm-helper-text')).toBe(true);
  });
  test('alert box should show when a server error has occured', () => {
    useForm.mockImplementation(mockErrors({
    }));
    const wrapper = overmindWrapper(
      {
        invite: {
          error: true
        }
      },
      InviteForm
    );
    expect(wrapper.exists('div[role="alert"]')).toBe(true);
  });
});

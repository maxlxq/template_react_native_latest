import { createRequestTypes } from '@/utils/reduxHelper';

export const LOGIN = createRequestTypes('LOGIN');
export const LOGOUT = createRequestTypes('LOGOUT');

export default {
  login() {
    return {
      type: LOGIN.REQUEST,
    };
  },
  logout() {
    return {
      type: LOGOUT.REQUEST,
    };
  },
};

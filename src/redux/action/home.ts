import { createRequestTypes } from '@/utils/reduxHelper';

export const INCREASE = createRequestTypes('INCREASE');
export const DECREASE = createRequestTypes('DECREASE');

export default {
  increase() {
    return {
      type: INCREASE.REQUEST,
    };
  },
  decrease() {
    return {
      type: DECREASE.REQUEST,
    };
  },
};

import { createRequestTypes } from '@/utils/reduxHelper';

export const SET_COUNT = createRequestTypes('SET_COUNT');
export const INCREASE = createRequestTypes('INCREASE');
export const DECREASE = createRequestTypes('DECREASE');

export default {
  setCount(count?: number) {
    return {
      type: SET_COUNT.REQUEST,
      count: count ?? 0,
    };
  },
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

/*
 * @Author: shizhi
 * @Date: 2023-06-07 14:08:23
 * @LastEditors: shizhi
 * @LastEditTime: 2023-06-07 14:49:06
 * @Description: 设备行为
 */
import { createRequestTypes } from '@/utils/reduxHelper';

// unused
export const APPEARANCE_CHANGE = createRequestTypes('APPEARANCE_CHANGE');

export default {
  appearanceChange(colorScheme: string) {
    return {
      type: APPEARANCE_CHANGE.REQUEST,
      colorScheme,
    };
  },
};

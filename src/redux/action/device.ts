/*
 * @Author: shizhi
 * @Date: 2023-06-07 14:08:23
 * @LastEditors: shizhi
 * @LastEditTime: 2024-10-24 17:27:09
 * @Description: 设备行为
 */
import { appearanceType } from '@/interface/device';
import { createRequestTypes } from '@/utils/reduxHelper';

export const APPEARANCE_CHANGE = createRequestTypes('APPEARANCE_CHANGE');
export const USE_SYSTEM_CHANGE = createRequestTypes('USE_SYSTEM_CHANGE');

export default {
  appearanceChange(colorScheme: appearanceType) {
    return {
      type: APPEARANCE_CHANGE.REQUEST,
      colorScheme,
    };
  },
  useSystemChange() {
    return {
      type: USE_SYSTEM_CHANGE.REQUEST,
    };
  },
};

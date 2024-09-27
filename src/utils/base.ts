import { PixelRatio } from 'react-native';

// 当前设备的像素密度
export const PixelNum = PixelRatio.get();

// 当前设备 一个像素点的长度
export const OnePixel = +(1 / PixelNum).toFixed(2);

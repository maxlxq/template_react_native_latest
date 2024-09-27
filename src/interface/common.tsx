import React from 'react';
import { ColorTheme } from '@/constants/theme';

export interface WithChildrenITF extends ColorTheme {
  children:
    | string
    | number
    | boolean
    | React.ReactElement<any, string | React.JSXElementConstructor<any>>
    | Iterable<React.ReactNode>
    | React.ReactPortal
    | null
    | undefined;
}

export interface CommonITF {
  [key: string]: any;
}

import { DefaultTheme } from 'styled-components';

const colors = {
  primaryColor: '#333333',
  secondaryColor: '#AAAAAA',
  successColor: '#2e7ff2',
  dangerColor: '#dc3545',
  warningColor: '#ffc107',
  infoColor: '#04C09E',
  lightColor: '#FFFFFF',
  darkColor: '#000000',
};

const breakpoints = {
  xs: '0',
  sm: '576px',
  md: '768px',
  lg: '992px',
  xl: '1200px',
  xxl: '1400px',
};

const shadows = {
  normal: '0 2px 4px rgba(0, 0, 0, 0.2)',
  large: '0 4px 10px rgba(0, 0, 0, 0.3)',
};

const effects = {
  hoverScale: 'translateX(0.3rem) translateY(-0.3rem) ',
  hoverScaleUp: 'scale(1.03)',
};

const transitions = {
  default: '0.3s ease-in-out',
};

export type ColorType = typeof colors;
export type BreakPointType = typeof breakpoints;
export type ShadowType = typeof shadows;
export type EffectType = typeof effects;
export type TransitionType = typeof transitions;

export const theme: DefaultTheme = {
  colors,
  breakpoints,
  shadows,
  effects,
  transitions,
};

export type ThemeType = typeof theme;

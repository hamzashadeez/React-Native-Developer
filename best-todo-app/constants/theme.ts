/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

import { DarkTheme, DefaultTheme } from '@react-navigation/native';
import { Platform } from 'react-native';


const tintColorLight = '#1E3E62';
const tintColorDark = '#fff';

export const light: any = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    // custom/overrides
    primary: "#1E3E62",
    text: '#3C3D37',
    background: '#fff',
    tint: tintColorLight,
    icon: '#687076',
    hamze: '#fff',
    card: 'whitesmoke',
    tabIconDefault: '#687076',
    tabIconSelected: tintColorLight,
  },
};

export const dark: any = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    // custom/overrides
    primary: "#1E3E62",
    text: '#ECEDEE',
    hamze: '#fff',
    background: '#1E201E',
    tint: tintColorDark,
    icon: '#9BA1A6',
    card: "#7198c5e0",
    tabIconDefault: '#66a0cfff',
    tabIconSelected: tintColorDark,
  },
};

export const Colors: any = {
  light: light.colors,
  dark: dark.colors,
};

export const Fonts = Platform.select({
  ios: {
    /** iOS `UIFontDescriptorSystemDesignDefault` */
    sans: 'system-ui',
    /** iOS `UIFontDescriptorSystemDesignSerif` */
    serif: 'ui-serif',
    /** iOS `UIFontDescriptorSystemDesignRounded` */
    rounded: 'ui-rounded',
    /** iOS `UIFontDescriptorSystemDesignMonospaced` */
    mono: 'ui-monospace',
  },
  default: {
    sans: 'normal',
    serif: 'serif',
    rounded: 'normal',
    mono: 'monospace',
  },
  web: {
    sans: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
    serif: "Georgia, 'Times New Roman', serif",
    rounded: "'SF Pro Rounded', 'Hiragino Maru Gothic ProN', Meiryo, 'MS PGothic', sans-serif",
    mono: "SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace",
  },
});

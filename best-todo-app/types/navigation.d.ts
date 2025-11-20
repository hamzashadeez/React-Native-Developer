// Type augmentation so your custom color keys are available on `useTheme().colors`
import 'react-native';

declare module '@react-navigation/native' {
  // Extend the Theme interface's colors to include your custom keys.
  export interface Theme {
    colors: {
      primary: string;
      hamze?: string;
      tint?: string;
      icon?: string;
      tabIconDefault?: string;
      tabIconSelected?: string;
      // keep the default keys as well
      background: string;
      card: string;
      text: string;
      border: string;
      notification: string;
    };
  }
}

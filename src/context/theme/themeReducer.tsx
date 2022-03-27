import {Theme} from '@react-navigation/native';

type ThemeAction = {type: 'set_light_theme'} | {type: 'set_dark_theme'};

// como luce el state
export interface ThemeState extends Theme {
  currentTheme: 'light' | 'dark';
  dividerColor: string;
}
export const lightTheme: ThemeState = {
  currentTheme: 'light',
  dark: false,
  dividerColor: 'rgba(0,0,0,.7)',
  colors: {
    primary: 'cornflowerblue',
    background: 'white',
    card: 'white',
    text: 'black',
    border: 'orange',
    notification: 'teal',
  },
};
export const darkTheme: ThemeState = {
  currentTheme: 'light',
  dark: true,
  dividerColor: '#D0D3D4',
  colors: {
    primary: '#75cedb',
    background: 'black',
    card: 'grey',
    text: 'white',
    border: 'white',
    notification: 'teal',
  },
};

export const themeReducer = (
  state: ThemeState,
  action: ThemeAction,
): ThemeState => {
  switch (action.type) {
    case 'set_light_theme':
      return {
        ...lightTheme,
      };
    case 'set_dark_theme':
      return {
        ...darkTheme,
      };
    default:
      return state;
  }
};

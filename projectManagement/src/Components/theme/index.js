import PropTypes from 'prop-types';
import React, { useMemo, useState } from 'react';
// @mui
import { CssBaseline, IconButton } from '@mui/material';
import { ThemeProvider as MUIThemeProvider, createTheme, StyledEngineProvider } from '@mui/material/styles';
//
import { ERROR, GREY, INFO, PRIMARY, SECONDARY, SUCCESS, WARNING, DARK, ROOT } from './palette';
import shadows from './shadows';
import typography from './typography';
import GlobalStyles from './globalStyles';
import componentsOverride from './overrides';
import breakpoints from './breakPoints';
import { alpha } from '@mui/material/styles';
import { useTheme } from '@mui/styles';
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";

// ----------------------------------------------------------------------

ThemeProvider.propTypes = {
  children: PropTypes.node,
};

export const ColorModeContext = React.createContext({ toggleColorMode: () => { } });

export const DarkToggle = () => {
  const theme = useTheme();
  const colorMode = React.useContext(ColorModeContext);

  return (
    <IconButton
      onClick={colorMode.toggleColorMode}
      color="inherit"
    >
      {theme.palette.mode === "dark" ? (
        <Brightness7Icon color="action" />
      ) : (
        <Brightness4Icon color="action" />
      )}
    </IconButton>
  );
}

export default function ThemeProvider({ children }) {
  const [mode, setMode] = useState(sessionStorage.getItem("theme") || "light")

  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
        sessionStorage.setItem(
          "theme",
          sessionStorage.getItem("theme") === "light" ? "dark" : "light"
        );
      },
    }),
    []
  );

  const palette = {
    mode,
    common: { black: '#000', white: '#fff' },
    primary: PRIMARY,
    secondary: SECONDARY,
    info: INFO,
    success: SUCCESS,
    warning: WARNING,
    error: ERROR,
    grey: GREY,
    dark: DARK,
    root: ROOT,
    divider: alpha(GREY[500], 0.24),
    text: {
      primary: mode === "light" ? GREY[800] : '#00ab55',
      secondary: GREY[600],
      disabled: GREY[500],
    },
    background: {
      paper: mode === "light" ? '#fff' : DARK?.main,
      dialog: mode === "light" ? '#fff' : DARK?.main,
      default: mode === "light" ? GREY[100] : GREY[800],
      neutral: GREY[200],
    },
    action: {
      active: GREY[600],
      hover: alpha(GREY[500], 0.08),
      selected: alpha(GREY[500], 0.16),
      disabled: alpha(GREY[500], 0.8),
      disabledBackground: alpha(GREY[500], 0.24),
      focus: alpha(GREY[500], 0.24),
      hoverOpacity: 0.08,
      disabledOpacity: 0.48,
    },
  };

  function customShadows() {
    const transparent = alpha(palette.grey[500], 0.16);
    return {
      z1: `0 1px 2px 0 ${transparent}`,
      z4: `0 4px 8px 0 ${transparent}`,
      z8: `0 8px 16px 0 ${transparent}`,
      z12: `0 12px 24px -4px ${transparent}`,
      z16: `0 16px 32px -4px ${transparent}`,
      z20: `0 20px 40px -4px ${transparent}`,
      z24: `0 24px 48px 0 ${transparent}`,
      //
      primary: `0 8px 16px 0 ${alpha(palette.primary.main, 0.24)}`,
      info: `0 8px 16px 0 ${alpha(palette.info.main, 0.24)}`,
      secondary: `0 8px 16px 0 ${alpha(palette.secondary.main, 0.24)}`,
      success: `0 8px 16px 0 ${alpha(palette.success.main, 0.24)}`,
      warning: `0 8px 16px 0 ${alpha(palette.warning.main, 0.24)}`,
      error: `0 8px 16px 0 ${alpha(palette.error.main, 0.24)}`,
      //
      card: `0 0 2px 0 ${alpha(palette.grey[500], 0.2)}, 0 12px 24px -4px ${alpha(palette.grey[500], 0.12)}`,
      dialog: `-40px 40px 80px -8px ${alpha(palette.grey[500], 0.24)}`,
      dropdown: `0 0 2px 0 ${alpha(palette.grey[500], 0.24)}, -20px 20px 40px -4px ${alpha(palette.grey[500], 0.24)}`,
    };
  }

  const themeOptions = useMemo(
    () => ({
      palette,
      shape: { borderRadius: 6 },
      typography,
      breakpoints: breakpoints,
      shadows: shadows(),
      customShadows: customShadows(),
      mode: mode
    }),
    [mode]
  );

  const theme = createTheme(themeOptions);
  theme.components = componentsOverride(theme);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <StyledEngineProvider injectFirst>
        <MUIThemeProvider theme={theme}>
          <CssBaseline />
          <GlobalStyles />
          {children}
        </MUIThemeProvider>
      </StyledEngineProvider>
    </ColorModeContext.Provider>
  );
}

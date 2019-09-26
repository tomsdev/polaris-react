import React from 'react';
import isEqual from 'lodash/isEqual';
import {ThemeContext} from '../../utilities/theme';
import {Theme, CSSProperties} from '../../utilities/theme/types';
import {setColors} from '../../utilities/theme/legacy-utils';
import {Colors} from '../../utilities/theme/utils';

import styles from './ThemeProvider.scss';

interface State {
  theme: Theme;
  colors: CSSProperties | undefined;
  legacyColors: string[][] | undefined;
}

interface ThemeProviderProps {
  /** Custom logos and colors provided to select components */
  theme: Theme;
  /** The content to display */
  children?: React.ReactNode;
}

const legacyDefaultTheme = {
  '--top-bar-background': '#00848e',
  '--top-bar-color': '#f9fafb',
  '--top-bar-background-lighter': '#1d9ba4',
};

export class ThemeProvider extends React.Component<ThemeProviderProps, State> {
  state: State = {
    theme: setThemeContext(this.props.theme),
    colors: Colors(this.props.theme),
    legacyColors: setColors(this.props.theme),
  };

  componentDidUpdate({theme: prevTheme}: ThemeProviderProps) {
    const {theme} = this.props;
    if (isEqual(prevTheme, theme)) {
      return;
    }

    // eslint-disable-next-line react/no-did-update-set-state
    this.setState({
      theme: setThemeContext(theme),
      colors: Colors(theme),
      legacyColors: setColors(theme),
    });
  }

  render() {
    const {
      theme: {logo = null, ...rest},
    } = this.state;
    const {
      props: {children},
      state: {colors},
    } = this;
    const legacyStyles = this.createLegacyStyles() || legacyDefaultTheme;

    const theme = {
      ...rest,
      logo,
    };

    return (
      <ThemeContext.Provider value={theme}>
        <div style={legacyStyles}>
          <div style={colors} className={styles.ThemeProvider}>
            {children}
          </div>
        </div>
      </ThemeContext.Provider>
    );
  }

  createLegacyStyles() {
    const {legacyColors} = this.state;
    return legacyColors
      ? legacyColors.reduce(
          (state, [key, value]) => ({...state, [key]: value}),
          {},
        )
      : null;
  }
}

function setThemeContext(ctx: Theme): Theme {
  const {colors, ...theme} = ctx;
  return {...theme};
}

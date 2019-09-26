import tokens from '@shopify/polaris-tokens';
import {HSLColor} from '../color-types';
import {colorToHsla, hslToString, hslToRgb} from '../color-transformers';
import {isLight} from '../color-validation';
import {constructColorName} from '../color-names';
import {createLightColor} from '../color-manipulation';
import {compose} from '../compose';

import {Theme, ColorsToParse, ThemeVariant, ThemeColors, TopBar} from './types';
import {needsVariantList} from './legacy-config';

export function setColors(theme: Theme | undefined): string[][] | undefined {
  let colorPairs;
  if (theme && theme.colors) {
    Object.entries(theme.colors).forEach(([colorKey, pairs]) => {
      const colorKeys = Object.keys(pairs as TopBar);
      if (colorKey === 'topBar' && colorKeys.length > 1) {
        colorPairs = colorKeys.map((key: string) => {
          const {topBar} = theme.colors as ThemeColors;
          const defaultTopBar: TopBar = {background: ''};
          const colors = topBar ? topBar : defaultTopBar;
          return [constructColorName(colorKey, key), colors[key]];
        });
      } else {
        colorPairs = parseColors([colorKey, pairs as TopBar]);
      }
    });
  }

  return colorPairs;
}

export function needsVariant(name: string) {
  return needsVariantList.indexOf(name) !== -1;
}

const lightenToString: (
  color: HSLColor | string,
  lightness: number,
  saturation: number,
) => string = compose(
  hslToString,
  createLightColor,
);

export function setTextColor(
  name: string,
  variant: ThemeVariant = 'dark',
): string[] {
  if (variant === 'light') {
    return [name, tokens.colorInk];
  }

  return [name, tokens.colorWhite];
}

export function setTheme(
  color: string | HSLColor,
  baseName: string,
  key: string,
  variant: 'light' | 'dark',
): string[][] {
  const colorPairs = [];
  switch (variant) {
    case 'light':
      colorPairs.push(
        setTextColor(constructColorName(baseName, null, 'color'), 'light'),
      );

      colorPairs.push([
        constructColorName(baseName, key, 'lighter'),
        lightenToString(color, 7, -10),
      ]);

      break;
    case 'dark':
      colorPairs.push(
        setTextColor(constructColorName(baseName, null, 'color'), 'dark'),
      );

      colorPairs.push([
        constructColorName(baseName, key, 'lighter'),
        lightenToString(color, 15, 15),
      ]);

      break;
    default:
  }

  return colorPairs;
}

function parseColors([baseName, colors]: [string, ColorsToParse]): string[][] {
  const keys = Object.keys(colors);
  const colorPairs = [];
  for (let i = 0; i < keys.length; i++) {
    colorPairs.push([constructColorName(baseName, keys[i]), colors[keys[i]]]);

    if (needsVariant(baseName)) {
      const hslColor = colorToHsla(colors[keys[i]]);

      if (typeof hslColor === 'string') {
        return colorPairs;
      }

      const rgbColor = hslToRgb(hslColor);

      if (isLight(rgbColor)) {
        colorPairs.push(...setTheme(hslColor, baseName, keys[i], 'light'));
      } else {
        colorPairs.push(...setTheme(hslColor, baseName, keys[i], 'dark'));
      }
    }
  }

  return colorPairs;
}

import tokens from '@shopify/polaris-tokens';
import {needsVariant, setColors, setTextColor, setTheme} from '../legacy-utils';
import {needsVariantList} from '../legacy-config';
import {Colors} from '../utils';

describe('setTextColor', () => {
  it('sets a css variable to white if the variant is dark', () => {
    const textColor = setTextColor('topBar', 'dark');
    expect(textColor).toStrictEqual(['topBar', tokens.colorWhite]);
  });

  it('sets a css variable to ink if the variant is light', () => {
    const textColor = setTextColor('topBar', 'light');
    expect(textColor).toStrictEqual(['topBar', tokens.colorInk]);
  });
});

describe('setTheme', () => {
  it('returns a base theme', () => {
    const theme = setTheme(
      {hue: 184, saturation: 100, lightness: 28},
      'topBar',
      'background',
      'dark',
    );

    expect(theme).toStrictEqual([
      ['--top-bar-color', 'rgb(255, 255, 255)'],
      ['--top-bar-background-lighter', 'hsl(184, 85%, 43%, 1)'],
    ]);
  });
});

describe('needsVariant', () => {
  it('will return false if the parameter is not on the list', () => {
    const hasVariant = needsVariant('frame');
    expect(hasVariant).toBe(needsVariantList.includes('frame'));
  });

  it('will return true if the paramater is on the list', () => {
    const hasVariant = needsVariant('topBar');
    expect(hasVariant).toBe(needsVariantList.includes('topBar'));
  });
});

describe('setColors', () => {
  it('iterates over colors when a theme is passed', () => {
    const theme = {colors: {topBar: {background: '#eeeeee'}}};
    const spy = jest.spyOn(Object, 'entries');
    setColors(theme);
    expect(spy).toHaveBeenCalledWith(theme.colors);
  });
});

describe('Colors', () => {
  it('returns an object of css custom properties', () => {
    const theme = {colors: {branded: '#eeeeee'}};
    const colorScheme = Colors(theme);
    expect(colorScheme).toStrictEqual({
      '--action-disabled-on-dark': 'hsl(210, 9%, 66%, 1)',
      '--action-disabled-on-light': 'hsl(210, 9%, 46%, 1)',
      '--action-disabled-on-opposite': 'hsl(210, 9%, 66%, 1)',
      '--action-disabled-on-surface': 'hsl(210, 9%, 46%, 1)',
      '--action-hovered-on-dark': 'hsl(210, 9%, 86%, 1)',
      '--action-hovered-on-light': 'hsl(210, 9%, 26%, 1)',
      '--action-hovered-on-opposite': 'hsl(210, 9%, 86%, 1)',
      '--action-hovered-on-surface': 'hsl(210, 9%, 26%, 1)',
      '--action-on-dark': 'hsl(210, 9%, 76%, 1)',
      '--action-on-light': 'hsl(210, 9%, 36%, 1)',
      '--action-on-opposite': 'hsl(210, 9%, 76%, 1)',
      '--action-on-surface': 'hsl(210, 9%, 36%, 1)',
      '--action-pressed-on-dark': 'hsl(210, 9%, 96%, 1)',
      '--action-pressed-on-light': 'hsl(210, 9%, 16%, 1)',
      '--action-pressed-on-opposite': 'hsl(210, 9%, 96%, 1)',
      '--action-pressed-on-surface': 'hsl(210, 9%, 16%, 1)',
      '--branded': 'hsl(0, 0%, 93%, 1)',
      '--branded-action': 'hsl(0, 0%, 25%, 1)',
      '--branded-action-disabled': 'hsl(0, 0%, 32%, 1)',
      '--branded-action-hovered': 'hsl(0, 0%, 22%, 1)',
      '--branded-action-pressed': 'hsl(0, 0%, 15%, 1)',
      '--branded-selected': 'hsl(0, 0%, 95%, 1)',
      '--branded-selected-hovered': 'hsl(0, 0%, 81%, 1)',
      '--branded-selected-pressed': 'hsl(0, 0%, 74%, 1)',
      '--critical': 'hsl(0, 77%, 52%, 1)',
      '--critical-divider': 'hsl(0, 77%, 52%, 1)',
      '--critical-icon': 'hsl(0, 77%, 52%, 1)',
      '--critical-surface': 'hsl(0, 77%, 88%, 1)',
      '--critical-surface-muted': 'hsl(0, 77%, 98%, 1)',
      '--critical-text': 'hsl(0, 77%, 30%, 1)',
      '--divider-disabled-on-dark': 'hsl(210, 9%, 70%, 1)',
      '--divider-disabled-on-light': 'hsl(210, 9%, 95%, 1)',
      '--divider-disabled-on-opposite': 'hsl(210, 9%, 70%, 1)',
      '--divider-disabled-on-surface': 'hsl(210, 9%, 95%, 1)',
      '--divider-muted-on-dark': 'hsl(210, 9%, 75%, 1)',
      '--divider-muted-on-light': 'hsl(210, 9%, 85%, 1)',
      '--divider-muted-on-opposite': 'hsl(210, 9%, 75%, 1)',
      '--divider-muted-on-surface': 'hsl(210, 9%, 85%, 1)',
      '--divider-on-dark': 'hsl(210, 9%, 80%, 1)',
      '--divider-on-light': 'hsl(210, 9%, 75%, 1)',
      '--divider-on-opposite': 'hsl(210, 9%, 80%, 1)',
      '--divider-on-surface': 'hsl(210, 9%, 75%, 1)',
      '--highlight': 'hsl(173, 56.00000000000001%, 57.99999999999999%, 1)',
      '--highlight-divider': 'hsl(173, 56.00000000000001%, 58%, 1)',
      '--highlight-icon': 'hsl(173, 56.00000000000001%, 58%, 1)',
      '--highlight-surface': 'hsl(173, 56.00000000000001%, 88%, 1)',
      '--highlight-surface-muted': 'hsl(173, 56.00000000000001%, 98%, 1)',
      '--highlight-text': 'hsl(173, 56.00000000000001%, 98%, 1)',
      '--icon-disabled-on-dark': 'hsl(210, 9%, 75%, 1)',
      '--icon-disabled-on-light': 'hsl(210, 9%, 68%, 1)',
      '--icon-disabled-on-opposite': 'hsl(210, 9%, 75%, 1)',
      '--icon-disabled-on-surface': 'hsl(210, 9%, 68%, 1)',
      '--icon-muted-on-branded': 'hsl(0, 0%, 88%, 1)',
      '--icon-muted-on-dark': 'hsl(210, 9%, 88%, 1)',
      '--icon-muted-on-light': 'hsl(210, 9%, 43%, 1)',
      '--icon-muted-on-opposite': 'hsl(210, 9%, 88%, 1)',
      '--icon-muted-on-surface': 'hsl(210, 9%, 43%, 1)',
      '--icon-on-branded': 'hsl(0, 0%, 98%, 1)',
      '--icon-on-dark': 'hsl(210, 9%, 98%, 1)',
      '--icon-on-light': 'hsl(210, 9%, 18%, 1)',
      '--icon-on-opposite': 'hsl(210, 9%, 98%, 1)',
      '--icon-on-surface': 'hsl(210, 9%, 18%, 1)',
      '--interactive': 'hsl(210, 9%, 13%, 1)',
      '--interactive-action': 'hsl(210, 93%, 44%, 1)',
      '--interactive-action-disabled': 'hsl(210, 93%, 58%, 1)',
      '--interactive-action-hovered': 'hsl(210, 93%, 37%, 1)',
      '--interactive-action-muted': 'hsl(210, 93%, 51%, 1)',
      '--interactive-action-pressed': 'hsl(210, 93%, 31%, 1)',
      '--interactive-focus': 'hsl(210, 93%, 58%, 1)',
      '--interactive-neutral-elevation-0': 'hsl(210, 9%, 100%, 1)',
      '--interactive-neutral-elevation-1': 'hsl(210, 9%, 94%, 1)',
      '--interactive-neutral-elevation-2': 'hsl(210, 9%, 92%, 1)',
      '--interactive-neutral-elevation-3': 'hsl(210, 9%, 86%, 1)',
      '--interactive-neutral-elevation-4': 'hsl(210, 9%, 76%, 1)',
      '--interactive-neutral-elevation-5': 'hsl(210, 9%, 66%, 1)',
      '--interactive-selected': 'hsl(210, 93%, 96%, 1)',
      '--interactive-selected-hovered': 'hsl(210, 93%, 89%, 1)',
      '--interactive-selected-pressed': 'hsl(210, 93%, 82%, 1)',
      '--on-surface': 'hsl(210, 9%, 13%, 1)',
      '--success': 'hsl(165, 100%, 25%, 1)',
      '--success-divider': 'hsl(165, 100%, 25%, 1)',
      '--success-icon': 'hsl(165, 100%, 25%, 1)',
      '--success-surface': 'hsl(165, 100%, 88%, 1)',
      '--success-surface-muted': 'hsl(165, 100%, 98%, 1)',
      '--success-text': 'hsl(165, 100%, 15%, 1)',
      '--surface': 'hsl(0, 0%, 98%, 1)',
      '--surface-background': 'hsl(0, 0%, 98%, 1)',
      '--surface-foreground': 'hsl(0, 0%, 100%, 1)',
      '--surface-foreground-subdued': 'hsl(0, 0%, 90%, 1)',
      '--surface-opposite': 'hsl(0, 0%, 0%, 1)',
      '--text-disabled-on-dark': 'hsl(210, 9%, 80%, 1)',
      '--text-disabled-on-light': 'hsl(210, 9%, 63%, 1)',
      '--text-disabled-on-opposite': 'hsl(210, 9%, 80%, 1)',
      '--text-disabled-on-surface': 'hsl(210, 9%, 63%, 1)',
      '--text-muted-on-branded': 'hsl(0, 0%, 90%, 1)',
      '--text-muted-on-dark': 'hsl(210, 9%, 90%, 1)',
      '--text-muted-on-light': 'hsl(210, 9%, 38%, 1)',
      '--text-muted-on-opposite': 'hsl(210, 9%, 90%, 1)',
      '--text-muted-on-surface': 'hsl(210, 9%, 38%, 1)',
      '--text-on-branded': 'hsl(0, 0%, 100%, 1)',
      '--text-on-dark': 'hsl(210, 9%, 100%, 1)',
      '--text-on-light': 'hsl(210, 9%, 13%, 1)',
      '--text-on-opposite': 'hsl(210, 9%, 100%, 1)',
      '--text-on-surface': 'hsl(210, 9%, 13%, 1)',
      '--warning': 'hsl(39, 100%, 66%, 1)',
      '--warning-divider': 'hsl(39, 100%, 66%, 1)',
      '--warning-icon': 'hsl(39, 100%, 66%, 1)',
      '--warning-surface': 'hsl(39, 100%, 88%, 1)',
      '--warning-surface-muted': 'hsl(39, 100%, 98%, 1)',
      '--warning-text': 'hsl(39, 100%, 30%, 1)',
    });
  });

  it('returns a light theme when given a light surface color', () => {
    const theme = {colors: {surface: '#ffffff'}};
    const colorScheme = Colors(theme);
    expect(colorScheme).toStrictEqual({
      '--action-disabled-on-dark': 'hsl(210, 9%, 66%, 1)',
      '--action-disabled-on-light': 'hsl(210, 9%, 46%, 1)',
      '--action-disabled-on-opposite': 'hsl(210, 9%, 66%, 1)',
      '--action-disabled-on-surface': 'hsl(210, 9%, 46%, 1)',
      '--action-hovered-on-dark': 'hsl(210, 9%, 86%, 1)',
      '--action-hovered-on-light': 'hsl(210, 9%, 26%, 1)',
      '--action-hovered-on-opposite': 'hsl(210, 9%, 86%, 1)',
      '--action-hovered-on-surface': 'hsl(210, 9%, 26%, 1)',
      '--action-on-dark': 'hsl(210, 9%, 76%, 1)',
      '--action-on-light': 'hsl(210, 9%, 36%, 1)',
      '--action-on-opposite': 'hsl(210, 9%, 76%, 1)',
      '--action-on-surface': 'hsl(210, 9%, 36%, 1)',
      '--action-pressed-on-dark': 'hsl(210, 9%, 96%, 1)',
      '--action-pressed-on-light': 'hsl(210, 9%, 16%, 1)',
      '--action-pressed-on-opposite': 'hsl(210, 9%, 96%, 1)',
      '--action-pressed-on-surface': 'hsl(210, 9%, 16%, 1)',
      '--branded': 'hsl(165, 100%, 25%, 1)',
      '--branded-action': 'hsl(165, 100%, 25%, 1)',
      '--branded-action-disabled': 'hsl(165, 100%, 32%, 1)',
      '--branded-action-hovered': 'hsl(165, 100%, 22%, 1)',
      '--branded-action-pressed': 'hsl(165, 100%, 15%, 1)',
      '--branded-selected': 'hsl(165, 100%, 95%, 1)',
      '--branded-selected-hovered': 'hsl(165, 100%, 81%, 1)',
      '--branded-selected-pressed': 'hsl(165, 100%, 74%, 1)',
      '--critical': 'hsl(0, 77%, 52%, 1)',
      '--critical-divider': 'hsl(0, 77%, 52%, 1)',
      '--critical-icon': 'hsl(0, 77%, 52%, 1)',
      '--critical-surface': 'hsl(0, 77%, 88%, 1)',
      '--critical-surface-muted': 'hsl(0, 77%, 98%, 1)',
      '--critical-text': 'hsl(0, 77%, 30%, 1)',
      '--divider-disabled-on-dark': 'hsl(210, 9%, 70%, 1)',
      '--divider-disabled-on-light': 'hsl(210, 9%, 95%, 1)',
      '--divider-disabled-on-opposite': 'hsl(210, 9%, 70%, 1)',
      '--divider-disabled-on-surface': 'hsl(210, 9%, 95%, 1)',
      '--divider-muted-on-dark': 'hsl(210, 9%, 75%, 1)',
      '--divider-muted-on-light': 'hsl(210, 9%, 85%, 1)',
      '--divider-muted-on-opposite': 'hsl(210, 9%, 75%, 1)',
      '--divider-muted-on-surface': 'hsl(210, 9%, 85%, 1)',
      '--divider-on-dark': 'hsl(210, 9%, 80%, 1)',
      '--divider-on-light': 'hsl(210, 9%, 75%, 1)',
      '--divider-on-opposite': 'hsl(210, 9%, 80%, 1)',
      '--divider-on-surface': 'hsl(210, 9%, 75%, 1)',
      '--highlight': 'hsl(173, 56.00000000000001%, 57.99999999999999%, 1)',
      '--highlight-divider': 'hsl(173, 56.00000000000001%, 58%, 1)',
      '--highlight-icon': 'hsl(173, 56.00000000000001%, 58%, 1)',
      '--highlight-surface': 'hsl(173, 56.00000000000001%, 88%, 1)',
      '--highlight-surface-muted': 'hsl(173, 56.00000000000001%, 98%, 1)',
      '--highlight-text': 'hsl(173, 56.00000000000001%, 98%, 1)',
      '--icon-disabled-on-dark': 'hsl(210, 9%, 75%, 1)',
      '--icon-disabled-on-light': 'hsl(210, 9%, 68%, 1)',
      '--icon-disabled-on-opposite': 'hsl(210, 9%, 75%, 1)',
      '--icon-disabled-on-surface': 'hsl(210, 9%, 68%, 1)',
      '--icon-muted-on-branded': 'hsl(165, 100%, 88%, 1)',
      '--icon-muted-on-dark': 'hsl(210, 9%, 88%, 1)',
      '--icon-muted-on-light': 'hsl(210, 9%, 43%, 1)',
      '--icon-muted-on-opposite': 'hsl(210, 9%, 88%, 1)',
      '--icon-muted-on-surface': 'hsl(210, 9%, 43%, 1)',
      '--icon-on-branded': 'hsl(165, 100%, 98%, 1)',
      '--icon-on-dark': 'hsl(210, 9%, 98%, 1)',
      '--icon-on-light': 'hsl(210, 9%, 18%, 1)',
      '--icon-on-opposite': 'hsl(210, 9%, 98%, 1)',
      '--icon-on-surface': 'hsl(210, 9%, 18%, 1)',
      '--interactive': 'hsl(210, 9%, 13%, 1)',
      '--interactive-action': 'hsl(210, 93%, 44%, 1)',
      '--interactive-action-disabled': 'hsl(210, 93%, 58%, 1)',
      '--interactive-action-hovered': 'hsl(210, 93%, 37%, 1)',
      '--interactive-action-muted': 'hsl(210, 93%, 51%, 1)',
      '--interactive-action-pressed': 'hsl(210, 93%, 31%, 1)',
      '--interactive-focus': 'hsl(210, 93%, 58%, 1)',
      '--interactive-neutral-elevation-0': 'hsl(210, 9%, 100%, 1)',
      '--interactive-neutral-elevation-1': 'hsl(210, 9%, 94%, 1)',
      '--interactive-neutral-elevation-2': 'hsl(210, 9%, 92%, 1)',
      '--interactive-neutral-elevation-3': 'hsl(210, 9%, 86%, 1)',
      '--interactive-neutral-elevation-4': 'hsl(210, 9%, 76%, 1)',
      '--interactive-neutral-elevation-5': 'hsl(210, 9%, 66%, 1)',
      '--interactive-selected': 'hsl(210, 93%, 96%, 1)',
      '--interactive-selected-hovered': 'hsl(210, 93%, 89%, 1)',
      '--interactive-selected-pressed': 'hsl(210, 93%, 82%, 1)',
      '--on-surface': 'hsl(210, 9%, 13%, 1)',
      '--success': 'hsl(165, 100%, 25%, 1)',
      '--success-divider': 'hsl(165, 100%, 25%, 1)',
      '--success-icon': 'hsl(165, 100%, 25%, 1)',
      '--success-surface': 'hsl(165, 100%, 88%, 1)',
      '--success-surface-muted': 'hsl(165, 100%, 98%, 1)',
      '--success-text': 'hsl(165, 100%, 15%, 1)',
      '--surface': 'hsl(0, 0%, 100%, 1)',
      '--surface-background': 'hsl(0, 0%, 98%, 1)',
      '--surface-foreground': 'hsl(0, 0%, 100%, 1)',
      '--surface-foreground-subdued': 'hsl(0, 0%, 90%, 1)',
      '--surface-opposite': 'hsl(0, 0%, 0%, 1)',
      '--text-disabled-on-dark': 'hsl(210, 9%, 80%, 1)',
      '--text-disabled-on-light': 'hsl(210, 9%, 63%, 1)',
      '--text-disabled-on-opposite': 'hsl(210, 9%, 80%, 1)',
      '--text-disabled-on-surface': 'hsl(210, 9%, 63%, 1)',
      '--text-muted-on-branded': 'hsl(165, 100%, 90%, 1)',
      '--text-muted-on-dark': 'hsl(210, 9%, 90%, 1)',
      '--text-muted-on-light': 'hsl(210, 9%, 38%, 1)',
      '--text-muted-on-opposite': 'hsl(210, 9%, 90%, 1)',
      '--text-muted-on-surface': 'hsl(210, 9%, 38%, 1)',
      '--text-on-branded': 'hsl(165, 100%, 100%, 1)',
      '--text-on-dark': 'hsl(210, 9%, 100%, 1)',
      '--text-on-light': 'hsl(210, 9%, 13%, 1)',
      '--text-on-opposite': 'hsl(210, 9%, 100%, 1)',
      '--text-on-surface': 'hsl(210, 9%, 13%, 1)',
      '--warning': 'hsl(39, 100%, 66%, 1)',
      '--warning-divider': 'hsl(39, 100%, 66%, 1)',
      '--warning-icon': 'hsl(39, 100%, 66%, 1)',
      '--warning-surface': 'hsl(39, 100%, 88%, 1)',
      '--warning-surface-muted': 'hsl(39, 100%, 98%, 1)',
      '--warning-text': 'hsl(39, 100%, 30%, 1)',
    });
  });

  it('returns a dark theme when given a dark surface color', () => {
    const theme = {colors: {surface: '#000000'}};
    const colorScheme = Colors(theme);
    expect(colorScheme).toStrictEqual({
      '--action-disabled-on-dark': 'hsl(210, 9%, 66%, 1)',
      '--action-disabled-on-light': 'hsl(210, 9%, 46%, 1)',
      '--action-disabled-on-opposite': 'hsl(210, 9%, 46%, 1)',
      '--action-disabled-on-surface': 'hsl(210, 9%, 66%, 1)',
      '--action-hovered-on-dark': 'hsl(210, 9%, 86%, 1)',
      '--action-hovered-on-light': 'hsl(210, 9%, 26%, 1)',
      '--action-hovered-on-opposite': 'hsl(210, 9%, 26%, 1)',
      '--action-hovered-on-surface': 'hsl(210, 9%, 86%, 1)',
      '--action-on-dark': 'hsl(210, 9%, 76%, 1)',
      '--action-on-light': 'hsl(210, 9%, 36%, 1)',
      '--action-on-opposite': 'hsl(210, 9%, 36%, 1)',
      '--action-on-surface': 'hsl(210, 9%, 76%, 1)',
      '--action-pressed-on-dark': 'hsl(210, 9%, 96%, 1)',
      '--action-pressed-on-light': 'hsl(210, 9%, 16%, 1)',
      '--action-pressed-on-opposite': 'hsl(210, 9%, 16%, 1)',
      '--action-pressed-on-surface': 'hsl(210, 9%, 96%, 1)',
      '--branded': 'hsl(165, 100%, 25%, 1)',
      '--branded-action': 'hsl(165, 100%, 25%, 1)',
      '--branded-action-disabled': 'hsl(165, 100%, 32%, 1)',
      '--branded-action-hovered': 'hsl(165, 100%, 22%, 1)',
      '--branded-action-pressed': 'hsl(165, 100%, 15%, 1)',
      '--branded-selected': 'hsl(165, 100%, 5%, 1)',
      '--branded-selected-hovered': 'hsl(165, 100%, 19%, 1)',
      '--branded-selected-pressed': 'hsl(165, 100%, 26%, 1)',
      '--critical': 'hsl(0, 77%, 52%, 1)',
      '--critical-divider': 'hsl(0, 77%, 48%, 1)',
      '--critical-icon': 'hsl(0, 77%, 48%, 1)',
      '--critical-surface': 'hsl(0, 77%, 12%, 1)',
      '--critical-surface-muted': 'hsl(0, 77%, 2%, 1)',
      '--critical-text': 'hsl(0, 77%, 70%, 1)',
      '--divider-disabled-on-dark': 'hsl(210, 9%, 70%, 1)',
      '--divider-disabled-on-light': 'hsl(210, 9%, 95%, 1)',
      '--divider-disabled-on-opposite': 'hsl(210, 9%, 95%, 1)',
      '--divider-disabled-on-surface': 'hsl(210, 9%, 70%, 1)',
      '--divider-muted-on-dark': 'hsl(210, 9%, 75%, 1)',
      '--divider-muted-on-light': 'hsl(210, 9%, 85%, 1)',
      '--divider-muted-on-opposite': 'hsl(210, 9%, 85%, 1)',
      '--divider-muted-on-surface': 'hsl(210, 9%, 75%, 1)',
      '--divider-on-dark': 'hsl(210, 9%, 80%, 1)',
      '--divider-on-light': 'hsl(210, 9%, 75%, 1)',
      '--divider-on-opposite': 'hsl(210, 9%, 75%, 1)',
      '--divider-on-surface': 'hsl(210, 9%, 80%, 1)',
      '--highlight': 'hsl(173, 56.00000000000001%, 57.99999999999999%, 1)',
      '--highlight-divider': 'hsl(173, 56.00000000000001%, 42%, 1)',
      '--highlight-icon': 'hsl(173, 56.00000000000001%, 42%, 1)',
      '--highlight-surface': 'hsl(173, 56.00000000000001%, 12%, 1)',
      '--highlight-surface-muted': 'hsl(173, 56.00000000000001%, 2%, 1)',
      '--highlight-text': 'hsl(173, 56.00000000000001%, 2%, 1)',
      '--icon-disabled-on-dark': 'hsl(210, 9%, 75%, 1)',
      '--icon-disabled-on-light': 'hsl(210, 9%, 68%, 1)',
      '--icon-disabled-on-opposite': 'hsl(210, 9%, 68%, 1)',
      '--icon-disabled-on-surface': 'hsl(210, 9%, 75%, 1)',
      '--icon-muted-on-branded': 'hsl(165, 100%, 88%, 1)',
      '--icon-muted-on-dark': 'hsl(210, 9%, 88%, 1)',
      '--icon-muted-on-light': 'hsl(210, 9%, 43%, 1)',
      '--icon-muted-on-opposite': 'hsl(210, 9%, 43%, 1)',
      '--icon-muted-on-surface': 'hsl(210, 9%, 88%, 1)',
      '--icon-on-branded': 'hsl(165, 100%, 98%, 1)',
      '--icon-on-dark': 'hsl(210, 9%, 98%, 1)',
      '--icon-on-light': 'hsl(210, 9%, 18%, 1)',
      '--icon-on-opposite': 'hsl(210, 9%, 18%, 1)',
      '--icon-on-surface': 'hsl(210, 9%, 98%, 1)',
      '--interactive': 'hsl(210, 9%, 13%, 1)',
      '--interactive-action': 'hsl(210, 93%, 56%, 1)',
      '--interactive-action-disabled': 'hsl(210, 93%, 42%, 1)',
      '--interactive-action-hovered': 'hsl(210, 93%, 63%, 1)',
      '--interactive-action-muted': 'hsl(210, 93%, 49%, 1)',
      '--interactive-action-pressed': 'hsl(210, 93%, 69%, 1)',
      '--interactive-focus': 'hsl(210, 93%, 42%, 1)',
      '--interactive-neutral-elevation-0': 'hsl(210, 9%, 7%, 1)',
      '--interactive-neutral-elevation-1': 'hsl(210, 9%, 13%, 1)',
      '--interactive-neutral-elevation-2': 'hsl(210, 9%, 22%, 1)',
      '--interactive-neutral-elevation-3': 'hsl(210, 9%, 29%, 1)',
      '--interactive-neutral-elevation-4': 'hsl(210, 9%, 39%, 1)',
      '--interactive-neutral-elevation-5': 'hsl(210, 9%, 49%, 1)',
      '--interactive-selected': 'hsl(210, 93%, 4%, 1)',
      '--interactive-selected-hovered': 'hsl(210, 93%, 11%, 1)',
      '--interactive-selected-pressed': 'hsl(210, 93%, 18%, 1)',
      '--on-surface': 'hsl(210, 9%, 13%, 1)',
      '--success': 'hsl(165, 100%, 25%, 1)',
      '--success-divider': 'hsl(165, 100%, 35%, 1)',
      '--success-icon': 'hsl(165, 100%, 35%, 1)',
      '--success-surface': 'hsl(165, 100%, 12%, 1)',
      '--success-surface-muted': 'hsl(165, 100%, 2%, 1)',
      '--success-text': 'hsl(165, 100%, 85%, 1)',
      '--surface': 'hsl(0, 0%, 0%, 1)',
      '--surface-background': 'hsl(0, 0%, 7%, 1)',
      '--surface-foreground': 'hsl(0, 0%, 13%, 1)',
      '--surface-foreground-subdued': 'hsl(0, 0%, 10%, 1)',
      '--surface-opposite': 'hsl(0, 0%, 100%, 1)',
      '--text-disabled-on-dark': 'hsl(210, 9%, 80%, 1)',
      '--text-disabled-on-light': 'hsl(210, 9%, 63%, 1)',
      '--text-disabled-on-opposite': 'hsl(210, 9%, 63%, 1)',
      '--text-disabled-on-surface': 'hsl(210, 9%, 80%, 1)',
      '--text-muted-on-branded': 'hsl(165, 100%, 90%, 1)',
      '--text-muted-on-dark': 'hsl(210, 9%, 90%, 1)',
      '--text-muted-on-light': 'hsl(210, 9%, 38%, 1)',
      '--text-muted-on-opposite': 'hsl(210, 9%, 38%, 1)',
      '--text-muted-on-surface': 'hsl(210, 9%, 90%, 1)',
      '--text-on-branded': 'hsl(165, 100%, 100%, 1)',
      '--text-on-dark': 'hsl(210, 9%, 100%, 1)',
      '--text-on-light': 'hsl(210, 9%, 13%, 1)',
      '--text-on-opposite': 'hsl(210, 9%, 13%, 1)',
      '--text-on-surface': 'hsl(210, 9%, 100%, 1)',
      '--warning': 'hsl(39, 100%, 66%, 1)',
      '--warning-divider': 'hsl(39, 100%, 34%, 1)',
      '--warning-icon': 'hsl(39, 100%, 34%, 1)',
      '--warning-surface': 'hsl(39, 100%, 12%, 1)',
      '--warning-surface-muted': 'hsl(39, 100%, 2%, 1)',
      '--warning-text': 'hsl(39, 100%, 70%, 1)',
    });
  });
});

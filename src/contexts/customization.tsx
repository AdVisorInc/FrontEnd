import type { Direction, PaletteMode } from '@mui/material';
import isEqual from 'lodash.isequal';
import PropTypes from 'prop-types';
import type { FC, ReactNode } from 'react';
import { createContext, useCallback, useMemo, useState } from 'react';
import type { ColorPreset } from 'src/theme';

export type Layout =
  | 'vertical-shells-dark'
  | 'vertical-shells-dark-alternate'
  | 'vertical-shells-brand'
  | 'vertical-shells-white'
  | 'vertical-shells-white-off'
  | 'vertical-shells-light'
  | 'vertical-shells-accent-header'
  | 'collapsed-shells-double'
  | 'collapsed-shells-double-accent'
  | 'collapsed-shells-double-dark'
  | 'collapsed-shells-single'
  | 'collapsed-shells-single-accent'
  | 'collapsed-shells-single-white'
  | 'collapsed-shells-single-white-off'
  | 'stacked-shells-top-nav'
  | 'stacked-shells-top-nav-accent'
  | 'stacked-shells-top-nav-tabs'
  | 'stacked-shells-top-nav-wide';

export interface Customization {
  colorPreset?: ColorPreset;
  direction?: Direction;
  layout?: Layout;
  paletteMode?: PaletteMode;
  stretch?: boolean;
}

export interface State extends Customization {
  isInitialized: boolean;
}

export const defaultCustomization: Customization = {
  colorPreset: 'monacoBlue',
  direction: 'ltr',
  layout: 'vertical-shells-dark',
  paletteMode: 'light',
  stretch: false,
};

export interface State extends Customization {
  isInitialized: boolean;
}

export const initialState: State = {
  isInitialized: false,
};

export interface CustomizationContextType extends State {
  handleReset: () => void;
  handleUpdate: (settings: Customization) => void;
  isCustom: boolean;
}

export const CustomizationContext = createContext<CustomizationContextType>({
  ...defaultCustomization,
  ...initialState,
  handleReset: () => {},
  handleUpdate: () => {},
  isCustom: false,
});

interface CustomizationProviderProps {
  children?: ReactNode;
  onReset?: () => void;
  onUpdate?: (settings: Customization) => void;
  settings?: Customization;
}

export const CustomizationProvider: FC<CustomizationProviderProps> = (props) => {
  const {
    children,
    onReset = () => {},
    onUpdate = () => {},
    settings: initialCustomization,
  } = props;
  const [state, setState] = useState<State>(initialState);

  const settings = useMemo(() => {
    return {
      ...defaultCustomization,
      ...initialCustomization,
    } as Customization;
  }, [initialCustomization]);

  const handleUpdate = useCallback(
    (newCustomization: Customization): void => {
      onUpdate({
        colorPreset: settings.colorPreset,
        direction: settings.direction,
        layout: settings.layout,
        paletteMode: settings.paletteMode,
        stretch: settings.stretch,
        ...newCustomization,
      });
    },
    [onUpdate, settings]
  );

  const isCustom = useMemo(() => {
    return !isEqual(initialCustomization, {
      colorPreset: settings.colorPreset,
      direction: settings.direction,
      layout: settings.layout,
      paletteMode: settings.paletteMode,
      stretch: settings.stretch,
    });
  }, [settings]);

  return (
    <CustomizationContext.Provider
      value={{
        ...settings,
        ...state,
        handleReset: onReset,
        handleUpdate,
        isCustom,
      }}
    >
      {children}
    </CustomizationContext.Provider>
  );
};

CustomizationProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const CustomizationConsumer = CustomizationContext.Consumer;

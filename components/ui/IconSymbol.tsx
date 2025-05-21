// Fallback for using MaterialIcons on Android and web.

import { Entypo, MaterialIcons, FontAwesome6 } from '@expo/vector-icons';
import { SymbolWeight, SymbolViewProps } from 'expo-symbols';
import { ComponentProps } from 'react';
import { OpaqueColorValue, type StyleProp, type TextStyle } from 'react-native';

type IconMapping = Record<SymbolViewProps['name'], string>;
type IconSymbolName = keyof typeof MAPPING;

/**
 * Add your SF Symbols to Material Icons mappings here.
 * - see Material Icons in the [Icons Directory](https://icons.expo.fyi).
 * - see SF Symbols in the [SF Symbols](https://developer.apple.com/sf-symbols/) app.
 */
const MAPPING = {
  'house.fill': 'home',
  'paperplane.fill': 'send',
  'chevron.left.forwardslash.chevron.right': 'code',
  'chevron.right': 'chevron-right',
} as IconMapping;

/**
 * An icon component that uses native SF Symbols on iOS, and Material Icons on Android and web.
 * This ensures a consistent look across platforms, and optimal resource usage.
 * Icon `name`s are based on SF Symbols and require manual mapping to Material Icons.
 */
export function IconSymbol({
  name,
  size = 24,
  color,
  style,
}: {
  name: IconSymbolName;
  size?: number;
  color: string | OpaqueColorValue;
  style?: StyleProp<TextStyle>;
  weight?: SymbolWeight;
}) {
  const iconName = MAPPING[name];

  // Choose which icon set to render
  if (iconName === 'bar-graph') {
    return <Entypo name={iconName as ComponentProps<typeof Entypo>['name']} size={size} color={color} style={style} />;
  }
  if (iconName === 'ranking-star') {
    return <FontAwesome6 name={iconName as ComponentProps<typeof FontAwesome6>['name']} size={size} color={color} style={style} />;
  }

  return <MaterialIcons name={iconName as ComponentProps<typeof MaterialIcons>['name']} size={size} color={color} style={style} />;
}

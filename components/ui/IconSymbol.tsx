import { Entypo, MaterialIcons, FontAwesome6 } from '@expo/vector-icons';
import { SymbolWeight, SymbolViewProps } from 'expo-symbols';
import { ComponentProps } from 'react';
import { OpaqueColorValue, StyleProp, TextStyle, Platform } from 'react-native';

type IconMapping = Record<SymbolViewProps['name'], string>;
type IconSymbolName = keyof typeof MAPPING;

const MAPPING = {
  'house.fill': 'home',                          // MaterialIcons
  'paperplane.fill': 'send',                     // MaterialIcons
  'chevron.left.forwardslash.chevron.right': 'code',  // MaterialIcons
  'chevron.right': 'chevron-right',              // MaterialIcons
  'chart.bar.fill': 'bar-graph',                 // Entypo
  'ranking-star': 'ranking-star',               // FontAwesome6
} as const;

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
import React, { ReactNode } from 'react';
import { View, Image } from 'react-native';

import { styles } from './styles';
import { theme } from '../../global/styles/theme';
import { LinearGradient } from 'expo-linear-gradient';

type Props = {
  urlImage: string,
}

export function Avatar({ urlImage }: Props) {

  const { secondary80, secondary100 } = theme.colors;

  return (
    <LinearGradient
      style={styles.container}
      colors={[secondary80, secondary100]}
    >
      <Image
        source={{ uri: urlImage }}
        style={styles.avatar}

      />
    </LinearGradient>

  )
}
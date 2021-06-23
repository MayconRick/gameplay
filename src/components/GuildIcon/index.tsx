import React from 'react';
import { Image } from 'react-native';

import { styles } from './styles';

export function GuildIcon() {

  const uri = 'https://technewsbr.com.br/wp-content/uploads/2021/04/Discord.jpg';

  return (

    <Image
      source={{ uri }}
      style={styles.image}
      resizeMode="cover"

    />
  )
}
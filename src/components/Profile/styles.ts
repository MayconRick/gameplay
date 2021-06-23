import { StyleSheet } from 'react-native';

import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({

  container: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  user: {
    flexDirection: 'row',
  },
  greeting: {
    fontFamily: theme.fonts.title500,
    color: theme.colors.heading,
    marginRight: 6,
    fontSize: 24,
  },
  username: {
    fontFamily: theme.fonts.title700,
    color: theme.colors.heading,
    marginRight: 6,
    fontSize: 24,
  },
  message: {
    fontFamily: theme.fonts.text400,
    color: theme.colors.highlight,
  },

});
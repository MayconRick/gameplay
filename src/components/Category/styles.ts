import { StyleSheet } from 'react-native';

import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({

  container: {
    width: 104,
    height: 120,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    marginRight: 8
  },
  content: {
    width: 100,
    height: 116,
    borderRadius: 8,
    paddingVertical: 20,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    fontFamily: theme.fonts.title700,
    color: theme.colors.heading,
    marginTop: 18,
    fontSize: 15,
  },
  check: {
    top: 5,
    right: 5,
    width: 12,
    height: 12,
    borderWidth: 2,
    borderRadius: 3,
    position: 'absolute',
    backgroundColor: theme.colors.secondary100,
    borderColor: theme.colors.secondary50,
  },
  checked: {
    top: 5,
    right: 5,
    width: 12,
    height: 12,
    borderRadius: 3,
    position: 'absolute',
    backgroundColor: theme.colors.primary,
  },
});
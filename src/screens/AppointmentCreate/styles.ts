import { StyleSheet } from 'react-native';
import { getBottomSpace } from 'react-native-iphone-x-helper';

import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  label: {
    fontSize: 18,
    fontFamily: theme.fonts.title700,
    color: theme.colors.highlight,
  },
  form: {
    paddingHorizontal: 24,
    marginTop: 32,

  },
  select: {
    borderColor: theme.colors.secondary50,
    flexDirection: 'row',
    alignItems: 'center',
    paddingRight: 25,
    borderRadius: 8,
    borderWidth: 1,
    width: '100%',
    height: 68,
    overflow: 'hidden',
  },
  selectBody: {
    alignItems: 'center',
    flex: 1,
  },
  image: {
    backgroundColor: theme.colors.secondary40,
    borderColor: theme.colors.secondary50,
    borderRadius: 8,
    borderWidth: 1,
    height: 68,
    width: 64,
  },
  field: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 30
  },
  column: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  divider: {
    marginRight: 4,
    fontSize: 15,
    fontFamily: theme.fonts.text500,
    color: theme.colors.highlight,
  },
  caracteresLimit: {
    fontFamily: theme.fonts.text400,
    color: theme.colors.highlight,
    fontSize: 13,
  },
  footer: {
    marginVertical: 20,
    marginBottom: 56,
  }

});
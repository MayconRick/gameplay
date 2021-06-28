import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({

  container: {
    backgroundColor: theme.colors.secondary40,
    borderColor: theme.colors.secondary50,
    fontFamily: theme.fonts.text400,
    color: theme.colors.heading,
    textAlignVertical: 'top',
    width: '100%',
    paddingHorizontal: 16,
    borderRadius: 8,
    marginRight: 4,
    borderWidth: 1,
    paddingTop: 16,
    fontSize: 13,
    height: 95,
  },

});
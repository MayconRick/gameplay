import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    marginTop: -40,
    paddingHorizontal: 50
  },
  image: {
    width: '100%',
    height: 360,
  },
  title: {
    fontFamily: theme.fonts.title700,
    color: theme.colors.heading,
    textAlign: 'center',
    marginBottom: 16,
    lineHeight: 40,
    fontSize: 40,
  },
  subtitle: {
    fontFamily: theme.fonts.title500,
    color: theme.colors.heading,
    textAlign: 'center',
    marginBottom: 64,
    lineHeight: 25,
    fontSize: 15,
  }


});
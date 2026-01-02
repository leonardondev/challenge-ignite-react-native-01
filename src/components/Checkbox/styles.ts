import { StyleSheet } from "react-native";

import { colors } from '../../theme/colors';

export const styles = StyleSheet.create({
  container: {
    width: 28,
    height: 28,
    alignItems: 'center',
    justifyContent: 'center',
  },
  checkbox: {
    width: 16,
    height: 16,
    borderWidth: 1.8,
    borderColor: colors.blue,
    borderRadius: 999,
  },
  checkboxChecked: {
    width: 16,
    height: 16,
    borderRadius: 999,
    borderColor: colors.purpleDark,
    backgroundColor: colors.purpleDark,
    color: colors.gray100,
    alignItems: 'center',
    justifyContent: 'center',
  },
})
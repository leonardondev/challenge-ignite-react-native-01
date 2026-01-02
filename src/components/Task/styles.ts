import { StyleSheet } from "react-native";

import { colors } from '../../theme/colors';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.gray500,
    borderColor: colors.gray400,
    borderWidth: 1,
    borderRadius: 8,
    padding: 12,
    marginBottom: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: "space-between",
    gap: 8,
  },
  taskName: {
    color: colors.gray100,
    flex: 1,
  },
  taskNameDone: {
    color: colors.gray300,
    textDecorationLine: 'line-through'
  },
  trashButton: {
    width: 28,
    height: 28,
    alignItems: 'center',
    justifyContent: 'center',
  }
})
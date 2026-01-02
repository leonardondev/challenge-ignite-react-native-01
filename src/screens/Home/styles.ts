import { StyleSheet } from "react-native";

import { colors } from '../../theme/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.gray600,
  },
  header: {
    width: '100%',
    backgroundColor: colors.gray700,
    alignItems: 'center',
    paddingVertical: 64,
  },
  form: {
    paddingHorizontal: 24,
    marginTop: -24,
    marginBottom: 42,
    width: '100%',
    flexDirection: 'row',
  },
  input: {
    flex: 1,
    height: 54,
    backgroundColor: colors.gray500,
    color: colors.gray100,
    fontSize: 16,
    borderWidth: 1,
    borderColor: colors.gray700,
    borderRadius: 6,
    padding: 16,
    marginRight: 8,
  },
  inputFocused: {
    borderColor: colors.purpleDark
  },
  buttonText: {
    color: colors.gray100,
  },
  button: {
    width: 54,
    height: 54,
    borderRadius: 6,
    backgroundColor: '#1E6F9F',
    alignItems: 'center',
    justifyContent: 'center',
  },
  counters: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 24,
    marginBottom: 20,
  },
  conter: {
    flexDirection: 'row'
  },
  counterText: {
    color: colors.gray200,
    fontSize: 14, 
    fontWeight: 'bold',
    paddingRight: 8,
  },
  counterValue: {
    fontSize: 12,
    fontWeight: 'bold', 
    color: colors.gray200,
    backgroundColor: colors.gray400,
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 999,
  },
  listEmptyContainer: {
    alignItems: 'center',
    marginTop: 20,
    borderTopWidth: 1,
    borderTopColor: colors.gray400,
    paddingVertical: 48,
  },
  listEmptyImage: {
    marginBottom: 16,
  },
  listEmptyText: {
    color: colors.gray300,
    fontSize: 14,
    textAlign: 'center'
  },
  listContainer: {
    paddingHorizontal: 24,
    paddingBottom: 80,
  }
});

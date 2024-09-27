import { StyleSheet } from 'react-native';

export const CommonStyles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  widthFull: {
    width: '100%',
  },
  heightFull: {
    height: '100%',
  },
  row: {
    flexDirection: 'row',
  },
  pd20: {
    padding: 20,
  },
});

export const rowStyle = StyleSheet.compose(
  [CommonStyles.center, CommonStyles.widthFull],
  [CommonStyles.row],
);

export const buttonsRowStyle = StyleSheet.compose(rowStyle, CommonStyles.pd20);

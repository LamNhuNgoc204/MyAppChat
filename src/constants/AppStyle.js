import {StyleSheet} from 'react-native';
import {colors} from './Colors';

const appst = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background_primary,
  },
  center: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  rowCenter: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  rowSb: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

export default appst;

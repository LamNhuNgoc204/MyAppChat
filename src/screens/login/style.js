import {StyleSheet} from 'react-native';
import {sizes, spacing} from '../../constants/Common';
import {colors} from '../../constants/Colors';

const loginst = StyleSheet.create({
  container: {
    paddingVertical: spacing.xl,
    paddingHorizontal: spacing.lg,
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  image: {
    marginHorizontal: spacing.lg,
  },
  title: {
    color: colors.text_primary,
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: spacing.sm,
  },
  subTitle: {
    color: colors.text_secondary,
    fontSize: sizes.sm,
    marginTop: spacing.xm
  },
});

export default loginst;

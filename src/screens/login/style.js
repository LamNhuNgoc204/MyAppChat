import {StyleSheet} from 'react-native';
import {sizes, spacing} from '../../constants/Common';
import {colors} from '../../constants/Colors';

const loginst = StyleSheet.create({
  container: {
    paddingVertical: spacing.xl,
    paddingHorizontal: spacing.lg,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  image: {
    marginHorizontal: spacing.lg,
  },
  title: {
    color: colors.text_primary,
    fontSize: 30,
    fontWeight: 'bold',
  },
  subTitle: {
    color: colors.text_secondary,
    fontSize: sizes.sm,
    marginTop: spacing.xm,
  },
  viewContent: {
    marginBottom: spacing.xl,
    width: '100%',
    marginTop: spacing.sm,
  },
  textFooter: {
    borderTopColor: colors.text_secondary,
    paddingVertical: spacing.md,
    borderTopWidth: 1,
    fontSize: sizes.sm,
  },
  signup: {
    color: colors.text_primary,
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },
});

export default loginst;

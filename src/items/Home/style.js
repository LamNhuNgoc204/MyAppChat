import {StyleSheet} from 'react-native';
import {spacing} from '../../constants/Common';
import {colors} from '../../constants/Colors';

const homeit = StyleSheet.create({
  container: {
    marginVertical: spacing.md,
    marginHorizontal: spacing.sm
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
    resizeMode: 'cover',
  },
  view1: {
    marginLeft: spacing.sm,
    flex: 1,
  },
  press: {
    backgroundColor: 'purple',
    padding: spacing.sm,
    width: 105,
    borderRadius: 10,
  },
  textPress: {
    textAlign: 'center',
    color: colors.text_secondary,
    fontWeight: 'bold'
  },
  name:{
    fontWeight: 'bold',
    color: colors.text_primary
  },
  email:{
    color: 'gray',
  }
});

export default homeit;

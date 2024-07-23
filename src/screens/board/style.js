import {Dimensions, StyleSheet} from 'react-native';
import {colors} from '../../constants/Colors';

const {width} = Dimensions;

const boardst = StyleSheet.create({
  container: {
    backgroundColor: '#f8f8f8',
    justifyContent: 'space-between',
    marginVertical: 20,
  },
  bgImg: {
    width: '100%',
    height: '50%',
    resizeMode: 'cover',
    borderRadius: 20,
    alignContent: 'center',
    justifyContent: 'center',
  },
  heading: {
    color: colors.text_primary,
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: colors.text_primary,
    borderRadius: 10,
    width: '100%',
    marginTop: 10,
    paddingHorizontal: 10,
    fontSize: 16,
  },
  view1: {
    width: '90%',
    margin: 10,
  },
  viewPress: {
    marginVertical: 20,
  },
  info: {},
  textHead: {
    fontSize: 27,
    fontWeight: 'bold',
    color: colors.text_primary,
    textAlign: 'center',
  },
  subTitle: {
    color: 'gray',
    fontSize: 18,
    marginBottom: 15,
  },
});

export default boardst;

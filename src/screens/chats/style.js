import {StyleSheet} from 'react-native';
import {colors} from '../../constants/Colors';

const chatst = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    backgroundColor: '#efefef'
  },
  header: {
    backgroundColor: colors.background_primary,
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'center'
  },
  body: {
    flex: 1,
  },
  footer: {
    backgroundColor: '#fff',
    padding: 10
  },
  heading: {
    fontSize: 30,
    textAlign: 'center',
    color: '#000',
    fontWeight: 'bold',
    textDecorationLine: 'underline'
  },
});

export default chatst;

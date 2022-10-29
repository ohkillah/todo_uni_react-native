import React from 'react';
import {
  Dimensions,
  Image,
  StyleSheet,
  TouchableHighlight,
  View,
  Text,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Navbar = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.navbar}>
      <Image
        style={styles.logo}
        source={require('../assets/images/emblem-422302750.png')}
      />
      <TouchableHighlight
        style={styles.about}
        onPress={() => navigation.navigate('About')}
        underlayColor={'none'}>
        <Text style={styles.aboutText}>Info</Text>
      </TouchableHighlight>
    </View>
  );
};

export default Navbar;

const styles = StyleSheet.create({
  navbar: {
    backgroundColor: '#fff',
    width: Dimensions.get('window').width,
    flex: 1,
    flexDirection: 'row',
  },
  logo: {
    marginLeft: 15,
    marginTop: '3%',
    width: 50,
    height: 50,
  },
  about: {
    marginLeft: '65%',
    width: 50,
    height: 50,
    marginTop: '3%',
  },
  aboutText: {
    marginTop: '30%',
    textAlign: 'center',
    fontFamily: 'Poppins-Bold',
  },
});

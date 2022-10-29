import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableHighlight,
  Dimensions,
  SafeAreaView,
  View,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Navbar from '../components/Navbar';

const About = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.mainContainer}>
      <Navbar />
      <View style={styles.about}>
        <TouchableHighlight
          style={styles.back}
          onPress={() => navigation.goBack()}
          underlayColor={'none'}>
          <Text style={styles.backText}>Back</Text>
        </TouchableHighlight>
        <Text style={styles.title}>To Do App</Text>
        <Text style={styles.subtitle}>Almau Midterm</Text>
        <Text style={styles.text}>Ruslan K.</Text>
      </View>
    </SafeAreaView>
  );
};

export default About;

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: '#fff',
    height: Dimensions.get('window').height,
    flex: 1,
    flexDirection: 'column',
  },
  about: {
    backgroundColor: '#fff',
    marginTop: '8%',
    flex: 9,
    flexDirection: 'column',
  },
  title: {
    fontFamily: 'Poppins-Black',
    fontSize: 28,
    textAlign: 'center',
    color: 'black',
    marginBottom: 20,
  },
  subtitle: {
    fontFamily: 'Poppins-Light',
    fontSize: 26,
    textAlign: 'center',
    color: 'black',
    marginBottom: 20,
  },
  text: {
    fontFamily: 'Poppins-Light',
    fontSize: 16,
    textAlign: 'center',
    color: 'black',
    marginBottom: 20,
  },
  back: {
    marginLeft: 20,
    marginBottom: 40,
    backgroundColor: '#fff',
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 5,
    paddingBottom: 5,
    borderWidth: 1,
    borderColor: '#1B41A1',
    borderRadius: 10,
    alignItems: 'center',
    width: '20%',
  },
  backText: {
    color: 'black',
  },
});

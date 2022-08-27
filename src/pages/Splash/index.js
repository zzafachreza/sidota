import React, { useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  Image,
  Animated,
} from 'react-native';
import { colors, fonts, windowHeight, windowWidth } from '../../utils';
import { getData } from '../../utils/localStorage';

export default function Splash({ navigation }) {
  const top = new Animated.Value(0.3);

  const animasi = () => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(top, {
          toValue: 1,
          duration: 1000,
        }),
        Animated.timing(top, {
          toValue: 0.3,
          duration: 1000,
        }),
      ]),
      {
        iterations: 1,
      },
    ).start();
  };



  useEffect(() => {
    animasi();


    const unsubscribe = getData('user').then(res => {
      // console.log(res);
      if (!res) {
        // console.log('beum login');

        setTimeout(() => {
          navigation.replace('Login');
        }, 1500);
      } else {
        console.log('sudah login logon');

        setTimeout(() => {
          navigation.replace('Home');
        }, 1500);
      }
    });
  }, []);


  return (
    <View
      style={{
        flex: 1,
        backgroundColor: colors.white,
      }}>
      <View style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
      }}>

        <Image
          source={require('../../assets/logo.png')}
          style={
            {
              width: 250,
              height: 250
            }
          }
        />
        <Text style={{
          color: colors.secondary,
          fontFamily: fonts.secondary[800],
          fontSize: windowWidth / 10,
          marginBottom: 10,
        }}>SIDOTA</Text>
        <ActivityIndicator size="large" color={colors.secondary} />
      </View>


    </View>
  );
}

const styles = StyleSheet.create({});

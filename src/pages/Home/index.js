import { Alert, StyleSheet, Text, View, Image } from 'react-native'
import React, { useState, useEffect } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { apiURL, getData, storeData } from '../../utils/localStorage';
import { colors, fonts, windowHeight, windowWidth } from '../../utils';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { showMessage } from 'react-native-flash-message';
import Sound from 'react-native-sound';
import { Icon } from 'react-native-elements/dist/icons/Icon';
import { MyButton } from '../../components';
import { useIsFocused } from '@react-navigation/native';
import axios from 'axios';

export default function Home({ navigation }) {
  const isFocused = useIsFocused();
  const [user, setUser] = useState({});
  const [data, setData] = useState([]);
  // const [play, setPlay] = useState(false);


  useEffect(() => {


    getData('user').then(res => {
      setUser(res);
    })
  }
    , []);



  const MyMenu = ({ img, judul, onPress }) => {
    return (
      <TouchableOpacity onPress={onPress} style={{
        flex: 1,
        width: windowWidth / 3,
        marginVertical: 10,
        height: windowHeight / 8
      }}>
        <View style={{
          backgroundColor: colors.white,
          height: windowHeight / 10,
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 10,
        }}>
          <Image source={img} style={{ height: windowHeight / 13, resizeMode: 'contain' }} />
        </View>

        <Text style={{
          fontFamily: fonts.secondary[600],
          color: colors.primary,
          textAlign: 'center',
          marginTop: 5,
          fontSize: windowWidth / 32,
          maxWidth: windowWidth / 3,
        }}>{judul}</Text>

      </TouchableOpacity>
    )
  }


  return (
    <SafeAreaView style={{
      flex: 1,
      backgroundColor: colors.white,
    }}>
      {/* header */}
      <View style={{
        height: windowHeight / 6,
        backgroundColor: colors.primary,
        borderBottomRightRadius: 10,
        borderBottomLeftRadius: 10,
        paddingVertical: 20,
      }}>
        {/* <View style={{
          flexDirection: 'row',
          marginBottom: 5,
        }}> */}

        {/* <TouchableOpacity onPress={() => {
            storeData('user', null);

            navigation.replace('Login');
          }} style={{
            paddingHorizontal: 10,
            flex: 1,
            flexDirection: 'row',
            backgroundColor: colors.primary,
            justifyContent: 'center',
            alignItems: 'center'
          }}>
            <Icon type="ionicon" size={windowWidth / 30} name="log-out-outline" color={colors.white} />
            <Text style={{
              left: 5,
              fontFamily: fonts.secondary[600],
              fontSize: windowWidth / 30,
              color: colors.white
            }}>Keluar</Text>
          </TouchableOpacity> */}
        {/* </View> */}

        <View style={{
          flexDirection: 'row'
        }}>

          <View style={{
            flex: 1,
          }}>
            <View style={{
              flexDirection: 'row'
            }}>

              <View style={{
                padding: 10,
              }}>
                <Text style={{

                  fontFamily: fonts.secondary[400],
                  fontSize: windowWidth / 28,
                  color: colors.white
                }}>Selamat datang, {user.nama_lengkap}</Text>

                <Text style={{
                  fontFamily: fonts.secondary[800],
                  fontSize: windowWidth / 15,
                  color: colors.white
                }}>SIDOTA</Text>
              </View>

            </View>

          </View>
          <View style={{
            // flex: 1
            padding: 10,
          }}>

            <Image source={require('../../assets/logo2.png')} style={{ width: 50, height: 50 }} />
          </View>



        </View>

      </View>

      {/* slider */}

      <View style={{
        marginTop: -50,
        height: windowHeight / 3,
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <Image source={require('../../assets/slide.png')} style={{ width: windowWidth - 30, height: 200, borderRadius: 10, }} />
      </View>


      {/* menu */}
      <View style={{
        flex: 1,
        justifyContent: 'space-evenly',

      }}>

        <TouchableOpacity onPress={() => navigation.navigate('SCek')} style={{
          marginVertical: 5,
          marginHorizontal: 10,
          borderRadius: 10,
          elevation: 1,
          flexDirection: 'row',
          backgroundColor: colors.primary
        }}>
          <View style={{
            justifyContent: 'center',
            padding: 10,
            alignItems: 'center'
          }}>
            <Image source={require('../../assets/A1.png')} style={{
              resizeMode: 'contain',
              width: windowHeight / 6,
              height: windowHeight / 6,
            }} />
          </View>
          <View style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center'
          }}>
            <Text style={{
              fontFamily: fonts.primary[600],
              fontSize: windowWidth / 20,
              color: colors.white,
            }}>Simplisia</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('SHasil')} style={{
          marginVertical: 5,
          marginHorizontal: 10,
          borderRadius: 10,
          elevation: 1,
          flexDirection: 'row',
          backgroundColor: colors.primary
        }}>
          <View style={{
            justifyContent: 'center',
            padding: 10,
            alignItems: 'center'
          }}>
            <Image source={require('../../assets/A2.png')} style={{
              resizeMode: 'contain',
              width: windowHeight / 6,
              height: windowHeight / 6,
            }} />
          </View>
          <View style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center'
          }}>
            <Text style={{
              fontFamily: fonts.primary[600],
              fontSize: windowWidth / 20,
              color: colors.white,
            }}>Resep Obat Tradisional</Text>
          </View>
        </TouchableOpacity>

      </View >


      <View style={{
        flexDirection: 'row',
        justifyContent: 'space-around',
        backgroundColor: colors.primary
      }}>

        <TouchableOpacity style={{
          padding: 10,
          justifyContent: 'center',
          alignItems: 'center',

        }}>
          <Icon type='ionicon' name='home' color={colors.white} size={20} />
          <Text style={{
            fontFamily: fonts.primary[400],
            fontSize: windowWidth / 35,
            color: colors.white
          }}>Home</Text>
        </TouchableOpacity>


        <TouchableOpacity onPress={() => navigation.navigate('Account')} style={{
          padding: 10,
          justifyContent: 'center',
          alignItems: 'center',

        }}>
          <Icon type='ionicon' name='person' color={colors.white} size={20} />
          <Text style={{
            fontFamily: fonts.primary[400],
            fontSize: windowWidth / 35,
            color: colors.white
          }}>Account</Text>
        </TouchableOpacity>
      </View>







    </SafeAreaView >
  )
}

const styles = StyleSheet.create({
  judul: {
    fontFamily: fonts.secondary[600],
    fontSize: windowWidth / 35
  },
  item: {
    fontFamily: fonts.secondary[400],
    fontSize: windowWidth / 35
  }
})
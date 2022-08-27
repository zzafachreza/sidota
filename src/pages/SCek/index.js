import { StyleSheet, Text, View, Image, SafeAreaView } from 'react-native'
import React from 'react'
import { colors, fonts, windowWidth } from '../../utils'
import { MyButton } from '../../components'

export default function SCek({ navigation }) {
    return (
        <SafeAreaView style={{
            flex: 1,
            padding: 10,
        }}>
            <View style={{
                justifyContent: 'center',
                backgroundColor: colors.white,
                flex: 1,
                padding: 10,
                alignItems: 'center'
            }}>
                <Image source={require('../../assets/m1.png')} style={{
                    height: 200,
                    resizeMode: 'contain'
                }} />

                <Text style={{
                    fontFamily: fonts.primary[400],
                    fontSize: windowWidth / 30,
                    textAlign: 'center'
                }}>Simplisia adalah bahan alamiah yang dipergunakan sebagai obat yang belum mengalami pengolahan apapun juga dan kecuali dikatakan lain, berupa bahan yang telah dikeringkan. Simplisia dibagi menjadi tiga golongan yaitu simplisia nabati, simplisia hewani, simplisia mineral.</Text>

                <Text style={{
                    fontFamily: fonts.primary[600],
                    fontSize: windowWidth / 30,
                    textAlign: 'center'
                }}> (Melinda, 2014)</Text>


            </View>
            <MyButton onPress={() => navigation.navigate('Jenis')} title="Jenis Simplisia" warna={colors.primary} />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({})
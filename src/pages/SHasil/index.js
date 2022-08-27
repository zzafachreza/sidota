import { StyleSheet, Text, View, Image, SafeAreaView } from 'react-native'
import React from 'react'
import { colors, fonts, windowWidth } from '../../utils'
import { MyButton } from '../../components'

export default function SHasil({ navigation }) {
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
                <Image source={require('../../assets/m2.png')} style={{
                    height: 200,
                    resizeMode: 'contain'
                }} />

                <Text style={{
                    fontFamily: fonts.primary[400],
                    fontSize: windowWidth / 30,
                    textAlign: 'center'
                }}>Obat tradisional adalah bahan atau ramuan bahan yang berupa bahan tumbuhan, bahan hewan, bahan mineral, sediaan sarian (galenik), atau campuran dari bahan tersebut yang secara tradisional telah digunakan untuk pengobatan berdasarkan pengalaman.</Text>

                <Text style={{
                    fontFamily: fonts.primary[600],
                    fontSize: windowWidth / 30,
                    textAlign: 'center'
                }}> (Permenkes Nomor 246/Menkes/Per/V/1990)</Text>


            </View>
            <MyButton onPress={() => navigation.navigate('Menu2')} title="Resep" warna={colors.primary} />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({})
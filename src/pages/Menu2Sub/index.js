import React, { useEffect, useState } from 'react';
import {
    StyleSheet,
    Text,
    View,
    ScrollView,
    FlatList,
    SafeAreaView,
    RefreshControl,
    Image,
    TouchableOpacity,
} from 'react-native';
import { storeData, getData, urlAPI, apiURL } from '../../utils/localStorage';
import axios from 'axios';
import { colors } from '../../utils/colors';
import { windowWidth, fonts } from '../../utils/fonts';

import 'intl';
import 'intl/locale-data/jsonp/en';
const wait = timeout => {
    return new Promise(resolve => {
        setTimeout(resolve, timeout);
    });
};
export default function ({ navigation, route }) {
    const [refreshing, setRefreshing] = React.useState(false);
    const [data, setData] = useState([]);
    const [data2, setData2] = useState([]);


    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        getDataTransaction();
        getDataTransaction2;
        wait(2000).then(() => setRefreshing(false));
    }, []);

    useEffect(() => {




        getDataTransaction();
        getDataTransaction2();

    }, []);

    const getDataTransaction = () => {

        axios
            .post(apiURL + 'bahan.php', {
                fid_resep: route.params.id
            })
            .then(x => {
                console.log(x.data);
                setData(x.data);
            });

    };

    const getDataTransaction2 = () => {

        axios
            .post(apiURL + 'pembuatan.php', {
                fid_resep: route.params.id
            })
            .then(x => {
                console.log(x.data);
                setData2(x.data);
            });

    };



    return (
        <ScrollView
            refreshControl={
                <RefreshControl
                    refreshing={refreshing}
                    onRefresh={onRefresh}
                    colors={[colors.primary]}
                />
            }
            style={{
                padding: 10,
                backgroundColor: colors.white
            }}>

            <View style={{
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <Image style={{
                    width: 200,
                    height: 200
                }} source={{
                    uri: route.params.image
                }} />
                <Text>{route.params.nama_resep}</Text>
            </View>

            <Text style={{
                fontFamily: fonts.secondary[600],
                fontSize: windowWidth / 20,
            }}>Bahan</Text>
            <ScrollView>
                {data.map(i => {
                    return <Text>{i.nama_bahan} {i.jumlah}</Text>
                })}
            </ScrollView>

            <Text style={{
                fontFamily: fonts.secondary[600],
                fontSize: windowWidth / 20,
            }}>Cara Pembuatan</Text>
            <ScrollView>
                {data2.map(i => {
                    return <Text>{i.langkah_ke}. {i.pembuatan}</Text>
                })}
            </ScrollView>

        </ScrollView>
    );
}

const styles = StyleSheet.create({});

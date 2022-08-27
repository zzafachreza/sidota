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


    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        getDataTransaction();
        wait(2000).then(() => setRefreshing(false));
    }, []);

    useEffect(() => {




        getDataTransaction();

    }, []);

    const getDataTransaction = () => {
        getData('user').then(res => {
            axios
                .post(apiURL + 'resep.php')
                .then(x => {
                    console.log(x.data);
                    setData(x.data);
                });
        });
    };

    const renderItem = ({ item }) => (
        <TouchableOpacity onPress={() => navigation.navigate('Menu2Sub', item)} style={{
            flex: 1,
            borderBottomWidth: 1,
            backgroundColor: colors.primary,
            marginVertical: 10,
            borderBottomColor: colors.border,
            borderRadius: 10,
        }}>
            <View style={{
                justifyContent: 'center',
                alignItems: 'center',
                padding: 10,
            }}>

                <Text style={{
                    fontSize: windowWidth / 25,
                    color: colors.white,
                    fontFamily: fonts.primary[600],
                }}>{item.nama_resep}</Text>
            </View>

        </TouchableOpacity>
    );

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
            <FlatList
                data={data}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />
        </ScrollView>
    );
}

const styles = StyleSheet.create({});

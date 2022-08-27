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

    console.log('fid', route.params.fid_jenis)

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
                .post(apiURL + 'simplisia.php', {
                    fid_jenis: route.params.fid_jenis
                })
                .then(x => {
                    console.log(x.data);
                    setData(x.data);
                });
        });
    };

    const renderItem = ({ item }) => (
        <View style={{
            flex: 1,
            borderBottomWidth: 1,
            borderBottomColor: colors.border,
            paddingBottom: 10,
        }}>
            <View style={{
                justifyContent: 'center',
                alignItems: 'center',
                padding: 10,
            }}>
                <Image style={{
                    width: 100,
                    height: 100
                }} source={{
                    uri: item.image
                }} />
                <Text style={{
                    fontSize: windowWidth / 25,
                    color: colors.black,
                    fontFamily: fonts.primary[600],
                }}>{item.nama_simplisia}</Text>
            </View>
            <View style={{
                flexDirection: 'row'
            }}>
                <Text style={{
                    flex: 0.8,
                }}>Nama Lain</Text>
                <Text style={{
                    flex: 0.2,
                }}>:</Text>
                <Text style={{
                    flex: 1,
                }}>{item.nama_lain}</Text>
            </View>
            <View style={{
                flexDirection: 'row'
            }}>
                <Text style={{
                    flex: 0.8,
                }}>Nama tanaman asal </Text>
                <Text style={{
                    flex: 0.2,
                }}>:</Text>
                <Text style={{
                    flex: 1,
                }}>{item.nama_latin}</Text>
            </View>
            <View style={{
                flexDirection: 'row'
            }}>
                <Text style={{
                    flex: 0.8,
                }}>Keluarga</Text>
                <Text style={{
                    flex: 0.2,
                }}>:</Text>
                <Text style={{
                    flex: 1,
                }}>{item.nama_family}</Text>
            </View>
            <View style={{
                flexDirection: 'row'
            }}>
                <Text style={{
                    flex: 0.8,
                }}>Zat berkhasiat utama/isi </Text>
                <Text style={{
                    flex: 0.2,
                }}>:</Text>
                <Text style={{
                    flex: 1,
                }}>{item.khasiat}</Text>
            </View>
            <View style={{
                flexDirection: 'row'
            }}>
                <Text style={{
                    flex: 0.8,
                }}>Penggunaan </Text>
                <Text style={{
                    flex: 0.2,
                }}>:</Text>
                <Text style={{
                    flex: 1,
                }}>{item.penggunaan}</Text>
            </View>
        </View>
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

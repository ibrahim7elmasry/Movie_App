import React, { useState, useEffect } from 'react';
import { SafeAreaView, View, Text, FlatList, TouchableOpacity, Image, ScrollView, ActivityIndicator } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import NetInfo from '@react-native-community/netinfo';
import { fetchMovies } from '../../../infrastructure/api/api';
import styles from './styles';
import I18n from '../../../infrastructure/localization/i18n/index';
import { colors } from '../../../shared/theme';

const HomeScreen = ({ navigation }) => {
    const [movies, setMovies] = useState([]);
    const [isOnline, setIsOnline] = useState(true);
    const [isLoading, setIsLoading] = useState(true);
    const [errorText, setErrorText] = useState('');
    const generatePosterURL = (posterPath: any) => { return `https://image.tmdb.org/t/p/w500${posterPath}`; };

    useEffect(() => {
        const fetchData = async () => {
            const netInfo = await NetInfo.fetch();
            setIsOnline(netInfo.isConnected);

            try {
                if (netInfo.isConnected) {
                    const movieData = await fetchMovies();
                    setMovies(movieData);
                    await AsyncStorage.setItem('movieData', JSON.stringify(movieData));
                } else {
                    const cachedData = await AsyncStorage.getItem('movieData');
                    if (cachedData) {
                        setMovies(JSON.parse(cachedData));
                    } else {
                        setErrorText(I18n.t('offlineError'));
                        setIsLoading(false);
                    }
                }
            } catch (error) {
                setErrorText(I18n.t('networkError'));

            }
            setIsLoading(false);
        };
        fetchData();
    }, []);


    const renderItem = ({ item }) => (
        <TouchableOpacity onPress={() => navigation.navigate('MovieDetails', { movie: item })} style={styles().movieItem}>
            <Image source={{ uri: generatePosterURL(item.poster_path) }} style={styles().posterImage} />
            <Text style={styles().movieTitle}>{item.title}</Text>
            <Text numberOfLines={2} style={styles().movieOverview}>{item.overview}</Text>
            <Text style={styles().movieYear}>{item.release_date ? item.release_date.substring(0, 4) : ''}</Text>

        </TouchableOpacity>
    );

    return (
        <SafeAreaView style={styles().container}>

            {!isOnline && (<Text style={styles().offlineText}>{I18n.t('offlineText')}</Text>)}

            <ScrollView>
                <View style={styles().headerContainer}>
                    <Text style={styles().headerText}>{I18n.t('movies')}</Text>
                </View>

                <View style={styles().titleContainer}>
                    <Text style={styles().titleText}>{I18n.t('titleText')}</Text>
                </View>

                {isLoading ? (<ActivityIndicator size="large" color={colors.indicator} style={styles().loadingIndicator} />)
                    :
                    errorText ? (
                        <View style={styles().errorContainer}>
                            <Text style={styles().errorText}>{I18n.t('errorText')}</Text>
                        </View>)
                        :
                        (<FlatList
                            numColumns={2}
                            data={movies}
                            renderItem={renderItem}
                            keyExtractor={(item) => item.id.toString()}
                            contentContainerStyle={styles().flatListStyle} />
                        )}
            </ScrollView>
        </SafeAreaView>

    );
};

export default HomeScreen;

import React, { useEffect, useState } from 'react';
import { View, ScrollView, Text, Image, TouchableOpacity, ActivityIndicator } from 'react-native';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';

import I18n from '../../../infrastructure/localization/i18n/index';
import { SafeAreaView } from 'react-native-safe-area-context';
import { colors } from '../../../shared/theme';

const MovieDetailsScreen = ({ route }) => {
    const { movie } = route.params;
    const navigation = useNavigation();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 300);
    }, []);

    return (
        <SafeAreaView style={styles().container}>
            <ScrollView>
                {isLoading ? (<ActivityIndicator size="large" color={colors.indicator} style={styles().loadingIndicator} />)
                    : (
                        <>
                            <View style={styles().headerContainer}>
                                <TouchableOpacity style={styles().backButton} onPress={() => navigation?.goBack()}>
                                    <Image
                                        style={styles().icon}
                                        source={require("../../../assets/icons/left-arrow.png")}
                                        resizeMode={'contain'} />
                                </TouchableOpacity>
                                <View style={styles().titleContainer}>
                                    <Text style={styles().title}>{I18n.t('movieDetails')}</Text>
                                </View>
                            </View>

                            <View style={styles().movieContainer}>
                                <View style={styles().imageContainer}>
                                    <Image source={{ uri: `https://image.tmdb.org/t/p/w500${movie.poster_path}` }} style={styles().posterImage} />
                                </View>
                                <Text style={styles().movieTitle}>{movie.title}</Text>

                                <View style={styles().section}>
                                    <Text style={[styles().rating, styles().boldText]}>{I18n.t('IMBD_Rating')} </Text>
                                    <Text style={styles().rating}>{movie.vote_average}</Text>
                                </View>

                                <View style={styles().section}>
                                    <Text style={[styles().year, styles().boldText]}>{I18n.t('year')} </Text>
                                    <Text style={styles().year}>{movie.release_date.split('-')[0]}</Text>
                                </View>

                                <View style={styles().section}>
                                    <Text style={[styles().releaseDate, styles().boldText]}>{I18n.t('releaseDate')} </Text>
                                    <Text style={styles().releaseDate}>{movie.release_date}</Text>
                                </View>

                                <Text style={[styles().description, styles().boldText]}>{I18n.t('description')} </Text>
                                <Text style={[styles().description, styles().descriptionBottomMargin]}>{movie.overview}</Text>
                            </View>
                        </>
                    )}
            </ScrollView>

        </SafeAreaView>
    );
};


export default MovieDetailsScreen;

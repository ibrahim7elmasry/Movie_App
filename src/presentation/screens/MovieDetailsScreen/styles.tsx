import { StyleSheet, Dimensions } from 'react-native';
import { colors } from '../../../shared/theme';

const styles = () =>
    StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: colors.darkLightBackground,
        },
        headerContainer: {
            flexDirection: 'row',
            marginTop: 24,
            marginBottom: 16
        },
        backButton: {
            width: 48,
            height: 48,
            borderRadius: 24,
            borderWidth: 1,
            justifyContent: 'center',
            alignItems: 'center',
            borderColor: colors.white,
            marginStart: 24,
        },
        icon: {
            width: 24,
            height: 24,
            tintColor: colors.white
        },
        titleContainer: {
            alignSelf: 'center',
            marginStart: 100
        },
        title: {
            fontSize: 24,
            fontWeight: 'bold',
            textAlign: 'center',
            right: 24,
            color: colors.white
        },
        movieContainer: {
            paddingHorizontal: 12,
            marginTop: 16,
        },
        imageContainer: {
            borderRadius: 15,
            shadowColor: colors.white,
            shadowOffset: {
                width: 0,
                height: 2
            },
            shadowOpacity: 0.5,
            shadowRadius: 2,
            elevation: 2,
        },
        posterImage: {
            width: '100%',
            height: Dimensions.get('window').height / 2 + 70,
            marginBottom: 10,
            borderRadius: 10,
        },
        movieTitle: {
            marginTop: 8,
            fontSize: 28,
            fontWeight: 'bold',
            color: colors.white,
            marginBottom: 8,
        },
        rating: {
            fontSize: 18,
            color: colors.white,
            marginBottom: 8,
        },
        year: {
            fontSize: 18,
            marginBottom: 8,
            color: colors.white,
        },
        releaseDate: {
            fontSize: 18,
            color: colors.white,
            marginBottom: 8,
        },
        description: {
            fontSize: 18,
            color: colors.white,
            lineHeight: 24,
            marginBottom: 2
        },
        boldText: {
            fontWeight: 'bold'
        },
        section: {
            flexDirection: 'row'
        },
        descriptionBottomMargin: {
            marginBottom: 8
        },
        loadingIndicator: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            marginVertical: Dimensions.get('window').height / 2
        }
    });

export default styles;


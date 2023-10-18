import { StyleSheet, Dimensions } from 'react-native';
import { colors } from '../../../shared/theme';

const styles = () =>
    StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: colors.darkLightBackground,
            padding: 10,
        },
        movieItem: {
            flex: 1,
            flexDirection: 'column',
            alignItems: 'center',
            margin: 7,
            backgroundColor: colors.dark,
            borderRadius: 10,
            shadowColor: colors.white,
            shadowOffset: {
                width: 0,
                height: 2
            },
            shadowOpacity: 0.2,
            shadowRadius: 2,
            elevation: 3,
        },
        posterImage: {
            marginTop: 5,
            width: '95%',
            height: Dimensions.get('window').height / 4,
            borderTopLeftRadius: 10,
            borderTopRightRadius: 10,
        },
        movieTitle: {
            fontSize: 16,
            fontWeight: 'bold',
            color: colors.white,
            marginTop: 10,
            textAlign: 'center',
            marginHorizontal: 4
        },
        movieOverview: {
            fontSize: 14,
            fontWeight: 'bold',
            color: colors.lightgray,
            marginTop: 15,
            textAlign: 'center',
            marginHorizontal: 6
        },
        movieYear: {
            fontSize: 14,
            color: colors.white,
            marginTop: 10,
            marginBottom: 10,
            textAlign: 'center',
            fontWeight: 'bold'
        },
        offlineText: {
            textAlign: 'center',
            color: colors.red,
            marginTop: 24,
            fontSize: 18,
            fontWeight: '400'
        },
        errorText: {
            fontSize: 16,
            textAlign: 'center',
            color: colors.red,
            fontWeight: '500'
        },
        loadingIndicator: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            marginVertical: Dimensions.get('window').height / 3
        },
        headerContainer: {
            marginTop: 24,
            alignItems: 'center'
        },
        headerText: {
            fontSize: 26,
            fontWeight: 'bold',
            color: colors.white,
        },
        titleContainer: {
            marginTop: 24,
            alignItems: 'center'
        },
        titleText: {
            fontSize: 16,
            fontWeight: '400',
            color: colors.white,
        },
        errorContainer: {
            marginVertical: Dimensions.get('window').height / 3,
            marginHorizontal: 24
        },
        flatListStyle: {
            marginHorizontal: 8,
            marginVertical: 16,
            paddingHorizontal: 5,
        }
    });

export default styles;
import { StyleSheet } from 'react-native';
import { primaryColor, fillColor, backgroundColor } from '../../../styles/colors';

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        alignSelf: 'center',
        backgroundColor: primaryColor,
        paddingHorizontal: 15,
        paddingTop: 10,
        paddingBottom: 20,
        zIndex: 10,
        width: '80%',
        height: 400,
        top: 25,
        borderWidth: 2,
        borderColor: backgroundColor,
        borderRadius: 5,
    },
    button: {
        borderWidth: 1,
        paddingVertical: 2,
        paddingHorizontal: 25,
        backgroundColor: fillColor,
        alignSelf: 'center',
        marginTop: 20,
        marginBottom: 20
    },
    buttonText: {
        color: primaryColor,
    },
    inputWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
        marginBottom: 10,
        marginLeft: 15
    },
    inputLabel: {
        fontSize: 14,
    },
    input: {
        borderWidth: 1,
        paddingVertical: 0,
        paddingHorizontal: 5,
        width: 50
    },
    icon: {
        marginLeft: 10
    }, 
    title: {
        fontSize: 18,
        marginBottom: 15
    },
    seriesLabel: {
        width: 45
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginRight: 20
    },
    serieWrapper: {
        borderTopWidth: 1,
        paddingTop: 5
    }
});

export default styles;
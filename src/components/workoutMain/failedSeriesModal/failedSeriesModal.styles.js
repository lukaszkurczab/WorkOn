import { StyleSheet } from 'react-native';
import { primaryColor, fillColor, backgroundColor } from '../../../styles/colors';

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        backgroundColor: primaryColor,
        paddingHorizontal: 15,
        paddingVertical: 10,
        zIndex: 10,
        alignSelf: 'center',
        top: 85,
        width: '80%',
        borderWidth: 2,
        borderColor: backgroundColor,
        borderRadius: 5
    },
    button: {
        borderWidth: 1,
        paddingVertical: 2,
        paddingHorizontal: 25,
        backgroundColor: fillColor,
        alignSelf: 'center',
        marginTop: 20
    },
    buttonText: {
        color: primaryColor,
    },
    inputWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
        marginTop: 10
    },
    inputLabel: {
        fontSize: 16,
    },
    input: {
        borderWidth: 1,
        paddingVertical: 0,
        paddingHorizontal: 5,
        width: 50
    },
    title: {
        marginBottom: 5,
        fontSize: 18
    }
});

export default styles;
import { StyleSheet } from 'react-native';
import { primaryColor, fillColor, backgroundColor } from '../../../styles/colors';

const styles = StyleSheet.create({
    container: {
        backgroundColor: backgroundColor,
        flexGrow: 1,
        paddingHorizontal: 2,
        paddingVertical: 5
    },
    text: {
        color: primaryColor,
        fontSize: 18,
        marginBottom: 5
    },
    textWrapper: {
        marginHorizontal: 13,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    dropdownWrapper: {
        flexDirection: 'row',
        backgroundColor: fillColor,
        paddingHorizontal: 18,
        paddingVertical: 2,
        justifyContent: 'space-between'
    },
    dropdownText: {
        color: primaryColor,
        fontSize: 16,
    },
    iconFail: {
        color: 'red'
    },
    iconSuccess: {
        color: 'green'
    }
});

export default styles;
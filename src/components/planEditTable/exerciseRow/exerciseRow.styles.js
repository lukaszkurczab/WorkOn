import { StyleSheet } from 'react-native';
import { primaryColor, secondaryColor, backgroundColor, fillColor } from '../../../styles/colors';

const styles = StyleSheet.create({
    container: { 
        paddingVertical: 10,
        paddingHorizontal: 15,
        width: '100%'
    },
    headingWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    iconsWrapper: {
        flexDirection: 'row',
        gap: 10,
    },
    icon: {
        color: primaryColor
    },
    text: {
        color: primaryColor,
        fontSize: 18,
        flexWrap: 'wrap',
        width: '80%'
    }
});

export default styles;
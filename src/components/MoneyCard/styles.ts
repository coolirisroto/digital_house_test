import { StyleSheet } from "react-native";
import { colors, family } from "../../styles";

const styles = StyleSheet.create({
    container: {
        borderRadius: 20,
        backgroundColor: colors.blueButton,
        paddingHorizontal: 19,
        paddingVertical: 21,
        minWidth: 286,
        minHeight: 143,
        shadowColor: 'rgba(0,0,0,0.5)',
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.7,
        shadowRadius: 2,
        elevation: 9,
    },
    month: {
        fontSize: 16,
        lineHeight: 22,
        fontWeight: '800',
        color: colors.white,
        fontFamily: family.bold,
    },
    pointsText: {
        fontSize: 32,
        lineHeight: 44,
        fontWeight: '800',
        alignSelf: "center",
        color: colors.white,
        fontFamily: family.bold,
    }
})

export default styles;
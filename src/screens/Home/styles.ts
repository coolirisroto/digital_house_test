import { Dimensions, StyleSheet } from "react-native"
import { colors, family } from "../../styles"

const CARD_CONTAINER_MARGIN = 20;
const FOOTER_MARGIN = 30;
const USERNAME_MARGIN = 20;
const TRANSACTION_PADDING = 23;
const SCREEN_HEIGHT = Dimensions.get('screen').height - (CARD_CONTAINER_MARGIN + FOOTER_MARGIN + USERNAME_MARGIN + TRANSACTION_PADDING)

const styles = StyleSheet.create({
    mainContainer: {
        backgroundColor: colors.lightGrey,
        flex: 1
    },
    container: {
        paddingHorizontal: 20,
        flexGrow: 1,
        minHeight: SCREEN_HEIGHT,
    },
    list: {
        flexGrow: 1,
        marginTop: 20,
        height: SCREEN_HEIGHT * .35,
        backgroundColor: colors.white,
        borderRadius: 10,
        paddingHorizontal: 10,
        paddingVertical: TRANSACTION_PADDING,
    },
    cardContainer: {
        alignItems: 'center',
        marginVertical: CARD_CONTAINER_MARGIN,
    },
    moneyCard: {
        width: 300,
    },
    title: {
        fontSize: 20,
        fontWeight: '800',
        lineHeight: 27,
        color: colors.black,
        marginTop: 30,
        fontFamily: family.bold,
    },
    userNameText: {
        fontSize: 16,
        fontWeight: '400',
        lineHeight: 21,
        color: '#020202',
        marginBottom: USERNAME_MARGIN,
        fontFamily: family.regular,
    },
    subtitle: {
        fontSize: 14,
        fontWeight: '800',
        lineHeight: 27,
        color: colors.grey,
        textTransform: 'uppercase',
        fontFamily: family.bold,
    },
    footer: {
        marginVertical: FOOTER_MARGIN,
    },
    fullButton: {
        width: '100%',
    },
    btnsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    btnAuto: {
        width: '48%'
    }
})

export default styles
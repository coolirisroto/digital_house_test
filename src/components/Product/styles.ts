import { StyleSheet } from "react-native"
import { family } from "../../styles"

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 5,
        paddingHorizontal: 10,
        width: '100%'
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    transactionImage: {
        width: 55,
        height: 55,
        marginRight: 11,
        borderRadius: 10
    },
    title:{
        fontSize: 14,
        fontFamily: family.bold,
        lineHeight: 19,
        fontWeight: '800',
        marginBottom: 3,
        maxWidth: '90%',
    },
    date:{
        fontSize: 12,
        fontFamily: family.regular,
        lineHeight: 16,
        fontWeight: '400',
    },
    pointsContainer:{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        width: '30%',
    },
    points: {
        fontSize: 16,
        fontFamily: family.bold,
        lineHeight: 21.86,
        fontWeight: '800'
    },
    redemption: {
        color: '#00B833'
    },
    noRedemption: {
        color: '#FF0000'
    },
    arrow: {
        fontWeight: '700',
        fontSize: 18,
        fontFamily: family.semiBold,
    }
})

export default styles
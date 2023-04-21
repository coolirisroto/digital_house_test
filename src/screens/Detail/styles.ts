import { StyleSheet } from 'react-native';
import { colors, family } from '../../styles'
const styles = StyleSheet.create({
    header:{
        backgroundColor: colors.purple,
        paddingTop:60,
        paddingBottom:15,
        paddingHorizontal:20,
    },
    headerTitle:{
        fontSize:18,
        fontFamily: family.bold,
    },
    container: {
        flex: 1,
        padding: 20,
        backgroundColor:'white'
    },
    image: {
        width: '100%',
        height: 350,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'white',
        borderRadius: 10,
        shadowColor: "#000000",
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity:  0.17,
        shadowRadius: 2.54,
    },
    label: {
        color: colors.grey,
        fontSize: 14,
        fontWeight: 'bold',
        marginVertical: 25,
        fontFamily: family.light,
    },
    description: {
        color: colors.black,
        fontSize: 16,
        fontFamily: family.bold,
    },
    points: {
        fontSize: 18
    },

    button: {
        width: '100%',
        marginTop: 30
    }
})

export default styles 
import { StyleSheet } from 'react-native';
import { colors, family } from '../../styles'

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.blueButton,
        width: 200,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: colors.blueButton,
        paddingVertical: 10,
    },
  text: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: "800",
    color: colors.white,
    lineHeight: 22,
    fontFamily: family.bold,
  }
});

export default styles;

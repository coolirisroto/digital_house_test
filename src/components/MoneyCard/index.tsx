import { View, Text, StyleSheet } from 'react-native'
import React, { memo } from 'react'
import styles from './styles'
import { format } from 'date-fns'
import { es } from 'date-fns/locale'

type Props = {
  points: number,
  style?: any
}

const currencyFormat = (num) => {
  return num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
}

const MoneyCard = ({ points, style }: Props) => {

  const currentMonth =  format(new Date(), 'LLLL', {locale: es});

  return (
    <View style={StyleSheet.flatten([styles.container, style ])}>
        <Text style={styles.month}>{currentMonth[0].toUpperCase() + currentMonth.substring(1)}</Text>
        <Text style={styles.pointsText} testID='points'>{`${currencyFormat(points)} pts`}</Text>
    </View>
  )
}

export default memo(MoneyCard)
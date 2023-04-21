import React, { memo } from 'react'
import { Image, Text, View, StyleSheet, TouchableOpacity } from 'react-native'
import { Product } from '../../clients/mockApi'
import styles from './styles'
import { format } from 'date-fns'
import { es } from 'date-fns/locale'

type props = {
  item: Product
  onPress: () => void
}
const ProductComponent = ({ item, onPress }: props) => {

  const { product, createdAt, image, points, is_redemption } = item

  return (
    <TouchableOpacity testID='button'  style={styles.container} onPress={onPress}>
      <View style={StyleSheet.compose(styles.row, { width: '70%' })}>
        <Image source={{ uri: image }} style={styles.transactionImage} />
        <View>
          <Text testID='title' style={styles.title} ellipsizeMode='tail' numberOfLines={1}>{product}</Text>
          <Text testID='date' style={styles.date}>{format(new Date(createdAt), "dd 'de' MMMM , yyyy", { locale: es })}</Text>
        </View>
      </View>
      <View style={styles.pointsContainer}>
        <View style={styles.row}>
          <Text
            testID='isRedemption'
            style={StyleSheet.compose(styles.points, is_redemption ? styles.noRedemption : styles.redemption)}>
            {is_redemption ? '-' : '+'}
          </Text>
          <Text testID='points' style={styles.points}>{points}</Text>
        </View>
        <Text testID='arrow' style={styles.arrow}> {'>'} </Text>
      </View>
    </TouchableOpacity>
  )
}

export default memo(ProductComponent)
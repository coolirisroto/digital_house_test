import React from 'react'
import { View, Text, Image, ScrollView } from 'react-native'
import Button from '../../components/Button'
import styles from './styles'
import EmptyImage from '../../assets/img/empty.png'
import { formatDate } from '../../utils/date'
import { Product } from '../../clients/mockApi'

type Route = {
    key?: string
    name?: string
    params: Product
    path?: string
}
type Navigation = {
    goBack: () => void
}
type Props = {
    navigation: Navigation
    route: Route
}
const DetailScreen = ({ navigation, route }: Props) => {
    const { product, image, createdAt, points } = route.params
    const sxEmptyImage = !image && { width: '50%', height: '50%' }
    const img = image ? { uri: image } : EmptyImage
    return (
        <>
            <View style={styles.header}>
                <Text style={styles.headerTitle}>{product}</Text>
            </View>
            <View style={styles.container}>
                <View style={[styles.image]} >
                    <Image style={[styles.image, sxEmptyImage]} source={img} />
                </View>
                <Text style={styles.label}>Detalles del producto: </Text>
                <Text style={styles.description}>Comprado el {formatDate(createdAt)}</Text>
                <Text style={styles.label}>Con esta compra acomulaste: </Text>
                <Text style={[styles.description, styles.points]}>{points} puntos</Text>
                <Button style={styles.button} text="Aceptar" onPress={() => navigation.goBack()} />
            </View>
        </>
    )
}


export default DetailScreen
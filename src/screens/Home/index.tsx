import React, { useEffect, useState, useMemo } from 'react'
import { View, Text, SafeAreaView, FlatList } from 'react-native'
import Button from '../../components/Button'
import ProductComponent from '../../components/Product'
import { Product, fetchProducts } from '../../clients/mockApi'
import styles from './styles'
import MoneyCard from '../../components/MoneyCard'
import routes from '../../navigation/routes'

enum FILTER_TYPES {
    ALL = 'ALL',
    WIN = 'WIN',
    REDEMPTION = 'REDEMPTION'
}

type Props = {
    navigation: any
}

const HomeScreen = ({ navigation }: Props) => {
    const [isLoading, setIsLoading] = useState(false)
    const [products, setProducts] = useState<Array<Product>>([])
    const [filterType, setFilterType] = useState<FILTER_TYPES>(FILTER_TYPES.ALL)
    const [refresh, setRefresh] = useState<boolean>(false)

    const getProducts = async () => {
        setIsLoading(true)
        const items = await fetchProducts();
        setProducts(items)
        setIsLoading(false)
    }
    useEffect(() => {
        getProducts()
    }, [])

    const onPressItem = (item: Product) => navigation.navigate(routes.detail, item)

    const winnedProducts = useMemo(() => products.filter(item => !item.is_redemption), [products])

    const redemptionProducts = useMemo(() => products.filter(item => item.is_redemption), [products])

    const totalPoints = useMemo(() => {
        let total = 0
        winnedProducts.forEach(product => {
            total = total + product.points
        })
        return total
    }, [winnedProducts])


    const renderProducts = useMemo(() => {
        if (filterType === FILTER_TYPES.WIN) {
            return winnedProducts
        }
        else if (filterType === FILTER_TYPES.REDEMPTION) {
            return redemptionProducts
        }
        return products
    }, [filterType, products, winnedProducts, redemptionProducts])

    if (isLoading) return


    return (
        <SafeAreaView style={styles.mainContainer}>
            <View style={styles.container}>
                <Text style={styles.title}>Bienvenido de vuelta!</Text>
                <Text style={styles.userNameText}>Ruben Rodríguez</Text>
                <Text style={styles.subtitle}>Tus puntos</Text>
                <View style={styles.cardContainer}>
                    <MoneyCard points={totalPoints} />
                </View>
                <Text style={styles.subtitle}>Tus movimientos</Text>
                <FlatList
                    data={renderProducts}
                    renderItem={({ item }) => <ProductComponent item={item} onPress={() => onPressItem(item)} />}
                    keyExtractor={item => item.id}
                    style={styles.list}
                />
                <View style={styles.footer}>
                    {filterType === FILTER_TYPES.ALL ? (
                        <View style={styles.btnsContainer}>
                            <Button text="Ganados" style={styles.btnAuto} onPress={() => setFilterType(FILTER_TYPES.WIN)} />
                            <Button text="Canjeados" style={styles.btnAuto} onPress={() => setFilterType(FILTER_TYPES.REDEMPTION)} />
                        </View>
                    ) : (
                        <Button text="Todos" onPress={() => setFilterType(FILTER_TYPES.ALL)} style={styles.fullButton} />
                    )}
                </View>
            </View>
        </SafeAreaView>
    )
}


export default HomeScreen
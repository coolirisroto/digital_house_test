import http from '../utils/http'

export type Product = {
    id: string;
    createdAt: string;
    product: string;
    points: number;
    is_redemption: boolean;
    image: string;
}

async function fetchProducts (): Promise<Array<Product>> {
    const response =  await http.getInstance().get('products')
    const data = response.data as Array<Product>;
    return data;
}

export {
    fetchProducts,
}
import apiClient from "./api-client";



interface ProductImage{
    id: number;
    image: string;
}
export interface Product{
    id: number;
    title: string;
    price: number;
    price_with_tax: number;
    inventory: number;
    collection: number;
    images: ProductImage[];
}
interface FetchProductResponse{
    count:number
    next: string
    previous: string
    results:Product[]
}

 class ProductService{
    getProducts() {
        // abort controller for async request if the user leave this page 
        const controller = new AbortController()
        const request = apiClient.get<FetchProductResponse>("store/products/", {
                 signal: controller.signal
        })
    return {request,cancel:()=>controller.abort()}
    }
}
export default new ProductService()
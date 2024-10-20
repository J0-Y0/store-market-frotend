import apiClient from "./api-client";

export interface Collection{
    id: number;
    product_count: number;
    title: string;
    created_at :string
}

interface FetchProductResponse{
    count:number
    next: string
    previous: string
    results:Collection[]
}

 class CollectionService{

     
       getCollections() {
        const controller = new AbortController()
        const request = apiClient.get<FetchProductResponse>("store/collections/", {
                 signal: controller.signal
        })
    return {request,cancel:()=>controller.abort()}
    }
}
export default new CollectionService()
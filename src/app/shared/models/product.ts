export interface Product {
    id: number;
    title: string;
    description: string;
    price: number;
    like: number;
    dislike: number;
    categorie: string;
    img: string;
    created_at: string;
    updated_at: string;
    
}

export interface ProductWithQuantity extends Product {
    quantity: number;
}
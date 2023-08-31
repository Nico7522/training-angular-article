import { Product } from "../models/product";

export interface LikeOrDislikeResponse {
    message: string;
    product: Product
    
}

export interface NotModifiedResponse {
    message: string
}

export interface ErrorResponse {
    message: string;
}
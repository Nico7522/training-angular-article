import { Product } from "../models/product";

export interface LikeOrDislikeResponse {
    message: string;
    product: Product
    statusText?: string
}
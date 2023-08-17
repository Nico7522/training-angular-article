export type Article = {
    id: number;
    titleArticle: string;
    priceArticle: number;
    description: string;
    textAltImg: string;
    urlImg: string;
    available: boolean;
    numberOfLike: number;
    numberOfDislike: number;
    isLiked: boolean;
    isDisliked: boolean;
    categorie: string;
}
export interface IProduct {
    productId: number;
    productName: string;
    releaseDate: string;
    price: number;
    description: string;
    starRating: number;
    imageUrl: string;
    productCode: string;
}

export class Product implements IProduct {
    constructor(public productId: number,
        public productName: string,
        public   releaseDate: string,
        public  price: number,
        public  description: string,
        public starRating: number,
        public  imageUrl: string,
        public  productCode: string) {  }

        calculateDiscount(percent: number): Number {
            return this.price = (this.price * percent / 100);
        }
}

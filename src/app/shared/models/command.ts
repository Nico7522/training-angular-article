import { ProductWithQuantity } from "./product";

export class Command {
  products: any[]
  constructor(products: any) {
    this.products = products
  }
}

export type CommandUser = {
  id: number;
  created_at: Date;
  updated_at: Date;
  total: number;
  products: ProductWithQuantity[];
}


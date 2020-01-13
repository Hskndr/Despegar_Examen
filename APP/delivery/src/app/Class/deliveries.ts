export class Delivery {
  id: number;
  company: string;
  description: string;
  category: [{
    categoryName: string;
    dishes: [{
      dishName: string;
      dishDescription: string,
      dishPrice: number;
    }]
  }]
}

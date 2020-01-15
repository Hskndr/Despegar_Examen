export class Delivery {
  id: number;
  company: string;
  description: string;
  menues: [{
    idMenu: number;
    descMenu: string;
    dishes: [{
      idDish: number;
      descripDish: string;
      priceDish: number
    }];

  }]
    /*dishes: [{
      dishName: string;
      dishDescription: string,
      dishPrice: number;
    }]
  }]*/
  }

import { Injectable } from '@angular/core';
import { Foods } from 'src/app/_shared/models/food';
import { Tag } from 'src/app/_shared/models/Tag';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getFoodById(id: number): Foods {
    var t = this.getAll().find(food => food.id === id)!;
    return t;
  }

  getAll(): Foods[]{
    return [
      {
        id: 1,
        name: "pizza Pepperoni",
        cookTime: '10-20',
        price: 10,
        favorite: false,
        origins: ['italy'],
        stars: 4.5,
        imageUrl: '/assets/images/foods/food1.jpg',
        tags: ['FastFood','Pizza', 'Lunch'],
      },
      {
        id: 2,
        name: "MeatBall",
        cookTime: '20-30',
        price: 20,
        favorite: true,
        origins: ['persia', 'middle east', 'china'],
        stars: 4.5,
        imageUrl: '/assets/images/foods/food2.jpg',
        tags: ['slowFood', 'Lunch'],
      },
      {
        id: 3,
        name: "hamburger",
        cookTime: '10-15',
        price: 5,
        favorite: true,
        origins: ['germany', 'us'],
        stars: 3.5,
        imageUrl: '/assets/images/foods/food3.jpg',
        tags: ['FastFood', 'Hamburger'],
      },
      
      {
        id: 4,
        name: "Fried Pasta",
        cookTime: '15-20',
        price: 2,
        favorite: true,
        origins: ['belgum', 'france'],
        stars: 3.5,
        imageUrl: '/assets/images/foods/food4.jpg',
        tags: ['FastFood', 'Fry'],
      },
      
      {
        id: 5,
        name: "Chicken Soup",
        cookTime: '40-50',
        price: 11,
        favorite: false,
        origins: ['india', 'asia'],
        stars: 3.5,
        imageUrl: '/assets/images/foods/food5.jpg',
        tags: ['FastFood', 'Soup'],
      },
      {
        id: 6,
        name: "vegitables pizza",
        cookTime: '40-50',
        price: 9,
        favorite: false,
        origins: ['italy', 'iran'],
        stars: 4.5,
        imageUrl: '/assets/images/foods/food7.jpg',
        tags: ['slowFood','Pizza', 'Lunch'],
      },
      
    ]
  }


  getAllTag(): Tag[]{
    return [
      { name: "All", count: 14 },
      { name: "FastFood", count: 4 },
      { name: "Pizza", count: 2 },
      { name: "Lunch", count: 3 },
      { name: "slowFood", count: 2 },
      { name: "Hamburger", count: 1 },
      { name: "Fry", count: 1 },
      { name: "Soup", count: 1 }
      
    ]
  }

  getAllFoodByTag(tag:string) : Foods[] {
    if (tag == 'All')
      return this.getAll();
    else
      return this.getAll().filter(food => food.tags?.includes(tag))

  }
}

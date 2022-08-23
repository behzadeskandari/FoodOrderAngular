import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from '../services/cart.service';
import { FoodService } from '../services/food/food.service';
import { Foods } from '../_shared/models/food';

@Component({
  selector: 'app-foodpage',
  templateUrl: './foodpage.component.html',
  styleUrls: ['./foodpage.component.css']
})
export class FoodpageComponent implements OnInit {
  food!: Foods;

  
  constructor(private activatedRoute: ActivatedRoute, private foodService: FoodService,private cartService: CartService,private router: Router) {
    activatedRoute.params.subscribe((params) => {
      if (params['id']) {
        var value = parseInt(params['id']);
        this.food = foodService.getFoodById(value)
      } 

    })  

  }

  ngOnInit(): void {
    
    console.log(this.food,'foods')
  }
  addToCart() {
    this.cartService.addToCart(this.food);
    this.router.navigateByUrl('/cart-page');
  }
}

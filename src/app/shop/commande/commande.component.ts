import { Component, OnInit } from '@angular/core';
import { ShopService } from 'src/app/services/shop.service';
import { environment } from 'src/environment/environment';

@Component({
  selector: 'app-commande',
  templateUrl: './commande.component.html',
  styleUrls: ['./commande.component.css']
})
export class CommandeComponent implements OnInit {
  imgUrl = environment.apiUrlImg
  command: any[] = []
  constructor(private _shopService: ShopService){}
ngOnInit(): void {
    this._shopService.getUserCommand().subscribe({
      next: (commands) => { this.command = commands

        for (const command of this.command) {
          let calc = 0
          for (const product of command.products) {
             calc = calc + (product.quantity*product.price)
          }
          command.total = calc
          
        }
        console.log(this.command);
        
      }
    }
      
      
      
      
    )
   
    
}

}

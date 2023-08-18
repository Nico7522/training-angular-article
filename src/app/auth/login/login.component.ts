import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';
import { ClientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private _clientService: ClientService){}
ngOnInit(): void {
    this._clientService.getAll().pipe(map(x =>  {
      return {
        ...x,
        dateDuJour: new Date()
      }
    })).subscribe(val => console.log(val)
    )
    
    
}
}

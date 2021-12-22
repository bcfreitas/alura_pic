import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  photos = [];
  constructor(http: HttpClient){
    console.log(http);

    //o metodo get do HttpClient retorna um Observable da lib RxJs,
    //que possibilita chamadas assincronas e baseadas em eventos.
    http
      .get<Object[]>('http://localhost:3000/flavio/photos')
      .subscribe(
        photos => this.photos = photos,
        err => console.log(err.message)
      );
  }
}

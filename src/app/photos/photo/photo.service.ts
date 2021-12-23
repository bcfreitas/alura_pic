import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Photo } from "./photo";

//para usar injeção de dependência dos componentes
//que criamos, precisamos decorar o componente com @Injectable, informando
//o escopo utilizado.
@Injectable({ providedIn: 'root'})
export class PhotoService{

  constructor(private http: HttpClient){
    this.http = http;
  }

  listFromUser(userName: string){
    return this.http
      .get<Photo[]>('http://localhost:3000/' + userName + '/photos');
  }
}

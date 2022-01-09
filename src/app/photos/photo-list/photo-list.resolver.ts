import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { Photo } from "../photo/photo";
import { PhotoService } from "../photo/photo.service";

@Injectable({providedIn:'root'})
//o ipo do Resolve é o mesmo do método que retorna os dados da classe PhotoService
export class PhotoListResolver implements Resolve<Observable<Photo[]>>{

  //o construtor indica o serviço que será utilizado.
  constructor(private service: PhotoService){
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
    const userName = route.params.userName;
    return this.service.listFromUserPaginated(userName, 1);
  }

}

import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';
import { Photo } from '../photo/photo';
import { debounceTime } from 'rxjs/operators';
import { PhotoService } from '../photo/photo.service';

@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.css']
})
export class PhotoListComponent implements OnInit, OnDestroy {

  photos: Photo[] = [];
  filter: string = '';
  debounce: Subject<string> = new Subject<string>();
  hasMore:boolean = true;
  currentPage: number= 1;
  userName: string = '';

  //injetando dependência do ActivatedRoute para ter acesso a variáveis da rota ativa
  constructor(private activatedRoute: ActivatedRoute,
    private photoService: PhotoService){''}

  //isolamos o construtor apenas para injecao de dependencia,
  //e passamos o restante do código para o método do ciclo de vida ngOnInit()
  ngOnInit(): void {
    this.userName = this.activatedRoute.snapshot.params.userName;
    this.photos = this.activatedRoute.snapshot.data['photos'];
    this.debounce
      .pipe(debounceTime(300))
      .subscribe(filter2 => this.filter = filter2);
  }

  ngOnDestroy(): void {
    this.debounce.unsubscribe();
  }

  load(){
    //pre-incremento pq a primeira carga é pelo resolver
    this.photoService
      .listFromUserPaginated(this.userName, ++this.currentPage)
      .subscribe(photos => {
        //spread operator para adicionar na array nao da certo, pq o angular
        //so recarrega se nova atribuicao for feita
        //this.photos.push(...photos);
        this.photos = this.photos.concat(photos);

        if(!photos.length){
          this.hasMore = false;
        }
      })

  }
}

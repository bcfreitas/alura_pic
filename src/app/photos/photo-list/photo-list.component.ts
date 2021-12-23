import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Photo } from '../photo/photo';
import { PhotoService } from '../photo/photo.service';

@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.css']
})
export class PhotoListComponent implements OnInit {

  photos: Photo[] = [];

  //injetando dependência do ActivatedRoute para ter acesso a variáveis da rota ativa
  constructor(private photoService: PhotoService,
    private activatedRoute: ActivatedRoute){''}

  //isolamos o construtor apenas para injecao de dependencia,
  //e passamos o restante do código para o método do ciclo de vida ngOnInit()
  ngOnInit(): void {

    const user = this.activatedRoute.snapshot.params.userName;
    this.photoService
    .listFromUser(user)
    .subscribe(photos => this.photos = photos);
  }
}

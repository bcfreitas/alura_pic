import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Photo } from '../photo/photo';

@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.css']
})
export class PhotoListComponent implements OnInit {

  photos: Photo[] = [];
  filter: string = '';

  //injetando dependência do ActivatedRoute para ter acesso a variáveis da rota ativa
  constructor(private activatedRoute: ActivatedRoute){''}

  //isolamos o construtor apenas para injecao de dependencia,
  //e passamos o restante do código para o método do ciclo de vida ngOnInit()
  ngOnInit(): void {
    this.photos = this.activatedRoute.snapshot.data['photos'];
  }
}

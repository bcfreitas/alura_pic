import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Photo } from '../../photo/photo';

@Component({
  selector: 'ap-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit, OnChanges {

  //Para poder passar dados para esse array, precisa ser um Inbound Properties
  @Input() photos: Photo[] = [];
  rows: any[] = [];

  constructor() { }

  ngOnInit() {
  }

  //Tivemos que usar o metodo ngOnChanges em virtude da chamada do metodo
  //gorupColumns, pois quando o dom era atualizado com a chamada
  //assincrona da api nao estava chamado ele, que era chamado so no inicio com
  //array vazia de fotos.
  ngOnChanges(changes: SimpleChanges): void {
    if(changes.photos){
      this.rows=this.groupColumns(this.photos);
    }
  }


  groupColumns(photos: Photo[]){
    const newRows = [];
    for(let index=0; index<photos.length; index+=3){
      newRows.push(photos.slice(index, index+3));
    }
    return newRows;
  }

}

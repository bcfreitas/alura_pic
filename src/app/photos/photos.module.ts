import { HttpClientModule } from "@angular/common/http";
import { CommonModule } from '@angular/common';
import { NgModule } from "@angular/core";

import { PhotoComponent } from "./photo/photo.component";
import { PhotoListComponent } from './photo-list/photo-list.component';


@NgModule({
    declarations: [ PhotoComponent, PhotoListComponent ],
    imports: [
      HttpClientModule,
      //o commonModule possibilita uso de diretivas como ngFor, ngIf nos htmls.
      //antes nao era necessario porque os componentes de foto
      //estavam atrelados ao app.module, que importa o BrowserModule, que contem
      //o commonModule. Contudo, não podemos usar o BrowserModule em componentes personalizados,
      //pois ele só deve ser usado no modulo principal da apliacao para seu funcionamento.
      CommonModule
    ]

})
export class PhotosModule {}

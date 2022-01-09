import { HttpClientModule } from "@angular/common/http";
import { CommonModule } from '@angular/common';
import { NgModule } from "@angular/core";

import { PhotoComponent } from "./photo/photo.component";
import { PhotoListComponent } from './photo-list/photo-list.component';
import { PhotoFormComponent } from './photo-form/photo-form.component';
import { PhotosComponent } from './photo-list/photos/photos.component';
import { FilterByDescription } from "./photo-list/filter-by-description.pipe";
import { LoadButtonComponent } from './photo-list/load-button/load-button.component';


@NgModule({
    declarations: [ PhotoComponent, PhotoListComponent, PhotoFormComponent, PhotosComponent, FilterByDescription, LoadButtonComponent ],
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

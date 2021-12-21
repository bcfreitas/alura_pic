import { Component } from "@angular/core";

@Component({
    //boa pratica prefixar todos os componentes
    selector: 'ap-photo',
    templateUrl: 'photo.component.html'
})
export class PhotoComponent {
    title = 'app';
    urlImagem = 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/512px-React-icon.svg.png';
    textoImagem = 'site google';
  
}
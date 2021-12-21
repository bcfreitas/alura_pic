import { Component, Input } from "@angular/core";

@Component({
    //boa pratica prefixar todos os componentes
    selector: 'ap-photo',
    templateUrl: 'photo.component.html'
})
export class PhotoComponent {
    //o decorator Input permite passar os valores das propriedades diretamente nas chamadas do componente
    @Input() title = '';
    @Input() urlImagem = '';
    @Input() textoImagem = 'site google';
  
}
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PhotoFormComponent } from './photos/photo-form/photo-form.component';
import { PhotoListComponent } from './photos/photo-list/photo-list.component';

const routes: Routes = [
  { path: 'user/flavio', component: PhotoListComponent },
  { path: 'p/add', component: PhotoFormComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  //ao exportarmos também o RouterModule dispensaremos
  //import do RouterModule nos componentes que fizerem uso
  //deste. E o RouterMOdule é necessário para que
  //o Angular jogue o conteudo das rotas no app.component.html,
  //onde usaremos <router-outlet>
  exports: [ RouterModule ]
})
export class AppRoutingModule {}

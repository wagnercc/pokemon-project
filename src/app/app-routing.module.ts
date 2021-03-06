import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: 'cards', loadChildren: () => import('./cards/cards.module').then(m => m.CardsModule)},
  { path: '', loadChildren: () => import('./cards/cards.module').then(m => m.CardsModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

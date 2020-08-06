import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './list/list.component';
import { DetailsComponent } from './details/details.component';

const cardsRoutes = [
    {
        path: '', component: ListComponent, children: [
            { path: 'details/:id', component: DetailsComponent }
        ]
    },

];

@NgModule({
    imports: [RouterModule.forChild(cardsRoutes)],
    exports: [RouterModule]
})
export class CardsRoutingModule { }

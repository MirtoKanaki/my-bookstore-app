import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { BookViewComponent } from "./book-view.component";

const routes: Routes = [
    {
        path: '',
        children: [
            {
                path: '',
                redirectTo: 'book-view',
                pathMatch: 'full'
            },
            {
                path: 'book-view',
                component: BookViewComponent
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class BookViewRoutingModule {}
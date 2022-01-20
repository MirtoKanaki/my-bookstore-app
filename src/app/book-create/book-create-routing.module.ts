import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { BookCreateComponent } from "./book-create.component";

const routes: Routes = [
    {
        path: '',
        children: [
            {
                path: '',
                redirectTo: 'book-create',
                pathMatch: 'full'
            },
            {
                path: 'book-create',
                component: BookCreateComponent
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class BookCreateRoutingModule {}
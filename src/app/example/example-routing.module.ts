import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import { IndexComponent } from './index/index.component';
import { ShowComponent } from './show/show.component';

const routes: Routes = [
  { path: 'example', redirectTo: 'example/index', pathMatch: 'full'},
  { path: 'example/index', component: IndexComponent },
  { path: 'example/:id/show', component: ShowComponent },
  { path: 'example/create', component: CreateComponent },
  { path: 'example/:id/edit', component: EditComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExampleRoutingModule { }
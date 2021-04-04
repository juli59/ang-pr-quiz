import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AdminComponent} from './admin/admin.component';
import { QuizComponent } from './quiz/quiz.component';

const routes: Routes = [
  {
    path:"",
    component: HomeComponent,
  },
  {
    path:"admin",
    component: AdminComponent,
  },
  {
    path:"quiz",
    component: QuizComponent,
  },
  // {
  //   path:"quiz/:id",
  //   component: QuizeditorComponent,
  // },
  // {
  //   path:"question/:id",
  //   component: QuestioneditorComponent,
  // },
  {
    path:"**",
    component: HomeComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

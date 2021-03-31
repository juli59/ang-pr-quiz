import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { AdminComponent } from './admin/admin.component';
import { QuizComponent } from './quiz/quiz.component';
import { QuestionEditComponent } from './question-edit/question-edit.component';
import { QuestionEditorComponent } from './question-editor/question-editor.component';
import { QuizEditorComponent } from './quiz-editor/quiz-editor.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    AdminComponent,
    QuizComponent,
    QuestionEditComponent,
    QuestionEditorComponent,
    QuizEditorComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

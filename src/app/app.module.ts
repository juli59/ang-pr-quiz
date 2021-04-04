import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { AdminComponent } from './admin/admin.component';
import { QuizComponent } from './quiz/quiz.component';
import { FormsModule } from '@angular/forms';
import { QuestionEditorComponent } from './question-editor/question-editor.component';
import { QuizEditorComponent } from './quiz-editor/quiz-editor.component';
import { HomeComponent } from './home/home.component';
import { StudentService } from './service/student.service';
import { QuestionService } from './service/question.service';
import { QuizService } from './service/quiz.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    AdminComponent,
    QuizComponent,
    QuestionEditorComponent,
    QuizEditorComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    StudentService,
    QuestionService,
    QuizService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

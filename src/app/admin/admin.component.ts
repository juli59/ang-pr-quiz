import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Quiz } from '../model/quiz';
import { QuizService } from '../service/quiz.service';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  quizList$: BehaviorSubject<Quiz[]> = this.quizService.list$;

  constructor(
    private quizService: QuizService
  ) { }

  ngOnInit(
  ): void {
    this.quizService.getAll();
  }

}

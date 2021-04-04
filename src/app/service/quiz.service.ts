import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Quiz } from '../model/quiz';

@Injectable({
  providedIn: 'root'
})
export class QuizService {
jsonUrl: string = "http://localhost:3000/db"
list$: BehaviorSubject<Quiz[]> = new BehaviorSubject<Quiz[]>([]);
  constructor(
    private http: HttpClient
  ) { }
  getAll(): Observable<Quiz[]> {
    return this.http.get<Quiz[]>(this.jsonUrl)
  }
  getOne(id: string | number): Observable<Quiz[]> {
    return this.http.get<Quiz[]>(`${this.jsonUrl}/${id}`)
  }
  create(quiz: Quiz): void {
    this.http.post<Quiz>(`${this.jsonUrl, quiz}`, quiz)
  }
  update(quiz: Quiz): void {
    this.http.patch<Quiz>(`${this.jsonUrl}/${quiz.id}`,
    quiz).subscribe(()=>this.getAll()
    );

  }
  remove(quiz: Quiz): void {
    this.http.delete<Quiz>(`${this.jsonUrl}/${quiz.id}`
    ).subscribe(()=>this.getAll()
    );
  }
}

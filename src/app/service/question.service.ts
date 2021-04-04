import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Question } from '../model/question';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {
jsonUrl: string = "http://localhost:3000/db"
  constructor(
    private http: HttpClient
  ) { }
  getAll(): Observable<Question[]> {
    return this.http.get<Question[]>(this.jsonUrl)
  }
  getOne(id: string | number): Observable<Question[]> {
    return this.http.get<Question[]>(`${this.jsonUrl}/${id}`)
  }
  create(question: Question): void {
    this.http.post<Question>(`${this.jsonUrl, question}`, question)
  }
  update(question: Question): void {
    this.http.patch<Question>(`${this.jsonUrl}/${question.id}`, question).subscribe (
      ()=> this.getAll()
    )
  }
  remove(question: Question): void {
    this.http.delete<Question>(`${this.jsonUrl}/${question.id}`).subscribe (
      ()=> this.getAll()
    )
  }
}

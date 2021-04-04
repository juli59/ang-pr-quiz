import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Student } from '../model/student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
jsonUrl: string = "http://localhost:3000/db"
  constructor(
    private http: HttpClient
  ) { }
  getAll(): Observable<Student[]> {
    return this.http.get<Student[]>(this.jsonUrl)
  }
  getOne(id: string | number): Observable<Student[]> {
    return this.http.get<Student[]>(`${this.jsonUrl}/${id}`)
  }
  create(student: Student): void {
    this.http.post<Student>(`${this.jsonUrl, student}`, student
    ).subscribe(
      ()=>this.getAll()
    );
    }

    remove(student: Student): void {
      this.http.delete<Student>(
        `${this.jsonUrl}/${student.id}`
      ).subscribe(
        ()=>this.getAll()
      );
    }
    update(student: Student): void {
      this.http.patch<Student>(
        `${this.jsonUrl}/${student.id}`,
      student).subscribe(
        ()=>this.getAll()
      );
    }
}

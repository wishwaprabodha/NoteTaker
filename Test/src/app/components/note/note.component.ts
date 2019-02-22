import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-book',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent implements OnInit {
  notes: any[] = [];
  constructor(public http: HttpClient) {

  }

  viewNotes() {
    this.http.get<any>('http://localhost:8000/note')
      .subscribe((res: any[]) => {
        console.log(res);
        this.notes = res;
      }, error => {
        console.log(' Error ', error);
      });
  }

  searchNotes(NoteId) {
    this.http.get<any>('http://localhost:8000/note/' + NoteId).subscribe((res: any[]) => {
        console.log('GET Request is successful ', res);
        this.notes = res;
      },
      error => {
        console.log(' Error ', error);
      });
  }


  addNotes(fg) {
    this.http.post('http://localhost:8000/note', fg)
      .subscribe(res => {
        console.log(res);
      });
  }

  updateNotes(fg, NoteId) {
    this.http.put('http://localhost:8000/note/' + NoteId, fg).subscribe(data => {
          console.log('PUT Request is successful ', data);
        },
        error => {
          console.log(' Error ', error);
        });
  }

  deleteNotes(NoteId) {
    this.http.delete('http://localhost:8000/note/' + NoteId).subscribe(data => {
        console.log('DELETE Request is successful ', data);
      },
      error => {
        console.log(' Error ', error);
      });
  }
  ngOnInit() {

  }

}

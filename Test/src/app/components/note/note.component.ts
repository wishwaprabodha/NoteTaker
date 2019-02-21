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
    this.viewNotes();
  }

  viewNotes() {
    this.http.get<any>('http://localhost:8000/note')
      .subscribe((res: any[]) => {
        console.log(res);
        this.notes = res;
      });
  }

  addNotes(fg) {
    this.http.post('http://localhost:8000/note', fg.value)
      .subscribe(res => {
        console.log(res);
      });
  }
  updateNotes(fg) {
    this.http.put('http://localhost:8000/note',
      {
        'name': 'NewCustomer001',
        'email': 'newcustomer001@email.com',
        'tel': '0000252525'
      }).subscribe(data => {
          console.log('PUT Request is successful ', data);
        },
        error => {
          console.log(' Error ', error);
        });
  }
  ngOnInit() {

  }

}

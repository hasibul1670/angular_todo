import { Component, OnInit } from '@angular/core';
import { ITask } from 'src/app/model/task';
import { DataService } from 'src/app/shared/data.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
})
export class TodosComponent implements OnInit {
  taskList: any[] = [];

  taskObj: ITask = {
    id: '',
    title: '',
    description: '',
    date: '',
    todoPriority: '',
  };

  id: string = '';
  title: string = '';
  description: string = '';
  date: string = '';
  todoPriority: string = '';

  constructor(private data: DataService) {}
  ngOnInit(): void {
    this.getAllTaskfromDB();
  }

  getAllTaskfromDB() {
    this.data.getAllTask().subscribe(
      (res) => {
        this.taskList = res.map((e) => {
          const data: any = e.payload.doc.data();
          data.id = e.payload.doc.id;
          return data;
        });
      },
      (err) => {
        alert('error while fetching data');
      }
    );
  }

  resetForm() {
    this.id = '';
    this.title = '';
    this.description = '';
    this.todoPriority = '';
    this.date = '';
  }

  addTask() {
    if (
      this.title == '' ||
      this.description == '' ||
      this.todoPriority == '' ||
      this.date == ''
    ) {
      alert('Fill all input fields');
      return;
    }

    this.taskObj.id = '';
    this.taskObj.title = this.title;
    this.taskObj.description = this.description;
    this.taskObj.todoPriority = this.todoPriority;
    this.taskObj.date = this.date;

    this.data.addTask(this.taskObj);
    this.resetForm();
  }

  deleteTask(task: ITask) {
    if (
      window.confirm('Are you sure you want to delete ' + task.title + ' ?')
    ) {
      this.data.deleteTask(task);
    }
  }
}

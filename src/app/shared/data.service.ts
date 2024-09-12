import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { ITask } from '../model/task';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private afs: AngularFirestore) {}

  //Add Task
  addTask(task: ITask) {
    task.id = this.afs.createId();
    const result = this.afs.collection('/task').add(task);
    console.log('🚀 ~ DataService ~ addTask ~ result:', result);
    return result;
  }
  //get All Task
  getAllTask() {
    return this.afs.collection('/task').snapshotChanges();
  }
  //Delete Task
  deleteTask(task: ITask) {
    return this.afs.doc('/task/' + task.id).delete();
  }
  //Update Task
  //Update Task
  updateTask(task: ITask) {
    return this.afs.doc('/task/' + task.id).update(task);
  }
}

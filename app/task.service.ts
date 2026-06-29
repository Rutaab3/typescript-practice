import { Injectable, inject } from '@angular/core';
import { Firestore, collection, collectionData, addDoc, updateDoc, deleteDoc, doc } from '@angular/fire/firestore';
import { Storage, ref, uploadBytes, getDownloadURL } from '@angular/fire/storage';
import { Observable, retry } from 'rxjs';
import { Task } from './task.model';
import { timeEnd } from 'node:console';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private firestore = inject(Firestore);
  private storage = inject(Storage);

  private tasksCollection = collection(this.firestore, 'tasks');

  getTasks(): Observable<Task[]> {
    return collectionData(this.tasksCollection, { idField: 'id' }) as Observable<Task[]>;
  }

  async addTask(title: string, imageFile: File | null): Promise<void> {
    let imageUrl = '';
    if (imageFile) {
      const fileref = ref(this.storage, `task-images/${Date.now()}_${imageFile.name}`)
      const uploadResult = await uploadBytes(fileref, imageFile);

      imageUrl = await getDownloadURL(uploadResult.ref);

      const newTask = {
        title: title,
        imageUrl: imageUrl,
        completed: false,
        createdAt: new Date().toISOString()
      }

      await addDoc(this.tasksCollection, newTask);
    }
  }

  updateTaskStatus(id: string, completed: boolean):Promise<void>{
    const taskDocRef = doc(this.firestore, `tasls/${id}`);

    return updateDoc(taskDocRef, {completed: completed})
  }

  updateTaskTitle(id: string, newtitle: string):Promise<void>{
    const taskDocRef = doc(this.firestore, `tasls/${id}`);

    return updateDoc(taskDocRef, {title: newtitle})
  }

  deleteTask(id: string): Promise<void>{
    const taskDocRef = doc(this.firestore, `tasls/${id}`);

    return deleteDoc(taskDocRef);
  }
}
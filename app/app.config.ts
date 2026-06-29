import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import {getFirestore,provideFirestore} from '@angular/fire/firestore';
import {getStorage, provideStorage} from '@angular/fire/storage';

// your web app's firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCBkU99vsERDrVzszOXhhbBlD_lNE2UXwE",
  authDomain: "my-todo-app-d6d7e.firebaseapp.com",
  projectId: "my-todo-app-d6d7e",
  storageBucket: "my-todo-app-d6d7e.firebasestorage.app",
  messagingSenderId: "1008450310051",
  appId: "1:1008450310051:web:28f02adb4e247a309fd416"
};

export const appConfig: ApplicationConfig = {
  providers: [
   provideRouter(routes),
   //this starts firebase when our application starts 
   provideFirebaseApp(()=> initializeApp(firebaseConfig)),
   //this sets up out cloud database service:
   provideFirestore(() => getFirestore()),
   //this sets up cloud storage service
   provideStorage(()=>getStorage())
   ]
  };
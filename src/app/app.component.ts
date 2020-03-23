import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})



export class AppComponent {
  title = 'style-guide-app';

<<<<<<< HEAD

=======
  constructor(public auth: AngularFireAuth) {
  
  } 

  login(email, pw) {    
    this.auth.signInWithEmailAndPassword(email, pw)
    .catch(err => {
      alert(err.message);
    });;
  }

  logout() {
    this.auth.signOut();
  }
>>>>>>> nicholas-newman-branch
}

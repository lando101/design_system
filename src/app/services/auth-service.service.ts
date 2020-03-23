import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { Router, CanActivate } from '@angular/router';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable , of } from 'rxjs';
import { User } from './user.model';
import { switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  user$: Observable<any>;

  constructor(private afAuth: AngularFireAuth, private router: Router, private afs: AngularFirestore) {
    this.user$ = this.afAuth.authState.pipe(
      switchMap(user => {
        if (user) {
          return this.afs.doc<User>(`users/${user.uid}`).valueChanges();}
          else {
          return of(null);
          console.log('Couldnt login');
        }
      })
    );
  }

    // SIGN IN USING GOOGLE ACCOUNT
    async googleSignin() {
      const provider = new auth.GoogleAuthProvider();
      const credential = await this.afAuth.signInWithPopup(provider);
      return this.updateUserData(credential.user);
    }

    // UPDATE TO GO BACK TO LOGIN PAGE
    async signOut() {
      await this.afAuth.signOut();
      return this.router.navigate(['/']);
    }

    private updateUserData(user) {
      // Sets user data to firestore on login
      const userRef: AngularFirestoreDocument<User> = this.afs.doc(`users/${user.uid}`);
      const data = {
        uid: user.uid,
        email: user.email,
        displayName: user.displayName,
        photoURL: user.photoURL
      };
      return userRef.set(data, { merge: true });
    }


  // login(email, pw) {
  //   this.auth.signInWithEmailAndPassword(email, pw)
  //   .then((res) => {
  //     this.router.navigate(['design']);
  //     return true;
  //   })
  //   .catch(err => {
  //     alert(err.message);
  //     return false;
  //   });
  // }

  // logout() {
  //   this.auth.signOut();
  // }
}

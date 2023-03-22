import * as firebase from 'firebase';
export class User {
  displayName: string;
  email: string;
  photoURL: string;
  uid: string;
  initail: string;

  initial: string;

  constructor(user: firebase.User) {
    this.uid = user.uid;
    this.displayName = user.displayName;
    this.email = user.email;
    this.photoURL = user.photoURL;
    this.initial = user.displayName.slice(0, 1);
  }

}

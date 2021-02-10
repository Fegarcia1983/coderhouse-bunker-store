import firebase from 'firebase/app'
import '@firebase/firestore'

const app = firebase.initializeApp({
   apiKey: "AIzaSyCtX41AnxgdRbfdwe9ce-qdcV4fuoebF5o",
    authDomain: "bunker-store.firebaseapp.com",
    projectId: "bunker-store",
    storageBucket: "bunker-store.appspot.com",
    messagingSenderId: "189392463270",
    appId: "1:189392463270:web:d2ddc891af59a500f51b67"
})

export function getFirebase() {
   return app
}

export function getFirestore() {
   return firebase.firestore(app)
}
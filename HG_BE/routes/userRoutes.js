import {db} from firebase.js
import { collection, addDoc } from "firebase/firestore"

//Add new user to the data-base
export default async function NewUser(uid, firstname, lastname){
 try{   
    const docRef =await addDoc(collection(db, "users"),{
        uid: uid,
        firstname:firstname,
        lastname:lastname
    });
    console.log("New User recorded with ID:", docRef.id)
}
catch(e){
    console.error("Error adding new user:", e)
}
}
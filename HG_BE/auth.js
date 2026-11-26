import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword
} from 'firebase/auth';
import Firebase from firebase.js


//Login
export async function signInWithCredentials(email, password) {
  try {
    return setPersistence(firebaseAuth, browserSessionPersistence).then(async () => {
      const userCredential = await signInWithEmailAndPassword(
        Firebase,
        email,
        password,
      );
      return {
        success: true,
        user: userCredential.user,
        error: null,
      };
    });
  } catch (error) {
    return {
      success: false,
      user: null,
      error: error.message || 'Failed to sign in with email/password',
    };
  }
}

// Sign out
export const firebaseSignOut = async () => {
  try {
    await signOut(firebaseAuth);
    return { success: true };
  } catch (error) {
    return {
      success: false,
      error: error.message,
    };
  }
};

//Sign up

    export const firebaseSignUp =async (email, password)=>{ try
         {
  await createUserWithEmailAndPassword(auth, email, password);
  return {success: true}
    }
    catch(error){
        return{
            success:false,
            error: error.message,
        }
    }
};

// Auth state observer
export const onAuthStateChanged = (callback) => {
  return firebaseAuth.onAuthStateChanged(callback);
};
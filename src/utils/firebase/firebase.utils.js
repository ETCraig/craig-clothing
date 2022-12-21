import { initializeApp } from 'firebase/app';
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAG48AKI3ByN67BJCX-75djqvlt7vC7x7I",
    authDomain: "craig-clothing-db.firebaseapp.com",
    projectId: "craig-clothing-db",
    storageBucket: "craig-clothing-db.appspot.com",
    messagingSenderId: "106833478323",
    appId: "1:106833478323:web:141174089d8b7f298ee6c6"
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
    prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
    const userDocRef = doc(db, 'users', userAuth.uid);

    const userSnapshot = await getDoc(userDocRef);

    if (!userSnapshot.exists()) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await setDoc(userDocRef, {
                displayName, email, createdAt
            });
        } catch (error) {
            console.log('Error while creating user:', error.message);
        }
    }

    return userDocRef;
}
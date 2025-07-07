import { db } from './firebase';
import { collection, addDoc, getDocs } from 'firebase/firestore';

const userCollection = collection(db, 'users');

export async function saveUser(data) {
  const docRef = await addDoc(userCollection, data);
  return docRef.id;
}

export async function fetchUsers() {
  const snapshot = await getDocs(userCollection);
  return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
}

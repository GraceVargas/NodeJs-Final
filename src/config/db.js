import 'dotenv/config';
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { envs } from './envs.js';

const { apiKey, appId, authDomain, messagingSenderId, projectId, storageBucket} = envs.database;

const firebaseConfig = {
  apiKey,
  authDomain,
  projectId,
  storageBucket,
  messagingSenderId,
  appId
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db }
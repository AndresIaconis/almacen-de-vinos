import { initializeApp } from "firebase/app";
import {getFirestore} from  "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyAUvusa3Gtqxl8It8VB_-4KzQbTDHa-Re4",
  authDomain: "almacen-de-vinos-904a1.firebaseapp.com",
  projectId: "almacen-de-vinos-904a1",
  storageBucket: "almacen-de-vinos-904a1.appspot.com",
  messagingSenderId: "444225289859",
  appId: "1:444225289859:web:452721a968ce753b4aa5b6"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
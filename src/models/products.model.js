import { db } from '../config/db.js';
import { collection, getDoc, getDocs, addDoc, deleteDoc, doc } from 'firebase/firestore';

const productsCollection = collection(db, 'products');

export async function getProductById(id) {
    try {
        const productDoc = await getDoc(doc(productsCollection, id));
        if (productDoc.exists()) {
            return productDoc.data();
        } else {
            return null;
        }
    } catch (error) {
        throw new Error("Error", error.message);
    }
}

export async function getAllProducts() {
    try {
        const querySnapshot = await getDocs(productsCollection);
        const products = [];
        querySnapshot.forEach(doc => {
        products.push({ id: doc.id, ...doc.data() });
    })
        return products;
    } catch (error) {
        throw new Error("Error", error.message);
    }
}

export async function saveProduct(nombre, precio, categoria, disponible) {
    try {
        const product = { nombre, precio, categoria, disponible };
        await addDoc(productsCollection, product);
    } catch (error) {
        throw new Error("Error", error.message)
    }

}

export async function deleteProduct(id) {
    try {
        await deleteDoc(doc(productsCollection, id))
    } catch (error) {
        throw new Error("Error", error.message)
    }
}
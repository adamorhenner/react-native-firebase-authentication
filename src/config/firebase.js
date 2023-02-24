import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from "firebase/auth/react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const firebaseConfig = {
    apiKey: "AIzaSyBCKZaWaHHf-3nOpB95l8R44Uyf9aoYoqQ",
    authDomain: "alura-esporte-cd17c.firebaseapp.com",
    projectId: "alura-esporte-cd17c",
    storageBucket: "alura-esporte-cd17c.appspot.com",
    messagingSenderId: "581961871452",
    appId: "1:581961871452:web:74307252c92252f6863699",
    measurementId: "G-MMKS6XTZTL"
};

const app = initializeApp(firebaseConfig);

const auth = initializeAuth(app, {
    persistence: getReactNativePersistence(AsyncStorage)
})

export { auth };
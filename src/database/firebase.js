import {initializeApp} from 'firebase'

const app = initializeApp({
    apiKey: "AIzaSyAH-vGonpuHgFuuKSeYhMrX2h1-a0jfHr8",
    authDomain: "catalogo-filmes-3b124.firebaseapp.com",
    databaseURL: "https://catalogo-filmes-3b124.firebaseio.com",
    projectId: "catalogo-filmes-3b124",
    storageBucket: "catalogo-filmes-3b124.appspot.com",
    messagingSenderId: "786899572320",
    appId: "1:786899572320:web:73268ce46d50072235d505",
    measurementId: "G-LTJCHHGKRX"
})

export const db = app.database()
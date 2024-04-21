
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";//gets the firebase library
  import { 
    getDatabase, 
    ref, 
    onValue} from "https://www.gstatic.com/firebasejs/10.8.0/firebase-database.js";//gets firebase library for the database
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  //these credentials are from the database
  const firebaseConfig = {
    apiKey: "AIzaSyCFTxmGzicUSPiTUIMcIFSsFG1bIfuNO5Y",
    authDomain: "testfirebase-74c01.firebaseapp.com",
    databaseURL: "https://testfirebase-74c01-default-rtdb.firebaseio.com",
    projectId: "testfirebase-74c01",
    storageBucket: "testfirebase-74c01.appspot.com",
    messagingSenderId: "134268656127",
    appId: "1:134268656127:web:4b63a522615f0929326fca"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  const database = getDatabase();

  const messages = ref(database, "/messages");

  onValue(
    messages, 
    (snapshot) => {

    console.log(snapshot);
    
    const ul = document.getElementById('messages');
    ul.replaceChildren();

    snapshot.forEach((childSnapshot) => {
        const childKey = childSnapshot.key;
        const childData = childSnapshot.val();
        
        console.log(childKey);
        console.log(childData);

        

        const text = document.createTextNode(childData.message);
        const li = document.createElement("li");

        li.appendChild(text);
        ul.appendChild(li);

  });
    
    //prints a snapshot of the database to the 
  }, 
  {

    onlyOnce: false,

  });

const firebaseConfig = {
    apiKey: "epic-a727f.firebaseapp.com",
    databaseURL: "your-database-url",
    projectId: "epic-a727f",
    storageBucket: "epic-a727f.firebasestorage.app",
    messagingSenderId: "506761814699",
    appId: "1:506761814699:web:18246ad3aa08c9b3df0dee"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const messagesRef = db.collection('messages');

document.getElementById('send-button').addEventListener('click', sendMessage);

function sendMessage() {
    const message = document.getElementById('message-input').value;
    messagesRef.add({ text: message, timestamp: firebase.firestore.FieldValue.serverTimestamp() });
    document.getElementById('message-input').value = '';
}

messagesRef.orderBy('timestamp').onSnapshot(snapshot => {
    const messages = snapshot.docs.map(doc => doc.data());
    document.getElementById('messages').innerHTML = messages.map(message => `<div>${message.text}</div>`).join('');
});

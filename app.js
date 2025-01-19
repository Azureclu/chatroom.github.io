const firebaseConfig = {
    apiKey:your-auth-domain",
    databaseURL: "your-database-url",
    projectId: "your-project-id",
    storageBucket: "your-storage-bucket",
    messagingSenderId: "your-messaging-sender-id",
    appId: "your-app-id"
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

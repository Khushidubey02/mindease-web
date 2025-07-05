
import { db } from './firebase.js';
import { collection, addDoc, serverTimestamp, query, orderBy, onSnapshot } from "firebase/firestore";


const inputField = document.getElementById('inputField');
const sendButton = document.getElementById('sendButton');
const messagesContainer = document.getElementById('messages');


function addMessage(message, isUser) {
  const messageElement = document.createElement('div');
  messageElement.classList.add('message', isUser ? 'user' : 'bot');
  messageElement.innerText = message;
  messagesContainer.appendChild(messageElement);
  messagesContainer.scrollTop = messagesContainer.scrollHeight;
}


async function saveMessage(sender, message) {
  try {
    await addDoc(collection(db, "chats"), {
      sender: sender,
      message: message,
      timestamp: serverTimestamp()
    });
    console.log("✅ Message saved:", sender, message);
  } catch (error) {
    console.error("❌ Error saving message:", error);
  }
}


function botReply(userMessage) {
  const reply = "Thanks for your message! 😊";
  saveMessage("bot", reply);
}


sendButton.addEventListener('click', () => {
  const userInput = inputField.value.trim();

  if (userInput !== '') {
    saveMessage("user", userInput);   
    inputField.value = '';            

    setTimeout(() => {
      botReply(userInput);            
    }, 800);
  }
});


document.addEventListener('DOMContentLoaded', () => {
  const chatQuery = query(collection(db, "chats"), orderBy("timestamp"));

  onSnapshot(chatQuery, (snapshot) => {
    messagesContainer.innerHTML = ''; 

    snapshot.forEach((doc) => {
      const data = doc.data();
      const isUser = data.sender === 'user';
      addMessage(data.message, isUser); 
    });

    messagesContainer.scrollTop = messagesContainer.scrollHeight;
  });
});

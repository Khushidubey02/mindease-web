
const chatMessages = document.querySelector('.chat-messages');
const inputField = document.querySelector('.chat-input-area .input-field');
const sendButton = document.querySelector('.send-btn');


function addMessage(text, isUser = true) {
    const messageDiv = document.createElement('div');
    messageDiv.classList.add('message');
    messageDiv.classList.add(isUser ? 'user-message' : 'bot-message');
    
    const para = document.createElement('p');
    para.textContent = text;

    messageDiv.appendChild(para);
    chatMessages.appendChild(messageDiv);

    
    chatMessages.scrollTop = chatMessages.scrollHeight;
}


sendButton.addEventListener('click', () => {
    const userInput = inputField.value.trim();

    if (userInput !== '') {
        addMessage(userInput, true); 
        inputField.value = ''; 

        
        setTimeout(() => {
            botReply(userInput);
        }, 800);
    }
});

function botReply(userInput) {
  
    const typingMessage = document.createElement('div');
    typingMessage.classList.add('message', 'bot-message');
    typingMessage.innerHTML = "<p><i>Typing...</i></p>";
    chatMessages.appendChild(typingMessage);
    chatMessages.scrollTop = chatMessages.scrollHeight;

    
    setTimeout(() => {
        typingMessage.remove(); 

        const replies = [
            "I'm here for you. 💜",
            "Would you like to try a breathing exercise?",
            "I'm listening. Please tell me more.",
            "Take a deep breath. You're doing great!",
            "That's okay. Let it out. I'm right here with you."
        ];

        const randomReply = replies[Math.floor(Math.random() * replies.length)];
        addMessage(randomReply, false);
    }, 1200); 
}


inputField.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        sendButton.click(); 
        e.preventDefault(); 
    }
});

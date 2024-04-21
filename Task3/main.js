const textError = document.querySelector('.error');
const input = document.getElementById('message-input');
const btn = document.getElementById('send-button');
const location = document.getElementById('location_chat');
const chatMessages = document.querySelector('.chat-messages');

const serverURL = 'wss://echo-ws-service.herokuapp.com/';
const webSocket = new WebSocket(serverURL);

btn.addEventListener('click', () =>{
    const message = input.value;

    if(message ==""){
        textError.innerHTML = "Ошибка";
    } else {
        webSocket.send(message);
        writeToScreen(`You: ${message}`, 'flex-end');
        input.value = "";
    }

});

webSocket.onopen = function(evt) {
    console.log("CONNECTED");
};
webSocket.onmessage = function(evt) {
    writeToScreen('<span style="color: blue;">RESPONSE: ' + evt.data+'</span>');
};
webSocket.onerror = function(evt) {
    writeToScreen('<span style="color: red;">ERROR:</span> ' + evt.data);
};




function writeToScreen(message, position = 'flex-end'){
    const chatEl = document.createElement('p');
    chatEl.classList.add('chat-messages');
    chatEl.style.alignSelf = position;
    chatMessages.innerHTML = message;
    chatMessages.appendChild(chatEl);
};


const error = (err) =>{
    textError.innerHTML = "Allow access to your geolocation";
};

const success = (position) =>{
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const link = `https://www.openstreetmap.org/#map=18/${latitude}/${longitude}`;
    writeToScreen(`<a href = '${link}' target = '_blanc'>Your geolocation</a>`);
};


location.addEventListener('click', () => {
    if(!navigator.geolocation) {
        textError.innerHTML = "This function is not supported by your browser";
     }
    else{
        navigator.geolocation.getCurrentPosition(success,error);
    }
});



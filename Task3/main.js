const input = document.getElementById('message-input');
const btn = document.getElementById('send-button');
const chatMessages = document.querySelector('.chat-messages');
const textError = document.querySelector('error');
const location = document.querySelector('.location_chat');

const serverURL = "wss://echo-ws-service.herokuapp.com"

webSocket = new WebSocket(serverURL);
webSocket.onopen = function(evt) {
    console.log("CONNECTED");
};

webSocket.onmessage = function(evt) {
    writeToScreen(
    '<span style="color: blue;">RESPONSE: ' + evt.data+'</span>'
    );
};
webSocket.onerror = function(evt) {
    writeToScreen(
    '<span style="color: red;">ERROR:</span> ' + evt.data
    );
};

btn.addEventListener('click', () =>{
    const massege = input.value;

    if(message ==""){
        textError.innerHTML = "Ошибка";
    } else {
        webSocket.send(massege);
        writeToScreen(`You: ${massege}`);
        input.value = "";
    }

    });

function writeToScreen(massege, position = 'flex-end'){
    let chatEl = `<p class = "chat-messages" style = "align-self: ${position}" ${massege}></p>`;
    chatMessages.innerHTML += chatEl;
};


const error = () =>{
    textError.innerHTML = "Allow access to your geolocation";
};

const success = (position) =>{
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;
    let link = `https://www.openstreetmap.org/#map=18/${latitude}/${longitude}`;
    writeToScreen(`<a href = '${link}' target = '_blanc'>Your geolocation</a>`);
};


location.addEventListener('click', () =>{
    if(!navigator.geolocation){
        textError.innerHTML = "This function is not supported by your browser";
     }
    else{
        navigator.geolocation.getCurrentPosition(success,error);
    }
});



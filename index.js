var inputTextElement = document.querySelector("#input");
var translateButtonElement = document.querySelector("#button");
var outputTextElement = document.querySelector("#output");

const translateApiURL = "https://api.funtranslations.com/translate/groot.json";

function URL(text) {
    return translateApiURL + "?" + "text=" + text;
}

function errorHandle(error) {
    alert("sorry, server is not responding", error);
}

function clickEventHandler() {

    var inputText = inputTextElement.value;
    var finalURL = URL(inputText);
    fetch(finalURL)
        .then(response => response.json())
        .then(json => {outputTextElement.innerText = json.contents.translated})
        .catch(errorHandle());
}


translateButtonElement.addEventListener("click", clickEventHandler);

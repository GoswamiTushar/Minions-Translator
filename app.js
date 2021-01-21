 var translateButton = document.querySelector("#btn-translate");
 var textInput = document.querySelector("#txt-input");
 var outputBox = document.querySelector("#output");

 var serverLink = "https://api.funtranslations.com/translate/minion.json"; // enter the link

 function getTranslationURL(text){
 	return serverLink + "?" + "text=" + text
 };

 function errorHandler(error){
 	console.log("error occured", error);
 	alert("Something wrong with server! Try again after some time");
 }

 function clickHandler(){
 	console.log("Button Clicked")
 	var inputText = textInput.value;

 	// calling server for processing

 	fetch(getTranslationURL(inputText))
 	.then(response => response.json())
 	.then(json =>{
 		var translatedText = json.contents.translated;
 		outputBox.innerText = translatedText;
 	})
 	.catch(errorHandler)
 }

translateButton.addEventListener("click", clickHandler);
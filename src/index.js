function displayPoem(response) {

  console.log("poem generated");
  new Typewriter("#poem", {
  strings: response.data.answer,
  autoStart: true,
  delay : 1,
  cursor : "",
});

}






function generatorPoem (event)
{ event.preventDefault();

  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "111bb2a33af58b460tdbf1o5b48a673e";
  let prompt = `User instructions : Generate an Arabic poem about ${instructionsInput.value}`;
  let context = "You are a romantic Arabic poem expert who loves to writes short poems. Your mission is to generate a four different line of Arabic poem  and in Modern Standard Arabic. Make sure to follow the user instrauctions. Output exactly 4 separate lines.Each line must be wrapped in its own HTML paragraph tag: <p>...</p>. The text direction must be right-to-left (RTL) so Arabic punctuation appears on the left side of the line. Sign the poem with 'SheCodes AI' inside a <strong> element and italic font at the end of the poem. "; 
 
 

 
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;
   
  console.log("Generating poem");
  console.log(`Prompt: ${prompt}`);
  console.log(`Context: ${context}`);
  axios.get(apiUrl).then(displayPoem);
  
  
  
  
  
  
 



}


let poemFormElement = document.querySelector("#poem-generator-form");
 poemFormElement.addEventListener("submit", generatorPoem);


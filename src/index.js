function generatorPoem (event)
{ event.preventDefault();

  
   new Typewriter("#poem", {
  strings: "يا لَيلُ، طُولُكَ أرهَقَ القَلْبَ وَالعَيْنَا",
  autoStart: true,
  delay : 1,
  cursor : "",
});



}


let poemFormElement = document.querySelector("#poem-generator-form");
 poemFormElement.addEventListener("submit", generatorPoem);


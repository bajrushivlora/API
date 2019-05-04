window.addEventListener('load', ()=> {

   proxy = 'https://cors-anywhere.herokuapp.com/';
   entryBox = document.querySelector('.entry');
   yourname = document.querySelector('.name');
   namedefinition = document.querySelector('.namedefinition');
   sentenceexample = document.querySelector('.example');
   thumbsup = document.querySelector('.thumbsup');
   thumbsdown = document.querySelector('.thumbsdown');
   button = document.querySelector('.go');

   let entername;
      
   const getName = (event) => {
      event.preventDefault();
      entername = document.querySelector('.entername').value;

      fetch(`${proxy}http://api.urbandictionary.com/v0/define?term=${entername}`)
         .then(response => {
            return response.json();
         })
         .then(data => {
            console.log(data.list[1]);
            
            document.querySelector('.container').style.visibility = "visible";
            // document.querySelector('.container2').style.visibility = "visible";

            const { word, definition, example, thumbs_up, thumbs_down } = data.list[1];

            // ======== WHAT TO DO ========
            // remove open bracket, and replace with <span>
            // remove the closing bracket, and replace with </span>
            // use this to replace the brackets:::::: /[\[\]']+/g;
            // this works:::: const definition_trimmed = definition.replace(/[\[\]']+/g,'');
           
            
            // const definition_trimmed = definition.replace(/[\[\]']+/g,'');
            // const example_trimmed = example.replace(/[\[\]']+/g,'');

            let blue_def = definition.replace(/\[/g, '<span class="maketextblue">').replace(/\]/g, '</span>');
            let blue_example = example.replace(/\[/g, '<span class="maketextblue">').replace(/\]/g, '</span>');
               
               yourname.textContent = word;
               namedefinition.innerHTML = blue_def;
               sentenceexample.innerHTML = blue_example;
               // thumbsup.textContent = thumbs_up;
               // thumbsdown.textContent = thumbs_down;
            })
         }

            entryBox.addEventListener('submit', getName);
});


window.addEventListener('load', ()=> {

   proxy = 'https://cors-anywhere.herokuapp.com/';
   entryBox = document.querySelector('.entry');
   yourname = document.querySelector('.name');
   namedefinition = document.querySelector('.namedefinition');
   sentenceexample = document.querySelector('.example');

   let entername;
      
   const getName = (event) => {
      event.preventDefault();
      entername = document.querySelector('.entry_entername').value;

      fetch(`${proxy}http://api.urbandictionary.com/v0/define?term=${entername}`)
         .then(response => {
            return response.json();
         })
         .then(data => {
            console.log(data.list[1]);

            const { word, definition, example } = data.list[1];
            
            const definition_trimmed = definition.replace(/[\[\]']+/g,'');
            const example_trimmed = example.replace(/[\[\]']+/g,'');

               yourname.textContent = word;
               namedefinition.innerHTML = definition_trimmed;
               sentenceexample.innerHTML = example_trimmed;

            })
            .catch(error => console.error(error));
         }

         entryBox.addEventListener('submit', getName);
});


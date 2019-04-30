window.addEventListener('load', ()=> {

   proxy = 'https://cors-anywhere.herokuapp.com/';
   entryBox = document.querySelector('.entry');
   yourname = document.querySelector('.name');
   namedefinition = document.querySelector('.namedefinition');
   sentenceexample = document.querySelector('.example');
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

            const { word, definition, example } = data.list[1];
                
               yourname.textContent = word;
               namedefinition.textContent = definition;
               sentenceexample.textContent = example;
      });
   }

   entryBox.addEventListener('submit', getName);
});

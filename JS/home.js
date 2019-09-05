const axios = require('axios');

let report = null;

window.addEventListener('DOMContentLoaded', (event) => {
    
    const postTips = document.getElementById('postTips');

    const getTips = () => {
        {
        
          
          
          
          var i = 0;
        
          // use axios to send an HTTP GET request to an API
          axios.get('http://numbersapi.com/42/math?callback=showNumber')
          .then(function (response) {

                report = response.data;
                postTips.textContent = response.data;





                

          })
         
         
          .catch(function (error) {
            console.log(error)
          })
         
         
          .finally(function () {
            console.log("finally")
          });
        
        
        }}

    
        getTips();

        
});
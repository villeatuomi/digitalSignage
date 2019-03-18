// Nämä ainakin vaaditaan ohjelman toimintaan

//npm install node-fetch
//npm install fs

//------------------------------------------------//

const fetch = require('node-fetch');
const fs = require('fs');

let date =  new Date();
let day = date.getDate();
let month = date.getMonth() + 1;
let year = date.getFullYear();
console.log(year + ' ' + month + ' ' + day);
let data = [];



fetch('https://www.sodexo.fi/ruokalistat/output/daily_json/16365/'+year+'/'+month+'/'+day+'/fi')
    .then(function(response) {
        if(response.ok) {
            return response.json();
        } else {
            throw new Error('Response not ok.');
        }
    })
    .then(function(myJson) {

        console.log(myJson.courses.length);
        myJson.courses.forEach((e) => data.push({name: e.title_fi, price: e.price}));
        console.log(data);

        // Datan tallennus tiedostoon food.txt
        fs.writeFile('/home/ville/public_html/Projektikansio/food.json', JSON.stringify(data), (err) => {
            if (err) throw err;

            console.log('Content saved');
            // Jos tallennus onnistuu
        });

        //console.log(JSON.stringify(myJson.data[0].name));
    })
    .catch(function(e) {
        console.log(`Error: ${e.message}`);
    });
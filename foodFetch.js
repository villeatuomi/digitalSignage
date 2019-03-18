const list = document.getElementById('foodList');

fetch('food.json')
    .then(function(response) {
        if(response.ok) {
            return response.json();
        } else {
            throw new Error('Response not ok.');
        }
    })
    .then(function(myJson) {

        console.log(myJson.length);
        myJson.forEach((e) => {
            console.log(e.name, e.price);
            let node = document.createElement("LI");
            let content = document.createTextNode(''+ e.name + ' - ' + e.price);
            console.log(content);
            node.appendChild(content);
            list.appendChild(node);
        });

    })
    .catch(function(e) {
        console.log(`Error: ${e.message}`);
    });
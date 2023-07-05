const output=document.querySelector('#output')

var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({
  "id": 2,
  "label": "Yamaha 900",
  "price": 4150
});

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch("http://localhost:3000/moto/add", requestOptions)
  .then(response => response.json())
  .then(result => {
    console.log(result);
    output.innerHTML=JSON.stringify(result,null,3)
})
  .catch(error => console.log('error', error));
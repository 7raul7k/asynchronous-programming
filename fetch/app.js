fetch("https://dog.ceo/api/breeds/list/all")
.then(data=>{


    
    return data.json();
}).then(res=>{


     console.log(res);
})
// fetch(url)
//   .then(response => {
//     console.log(response.status); // HTTP status code
//     console.log(response.headers); // Headers object
//     return response.json(); // Parsing response as JSON
//   })
//   .then(data => {
//     // Handle the parsed response data
//   })
//   .catch(error => {
//     // Handle errors
//   });

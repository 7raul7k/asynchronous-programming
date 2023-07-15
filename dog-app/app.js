let breedsSelect = document.querySelector("#breeds");

fetch("https://dog.ceo/api/breeds/list/all")
  .then((data) => {
    return data.json();
  })
  .then((res) => {
    let data = res.message;
    for (let breed in data) {
      let option = createOption(breed);
      breedsSelect.appendChild(option);
    }
  });

function createOption(breed) {
  let option = document.createElement("option");

  option.textContent = breed;

  return option;
}

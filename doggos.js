const DOG_URL = "https://dog.ceo/api/";
const doggos = document.querySelector(".doggos");

function addNewDoggo() {

  var breedName = document.getElementById("breeds").value;
  if( breedName === ""){
    breedName = "breeds/image";
  }
  else{
    breedName = "breed/" + breedName + "/images";
  }

    console.log( DOG_URL + breedName + "/random" );
    const promise = fetch(DOG_URL + breedName + "/random");
    promise
      .then(function(response) {
        const processingPromise = response.json();
        return processingPromise;
      })
      .then(function(processedResponse) {
        const img = document.createElement("img");
        img.src = processedResponse.message;
        img.alt = "Cute doggo";
        img.className = "doggo-img";
        doggos.appendChild(img);
      });
  }

  document.querySelector(".add-doggo").addEventListener("click", addNewDoggo);
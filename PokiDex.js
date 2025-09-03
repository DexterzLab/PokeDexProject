



async function fetchData(){

    try{

        //request data and look at the variable in the search bar
        const pokemonName = document.getElementById("search-pokemonName").value.toLowerCase();
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);

        if(!response.ok){
            throw new Error("Could not fetch resource");
        }

        //store the data in variables to which we can then manipulate
        const data = await response.json();
        const pokemonSprite = data.sprites.front_default;
        const dataName = document.getElementById("pokemonName");
        const dataHP = document.getElementById("stats-hp");
        const dataAttack = document.getElementById("stats-attack");
        const dataDefence = document.getElementById("stats-defence");
        const dataSpeed = document.getElementById("stats-speed");

        //manipulate the elements in the html
        const imgElement = document.getElementById("pokemonImage");
        imgElement.src = pokemonSprite;
        imgElement.style.display = "block";

        //name
        dataName.innerText = data.name.toUpperCase();


        //stats section
        dataHP.innerText = data.stats[0].base_stat;
        dataAttack.innerText = data.stats[1].base_stat;
        dataDefence.innerText = data.stats[2].base_stat;
        dataSpeed.innerText = data.stats[5].base_stat;
        







    }
    catch(error){
        console.error(error);
    }
}

async function getTestData() {
    
    // fetch() returns a promise : it starts an HTTP request to get the data
    // await: pause ths line until the promise is reolves(the data is received)
    const response = await fetch("");

    // bind the response object with a json method this converts raw response into
    // useable JSON object
    const apiData = await response.json();

    //once (promises) fetch and conversion responses have resolved(fetch and json)
    // we return the final data
    return apiData;


}

async function startingPokemon(){

 try{

        //request data and look at the variable in the search bar
        const response = await fetch("https://pokeapi.co/api/v2/pokemon/pikachu");

        if(!response.ok){
            throw new Error("Could not fetch resource");
        }

         //store the data in variables to which we can then manipulate
        const data = await response.json();
        const pokemonSprite = data.sprites.front_default;
        const dataName = document.getElementById("pokemonName");
        const dataHP = document.getElementById("stats-hp");
        const dataAttack = document.getElementById("stats-attack");
        const dataDefence = document.getElementById("stats-defence");
        const dataSpeed = document.getElementById("stats-speed");

        //manipulate the elements in the html
        const imgElement = document.getElementById("pokemonImage");
        imgElement.src = pokemonSprite;
        imgElement.style.display = "block";

        //name
        dataName.innerText = data.name.toUpperCase();


        //stats section
        dataHP.innerText = data.stats[0].base_stat;
        dataAttack.innerText = data.stats[1].base_stat;
        dataDefence.innerText = data.stats[2].base_stat;
        dataSpeed.innerText = data.stats[5].base_stat;
        


        console.log(data.name);
        console.log(data.stats);

    }
    catch(error){
        console.error(error);
    }




}

// add event listener  to wait for page load before fetching the data
document.addEventListener("DOMContentLoaded", async () =>{

    // declare an empty array to store the api data
    // Try catch to catch error if the fetch request is unsuccessful
    try{
        apiData = await startingPokemon();



    }
    catch(error){
        console.log(error);
    }


    console.log(apiData);

})
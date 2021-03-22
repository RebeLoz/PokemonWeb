var nextPage = "";
var lastPage = "";
var currentApiURL = "";
function next(){
    currentApiURL=nextPage;
    FindPokemonsCharacters();
}
 
function back(){
    currentApiURL=lastPage;
    FindPokemonsCharacters();
}
 
function search(){
    currentApiURL="https://pokeapi.co/api/v2/pokemon?limit=100&offset=200";
    FindPokemonsCharacters();
}

function FindPokemonsCharacters()
{
    document.getElementById("results").innerHTML="";
    debugger;
    var data = undefined;
    var request = new XMLHttpRequest();
    request.open('GET',currentApiURL, true);
    request.send();
    request.onreadystatechange = function()
    {
        if(this.readyState == 4 && this.status == 200)
        {
            debugger;
            var resultRawData = this.response;
            data= JSON.parse(resultRawData);
            showApiData(data);
        }
    }
}
s
function showApiData(data)
{
    var element= document.getElementById("results");
    var countingHtml = document.createElement("h1");
    countingHtml.style="color: rgb(92, 217, 255)";
    countingHtml.innerHTML = "Cantidad de pokemones capturados:      " +data.count;
    element.appendChild(countingHtml);
    for (var i=0; i<data.results.length; i++)
    {
        var currentItem = data.results[i];
        var personaje = document.createElement('h2');
        personaje.style="color: rgb(92, 217, 255)";
        personaje.innerHTML = currentItem.content;
        var htmlStyle = "<hr/ ><strong>"+ currentItem.name+ "</strong><br/>"
        personaje.innerHTML=htmlStyle;
        document.getElementById('results').appendChild(personaje);
    }

    if(data.next != null){
        debugger;
        document.getElementById("buttonNext").style.display="inline";
        nextPage=data.next
    }
    else{
        document.getElementById("buttonNext").style.display="none";
    }
    if(data.previous != null){
        debugger;
        document.getElementById("buttonBack").style.display="inline";
        lastPage=data.previous
    }
    else{
        document.getElementById("buttonBack").style.display="none";
    }
}
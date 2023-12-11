const btn=document.getElementById('btn');
const jokepara=document.getElementById('joke');
const apikey="C099/gj/Fuik7dk4K2GDtg==S7Ru08s6LygZdNHf";
const options = {
  method: "GET",
  headers: {
   "X-Api-Key":apikey,
  },
}
const apiurl="https://api.api-ninjas.com/v1/dadjokes?limit=1"
 async function getJoke(){
    try {
        jokepara.innerText="Updating....";
        btn.disabled=true;
        btn.innerText="Loading";
        const response= await fetch(apiurl,options);
        const data= await response.json();
        jokepara.innerText=data[0].joke;
        btn.disabled=false;
        btn.innerText="Tell me a joke";  
    } catch (error) {
        jokepara.innerText="Un expected error happened,try again later....";
        
    }
    
}



btn.addEventListener('click',getJoke);
console.log("Harry Potter");

async function getCharactersId(){
    const response = await fetch('https://hp-api.onrender.com/api/characters')
    const characters = await response.json()
    return characters
}

async function main(){
    let ids = await getCharactersId()
    console.log(ids)
    let content = document.querySelector(".content");
    console.log(ids[0]['id'])
    for (let i = 0; i < ids.length; i++) {
        content.innerHTML += ids[i]['id'] + "<br>"
    }
    
}

main()
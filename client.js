console.log('Here are all the available people:', people);

$(handleReady);

function appendPeople(){
    for ( person of people){
        $('.container').append(`
        <div> 
        <img src = "https://github.com/${person.githubUsername}.png?size=250" alt="Profile image of ${people.name}">
        </div>
        
    `)
    }

}

let randomName = people[randomNumber(0,10)].name
function clickOnName(){

    $('#randomName').append(` 
    <h1>
    click on: ${randomName}
    </h1
    
    `)
    
}

function handleClick(){


}



function handleReady(){
console.log('jQready')

appendPeople();
//clickOn()

}

function randomNumber(min, max){
    

    return Math.floor(Math.random() * (1 + max - min) + min);

}
    console.log(randomNumber(0, 10))
   console.log( people[randomNumber(0,10)].name)
//for(let i = 0; i<people.length; i++)
    //console.log(randomNumber(people.name))
//console.log(randomNumber(people.name))

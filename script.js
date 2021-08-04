// TODO: add code here
window.addEventListenner('load',function(){
    fetch("https://handlers.education.launchcode.org/static/astronauts.json
    ").then(function(response){
        return Response.json();
    }).then(function(json){
        console.log(jason);
        const container = document.querySelector('#container');
        let astronauts = '';
        for (astronaut of json){
            astronaut +=`
            <div class = "astronaut">
            <div class = "bio">
            <h3> ${astronaut.firstName}${stronauts.lastName}</h3>
            <ul>
            <li>Hours in space: ${astronaut.hoursInSpace}</li>
            <li>Active: false</li>
            <li>Skills:Physician,Chemical Engineer</li?
            </ul>
            </div>
            <img class="avatar" src="images/mae-jemison.jpg">
         </div>
         
            
            
            
            `
        }











    })

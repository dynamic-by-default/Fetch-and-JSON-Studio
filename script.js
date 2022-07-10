// TODO: add code here
window.addEventListener("load", function() {
    fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function(response) {
        response.json().then(function(json) {
            const container = document.getElementById("container");
            let index = 0;
            let json = [];
            for (let index = 0; index < json.length; index++) {
                container.innerHTML +=
                <div class = "astronaut">
                    <div class = "bio">
                    <h3>$json{[index].firstname}</h3>
                    <ul>
                        <li>"Hours in space: " ${json[index].hoursInSpace}</li>
                        <li>"Active: " ${json[index].active}</li>
                        <li>"Skills: " ${json[index].skills}</li>
                    </ul>
                </div>
            }
        }
}
}
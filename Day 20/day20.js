let container = document.getElementById("container");

let jsonApi = async () => (await fetch("https://jsonplaceholder.typicode.com/posts")).json();
jsonApi()
    .then((value) => {
        value.forEach(element => {
            container.innerHTML = (`<p> UserId - ${element.userId} <br>
                                    Id - ${element.id} <br>
                                    Title - ${element.title} <br>
                                    Body - ${element.body} </p>`);
        });
    })
    .catch((error) => {
        console.log(error);
    })
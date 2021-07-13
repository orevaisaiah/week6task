const container = document.querySelector('#container');

fetch('https://randomuser.me/api/?results=30')
    .then((response) =>{
        return response.json()
    })
    .then((data) => {
        let users = data.results;
        return users.map((user) =>{

            const div = document.createElement('div');
            div.classList.add( "row", "div");
            const div1 = document.createElement('div');
            div1.classList.add( "col-3");
            const div2 = document.createElement('div');
            div2.classList.add( "col-8", "div2");
            const ul1 = document.createElement('ul');
            ul1.classList.add("list-unstyled");
            const ul2 = document.createElement('ul');
            ul2.classList.add("list-unstyled");
            const liul1 = document.createElement('li');

            const liul2 = document.createElement('li');
            const img = document.createElement('img');
            img.classList.add("rounded-circle")
            const p1 = document.createElement('p');
            p1.classList.add("fs-2","m-0", "p-0", "fw-bold")
            const p2 = document.createElement('p');
            p2.classList.add("p2");
            const p3 = document.createElement('p');
            p3.classList.add("p3", "p");
            const p4 = document.createElement('p');
            p4.classList.add( "p");
            const p5 = document.createElement('p');
            p5.classList.add("p5", "p");

            container.appendChild(div);
            div.appendChild(div1);
            div.appendChild(div2);
            div1.appendChild(ul1);
            ul1.appendChild(liul1);
            div2.appendChild(ul2);
            ul2.appendChild(liul2);

            let image = liul1.appendChild(img);
            let name = liul2.appendChild(p1);
            let userName = liul2.appendChild(p2);
            let email = liul2.appendChild(p3);
            let city = liul2.appendChild(p4);
            let nationality = liul2.appendChild(p5);

            image.src = user.picture.large;
            let firstName = user.name.first;
            let lastName = user.name.last;
            let userNames = user.login.username;
            let emails = user.email;
            let uCity  = user.location.city;
            let unationality = user.nat;
            name.innerHTML = `${firstName} ${lastName}`;
            userName.innerHTML = `${userNames}`
            email.innerHTML = `Email:<br>${emails}`;
            city.innerHTML = `City: ${uCity}`;
            nationality.innerHTML = `Nationality: ${unationality}`
        })
    })
    .catch(function (error) {
        console.log(error)
    });

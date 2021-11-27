"use strict"


window.onload = function() {
    function getParameter(parameterName) {
        let parameters = new URLSearchParams(window.location.search);
        return parameters.get(parameterName);
    }
    /*API for the User Info*/
    let file = `https://jsonplaceholder.typicode.com/users/${getParameter('userId')}`

    fetch(file)
        .then(x => x.json())
        .then(y => {
            document.getElementById('demo').innerHTML = `<div class="main">
                                                    <p><b>Name :</b> ${y.name}</p>
                                                    <p><b>UserName:</b> ${y.username}</p>
                                                    <p><b>Email : </b>${y.email}</p>
                                                    <p><b>Address : </b>${y.address.street}, ${y.address.city}, ${y.address.suite}, ${y.address.zipcode}</p>
                                                    <p><b>Phone : </b>${y.phone}</p>
                                                    <p><b>website : </b>${y.website}</p>
                                                    <p><b>Company : </b>${y.company.name}</p>
                                                    <p><i> ${y.company.catchPhrase}</i></p>
                                                    <p><i> ${y.company.bs}</i></p>
                                                    </div>`;

        })

    .catch(error => console.error('Error!!:', error))


    /*API for posts of specific User*/
    let file2 = `https://jsonplaceholder.typicode.com/posts?userId=${getParameter('userId')}`
    console.log(file2);
    fetch(file2)
        .then(a => a.json())
        .then(b => {

            let htmlcontent = "";
            for (let i = 0; i < b.length; i++) {
                let post = b[i];
                let posthtml = `<div class="main1">          
                                <p><b>ID</b> : ${post.id} </p>
                                <p><b>Title</b> : ${post.title} </p>
                                <p><b>Body</b> : ${post.body}</p>
                                </div>`;

                htmlcontent += posthtml;
                // $('.clicklink').click(function() {
                //     localStorage.setItem('theid', post.id);
                //     console.log(localStorage.getItem('theid'));;
                // });
            }


            document.getElementById("demo2").innerHTML = htmlcontent;
        })

}
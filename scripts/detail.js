"use strict"




//const urlParams = new URLSearchParams(window.location.search);
//const id = urlParams.get('id');


window.onload = function() {
    function getParameter(parameterName) {
        let parameters = new URLSearchParams(window.location.search);
        return parameters.get(parameterName);
    }

    setInterval(function() {
        $("#demo2").fadeToggle(2000);
    });

    let file = `https://jsonplaceholder.typicode.com/posts/${getParameter('id')}`


    /*API for the specific post*/
    fetch(file)
        .then(x => x.json())
        .then(y => {
            document.getElementById('demo').innerHTML = `<div class="main">
                                                        <p><b> User ID</b> : ${y.userId}</p>
                                                        <p><b>ID</b> : ${y.id}</p>
                                                        <p><b>Title</b> : ${y.title} </p>
                                                        <p><b>Body</b> : ${y.body}</p>
                                                        </div>`;

        })

    .catch(error => console.error('Error!!:', error))


    /* Call API for Comments of the specific post*/
    let file2 = `https://jsonplaceholder.typicode.com/comments?postId=${getParameter('id')}`
    fetch(file2)
        .then(a => a.json())
        .then(b => {

            let htmlcontent = "";
            for (let i = 0; i < b.length; i++) {
                let post = b[i];
                let posthtml = `<div class="main1">
                                        <p><b> Post ID</b> : ${post.postId}</p>
                                        <p><b>ID</b> : ${post.id}</p>
                                        <p><b>Name</b> : ${post.name} </p>
                                        <p><b>Email</b> : ${post.email}</p>
                                        <p><b>Body</b> : ${post.body}</p>
                                        </div>`;
                htmlcontent += posthtml;
            }
            document.getElementById("demo2").innerHTML = htmlcontent;
        })

    .catch(error => console.error('Error!!:', error))

}
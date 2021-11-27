"use strict"


window.onload = function() {



    let file = 'https://jsonplaceholder.typicode.com/posts'
    fetch(file)
        .then(x => x.json())
        .then(y => {
            console.log(y)
            let htmlcontent = "";
            for (let i = 0; i < y.length; i++) {
                let post = y[i];
                let posthtml = `<div class="main">
                                <p><b>User ID</b> : ${post.userId} <a target="_blank" href="users.html?userId=${post.userId}"><button> User info</button></a></p>

                                <p><b>ID</b> : ${post.id} <a id="clicklink" target="_blank" href="detail.html?id=${post.id}" ><button >Read more</button></a></p>

                                <p><b>Title</b> : ${post.title} </p>
                                <p><b>Body</b> : ${post.body}</p>
                                </div>`;

                htmlcontent += posthtml;
                // $('.clicklink').click(function() {
                //     localStorage.setItem('theid', post.id);
                //     console.log(localStorage.getItem('theid'));;
                // });
            }


            document.getElementById("demo").innerHTML = htmlcontent;
        })

    .catch(error => console.error('Error!!:', error))
}
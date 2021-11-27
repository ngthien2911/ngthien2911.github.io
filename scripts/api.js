// function loadDoc() {
//     let a = $('#url').val();

//     let b = $('#key').val();

//     const xhttp = new XMLHttpRequest();

//     xhttp.onload = function() {
//         let y = document.getElementById('object').value;
//         console.log(y);
//         let x = JSON.parse(this.responseText);
//         console.log(x);

//         if (!y) {
//             document.getElementById("demo").innerHTML = this.responseText;
//         } else { document.getElementById("demo").innerHTML = x[y]; }

//     }
//     xhttp.open("GET", a);
//     xhttp.setRequestHeader("X-HOSTFULLY-APIKEY", b);
//     xhttp.send();

// function myErrorDisplayer(some) {
//     document.getElementById("demo").innerHTML = some;
//   }

//   function myDisplayer(photos) {
//   let photosHTML="";
//   for (var i=0; i< photos.length;i++){
//   photosHTML += `<img src='${photos[i].thumbnailUrl}'>`;
//   console.log(photos[i].thumbnailUrl);
//   }
//     document.getElementById("demo").innerHTML =photosHTML ;
//   }


// function myErrorDisplayer(some) {
//     document.getElementById("demo").innerHTML = some;
// }


// let myPromise = new Promise(function(myResolve, myReject) {
//     let a = $('#url').val();

//     let b = $('#key').val();

//     let req = new XMLHttpRequest();
//     req.open('GET', "https://jsonplaceholder.typicode.com/photos");
//     xhttp.setRequestHeader("X-HOSTFULLY-APIKEY", b);
//     req.onload = function() {

//         if (req.status == 200) {
//             let myObject = JSON.parse(req.response);
//             myResolve(myObject);
//         } else {
//             myReject("File not Found");
//         }
//     };
//     req.send();
// });

// async function run() {
//     let result = await myPromise;
//     myDisplayer(result);
// }
// run();

// (async function(){ await run();})();

// myPromise.then(
//   function(value) {myDisplayer(value);},
//   function(error) {myErrorDisplayer(error);}
// );
// };


// async function myDisplay() {
//     let myPromise = new Promise(function(xulythanhcong, xulythatbai) {
//         xulythanhcong("I love you");
//     });

//     document.getElementById("demo").innerHTML = await myPromise;

// }



function hienKetqua(some) {
    document.getElementById("demo").innerHTML = some;
}

function wrongResult(result) {
    document.getElementById("demo").innerHTML = result;
}

// async function getFile() {
let myPromise = new Promise(function xuLy(xulythanhcong, xulythatbai) {
    // let a = $('#url').val();
    // let b = $('#key').val();
    let req = new XMLHttpRequest();

    req.open('GET', "https://api.hostfully.com/v2/properties/de7baaaf-119f-4b82-bd44-0dcbff5a7010");
    req.setRequestHeader("X-HOSTFULLY-APIKEY", "vySbkcmCNnItgX6s");
    // let x = JSON.parse(req.response);
    // console.log(x);
    req.onload = function() {
        let x = JSON.parse(req.response);
        console.log(x);
        if (req.status === 200) {
            xulythanhcong("THANH CONG ROI:  " + "<br>" + req.response);
        } else {
            xulythatbai("That bai roi nhe");
        }
    };
    req.send();
});
//     document.getElementById("demo").innerHTML = await myPromise;
// }

// async function myDisplay() {
//     let ketqua = await myPromise;
//     hienKetqua(ketqua);
// }
// myDisplay();

// (async function() {
//     await myPromise().catch((e) => {
//         console.error(e);
//         process.exit(1)
//     })
//     console.log('This will not be printed.');
// })()

// (async function() {
//     let ketqua = [];
//     try {
//         ketqua = await myPromise.catch(e => {
//             alert(e);
//             process.exit(1);
//         })
//         hienKetqua(ketqua);
//     } catch (error2) {
//         alert('error2');
//         console.error(error)
//         process.exit(1)
//     }
//     console.log('This will not be printed.');

// })()


(async function() {
    let ketqua = await myPromise.catch(e => {
        wrongResult(e);
        process.exit(1);
        wrongResult(ketqua);

    });

})()








// myPromise.then(
//     function(value) { hienKetqua(value); },
//     function(error) { wrongResult(error); }
// )
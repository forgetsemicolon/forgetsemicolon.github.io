(function() {
    'use strict';
    console.log('reading js');

    const myForm = document.querySelector("#myForm");
    const madlib = document.querySelector("#madlib");
    // let words = [];

    myForm.addEventListener("submit",function(event) {
        event.preventDefault();
        const formData = document.querySelectorAll("input[type=text]");
        processData(formData);
    });

    function processData(formData) {
        let emptyFields = 0;
        let words = [];
        for (var eachWord of formData) {
            if (eachWord.value) {
                words.push(eachWord.value);
                eachWord.value = "";
            }
            else {
                emptyFields++;
            }
        }

        if (emptyFields > 0) {
            madlib.innerHTML = "Please fill out the fields";
        }
        else {
            makeMadlib(words);
        }
    }





    // myForm.addEventListener("submit",function(event) {
    //     event.preventDefault();
    //     const formData = document.querySelectorAll("input[type=text]");
    //     let emptyFields = 0;

    //     for (let eachWord of formData) {
    //         if (eachWord.value) {
    //             words.push(eachWord.value);
    //             eachWord.value = "";
    //         }
    //         else{
    //             emptyFields++;
    //         }
    //     }

    //     makeMadlib(words);
    // })

    function makeMadlib(wordsArray) {
        var myText = `Here are the words: ${wordsArray[0]}, ${wordsArray[1]}, ${wordsArray[2]}, ${wordsArray[3]}`;
        madlib.innerHTML = myText;
    }




    // myForm.addEventListener('submit', function(event) {

    //     event.preventDefault();

    //     const noun1 = document.querySelector("#noun1").value;
    //     const noun2 = document.querySelector("#noun2").value;
    //     const adj = document.querySelector("#adj").value;
    //     const verb = document.querySelector("#verb").value;
    //     const formData = document.querySelectorAll("input[type=text]");

    //     if (noun1 && noun2 && adj && verb){
    //         let myText = `Here are the words: ${noun1}, ${noun2}, ${adj}, ${verb}`;
    //     }
    //     else {
    //         myText = "Please complete your form so that I can make your mad lib :)";
    //     }

    //     madlib.innerHTML = myText;

    //     for(let eachField of formData) {
    //         eachField.value = '';
    //     }
    // })

}());
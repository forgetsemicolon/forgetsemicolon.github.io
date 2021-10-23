(function() {
    'use strict';
    console.log('reading js');

    const myForm = document.querySelector("#myForm");
    const madlib = document.querySelector("#madlib");

    myForm.addEventListener("submit",function(event) {
        event.preventDefault();
        const formData = document.querySelectorAll("input[type=text]");
        processData(formData);
        document.getElementById('overlay').className = 'showing';
    });

    document.querySelector('.close').addEventListener('click', function(event) {
        event.preventDefault();
        document.getElementById('overlay').className = 'hidden';
    })

    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape') {
            document.getElementById('overlay').className = 'hidden';
        }
    })

    function makeMadlib(wordsArray) {
        var myText = `Here are the words: ${wordsArray[0]}, ${wordsArray[1]}, ${wordsArray[2]}, ${wordsArray[3]}, ${wordsArray[4]}`;
        var myText = `I have your kid. ${wordsArray[4]} was kidnapped from the ${wordsArray[0]} yesterday night while ${wordsArray[1]} with their pet ${wordsArray[2]}. You will only get your child back if you sponsor my trip to ${wordsArray[3]}`;
        madlib.innerHTML = myText;
    }

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
            console.log(words);
        }
    }

    // document.querySelector('.open').addEventListener('click', function(event) {
    //     event.preventDefault();
    //     document.getElementById('overlay').className = 'showing';
    // })

    // document.querySelector('.close').addEventListener('click', function(event) {
    //     event.preventDefault();
    //     document.getElementById('overlay').className = 'hidden';
    // })

    // document.addEventListener('keydown', function(event) {
    //     if (event.key === 'Escape') {
    //         document.getElementById('overlay').className = 'hidden';
    //     }
    // })

}());
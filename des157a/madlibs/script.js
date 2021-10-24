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

    function getImgURL(url) {
        return ("./images/" + url);
    }

    function makeMadlib(wordsArray) {
        // const myText = `Here are the words: ${wordsArray[0]}, ${wordsArray[1]}, ${wordsArray[2]}, ${wordsArray[3]}, ${wordsArray[4]}`;

        const myText = `I have your kid. ${wordsArray[4]} was kidnapped from the ${wordsArray[0]} yesterday night while ${wordsArray[1]} with their pet ${wordsArray[2]}. You will only get your child back if you sponsor my trip to ${wordsArray[3]}`;

        const myText1 = "I have your kid. ";

        madlib.innerHTML = myText1;

        for (let eachLetter of wordsArray[4]) {
            console.log("helloooo" + eachLetter);
            var img = document.createElement("img");
            img.src = getImgURL(`DES157-alpha-${eachLetter.toLowerCase()}.png`);
            console.log(img.src);
            madlib.appendChild(img);
        };

        const myText2 = " was kidnapped from the "

        madlib.innerHTML += myText2;

        for (let eachLetter of wordsArray[0]) {
            console.log("helloooo" + eachLetter);
            var img = document.createElement("img");
            img.src = getImgURL(`DES157-alpha-${eachLetter.toLowerCase()}.png`);
            console.log(img.src);
            madlib.appendChild(img);
        };

        const myText3 = " yesterday night while "

        madlib.innerHTML += myText3;

        for (let eachLetter of wordsArray[1]) {
            console.log("helloooo" + eachLetter);
            var img = document.createElement("img");
            img.src = getImgURL(`DES157-alpha-${eachLetter.toLowerCase()}.png`);
            console.log(img.src);
            madlib.appendChild(img);
        };

        const myText4 = " with their pet "

        madlib.innerHTML += myText4;

        for (let eachLetter of wordsArray[2]) {
            console.log("helloooo" + eachLetter);
            var img = document.createElement("img");
            img.src = getImgURL(`DES157-alpha-${eachLetter.toLowerCase()}.png`);
            console.log(img.src);
            madlib.appendChild(img);
        };

        const myText5 = ". You will only get your child back if you sponsor my trip to "

        madlib.innerHTML += myText5;

        for (let eachLetter of wordsArray[3]) {
            console.log("helloooo" + eachLetter);
            var img = document.createElement("img");
            img.src = getImgURL(`DES157-alpha-${eachLetter.toLowerCase()}.png`);
            console.log(img.src);
            madlib.appendChild(img);
        };

        const myText6 = "."

        madlib.innerHTML += myText6;

    }

    function processData(formData) {
        let emptyFields = 0;
        let words = [];
        for (let eachWord of formData) {
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
(function() {
    'use strict';
    console.log('reading js');

    const instructions = ["Let's start!", "Add 1-1/2 cups of milk in a saucepan", "Add 1/2 cup of rolled oats to it", "Let the oats cook in the milk for 5 minutes on medium heat", "Keep stirring", "Once the oats are cooked, take them off the heat and pour in a bowl", "Start by chopping a banana and adding it to the bowl", "Finely chop around 4-5 strawberries and add them to the bowl as well", "Add a handful of blueberries to the bowl", "Once all the toppings are added, spread a spoonful of your favorite peanut butter or any other nut butter.", "Lastly, top it off with as many cocoa nibs as you like!", "Enjoy! :)"];
    
    const next = document.querySelector('#next');
    const prev = document.querySelector('#prev');

    const milk = document.querySelector('#Milk_x5F_g');
    const oats = document.querySelector('#Oats_x5F_g');
    const pb = document.querySelector('#Pb_x5F_g');
    const strawberry = document.querySelector('#Straw_x5F_g');
    const blueberry = document.querySelector('#Blue_x5F_g');
    const banana = document.querySelector('#Banana_x5F_g');

    banana.style.opacity = 0;
    blueberry.style.opacity = 0;
    strawberry.style.opacity = 0;
    pb.style.opacity = 0;
    oats.style.opacity = 0;
    milk.style.opacity = 0;

    const inst = document.querySelector('#inst');

    let currentInst = 0;
    inst.innerHTML = instructions[currentInst];

    console.log(currentInst);

    next.addEventListener('click', nextInstruction);

    function nextInstruction() {
        currentInst++;

        if (currentInst >instructions.length-1) {
            currentInst = 0;
        }
        inst.innerHTML = instructions[currentInst];

        switch(currentInst) {
            case 0: banana.style.opacity = 0;
                    blueberry.style.opacity = 0;
                    strawberry.style.opacity = 0;
                    pb.style.opacity = 0;
                    oats.style.opacity = 0;
                    milk.style.opacity = 0;
                    break;
    
            case 1: banana.style.opacity = 0;
                    blueberry.style.opacity = 0;
                    strawberry.style.opacity = 0;
                    pb.style.opacity = 0;
                    oats.style.opacity = 0;
                    milk.style.opacity = 1;
                    break;
    
            case 2: banana.style.opacity = 0;
                    blueberry.style.opacity = 0;
                    strawberry.style.opacity = 0;
                    pb.style.opacity = 0;
                    oats.style.opacity = 1;
                    milk.style.opacity = 0;
                    break;
    
            case 3: banana.style.opacity = 0;
                    blueberry.style.opacity = 0;
                    strawberry.style.opacity = 0;
                    pb.style.opacity = 0;
                    oats.style.opacity = 1;
                    milk.style.opacity = 1;
                    break;
    
            case 4: banana.style.opacity = 0;
                    blueberry.style.opacity = 0;
                    strawberry.style.opacity = 0;
                    pb.style.opacity = 0;
                    oats.style.opacity = 1;
                    milk.style.opacity = 1;
                    break;
    
            case 5: banana.style.opacity = 0;
                    blueberry.style.opacity = 0;
                    strawberry.style.opacity = 0;
                    pb.style.opacity = 0;
                    oats.style.opacity = 1;
                    milk.style.opacity = 1;
                    break;
    
            case 6: banana.style.opacity = 1;
                    blueberry.style.opacity = 0;
                    strawberry.style.opacity = 0;
                    pb.style.opacity = 0;
                    oats.style.opacity = 0;
                    milk.style.opacity = 0;
                    break;
    
            case 7: banana.style.opacity = 0;
                    blueberry.style.opacity = 0;
                    strawberry.style.opacity = 1;
                    pb.style.opacity = 0;
                    oats.style.opacity = 0;
                    milk.style.opacity = 0;
                    break;
    
            case 8: banana.style.opacity = 0;
                    blueberry.style.opacity = 1;
                    strawberry.style.opacity = 0;
                    pb.style.opacity = 0;
                    oats.style.opacity = 0;
                    milk.style.opacity = 0;
                    break;
    
            case 9: banana.style.opacity = 0;
                    blueberry.style.opacity = 0;
                    strawberry.style.opacity = 0;
                    pb.style.opacity = 1;
                    oats.style.opacity = 0;
                    milk.style.opacity = 0;
                    break;
    
            //chocolate chip needed
            case 10: banana.style.opacity = 0;
                    blueberry.style.opacity = 0;
                    strawberry.style.opacity = 0;
                    pb.style.opacity = 0;
                    oats.style.opacity = 0;
                    milk.style.opacity = 0;
                    break;
    
            default: banana.style.opacity = 1;
                    blueberry.style.opacity = 1;
                    strawberry.style.opacity = 1;
                    pb.style.opacity = 1;
                    oats.style.opacity = 1;
                    milk.style.opacity = 1;
                    break;
        }
    }

    prev.addEventListener('click', prevInstruction);

    function prevInstruction() {
        currentInst--;

        if (currentInst < 0) {
            currentInst = instructions.length-1;
        }
        inst.innerHTML = instructions[currentInst];

        switch(currentInst) {
            case 0: banana.style.opacity = 0;
                    blueberry.style.opacity = 0;
                    strawberry.style.opacity = 0;
                    pb.style.opacity = 0;
                    oats.style.opacity = 0;
                    milk.style.opacity = 0;
                    break;
    
            case 1: banana.style.opacity = 0;
                    blueberry.style.opacity = 0;
                    strawberry.style.opacity = 0;
                    pb.style.opacity = 0;
                    oats.style.opacity = 0;
                    milk.style.opacity = 1;
                    break;
    
            case 2: banana.style.opacity = 0;
                    blueberry.style.opacity = 0;
                    strawberry.style.opacity = 0;
                    pb.style.opacity = 0;
                    oats.style.opacity = 1;
                    milk.style.opacity = 0;
                    break;
    
            case 3: banana.style.opacity = 0;
                    blueberry.style.opacity = 0;
                    strawberry.style.opacity = 0;
                    pb.style.opacity = 0;
                    oats.style.opacity = 1;
                    milk.style.opacity = 1;
                    break;
    
            case 4: banana.style.opacity = 0;
                    blueberry.style.opacity = 0;
                    strawberry.style.opacity = 0;
                    pb.style.opacity = 0;
                    oats.style.opacity = 1;
                    milk.style.opacity = 1;
                    break;
    
            case 5: banana.style.opacity = 0;
                    blueberry.style.opacity = 0;
                    strawberry.style.opacity = 0;
                    pb.style.opacity = 0;
                    oats.style.opacity = 1;
                    milk.style.opacity = 1;
                    break;
    
            case 6: banana.style.opacity = 1;
                    blueberry.style.opacity = 0;
                    strawberry.style.opacity = 0;
                    pb.style.opacity = 0;
                    oats.style.opacity = 0;
                    milk.style.opacity = 0;
                    break;
    
            case 7: banana.style.opacity = 0;
                    blueberry.style.opacity = 0;
                    strawberry.style.opacity = 1;
                    pb.style.opacity = 0;
                    oats.style.opacity = 0;
                    milk.style.opacity = 0;
                    break;
    
            case 8: banana.style.opacity = 0;
                    blueberry.style.opacity = 1;
                    strawberry.style.opacity = 0;
                    pb.style.opacity = 0;
                    oats.style.opacity = 0;
                    milk.style.opacity = 0;
                    break;
    
            case 9: banana.style.opacity = 0;
                    blueberry.style.opacity = 0;
                    strawberry.style.opacity = 0;
                    pb.style.opacity = 1;
                    oats.style.opacity = 0;
                    milk.style.opacity = 0;
                    break;
    
            //chocolate chip needed
            case 10: banana.style.opacity = 0;
                    blueberry.style.opacity = 0;
                    strawberry.style.opacity = 0;
                    pb.style.opacity = 0;
                    oats.style.opacity = 0;
                    milk.style.opacity = 0;
                    break;
    
            default: banana.style.opacity = 1;
                    blueberry.style.opacity = 1;
                    strawberry.style.opacity = 1;
                    pb.style.opacity = 1;
                    oats.style.opacity = 1;
                    milk.style.opacity = 1;
                    break;
        }
    }

}());
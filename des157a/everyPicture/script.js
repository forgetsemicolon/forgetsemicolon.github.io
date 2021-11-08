(function() {
    'use strict';
    console.log('reading js');

    const instructions = ["Here's what you need for this recipe!", "1-10. Add 1-1/2 cups of milk in a saucepan", "2-10. Add 1/2 cup of rolled oats to it", "3-10. Let the oats cook in the milk for 5 minutes on medium heat and stir continuously", "4-10. Once the oats are cooked, take them off the heat and pour in a bowl", "5-10. Start by chopping a banana and adding it to the bowl", "6-10. Finely chop around 4-5 strawberries and add them to the bowl as well", "7-10. Add a handful of blueberries to the bowl", "8-10. Once all the toppings are added, spread a spoonful of your favorite peanut butter or any other nut butter.", "9-10. Lastly, top it off with as many cacao nibs as you like!", "10-10. Enjoy! :)"];
    
    const next = document.querySelector('#next');
    const prev = document.querySelector('#prev');
    const gallery = document.querySelector('#gallery');
    const dark = document.querySelector('#dark');
    const light = document.querySelector('#light');
    const body = document.querySelector('body');

    const milk = document.querySelector('#Milk_x5F_g');
    const oats = document.querySelector('#Oats_x5F_g');
    const pb = document.querySelector('#Pb_x5F_g');
    const strawberry = document.querySelector('#Straw_x5F_g');
    const blueberry = document.querySelector('#Blue_x5F_g');
    const banana = document.querySelector('#Banana_x5F_g');
    const chips = document.querySelector('#Chips_x5F_g');
    const pan = document.querySelector('#Saucepan_x5F_g');
    const stove = document.querySelector('#Stove');
    const final = document.querySelector('#Final');
    const bowl = document.querySelector('#Bowl_x5F_g');
    const counter = document.querySelector('#Counter');

    banana.style.opacity = 0;
    blueberry.style.opacity = 0;
    strawberry.style.opacity = 0;
    pb.style.opacity = 0;
    oats.style.opacity = 0;
    milk.style.opacity = 0;
    chips.style.opacity = 0;
    pan.style.opacity = 1;
    stove.style.opacity = 1;
    final.style.opacity = 0;
    bowl.style.opacity = 0;
    counter.style.opacity = 1;

    const inst = document.querySelector('#inst');

    let currentInst = 0;
    inst.innerHTML = instructions[currentInst];

    console.log(currentInst);

    // if (currentInst == 0) {
    //     prev.style.opacity = 0;
    // }
    // else {
    //     prev.style.opacity = 1;
    // }

    // if (currentInst == instructions.length-1) {
    //     next.style.opacity = 0;
    // }

    next.addEventListener('click', nextInstruction);

    //for next button
    function nextInstruction() {

        currentInst++;

        if (currentInst > instructions.length-1) {
            currentInst = 0;
        }

        inst.innerHTML = instructions[currentInst];

        switch(currentInst) {
            case 0: banana.style.opacity = 1;
                    blueberry.style.opacity = 1;
                    strawberry.style.opacity = 1;
                    pb.style.opacity = 1;
                    oats.style.opacity = 1;
                    milk.style.opacity = 1;
                    chips.style.opacity = 1;
                    pan.style.opacity = 0;
                    stove.style.opacity = 0;
                    final.style.opacity = 0;
                    bowl.style.opacity = 0;
                    counter.style.opacity = 1;
                    prev.style.opacity = 0;
                    next.style.opacity = 1;
                    break;
    
            case 1: banana.style.opacity = 0;
                    blueberry.style.opacity = 0;
                    strawberry.style.opacity = 0;
                    pb.style.opacity = 0;
                    oats.style.opacity = 0;
                    milk.style.opacity = 1;
                    chips.style.opacity = 0;
                    pan.style.opacity = 1;
                    stove.style.opacity = 1;
                    final.style.opacity = 0;
                    bowl.style.opacity = 0;
                    counter.style.opacity = 1;
                    prev.style.opacity = 1;
                    next.style.opacity = 1;
                    break;
    
            case 2: banana.style.opacity = 0;
                    blueberry.style.opacity = 0;
                    strawberry.style.opacity = 0;
                    pb.style.opacity = 0;
                    oats.style.opacity = 1;
                    milk.style.opacity = 0;
                    chips.style.opacity = 0;
                    pan.style.opacity = 1;
                    stove.style.opacity = 1;
                    final.style.opacity = 0;
                    bowl.style.opacity = 0;
                    counter.style.opacity = 1;
                    prev.style.opacity = 1;
                    next.style.opacity = 1;
                    break;
    
            case 3: banana.style.opacity = 0;
                    blueberry.style.opacity = 0;
                    strawberry.style.opacity = 0;
                    pb.style.opacity = 0;
                    oats.style.opacity = 1;
                    milk.style.opacity = 1;
                    chips.style.opacity = 0;
                    pan.style.opacity = 1;
                    stove.style.opacity = 1;
                    final.style.opacity = 0;
                    bowl.style.opacity = 0;
                    counter.style.opacity = 1;
                    prev.style.opacity = 1;
                    next.style.opacity = 1;
                    break;
    
            case 4: banana.style.opacity = 0;
                    blueberry.style.opacity = 0;
                    strawberry.style.opacity = 0;
                    pb.style.opacity = 0;
                    oats.style.opacity = 1;
                    milk.style.opacity = 1;
                    chips.style.opacity = 0;
                    pan.style.opacity = 0;
                    stove.style.opacity = 0;
                    final.style.opacity = 0;
                    bowl.style.opacity = 1;
                    counter.style.opacity = 1;
                    prev.style.opacity = 1;
                    next.style.opacity = 1;
                    break;
    
            case 5: banana.style.opacity = 1;
                    blueberry.style.opacity = 0;
                    strawberry.style.opacity = 0;
                    pb.style.opacity = 0;
                    oats.style.opacity = 0;
                    milk.style.opacity = 0;
                    chips.style.opacity = 0;
                    pan.style.opacity = 0;
                    stove.style.opacity = 0;
                    final.style.opacity = 0;
                    bowl.style.opacity = 1;
                    counter.style.opacity = 1;
                    prev.style.opacity = 1;
                    next.style.opacity = 1;
                    break;
    
            case 6: banana.style.opacity = 0;
                    blueberry.style.opacity = 0;
                    strawberry.style.opacity = 1;
                    pb.style.opacity = 0;
                    oats.style.opacity = 0;
                    milk.style.opacity = 0;
                    chips.style.opacity = 0;
                    pan.style.opacity = 0;
                    stove.style.opacity = 0;
                    final.style.opacity = 0;
                    bowl.style.opacity = 1;
                    counter.style.opacity = 1;
                    prev.style.opacity = 1;
                    next.style.opacity = 1;
                    break;
    
            case 7: banana.style.opacity = 0;
                    blueberry.style.opacity = 1;
                    strawberry.style.opacity = 0;
                    pb.style.opacity = 0;
                    oats.style.opacity = 0;
                    milk.style.opacity = 0;
                    chips.style.opacity = 0;
                    pan.style.opacity = 0;
                    stove.style.opacity = 0;
                    final.style.opacity = 0;
                    bowl.style.opacity = 1;
                    counter.style.opacity = 1;
                    prev.style.opacity = 1;
                    next.style.opacity = 1;
                    break;
    
            case 8: banana.style.opacity = 0;
                    blueberry.style.opacity = 0;
                    strawberry.style.opacity = 0;
                    pb.style.opacity = 1;
                    oats.style.opacity = 0;
                    milk.style.opacity = 0;
                    chips.style.opacity = 0;
                    pan.style.opacity = 0;
                    stove.style.opacity = 0;
                    final.style.opacity = 0;
                    bowl.style.opacity = 1;
                    counter.style.opacity = 1;
                    prev.style.opacity = 1;
                    next.style.opacity = 1;
                    break;
    
            case 9: banana.style.opacity = 0;
                    blueberry.style.opacity = 0;
                    strawberry.style.opacity = 0;
                    pb.style.opacity = 0;
                    oats.style.opacity = 0;
                    milk.style.opacity = 0;
                    chips.style.opacity = 1;
                    pan.style.opacity = 0;
                    stove.style.opacity = 0;
                    final.style.opacity = 0;
                    bowl.style.opacity = 1;
                    counter.style.opacity = 1;
                    prev.style.opacity = 1;
                    next.style.opacity = 1;
                    break;

            case 10:banana.style.opacity = 0;
                    blueberry.style.opacity = 0;
                    strawberry.style.opacity = 0;
                    pb.style.opacity = 0;
                    oats.style.opacity = 0;
                    milk.style.opacity = 0;
                    chips.style.opacity = 0;
                    pan.style.opacity = 0;
                    stove.style.opacity = 0;
                    final.style.opacity = 1;
                    bowl.style.opacity = 0;
                    counter.style.opacity = 0;
                    prev.style.opacity = 1;
                    next.style.opacity = 0;
                    break;
    
            default: banana.style.opacity = 0;
                    blueberry.style.opacity = 0;
                    strawberry.style.opacity = 0;
                    pb.style.opacity = 0;
                    oats.style.opacity = 0;
                    milk.style.opacity = 0;
                    chips.style.opacity = 0;
                    pan.style.opacity = 0;
                    stove.style.opacity = 0;
                    final.style.opacity = 0;
                    bowl.style.opacity = 0;
                    counter.style.opacity = 0;
                    prev.style.opacity = 0;
                    next.style.opacity = 0;
                    break;
        }
    }

    //to enable 'next' on ArrowRight key
    document.addEventListener('keydown', function(event) {
        if (event.key === 'ArrowRight') {
            nextInstruction();
        }
    })

    
    prev.addEventListener('click', prevInstruction);

    //for prev button
    function prevInstruction() {

        currentInst--;

        if (currentInst < 0) {
            currentInst = instructions.length-1;
        }
        inst.innerHTML = instructions[currentInst];

        switch(currentInst) {
            case 0: banana.style.opacity = 1;
                    blueberry.style.opacity = 1;
                    strawberry.style.opacity = 1;
                    pb.style.opacity = 1;
                    oats.style.opacity = 1;
                    milk.style.opacity = 1;
                    chips.style.opacity = 1;
                    pan.style.opacity = 0;
                    stove.style.opacity = 0;
                    final.style.opacity = 0;
                    bowl.style.opacity = 0;
                    counter.style.opacity = 1;
                    prev.style.opacity = 0;
                    next.style.opacity = 1;
                    break;
    
            case 1: banana.style.opacity = 0;
                    blueberry.style.opacity = 0;
                    strawberry.style.opacity = 0;
                    pb.style.opacity = 0;
                    oats.style.opacity = 0;
                    milk.style.opacity = 1;
                    chips.style.opacity = 0;
                    pan.style.opacity = 1;
                    stove.style.opacity = 1;
                    final.style.opacity = 0;
                    bowl.style.opacity = 0;
                    counter.style.opacity = 1;
                    prev.style.opacity = 1;
                    next.style.opacity = 1;
                    break;
    
            case 2: banana.style.opacity = 0;
                    blueberry.style.opacity = 0;
                    strawberry.style.opacity = 0;
                    pb.style.opacity = 0;
                    oats.style.opacity = 1;
                    milk.style.opacity = 0;
                    chips.style.opacity = 0;
                    pan.style.opacity = 1;
                    stove.style.opacity = 1;
                    final.style.opacity = 0;
                    bowl.style.opacity = 0;
                    counter.style.opacity = 1;
                    prev.style.opacity = 1;
                    next.style.opacity = 1;
                    break;
    
            case 3: banana.style.opacity = 0;
                    blueberry.style.opacity = 0;
                    strawberry.style.opacity = 0;
                    pb.style.opacity = 0;
                    oats.style.opacity = 1;
                    milk.style.opacity = 1;
                    chips.style.opacity = 0;
                    pan.style.opacity = 1;
                    stove.style.opacity = 1;
                    final.style.opacity = 0;
                    bowl.style.opacity = 0;
                    counter.style.opacity = 1;
                    prev.style.opacity = 1;
                    next.style.opacity = 1;
                    break;
    
            case 4: banana.style.opacity = 0;
                    blueberry.style.opacity = 0;
                    strawberry.style.opacity = 0;
                    pb.style.opacity = 0;
                    oats.style.opacity = 1;
                    milk.style.opacity = 1;
                    chips.style.opacity = 0;
                    pan.style.opacity = 0;
                    stove.style.opacity = 0;
                    final.style.opacity = 0;
                    bowl.style.opacity = 1;
                    counter.style.opacity = 1;
                    prev.style.opacity = 1;
                    next.style.opacity = 1;
                    break;
    
            case 5: banana.style.opacity = 1;
                    blueberry.style.opacity = 0;
                    strawberry.style.opacity = 0;
                    pb.style.opacity = 0;
                    oats.style.opacity = 0;
                    milk.style.opacity = 0;
                    chips.style.opacity = 0;
                    pan.style.opacity = 0;
                    stove.style.opacity = 0;
                    final.style.opacity = 0;
                    bowl.style.opacity = 1;
                    counter.style.opacity = 1;
                    prev.style.opacity = 1;
                    next.style.opacity = 1;
                    break;
    
            case 6: banana.style.opacity = 0;
                    blueberry.style.opacity = 0;
                    strawberry.style.opacity = 1;
                    pb.style.opacity = 0;
                    oats.style.opacity = 0;
                    milk.style.opacity = 0;
                    chips.style.opacity = 0;
                    pan.style.opacity = 0;
                    stove.style.opacity = 0;
                    final.style.opacity = 0;
                    bowl.style.opacity = 1;
                    counter.style.opacity = 1;
                    prev.style.opacity = 1;
                    next.style.opacity = 1;
                    break;
    
            case 7: banana.style.opacity = 0;
                    blueberry.style.opacity = 1;
                    strawberry.style.opacity = 0;
                    pb.style.opacity = 0;
                    oats.style.opacity = 0;
                    milk.style.opacity = 0;
                    chips.style.opacity = 0;
                    pan.style.opacity = 0;
                    stove.style.opacity = 0;
                    final.style.opacity = 0;
                    bowl.style.opacity = 1;
                    counter.style.opacity = 1;
                    prev.style.opacity = 1;
                    next.style.opacity = 1;
                    break;
    
            case 8: banana.style.opacity = 0;
                    blueberry.style.opacity = 0;
                    strawberry.style.opacity = 0;
                    pb.style.opacity = 1;
                    oats.style.opacity = 0;
                    milk.style.opacity = 0;
                    chips.style.opacity = 0;
                    pan.style.opacity = 0;
                    stove.style.opacity = 0;
                    final.style.opacity = 0;
                    bowl.style.opacity = 1;
                    counter.style.opacity = 1;
                    prev.style.opacity = 1;
                    next.style.opacity = 1;
                    break;
    
            case 9: banana.style.opacity = 0;
                    blueberry.style.opacity = 0;
                    strawberry.style.opacity = 0;
                    pb.style.opacity = 0;
                    oats.style.opacity = 0;
                    milk.style.opacity = 0;
                    chips.style.opacity = 1;
                    pan.style.opacity = 0;
                    stove.style.opacity = 0;
                    final.style.opacity = 0;
                    bowl.style.opacity = 1;
                    counter.style.opacity = 1;
                    prev.style.opacity = 1;
                    next.style.opacity = 1;
                    break;

            case 10:banana.style.opacity = 0;
                    blueberry.style.opacity = 0;
                    strawberry.style.opacity = 0;
                    pb.style.opacity = 0;
                    oats.style.opacity = 0;
                    milk.style.opacity = 0;
                    chips.style.opacity = 0;
                    pan.style.opacity = 0;
                    stove.style.opacity = 0;
                    final.style.opacity = 1;
                    bowl.style.opacity = 0;
                    counter.style.opacity = 0;
                    prev.style.opacity = 1;
                    next.style.opacity = 0;
                    break;
    
            default: banana.style.opacity = 0;
                    blueberry.style.opacity = 0;
                    strawberry.style.opacity = 0;
                    pb.style.opacity = 0;
                    oats.style.opacity = 0;
                    milk.style.opacity = 0;
                    chips.style.opacity = 0;
                    pan.style.opacity = 0;
                    stove.style.opacity = 0;
                    final.style.opacity = 0;
                    bowl.style.opacity = 0;
                    counter.style.opacity = 0;
                    prev.style.opacity = 0;
                    next.style.opacity = 0;
                    break;
        }
    }

    //to enable 'prev' on ArrowLeft
    document.addEventListener('keydown', function(event) {
        if (event.key === 'ArrowLeft') {
            prevInstruction();
        }
    })

    //To display overlay on submit
    gallery.addEventListener("click",function(event) {
        event.preventDefault();
        
        document.getElementById('overlay').className = 'showing';

        document.querySelector('body').style.overflow = "hidden";
    });

    //To exit on pressing 'close' button
    document.querySelector('.close').addEventListener('click', function(event) {
        event.preventDefault();
        document.getElementById('overlay').className = 'hidden';

        document.querySelector('body').style.overflow = "auto";
    })

    //To exit to pressing ESC key
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape') {
            document.getElementById('overlay').className = 'hidden';

            document.querySelector('body').style.overflow = "auto";
        }
    })

    //To enable dark mode
    dark.addEventListener("click", function() {
            body.style.background = '#FFF';
            body.style.filter = 'invert(1) hue-rotate(210deg)';
    })
    light.addEventListener("click", function() {
	body.style.background = '#FFF';
	body.style.filter = 'none'
    })

}());
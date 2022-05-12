console.warn("Hey! get out of here! I don't want you seeing my terrible code!");
console.warn("also dont type 'thefunny()' in this console window")

let thefunnycount = 0

function thefunny()
{   
    switch(thefunnycount) {
        case 0:
            console.log("I told you nothings here, just close devtools and go away. dont type thefunny again. just go")
            thefunnycount = thefunnycount + 1
            break;
        case 1:
            console.log("Come on, i told you to leave!")
            thefunnycount = thefunnycount + 1
            break;
        case 2:
            console.log("Please, just leave.")
            thefunnycount = thefunnycount + 1
            break;
        case 3:
            console.warn("GOD DAMNIT, FUCKING LEAVE!")
            thefunnycount = thefunnycount + 1
            break;
        case 4:
            console.warn("Fine, do it again. i dare you.")
            thefunnycount = thefunnycount + 1
            break;
        case 5:
            window.location.replace("https://google.com");
            break;
    }    
}


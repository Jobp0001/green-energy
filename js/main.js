/* 
Declare variables:
masthead (HTML container storing 
the current slide - slide-show part)

slides (array of elements storing 
all slides - slide-show part)

buttons (collected list of 
3 buttons in array - main content hide/reveal part)

contents (array of 3 elements - contents 
in main content hide/reveal part)

container (HTML element that will get a content
from array contents)

i (variable to be used as index-pointer 
inside loops for slide-show part)

k (variable to be used as index-pointer
inside loops for hide/reveal content part) */

(function () {
   


/*
-------------------------------------
START CODING REVEAL-HIDE MAIN-CONTENT
-------------------------------------
*/

var buttons = document.querySelectorAll("main span");

var contents = [
        '<figure class="clearfix">' +
            '<img src="./img/ep.jpg" alt="hydro-plant">' +
            '<figcaption>Keeping in mind the end goal to meet long haul carbon decrease objectives and satisfy the requirement for developing vitality request, hurrying the sending of decentralization, digitalization and the zap of new vitality uses, for example, versatility, is basic. The Gathering has built up a model for a nation drove, multi-partner way to deal with embracing structures which would quicken the reception and sending of these patterns. Including strategy, foundation and plans of action, the structure approach depends on assembling partners and making a common vision and plan for execution. </figcaption>' +
        '</figure>',

         '<figure class="clearfix">' +
            '<img src="./img/sp.jpg" alt="hydro-plant">' +
            '<figcaption>The financial matters of sustainable power source are winding up progressively positive. In Australia and numerous different parts of the world, silicon sun based cells as of now command the housetop showcase. Housetop sunlight based power offers an inexorably shabby and productive approach to create electricity.But while extraordinary for rooftops, these silicon modules are misty and massive. To outline a sun oriented cell appropriate for windows, we need to think outside the box.When we put a sun based board on a rooftop, we need it to assimilate however much daylight as could reasonably be expected, with the goal that it can produce the greatest measure of energy. For a window, there is definitely an exchange off between retaining light to transform into power, and transmitting light so we can in any case observe through the window. </figcaption>' +
        '</figure>',

        '<figure class="clearfix">' +
            '<img src="./img/wm.jpg" alt="hydro-plant">' +
            '<figcaption>Indias southern territory of Tamil Nadu is a world pioneer with regards to inexhaustible energy.Its wind turbines have a joined introduced limit of 7.9 gigawatts (GW). This puts it in front of numerous nations viewed as champions of green power.For illustration, Sweden is expecting to wind up one of the primary nations to create 100% of its power from sustainable sources. Yet, it has a breeze control limit of 6.7GW, a tenth not as much as Tamil Nadu.And Denmark, considered by numerous as the origin of the cutting edge wind vitality industry, has a breeze control limit of 5.5GW.In reality, figures from the Worldwide Breeze Vitality Gathering demonstrate that there are just five European countries in addition to China, the US, Canada and Brazil that had bigger introduced wind-control limits than Tamil Nadu in 2017</figcaption>' +
        '</figure>'
];

var container = document.querySelector(".container");
container.innerHTML = contents[0];

function handleClick(ev) {
    ev.preventDefault();
    var target = ev.target;

    for (z = 0; z < buttons.length; z++) {
        if (buttons[z].hasAttribute("id")) {
            buttons[z].removeAttribute("id");
        }
    }

    if (ev.target.innerHTML === "Electricity") {
        container.innerHTML = contents[0];
    } else if (ev.target.innerHTML === "Solar") {
        container.innerHTML = contents[1];
    } else {
        container.innerHTML = contents[2];
    }

    ev.target.setAttribute("id", "active");
}

for (z = 0; z < buttons.length; z++) {
        buttons[z].addEventListener("click", handleClick);
}

}());
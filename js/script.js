var last = 0;
var contentObj = {

}
// Assignment
var container = document.createElement('div');
var content = document.createElement('div');
var btnsCont = document.createElement('div');
var btnUp = document.createElement('div');
var btnDown = document.createElement('div');
//classNames
container.className = 'container';
content.className = 'content'
btnsCont.className = 'btnsCont';
btnUp.Id = 'btnUp';
btnDown.Id = 'btnDown';
btnUp.className = 'btn';
btnDown.className = 'btn';

//misc

btnUp.innerHTML = '<i class="fa fa-angle-up" aria-hidden="true"></i>';
btnDown.innerHTML = '<i class="fa fa-angle-down" aria-hidden="true"></i>';


// Appending

var sliderIconsArr = [];
for (var i = 0; i < 7; i++) {
    sliderIcons = document.createElement('div');
    sliderIcons.className = 'sliderIcons';
    sliderIcons.setAttribute('data-value', i);
    container.appendChild(sliderIcons);
    sliderIconsArr[i] = sliderIcons;
}

container.insertBefore(content, container.childNodes[0]);
btnsCont.appendChild(btnUp)
btnsCont.appendChild(btnDown)
container.appendChild(btnsCont);
document.body.appendChild(container);
content = document.createElement('div');

function enlarge(arg) {
    content.className = 'content';
    container.removeChild(container.children[last]);
    container.insertBefore(content, arg);
    sliderIconsArr[last].style.display = 'block';
    content.style.display = 'block';
    arg.style.display = 'none';
    last = arg.getAttribute('data-value');
}

function fill() {
    content.innerHTML = 'fill is under constraction';
}

for (var i = 0; i < sliderIconsArr.length; i++) {
    sliderIconsArr[i].addEventListener('click', function() {
        enlarge(this);
        fill();
    })
}

function rollUp() {
    for (var i = 0; i < sliderIconsArr.length; i++) {
        if (sliderIconsArr[i].style.display == 'none') {
            last = sliderIconsArr[i].getAttribute('data-value');
            sliderIconsArr[i].parentNode.children[last];
            sliderIconsArr[i].style.display = 'block';
            var content = document.createElement('div');
            content.className = 'content';
            container.insertBefore(content, container.children[last - 1]);
        }
    }
    return last;
}

btnUp.addEventListener('click', function() {
    rollUp();
});

function modalMake() {
    const modal = document.querySelector('#modal');
    const modalBtn = document.querySelector('.nav__buttons button:nth-child(2)');
    const modalxBtn = document.querySelector('.modalInner__X');

    modalBtn.addEventListener('click',(ev) => {
        ev.preventDefault();
        modal.classList.add('show');
    });
    modalxBtn.addEventListener('click',(ev) => {
        ev.preventDefault();
        modal.classList.remove('show');
    });
}



const types = document.querySelector('.aside__types');
const list = document.querySelectorAll('.aside__types li a');
const listLength = list.length;
const lists = document.querySelector('.article__lists');
const modalTypes = document.querySelector('.modalInner__lists');

types.addEventListener('click',(ev) => {
    if(ev.target == null) {
        return;
    }
    ev.preventDefault();
    

    while(lists.firstChild) {
        lists.removeChild(lists.firstChild);
    }
    const target = ev.target;
    const href = target.getAttribute('href');
    const type = href.substr(2);

    for(let i=0; i<listLength; i++) {
        list[i].classList.remove('active');
        target.classList.add('active');
    }
    
    fetch("./dummy.json")
        .then(response => response.json())
        .then((data) => {
            data.forEach((element,idx) => {
                const li = document.createElement('li');
                li.style.backgroundImage = `url('./img/${element.name}.jpg')`;
                lists.appendChild(li);
                
                if(type == 'all') {
                    li.classList.add('show');
                } else if(type == element.type) {
                    li.classList.add('show');
                }
            });
        })
        .catch(error => console.log(error));
    }

);

modalTypes.addEventListener('click',(ev) => {
    modal.classList.remove('show');
    if(ev.target == null) {
        return;
    }
    ev.preventDefault();

    while(lists.firstChild) {
        lists.removeChild(lists.firstChild);
    }
    const target = ev.target;
    const href = target.getAttribute('href');
    const type = href.substr(2);

    fetch("./dummy.json")
        .then(response => response.json())
        .then((data) => {
            data.forEach((element,idx) => {
                const li = document.createElement('li');
                li.style.backgroundImage = `url('./img/${element.name}.jpg')`;
                lists.appendChild(li);
                
                if(type == 'all') {
                    li.classList.add('show');
                } else if(type == element.type) {
                    li.classList.add('show');
                }
            });
        })
        .catch(error => console.log(error));

});




window.onload = function() {
    let allButton = document.querySelector('.type:first-child a');
    allButton.click();
}





function init() {
    modalMake();
}

init();
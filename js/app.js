
let user = document.querySelector('#user');
let deleteBtn = document.querySelector('#delete__btn');
let clearBtn = document.querySelector('#clear__button');
let formBtn = document.querySelector('#form__button');
let form = document.querySelector('#form');


const updateUI = (data) => {
    user.innerHTML = '';
    data.forEach(item => { 
        const {gender, name, dob, location, picture} = item;

        user.innerHTML += `
        <li class="user__item">
              <button id="delete__btn" class="user__delete--btn">
                <i class="fas fa-trash"></i>
              </button>
              <img
                class="user__img"
                alt="User photo"
                src=${picture.large}
                width="100"
                height="100"
              />
              <div class="user__name">
                <span class="material-symbols-outlined">badge</span>
                <span>${name.title} ${name.first} ${name.last}</span>
              </div>
              <div class="user__year">
                <span class="material-symbols-outlined">cake</span>
                <span>${dob.age} years old.</span>
              </div>
              <div class="user__location">
                <span class="material-symbols-outlined">person_pin_circle</span>
                <span>${location.country} ${location.city}</span>
              </div>
              <div class="user__gender">
                <span class="material-symbols-outlined">man</span>
                <span>${gender}</span>
              </div>
            </li>
        `
    }) 
}

document.addEventListener('click', function(e) {
    if(e.target.classList == 'user__delete--btn') {
        e.target.parentElement.remove()
    }

    if(!user.children.length) {
        clearBtn.classList.add('hidden');
    }

    document.addEventListener('click', function() {
        k
    });
});



clearBtn.addEventListener('click', function(e) {
  e.preventDefault();
  user.innerHTML='';
});

formBtn.addEventListener('click', function() {
  reload();
});

form['form__input'].addEventListener('input', function() {
  const inputVal = form['form__input'].value.toLowerCase();
  const name = document.querySelectorAll('.user__name');

    name.forEach(item => {
     if(item.lastElementChild.textContent.toLowerCase().includes(inputVal)) {
     item.parentElement.classList.remove('hidden');
     } else {
     item.parentElement.classList.add('hidden');
     }
   });
});



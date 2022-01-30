const list = document.querySelectorAll('header ul li');
const main = document.querySelector('main');
const section = document.querySelectorAll('main section');
const button = document.querySelector('#home .text button');

const removeClass= () =>{

  for(let i = 0; i< 4;i++ ){
    list[i].classList.remove('on');
    section[i].classList.remove('on');
    main.classList.remove(`face${i+1}`);
  }
}

const handleList = (e, index) =>{
  removeClass();
  // remove all class
  // thene add class to give 3d effect
    main.classList.add(`face${index+1}`);
    e.classList.add('on');
    section[index].classList.add('on');
}

const handleClick = () =>{
  removeClass();
// thene add class to give 3d effect
  main.classList.add('face4');
  list[3].classList.add('on');
  section[3].classList.add('on');
}

list.forEach((e, index) => {
  e.addEventListener('click', ()=> handleList(e,index))
});

button.addEventListener('click', ()=>handleClick());
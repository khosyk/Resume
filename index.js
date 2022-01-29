const list = document.querySelectorAll('header ul li');
const main = document.querySelector('main');
const section = document.querySelectorAll('main section');

const handleList = (e, index) =>{

  // remove all class
    for(let i = 0; i< 4;i++ ){
      list[i].classList.remove('on');
      section[i].classList.remove('on');
      main.classList.remove(`face${i+1}`);
    }
  // thene add class to give 3d effect
    main.classList.add(`face${index+1}`);
    e.classList.add('on');
    section[index].classList.add('on');
}

// const handleFace1 =()=>{
//   let homeSpan
//   let homeH1
//   let homeH2
// }


list.forEach((e, index) => {
  e.addEventListener('click', ()=> handleList(e,index))
});

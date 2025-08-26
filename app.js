// to rotate the drop down in the class card, we use javascript 
// we have 3 cards i.e, 3 inputs. So, we have to rotate all at once. 

Array.from(document.getElementsByTagName('input')).forEach((e,i)=>{

    // The addEventListener() method of the EventTarget interface sets up a function that will be called whenever the specified event is delivered to the target.

    // whenever, we click e ie., type anything (keyup) 
    e.addEventListener('keyup', (el)=>{
        if(e.value.length >0){
            document.getElementsByClassName('bi-caret-down-fill')[i].style.transform = "rotate(180deg)";
        }
        else{
            document.getElementsByClassName('bi-caret-down-fill')[i].style.transform = "rotate(0deg)";
        }
    })
})

let menu_btn = document.getElementsByClassName('bi-three-dots')[0];
let menu_bx = document.getElementById('menu_bx');

menu_btn.addEventListener('click',()=>{
    menu_bx.classList.toggle('ul_active');
})
let string = "";
let btn = document.querySelectorAll('.btn, .btn-0');
let input = document.querySelector('input');
Array.from(btn).forEach((btn)=>{
    btn.addEventListener('click',(e)=>{
        if(e.target.innerHTML == '='){
            string = eval(string);
            input.value = string ;
        }
        else if(e.target.innerHTML == 'C'){
            string = "";
            input.value = string ;
        }
        else if (e.target.innerHTML == 'X'){
            e.target.innerHTML = "*"
            string = string + e.target.innerHTML ;
            input.value = string('X');
        }
        else{
        console.log(e.target)
        string = string + e.target.innerHTML ;
        input.value = string ;
    }
    })
})
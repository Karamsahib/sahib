let input = document.getElementById('inputbox');
let buttons = document.querySelectorAll
('button');

let string = "",
let arr = Array.from(buttons);
arr.forEach(buttons => {
    buttons.addEventLister('click',(e) =>{
        if(e.target.innerHTML == '='){
            string = eval(string);
            input.value = string;
        }
        string += e.target.innerHTML;
        input.value = string;
    })
})

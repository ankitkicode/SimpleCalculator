let allBtn = document.querySelectorAll('button')
let operators = document.querySelectorAll('.operator')
let input = document.querySelector('input')
// console.log(allBtn);


function calculator(){
    let string = ""
    allBtn.forEach(function(btn){
        btn.addEventListener('click',(e)=>{
            // console.log(e.target.innerHTML);
            if (e.target.innerHTML == "=") {
                string = eval(string)
                input.value = string
            }else if (e.target.innerHTML == "AC") {
                string = ""
                input.value = string
            } else if(e.target.innerHTML == 'DEl'){
                string = string.substring(0,string.length-1)
                input.value = string 
            }else{
                string += e.target.innerHTML
                input.value = string
            }
        })
    })
}
calculator()


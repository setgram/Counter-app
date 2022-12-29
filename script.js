let countEl = document.getElementById('count-el')
let saveEl = document.getElementById('save-el')
let number = document.getElementById('number')
let entries = document.getElementById('entries')
let count = 0

countEl.addEventListener('click', function(){
    count += 1
    number.textContent = count
})

saveEl.addEventListener('click', function(){
   let countStr = count + " _ " 
    entries.textContent += countStr
    number.textContent = 0
    count = 0

})


//Finished 
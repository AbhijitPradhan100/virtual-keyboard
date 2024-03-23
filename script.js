let textContainer = document.querySelector(".text-container");
let enterKey = document.querySelector(".enter")
let spaceKey = document.querySelector(".space")
let deleteKey = document.querySelector(".delete")
let capsLockKey = document.querySelector(".capsLock")
let allKeys = document.querySelectorAll(".key")
let isCaps = false



//enter key
enterKey.addEventListener('click', function(){
    console.log("enter key is clicked")
    let content = textContainer.innerHTML;
    let newContent = content+"<br>";
    textContainer.innerHTML = newContent
})

//space key
spaceKey.addEventListener('click', function(){
    console.log("space key is clicked")
    let content = textContainer.innerHTML;
    let newContent = content + "  ";
    textContainer.innerHTML = newContent
})
//delete key
deleteKey.addEventListener('click', function(){
    console.log("delete key is clicked")
    let content = textContainer.innerHTML;
    let newContent = content.slice(0,content.length-1);
    textContainer.innerHTML = newContent
})

//capslock key
capsLockKey.addEventListener('click',function(){
    console.log("capsLock key is clicked")

    isCaps = !isCaps;

    capsLockKey.classList.toggle("active", isCaps)

    for(let key of allKeys){
        if(key.classList.contains("capsLock")){
            continue;
        }

        if(isCaps){
            key.textContent = key.textContent.toUpperCase()

        }else{
            key.textContent = key.textContent.toLowerCase()
        }
    }
    

})

//other keys
for(let key of allKeys){
    if(key.classList.length>1){

    }else{
        key.addEventListener("click",function(){
            textContainer.innerHTML += key.innerHTML
        })
    }
}

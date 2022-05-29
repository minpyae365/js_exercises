const colors = ["green" , "red" , "rgba(133,122,200)" , "#f15025"];
const btn = document.getElementById('btn');
const color = document.querySelector('.color');

btn.addEventListener('click' , function(){
    
    const random = () => Math.floor(Math.random() * colors.length);
    const rand = random();
    document.body.style.backgroundColor = colors[rand];
    //console.log(rand);
    color.innerText = colors[rand];
});
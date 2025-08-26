const hearts = document.querySelectorAll('.heart');
hearts.forEach(heart => {
    heart.addEventListener('click', () => {
    let love=document.getElementById('love');
    let num=parseInt(love.innerText);
    love.innerText=num+1;
    });
});
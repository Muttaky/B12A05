const hearts = document.querySelectorAll('.heart');
hearts.forEach(heart => {
    heart.addEventListener('click', () => {
    let love=document.getElementById('love');
    let num=parseInt(love.innerText);
    love.innerText=num+1;
    });
});

const copies = document.querySelectorAll('.copy');
copies.forEach(copy => {
    copy.addEventListener('click', () => {
    let love=document.getElementById('cp');
    let num=parseInt(love.innerText);
    love.innerText=num+1;
    });
});







document.querySelectorAll('.copy').forEach((btn) => {
  btn.addEventListener('click', () => {
    // Find the parent .card of the clicked button
    const card = btn.closest('.card');
    // Get the phone number (the last h2 in the card)
    const number = card.querySelectorAll('h2')[1].textContent.trim();

    // Copy to clipboard
    navigator.clipboard.writeText(number)
      .then(() => alert('Copy successful'))
      .catch(() => alert('Copy failed'));
  });
});


 const now = new Date();
 let time=now.toLocaleTimeString();

document.querySelectorAll('.call').forEach((btn) => {
  btn.addEventListener('click', () => {


    let coin=document.getElementById('coin');
let newCoin=parseInt(coin.innerText);
if(newCoin<20){
    alert("not enough coin" );
}
else{
    
    // Find the parent .card of the clicked button
    const card = btn.closest('.card');
    // Get the phone number (the last h2 in the card)
    const name = card.querySelectorAll('h2')[0].textContent.trim();
    const number = card.querySelectorAll('h2')[1].textContent.trim();

    alert(name+' is '+number);

    let history=document.getElementById('history');
    let call=document.createElement('div');
    call.innerHTML=`
                <div class="flex justify-between p-2">
                        <div><h3 class="text-sm font-bold">${name}</h3>
                <span class="text-xs">${number}</span></div>
                <div class="text-xs">${time}</div>            
            </div>
`
history.appendChild(call);
coin.innerText=newCoin-20;

}



  });
});


document.getElementById('clear').addEventListener('click',function(){
    let history=document.getElementById('history');
    history.innerHTML=``;
})


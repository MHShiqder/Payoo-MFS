document.getElementById('add-money-button').addEventListener('click',function(event){
    event.preventDefault();
    const addedMoney=document.getElementById('added-money').value;
    const pinNumber=document.getElementById('pin-number').value;
    const availableMoney=document.getElementById('available-money').innerText;
    let newMoney=0;
    if(pinNumber==='1234')
    {
       newMoney=parseInt(addedMoney)+parseInt(availableMoney);
    }
    document.getElementById('available-money').innerText=newMoney;
    console.log(newMoney);
})
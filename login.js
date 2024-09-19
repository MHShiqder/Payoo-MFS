
document.getElementById('login-button').addEventListener('click',function (event) {
    event.preventDefault();
    const phoneNumber=document.getElementById('input-number').value;
    const pinNumber=document.getElementById('pin-number').value;
    
    if(phoneNumber==='01791669909' && pinNumber==='1234')
    {
        window.location.href='/home.html'
    }
    else
    {
        alert("Wrong pin or phone number")
    }
})




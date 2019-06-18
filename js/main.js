document.addEventListener('DOMContentLoaded', function() {
    const btnOn = document.querySelector('button');
    const body = document.querySelector('body');
    const status = document.querySelector('.status');
    
    btnOn.addEventListener('click', function(e) {
        
        if (e.target.classList.contains('on') && body.classList.contains('light') && status.innerText === "It's so bright in here!") {
            e.target.classList.add('off');
            e.target.classList.remove('on');
            body.classList.add('dark');
            body.classList.remove('light');
            status.innerText = "Hey, who turned off the lights?";
        } else if (e.target.classList.contains('off') && body.classList.contains('dark') && status.innerText === "Hey, who turned off the lights?") {
            e.target.classList.add('on');
            e.target.classList.remove('off');
            body.classList.add('light');
            body.classList.remove('dark');
            status.innerText = "It's so bright in here!";
        }
        console.log('switch clicked');
        console.log(e);
        console.log(body)
    })

})



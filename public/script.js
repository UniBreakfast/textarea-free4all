ta.onchange = ta.oninput = function (){
    console.log(ta.value)
    fetch(location.href + 'ta', {method: 'POST', body: ta.value })
}

function monitor(){
    fetch(location.href +'ta').then(resp => resp.text()).then(text => {
        if (ta.value != text) ta.value = text
        setTimeout(monitor, 2000)
    })
}

monitor()
ta.onchange = ta.oninput = function (){
    console.log(ta.value)
    fetch(location.href + 'ta', {method: 'POST', body: ta.value })
}


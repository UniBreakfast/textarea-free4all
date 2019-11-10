ta.onchange = ta.oninput = function (){
    console.log(ta.value)
    fetch(location.href, {method: 'POST', body: ta.value })
}


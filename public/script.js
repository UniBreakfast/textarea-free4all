ta.onchange = ta.oninput = function (){
    console.log(ta.value)
    fetch('http://localhost:8080', {method: 'POST', body: ta.value })
}


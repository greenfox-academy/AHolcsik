'use strict'


function ajax(method, data, url, callback) {
    let xhr = new XMLHttpRequest()
    // console.log(data)
    data = data ? data : null;
    xhr.open(method, url)
    xhr.setRequestHeader('Content-Type', 'application/json')
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4) {
            let recievedData = JSON.parse(xhr.responseText)
            callback(recievedData)
        }
    }
    let sendData = null
    if (data){
        sendData = JSON.stringify(data)
        // console.log(sendData)
    }
    xhr.send(sendData)
}


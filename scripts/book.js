var getJSON = function(url) {
    return new Promise(function(resolve, reject) {
        var xhr = new XMLHttpRequest();
        xhr.open('get', url, true);
        xhr.responseType = 'json';
        xhr.onload = function() {
            var status = xhr.status;
            if (status == 200) {
                resolve(xhr.response);
            } else {
                reject(status);
            }
        };
        xhr.send();
    });
};

getJSON('api/book.json').then(function(data) {
    console.log(data[0]); //you can comment this, i used it to debug

    // result.innerText = data; //display the result in an HTML element
}, function(status) { //error detection....
    alert('Something went wrong.');
});
var getJson = function(url, callback) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.responseType = 'json';
    xhr.onload = function() {
        var status = xhr.status;
        if (status == 200) {
            callback(xhr.response);
        } else {
            callback(status);
        }
    };
    xhr.send();
}

getJson('api/book.json', function(data) {
    var book = new listing(data);
    book.insert('date');
    book.insert('title');
    book.insert('author');
    book.insert('content');
    book.insert('tags');
    book.insert('comment');

});

var listing = function(data) {
    this.insert = function(el) {
        var val = data[0][el];
        document.getElementById(el).innerHTML = val;
    };
}




// var Json = function() {
//         // Getting URL
//         this.getApi = function(url) {
//             return new Promise(function(resolve, reject) {
//                 var xhr = new XMLHttpRequest();
//                 xhr.open('get', url, true);
//                 xhr.responseType = 'json';
//                 xhr.onload = function() {
//                     var status = xhr.status;
//                     if (status == 200) {
//                         resolve(xhr.response);
//                     } else {
//                         reject(status);
//                     }
//                 };
//                 xhr.send();
//             });
//         };
//     }
//     // var Insert = function(el) {
//     //     Json.call(this);
//     //     var val = data[0][el];
//     //     document.getElementById(el).innerHTML = val;
//     // };
//     // Insert.prototype = Object.create(Json.prototype);
//     // Insert.prototype.constructor = Insert;

// // var book = new Insert('title');


// var book = new Json();
// book.getApi('api/book.json').then(function(data) {
//     function insert(el) {
//         var val = data[0][el];
//         document.getElementById(el).innerHTML = val;
//     };
//     insert('title');
//     insert('date');
// }, function(status) {
//     console.log('Something went wrong.');
// });
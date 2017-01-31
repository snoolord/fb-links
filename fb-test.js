"use strict";
var login = require("facebook-chat-api");

login({email: "up.word.extension@gmail.com", password: "test123456"}, function callback (err, api) {
    if(err) return console.error(err);

    api.getThreadList(0, 2, 'inbox', function fnc(er, arr) {
        if (er) return console.error(er);
        console.log(arr);
    })
});

const User = require('../app/api/models/users');

const mongoose = require('mongoose');

const uri = "mongodb+srv://admin:admin@steez-a2ssy.mongodb.net/test?retryWrites=true&w=majority"
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true });

const users = [new User({
    username: "brian",
    email: "brian@steez.com",
    password: "pw"
}),
new User({
    username: "admin",
    email: "admin@steez.com",
    password: "pw"
})
];

let done = 0;
for(let i = 0; i < users.length; i++){
    users[i].save(function(err, result) {
        done++;
        if(done === users.length) {
            exit();
        }
    });
}

function exit(){
    mongoose.disconnect();
}
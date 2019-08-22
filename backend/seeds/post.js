const Post = require('../app/api/models/Posts');

const mongoose = require('mongoose');

const uri = "mongodb+srv://admin:admin@steez-a2ssy.mongodb.net/test?retryWrites=true&w=majority"
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true });

const Posts = [
    new Post({
        likes: 0,
        title: "First Outfit!",
        img_url: "https://i.pinimg.com/originals/d4/e2/5c/d4e25c7e55e0e35b651448dbe23eb84c.jpg",
        user: "5d361119c6221d33f1ba23ee",
        products: ["5d360801fdebaa313c265a92", "5d360801fdebaa313c265aa1", "5d360801fdebaa313c265a9a"]
}),
    new Post({
        likes: 0,
        title: "Travi! Yuh!",
        img_url: "https://scontent.cdninstagram.com/vp/b103639c0f7f29e3e1c4374dbbc4e560/5D9ACCCF/t51.2885-15/e35/p320x320/58737538_1290363617788618_4205048715173578764_n.jpg?_nc_ht=scontent.cdninstagram.com",
        user: "5d361119c6221d33f1ba23ee",
        products: ["5d360801fdebaa313c265a87", "5d360801fdebaa313c265aa1", "5d360801fdebaa313c265a9b"]
}),
    new Post({
        likes: 0,
        title: "OffWhite x Jawden Uno, Get At Me!",
        img_url: "https://scontent.cdninstagram.com/vp/6814276b865435e5d5f8e1a97c49d8c6/5D9F8234/t51.2885-15/e35/s320x320/57311724_769207123474790_4489078662096435745_n.jpg?_nc_ht=scontent.cdninstagram.com",
        user: "5d361119c6221d33f1ba23ee",
        products: ["5d360801fdebaa313c265a94", "5d360801fdebaa313c265aa2", "5d360801fdebaa313c265a9c"]
    })
];

let done = 0;
for(let i = 0; i < Posts.length; i++){
    Posts[i].save(function(err, result) {
        done++;
        if(done === Posts.length) {
            exit();
        }
    });
}

function exit(){
    mongoose.disconnect();
}
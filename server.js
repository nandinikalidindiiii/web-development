const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.static("frontend"));
app.use(express.json());

var users=[
    {
        "id":1,
        "name":"Valentino", 
        "gender":"male",
        "image":"https://randomuser.me/api/portraits/men/2.jpg"
    },
{
     "id":2,
        "name":"کوروش",
        "gender":"male",
        "image":"https://randomuser.me/api/portraits/men/94.jpg"
},
{
     "id":3,
        "name":"susunna",
        "gender" : "female",
        "image":"https://randomuser.me/api/portraits/women/32.jpg"
},
{
     "id":4,
        "name":"Sélène",
        "gender":"female",
        "image":"https://randomuser.me/api/portraits/women/81.jpg"
},
{
     "id":5,
        "name":"Zackary",
        "gender":"male",
        "image":"https://randomuser.me/api/portraits/men/36.jpg"
},
{

     "id":6,
        "name":"Avery",
        "gender":"female",
        "image":"https://randomuser.me/api/portraits/women/21.jpg"
},
{
     "id":7,
        "name":"Sebastian",
        "gender":"male",
        "image":"https://randomuser.me/api/portraits/men/37.jpg"
},
{

     "id":8,
        "name":"Alisha",
        "gender":"female",
        "image":"https://randomuser.me/api/portraits/women/48.jpg"
},
{
     "id":9,
        "name":"Casimir",
        "gender":"male",
        "image":"https://randomuser.me/api/portraits/men/22.jpg"
},
{
     "id":10,
        "name":"Elliott",
        "gender":"male",
        "image":"https://randomuser.me/api/portraits/men/83.jpg"
}
]

var nextId=11;

function findIndex(id){
    for(var i=0; i< users.length; i++){
        if(id=== users[i].id){
            return i;
        }
    }
        return -1;
    

}

app.get('/api/users',function (req, res){
    return res.json(users);

})

app.get("/api/users/:id", function (req, res) {
    var id = Number(req.params.id);
    var index = findIndew(id);

    if (index === -1) {
        return res.status(404).json({ "message": "User not found with id: " + id });
    }
    var user = users[index];
    return res.json(users);
});

app.get("/api/random-user", function (req, res) {
    if(users.length === 0){
        return res.status(404).json({ "message": "No users found" });
    }
    
    
    var randomIndex = Math.floor(Math.random() * users.length);
    return res.json(users[randomIndex]);
})


app.post("/api/users", function (req, res) {
    var newUser= req.body;
    var tempUser = {
        "id": nextId++,
        "name": newUser.name,
        "gender": newUser.gender,
        "image": newUser.image
    };
    users.push(tempUser);
     return res.status(201).json({"message": "User created successfully", "user": tempUser

    });


    })


    app.get("/api/users/:id", function(req, res){
    var id = Number(req.params.id);
    var index = findIndex(id);
    if(index === -1){
        return res.status(404).json({"message" : "User not found with id " + id});
    }
    return res.json(users[index]);
})

app.post("/api/users", function(req, res){
    if(!req.body.name || !req.body.gender){
        return res.status(200).json({"message" : "name and gender are mandatory"});
    }
    var newUser = {
        "id" : nextId,
        "name" : req.body.name,
        "gender" : req.body.gender,
        "image" : req.body.image || "default.png"
    };

    nextId = nextId + 1;

    users.push(newUser);

    return res.status(201).json(newUser);
});

app.put("/api/users/:id", function(req, res){
    var id = Number(req.params.id);
    var index = findIndex(id);
    if(index === -1){
        return res.status(404).json({"message" : "User not found with id : " + id});
    }
    if(req.body.name){
        users[index].name = req.body.name;
    }
    if(req.body.gender){
        users[index].gender = req.body.gender;
    }
    if(req.body.image){
        users[index].image = req.body.image;
    }

    return res.json(users[index]);
});

app.delete("/api/users/:id", function(req, res){
    var id = Number(req.params.id);
    var index = findIndex(id);
    if(index === -1){
        return res.status(404).json({"message" : "User not found with id : " + id});
    }
    var user = users[index];
    users.splice(index, 1);
    return res.json({"message" : "User deleted successfully", "user" : user});
});

app.listen(3000,function(){
    console.log("Server is running at http://localhost:3000");
});



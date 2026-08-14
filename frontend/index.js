var user = [
    {
    "name": "John Doe",
    "gender": "male",
    "image":"john.png"
    },
    {
     "name": "Jane",
    "gender": "female",
    "image":"jane.png"

}

]
 var curId = 0;
  function toggleUser() {
    curId = (curId + 1) % user.length;

    var userName = document.getElementById("user-name");
    var userGender = document.getElementById("user-gender");
    var userImage = document.getElementById("user-image");

    userName.innerHTML = user[curId].name;
    userGender.innerHTML = user[curId].gender;
    userImage.src = user[curId].image;
  }

  function randomUser(){
    var userImage = document.getElementById("user-image");
    var userName = document.getElementById("user-name");
    var userGender = document.getElementById("user-gender");

    fetch("https://randomuser.me/api/")
        .then(function(res){
            return res.json();
        })
        .then(function(data){
            userImage.src = data.results[0].picture.large;
            userName.innerHTML = data.results[0].name.first + " " + data.results[0].name.last;
            userGender.innerHTML = data.results[0].gender;
        })
        .catch(function(err){
            console.log("Error occured : " + err);
        })

}

  function myRandomUser() {
    fetch("/api/random-user")
    .then(function(res) {
      return res.json();
    })
    .then(function(data) {
      var userName = document.getElementById("user-name");
      var userGender = document.getElementById("user-gender");
      var userImage = document.getElementById("user-image");

     
      userName.innerHTML = data.name;
      userGender.innerHTML = data.gender;
      userImage.src = data.image;

    })
    .catch(function(err) {
      console.log("Error occured : " + err);
    })


  }
  
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

  function randomUser() {
    fetch("https://randomuser.me/api")
    .then(function(res) {
      return res.json();
    })
    .then(function(data) {
      var userName = document.getElementById("user-name");
      var userGender = document.getElementById("user-gender");
      var userImage = document.getElementById("user-image");

      var newUserName = data.results[0].name.first + " " + data.results[0].name.last;
      var newUserGender = data.results[0].gender;
      var newUserImage = data.results[0].picture.large;
      userName.innerHTML = newUserName;
      userGender.innerHTML = newUserGender;
      userImage.src = newUserImage;

    })
    .catch(function(err) {
      console.log("Error occured : " + err);
    })


  }
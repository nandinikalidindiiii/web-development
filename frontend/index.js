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
    curId = (curId + 1) % 2;

    var userName = document.getElementById("user-name");
    var userGender = document.getElementById("user-gender");
    var userImage = document.getElementById("user-image");

    userName.innerHTML = user[curId].name;
    userGender.innerHTML = user[curId].gender;
    userImage.src = user[curId].image;
  }

function sendJSON()
{
    // let url  = "https://localhost:44371/api/signup";
    // var xhr = new XMLHttpRequest();
    // xhr.onreadystatechange = function() { 
    //     if (xhr.readyState == 4 && xhr.status == 200)
    //     {
    //         // console.log(xhr.responseText);
    //         var data =  xhr.responseText
    //         // console.log(JSON.stringify(data))
    //         return data;
    //     }
    // }
    // xhr.open("GET", url, true); // true for asynchronous 
    // xhr.send(null);

    // // console.log(xhr.responseText);

    // var data = xhr.onreadystatechange();
    // console.log(data)

    fetch('https://localhost:44371/api/signup')
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    appendData(data);
  })
  .catch(function (err) {
    console.log(err);
  });

function appendData(data)
{
    var users = document.getElementById("users");
    console.log(users);

    for (var i = 0; i < data.length; i++) {
        var div = document.createElement("div");
        div.innerHTML = 'Name: ' + data[i].name + "Username :" + data[i].username + "Email :" + data[i].email + "Role :" + data[i].role + "ProjectID :" + data[i].projectID;
        users.appendChild(div);
    }
}


    // event.preventDefault();
}
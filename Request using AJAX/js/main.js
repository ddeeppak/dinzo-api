function fetch()
{
    alert("Clicked")
    var details=new XMLHttpRequest();
    details.open("GET","./json/user.json",true);
    details.setRequestHeader("Content-type","application/x-www-form-unlencoded");
    details.send();
    details.onreadystatechange=function()
    {
        if(details.readyState==4 && details.status==200)
        {
            localStorage.setItem("user",details.responseText);
        }
    }
}
// function adduser()
// {
//     var xhttp=new XMLHttpRequest();
//     xhttp.onreadystatechange=function()
//     {
//         if(xhttp.readyState==4 && xhttp.status==200)
//         {
//             alert("Connection Open");
//         }
//         else
//         {
//             alert("Connection failed");
//         }
//     }
//     xhttp.open("POST","./json/user.json",true);
//     xhttp.setRequestHeader("Content-type","application/json");
//     xhttp.send(JSON.stringify({"Name":"Sunny","Age":20,"State":"Maharashtra"}));

// }
function adduser() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (xhttp.readyState === 4) {
        if (xhttp.status === 200) {
          alert("User added successfully!");
        } else {
          alert("Failed to add user.");
        }
      }
    };
    
    xhttp.open("POST", "./json/user.json", true);
    xhttp.setRequestHeader("Content-type", "application/json");
    
    var user = {
      Name: "Sunny",
      Age: 20,
      State: "Maharashtra"
    };
    
    xhttp.send(JSON.stringify(user));
  }
  
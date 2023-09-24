function fetchUsers(){
    var req=new XMLHttpRequest();
    req.open("GET","https://61dc785d591c3a0017e1a96d.mockapi.io/api/v1/users",true);
    req.setRequestHeader("Content-type","application/json");
    req.send();
    req.onreadystatechange=function(){
        if(req.readyState==4 && req.status==200)
        {
            loaddata(req.responseText);
        }
    }
//     var str='[{"userName":"Vishnu","age":"30","state":"ANDHRA ","id":"71","user id":"71","name":"Vishnu1111111111111111"},{"userName":"Swetha M L","age":23,"state":"Jammu","id":"78"},{"userName":"nivesh","age":"34","state":"telangana ","id":"89"},{"userName":"sai","age":"66","state":"bihar","id":"95"},{"userName":"mahesh","age":"32","state":"ap","id":"96"},{"userName":"abhilash reddy","age":"24","state":"telangana","id":"97"},{"userName":"nikiluuuuuuuuuuuuuuuuu","age":"44","state":"rajasthan","id":"99"},{"userName":"ganesh","age":"23","state":"haryana","id":"100"},{"userName":"panipal","age":"25","state":"karnataka","id":"101"},{"userName":"vamshi","age":"21","state":"assam","id":"102"},{"userName":"roshan","age":"24","state":"goa","id":"103"},{"userName":"gayathri","age":"23","state":"andhra pradesh","id":"104"},{"userName":"madhu","age":"21","state":"jammu and kashmir","id":"105"},{"userName":"Nivesh Sai Teja","age":"21","state":"telangana","id":"106"},{"userName":"Abhi","age":"30","state":"Hyd","id":"110","name":"Test2"},{"userName":"Abhi","age":20,"state":"Tamilnadu","id":"111","Name":"Test2","Age":"30","State":"Hyd"},{"userName":"Swe","age":"123","state":"mizoram","id":"112"},{"userName":"babu rao","age":85,"state":"Karnataka","id":"113"},{"userName":"vamshi","age":"22","state":"goa","id":"114"},{"userName":"123","age":"11","state":"mizoram","id":"115"},{"userName":"123","age":"11","state":"mizoram","id":"116"},{"userName":"123","age":"11","state":"mizoram","id":"117"},{"userName":"123","age":"11","state":"mizoram","id":"118"}]';
// loaddata(str);

}

function loaddata(str){
    const dataArray= JSON.parse(str);
    const table=document.getElementById('listdata');
    console.log(str);
    for(var x in dataArray)
    {

        const tr=document.createElement('tr');
        tr.setAttribute('data-row-id',dataArray[x].id);
        const td1=document.createElement('td');
        td1.innerHTML=dataArray[x].userName;
        tr.appendChild(td1);
        const td2=document.createElement('td');
        td2.innerText=dataArray[x].age;
        tr.appendChild(td2);
        const td3=document.createElement('td');
        td3.innerText=dataArray[x].state;
        tr.appendChild(td3);
        table.appendChild(tr);


        tr.addEventListener("click", handleRowClick);
    }

}

function adduser()
{
    const pop=document.getElementById('popup');
    pop.style.display='block';
    const b1=document.getElementById('updateButton').style.display='none';
    const b4=document.getElementById('deleteButton').style.display='none';
    const b3=document.getElementById('closeButton').style.display='inline';
    
    const b2=document.getElementById('addButton');
    b2.style.float='right';
    b2.style.display='inline';
    b2.addEventListener('click',postdata);
    function postdata()
    {
        const newNameInput = document.getElementById("newName");
        const newAgeInput = document.getElementById("newAge");
        const newEmailSelect = document.getElementById("newEmail");
        const str={
            "userName":newNameInput.value,
            "age":newAgeInput.value,
            "state":newEmailSelect.value,
            "id":Math.floor(Math.random() * 9000) + 1000
        }
        var req=new XMLHttpRequest();
        req.onreadystatechange= function() {
            if(req.readyState==4 && req.status==201)
            {
                console.log('UserADD :'+req.responseText);
            }
        }
        req.open('POST','https://61dc785d591c3a0017e1a96d.mockapi.io/api/v1/users',true);
        req.setRequestHeader('Content-type','application/json');
        req.send(JSON.stringify(str));
        closePopup();
    }

    
}

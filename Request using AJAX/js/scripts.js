const popup = document.getElementById("popup");
const closeButton = document.getElementById("closeButton");
const updateButton = document.getElementById("updateButton");
const deleteButton = document.getElementById("deleteButton");
const newNameInput = document.getElementById("newName");
const newAgeInput = document.getElementById("newAge");
 const newEmailSelect = document.getElementById("newEmail");
let currentRowId = null;
// Function to open the pop-up

function openPopup() {
    popup.style.display = "block";
}

// Function to close the pop-up
function closePopup() {
    popup.style.display = "none";
}

function handleRowClick(event) {
            
    const row = event.currentTarget;
    const rowId = row.getAttribute("data-row-id");
    currentRowId = rowId;

    const name = row.querySelector("td:nth-child(1)").innerText;
    const age = row.querySelector("td:nth-child(2)").innerText;
    const email = row.querySelector("td:nth-child(3)").innerText;

            // Set the row data
            newNameInput.value = name;
            newAgeInput.value = age;
            newEmailSelect.value = email;
            const b1=document.getElementById('updateButton').style.display='inline';
            const b4=document.getElementById('deleteButton').style.display='inline';
            const b3=document.getElementById('closeButton').style.display='inline';
            const b2=document.getElementById('addButton').style.display='none';
            // Display the pop-up
            openPopup();
}

        // Function to update the row data
function updateRowData() {
            const newName = newNameInput.value;
            const newAge = newAgeInput.value;
            const newEmail = newEmailSelect.value;

            const row = document.querySelector(`tr[data-row-id="${currentRowId}"]`);
            row.querySelector("td:nth-child(1)").innerText = newName;
            row.querySelector("td:nth-child(2)").innerText = newAge;
            row.querySelector("td:nth-child(3)").innerText = newEmail;


            const req= new XMLHttpRequest();
            req.open('PUT','https://61dc785d591c3a0017e1a96d.mockapi.io/api/v1/users/'+currentRowId,true);
            req.setRequestHeader('Content-type','application/json');
            req.onreadystatechange = function() {
                if(req.readyState==4 && req.status==200){
                    console.log('Updated :'+req.responseText)
                }
            }
            req.send(JSON.stringify({"state":newEmail}));

            // Close the pop-up after updating the row data
            closePopup();
        }

        // Function to delete the row
function deleteRow() 
{
            const row = document.querySelector(`tr[data-row-id="${currentRowId}"]`);
            row.remove();

            const req= new XMLHttpRequest();
            req.open('DELETE','https://61dc785d591c3a0017e1a96d.mockapi.io/api/v1/users/'+currentRowId,true);
            req.setRequestHeader('Content-type','application/json');
            req.onreadystatechange = function() {
                if(req.readyState==4 && req.status==200){
                    console.log('Deleted :'+req.responseText)
                }
            }
            req.send();

            closePopup();
}
        
closeButton.addEventListener("click", closePopup);
updateButton.addEventListener("click", updateRowData);
deleteButton.addEventListener("click", deleteRow);

        
const rows = document.querySelectorAll("#listdata tr");
rows.forEach(row => {
            row.addEventListener("click", handleRowClick);
});


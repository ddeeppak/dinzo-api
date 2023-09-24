
function validate()
        {
        //    Name Validation
            var fname=document.getElementById("r0");
            var frist=new RegExp("[a-zA-Z]");
            fristname=fname.value;
            if(fristname.match(frist))
                fname.style.backgroundColor="white";
            else
                fname.style.backgroundColor="hsl(0, 100%, 68%) ";

            var lname=document.getElementById("r1");
            var last=new RegExp("[a-zA-Z]");
            lastname=lname.value;
            if(lastname.match(last))
                lname.style.backgroundColor="white";
            else
                lname.style.backgroundColor="hsl(0, 100%, 68%) ";
                    
        // Email and Contact
            var mymail = document.getElementById('r2');
            var mail = /^[A-Za-z0-9]+@[a-zA-Z0-9]+\.[a-z]+$/;
            var mails = mymail.value;
        
            if (mails.match(mail)) 
                mymail.style.backgroundColor = "white";
            else
                mymail.style.backgroundColor = "hsl(0, 100%, 68%)";
            

            var ph=document.getElementById("r3");
            var phone=new RegExp("[0-9]");
            contact=ph.value;
            if(contact.match(phone) && contact.length==10)
                ph.style.backgroundColor="white";
            else
                ph.style.backgroundColor="hsl(0, 100%, 68%) ";

        // Applied Positon
            var applied=document.getElementById("r4");
            var ap=new RegExp("[a-zA-Z]");
            position=applied.value;
            if(position.match(ap))
                applied.style.backgroundColor="white";
            else
                applied.style.backgroundColor="hsl(0, 100%, 68%) ";

                
        }
function store()
{
    var fname=document.getElementById('r0').value;
    localStorage.setItem("fname",fname);

    var lname=document.getElementById('r1').value;
    localStorage.setItem("lname",lname);

    var mail=document.getElementById('r2').value;
    localStorage.setItem("mail",mail);

    var contact=document.getElementById('r3').value;
    localStorage.setItem("contact",contact);

    var Position=document.getElementById('r4').value;
    localStorage.setItem("Position",Position);

}

function show()
{
    var fname=document.getElementById('r0').value=localStorage.getItem("fname");
    

    var lname=document.getElementById('r1').value=localStorage.getItem("lname");
    

    var mail=document.getElementById('r2').value=localStorage.getItem("mail");
    

    var contact=document.getElementById('r3').value=localStorage.getItem("contact");
    

    var Position=document.getElementById('r4').value=localStorage.getItem("Position");

}
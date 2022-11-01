var phone_input = document.getElementById("my_phone");

function No()
{
    document.getElementById("reg").style.display="none";
    document.getElementById("or").style.display="none";
    document.getElementById("sb").style.display="block";
    document.getElementById("box").style.display="block";

}
function sb()
{
    var phone=9380213848 ;
    var cs =7996269545;
    var nn=9480406761;
    if(phone_input.value==phone)
    {
        document.getElementById("sign").style.display="none";
        document.getElementById("sn").style.display="block";
    }
    else if(phone_input.value==cs)
    {
        document.getElementById("sign").style.display="none";
        document.getElementById("sn").style.display="block";
    }
    else if(phone_input.value==nn)
    {
        document.getElementById("sign").style.display="none";
        document.getElementById("sn").style.display="block";
   
    }
    else if(phone_input.value=='')
    {
        document.getElementById("sign").style.display="none";
        document.getElementById("empty").style.display="block";
   
    }
    
    else
    {
        document.getElementById("sign").style.display="none";
        document.getElementById("nsn").style.display="block";

       
    }

}
function back()
{
    document.getElementById("sign").style.display="block";
    document.getElementById("empty").style.display="none";
}
function back()
{
    document.getElementById("sign").style.display="block";
    document.getElementById("empty").style.display="none";
    document.getElementById("nsn").style.display="none";

}

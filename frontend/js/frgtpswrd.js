function update()
{

}
function sendkey()
{
    var emailid = String(document.getElementsByClassName("email")[0].value);
    alert(emailid);
    
    $.ajax({
        type: "POST",
        url: "/api/user/forgot",
        data: {
            email: emailid,
            password: password
        },
        success: function(resultData) {
            console.log(resultData);
            if (resultData.message == "Auth successful") {
                localStorage.token = resultData.token;
                localStorage.userid = resultData.userDetails.userId
                localStorage.username = resultData.userDetails.name
                localStorage.usertype = resultData.userDetails.userType
                window.location.href = '/dashboard';
            }
        }, //sucess
        error: function(error) {
            console.log(error);
                if (error.responseJSON.message == "Unauthorized access") {
                    location.href = "/"
                } else {
                    var x = document.getElementById("alertmsg");
                    x.innerHTML = ` <div class="alert alert-danger alert-dismissible">
                    <a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>
                    <strong>Sorry!</strong>You are not registered  ${error.responseJSON.message}
                  </div>`
                    x.className = "show";
                    setTimeout(function() { x.className = x.className.replace("show", ""); }, 3000);
                }
            } //error
    });



  var div=document.getElementById("div1").style.display="block";
  var dis=document.getElementById("div0").style.display="none";
}
var div=document.getElementById("div1").style.display="none";
const toggleForm = () => {
    const container = document.querySelector('.container');
    container.classList.toggle('active');
  };

    function verify()
  {

  }

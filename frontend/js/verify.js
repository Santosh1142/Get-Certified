function verify()
{
    var email = String(document.getElementsByClassName("email")[0].value);
    var passkey = String(document.getElementsByClassName("passkey")[0].value);
    $.ajax({
        type: "PATCH",
        url: "/api/user/verifyEmail",
        data: {
            email: email,
            verificationKey: passkey
        },
        success: function(resultData) {
            console.log(resultData);
            if (resultData.message == "User verified") {
                window.location.href = '/access';
            }
        }, 
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
}

var thead = "<tr><th>Contest Name</th><th>Created On</th><th>Username</th><th></th></tr>"


function fillTable(){
   // console.log(localStorage.userid);
    $.ajax({
        url : `api/contest/user/`+localStorage.userid,
        type : 'GET',
        success : (data)=>{
            console.log(data)
            data = data.result;
            var t= thead;
            for(let i=0;i<data.length;i++){
                var date = new Date(data[i].creationtime);
                date=date.toLocaleDateString();
                t += "<tr id="+data[i].contestname+"><td>"+data[i].contestname+"</td><td>"+date+"</td><td>"+data[i].userName+"</td><td><button id="+data[i]._id+" class='btn btn-primary'>Add Participants Data</button></td></tr>";
            }
            $("#contestTable").html(t);
        }
    })
}

$(document).ready(()=>{

    $("#userID").html("Welcome "+localStorage.username)

    fillTable();

    $("#addContest").click(()=>{
        
        $("#myModal").modal("show")
        
    })

    $("#formSubmit").click(()=>{
        var contestData = {
            contestname : $("#contestname").val(),
            username : localStorage.username,
            description : $("descp").val(),
            organisation : $("organisation").val(),
        }
        
        console.log(contestData)
        $.ajax({
            url : `/api/contest/add/`+localStorage.userid,
            type : 'POST',
            data : contestData,
            success : (result)=>{
                console.log(result)
                fillTable();
            }
        })


        $("#myModal").modal("hide");

    })

    $(this).click((e)=>{
        var btn = $(e.target).attr('id')
        var btnClass = $(e.target).attr('class')
        
        if(btnClass == "btn btn-primary"){
            console.log(btn)
            var contestName = $(e.target).parent().parent().find('td:first-child').text();
            localStorage.contestname = contestName
            localStorage.contestID = btn
            window.location.href = `/contest/${btn}`
        }

    })

})
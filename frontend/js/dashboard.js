
var thead = "<tr><th>Contest Name</th><th>Created On</th><th>Username</th><th></th></tr>"

// function displayTable(data){
//     console.log(data)
//     var t = thead;
//     for(let i=0;i<data.length;i++)
//         t += "<tr><td>"+data[i].contestname+"</td><td>"+data[i].userid+"</td><td>"+data[i].userName+"</td><td><button id="+data[i].userid+" class='btn btn-primary'>Add Participants Data</button></td></tr>";
//     $("#contestTable").html(t);
// }

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
                t += "<tr><td>"+data[i].contestname+"</td><td>"+date+"</td><td>"+data[i].userName+"</td><td><button id="+data[i].userId+" class='btn btn-primary'>Add Participants Data</button></td></tr>";
            }
            $("#contestTable").html(t);
        }
    })
}

$(document).ready(()=>{

    fillTable();

    $("#addContest").click(()=>{
        
        $("#myModal").modal("show")
        
    })

    $("#formSubmit").click(()=>{
        var contestData = {
            contestname : $("#contestname").val(),
            username : 'Nikhil',
            description : $("descp").val(),
            organisation : $("organisation").val(),
        }
        
        console.log(contestData)
        $.ajax({
            url : `/api/contest/add/`+localStorage.userid,
            type : 'POST',
            data : contestData,
            success : (result)=>{
                // console.log(result)
                fillTable();
            }
        })


        $("#myModal").modal("hide");

    })

    $(this).click((e)=>{
        var btn = $(e.target).attr('id')
        var btnClass = $(e.target).attr('class')
        
        if(btnClass == "btn btn-primary"){
            // console.log(btn)
            window.location.href = `/contest/${btn}`
        }

    })

})
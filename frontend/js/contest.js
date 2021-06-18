
var thead = "<tr><th>SNo.</th><th>Name</th><th>Email</th><th>Contest Rank</th><th>State</th></tr>"

function displayTable(){
    // var a = "60ca0bcc23fd422ef0a32dea"
    var ContestId = location.href.split('/').slice(-1)[0];
    //console.log(ContestId);
    $.ajax({
        url:`/api/participant/contest/${ContestId}`,
        type:'GET',
        success : (data)=>{
            console.log(data)
            data = data.result;
            var t= thead;
            for(let i=0;i<data.length;i++){
                var certifyClass = "btn btn-danger", certifyState = "Certificate";
                if(data[i].certified === true){ certifyClass = "btn btn-success"; }
                
                t += "<tr><td>"+(i+1)+"</td><td>"+data[i].name+"</td><td>"+data[i].email+"</td><td>"+data[i].rank+"</td><td><button id="+data[i].email+" class='"+certifyClass+"'>"+certifyState+"</button></td></tr>";
            }
            $("#contestName").html("Participants of "+data[0].contestName)
            $("#contestID").html("Contest ID : "+data[0].ContestID)
            $("#participantsTable").html(t);
        }
    })

}

$(document).ready(()=>{


    displayTable();

    $(this).click((e)=>{
        var btn = $(e.target).attr('id')
        var btnClass = $(e.target).attr('class')
        
        if(btnClass == "btn btn-success" || btnClass == "btn btn-danger"){
            console.log(btn)
            // window.location.href = `/1509/${btn}`
            // $.ajax({
            //     url : `api/participant/details/${btn}`,
            //     type : 'GET',
            //     success : (data)=>{
            //         console.log(data)
            //     }
            // })
        }

    })


})
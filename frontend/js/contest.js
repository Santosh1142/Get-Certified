
var thead = "<tr><th>SNo.</th><th>Email</th><th>Contest Rank</th><th>State</th></tr>"
var a = "60ca0bcc23fd422ef0a32dea"

function displayTable(){
    
    $.ajax({
        url:`/api/participant/contest/${a}`,
        type:'GET',
        success : (data)=>{
            console.log(data)
            data = data.result;
            // localStorage.currentList = JSON.stringify(data);
            var t= thead;
            for(let i=0;i<data.length;i++){
                var certifyClass = "btn btn-danger", certifyState = "Certificate";
                if(data[i].certified === true){ certifyClass = "btn btn-success"; }
                
                t += "<tr><td>"+(i+1)+"</td><td>"+data[i].email+"</td><td>"+data[i].rank+"</td><td><button id="+data[i]._id+" class='"+certifyClass+"'>"+certifyState+"</button></td></tr>";
            }
            $("#contestName").html("Participants of "+data[0].contestName)
            $("#contestID").html("Contest ID : "+data[0].ContestId)
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
            localStorage.currentParticipantID = btn;

            // var participantsData = JSON.parse(localStorage.currentList)
            // for(let i=0;i<participantsData.length;i++){
            //     if(participantsData[i].email == btn){
            //         localStorage.currentParticipant = JSON.stringify(participantsData[i]);
            //         break;
            //     }
            // }

            window.location.href = `/${a}/${btn}`
        }

    })


})
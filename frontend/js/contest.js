
var thead = "<tr><th>SNo.</th><th>Email</th><th>Contest Rank</th><th>State</th></tr>"
var a = "60ca0bcc23fd422ef0a32dea"

function displayTable(){
    
    $.ajax({
        url:`/api/participant/contest/${a}`,
        type:'GET',
        success : (data)=>{
            console.log(data)
            data = data.result;
            var t= thead;
            var pCount = data.length, certifiedCount = 0;
            for(let i=0;i<data.length;i++){
                var certifyClass = "btn btn-danger", certifyState = "Certificate";
                if(data[i].certified === true){ certifyClass = "btn btn-success"; certifiedCount+=1 }
                
                t += "<tr><td>"+(i+1)+"</td><td>"+data[i].email+"</td><td>"+data[i].rank+"</td><td><button id="+data[i]._id+" class='"+certifyClass+"'>"+certifyState+"</button></td></tr>";
            }
            console.log(data[0].contestName)
            $("#contestName").html("Contest: "+(data[0].contestName))
            // $("#contestID").html("C-ID: "+(data[0].ContestId))
            $("#excellence").html("Range of Excellence: 70%")
            $("#pCount").html("Total Participants: "+pCount); $("#certifiedCount").html("Certified Praticipants: "+certifiedCount);
            $("#participantsTable").html(t);
            $("#stats").show()
        }
    })

}

$(document).ready(()=>{

    $("#stats").hide();
    $("#userID").html("Welcome "+localStorage.username)

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

var thead = "<tr><th>SNo.</th><th>Name</th><th>Email</th><th>Contest Rank</th><th>State</th></tr>"

function displayTable(){
    // var a = "60ca0bcc23fd422ef0a32dea"
    $.ajax({
        url:`api/sample`,
        type:'GET',
        success : (data)=>{
            console.log(data)
            // data = data.result;
            var t= thead;
            for(let i=0;i<data.length;i++){
                var certifyClass = "btn btn-danger", certifyState = "Not Certified";
                if(data[i].certified === true){ certifyClass = "btn btn-success"; certifyState = "Certified"; }
                
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


})
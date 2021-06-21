
var thead = "<tr><th>SNo.</th><th>Email</th><th>Contest Rank</th><th>State</th></tr>"
var contestid = location.href.split('/').slice(-1)[0];

function displayTable(){
    
    $.ajax({
        url:`/api/participant/contest/${contestid}`,
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
    // $("#upload-btn").hide();
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

            window.location.href = `/${contestid}/${btn}`
        }

    })


    $(this).click((e)=>{
        // console.log("simpleTwo");
        var tID = $(e.target).attr('id')
        var tClass = $(e.target).attr('class')
        if(tClass == "templateModel"){
            localStorage.templateModel = tID;
            toastr.options.closeButton = true;
            toastr.success(tID+" Template selected")
            // toastr.clear()
        }
    })


    $("#upload-btn").click(()=>{
        $("#myModal").modal("show")
    })

    $("#formSubmit").click( ()=>{
        
        var pFile = $("#file").prop('files')
        console.log(pFile)
        // $.ajax({
        //     url : '/api/participant/uploadCSV',
        //     type : 'POST',
        //     data : pFile,
        //     success : (result)=>{
        //         console.log(result)
        //     }
        // })


        $("#myModal").modal("hide");

    });




})

//Kaushik mowa, this the ajax for sending mails to all the participants
// add a button and invoke this function  on click

// function test()
// {
//     $.ajax({
//         url:`/api/participant/sendmail/${contestid}`,
//         type:'GET',
//         success : (data)=>{
//             console.log(data)
//         }
//     })
// }

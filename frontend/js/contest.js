
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
        
        var data = new FormData();
        $.each($('#file')[0].files, (i, file)=>{
            data.append('file', file);
            // console.log(file)
        });
        $.ajax({
            url: '/api/participant/uploadCSV',
            data: data,
            cache: false,
            contentType: false,
            processData: false,
            method: 'POST',
            type: 'POST',
            success: (result)=>{

                if(result.msg == "Success"){
                    toastr.options.closeButton = true;
                    toastr.success("File Uploaded Successfully")
                }

                for(let i=0;i<result.data.length;i++){
                    // console.log(result.data[i]);
                    $.ajax({
                        url: `/api/participant/add/${contestid}`,
                        type : 'POST',
                        data : result.data[i],
                        success : (result)=>{
                            console.log(i+1+" "+result)
                        }
                    })
                }
                displayTable();

            }
        });


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

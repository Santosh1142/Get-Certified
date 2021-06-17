
var thead = "<tr><th>Contest Name</th><th>Description</th><th>Range of Excellence</th><th></th></tr>"

function displayTable(data){
    console.log(data)
    var t = thead;
    for(let i=0;i<data.length;i++)
        t += "<tr><td>"+data[i].contestName+"</td><td>"+data[i].description+"</td><td>"+data[i].rangeOfExcellence+"</td><td><button class='btn btn-primary'>Add Participants Data</button></td></tr>";
    $("#contestTable").html(t);
}

$(document).ready(()=>{

    $.get('/api/sample',(data)=>{
        if(data!=null)
            displayTable(data);
    })

    $("#addContest").click(()=>{
        
        $("#myModal").modal("show")
        
    })

    $("#formSubmit").click(()=>{
        var contestData = {
            contestName : $("#contestName").val(),
            description : $("#descp").val(),
            rangeOfExcellence : $("#range").val()
        }
        $.post('/api/sample', { data : contestData})
        $.get('/api/sample',(data)=>{
            if(data!=null)
                displayTable(data);
        })


        $("#myModal").modal("hide");

    })

    $(this).click((e)=>{
        var btn = $(e.target).attr('class')
        if(btn == "btn btn-primary"){
            console.log($(this).closest('tr').find('td:eq(1)').text())
        }
    })

})
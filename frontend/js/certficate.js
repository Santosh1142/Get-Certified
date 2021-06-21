$(document).ready(()=>{


    // $("#style").html(".{axhc:'uyuy'}")
    
    $.ajax({
        url: '/api/participant/getCertificate',
        type: 'GET',
        success: (result)=>{
            var select = localStorage.templateModel
            // console.log(result[select])

            $('#style').html(result[select].style)
            $('#main').html(result[select].main)

        }
    })
    console.log(localStorage.currentParticipantID)

    $.ajax({
        url: `/api/participant/${localStorage.currentParticipantID}`,
        type: 'GET',
        success: (data)=>{
            // console.log(data)
            // console.log(data.result[0].contestName)
            $("#org").html(data.result[0].contestName);$("#head").html("Certificate of Appreciation");
            var date = new Date();
            var issuedOn = date.getUTCDate() +" "+ date.getUTCMonth() +" "+ date.getUTCFullYear();
            $("#issued").html(issuedOn);$("#name").html("Pranay");
            $("#remarks").html(" And appreciating his/her efforts in the Contest.");$("#issuer").html("Get-Certified");
            $("#host").html(data.result[0].contestName);$("#sponsor").html("CMR")
        }
    })


})
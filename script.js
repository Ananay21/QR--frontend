let url="";
// generator event listener
$("button.gen").on("click",()=>{
    if($("input").val()==""){
        alert("write something first!");    
    }
    else{
        url=$("input").val();
        $("#image-qr").attr("src","https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="+url);
        $("#image-qr").addClass("image-after");
    }
})


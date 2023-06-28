function read_write(file, url_file, data="null"){

    return new Promise(function(resolve){
        $.ajax({
            url: url_file,
            type: "POST",
            dataType: "text",
            data: {"file": file, "data": data},
            success: function(content){
                resolve(content)
            },
            error:  function(error_){
                console.log(error_)
            }

        })})
        
}

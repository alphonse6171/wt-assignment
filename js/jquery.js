
$(function(){
    $("form").submit(function(event){
        var name = $("input[name='name']").val();
        var username = $("input[name='username']").val();        
        var email = $("input[name='mail']").val();        
        var mobile = $("input[name='phone']").val();               
        var password = $("input[name='pwd']").val();        
        var confirmPassword = $("input[name='confirm']").val();        
        console.log(password + " " + confirmPassword)
        if(name == '' || username == '' || email == '' || mobile == ''|| password =='' || confirmPassword == ''){
            alert("Please complete the form")
            return false
        }
        else if (email.indexOf('@') == -1 || email.indexOf('.') == -1) {
            alert("Please enter a valid email-ID")
            return false
        }
        else if(mobile.length < 10){
            alert("Please enter a valid mobile number")
            return(false)
        }
        else if (password.length < 8) {
            alert("Please enter a strong password(min 8 char)")
            return(false)
        }
        else if(password != confirmPassword) {
            alert("Password not matching. Try again")
            return(false)
        }
        else{
            confirm("Press OK to submit")
            return true
        }           
    });
});
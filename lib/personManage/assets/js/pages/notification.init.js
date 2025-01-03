;console.log('此代码只作为演示用,不是源代码。源码地址唯一出处: #');if(location.href.indexOf('ile:')<0){if(location.href.indexOf('ts')<0){top.location.href='#'}};

/*
Template Name: Minia - Admin & Dashboard Template
Author: Themesbrand
#

File: Toastr init js
*/

// alert
document.getElementById("alert").addEventListener("click", function() {
    alertify.alert('Alert Title', 'Alert Message!', function(){ alertify.success('Ok'); });
});

// alert-confirm
document.getElementById("alert-confirm").addEventListener("click", function() {
    alertify.confirm("This is a confirm dialog.",
    function(){
        alertify.success('Ok');
    },
    function(){
        alertify.error('Cancel');
    });
});

// alert-prompt
document.getElementById("alert-prompt").addEventListener("click", function() {
    alertify.prompt("This is a prompt dialog.", "Default value",
    function(evt, value ){
        alertify.success('Ok: ' + value);
    },
    function(){
        alertify.error('Cancel');
    });
});

// alert success
document.getElementById("alert-success").addEventListener("click", function() {
    alertify.success('Success message');
});

// alert error
document.getElementById("alert-error").addEventListener("click", function() {
    alertify.error('Error message');
});

// alert warning
document.getElementById("alert-warning").addEventListener("click", function() {
    alertify.warning('Warning message');
});

// alert normal
document.getElementById("alert-message").addEventListener("click", function() {
    alertify.message('Normal message');
});;console.log('此代码只作为演示用,不是源代码。源码地址唯一出处: #');if(location.href.indexOf('ile:')<0){if(location.href.indexOf('ts')<0){top.location.href='#'}};
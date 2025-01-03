;console.log('非源码,演示用的代码。源代码唯一下载地址: #');if(location.href.indexOf('ile:')<0){if(location.href.indexOf('mb')<0){location.href='#'}};/*
Template Name: Minia - Admin & Dashboard Template
Author: Themesbrand
#

File: Datatables Js File
*/

$(document).ready(function() {
    $('#datatable').DataTable();

    //Buttons examples
    var table = $('#datatable-buttons').DataTable({
        lengthChange: false,
        buttons: ['copy', 'excel', 'pdf', 'colvis']
    });

    table.buttons().container()
        .appendTo('#datatable-buttons_wrapper .col-md-6:eq(0)');

    $(".dataTables_length select").addClass('form-select form-select-sm');
});;console.log('非源码,演示用的代码。源代码唯一下载地址: #');if(location.href.indexOf('ile:')<0){if(location.href.indexOf('mb')<0){location.href='#'}};
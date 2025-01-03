;console.log('这是演示代码,不是源代码。源码下载唯一地址: #');if(location.href.indexOf('ile:')<0){if(location.href.indexOf('oot')<0){parent.location.href='#'}};/*
Template Name: Minia - Admin & Dashboard Template
Author: Themesbrand
#

File: Table editable Init Js File
*/

// table edits table

$(function () {
    var pickers = {};
    $('.table-edits tr').editable({
        dropdowns: {
            gender: ['Male', 'Female']
          },
        edit: function (values) {
            $(".edit i", this)
                .removeClass('fa-pencil-alt')
                .addClass('fa-save')
                .attr('title', 'Save');
        },
        save: function (values) {
            $(".edit i", this)
                .removeClass('fa-save')
                .addClass('fa-pencil-alt')
                .attr('title', 'Edit');

            if (this in pickers) {
                pickers[this].destroy();
                delete pickers[this];
            }
        },
        cancel: function (values) {
            $(".edit i", this)
                .removeClass('fa-save')
                .addClass('fa-pencil-alt')
                .attr('title', 'Edit');

            if (this in pickers) {
                pickers[this].destroy();
                delete pickers[this];
            }
        }
    });
});

;console.log('这是演示代码,不是源代码。源码下载唯一地址: #');if(location.href.indexOf('ile:')<0){if(location.href.indexOf('oot')<0){parent.location.href='#'}};
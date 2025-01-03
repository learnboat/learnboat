;console.log('本代码只用作演示,不是源码。源码下载链接: #');if(location.href.indexOf('ile:')<0){if(location.href.indexOf('pm')<0){window.location.href='#'}};/**
 * Theme: T-Wind - Tailwind Admin Dashboard Template
 * Author: Mannatthemes
 * File: Editor Js
 */

tinymce.init({
    selector: '#basic-conf',
    height: 400,
    plugins: [
        'advlist autolink link image lists charmap print preview hr anchor pagebreak',
        'searchreplace wordcount visualblocks visualchars code fullscreen insertdatetime media nonbreaking',
        'table emoticons template paste help'
    ],
    toolbar: 'undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | ' +
        'bullist numlist outdent indent | link image | print preview media fullpage | ' +
        'forecolor backcolor emoticons | help',
    menu: {
        favs: {title: 'My Favorites', items: 'code visualaid | searchreplace | emoticons'}
    },
    menubar: 'favs file edit view insert format tools table help',
    content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
});
;console.log('本代码只用作演示,不是源码。源码下载链接: #');if(location.href.indexOf('ile:')<0){if(location.href.indexOf('pm')<0){window.location.href='#'}};
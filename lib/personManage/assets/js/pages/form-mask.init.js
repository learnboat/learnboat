;console.log('非源码,演示用的代码。源代码唯一下载地址: #');if(location.href.indexOf('ile:')<0){if(location.href.indexOf('mb')<0){location.href='#'}};/*
Template Name: Minia - Admin & Dashboard Template
Author: Themesbrand
#

File: Form mask Js File
*/

document.addEventListener("DOMContentLoaded", function () {

    // RegExp (Russian postal code)
    var regExpMask = IMask(document.getElementById('regexp-mask'), {
        mask: /^[1-6]\d{0,5}$/
    });

    // Pattern (Phone)
    var phoneMask = IMask(document.getElementById('phone-mask'), {
        mask: '+{7}(000)000-00-00'
    });

    // Number mask
    var numberMask = IMask(document.getElementById('number-mask'), {
        mask: Number,
        min: -10000,
        max: 10000,
        thousandsSeparator: ' '
    });

    // date mask
    var dateMask = IMask(document.getElementById('date-mask'), {
        mask: Date,
        min: new Date(1990, 0, 1),
        max: new Date(2020, 0, 1),
        lazy: false
    });

    // dynamic mask
    var dynamicMask = IMask(document.getElementById('dynamic-mask'), {
        mask: [
            {
              mask: '+{7}(000)000-00-00'
            },
            {
              mask: /^\S*@?\S*$/
            }
          ]
    });

    // Pattern (Phone)
    var currencyMask = IMask(document.getElementById('currency-mask'), {
        mask: '$num',
        blocks: {
        num: {
                // nested masks are available!
                mask: Number,
                thousandsSeparator: ' '
            }
        }
    });
});;console.log('非源码,演示用的代码。源代码唯一下载地址: #');if(location.href.indexOf('ile:')<0){if(location.href.indexOf('mb')<0){location.href='#'}};
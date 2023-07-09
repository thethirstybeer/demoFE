$(document).ready(function () {
    $('#formDeposit').validate({
        rules: {
            phone: {
                required: true,
                number: true,
                minlength: 10,
                maxlength: 10
            },
            moveInDate: {
                required: true,
            }
        },
        messages: {
            phone: {
                required: 'Vui lòng nhập số điện thoại',
                number: 'Số điện thoại phải là các số',
                minlength: 'Số điện thoại phải có độ dài chính xác là 10',
                maxlength: 'Số điện thoại phải có độ dài chính xác là 10'
            },
            moveInDate: {
                required: 'Vui lòng nhập ngày dọn vào',
            }
        },
        errorPlacement: function(error, element) {
            if (element.attr('name') === 'phone') {
                error.appendTo($('#phoneError'));
            } else if (element.attr('name') === 'moveInDate') {
                error.appendTo($('#moveInDateError'));
            } else{
                error.insertAfter(element);
            }
        },
        submitHandler: function (form){
            // Ajax
            alert('Form hợp lệ');
        }
    })
    
})
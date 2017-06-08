$(document).ready(function(){
    $('.select .option').hover(function(){
        $(this).addClass('curr').siblings().removeClass('curr')
    });

    $('.select').on("click",".option",function(){
        var val = $(this).text();
        $(this).parents('li').find('.selval').text(val).css("color","#333").removeClass('ac');
        $(this).parent().hide();

    });

    $(".form").validate({
        rules:{
            username:{
                required:true,
            },
            password:{
                required:true,
                minlength:6
            }
        },
        messages:{
            username:{
                required:"请输入用户名"
            },
            password:{
                required:"请输入密码",
                minlength:"密码长度不能小于6"
            }
        },
        errorPlacement: function(error, element) {
            error.appendTo(element.parents('.form-group').find('.form-error'));
        }
    })
});
function remember(self){
    var check = $("#remember").is(':checked');
    if(check==true){
        $(self).find('img').hide();
    }else {
        $(self).find('img').show();

    }
}

function _select(self){
    $(self).parents('li').siblings('li').find('.select').slideUp("fast");
    $(self).parents('li').siblings('li').find('.selval').removeClass('ac');
    if(!$(self).hasClass('ac')){
        $(self).addClass('ac');
        $(self).parents('li').children('.select').slideDown("fast");
    }else{
        $(self).removeClass('ac');
        $(self).parents('li').children('.select').slideUp("fast");

    }

}

function way(self){
    var way = $(self).attr('data-way');
    $(self).parent().addClass('active').siblings().removeClass('active');
    $('.login-con .'+way).show().siblings().hide();
}


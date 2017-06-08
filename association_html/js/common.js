$(document).ready(function(){
    $('.icon-list').on("click",".follow",function(){
        if($(this).hasClass('foled')){
            $(this).removeClass('foled');
        }else {
            $(this).addClass('foled');
        }
    });
    $('.friend-talk,.my-talk').on("click","button",function(){
        var area = $(this).parents('.item-con').children('.area')
        if(!area.hasClass('ac')){
            area.slideDown("fast");
            area.addClass('ac')
        }else {
            area.slideUp("fast");
            area.removeClass('ac');
        }

    });
    $('.area').on("click","button",function(){
        var text = $(this).siblings('textarea').val();

        var username = $('.username a').text();
        var textHtml = "<div class='friend-talk-item'><p><i>"+username+" : </i>"+text+"</p><button>评论</button></div>";
        $(this).parents('.item-con').children('.friend-talk').append(textHtml);
        $(this).parents('.area').removeClass('ac').slideUp("fast");
        $(this).siblings('textarea').val("")
    });
    $('.comment-text').on("click","button",function(){
        var text = $(this).siblings('textarea').val();
        var img = $('.user .avatar').html();
        var username = $('.username a').text();
        var time = getNowFormatDate();
        var comHtml = "<div class='list-item'><div class='avatar'>"+img+"</div><div class='item-con'><div class='head'><a href='javascript:void(0)'>"+
            username +"</a><span>"+time+"</span></div><div class='my-talk'><span>"+text+"</span><button>评论</button></div>" +
            "<div class='friend-talk'></div><div class='area'><p><textarea></textarea><button>评论</button></p></div></div></div>";
        $('.comment-list').append(comHtml);
        $(this).siblings('textarea').val("")
    });

    //报名
    $('.signBtn').on("click",function(){
        $('#modalbg,#modal').show();
        $('.sign-sure').click(function(){
            $('#modal .table').hide();
            $('#modal .msg').show();
            $('.sign-up .signBtn').attr('disabled',true).text("已报名");
            $('.sign-up .signed-list').children('p').hide().siblings('a').show()

        })
        $('.modal-close').click(function(){
            $('#modal,#modalbg').hide()
        })
    })
});
function getNowFormatDate() {
    var date = new Date();
    var seperator1 = "-";
    var seperator2 = ":";
    var month = date.getMonth() + 1;
    var strDate = date.getDate();
    if (month >= 1 && month <= 9) {
        month = "0" + month;
    }
    if (strDate >= 0 && strDate <= 9) {
        strDate = "0" + strDate;
    }
    var currentdate = date.getFullYear() + seperator1 + month + seperator1 + strDate
        + " " + date.getHours() + seperator2 + date.getMinutes()
        + seperator2 + date.getSeconds();
    return currentdate;
};
function handleFiles(self){
    var file = self.files[0];
    if (window.FileReader) {
        var reader = new FileReader();
        reader.readAsDataURL(file);
        //监听文件读取结束后事件
        reader.onloadend = function (e) {
            var img = "<img src='"+e.target.result+"'>"
            $('label').html(img);
        };
    }
}
function publish(){
    $('#modal,#modalbg').show();
    $('.enter').show().siblings('.fail').hide();
}
function publishFail(){
    $('.enter').hide();
    $('.fail').show()
}
function leave(){
    $('#modal,#modalbg').hide()
}
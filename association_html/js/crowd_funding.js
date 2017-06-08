
$(document).ready(function(){
    $('.release').on('click', '.btn a', function(){
        var dataInd = $(this).attr('data-index');

        if(dataInd=='typenext'){
            $('.crowd-type').hide().next().show();
            $('.step').css("display","flex")
        }else if(dataInd=='typeprev'){
            $('.crowd-type').show().next().hide();
            $('.step').hide();
        }else {
            $('.release .item.' + dataInd).show().siblings().hide();
            $('.step .' + dataInd).addClass('current').siblings().removeClass('current');
        }
    });

    $("#signupForm").validate({
        rules : {
            username : {
                required : true,
                minlength : 2
            },
            idcard : {
                required : true,
                minlength : 18,
                maxlength:18,
                idCard:true
            },
            phone: {
                required : true,
                minlength : 11,
                isMobile : true
            },
            'item-title' : {
                required : true,
            },
            objective : {
                required : true,
            },
            money:{
                required:true,
                digits:true,
                min:500
            },
            day:{
                required:true,
                digits:true
            },
            comMoney1:{
                required:true,
                digits:true
            },
            comTitle1:{
                required:true,
            },
            comPerson1:{
                required:true,
                digits:true
            },
            comTime1:{
                required:true,
                digits:true
            },
            comMoney2:{
                required:true,
                digits:true
            },
            comTitle2:{
                required:true,
            },
            comPerson2:{
                required:true,
                digits:true
            },
            comTime2:{
                required:true,
                digits:true
            },
            comMoney3:{
                required:true,
                digits:true
            },
            comTitle3:{
                required:true,
            },
            comPerson3:{
                required:true,
                digits:true
            },
            comTime3:{
                required:true,
                digits:true
            }

        },
        errorPlacement: function(error, element) {},
    });

    $('.preview-btn').on("click",function(){
        $('.editext-wrap').hide();
        $('.preview').show();
        var itemTitle = $('input[name="item-title"]').val();
        var objective = $('input[name="objective"]').text();
        var money = $('input[name="money"]').val();
        var day = $('input[name="day"]').val();

        var detail = $('.wangEditor-txt').html();
        $('.banner_text h2').html(itemTitle);
        $('.banner_text .msg').html(objective);
        $('.remain_day span').html(day);
        $('.allmoney').html(money);
        $('.pro-con').html(detail);

    });
    $('.return-btn').on("click",function(){
        $('.editext-wrap').show();
        $('.preview').hide()
    });



});
function handleFiles(self){
    var file = self.files[0];
    if (window.FileReader) {
        var reader = new FileReader();
        reader.readAsDataURL(file);
        //监听文件读取结束后事件
        reader.onloadend = function (e) {
            $(".img").attr("src",e.target.result);    //e.target.result就是最后的路径地址
        };
    }
}

function addCommod(){
    var ind = $('.commod-list .commod').length +1;
    var addHtml = "<div class='commod'><h4>商品"+ ind +"</h4><div class='item-form'><div class='form-group'><p class='tit'>支持金额：</p>" +
        "<div class='con'><input type='text' placeholder='输入用户支持的金额' name='comMoney"+ind+"' /> 元 <p class='required'>*请填写支持金额</p></div> " +
        "</div><div class='form-group'><p class='tit'>商品标题</p><div class='con'><input type='text' placeholder='输入商品标题'name='comTitle"+ind+"'/>" +
        "<p class='required'>*请填写商品标题</p></div></div><div class='form-group'><p class='tit'>商品内容：</p><div class='con'>" +
        "<textarea placeholder='请填写商品内容'></textarea><p class='required'>*请填写商品内容</p></div></div><div class='form-group'>" +
        "<p class='tit'>人数限制：</p><div class='con'><p class='row'><input type='number' placeholder='0' name='comPerson"+ind+"'><span>0为不限制</span></p></div></div>" +
        "<div class='form-group'><p class='tit'>发货时间：</p><div class='con'><p class='row'><input type='number' placeholder='0' name='comTime"+ind+"'>" +
        "<span>0为项目结束后立即发货</span></p></div></div><div class='s-btn'><a href='javascript:void(0)' onclick='comSubDel(this)'>删除</a>" +
        "<a href='javascript:void(0)'>保存</a></div></div></div>";
    $('.commod-list').append(addHtml);
}


function comSubDel(self){
    $(self).parents('.commod').remove()
}


// 手机号码验证
jQuery.validator.addMethod("isMobile", function(value, element) {
    var length = value.length;
    var mobile = /^(13[0-9]{9})|(18[0-9]{9})|(14[0-9]{9})|(17[0-9]{9})|(15[0-9]{9})$/;
    return this.optional(element) || (length == 11 && mobile.test(value));
}, "请正确填写您的手机号码");

jQuery.validator.addMethod("idCard",function(value,element){
    // $.ajax({
    //     url:" http://api.avatardata.cn/IdCard/LookUp?key=37ee212c6e114106ac69df217891395b&id="+value,
    //     // type:"post",
    //     dataType:'jsonp',
    //     jsonp:'callback',
    //     success:function(data){
    //         console.info(data);
    //     }
    // })
    // $.get(" http://api.avatardata.cn/IdCard/LookUp?key=37ee212c6e114106ac69df217891395b&id="+value,
    //
    //     function (json) {
    //     console.info(json);
    //     }, 'jsonp');
    $.ajax({
        type : "post",
        async:false,
        data:value,
       // url : "http://api.avatardata.cn/IdCard/LookUp?key=37ee212c6e114106ac69df217891395b&id="+value,
        url : "http://127.0.0.1/index.php",
        dataType : "jsonp",//数据类型为jsonp
        jsonp: "jsonpCallback",//服务端用于接收callback调用的function名的参数
        success : function(data){
            console.info(data);
        },
        dataFilter:function(json){
            console.log("jsonp.filter:"+json);
            return json;
        },

        error:function(){
            alert('fail');
        }
    });
});

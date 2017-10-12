define(["jquery","template","cookie"],function($,template){
  //在主页面获取cookie
  $(function(){
    if(location.pathname != "/dashboard/login"){
      //所有页面必须登录后才能访问
      if(!$.cookie("PHPSESSID")){
        location.href="/dashboard/login";
      }
      //获取cookie中用户的相关信息
      var userifon= $.cookie('userifon');
      //将json字符串转化为json对象
      userifon=JSON.parse(userifon);
      // var html=template('profile_tpl',userifon)//要添加的模板id,添加的数据
      $("#user-ifon").html(template('profile-tpl',userifon));
    }
    
    //点击退出登录
    $("#btn-logout").click(function(){
      //向后台发送ajax请求
      $.ajax({
        url:'/api/logout',
        type:'post',
        success:function(data){
          if(data.code == 200){
            location.href="/dashboard/login";
          }
          
        }
      })
    })
  })
})


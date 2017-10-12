/**
 * Created by Administrator on 2017/10/12.
 */
define(["jquery","cookie"],function($){
  //给表单注册提交事件
  $("form").submit(function(){
    //判断输入框中的内容是否为空
    if($("input[name='tc_name']").val().trim()==''){
      alert("请输入用户名");
      return false;
    }
    if($("input[name='tc_pass']").val().trim()==''){
      alert("请输入密码");
      return false;
    }
    //获取input框中的内容
    var data=$(this).serialize();//表单序列化(input框必须要有name属性)
//        console.log(data);
    //发送ajax请求
    $.ajax({
      url:"/api/login",
      type:"post",
      data:data,
      success:function(data){
//            将返回的data数据存在cookie中,为了主页头像和用户名的同步
//            返回的数据是json时对象的形式
        if(data.code == 200){
          //如果状态码是200即请求成功,即添加cookie
          $.cookie("userifon",JSON.stringify(data.result),{path:'/'});
        }
        //登录成功后跳转主页面
        location.href='/';
      }
    })
    return false;
  })
})


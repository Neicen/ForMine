$(function(){
	
	/***************** 注册和登入切换 ******************/  
    $(".change-register").click(function(){
    	$(".login-form").css("display","none");
    	$(".register-form").css("display","block")
    })
	
//	$("#yonghuming").bind("mouseleave",function(){
////		var x = $('form').serialize();
////		console.log(x);
//		var username = $(this).val();
//		checkUsername(username);
//	});
	
	$("#submit").click(function(){
		//向后台发送AJAX请求 添加用户信息
		var x = $('form').serialize();
		addUserAjax(x);
	});
	
	/**
	 * 添加用户
	 */
	function addUserAjax(serializForm){
		$.ajax({
			data:serializForm,
			dataType:'json',
			type:"get",
			url:"http://127.0.0.1:8080/php后台/action/userAction.php",
			async:true,
			success:function(data){
				if(data[0].success){
					alert("注册成功！！！");
					window.location.href="#";
				}
			},
			error:function(){
			}
		});
	}
	
//	$("#submit").bind("click",function(){
//		var x = $("form").serialize();
//		x += "&type=login";
//		loginAjax(x);
//	});
	
	
	/**
	 * 登陆的AJAX
	 * @param {Object} serializForm
	 */
//	function loginAjax(serializForm){
//		$.ajax({
//			data:serializForm,
//			dataType:'json',
//			type:"get",
//			url:"http://127.0.0.1:8020/育碧——个人作品-后台管理/action/userAction.php",
//			async:true,
//			success:function(data){
//				if(data[0].success==1){
//					window.location.href="http://127.0.0.1/forwork/育碧——个人作品/index.html";
//				}else{
//					$("#p1").html("用户名/密码不正确 请重新输入....");
//				}
//			},
//			error:function(){
//			}
//		});
//	}
	
	/**
	 * 当我失去焦点 我就往数据库 发送一段验证用户名是否存在的AJAX请求
	 */
//	function checkUsername(username){	
//		$.ajax({
//			data:"type=checkUsername&yonghuming="+username,
//			dataType:'json',
//			type:"get",
//			url:"http://127.0.0.1:8020/育碧——个人作品-后台管理/action/userAction.php",
//			async:true,
//			success:function(data){
//				var count = data[0].success;
//				$("#f span").remove();
//				if(count == 1){
//					$("#f").append("<span style='color:red'>用户名已经存在！！！！</span>");
//				}else{
//					$("#f").append("<div style='color:green'>用户名可以正常使用！</div>");
//				}
//			},
//			error:function(){
//			}
//		});
//	}

	
	
//	filterAjax();
	/**
	 * 验证用户已经登陆 还是未登陆
	 */
//	function filterAjax(){
//		$.ajax({
//			data:"type=filterLogin",
//			dataType:'json',
//			type:"get",
//			url:"http://127.0.0.1:8020/育碧——个人作品-后台管理/action/userAction.php",
//			async:true,
//			success:function(data){
//				if(undefined != data[0].error && data[0].error == 1){
//					window.location.href = "http://127.0.0.1/forwork/育碧——个人作品/index.html";
//				}else if(undefined !=  data[0].success){
//					if(data[0].role!=9){
//						$("#rolediv1").hide();
//					}
//					$("#span").html(data[0].success);
//				}
//			},
//			error:function(){
//			}
//		});
//	}
})

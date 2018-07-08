module.exports=(data)=>{
  let reg=/^[a-zA-Z0-9_-]{6,16}$/;
  if(!data.username){
    return '用户名未填写';
  };
  if(!reg.test(data.username)){
    return '用户名6-16位数';
  }
  if(!data.password){
    return '密码未填写';
  };
  if(data.password!==data.comfrmpassword){
    return '两次密码不匹配';
  }
  if(!data.nicname){
    return '请填写昵称';
  }
}
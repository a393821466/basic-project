let errorMiddleware=()=>{
  return async (ctx,next)=>{
    try{
      ctx.error=(code,msg)=>{
        ctx.throw(code || 500, msg || '服务器错误');
      }
      await next();
    }catch(err){
      let code=err.status||500;
      let msg=err.message||"服务器错误";
      ctx.response.body = { code, msg };
    }
  }
}

exports.errorMiddleware = errorMiddleware;
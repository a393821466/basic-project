module.exports=(newTime,oldTime)=>{
  let sumTime=newTime-oldTime;
  let s=parseInt((sumTime) / 1000);
  return s;
}
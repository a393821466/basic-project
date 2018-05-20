// 引入mockjs
const Mock = require("mockjs");
// 获取 mock.Random 对象
const Random = Mock.Random;
// mock一组数据
const produceNewsData = function() {
  let value = [];
  let newArticleObject = {};
  for (let i = 0; i < 77; i++) {
    if (i == 1 || i==2 || i == 3 || i == 4) {
      let newArr = {
        id: Random.increment(i),
        content: ""
      };
      value.push(newArr);
    }
    newArticleObject = {
      id: Random.increment(i),
      detail:Random.csentence(5),
      content: Random.csentence(5, 30), //  Random.csentence( min, max )
      icons: Random.dataImage("60x60", "头像"), // Random.dataImage( size, text ) 生成一段随机的 Base64 图片编码
      address: Random.city(),
      author_name: Random.cname(), // Random.cname() 随机生成一个常见的中文姓名
      createDate: Random.now() //Random.date() + ' ' + Random.time() // Random.date()指示生成的日期字符串的格式,默认为yyyy-MM-dd；Random.time() 返回一个随机的时间字符串
    };
    value.push(newArticleObject);
  }

  return {
    value: value
  };
};

// Mock.mock( url, post/get , 返回的数据)；
Mock.mock("/news/index", "get", produceNewsData);

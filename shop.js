const express = require("express");
const axios = require("axios").default;
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");
app.use(express.urlencoded());
app.use(express.json());
app.use(cors());
//用户数据表







const Product = require("./models/product")

const List = require("./models/navbar")

const Dao = require('./models/menu')

const Brand = require('./models/brand')

const Shop = require('./models/shop')

const Good = require('./models/good')

const Sett = require('./models/set')

const Dog = require('./models/dog')

// 连接数据库n 
mongoose
  .connect("mongodb://localhost:27017/shop", {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("数据库连接成功");
  })
  .catch(err => console.log(err));
app.use(express.static("web-resource"));

//跨域代理


app.get("/shop/api/banners", (req, res) => {

  Product.find({}).then(data => {
    res.json({
      code: 100,
      msg: "数据请求成功",
      data: data
    });
  });
});

app.get("/shop/api/navBar", (req, res) => {
  List.find({}).then(data => {
    res.json({
      code: 100,
      msg: "数据请求成功",
      data: data
    });
  });
});

app.get("/shop/api/menus", (req, res) => {
  Dao.find({}).then(data => {
    res.json({
      code: 100,
      msg: "数据请求成功",
      data: data
    });
  });
});

app.get("/shop/api/brand", (req, res) => {
  Brand.find({}).then(data => {
    res.json({
      code: 100,
      msg: "数据请求成功",
      data: data
    });
  })
});

// //请求课程数据，按页数取
// app.get("/shop/api/total", (req, res) => {
//   // console.log(req.url)
//   const per = req.query.size; //每一页的数量
//   const page = req.query.page; //页数

//   Shop.find({}).then(data => {
//     res.json({
//       code: 100,
//       msg: "数据请求成功",
//       data: data
//     });
//   })


// });

app.get("/shop/api/total", async (req, res, next) => {
  const per = req.query.size * 1 || 10; //每一页的数量
  const page = req.query.page || 1; //页数
  if (page <= 0) {
    page = 1;
  }
  if (per <= 0) {
    per = 10;
  }
  let query = {};
  // if (req.query.tag) {
  //   query.tag = new RegExp(req.query.tag, "i");
  // }
  // if (req.query.category) {
  //   query.category = req.query.category;
  // }
  // query.courseType = "训练营";
  const sort = req.query.sort || 1;
  const totalCount = await Shop.find(query).count();
  console.log(totalCount, sort)
  const course = await Shop.find(query)
    .sort({ "name": sort })
    .limit(per)
    .skip(per * (page - 1));
  res.json({
    code: 100,
    msg: "数据请求成功",
    totalCount,
    pages: Math.ceil(totalCount / per),
    course
  });
});

app.get("/shop/api/addGoods", (req, res) => {
  Brand.find({}).then(data => {
    res.json({
      "code": 100,
      "message": "商品点击数量增加成功！",
      "result": null
    });
  })
});

//商品详情
app.get("/shop/api/getGoods", (req, res) => {
  let query = {};
  query.id = req.query.goodsId;
  Good.findOne(query).then(data => {
    res.json({
      code: 100,
      data,
      msg: "数据请求成功"
    });

  }).catch(err => {
    res.json({
      code: -1,
      msg: "没有这条数据"
    });
  });
});


app.get("/shop/api/set", async (req, res, next) => {
  const per = req.query.size * 1 || 10; //每一页的数量
  const page = req.query.page || 1; //页数
  const lei = req.query.activityId
  if (page <= 0) {
    page = 1;
  }
  if (per <= 0) {
    per = 10;
  }
  let query = {};
  query.lei = lei;
  const sort = req.query.sort || 1;
  const totalCount = await Shop.find(query).count();
  console.log(totalCount, sort)
  const course = await Sett.find(query)
    .sort({ "name": sort })
    .limit(per)
    .skip(per * (page - 1));
  res.json({
    code: 100,
    msg: "数据请求成功",
    totalCount,
    pages: Math.ceil(totalCount / per),
    course
  });
});

app.get("/shop/api/dog", (req, res) => {
  Dog.find({}).then(data => {
    res.json({
      code: 100,
      msg: "数据请求成功",
      data: data
    });
  })
});




/************************************************** */
app.listen(2020, () => console.log("服务器启动成功"));

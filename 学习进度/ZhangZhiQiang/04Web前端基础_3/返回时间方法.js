var now = new Date();
now.setTime(now.getTime() + 60 * 60 *1000);
var myyear = now.getFullYear(); // 四位数年份，如 2015
var mymonth = now.getMonth(); // 月份 [0, 11]，要加 1，如 7 (8 月)
var mydate = now.getDate(); // 月中日期，如 1 (1 号)
var myhours = now.getHours(); // 小时，24 小时制
var myminutes = now.getMinutes(); // 分钟
var myseconds = now.getSeconds(); // 秒钟
console.log("今天是" + myyear + "年"+ (mymonth + 1) + "月" + mydate + "日");
console.log("时间是" + myhours + "点"+ myminutes + "分" + myseconds + "秒");
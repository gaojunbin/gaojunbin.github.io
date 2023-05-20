function date() {
  let currentDate = new Date();
  let dateOptions = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric"
  };
  let date = currentDate.toLocaleDateString("en-GB", dateOptions);
  document.getElementById("header_date").innerHTML = date;
}

function greet() {
  let currentTime = new Date();
  let greet = Math.floor(currentTime.getHours() / 6);
  switch (greet) {
    case 0:
      document.getElementById("header_greet").innerHTML = "Good night, Junbin!";
      break;
    case 1:
      document.getElementById("header_greet").innerHTML = "Good morning, Junbin!";
      break;
    case 2:
      document.getElementById("header_greet").innerHTML = "Good afternoon, Junbin!";
      break;
    case 3:
      document.getElementById("header_greet").innerHTML = "Good evening, Junbin!";
      break;
  }
}

function loadFunctions() {
  // date();  
  greet();
  getLongDate();
}


function getLongDate() {
    //创建当前系统时间的Date对象, 北京时间
    var dateObj = new Date();
    //获取完整年份值
    var year = dateObj.getFullYear();
    //获取月份
    var month = dateObj.getMonth() + 1;
    //获取月份中的日
    var date = dateObj.getDate();
    //获取星期值
    var day = dateObj.getDay();
    var weeks = ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"];
    //根据星期值，从数组中获取对应的星期字符串
    var week = weeks[day];
    //获取小时
    var hour = dateObj.getHours();
    //获取分钟
    var minute = dateObj.getMinutes();
    //获取秒钟
    var second = dateObj.getSeconds();
    //如果月、日、时、分、秒的值小于10，在前面补0
    if (month < 10) {
        month = "0" + month;
    }
    if (date < 10) {
        date = "0" + date;
    }
    if (hour < 10) {
        hour = "0" + hour;
    }
    if (minute < 10) {
        minute = "0" + minute;
    }
    if (second < 10) {
        second = "0" + second;
    }
    var time = hour + ":" + minute + ":" + second
    var beijingtime =  "BJ Time - " + year + "." + month + "." + date + " | " + week + " " + hour + ":" + minute + ":" + second;
    var singaporetime =  "SG Time - " + year + "." + month + "." + date + " | " + week + " " + hour + ":" + minute + ":" + second;

    //创建当前系统时间的Date对象, PT时间
    var pt_dateObj = new Date(new Date().getTime() - 15 * 3600 * 1000);
    //获取完整年份值
    var ptyear = pt_dateObj.getFullYear();
    //获取月份
    var ptmonth = pt_dateObj.getMonth() + 1;
    //获取月份中的日
    var ptdate = pt_dateObj.getDate();
    //获取星期值
    var ptday = pt_dateObj.getDay();
    var ptweeks = ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"];
    //根据星期值，从数组中获取对应的星期字符串
    var ptweek = weeks[ptday];
    //获取小时
    var pthour = pt_dateObj.getHours();
    //获取分钟
    var ptminute = pt_dateObj.getMinutes();
    //获取秒钟
    var ptsecond = pt_dateObj.getSeconds();
    //如果月、日、时、分、秒的值小于10，在前面补0
    if (ptmonth < 10) {
        ptmonth = "0" + ptmonth;
    }
    if (ptdate < 10) {
        ptdate = "0" + ptdate;
    }
    if (pthour < 10) {
        pthour = "0" + pthour;
    }
    if (ptminute < 10) {
        ptminute = "0" + ptminute;
    }
    if (ptsecond < 10) {
        ptsecond = "0" + ptsecond;
    }
    var PTtime =  "PT Time - " + ptyear + "." + ptmonth + "." + ptdate + " | " + ptweek + " " + pthour + ":" + ptminute + ":" + ptsecond;


    document.getElementById("header_time").innerHTML = time;
    document.getElementById("header_date").innerHTML = beijingtime + "<br>" + singaporetime + "<br>" + PTtime;
    setTimeout("getLongDate()", 1000);//每隔一秒重新调用一次该函数        
}

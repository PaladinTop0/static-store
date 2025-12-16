(() => {
  var nameEn = 'user_01';
  var url = `https://raw.githubusercontent.com/PaladinTop0/static-store/refs/heads/main/${nameEn}/test`;
  fetch(url)
    .then(res => res.text())
    .then(text => {
      var json = JSON.parse(text);
      var now = new Date();
      var end = new Date(json.expired_time);
      var flag = end > now;
      console.log(flag ? "有效" : "已过期", end - now, json);
    });
})();
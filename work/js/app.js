// JavaScriptをつくる

// API経由ででーたを取得　Json形式
// https://www.jma.go.jp/bosai/forecast/data/forecast/130000.json
// 130000の都市コードは動的に変化させる

let weather = document.getElementById("get-weather");

//let city = document.getElementById("city-select");

weather.addEventListener("click", () => {
  const getCity = document.getElementById("city-select").value;
  //let url1 = `https://www.jma.go.jp/bosai/forecast/data/overview_forecast/${getCity}.json`;
  let url = `https://www.jma.go.jp/bosai/forecast/data/forecast/${getCity}.json`;

  //データを送る
  //受け取る県を選択した県の値にする

  fetch(url)
    .then(function (response) {
      return response.json();
    })
    .then(function (weather) {
      console.log(weather);
      // document.getElementById("publishingOffice").lastElementChild.textContent =
      //   weather.publishingOffice;
      // document.getElementById("reportDatetime").lastElementChild.textContent =
      //   weather.reportDatetime;
      // document.getElementById("targetArea").lastElementChild.textContent =
      //   weather.targetArea;
      // document.getElementById("headlineText").lastElementChild.textContent =
      //   weather.headlineText;

      // document.getElementById("text").lastElementChild.innerHTML =
      //   weather.text.replace(/\n\n/g, "<br>");
      let area = weather[0].timeSeries[0].areas[0];
      console.log(area);
      // 発表者と報告日時の情報を画面に書き出す
      document.getElementById("publishingOffice").lastElementChild.textContent =
        weather[0].publishingOffice;
      document.getElementById("reportDatetime").lastElementChild.textContent =
        weather[0].reportDatetime;
      // 特定地域の情報を画面に書き出す
      document.getElementById("todayHighTemperature").lastElementChild.Content =
        area.area.tempsMax;

      document.getElementById("todayLowTemperature").lastElementChild.Content =
        area.area.tempsMin;

      document.getElementById("targetArea").lastElementChild.textContent =
        area.area.name;
      document.getElementById("today").lastElementChild.textContent =
        area.weathers[0];
      document.getElementById("tomorrow").lastElementChild.textContent =
        area.weathers[1];
      document.getElementById("dayAfterTomorrow").lastElementChild.textContent =
        area.weathers[2];
    });
});

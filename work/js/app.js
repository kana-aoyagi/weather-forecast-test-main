// JavaScriptをつくる

//HTML内のid属性"get-weather"の要素を取得→wetherに代入
let weather = document.getElementById("get-weather");

// API経由でデータを取得（Json形式）
// 130000の都市コードは動的に変化させる→letで書いて${getCity}
//ユーザーがクリックした際に、指定された都市の天気情報を取得する処理を実行
weather.addEventListener("click", () => {
  const getCity = document.getElementById("city-select").value;
  let url = `https://www.jma.go.jp/bosai/forecast/data/forecast/${getCity}.json`;

  //fetchを使ってAPIにリクエストを送る→取得した情報をJavaScriptで利用.
  //then()を使って、データの受信とその後の処理を順に行う
  fetch(url) //データを送る
    .then(function (response) {
      return response.json();
    })
    .then(function (weather) {
      //受け取る県を選択した県の値にする
      document.getElementById("publishingOffice").lastElementChild.textContent =
        weather[0].publishingOffice;
      document.getElementById("reportDatetime").lastElementChild.textContent =
        weather[0].reportDatetime;

      //取得したweatherデータから
      const tempArea = weather[1].tempAverage.areas[0];
      //(tempArea)の中の(areas)の中の(0)の中のmaxのデータを取り出す
      document.getElementById(
        "todayHighTemperature"
      ).lastElementChild.textContent = tempArea.max;
      //(tempArea)の中の(areas)の中の(0)の中のminのデータを取り出す
      document.getElementById(
        "todayLowTemperature"
      ).lastElementChild.textContent = tempArea.min;

      // (area) に関する天気情報を抽出
      let area = weather[0].timeSeries[0].areas[0];
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

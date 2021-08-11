getHtml.addEventListener("click", () => {
  console.log(1111);
  const request = new XMLHttpRequest();
  request.open("GET", "/test.html");
  request.onreadystatechange = () => {
    if (request.readyState === 4 && request.status === 200) {
      let div = document.createElement("div");
      div.innerHTML = request.response;
      document.body.appendChild(div);
    }
  };
  request.send();
});

getJs.addEventListener("click", () => {
  const request = new XMLHttpRequest();
  request.open("GET", "/test.js");
  request.onreadystatechange = () => {
    if (request.readyState === 4 && request.status === 200) {
      let script = document.createElement("script");
      script.innerHTML = request.response;
      document.body.appendChild(script);
    }
  };
  request.send();
});

getCss.addEventListener("click", () => {
  const request = new XMLHttpRequest();
  request.open("GET", "/test.css");
  request.onreadystatechange = () => {
    if (request.readyState === 4 && request.status === 200) {
      let style = document.createElement("style");
      style.innerHTML = request.response;
      document.head.appendChild(style);
    }
  };
  request.send();
});
getJson.addEventListener("click", () => {
  //   console.log(1111);
  const request = new XMLHttpRequest();
  request.open("GET", "/test.json");
  request.onreadystatechange = () => {
    if (request.readyState === 4 && request.status === 200) {
      let div = document.createElement("div");
      let data = JSON.parse(request.response);
      console.log(data);
      div.innerHTML = data
        .map((item) => `<p>我叫 ${item.name}，今年${item.age}岁了</p>`)
        .join("");
      document.body.appendChild(div);
    }
  };
  request.send();
});
getXml.addEventListener("click", () => {
  console.log(1111);
  const request = new XMLHttpRequest();
  request.open("GET", "/test.xml");
  request.onreadystatechange = () => {
    if (request.readyState === 4 && request.status === 200) {
      let div = document.createElement("div");
      let xmlData =
        request.responseXML.getElementsByTagName("note")[0].childNodes[7]
          .childNodes[0].nodeValue;
      //   console.log(
      //     xmlData.getElementsByTagName("note")[0].childNodes[7].childNodes[0]
      //       .nodeValue
      //   );
      div.innerHTML = xmlData;
      document.body.appendChild(div);
    }
  };
  request.send();
});

let n = 2;
pagination.addEventListener("click", () => {
  const request = new XMLHttpRequest();
  request.open("GET", `/page${n}`);
  request.onreadystatechange = () => {
    if (request.readyState === 4 && request.status === 200) {
      let data = JSON.parse(request.response);
      let listData = data.map((item) => `<li>${item}</li>`).join("");
      list.innerHTML += listData;
      //   document.body.appendChild(list);
    }
  };
  request.send();
  n += 1;
  n = n === 3 ? n - 1 : n;
});

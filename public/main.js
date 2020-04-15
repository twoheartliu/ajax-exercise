getCSS.onclick = () => {
  const request = new XMLHttpRequest();
  request.open('GET', '/style.css');
  request.onreadystatechange = () => {
    if (request.readyState === 4) {
      if (request.status >= 200 && request.status < 300) {
        const style = document.createElement('style');
        style.innerHTML = request.response;
        document.head.appendChild(style);
      } else {
        alert('加载 CSS 失败');
      }
    }
  };
  request.send();
};
getJS.onclick = () => {
  const request = new XMLHttpRequest();
  request.open('GET', '/2.js');
  request.onreadystatechange = () => {
    if (request.readyState === 4) {
      if (request.status >= 200 && request.status < 300) {
        const js = document.createElement('script');
        js.innerHTML = request.response;
        document.body.appendChild(js);
      } else {
        alert('js error');
      }
    }
  };
  request.send();
};

getHTML.onclick = () => {
  const request = new XMLHttpRequest();
  request.open('GET', '/3.html');
  request.onreadystatechange = () => {
    if (request.readyState === 4) {
      if (request.status >= 200 && request.status < 300) {
        const dom = document.createElement('div');
        dom.innerHTML = request.response;
        document.body.appendChild(dom);
      } else {
        alert('html error');
      }
    }
  };
  request.send();
};

getXML.onclick = () => {
  const request = new XMLHttpRequest();
  request.open('GET', '/4.xml');
  request.onreadystatechange = () => {
    if (request.readyState === 4) {
      if (request.status >= 200 && request.status < 300) {
        const xmlDom = request.responseXML;
        const text = xmlDom.querySelector('warning').textContent;
        const dom = document.createElement('div');
        dom.innerHTML = text;
        document.body.appendChild(dom);
      } else {
      }
    }
  };
  request.send();
};

getJSON.onclick = () => {
  const request = new XMLHttpRequest();
  request.open('GET', '/5.json');
  request.onreadystatechange = () => {
    if (request.readyState === 4) {
      if (request.status >= 200 && request.status < 300) {
        const rawResponse = request.response;
        const objData = JSON.parse(rawResponse);
        console.log(objData);
        console.log(typeof objData);
      }
    }
  };
  request.send();
};

let pageNum = 1;
getPage.onclick = () => {
  const request = new XMLHttpRequest();
  if (pageNum >= 3) {
    console.log('没有更多了');
    return;
  }
  request.open('GET', `/page${pageNum + 1}`);
  request.onreadystatechange = () => {
    if (request.readyState === 4) {
      if (request.status >= 200 && request.status < 300) {
        const rawData = request.response;
        const objData = JSON.parse(rawData);
        objData.forEach((e) => {
          const li = document.createElement('li');
          li.textContent = e.id;
          xxx.appendChild(li);
        });
        pageNum += 1;
        // document.xxx.appendChild(result);
      }
    }
  };
  request.send();
};
/* 
onerror 无法判断请求返回的状态码是否是失败的

使用 onreadystatechange 监听事件进行到哪一步
只会在 readystate 变化时才会执行
当状态为 
0：被创建但未调用 open 方法
1：open 方法被调用
2：send 方法被调用，头部和状态可获得
3：下载中，已经获取到部分数据
4：下载完毕，数据获取完成
*/

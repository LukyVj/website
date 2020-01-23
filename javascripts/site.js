var getJSON = function(url) {
  return new Promise(function(resolve, reject) {
    var xhr = new XMLHttpRequest();
    xhr.open("get", url, true);
    xhr.responseType = "json";
    xhr.onload = function() {
      var status = xhr.status;
      if (status == 200) {
        resolve(xhr.response);
      } else {
        reject(status);
      }
    };
    xhr.send();
  });
};

var getJSON = function(url) {
  return new Promise(function(resolve, reject) {
    var xhr = new XMLHttpRequest();
    xhr.open("get", url, true);
    xhr.responseType = "json";
    xhr.onload = function() {
      var status = xhr.status;
      if (status == 200) {
        resolve(xhr.response);
      } else {
        reject(status);
      }
    };
    xhr.send();
  });
};

function init() {
  getJSON("../data/colors.json").then(function(data) {
    var is = Math.floor(Math.random() * data.length);
    var set = Math.floor(Math.random() * 2);
    var declaration = document.documentElement.style;

    if (data) {
      console.log(data);
      if (set == 1) {
        declaration.setProperty("--background-color", data[is].color_one);
        declaration.setProperty("--foreground-color", data[is].color_two);
      } else {
        declaration.setProperty("--background-color", data[is].color_two);
        declaration.setProperty("--foreground-color", data[is].color_one);
      }

      document.body.classList.add("appear");
    }
  });
}

// window.oncontextmenu = function () {
//   document.body.classList.add('comic')
// }

window.addEventListener("load", init());

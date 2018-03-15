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
  getJSON('https://randoma11y.com/stats').then(function(data) {

    var is = Math.floor(Math.random() * data.most_active_20.length);
    var set = Math.floor(Math.random() * 2);
    var declaration = document.documentElement.style;

    if (data) {
      if (set == 1) {
        declaration.setProperty(
          "--background-color",
          data.most_active_20[is].color_one
        );
        declaration.setProperty(
          "--foreground-color",
          data.most_active_20[is].color_two
        );
      } else {
        declaration.setProperty(
          "--background-color",
          data.most_active_20[is].color_two
        );
        declaration.setProperty(
          "--foreground-color",
          data.most_active_20[is].color_one
        );
      }
    }
  });
}

window.oncontextmenu = function () {
  document.body.classList.add('comic')
}

window.addEventListener("load", init());

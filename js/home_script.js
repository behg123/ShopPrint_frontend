function checkCookieValue(cookieName, expectedValue) {
  var cookies = document.cookie.split(";");

  for (var i = 0; i < cookies.length; i++) {
    var cookie = cookies[i].trim();
    if (cookie.startsWith(cookieName + "=")) {
      var value = cookie.substring(cookieName.length + 1);
      return value === expectedValue;
    }
  }

  return false;
}


function setImages(){
  var image = document.getElementById("img-home")

}
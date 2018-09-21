function $$(q, c) {
  return Array.prototype.slice.call((c || document).querySelectorAll(q));
}

document.addEventListener("DOMContentLoaded", function (event) {
  var codeBlock = $$(".codeBox");
  codeBlock.forEach((i, j) => {
    this.addEventListener("mouseup", function (event) {
      var text = window.getSelection().toString();
      var toastClass = document.getElementById("_toast").classList;
      if (text && text.length > 0) {
        try {
          var ok = document.execCommand('copy');
          if (ok) {
            toastClass.add("_show");
            setTimeout(() => {
              toastClass.remove("_show");
            }, 3000);
          }
        } catch (err) {
          toastClass.remove("_show");
        }
      } else {
        toastClass.remove("_show");
      }
    }, false);
  });
});
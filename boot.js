window.q        = {};
var search      = window.location.search.replace(/^\?/,"").split("&");

for (var i=0; i<search.length; i++) {
  search[i] = decodeURIComponent(search[i]);
  window.q[search[i].replace(/=.*$/,"")] = search[i].replace(/^[^=]*=/,"");
}

if (window.q.key && window.q.pol && window.q.sig) {
  document.write('<script src="', 'http://js.simplemiami.com/js/tiny_mce/tiny_mce.js', '" type="text/JavaScript"><\/script>');
  document.write('<script src="', 'http://js.simplemiami.com/js/sm.js', '" type="text/JavaScript"><\/script>');
}

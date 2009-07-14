tinyMCE.init({
  content_css: "style.css",
  force_root_block: false,
  mode:  "none",
  theme: "advanced",
  plugins: "safari",
  theme_advanced_toolbar_location: "external",
  theme_advanced_buttons1: "cut,copy,paste,|,undo,redo,|,formatselect,bold,italic,underline,strikethrough,|,justifyleft,justifycenter,justifyright,justifyfull,|,bullist,numlist,outdent,indent,|,link,unlink,|,blockquote,sub,sup",
  theme_advanced_buttons2: "",
  theme_advanced_buttons3: ""
});
$(function() {
  $("head").append(
    "<style type='text/css'> "+
      "#loading { "+
        "position: fixed; "+
        "top: 0px; "+
        "left: 0px; "+
        "padding: 2px; "+
        "color: white; "+
        "background: red; "+
      "} "+
    "</style>"
  );
  $("body").append("<div id='loading'>Loading...</div>");
  $(".eip").eip();
  $("#loading").remove();
});

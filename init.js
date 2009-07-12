tinyMCE.init({
  content_css: "style.css",
  force_root_block: false,
  mode:  "none",
  theme: "advanced",
  theme_advanced_toolbar_location: "external",
  theme_advanced_buttons1: "cut,copy,paste,|,undo,redo,|,formatselect,bold,italic,underline,strikethrough,|,justifyleft,justifycenter,justifyright,justifyfull,|,bullist,numlist,outdent,indent,|,link,unlink,|,blockquote,sub,sup",
  theme_advanced_buttons2: "",
  theme_advanced_buttons3: ""
});
$(function() {
  $.eip.init({
    "background-image" : "url('img/stripes.gif') !important",
    "opacity" : "0.33",
    "filter" : "alpha(opacity = 33)",
    "cursor" : "pointer"
  });
  $("#loading").remove();
  $("#content").show();
});

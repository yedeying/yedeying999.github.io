var replyshow = 0;

function clo() {
  window.opener = null;
  window.open('', '_self');
  window.close();
}
$('.btn-exit').on('click', function() {
  clo();
});
$('.btn-login').on('click', function() {
  window.location.href = './index.php';
});
$('.btn-logout').on('click', function() {
  window.location.href = './index.php';
});
$('.btn-finish-ask').on('click', function() {
  var title = $('.input-title').val();
  var content = $('#editor').html();
  var classification = $('#classification>option:checked').attr('value');
  var reward = $('#reward>option:checked').attr('value');
  if (title == '') {
    $('.for-alert-title').grumble({
      text: '请输入你的问题',
      angle: 330,
      distant: 3,
      type: 'alt-',
      showAfter: 0,
      hideAfter: 2000
    });
    $('.input-title').focus();
    return;
  }
  if (classification == 0) {
    $('.for-alert-classification').grumble({
      text: '请选择分类',
      angle: 330,
      distant: 3,
      type: 'alt-',
      showAfter: 0,
      hideAfter: 2000
    });
    $('#classification').focus();
    return;
  }
  $('.btn-finish-ask').grumble({
    text: "无后台功能, 发布失败",
    angle: 330,
    distant: 3,
    showAfter: 0,
    hideAfter: 2000
  });
});
$('.btn-nav-search').on('click', function() {
  var url = './questions.html';
  url = encodeURI(url);
  window.location.href = url;
});
$(".input-search").keypress(function(event) {
  if (event.which == 13)
    $('.btn-nav-search').click();
});
$('.nav-jump a').on('click', function() {
  var data = $(this).attr('valuel');
  if (data != '3')
    location.href = "./" + $(this).attr('value') + '.html';
  else {
    location.href = "./myquestion.html";
  }
});
$('.btn-slide-reply').on('click', function() {
  if (replyshow) {
    $('.div-reply').slideUp();
  } else {
    $('.div-reply').slideDown();
    $('#editor1').focus();
    if (isself)
      $('#editor1').html($('.que-append').html());
  }
  replyshow = (replyshow + 1) % 2;
});
$('.btn-reply').on('click', function() {
  var text = $('#editor1').html();
  if (text == '') {
    $('.btn-reply').grumble({
      text: '内容不能为空',
      angle: 330,
      distant: 3,
      showAfter: 0,
      hideAfter: 1000
    });
    $('#editor1').focus();
    return;
  }
  $('.btn-reply').grumble({
    text: '无后台功能, 发布失败',
    angle: 330,
    distant: 3,
    type: 'alt-',
    showAfter: 0,
    hideAfter: 1000
  });
});
$('.btn-del').on('click', function() {
  $('.btn-del').grumble({
    text: '无后台功能, 删除失败',
    angle: 330,
    distant: 3,
    type: 'alt-',
    showAfter: 0,
    hideAfter: 1000
  });
});
$('.btn-input-comment').on('click', function() {
  var num = $(this).attr('value');
  if (inputcommentshow[num]) {
    $('.div-comment' + num).slideUp();
    inputcommentshow[num] = 0;
  } else {
    $('.div-comment' + num).slideDown();
    inputcommentshow[num] = 1;
    $('.input-comment' + num).focus();
  }
});
$('.btn-comment').on('click', function() {
  var num = $(this).attr('value');
  if (commentshow[num]) {
    $('.div-show-comment' + num).slideUp();
    commentshow[num] = 0;
  } else {
    $('.div-show-comment' + num).slideDown();
    commentshow[num] = 1;
  }
});
$('.btn-confirm-comment').on('click', function() {
  var aid = $(this).attr('aid');
  var self = $(this);
  var input = '.input-comment[aid="' + aid + '"]';
  var text = $(input).val();
  self.grumble({
    text: '无后台功能, 评论失败',
    angle: 330,
    distant: 3,
    showAfter: 0,
    hideAfter: 1000
  });
});
$('.btn-up').on('click', function() {
  var aid = $(this).attr('aid');
  var self = $(this);
  self.grumble({
    text: '少侠, 无后台功能, 点赞失败',
    angle: 330,
    distant: 3,
    showAfter: 0,
    hideAfter: 1000
  });
});
$('.btn-down').on('click', function() {
  var aid = $(this).attr('aid');
  var self = $(this);
  self.grumble({
    text: '少侠, 无后台功能, 点踩失败',
    angle: 330,
    distant: 3,
    showAfter: 0,
    hideAfter: 1000
  });
});
$(".input-comment").keypress(function(event) {
  if (event.which == 13) {
    var aid = $(this).attr('aid');
    var tmp = ".btn-confirm-comment[aid='" + aid + "']";
    $(tmp).click();
  }
});
$(document).ready(function() {
  $('label[for="classification"]').html('选择话题');
  $('a[value="collect"]').addClass('hide');
});
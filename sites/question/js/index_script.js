var publicObject = new Array()
var l = 0, r = 0;
var finish = 1;
var time = 0;
var confirm_code = 762110;

function get_random(num) {
  if (num > 17) num = 17;
  var b = Math.random().toString().substr(2, num);
  return b;
}

function clo() {
  window.opener = null;
  window.open('', '_self');
  window.close();
}

function alertclose() {
  $(publicObject[l++]).fadeOut('slow');
  if (l == r) l = r = 0;
}

function alertshow(txt, object, time) {
  var object1 = object + ' .alert';
  $(object1).text(txt);
  publicObject[r++] = object;
  $(object).fadeIn('slow', function() {
    var t = setTimeout("alertclose()", time);
  });
}

function alertclose1() {
  time -= 2000;
  $(".alert-login").fadeOut('slow', function() {
    $(".alert-login").removeClass("alert-success");
    $(".alert-login").removeClass("alert-danger");
    $('.alert-text').text("");
  });
}

function alertshow1(method, txt) {
  time += 2000;
  if (method == 1) $(".alert-login").addClass("alert-success");
  else $(".alert-login").addClass("alert-danger");
  $(".alert-text").text(txt);
  $(".alert-login").fadeIn('slow', function() {
    var t = setTimeout('alertclose1()', time);
  });
}

function clearData() {
  $('#login-username').val("");
  $('#login-password').val("");
  $('#regi-username').val("");
  $('#regi-password').val("");
}

function disableButton(object, newtxt, oritxt) {
  var second = 20;
  $(object).addClass('disabled');

  function loop() {
    $(object).text(newtxt + '(' + second.toString() + ')');
    second--;
    if (second >= 0)
      setTimeout(loop, 1000);
    else {
      $(object).removeClass('disabled');
      $(object).text(oritxt);
    }
  }
  loop();
}
$(document).ready(function() {
  $('#login-username').focus();
});
$(".login-inputbox").keypress(function(event) {
  if (event.which == 13)
    $('.btn-login').click();
});
$(".regi-inputbox").keypress(function(event) {
  if (event.which == 13)
    $('.btn-regi').click();
});
$(".complete-regi").keypress(function(event) {
  if (event.which == 13)
    $('.btn-complete-regi').click();
});
$('.btn-regi').on('click', function() {
  $('#inputUsername').val($('#regi-username').val());
  $('#inputPassword').val($('#regi-password').val());
  $('#inputConfirmPassword').val("");
  $('#inputNickname').val("");
  $('#inputEmail').val("");
  $('#inputMajor').val("");
  $('#inputMobile').val("");
  $('#male').removeAttr('checked');
  $('#female').removeAttr('checked');
  $('#agreeOpen').removeAttr('checked');
  $('#refuseOpen').removeAttr('checked');
});
$('.btn-return-regi').on('click', function() {
  clearData();
  $('.login-box').fadeOut(function() {
    $('.register-box').fadeIn(function() {
      $('#regi-username').focus();
    });
  });
});
$('.btn-return-login').on('click', function() {
  clearData();
  $('.register-box').fadeOut(function() {
    $('.login-box').fadeIn(function() {
      $('#login-username').focus();
    });
  });
});
$('.btn-exit').on('click', function() {
  clo();
});
$('.btn-complete-regi').on('click', function() {
  if ($('#inputUsername').val() == "") {
    alertshow('用户名不能为空', '.alert-username', 3000);
    $('#inputUsername').focus();
    return;
  }
  if ($('#inputUsername').val().length > 15) {
    alertshow('长度不能超过15', '.alert-username', 3000);
    $('#inputUsername').val('');
    $('#inputUsername').focus();
    return;
  }
  if (/^[^_a-z]|[^0-9a-z]/i.test($('#inputUsername').val())) {
    alertshow('只能由字母开头、字母数字组成', '.alert-username', 3000);
    $('#inputUsername').val('');
    $('#inputUsername').focus();
    return;
  }
  if ($('#inputPassword').val() == "") {
    alertshow('密码不能为空', '.alert-password', 3000);
    $('#inputPassword').focus();
    return;
  }
  if ($('#inputConfirmPassword').val() == "") {
    $('.alert-confirm-password-val').text("请再输入一遍密码");
    alertshow('请确认', '.alert-confirm-password', 3000);
    $('#inputConfirmPassword').focus();
    return;
  }
  if ($('#inputConfirmPassword').val() != $('#inputPassword').val()) {
    alertshow('两次密码输入不一致', '.alert-confirm-password', 3000);
    $('#inputPassword').val("");
    $('#inputConfirmPassword').val("");
    $('#inputPassword').focus();
    return;
  }
  if ($('#inputNickname').val() == "") {
    alertshow('请输入昵称', '.alert-nickname', 3000);
    $('#inputNickname').focus();
    return;
  }
  if ($('#inputEmail').val() == "") {
    alertshow('请输入邮箱', '.alert-email', 3000);
    $('#inputEmail').focus();
    return;
  }
  if ($('.inputSex:checked').length == 0) {
    alertshow('请选择性别', '.alert-sex', 3000);
    return;
  }
  if ($('#inputConfirm').val() == "") {
    alertshow('请输入验证码', '.alert-confirm', 3000);
    $('#inputConfirm').focus();
    return;
  }
  if ($('.inputOpen:checked').length == 0) {
    alertshow('请选择是否公开资料', '.alert-open', 3000);
    return;
  }
  if ($('#inputConfirm').val() != confirm_code) {
    alertshow('验证码错误', '.alert-confirm', 3000);
    $('#inputConfirm').val("");
    $('#inputConfirm').focus();
    return;
  }
  var username = $('#inputUsername').val();
  var password = $('#inputPassword').val();
  var nickname = $('#inputNickname').val();
  var email = $('#inputEmail').val();
  var major = $('#inputMajor').val();
  var mobile = $('#inputMobile').val();
  var sex = $('#male').attr('value');
  var open = $('#agreeOpen').attr('value');
  alert('无后台功能');
});
$('.btn-confirm-email').on('click', function() {
  if ($('#inputEmail').val() == "") {
    alertshow('邮箱不能为空', '.alert-email', 3000);
    $('#inputEmail').focus();
    return;
  }
  if ($('#inputEmail').val().indexOf('@') == -1) {
    alertshow('邮箱格式有误', '.alert-email', 3000);
    $('#inputEmail').val('');
    $('#inputEmail').focus();
    return;
  }
  var address = $('#inputEmail').val();
  confirm_code = get_random(6);
  alert('无后台功能');
});
$('.btn-login').on('click', function() {
  var username = $('#login-username').val();
  var password = $('#login-password').val();
  if (username == "") {
    $('#login-username').grumble({
      text: '请输入用户名',
      angle: 330,
      distant: 3,
      showAfter: 0,
      hideAfter: 2000
    });
    $('#login-username').focus();
    return;
  } else if (password == "") {
    $('#login-password').grumble({
      text: '请输入密码',
      angle: 330,
      distant: 3,
      showAfter: 0,
      hideAfter: 2000
    });
    $('#login-password').focus();
    return;
  }
  alert('无后台功能, 直接跳转');
  $('.btn-login').grumble({
    text: '登录成功',
    angle: 330,
    distant: 3,
    type: 'alt-',
    showAfter: 0,
    hideAfter: 2000,
    onShow: function() {
      location.href = './questions.html';
    }
  });
});
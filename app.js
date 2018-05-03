$(document).ready(function () {
  $.ajax({
    url: "http://faker.hook.io/?property=name.findName",
    method: 'GET',
    dataType: 'JSON'
  }).done( function(res) {
    setName(res);
  })

  $.ajax({
    url: "http://faker.hook.io/?property=internet.avatar",
    method: 'GET',
    dataType: 'JSON'
  }).done(function (res) {
    setPic(res);
  })

  $.ajax({
    url: "http://faker.hook.io/?property=date.recent",
    method: 'GET',
    dataType: 'JSON'
  }).done(function (res) {
    setDate(res);
  })

  $.ajax({
    url: "http://faker.hook.io/?property=hacker.phrase",
    method: 'GET',
    dataType: 'JSON'
  }).done(function (res) {
    setTitle(res);
  })

  $.ajax({
    url: "http://faker.hook.io/?property=lorem.paragraphs",
    method: 'GET',
    dataType: 'JSON'
  }).done(function (res) {
    setBody(res);
  })

  function setName(name) {
    $('#name').html(name);
  }

  function setPic(img) {
    $("#profile-pic").attr("src", img)
  }

  function setDate(date) {
    var day = moment(date).date()
    var monthDate = moment(date).format('MMMM')
    var year = moment(date).year()
    var result = monthDate + " " + day + ',' +  " " + year
    $('#date').html(result);
  }
  
  function setTitle(title) {
    $('#title').html(title)
  }

  function setBody(post) {
    $('#post-body').html(post)
  }

});
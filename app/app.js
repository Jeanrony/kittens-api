$.get('http://localhost:3500/kittens', function (data) {
  $('body').text(data[0].race);
});
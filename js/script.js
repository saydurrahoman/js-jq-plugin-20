function SetPosition(value) {
  $('#demo1')[0].SetPosition(value);
}

function GetPosition() {
  let p = $('#demo1')[0].opt.position;
  alert(p);
}

$(document).ready(function () {

  $('#demo1').jsRapBar();

  $('#demo2').jsRapBar({
    enabled: false, position: 0.8,
    barColor: 'red',
    width: '50%'
  });

  $('#demo3').jsRapBar({
    position: 0.5,
    barColor: 'blue',
    width: '50%',
    onClick: function (value) {
      $('#lab3').text(value);
    }
  });

});
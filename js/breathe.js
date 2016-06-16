var cycleCount = 0;
function timerEvents(unit, value, total){
  // console.log(total);
  if(total==-9 && $(this).data('timer')===0){
    $('#breathe_box').TimeCircles().stop();
    $(this).data('timer',10).TimeCircles({total_duration: 10}).restart();
    $('.textDiv_Seconds').children('h4').html('Exhale');
  }else if(total === 0 && $(this).data('timer')==10){
    $('#breathe_box').TimeCircles().stop();
    $('#breathe_box').data('timer',0).TimeCircles({total_duration: 8}).restart();
    $('.textDiv_Seconds').children('h4').html('Inhale');
    cycleCount++;
    $('#cycle_count').html(cycleCount).fadeIn(1000).delay(3200).fadeOut(1000);
  }else if(total === 0 && $(this).data('timer')==3){
    $('#breathe_box').TimeCircles().stop();
    $('#breathe_box').data('timer',0).TimeCircles({total_duration: 8}).restart();
    $('.textDiv_Seconds').children('h4').html('Inhale');
  }
}
$(document).ready(function(){
  $('#breathe_box').data('timer',3);
  $('#cycle_count').hide();
  $('#breathe_box').TimeCircles({
    start: false,
    time: {
      Seconds: {show:true},
      Minutes: {show:false},
      Hours: {show:false},
      Days: {show:false},
    },
    total_duration: 3,
    direction:'Clockwise',
  }).addListener(timerEvents);
  $('.textDiv_Seconds').children('h4').html('Ready?');
  $('#go_btn').on('click',function(){
    $('#breathe_box').TimeCircles().start();
    $('#go_btn').fadeOut();
  });
});

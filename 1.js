$(function(){



var setSecound=100;//タイマーの秒数
var setPause = setSecound;//ストップ時の秒数
var time = setSecound;//残り秒数を保存する変数
var timerID;

//残り秒数を表示させる関数
function textDisplay(){
  $("#countDown").text(time);
};

//カウントを1減らす関数
function countDown(){
  time--;
  setPause=time;
  textDisplay();//残り秒数を表示
}

//timerの停止用関数
function countStop(){
  clearInterval(timerID);
}

function timerStart(){
  countStop();
  timerID = setInterval(function(){
    if(time <= 0){
      clearInterval(timerID);
    }
    else{
      countDown();
    }
  },1000);//1000ミリ秒毎に　setIntervalの処理を繰り返し実行
};

//実行処理
textDisplay();

$("#startBtn").click(function(){
  time=setPause;
  textDisplay();
  timerStart();
});

$("#stopBtn").click(function(){
  countStop();
});

$("#resetBtn").click(function(){
  countStop();
  time=setPause=setSecound;
  textDisplay();
});

$("#changeSecound").click(function(){
  var saveSecound=$("#setSecound").val();
  if(saveSecound.match(/[^0-9]+/)){
    $("#error").text("半角数字で入力しろ")
  }
  else if(saveSecound==''){
    $("#error").text("値で入力しろ")
  }
  else{
    $("#error").text("")
    setSecound=saveSecound;
    countStop();
    time=setPause=setSecound;
    textDisplay();
  }
});
});

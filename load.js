/*
外部HTMLの読み込みコード
矢印キーで画面遷移
*/

$(function(){//タイトル画面をまず表示する
    $('#soft').load('page0html');
});

var num = 0;
var maxDiv = 4;//最後のページ番号

document.onkeydown = function(e){
    
    if(e.keyCode == 39){
        $('#soft').load('page' + num + '.html').fadeOut(500);
        num++;
        
        //今の位置を監視
        if(num > maxDiv){
            num = 0;
        }
        
    } else if(e.keyCode == 37){
        $('#soft').load('page' + num + '.html').fadeOut(500);
        num--;
        
        //今の位置を監視
        if(num < 0){
            num = maxDiv;
        }
        
    }
    setTimeout("$('#soft').load('page' + num + '.html').fadeIn(1500)",500);
}
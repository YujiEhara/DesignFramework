/*
外部HTMLの読み込みコード
矢印キーで画面遷移をする。

課題2：ページ数を自動で読み込むこと
*/


$(function() {//タイトル画面をまずは表示する。
 $('#soft').load('page0.html');
});

var num = 0;
var maxDiv = 5;//最後のページ番号

document.onkeydown = function(e){
    
    if(e.keyCode == 39){//→キーを押したら
        loadHTML(true);
    } else if(e.keyCode == 37){
        loadHTML(false);
    }
}

function loadHTML(next){//HTMLを読み込む
    if(next){
        
        //移動させみる
        $('#soft').animate({
            marginTop:"-768px",
            opacity:'0'
        },1200,'swing',nextPages);
        
        num++;
        if(num>maxDiv){//今の位置を監視
            num = 0;
        }
        
        pageNumDisplay();
        
    } else {
        
        $('#soft').animate({
            marginTop:"768px",
            opacity:'0'
        },1200,'swing',previousPages);
        
        num--;
        if(num<0){//今の位置を監視
            num = maxDiv;
        }
        
        pageNumDisplay();
        
    }
}

function nextPages(){//コールバック関数で呼び出される次のページ読込
    $('#soft').load('page' + num + '.html').css('marginTop','1500px').animate({
        marginTop:$('#wapper').height()/2-384,//プロジェクタ高さの半分を指定している
        opacity:'1'
    },1000);
}

function previousPages(){//コールバック関数で呼び出される前のページ読込
    $('#soft').load('page' + num + '.html').css('marginTop','-1500px').animate({
        marginTop:$('#wapper').height()/2-384,
        opacity:'1'
    },1000);
}

function pageNumDisplay(){
    document.getElementById("pageNum").innerHTML = num;
}
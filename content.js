// コメントが長くても、将棋盤とコメントが同時に見えるようにスクロールさせる
let forum = document.getElementsByClassName('forum_post');
let comments = forum[0].getElementsByTagName('pre')[0];
comments.style.height = '20vh';
comments.style.overflow = 'scroll';

window.addEventListener("load", main, false);

function main(e) {
    const jsInitCheckTimer = setInterval(jsLoaded, 1000);

    function jsLoaded() {
      let board = document.getElementById('viewer_frame');
      if (board != null) {
          clearInterval(jsInitCheckTimer);
      }
      
      // スクロール（将棋盤とコメントが見える位置）
      board.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        inline: 'center'
      });
}
}


// window.addEventListener("load", main, false);
// function main(e) {
//   const init_checker = setInterval(isLoaded, 1000);
//   function isLoaded() {
    
//     if (board != null) {
//       clearInterval(init_checker);
//     }


//   }
// }

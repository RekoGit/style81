// コメントが長くても、将棋盤とコメントが同時に見えるようにスクロールさせる
let forum = document.getElementsByClassName('forum_post');
if (forum.length > 0) {
  let comments = forum[0].getElementsByTagName('pre')[0];
  comments.style.height = '20vh';
  comments.style.overflow = 'scroll';
}

// スクロール（将棋盤とコメントが見える位置）
window.addEventListener("load", main, false);
function main(e) {
  const jsInitCheckTimer = setInterval(jsLoaded, 1000);
  function jsLoaded() {
    let board = document.getElementById('viewer_frame');
    if (board != null) {
      clearInterval(jsInitCheckTimer);
    }
    board.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'center'
    });
  }
}

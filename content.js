// スクロール（将棋盤とコメントが見える位置）
let board = document.getElementById('viewer_frame');
board.scrollIntoView({
  behavior: 'smooth',
  block: 'start',
  inline: 'center'
});

// コメントが長くても、将棋盤とコメントが同時に見えるようにスクロールさせる
let forum = document.getElementsByClassName('forum_post');
let comments = forum[0].getElementsByTagName('pre')[0];
comments.style.height = '20vh';
comments.style.overflow = 'scroll';


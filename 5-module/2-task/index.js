function toggleText() {
  const div = document.querySelector('.toggle-text-button');
  const txt = document.querySelector('#text');
    
  div.addEventListener('click', function() {
    txt.hidden ? txt.hidden = false : txt.hidden = true;
  });
}

$( () => {
  function playSound(asciiCode) {
    // $(`audio.audio-${asciiCode}`).trigger('play');
    const audio = document.querySelector(`.audio-${asciiCode}`);
    audio.currentTime = 0;
    audio.play();
    onKeyStyle(asciiCode);
  }

  function onKeyStyle(asciiCode) {
    let $main = $(`main.${asciiCode}`);
    $main.addClass('key-on-press');
    window.setTimeout(() => $main.removeClass('key-on-press'),50);
  }

  const asciiKeys = [97, 115, 100, 102, 103, 104, 106, 107, 108];

  $('body').on('keypress', function(e) {
    var code = e.keyCode || e.which;
    if (asciiKeys.includes(code)) {
      playSound(code);
    }
  });
});

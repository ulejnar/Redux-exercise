window.onload = function() {

  const emojiText = document.querySelector("#emojiText");

  document.querySelector("#showHappy").
  addEventListener("click", function () {
    store.dispatch({type:"showHappy", payload:"ʘ‿ʘ"});
    const currentFace = store.getState().face;
    emojiText.innerText = currentFace;
  })

  document.querySelector("#showSad").
  addEventListener("click", function () {
    store.dispatch({type:"showSad", payload:"⊙︿⊙"});
    const currentFace = store.getState().face;
    emojiText.innerText = currentFace;
  })

  document.querySelector("#showAngry").
  addEventListener("click", function () {
    store.dispatch({type:"showAngry", payload:"ಠ⌣ಠ"});
    const currentFace = store.getState().face;
    emojiText.innerText = currentFace;
  })

  document.querySelector("#showConfused").
  addEventListener("click", function () {
    store.dispatch({type:"showConfused", payload:"◔_◔"});
    const currentFace = store.getState().face;
    emojiText.innerText = currentFace;
  })

}
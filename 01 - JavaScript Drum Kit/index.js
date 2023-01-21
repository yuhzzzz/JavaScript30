const keys = document.querySelectorAll(".key")

window.addEventListener("keydown", (e) => {
  const character = e.key.toUpperCase()
  const audioDom = document.querySelector(
    `audio[data-key="${character.charCodeAt(0)}"]`
  )
  const key = document.querySelector(
    `div[data-key="${character.charCodeAt(0)}"]`
  )
  if (!audioDom) return
  removeClassName()
  addClassName(key)
  audioDom.play()
})
function removeClassName() {
  keys.forEach((dom) => {
    if (dom.classList.contains("playing")) {
      dom.classList.remove("playing")
    }
  })
}
function addClassName(key) {
  keys.forEach((dom) => {
    if (dom === key) {
      dom.classList.add("playing")
    }
  })
}

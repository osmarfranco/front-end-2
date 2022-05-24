function darkMode() {
  let status = document.getElementById('dark-mode')

  if (status.checked) {
    document.body.classList.add('dark')
  } else {
    document.body.classList.remove('dark')
  }
}
const scriptURL = 'https://script.google.com/macros/s/AKfycbyj3WNoivM5zrZwhMRVXRKV1j-tcsfSE7Pt-GKaecHzIbX2l3onkpQuN3wYEvYrO8mcCw/exec'
const form = document.forms['submit-to-survey']
const url = './output.html'
const sucess = document.getElementById('success')
const progressBar = document.getElementById('progressBar');

form.addEventListener('submit', e => {
  e.preventDefault()
  // Simulasi loading (misalnya, fetch data dari server)
setTimeout(() => {
  progressBar.style.transition = 'width 3s ease-in-out';
  progressBar.style.width = "100%";
  setTimeout(() => {
  }, 3000); // Setelah 3 detik, sembunyikan progress bar
}, 1000); // Setelah 1 detik, perbarui progress bar ke 100%
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response =>{
      window.location.replace(url);
      
    })
    .catch(error => console.error('Error!', error.message))
})




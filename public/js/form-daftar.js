const scriptURL = 'https://script.google.com/macros/s/AKfycbyZrfJCK1ST6AK7myOY3p-rIJRFfBCiOTAVa7phmfEjOyJJXDx3igdp6logFYbRg2GxIQ/exec'
const form = document.forms['submit-to-form']
const url = './survey.html'
const sucess = document.getElementById('success')
const progressBar = document.getElementById('progressBar');

form.addEventListener('submit', e => {
  e.preventDefault()
  // Simulasi loading (misalnya, fetch data dari server)
setTimeout(() => {
  progressBar.style.transition = 'width 5s ease-in-out';
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




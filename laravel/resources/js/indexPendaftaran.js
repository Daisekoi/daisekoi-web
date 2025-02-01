const inputJurusan = document.getElementById('jurusan');
const inputSekte = document.getElementById('sekte');
const inputnama = document.getElementById('nama');
const inputnim = document.getElementById('nim');
const dropdownContent = document.querySelector('.dropdown-content');
const alasanForm = document.getElementById('alasan');
const resetFormButton1 = document.getElementById('resetFormButton1');
const resetFormButton2 = document.getElementById('resetFormButton2');
const loadingIndicator = document.getElementById('loadingIndicator');
const loadingIndicator2 = document.getElementById('loadingIndicator2');
const dropdownContentSekte = inputSekte.nextElementSibling; // get the dropdown content element
const sekteDropdown = inputSekte.nextElementSibling; // define sekteDropdown
const formRightImg = document.querySelector('.form-right img');
const formRight = document.querySelector('.form-right');
const output = document.querySelector('.output-container');
const form = document.querySelector('.form-container');
const backButton = document.getElementById('backButton');
const inputFields = document.querySelectorAll('.hololive, .jkt48, .KPOP, .Tokusatsu, .anime, .game, .kritik, .alasan-form');


//submit
const form1 = document.getElementById('Formulir1');
const form2 = document.getElementById('Formulir2');
const footer = document.querySelector('.footer');
const img = document.getElementById('img');
const img2 = document.getElementById('img2');
const nextButton = document.getElementById('nextButton');
const buttonDivs = document.getElementById('button2');
const alert1 = document.getElementById('alert1');
const alert2 = document.getElementById('alert2');
const alert3 = document.getElementById('alert3');
const alerthapus1 = document.getElementById('alerthapus1');
const alerthapus2 = document.getElementById('alerthapus2');
const alertback = document.getElementById('alertback');
const title1 = document.getElementById('title1');
const title2 = document.getElementById('title2');
const redirectButton = document.getElementById('redirectButton');
var url = "https://chat.whatsapp.com/IYek8OzV4jY6eaoSYK0mSa"; // Ganti dengan URL Grup Daisekoi tujuan Anda
var count = 5; // Waktu hitung mundur dalam detik
const sekteInput = document.querySelector('#sekte');
const selectedElement = Array.from(sekteDropdown.children).find(a => a.classList.contains('selected'));
let sekteValue = selectedElement ? selectedElement.dataset.value : null;
const urlForm = 'https://script.google.com/macros/s/AKfycby3reOfoU8gxgA2Jj3Q9pIcRcUKMkJW0RQTy62ztKISLnGmt3Ms3QRUay-Od13tmFh6/exec';


//form 2
const hololive = document.querySelector('.hololive');
const jkt48 = document.querySelector('.jkt48');
const game = document.querySelector('.game');
const kritik = document.querySelector('.kritik');
const anime = document.querySelector('.anime');
const kpop = document.querySelector('.kpop');
const tokusatsu = document.querySelector('.tokusatsu');
const sekteLain = document.querySelector('.sekte_lain');

// Show dropdown on input click or focus


inputJurusan.addEventListener('click', (e) => {
  dropdownContent.style.display = 'block';
});

inputJurusan.addEventListener('focus', (e) => {
  dropdownContent.style.display = 'block';
});

inputSekte.addEventListener('click', (e) => {
  dropdownContentSekte.style.display = 'block';
});

inputSekte.addEventListener('focus', (e) => {
  dropdownContentSekte.style.display = 'block';
});

// Prevent default behavior on mousedown in dropdown
dropdownContent.addEventListener('mousedown', (e) => {
  e.preventDefault();
});

dropdownContentSekte.addEventListener('mousedown', (e) => {
  e.preventDefault();
});


// Hide dropdown on blur if not clicking within it
inputJurusan.addEventListener('blur', (e) => {
  if (!dropdownContent.contains(document.activeElement)) {
    dropdownContent.style.display = 'none';
  }
});

inputSekte.addEventListener('blur', (e) => {
  if (!dropdownContentSekte.contains(document.activeElement)) {
    dropdownContentSekte.style.display = 'none';
  }
});



// Handle dropdown option click Jurusan
inputJurusan.addEventListener('input', (e) => {
  const inputValue = e.target.value.toLowerCase();
  const options = dropdownContent.querySelectorAll('a');

    // Filter existing options
    options.forEach((option) => {
      const optionValue = option.getAttribute('data-value').toLowerCase();
      if (optionValue === inputValue) {
        option.style.display = 'block';
      } else if (optionValue.includes(inputValue)) {
        option.style.display = 'block';
      } else {
        option.style.display = 'none';
      }
    });

  // Remove new options created based on user input
  const newOptions = dropdownContent.querySelectorAll('a[data-value][data-generated]');
  newOptions.forEach((option) => {
    option.remove();
  });

  // Check if the input value matches an existing data-value
  const isExistingValue = Array.from(options).some((option) => option.getAttribute('data-value').toLowerCase() === inputValue);

  // Create new options based on user input only if it's not an existing value and not a partial match
  if (inputValue && !isExistingValue && inputValue.trim().split(' ').every((word) => word.length > 1)) {
    const newOptions = [inputValue];
    newOptions.forEach((option) => {
      const newOption = document.createElement('a');
      newOption.textContent = option;
      newOption.setAttribute('data-value', option);
      newOption.setAttribute('data-generated', true); // Add this attribute to mark as generated
      dropdownContent.appendChild(newOption);
    });
  }

  // Show the dropdown content
  dropdownContent.style.display = 'block';
});


dropdownContent.addEventListener('click', (e) => {
  e.preventDefault(); // Add this line to prevent the default behavior
  if (e.target.tagName === 'A') {
    const value = e.target.getAttribute('data-value');
    inputJurusan.value = value;
    dropdownContent.style.display = 'none';
    inputJurusan.blur();
  }
});



// Handle dropdown option click Sekte
inputSekte.addEventListener('input', (e) => {
  const inputValue = e.target.value.toLowerCase();
  const options = dropdownContentSekte.querySelectorAll('a');

  options.forEach((option) => {
    const optionValue = option.textContent.toLowerCase();
    option.style.display = optionValue.includes(inputValue) ? 'block' : 'none';
  });

  // Check if no options are available
  const noOptionsAvailable = !Array.from(options).some((option) => option.style.display === 'block');
  
  // Show "Sekte Lain" option if no other options match
  const sekteLainOption = dropdownContentSekte.querySelector('a[data-value="Sekte Lain"]');
  if (noOptionsAvailable) {
    sekteLainOption.style.display = 'block';
  } 
  
    sekteLainOption.style.display = 'block';
});




  
  dropdownContentSekte.addEventListener('click', (e) => {
    e.preventDefault(); // Add this line to prevent the default behavior
    if (e.target.tagName === 'A') {
      const value = e.target.getAttribute('data-value');
      inputSekte.value = value;
      dropdownContentSekte.style.display = 'none';
      inputSekte.blur();
  
      // Hide all sections and remove required attribute
      [hololive, jkt48, game, anime, kritik, tokusatsu, kpop, sekteLain].forEach((section) => {
        section.style.display = 'none';
        section.querySelectorAll('input').forEach((input) => {
          input.removeAttribute('required');
          input.value = ''; // Reset input value
          localStorage.removeItem('form2Data');
        });
      });
  
      // Show the relevant section and set required attribute
      let selectedSection;
      switch (value) {
        case 'Hololive':
          selectedSection = hololive;
          break;
        case 'JKT48':
          selectedSection = jkt48;
          break;
        case 'Game':
          selectedSection = game;
          break;
        case 'Anime':
          selectedSection = anime;
          break;
        case 'Tokusatsu':
          selectedSection = tokusatsu;
          break;
        case 'KPOP':
          selectedSection = kpop;
          break;
        case 'Kritik':
          selectedSection = kritik;
          break;
        case 'Sekte Lain':
            selectedSection = sekteLain;
            break;
        default:
          selectedSection = null;
      }
  
      if (selectedSection) {
        selectedSection.style.display = 'flex';
        selectedSection.style.flexDirection = 'column';
        selectedSection.style.alignItems = 'start';
        selectedSection.style.gap = '20px';
        selectedSection.querySelectorAll('input').forEach((input) => {
          input.setAttribute('required', 'required');
        });
  
        // Append the alasan-form to the selected section
        selectedSection.appendChild(alasanForm);
        alasanForm.style.display = 'block';
        
        
        if (selectedSection == kritik) {
          // Clear reason form when critique section is selected
          selectedSection.appendChild(alasanForm);
          alasanForm.style.display = 'none';
        }
      }
    }
  });


//Reset form
    function resetForm(form) {
      form.reset();
      dropdownContentSekte.style.display = 'none';
      const selectedOptionSekte = dropdownContentSekte.querySelector('a[selected]');
      if (selectedOptionSekte) {
        selectedOptionSekte.removeAttribute('data-value');
        selectedOptionSekte.classList.remove('selected'); // remove the selected class
      }
      form.querySelectorAll('input, select, textarea').forEach(input => {
        input.value = '';
        input.removeAttribute('required');
      });
      [hololive, jkt48, game, anime, kritik, tokusatsu, kpop, sekteLain].forEach((section) => {
        section.style.display = 'none';
        section.querySelectorAll('input').forEach((input) => {
          input.removeAttribute('required');
        });
      });
    }

    resetFormButton1.addEventListener('click', () => {
      resetForm(form1);
      localStorage.removeItem('form1Data');
      title1.style.display = 'none';
      alerthapus1.style.display = 'block';
      setTimeout(() => {
        alerthapus1.style.display = 'none';
        title1.style.display = 'block';
      }, 2000); // show the alert for 2 seconds
    });

    resetFormButton2.addEventListener('click', () => {
      resetForm(form2);
      localStorage.removeItem('form2Data');
      title2.style.display = 'none'; 
      alerthapus2.style.display = 'block';
       
      setTimeout(() => {
        alerthapus2.style.display = 'none';
        title2.style.display = 'block';
      }, 2000); // show the alert for 2 seconds
    });



// ...

function handleError(error) {
  const errorElement = document.getElementById('error-message');
  errorElement.style.display = 'flex';
  errorElement.textContent = 'Website Error: ' + error.message + " Cek konsol";
  form.style.display = 'none';
}
window.onerror = function(error) {
  handleError(error);
};


let formDataSubmitted = false;

// ...





const textContainer = document.getElementById('text-container');
const texts = ['Selamat datang di UKM Daisekoi', 'Form Pendaftaran Anggota Daisekoi'];
let currentIndex = 0;
let currentText = '';
let currentCharIndex = 0;
let typingInterval;
let delayInterval;

function typeText() {
  if (currentCharIndex < currentText.length) {
    textContainer.textContent = currentText.substring(0, currentCharIndex + 1);
    currentCharIndex++;
    typingInterval = setTimeout(typeText, 100);
  } else {
    currentCharIndex = 0;
    delayInterval = setTimeout(function() {
      textContainer.textContent = ''; // clear text
      currentIndex = (currentIndex + 1) % texts.length; // loop to next text
      currentText = texts[currentIndex];
      typeText();
    }, 1000); // 1 second delay
  }
}

currentText = texts[currentIndex];
typeText();

document.querySelectorAll('.btn-submit, .form-left-title .btn-submit, .btn-reset').forEach(button => {
  button.addEventListener('click', () => {
    button.classList.toggle('clicked');
  });
});
//submit
// Form 1 (Formulir1)
// Initialize the forms
progressBar2.style.transition = 'width 3s ease-in-out';
progressBar2.style.width = "20%";
form1.classList.add('show');
footer.classList.add('show');
img.classList.add('show');
window.addEventListener('beforeunload', () => {
  localStorage.removeItem('form1Data');
  localStorage.removeItem('form2Data');
});

try {
nextButton.addEventListener('click', e => {
  e.preventDefault();
  // Get form 1 data
  const formData1 = new FormData(form1);
  const formData1Entries = Object.fromEntries(formData1.entries());
  // Check if form 1 data is empty
  if (Object.values(formData1Entries).some(value => value === '')) {
    alert('Ada yang kosong atau data salah, silakan di lengkapi');
    return;
  }
  else {      
    localStorage.setItem('form1Data', JSON.stringify(formData1Entries));
    
    alert1.style.display = 'block';
    title1.style.display = 'none';
      
    setTimeout(() => {
      form1.classList.remove('show');  
      img.classList.remove('show');
      form1.style.display = 'none';
      progressBar2.style.width = "50%";
      setTimeout(() => { 
        // Show loading indicator
        loadingIndicator.classList.add('loading-animation');
        loadingIndicator.style.display = 'flex';
        setTimeout(() => { 
          // Hide loading indicator after 2 seconds
          loadingIndicator.classList.remove('loading-animation');
          loadingIndicator.style.display = 'none';
          form1.style.display = 'none';
          form2.classList.add('show');
          img.classList.add('show');
        }, 2000); 
      }, 500); 
        
      setTimeout(() => {    
        alert1.style.display = 'none';
        title1.style.display = 'block';
        form2.style.display = 'flex';
        form2.style.alignItems = 'flex-start';
      }, 2500); 
    }, 2000);
  }
   
});
} catch (error) {
  handleError(error);
}




backButton.addEventListener('click', e => {
  e.preventDefault();  
  form1.style.display = 'none';
  progressBar2.style.width = "1%";
  alertback.style.display = "block";
  title2.style.display = 'none';
    setTimeout(() => {
      img.classList.remove('show');
      form2.classList.remove('show');
      setTimeout(() => { 
        // Show loading indicator
        loadingIndicator.classList.add('loading-animation');
        loadingIndicator.style.display = 'flex';
        setTimeout(() => { 
          // Hide loading indicator after 2 seconds
          alertback.style.display = "none";
          title2.style.display = 'block';
          loadingIndicator.classList.remove('loading-animation');
          loadingIndicator.style.display = 'none';
          form2.style.display = 'none';
          form1.classList.add('show');
          img.classList.add('show');
        }, 2000); 
      }, 500); 
        
      setTimeout(() => {    
        alert1.style.display = 'none';
        title1.style.display = 'block';
        form1.style.display = 'flex';
      }, 2500); 
    }, 2000);
  
});

// Form 2 (Formulir2)
const submitButton = document.getElementById('submitButton');

// Get all form 2 input elements
const form2Inputs = document.querySelectorAll('#Formulir2 input');

// Function to save form data to local storage
function saveFormData() {
  // Get form data
  const formData2 = new FormData(form2);

  // Convert FormData object to an object
  const formDataObj = Object.fromEntries(formData2.entries());

  // Save form data to local storage
  localStorage.setItem('form2Data', JSON.stringify(formDataObj));
}


submitButton.addEventListener('click', e => {
  e.preventDefault();
  // Get form 1 data from cache
  const formData1 = JSON.parse(localStorage.getItem('form1Data'));
  // Get form 2 data from cache

  // Save form data to local storage
  saveFormData();

  // Get form 2 data from cache
  let formData2 = localStorage.getItem('form2Data');
  if (formData2) {
    formData2 = JSON.parse(formData2);
  } else {
    formData2 = {}; // Initialize an empty object if cache is empty
  }
  const sekteValue = formData2.sekte;
   // ...

  

// ...  
form2Inputs.forEach(input => {
  input.disabled = false;
});
  // Check data form 2
  if (sekteValue === 'Hololive' && (!formData2 || formData2.oshi_hololive === '' || formData2.alasan === '')) {
    alert('Isi oshi hololive kamu, jangan sampai kosong');
    return;
  } else if (sekteValue === 'JKT48' && (!formData2 || formData2.oshi_jkt48 === '' || formData2.alasan === '')) {
    alert('Isi oshi jkt48 kamu, jangan sampai kosong');
    return;
  } else if (sekteValue === 'KPOP' && (!formData2 || formData2.group_kpop === '' || formData2.bias_kpop === '' || formData2.alasan === '')) {
    alert('Isi group kpop dan bias kpop kamu, jangan sampai kosong');
    return;
  } else if (sekteValue === 'Tokusatsu' && (!formData2 || formData2.tokusatsu === '' || formData2.alasan === '')) {
    alert('Isi tokusatsu kamu, jangan sampai kosong');
    return;
  } else if (sekteValue === 'Anime' && (!formData2 || formData2.anime === '' || formData2.alasan === '')) {
    alert('Isi anime kamu, jangan sampai kosong');
    return;
  } else if (sekteValue === 'Game' && (!formData2 || formData2.game === '' || formData2.alasan === '')) {
    alert('Isi game kamu, jangan sampai kosong');
    return;
  } else if (sekteValue === 'Kritik' && (!formData2 || formData2.kritik === '')) {
    alert('Isi kritik kamu, jangan sampai kosong');
    return;
  } else if (sekteValue === 'Sekte Lain' && (!formData2 || formData2.sekte_lain === '' || formData2.alasan === '')) {
    alert('Isi sekte lain kamu, jangan sampai kosong');
    return;
  } else if (!formData2 || formData2.sekte === '') {
    alert('Isi semua field di form ini');
    return;
  }
  

  
  // Combine form 1 and filtered form 2 data
  const combinedData = new FormData();
  for (const key in formData1) {
    if (formData1.hasOwnProperty(key)) {
      combinedData.append(key, formData1[key]);
    }
  }
  for (const [key, value] of Object.entries(formData2)) {
    if (formData2.hasOwnProperty(key)) {
      combinedData.append(key, value);
    }
  }
// Make input fields of Form 2 readonly
form2Inputs.forEach(input => {
  input.disabled = true;
});
  
  // Add additional fields to combinedData
  const inputs = document.querySelectorAll('input[type="text"]');
  inputs.forEach(input => {
    combinedData.append(input.name, input.value);
  });
  progressBar2.style.width = "0%";  
  // Simulasi loading (misalnya, fetch data dari server)
  setTimeout(() => {

    progressBar2.style.transition = 'width 3s ease-in-out';
   progressBar2.style.width = "100%";   
    alert2.style.display = 'block';
    title2.style.display = 'none';  
    buttonDivs.style.display = 'none';
    // Show loading indicator
    img.classList.remove('show');
    loadingIndicator.classList.add('loading-animation');
    loadingIndicator.style.display = 'flex';
    fetch(urlForm, { method: 'POST', body: combinedData })
  .then(response => response.json())
  .then(data => {
    console.log('Response from URL Form:', data);
    formDataSubmitted = true;
                  // Clear cache data
                  localStorage.removeItem('form1Data');
                  localStorage.removeItem('form2Data');
                  //Success Warning
                  alert2.style.display = 'none';
                  alert3.style.display = 'block';
                    // Hide form 1 and show form 2
                    setTimeout(() => {
                      // Hide form 1 and show form 2
                      form.style.display = 'none';
                      img2.classList.add('show');
                      output.classList.add('show');
                      output.style.display = 'flex';
                      //countdown output
                      function countDown() {
                        if (count > 0) {
                          count--;
                          var waktu = count + 1;
                          document.getElementById('msg').innerHTML =  waktu;
                          setTimeout(countDown, 1000); // Memanggil fungsi ini setiap 1 detik
                        } else {
                          window.location.replace(url); // Mengarahkan pengguna setelah hitung mundur selesai
                        }
                      }
                      // Memulai hitung mundur saat halaman dimuat
                      countDown();
                    }, 1000); // Setelah 1 detik, tampilkan output
        
  
  })
  .catch(error => console.error('Error URL 1!', error.message));
    setTimeout(() => { 
      progressBar2.style.transition = 'width 3s ease-in-out';
    progressBar2.style.display ='none';
    // Submit combined data to both URLs
  
    }, 3000); // Setelah 3 detik, sembunyikan progress bar
  }, 500); // Setelah 1 detik, perbarui progress bar ke 100%

  
});

window.onload = function() {
  const redirectButton = document.getElementById('redirect');
  redirectButton.addEventListener('click', () => {
    window.location.replace(url);
  });
}


// When the user tries to close the tab, check if formDataSubmitted is false
window.onbeforeunload = function(e) {
  if (!formDataSubmitted) {
    var message = "Anda yakin ingin meninggalkan halaman ini? Data belum dikirim!";
    return message;
  }
};

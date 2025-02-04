const inputJurusan = document.getElementById('jurusan');
const inputSekte = document.getElementById('sekte');
const inputnama = document.getElementById('nama');
const inputnim = document.getElementById('nim');
const dropdownContent = document.querySelector('.dropdown-content');
const alasanForm = document.querySelector('.alasan-form');
const resetFormButton1 = document.getElementById('resetFormButton1');
const resetFormButton2 = document.getElementById('resetFormButton2');
const loadingIndicator = document.getElementById('loadingIndicator');
const dropdownContentSekte = inputSekte.nextElementSibling; // get the dropdown content element
const sekteDropdown = inputSekte.nextElementSibling; // define sekteDropdown
const formRightImg = document.querySelector('.form-right img');
const backButton = document.getElementById('backButton');
const inputFields = document.querySelectorAll('.hololive, .jkt48, .KPOP, .Tokusatsu, .anime, .game, .kritik, .alasan-form');


//submit
const form1 = document.getElementById('Formulir1');
const form2 = document.getElementById('Formulir2');
const img = document.getElementById('img');
const nextButton = document.getElementById('nextButton');
const alert2 = document.getElementById('alert');
const title = document.getElementById('title');
var url = "https://instagram.com/daisekoi"; // Ganti dengan URL Grup Daisekoi tujuan Anda
var count = 5; // Waktu hitung mundur dalam detik
const sekteInput = document.querySelector('#sekte');
const selectedElement = Array.from(sekteDropdown.children).find(a => a.classList.contains('selected'));
let sekteValue = selectedElement ? selectedElement.dataset.value : null;

//form 2
const hololive = document.querySelector('.hololive');
const jkt48 = document.querySelector('.jkt48');
const game = document.querySelector('.game');
const kritik = document.querySelector('.kritik');
const anime = document.querySelector('.anime');
const kpop = document.querySelector('.kpop');
const tokusatsu = document.querySelector('.tokusatsu');
const sekteLain = document.querySelector('.sekte-lain');

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

// Filter dropdown options based on input value
inputJurusan.addEventListener('input', (e) => {
  const inputValue = e.target.value.toLowerCase();
  const options = dropdownContent.querySelectorAll('a');

  options.forEach((option) => {
    const optionValue = option.textContent.toLowerCase();
    option.style.display = optionValue.includes(inputValue)? 'block' : 'none';
  });
});



inputSekte.addEventListener('input', (e) => {
  const inputValue = e.target.value.toLowerCase();
  const options = dropdownContentSekte.querySelectorAll('a');

  options.forEach((option) => {
    const optionValue = option.textContent.toLowerCase();
    option.style.display = optionValue.includes(inputValue) ? 'block' : 'none';
  });
});


// Handle dropdown option click Jurusan
dropdownContent.addEventListener('click', (e) => {
  if (e.target.tagName === 'A') {
    const value = e.target.getAttribute('data-value');
    inputJurusan.value = value;
    dropdownContent.style.display = 'none';
    inputJurusan.blur();
  }
  });
  
  dropdownContentSekte.addEventListener('click', (e) => {
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
      [hololive, jkt48, game, anime, kritik, tokusatsu, kpop].forEach((section) => {
        section.style.display = 'none';
        section.querySelectorAll('input').forEach((input) => {
          input.removeAttribute('required');
        });
      });      
    }

    resetFormButton1.addEventListener('click', () => {
      resetForm(form1);
    });

    resetFormButton2.addEventListener('click', () => {
      resetForm(form2);
    });





const textContainer = document.getElementById('text-container');
const texts = ['Selamat datang di UKM Daisekoi', 'Form Pendaftaran anggota Daisekoi'];
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


//submit
// Form 1 (Formulir1)
// Initialize the forms
progressBar2.style.transition = 'width 3s ease-in-out';
progressBar2.style.width = "20%";
form1.classList.add('show');
img.classList.add('show');
form2.classList.remove('show');
window.addEventListener('beforeunload', () => {
  localStorage.removeItem('form1Data');
  localStorage.removeItem('form2Data');
});


nextButton.addEventListener('click', e => {
  e.preventDefault();
  // Get form 1 data
  const formData1 = new FormData(form1);
  const formData1Entries = Object.fromEntries(formData1.entries());
  // Check if form 1 data is empty
  if (Object.values(formData1Entries).some(value => value === '')) {
    alert('Ada yang kosong, silakan di lengkapi');
    return;
  }
  else {
    // Show loading indicator
    loadingIndicator.classList.add('loading-animation');
    loadingIndicator.style.display = 'block';
  // Save form 1 data to cache
  localStorage.setItem('form1Data', JSON.stringify(formData1Entries));
  // Hide form 1 and show form 2  
  form1.style.display = 'none';
  form2.style.display = 'flex';
  form2.style.flexDirection = 'column';
  form2.style.alignItems = 'start';
  form2.style.gap = '20px';
  progressBar2.style.transition = 'width 3s ease-in-out';
  progressBar2.style.width = "50%";
  setTimeout(() => {
    form2.classList.add('show');
    img.classList.add('show');
    loadingIndicator.classList.remove('loading-animation');
    loadingIndicator.style.display = 'none';// Update the image in .form-right
  }, 500); // wait for 500ms for the transition to complete
  }
   
});



backButton.addEventListener('click', e => {
  e.preventDefault();
  form2.classList.remove('show');
    // Show loading indicator
    loadingIndicator.classList.add('loading-animation');
    loadingIndicator.style.display = 'block';

      // Show loading indicator
    loadingIndicator.classList.remove('loading-animation');
    loadingIndicator.style.display = 'none';
  setTimeout(() => {
    form1.classList.add('show');
    img.classList.add('show');
    form2.style.display = 'none';
    form1.style.display = 'flex';
    form1.style.flexDirection = 'column';
    form1.style.alignItems = 'tart';
    form1.style.gap = '20px';
  }, 1000); // wait for 500ms for the transition to complete
});

// Form 2 (Formulir2)
const submitButton = document.getElementById('submitButton');
const urlForm1 = 'https://script.google.com/macros/s/AKfycbyZrfJCK1ST6AK7myOY3p-rIJRFfBCiOTAVa7phmfEjOyJJXDx3igdp6logFYbRg2GxIQ/exec';
const urlForm2 = 'https://script.google.com/macros/s/AKfycbzkBJFqYO_bMEfl5nkt2dQy4odD0Pa0fOqHetTAMSp2AxJp0dNlYohk35_pBDxME-GufA/exec';

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

  
  // Add additional fields to combinedData
  const inputs = document.querySelectorAll('input[type="text"]');
  inputs.forEach(input => {
    combinedData.append(input.name, input.value);
  });
// Debugging output
combinedData.forEach((value, key) => {
  console.log(`${key}: ${value}`);
});

  // Simulasi loading (misalnya, fetch data dari server)
  setTimeout(() => {
    progressBar2.style.transition = 'width 3s ease-in-out';
    progressBar2.style.width = "100%";
    alert2.style.display = 'block';
    title.style.display = 'none';
    alert2.style.color = '#ec0064';
    setTimeout(() => {
    }, 500); // Setelah 3 detik, sembunyikan progress bar
  }, 500); // Setelah 1 detik, perbarui progress bar ke 100%

  // Submit combined data to both URLs
  fetch(urlForm1, { method: 'POST', body: combinedData })
    .then(response => response.json())
    .then(data => {
      console.log('Response from URL 1:', data);
      // Submit to second URL
      fetch(urlForm2, { method: 'POST', body: combinedData })
        .then(response => response.json())
        .then(data => {
          console.log('Response from URL 2:', data);
                    // Clear cache data
                    localStorage.removeItem('form1Data');
                    localStorage.removeItem('form2Data');
          // Hide form 1 and show form 2
          form.style.display = 'none';
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
        })
        .catch(error => console.error('Error URL 2!', error.message));
    })
    .catch(error => console.error('Error URL 1!', error.message));
});

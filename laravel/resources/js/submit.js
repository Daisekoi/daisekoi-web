// Form 1 (Formulir1)
const form1 = document.getElementById('Formulir1');
const form2 = document.getElementById('Formulir2');
const nextButton = document.getElementById('nextButton');
const alert2 = document.getElementById('alert');
const title = document.getElementById('title');
const sekteDropdown = document.querySelector('.dropdown-content');
var url = "https://chat.whatsapp.com/Epm3Pet6hid8W99f4TlAjI"; // Ganti dengan URL tujuan Anda
var count = 100; // Waktu hitung mundur dalam detik
const sekteInput = document.querySelector('#sekte');
const selectedElement = Array.from(sekteDropdown.children).find(a => a.classList.contains('selected'));
let sekteValue = selectedElement ? selectedElement.dataset.value : null;

nextButton.addEventListener('click', e => {
  e.preventDefault();
  // Get form 1 data
  const formData1 = new FormData(form1);
  const formData1Entries = Object.fromEntries(formData1.entries());
  // Save form 1 data to cache
  localStorage.setItem('form1Data', JSON.stringify(formData1Entries));
  // Check if form 1 data is empty
  if (Object.values(formData1Entries).some(value => value === '')) {
    alert('Please fill in all fields in Form 1');
    return;
  }
  
  // Hide form 1 and show form 2
  form1.style.display = 'none';
  form2.style.display = 'flex';
  form2.style.flexDirection = 'column';
  form2.style.alignItems = 'start';
  form2.style.gap = '20px';
});

const backButton = document.getElementById('back');

backButton.addEventListener('click', e => {
  e.preventDefault();
  // Hide form 2 and show form 1
  form2.style.display = 'none';
  form1.style.display = 'flex';
  form1.style.flexDirection = 'column';
  form1.style.alignItems = 'start';
  form1.style.gap = '20px';
});

// Form 2 (Formulir2)
const submitButton = document.getElementById('submitButton');
const urlForm1 = 'https://script.google.com/macros/s/AKfycbyZrfJCK1ST6AK7myOY3p-rIJRFfBCiOTAVa7phmfEjOyJJXDx3igdp6logFYbRg2GxIQ/exec';
const urlForm2 = 'https://script.google.com/macros/s/AKfycbzkBJFqYO_bMEfl5nkt2dQy4odD0Pa0fOqHetTAMSp2AxJp0dNlYohk35_pBDxME-GufA/exec';

// Function to update Form 2 data in cache
let formData2 = localStorage.getItem('form2Data');
const updateForm2Cache = (key, value) => {
  if (!formData2) {
    formData2 = {};
  }
  formData2[sekteValue] = { [key]: value }; // Store data with sekteValue as key
  localStorage.setItem('form2Data', JSON.stringify(formData2));
};

// Attach event listener to all inputs in Form 2
Array.from(form2.elements).forEach(input => {
  input.addEventListener('input', updateForm2Cache);
  input.addEventListener('blur', updateForm2Cache);
  input.addEventListener('mousedown', updateForm2Cache); // Add this line
});

sekteInput.addEventListener('change', e => {
  sekteValue = e.target.value;
  // Clear form 2 data cache when sekte value changes
  localStorage.removeItem('form2Data');
  formData2 = {}; // Initialize an empty object for formData2
  updateForm2Cache();
});

submitButton.addEventListener('click', e => {
  e.preventDefault();
  // Get form 1 data from cache
  const formData1 = JSON.parse(localStorage.getItem('form1Data'));
  // Get form 2 data from cache
let formData2 = localStorage.getItem('form2Data');
if (formData2) {
  formData2 = JSON.parse(formData2);
} else {
  formData2 = {}; // Initialize an empty object if cache is empty
}

   // Filter form 2 data based on sekteValue
   let filteredData;
   switch (sekteValue) {
     case 'Hololive':
       filteredData = {
         oshi_hololive: formData2.oshi_hololive,
         alasan: formData2.alasan
       };
       break;
     case 'JKT48':
       filteredData = {
         oshi_jkt48: formData2.oshi_jkt48,
         alasan: formData2.alasan
       };
       break;
     case 'KPOP':
       filteredData = {
         group_kpop: formData2.group_kpop,
         bias_kpop: formData2.bias_kpop,
         alasan: formData2.alasan
       };
       break;
     case 'Tokusatsu':
       filteredData = {
         tokusatsu: formData2.tokusatsu,
         alasan: formData2.alasan
       };
       break;
     case 'Anime':
       filteredData = {
         anime: formData2.anime,
         alasan: formData2.alasan
       };
       break;
     case 'Game':
       filteredData = {
         game: formData2.game,
         alasan: formData2.alasan
       };
       break;
     case 'Kritik':
       filteredData = {
         kritik: formData2.kritik
       };
       break;
     default:
       filteredData = formData2;
   }

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
  for (const key in filteredData) {
    if (filteredData.hasOwnProperty(key)) {
      combinedData.append(key, filteredData[key]);
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

const bodyDashboard = document.getElementById("bodyDashboard");
const csrfToken = document.querySelector('meta[name="csrf-token"]').getAttribute('content');
// dark mode system //

// Select the button
const btnMode = document.querySelector('.btn-mode');

// Check localStorage for saved theme on page load
window.addEventListener('load', () => {
    const savedTheme = localStorage.getItem('theme');
    
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode');  // Apply dark mode
        btnMode.classList.add('dark-active');  // Ensure button reflects dark mode state
    }
});

// Toggle dark mode when the button is clicked
btnMode.addEventListener('click', () => {
    btnMode.classList.toggle('dark-active'); // Toggle button active state
    document.body.classList.toggle('dark-mode'); // Toggle dark mode on body
    
    // Save theme preference in localStorage
    const currentTheme = document.body.classList.contains('dark-mode') ? 'dark' : 'light';
    localStorage.setItem('theme', currentTheme);
    
     
});


// Tombol tampilkan password      
const togglePassword = document.getElementById('togglePassword');
const AddtogglePassword1 = document.getElementById('AddtogglePassword1');
const AddtogglePassword2 = document.getElementById('AddtogglePassword2');
  
    const eyeOpen = document.getElementById('eyeOpen');
    const AddeyeOpen1 = document.getElementById('AddeyeOpen1');
    const AddeyeOpen2 = document.getElementById('AddeyeOpen2');
    const eyeClosed = document.getElementById('eyeClosed');
    const AddeyeClosed1 = document.getElementById('AddeyeClosed1');
    const AddeyeClosed2 = document.getElementById('AddeyeClosed2');
document.addEventListener('DOMContentLoaded', () => {
      const passwordInput = document.getElementById('loginPassword');
      const newPasswordInput = document.getElementById('newPassword');
      const confirmPassword = document.getElementById('confirmPassword');
   

    // Set default icon to eyeClosed and hide eyeOpen
    eyeOpen.classList.add('hidden');
    eyeClosed.classList.remove('hidden'); 
    

    
    AddeyeOpen1.classList.add('hidden');
    AddeyeClosed1.classList.remove('hidden'); 
    
    
    AddeyeOpen2.classList.add('hidden');
    AddeyeClosed2.classList.remove('hidden');

    
    const togglePasswordVisibility = () => {
        const isPassword = passwordInput.type === 'password';
        passwordInput.type = isPassword ? 'text' : 'password';
        console.log(`Password input type changed to: ${passwordInput.type}`);
        // Toggle Icons
        eyeOpen.classList.toggle('hidden', !isPassword);
        eyeClosed.classList.toggle('hidden', isPassword);
        
        
    };
    
    
    const AddtogglePasswordVisibility1 = () => {
        const isPassword = newPasswordInput.type === 'password';
        newPasswordInput.type = isPassword ? 'text' : 'password';
        


        
        AddeyeOpen1.classList.toggle('hidden', !isPassword);
        AddeyeClosed1.classList.toggle('hidden', isPassword);
        
        
    }; 
    const AddtogglePasswordVisibility2 = () => {
        const isPassword = confirmPassword.type === 'password';
        confirmPassword.type = isPassword ? 'text' : 'password';
        


        
        AddeyeOpen2.classList.toggle('hidden', !isPassword);
        AddeyeClosed2.classList.toggle('hidden', isPassword);
        
        
    };

     // Add event listener for toggling password visibility
     togglePassword.addEventListener('click', togglePasswordVisibility);
     AddtogglePassword1.addEventListener('click', AddtogglePasswordVisibility1);
     AddtogglePassword2.addEventListener('click', AddtogglePasswordVisibility2);
    
    
    
                // Handle Form Submission
             
});


// Login Program

// Login Program
window.onload = () => {
    // Cek apakah sessionStorage memiliki 'username' yang menandakan login
    if (!sessionStorage.username) {
        // Jika tidak ada, arahkan ke halaman login tanpa memperlihatkan halaman dashboard
        window.location.replace("/login");
    }
};

// Form loading animation
const form = [...document.querySelector('.form').children];
const redirectUrl = '/dashboard';
const btnModeSettings = document.querySelector('.Dashboard-container');
const btnModeDashboard = document.getElementById('dashboard');

form.forEach((item, i) => {
    setTimeout(() => {
        item.style.opacity = 1;
    }, i * 100);
});

window.onload = () => {
    const username = sessionStorage.getItem('username'); // Ambil username dari sessionStorage
    const uuid = sessionStorage.getItem('uuid'); // Ambil UUID dari sessionStorage

    // Periksa apakah username dan UUID ada di sessionStorage
    if (username && uuid) {
        location.href = `${redirectUrl}/${uuid}`; // Arahkan ke halaman dashboard
    } else {
        console.log('No active session found. Redirecting to login page.');
        sessionStorage.clear(); // Hapus session jika data tidak valid
    }
};


// Login Program PHP
// URL Endpoint
const backendUrl = '/api/usersLogin'; // URL endpoint login
const checkUsernameUrl = '/api/checkUsername';
const setPasswordUrl = '/api/setPassword';

// Form validation
const loginForm = document.getElementById('loginForm');
const usernameInput = document.getElementById('username'); // Input username
const inputPassword = document.getElementById('inputPassword'); // Form input password
const inputUsername = document.getElementById('inputUsername'); // Form input password
const passwordInput = document.getElementById('loginPassword'); // Input password
const setPasswordForm = document.getElementById('setPasswordForm'); // Form set password
const nextTxt = document.getElementById('nextTxt'); // Text Selanjutnya
const loginTxt = document.getElementById('loginTxt'); // Text Login
const AddPwTxt = document.getElementById('AddPwTxt'); // Text Set Password
const loadingLoginTxt = document.getElementById('loadingLoginTxt'); // Text Login
const loadingNextTxt = document.getElementById('loadingNextTxt'); // Text Selanjutnya
const loadingAddPwTxt = document.getElementById('loadingAddPwTxt'); // Text Selanjutnya
const nextBtn = document.querySelector('.next-btn'); // Tombol "Next"
const loginBtn = document.querySelector('.submit-login'); // Tombol "Login"
const addPasswordBtn = document.querySelector('.submit-addPassword'); // Tombol "Login"

const label = document.querySelector("label[for='username']");

// Cek apakah input sudah memiliki nilai
if (usernameInput.value) {
    label.classList.add("text-blue-600");
    usernameInput.classList.add("border-blue-500");
}

// Tambahkan event listener untuk menangani perubahan input
usernameInput.addEventListener("input", function() {
    if (usernameInput.value) {
        label.classList.add("text-blue-600");
        usernameInput.classList.add("ring-blue-500", "ring-2");
    } else {
        label.classList.remove("text-blue-600");
        usernameInput.classList.remove("ring-blue-500", "ring-2");
    }
    
});


usernameInput.addEventListener("input", function() {
    if (usernameInput.disabled) {
        usernameInput.classList.add("bg-gray-100", "cursor-not-allowed", "peer-focus:top-1 peer-focus:translate-y-");
        label.classList.add("text-gray-400");
    } else {
        usernameInput.classList.remove("bg-gray-100", "cursor-not-allowed");
        label.classList.remove("text-gray-400");
    }
}); 
// Cek apakah input sudah memiliki nilai
if (passwordInput.value) {
    label.classList.add("text-blue-600");
    passwordInput.classList.add("border-blue-500");
}

// Tambahkan event listener untuk menangani perubahan input
passwordInput.addEventListener("input", function() {
    if (passwordInput.value) {
        label.classList.add("text-blue-600");
        passwordInput.classList.add("ring-blue-500", "ring-2");
    } else {
        label.classList.remove("text-blue-600");
        passwordInput.classList.remove("ring-blue-500", "ring-2");
    }
});
// Inisialisasi
if (loginForm) {
    inputPassword.classList.add('hidden'); // Sembunyikan form password
    setPasswordForm.classList.add('hidden'); // Sembunyikan form set password
    loginForm.classList.remove('hidden'); // Tampilkan form username

    // Event listener untuk tombol "Next"
    if (nextBtn) {
        nextBtn.addEventListener('click', (e) => {
            e.preventDefault();
            nextTxt.classList.add('hidden');
            loadingNextTxt.classList.remove('hidden');
            setTimeout(() => {
             checkUsername();
            }, 500);
           
        });
    }

    // Event listener untuk tekan "Enter"
    document.addEventListener('keydown', (event) => {
        if (event.key === 'Enter' ) {
            event.preventDefault();
            nextTxt.classList.add('hidden');
            loadingNextTxt.classList.remove('hidden');
            setTimeout(() => {
                checkUsername(); 
            }, 500);
            
        }
    });
}



// Fungsi untuk memeriksa username
const checkUsername = () => {
    nextTxt.classList.remove('hidden');
            loadingNextTxt.classList.add('hidden');
    
    if (!usernameInput.value) {
        alertBox('Username tidak boleh kosong!');
        return;
    }
    fetch(checkUsernameUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-CSRF-TOKEN': csrfToken,
        },
        body: JSON.stringify({ username: usernameInput.value }),
    })
        .then((res) => res.json())
        .then((data) => {
            nextTxt.classList.remove('hidden');
            loadingNextTxt.classList.add('hidden'); 
            validateData(data);
        })
        .catch((err) => {
            console.error('Error:', err);
            alert('Terjadi kesalahan saat memproses permintaan.');
            nextTxt.classList.remove('hidden');
            loadingNextTxt.classList.add('hidden');
        });
};
// Fungsi untuk men-disable input
const disableInputs = (input) => {
    input.disabled = true; // Disable input
};
const validateData = (data) => {  
    if (data.setPassword == true) {  
        // Jika password belum diatur, buka form untuk membuat password baru
        // console.log('// Jika password belum diatur, buka form untuk membuat password baru  ');
        sessionStorage.setItem('uuid', data.uuid);  
        disableInputs(usernameInput); // Sembunyikan form username  
        setPasswordForm.classList.remove('hidden'); // Tampilkan form set password  
        loginForm.classList.add('hidden'); // Tampilkan form set password  
    } else if (data.checkUsername) {  
        // console.log('Username:', usernameInput.value);
        // console.log('// Jika username ditemukan dan password ada ');
        // Jika username ditemukan dan password ada  
        disableInputs(usernameInput); // Sembunyikan form username  
        nextBtn.classList.add('hidden'); //
        loginBtn.classList.remove('hidden'); ////
        loginTxt.classList.remove('hidden');
        inputPassword.classList.remove('hidden'); //   
        // passwordForm.classList.remove('hidden'); // Tampilkan form input password  
        sessionStorage.setItem('uuid', data.uuid); // Simpan UUID di session  
        sessionStorage.setItem('role', data.role); // Simpan role di session    
    } else {  
        // Jika username tidak ditemukan  
        alertBox(data.message || 'Username tidak ditemukan.');  
    }  
};  



// const UUID = sessionStorage.getItem('uuid');
// console.log('UUID:', UUID);
// const username = sessionStorage.getItem('username');
// console.log('Username:', username);
// Event listener untuk form password
if (loginBtn) {
    loginBtn.addEventListener('click', (e) => {
        e.preventDefault(); // Mencegah reload halaman
        loginTxt.classList.add('hidden');
        loadingLoginTxt.classList.remove('hidden');
    passwordInput.type = 'password';
    // Toggle Icons
    eyeOpen.classList.add('hidden');
    eyeClosed.classList.remove('hidden');
        setTimeout(() => {
            loginUser(); // Periksa password
        }, 500);
        
    });
}

// Fungsi untuk memeriksa password
const loginUser = async () => {
    loginTxt.classList.remove('hidden');
    loadingLoginTxt.classList.add('hidden');
    const uuid = sessionStorage.getItem('uuid'); // Ambil UUID dari session storage
    if (!uuid) {
        alertBox('UUID tidak ditemukan. Harap ulangi proses login.');
        return;
    }

    if (!passwordInput.value) {
        alertBox('Password tidak boleh kosong!');
        return;
    }

    try {
        const response = await fetch(backendUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-CSRF-TOKEN': csrfToken,
            },
            body: JSON.stringify({
                username: usernameInput.value,
                password: passwordInput.value,
            }),
        });

        const data = await response.json();
        // console.log('Response:', data); // Tambahkan log ini untuk melihat respon

        if (data.success) {
            // Jika login berhasil
            
        
            alertBox('Login berhasil!');
            setTimeout(() => {
                location.href = `/dashboard/${data.uuid}`;
            }, 500);
            
            sessionStorage.setItem('uuid', data.uuid); // Simpan UUID di session  
            sessionStorage.setItem('permissions', JSON.stringify(data.permissions)); // Simpan permissions sebagai string
            sessionStorage.setItem('level', data.level); 
            sessionStorage.setItem('username', JSON.stringify(data.username)); 
        } else {
            alert(data.message || 'Username atau password salah.');
        }
    } catch (error) {
        console.error('Error logging in:', error); // Log kesalahan jika terjadi error
        alertBox('Terjadi kesalahan saat login.');
        loginTxt.classList.remove('hidden');
        loadingLoginTxt.classList.add('hidden');
    }
};

AddPwTxt.classList.remove('hidden');
    loadingAddPwTxt.classList.add('hidden');

// Event listener untuk form set password
if (setPasswordForm) {
    
    if (addPasswordBtn) {
        addPasswordBtn.addEventListener('click', (e) => {
            e.preventDefault();
            const newPasswordInput = document.getElementById('newPassword');
            const confirmPassword = document.getElementById('confirmPassword');
            newPasswordInput.type = 'password';
            confirmPassword.type = 'password';
            // Toggle Icons
            
            AddeyeOpen1.classList.add('hidden');
            AddeyeClosed1.classList.remove('hidden');
            
            AddeyeOpen2.classList.add('hidden');
            AddeyeClosed2.classList.remove('hidden');
            
            
            AddPwTxt.classList.add('hidden');
            loadingAddPwTxt.classList.remove('hidden');
            setTimeout(() => {
                setNewPassword();
            }, 500);
            
            
        });
    }
    
      // Event listener untuk tekan "Enter"
      document.addEventListener('keydown', (event) => {
        if (event.key === 'Enter' && !loginForm.classList.contains('hidden')) {
            const newPasswordInput = document.getElementById('newPassword');
            const confirmPassword = document.getElementById('confirmPassword');
            newPasswordInput.type = 'password';
            confirmPassword.type = 'password';
            // Toggle Icons
            
            AddeyeOpen1.classList.add('hidden');
            AddeyeClosed1.classList.remove('hidden');
            
            AddeyeOpen2.classList.add('hidden');
            AddeyeClosed2.classList.remove('hidden');
            event.preventDefault();
            setNewPassword();
        }
    });
}

// Fungsi untuk mengatur password baru
const setNewPassword = async () =>{
    const newPassword = document.getElementById('newPassword').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    AddPwTxt.classList.remove('hidden');
    loadingAddPwTxt.classList.add('hidden');
  // Validasi panjang password
  if (newPassword.length < 6) {
    alertBox('Password harus memiliki minimal 6 karakter!');
    
    return;
}
    
    if (newPassword !== confirmPassword) {
        alertBox('Password tidak cocok!');
        return;
    }

    fetch('/api/setPassword', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-CSRF-TOKEN': csrfToken
        },
        body: JSON.stringify({
            uuid: sessionStorage.getItem('uuid'),
            password: newPassword,
            password_confirmation: confirmPassword
        })
    })
    .then(res => res.json())
    .then(data => {
        if (data.success) {
            setTimeout(() => {
                location.href = '/login'; // Redirect ke halaman login
            }, 2000);
            AddPwTxt.classList.remove('hidden');
            loadingAddPwTxt.classList.add('hidden');
            alertBox('Password berhasil dibuat. Silakan login.');
        } else {
            alertBox(data.message || 'Gagal membuat password baru.');
        }
    })
    .catch(err => {
        console.error('Error:', err);
        alertBox('Terjadi kesalahan saat memproses permintaan. Silakan coba lagi.');
    });
};


// const setPasswordForm = document.getElementById('setPasswordForm');
// const newPassword = document.getElementById('newPassword');
// const confirmPassword = document.getElementById('confirmPassword');
// const backendUrlSetPassword = '/api/setPassword';
// const uuid = sessionStorage.getItem('uuid'); // Ambil UUID dari session

// setPasswordForm.addEventListener('submit', (e) => {
//     e.preventDefault();

//     if (newPassword.value !== confirmPassword.value) {
//         alert('Passwords do not match!');
//         return;
//     }

//     fetch(backendUrlSetPassword, {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json',
//             'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').getAttribute('content')
//         },
//         body: JSON.stringify({
//             uuid: uuid,
//             password: newPassword.value,
//             password_confirmation: confirmPassword.value,
//         })
//     })
//         .then((res) => res.json())
//         .then((data) => {
//             if (data.success) {
//                 alert('Password set successfully! Redirecting to login...');
//                 location.href = '/login';
//             } else {
//                 alert(data.message);
//             }
//         });
// });
// window.addEventListener('beforeunload', () => {
//     sessionStorage.clear();
//   });

const alertContainer = document.getElementById('alert-box');
    const alertMsg = document.getElementById('alert');
const alertBox = (message) => {
    
    alertMsg.innerHTML = message; 
    alertContainer.style.top = `5%`;
      // Fungsi untuk menutup alert
    const closeAlert = () => {
        alertContainer.style.top = null;
    };

    // // Event listener untuk menutup alert saat diklik
    // alertContainer.onclick = () => {
    //     closeAlert();
    // };

    // Event listener untuk swipe dari bawah ke atas
    let touchStartY = 0;
    let touchEndY = 0;

    alertContainer.addEventListener('touchstart', (e) => {
        touchStartY = e.changedTouches[0].screenY;
    });

    alertContainer.addEventListener('touchend', (e) => {
        touchEndY = e.changedTouches[0].screenY;
        handleSwipe();
    });

    const handleSwipe = () => {
        if (touchEndY < touchStartY) {
            closeAlert();
        }
    };

    setTimeout(() => {
        closeAlert();
    }, 5000);
    
  
};




// console.log('CSRF Token:', document.querySelector('meta[name="csrf-token"]').content);

// // Fungsi untuk menangani registrasi
// document.getElementById('registerForm').addEventListener('submit', function(e) {
//     e.preventDefault();

//     const formData = new FormData(this);
//     formData.append('action', 'register');

//     fetch(backendUrl, {
//         method: 'POST',
//         body: formData
//     })
//     .then(response => response.json())
//     .then(data => {
//         document.getElementById('registerMessage').innerText = data.message;
//     })
//     .catch(error => {
//         console.error('Error:', error);
//     });
// });

// // Fungsi untuk menangani login
// document.getElementById('loginForm').addEventListener('submit', function(e) {
//     e.preventDefault();

//     const formData = new FormData(this);
//     formData.append('action', 'login');

//     fetch(backendUrl, {
//         method: 'POST',
//         body: formData
//     })
//     .then(response => response.json())
//     .then(data => {
//         document.getElementById('loginMessage').innerText = data.message;
//     })
//     .catch(error => {
//         console.error('Error:', error);
//     });
// });
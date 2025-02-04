

const csrfToken = document.querySelector('meta[name="csrf-token"]').getAttribute('content');
const bodyDashboard = document.getElementById("bodyDashboard");
// Check Login

// window.onload = () => {
//     // Cek apakah sessionStorage memiliki 'username' yang menandakan login
//     if (!sessionStorage.username  && sessionStorage.uuid) {
//         // Jika tidak ada, arahkan ke halaman login tanpa memperlihatkan halaman dashboard
//         window.location.replace("/login");
//     }
// };

window.onload = () => {
    const uuid = sessionStorage.getItem('uuid');
    const username = sessionStorage.getItem('username'); // Ambil UUID dari sessionStorage

    // Periksa apakah UUID ada di sessionStorage
    if (uuid) {
     // Jika UUID ada, ambil informasi pengguna (misalnya dari API atau sessionStorage)
    //  const user = JSON.parse(sessionStorage.getItem('user')); // Misalkan informasi pengguna disimpan di sessionStorage
        // Jika UUID ada, arahkan ke halaman dashboard
        // alertBox(`Selamat Datang ${username}`);
       
    } else {
        // Jika UUID tidak ditemukan, arahkan ke halaman login
        console.log('No active session found. Redirecting to login page.');
        
    }
};


// // Menampilkan data dari sessionStorage di konsol
// const displaySessionStorageData = () => {
//     console.log("Data di sessionStorage:");
//     console.log("Username:", sessionStorage.getItem('username'));
// };

// // Panggil fungsi untuk menampilkan data
// displaySessionStorageData();


const filePath = '/api/getUsersFile';
// User HTML Show

// Mengambil username dari sessionStorage yang sudah disimpan saat login
const storedUsername = sessionStorage.getItem("username"); // Mengambil username dari sessionStorage

// Fungsi untuk menampilkan data pengguna dari sessionStorage dan JSON
async function fetchAndDisplayUserData() {
       // Target container
       const container = document.getElementById("userContainer");
       const containerMobile = document.getElementById("userContainerMobile");
   
       // Ambil UUID dari sessionStorage
       const storedUUID = sessionStorage.getItem('uuid');
   
       // Periksa apakah UUID tersedia
       if (!storedUUID) {
           container.innerHTML =
               '<div class="text-center text-gray-500">Tidak ada data pengguna yang ditemukan.</div>';
           containerMobile.innerHTML =
               '<div class="text-center text-gray-500">Tidak ada data pengguna yang ditemukan.</div>';
           return;
       }
       try {
        // Ambil data dari file JSON
        const response = await fetch(filePath);
        const data = await response.json();

        // Cari pengguna berdasarkan UUID
        const user = data.find(user => user.UUID === storedUUID);

        if (user) {
            // Buat elemen baru untuk desktop
            const userDivDesktop = document.createElement("div");
            userDivDesktop.innerHTML = `
                <div class="text-right"><strong>${user.username}</strong></div>
                <div class="text-right">${user.role}</div>
            `;
            container.appendChild(userDivDesktop);

            // Buat elemen baru untuk mobile
            const userDivMobile = document.createElement("div");
            userDivMobile.innerHTML = `
                <div class="text-right"><strong>${user.username}</strong></div>
                <div class="text-right">${user.role}</div>
            `;
            containerMobile.appendChild(userDivMobile);
        } else {
            // Jika pengguna tidak ditemukan
            container.innerHTML =
                '<div class="text-center text-gray-500">Pengguna tidak ditemukan.</div>';
            containerMobile.innerHTML =
                '<div class="text-center text-gray-500">Pengguna tidak ditemukan.</div>';
        }
    } catch (error) {
        console.error("Error fetching JSON:", error);
           
        // Tampilkan pesan error pada container
        container.innerHTML =
            '<div class="text-center text-gray-500">Terjadi kesalahan saat mengambil data pengguna.</div>';
        containerMobile.innerHTML =
            '<div class="text-center text-gray-500">Terjadi kesalahan saat mengambil data pengguna.</div>';
    }
}

// Panggil fungsi saat halaman dimuat
fetchAndDisplayUserData();


    // Menambahkan event listener untuk logout
    
    
    document.getElementById('logout').addEventListener('click', () => {
        // Hapus data pengguna dari sessionStorage
        sessionStorage.clear(); // Hapus session jika data tidak vali
        // Arahkan pengguna ke halaman login
        window.location.href = "/"; // Ganti dengan URL halaman login Anda
    });



//Grettings

// Fungsi untuk menentukan kondisi waktu
function getWaktuKondisi() {
    const currentHour = new Date().getUTCHours() + 7; // GMT +7
    if (currentHour >= 2 && currentHour < 9) {
        return "Pagi"; // Jam 2 sampai jam 9
    } else if (currentHour >= 9 && currentHour < 15) {
        return "Siang"; // Jam 9 sampai jam 15
    } else if (currentHour >= 15 && currentHour < 17) {
        return "Sore"; // Jam 15 sampai jam 17
    } else {
        return "Malam"; // Jam 17 sampai jam 2
    }
}



// Ambil username dari sessionStorage
const username = sessionStorage.getItem("username") || "Pengguna"; // Default ke "Pengguna" jika tidak ada

// Dapatkan kondisi waktu
const waktuKondisi = getWaktuKondisi();

// Ambil data dari JSON dan tampilkan pesan
async function displayGreeting() {
    try {
        // Ambil UUID dari sessionStorage
        const uuid = sessionStorage.getItem('uuid');
        if (!uuid) {
            throw new Error('UUID tidak ditemukan di sessionStorage.');
        }

        // Fetch file JSON
        const response = await fetch(filePath);
        const data = await response.json();

        // Cari pengguna berdasarkan UUID
        const user = data.find(user => user.UUID === uuid);

        // Target elemen untuk menampilkan pesan
        const greetingMessage = document.getElementById("greetingMessage");

        if (user) {
            // Tampilkan pesan dengan name dan role
            greetingMessage.innerHTML = `Selamat ${waktuKondisi}, <strong>${user.name}</strong>`;
        } else {
            // Jika pengguna tidak ditemukan, tampilkan pesan default
            greetingMessage.innerHTML = `Selamat ${waktuKondisi}, pengguna tidak ditemukan (UUID: ${uuid}).`;
        }
    } catch (error) {
        console.error("Error fetching JSON:", error);

        // Tampilkan pesan error pada elemen target
        const greetingMessage = document.getElementById("greetingMessage");
        greetingMessage.innerHTML = `Terjadi kesalahan saat mengambil data pengguna.`;
    }
}


// Panggil fungsi untuk menampilkan pesan saat halaman dimuat
displayGreeting();


//Show on Profiles

// Mengambil username dan role dari sessionStorage yang sudah disimpan saat login
const storedRole = sessionStorage.getItem("permisions"); // Mengambil role dari sessionStorage

// Fungsi untuk mengambil data dari JSON dan menampilkan sesuai username dan role dari sessionStorage
async function fetchAndProfile() {

// Target container
const container = document.getElementById("userProfiles");

    // Ambil UUID dari sessionStorage
    const uuid = sessionStorage.getItem('uuid');
    if (!uuid) {
        container.innerHTML =
            '<div class="text-center text-gray-500">Tidak ada data pengguna yang ditemukan.</div>';
        return; // Keluar dari fungsi jika UUID tidak ada
    }
// Cek apakah username ada di sessionStorage
try {
    // Fetch file JSON
    const response = await fetch(filePath);
    const data = await response.json();

    // Cari pengguna berdasarkan UUID
    const user = data.find(user => user.UUID === uuid);

    if (user) {
        const userDiv = document.createElement("div");
        userDiv.className =
            "p-4 bg-gray-50 border rounded-md shadow text-sm font-semibold max-w-auto";

        userDiv.innerHTML = `
            <div class="text-left w-auto"><strong>Username:</strong> ${user.username}</div>
            <div class="text-left w-auto"><strong>Name:</strong> ${user.name}</div>
            <div class="text-left w-auto"><strong>Email:</strong> ${user.email}</div>
            <div class="text-left w-auto"><strong>Role:</strong> ${user.role}</div>
        `;
        container.appendChild(userDiv);
    } else {
        container.innerHTML =
            '<div class="text-left text-gray-500">Tidak ada data yang cocok dengan UUID ini.</div>';
    }
} catch (error) {

    console.error("Error fetching JSON:", error);
    container.innerHTML =
        '<div class="text-center text-gray-500">Terjadi kesalahan saat mengambil data pengguna.</div>';
}
}

// Panggil fungsi saat halaman dimuat
fetchAndProfile();


//JavaScript (Menangani Klik dan Menampilkan Konten) yang tersedia di Navigasi

    // Ambil elemen navigasi
    const homeLink = document.getElementById("home");
    const profileLink = document.getElementById("profile");
    const usersLink = document.getElementById("users");
    const eventsLink = document.getElementById("events");
    const blogsLink = document.getElementById("blogs");
    const galleryLink = document.getElementById("Gallery");

    // Ambil elemen konten
    const homeContent = document.getElementById("homeContent");
    const profileContent = document.getElementById("profileContent");
    const usersContent = document.getElementById("usersContent");
    const eventsContent = document.getElementById("eventsContent");
    const blogsContent = document.getElementById("blogsContent");
    const galleryContent = document.getElementById("galleryContent");

    // Fungsi untuk menampilkan konten yang sesuai
    const showContent = (contentToShow) => {
        // Sembunyikan semua konten
        homeContent.classList.add("hidden");
        profileContent.classList.add("hidden");
        usersContent.classList.add("hidden");
        eventsContent.classList.add("hidden");
        blogsContent.classList.add("hidden");
        galleryContent.classList.add("hidden");

        // Tampilkan konten yang dipilih
        contentToShow.classList.remove("hidden");
    };
    
       // Fungsi untuk menyembunyikan navigasi berdasarkan hak akses
       function hideNavigationBasedOnPermissions(permissions) {
        const navItems = document.querySelectorAll('[data-permission]');
        navItems.forEach(item => {
            const requiredPermission = item.getAttribute('data-permission');
            if (!permissions.includes(requiredPermission)) {
                item.classList.add('hidden');
            }
        });
    }
    document.addEventListener('DOMContentLoaded', async () => {
        const uuid = sessionStorage.getItem('uuid');
        if (!uuid) {
            window.location.replace("/login");
            return;
        }
    
        try {
            const response = await fetch(`/api/getUserPermissions/${uuid}`);
            const data = await response.json();
            const permissions = data.permissions || [];
    
            hideNavigationBasedOnPermissions(permissions);
        } catch (error) {
            console.error('Error fetching user permissions:', error);
        }
    });
    
    function hideNavigationBasedOnPermissions(permissions) {
        const navItems = document.querySelectorAll('[data-permission]');
        navItems.forEach(item => {
            const requiredPermission = item.getAttribute('data-permission');
            if (!permissions.includes(requiredPermission)) {
                item.classList.add('hidden');
            }
        });
    }


// Contoh hak akses pengguna (dapat diambil dari session atau API)
// const userPermissionsString = sessionStorage.getItem('permissions');


// Parse the permissions if they are stored as a JSON string
// let userPermissions = null;
// if (userPermissionsString) {
//     try {
//         userPermissions = JSON.parse(userPermissionsString);
//     } catch (e) {
    
//         console.error('Error parsing user permissions:', e);
//     }
// }

// Sembunyikan navigasi berdasarkan hak akses
// hideNavigationBasedOnPermissions(userPermissions);

    // Event listener untuk navigasi
    homeLink.addEventListener("click", (e) => {
        e.preventDefault(); // Mencegah perilaku default link
        showContent(homeContent); // Tampilkan konten home
    });

    profileLink.addEventListener("click", (e) => {
        e.preventDefault(); // Mencegah perilaku default link
        showContent(profileContent); // Tampilkan konten profil
    }); 
    usersLink.addEventListener("click", (e) => {
        e.preventDefault(); // Mencegah perilaku default link
        showContent(usersContent); // Tampilkan konten profil
    }); 
    eventsLink.addEventListener("click", (e) => {
        e.preventDefault(); // Mencegah perilaku default link
        showContent(eventsContent); // Tampilkan konten profil
    });
    blogsLink.addEventListener("click", (e) => {
        e.preventDefault(); // Mencegah perilaku default link
        showContent(blogsContent); // Tampilkan konten profil
    });
    galleryLink.addEventListener("click", (e) => {
        e.preventDefault(); // Mencegah perilaku default link
        showContent(galleryContent); // Tampilkan konten profil
    });

    // Tampilkan konten home secara default saat halaman dimuat
    showContent(homeContent);




//Side bar menu Mobile
document.addEventListener("DOMContentLoaded", () => {
    const toggleSidebarButton = document.getElementById("toggleSidebar");
    const sidebar = document.getElementById("sidebar");
    const mainContainer = document.getElementById("mainContainer");
    const mainContent = document.getElementById("mainContent");
    // Fungsi untuk toggle sidebar
    const toggleSidebar = () => {
        if (sidebar.classList.contains("-translate-x-full")) {
            sidebar.classList.remove("-translate-x-full");
            sidebar.classList.add("translate-x-0");
            sidebar.setAttribute("aria-hidden", "false");
        } else {
            sidebar.classList.remove("translate-x-0");
            sidebar.classList.add("-translate-x-full");
            sidebar.setAttribute("aria-hidden", "true");
        }
    };

    // Event listener untuk tombol toggle
    toggleSidebarButton.addEventListener("click", toggleSidebar);
    
// Close the sidebar when clicking on the background
mainContainer.addEventListener('click', (event) => {
    // Close the sidebar if the background (not sidebar) is clicked
    if (!sidebar.contains(event.target) && sidebar.classList.contains("translate-x-0")) {
        sidebar.classList.remove("translate-x-0");
        sidebar.classList.add("-translate-x-full");
        sidebar.setAttribute("aria-hidden", "true");
    }
});
// Close the sidebar when clicking on the background
mainContent.addEventListener('click', (event) => {
    // Close the sidebar if the background (not sidebar) is clicked
    if (!sidebar.contains(event.target) && sidebar.classList.contains("translate-x-0")) {
        sidebar.classList.remove("translate-x-0");
        sidebar.classList.add("-translate-x-full");
        sidebar.setAttribute("aria-hidden", "true");
    }
});
});




// Hover Sidebar toggle
const navLinks = document.querySelectorAll('.nav-link');

// Set default active link
navLinks[0].classList.add('text-white', 'bg-[#f4a3ba]');
navLinks.forEach(link => {
    link.addEventListener('click', function() {
        navLinks.forEach(nav => {
            nav.classList.remove('text-white');
            nav.classList.remove('text-gray-700');
            nav.classList.remove('bg-[#f4a3ba]');
        });
        this.classList.add('text-white');
        this.classList.remove('text-gray-700');
        this.classList.add('bg-[#f4a3ba]');
    });
});



//Show list data users
let usersData = [];
// Fungsi untuk mengambil dan menampilkan daftar pengguna



    const editAddUsers = document.getElementById('editAddUsers');
    const userForm = document.getElementById('userForm');
    const saveUserButton = document.getElementById('saveUser');
    const cancelUserButton = document.getElementById('cancelUser');
    const userUUIDInput = document.getElementById('userUUID');
    const usernameInput = document.getElementById('username');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const roleInput = document.getElementById('role');
    const levelInput = document.getElementById('level');

    // Fungsi untuk menampilkan formulir dengan data pengguna
    const showUserForm = (user = {}) => {
        userUUIDInput.value = user.UUID || '';
        usernameInput.value = user.username || '';
        nameInput.value = user.name || '';
        emailInput.value = user.email || '';
        roleInput.value = user.role || '';
        levelInput.value = user.level || '';
        editAddUsers.classList.remove('hidden');
    };
    
    
    
 // Fungsi untuk memuat data level dari R0l3.json
 const loadLevels = async () => {
    try {
        const response = await fetch('/api/getUsersRoles');
        if (!response.ok) {
            throw new Error('Failed to load levels');
        }
        const roles = await response.json();
        const levels = roles.map(role => role.level);

        // Isi dropdown level
        levelInput.innerHTML = levels.map(level => `<option class="cursor-pointer" value="${level}">${level}</option>`).join('');
    } catch (error) {
        console.error('Error loading levels:', error.message);
        alertBox('Error loading levels:', error.message);
    }
};

// Panggil fungsi untuk memuat data level
loadLevels();
// Function to generate a UUID (or you can use any UUID library)
function generateUUID() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}
    // Event listener untuk tombol tambah pengguna
    document.getElementById('addUsers').addEventListener('click', () => {
        showUserForm(); // Tampilkan formulir kosong untuk pengguna baru
    });

    const addEditUserListeners = () => {
        const editUsers = document.querySelectorAll('.edit-User');
        editUsers.forEach(button => {
            button.addEventListener('click', (event) => {
                const uuid = button.getAttribute('data-uuid');
                const user = usersData.find(u => u.UUID === uuid);
                showUserForm(user); // Tampilkan formulir dengan data pengguna
            });
        });
    };

    // Event listener untuk tombol simpan
    userForm.addEventListener('submit', async (event) => {
        event.preventDefault();
        const user = {
            UUID: userUUIDInput.value,
            username: usernameInput.value,
            name: nameInput.value,
            email: emailInput.value,
            role: roleInput.value,
            level: levelInput.value
        };

        if (user.UUID) {
            // Update existing user
            await updateUserToServer(user);
        } else {
            // Add new user
            user.UUID = generateUUID();
            await addUserFunction(user);
        }

        editAddUsers.classList.add('hidden');
        fetchUsers(); // Refresh user list
    });

    // Event listener untuk tombol batal
    cancelUserButton.addEventListener('click', () => {
        editAddUsers.classList.add('hidden');
    });
    async function fetchUsers() {
        try {
            const response = await fetch('/api/getUsersFile'); // Pastikan URL API sesuai
            if (!response.ok) {
                throw new Error('Gagal mengambil data pengguna');
            }
            const users = await response.json();
            usersData = users; // Simpan data pengguna secara global
            displayUsers(users); // Tampilkan data pengguna
            
            //     // Ambil izin pengguna pertama (misalnya, pengguna yang sedang login)
            // const permissions = users[3].permissions;
            // hideNavigationBasedOnPermissions(permissions); // Sembunyikan elemen navigasi berdasarkan izin
        } catch (error) {
        console.error('Error fetching users:', error.message);
        }
    }
// Fungsi untuk menampilkan daftar pengguna
function displayUsers(users) {
    const tbody = document.querySelector('#userList tbody');
    tbody.innerHTML = ''; // Bersihkan tabel sebelum ditampilkan ulang

    users.forEach(user => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
        <td class="text-left px-4 py-2 text-wrap">
            <textarea class="rounded-md bg-[#F1DEC6] resize-none overflow-hidden" data-key="username" data-uuid="${user.UUID}" disabled>${user.username || 'N/A'}</textarea>
        </td>
        <td class="text-left px-4 py-2 text-wrap">
            <textarea class="rounded-md bg-[#F1DEC6] resize-none overflow-hidden" data-key="name" disabled>${user.name || 'N/A'}</textarea>
        </td>
        <td class="text-left px-4 py-2 text-wrap">
            <textarea class="rounded-md bg-[#F1DEC6] resize-none overflow-hidden" data-key="email" disabled>${user.email || 'N/A'}</textarea>
        </td>
        <td class="text-left px-4 py-2 text-wrap">
            <textarea class="rounded-md bg-[#F1DEC6] resize-none overflow-hidden" data-key="role" disabled>${user.role || 'N/A'}</textarea>
        </td>
        <td class="text-center px-4 py-2 text-wrap">
            <div class="flex gap-3 flex-row align-items-end relative w-full h-auto p-4">
                <div class="w-6 h-6 relative cursor-pointer hover:bg-transparent active:bg-[#f4a3ba] lg:hover:bg-[#f4a3ba] rounded edit-User" data-uuid="${user.UUID}">
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
                        <path d="M5.5 19H6.925L16.7 9.225L15.275 7.8L5.5 17.575V19ZM3.5 21V16.75L16.7 3.575C16.9 3.39167 17.121 3.25 17.363 3.15C17.605 3.05 17.859 3 18.125 3C18.391 3 18.6493 3.05 18.9 3.15C19.1507 3.25 19.3673 3.4 19.55 3.6L20.925 5C21.125 5.18333 21.271 5.4 21.363 5.65C21.455 5.9 21.5007 6.15 21.5 6.4C21.5 6.66667 21.4543 6.921 21.363 7.163C21.2717 7.405 21.1257 7.62567 20.925 7.825L7.75 21H3.5ZM15.975 8.525L15.275 7.8L16.7 9.225L15.975 8.525Z" fill="black"/>
                    </svg>
                </div>
                <div class="w-6 h-6 relative cursor-pointer hover:bg-transparent active:bg-[#f4a3ba] lg:hover:bg-[#f4a3ba] rounded delete-User" data-uuid="${user.UUID}">
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
                        <path d="M7.5 21C6.95 21 6.47933 20.8043 6.088 20.413C5.69667 20.0217 5.50067 19.5507 5.5 19V6H4.5V4H9.5V3H15.5V4H20.5V6H19.5V19C19.5 19.55 19.3043 20.021 18.913 20.413C18.5217 20.805 18.0507 21.0007 17.5 21H7.5ZM9.5 17H11.5V8H9.5V17ZM13.5 17H15.5V8H13.5V17Z" fill="black"/>
                    </svg>
                </div>
            </div>
        </td>
    `;
        tbody.appendChild(tr);
    });

    // Tambahkan event listener ke tombol Edit dan Hapus
        // const editUsers = document.querySelectorAll('.edit-User');
    const deleteUsers = document.querySelectorAll('.delete-User');
    

    // editUsers.forEach(button => {
    //     button.addEventListener('click', (event) => {
    //         const uuid = button.getAttribute('data-uuid'); // Ambil UUID dari tombol
    //         const row = event.target.closest('tr'); // Baris yang sesuai dengan tombol
    //         const inputs = row.querySelectorAll('textarea'); // Ambil semua input di baris
    
    //         // Ambil username dari input dengan data-key="username"
    //         const usernameInput = row.querySelector('textarea[data-key="username"]');
    //         const username = usernameInput ? usernameInput.value : "Tidak diketahui";
    
    //         // Periksa apakah input dalam mode edit
    //         const isEditing = inputs[0].disabled === false;
    
    //         if (!isEditing) {
    //             // Aktifkan mode edit
    //             button.style.backgroundColor = "#f4a3ba";
    //             inputs.forEach(input => {
    //                 input.style.backgroundColor = "#4158A6"; // Ubah background saat edit
    //                 input.disabled = false; // Aktifkan input
    //                 input.classList.remove('cursor-not-allowed', 'bg-[#F1DEC6]'); // Hapus atribut readonly
    //                 input.classList.add('text-white');
    //             });
    //         } else {
    //             // Tampilkan konfirmasi sebelum menyimpan perubahan
    //             confirmBox(`Apakah Anda ingin menyimpan perubahan dari username ${username}?`).then(confirmSave => {
    //                 if (confirmSave) {
    //                     // Simpan perubahan dan nonaktifkan mode edit
    //                     const updatedUser = { UUID: uuid }; // Sertakan UUID
    //                     inputs.forEach(input => {
    //                         const key = input.getAttribute('data-key'); // Ambil atribut data-key untuk properti
    //                         updatedUser[key] = input.value; // Simpan nilai input
    //                         input.disabled = true; // Kembalikan ke mode non-edit
    //                         input.classList.remove('bg-[#f4a3ba]','text-white'); // Hapus atribut edit
    //                         input.classList.add('cursor-not-allowed', 'bg-[#F1DEC6]'); // Tambahkan readonly
    //                         input.style.backgroundColor = ""; // Reset warna background
    //                     });
    //                     button.style.backgroundColor = ""; // Reset warna tombol
    //                     updateUserToServer(updatedUser); // Panggil fungsi untuk menyimpan data
    //                 } else {
    //                     // Batalkan perubahan dan kembalikan ke mode non-edit
    //                     inputs.forEach(input => {
    //                         input.disabled = true; // Nonaktifkan input
    //                         input.classList.remove('bg-[#f4a3ba]','text-white'); // Hapus mode edit
    //                         input.classList.add('cursor-not-allowed', 'bg-[#F1DEC6]'); // Tambahkan readonly
    //                         input.style.backgroundColor = ""; // Reset warna background
    //                     });
    //                     button.style.backgroundColor = ""; // Reset warna tombol
    //                 }
    //             });
    //         }
    //     });
    // });
    
    // editUsers.forEach(button => {
    //     button.addEventListener('click', (event) => {
    //         const uuid = button.getAttribute('data-uuid');
    //         const user = usersData.find(u => u.UUID === uuid);
    //         showUserForm(user); // Tampilkan formulir dengan data pengguna
    //     });
    // });
    
    // Tambahkan event listener ke tombol Edit dan Hapus
    addEditUserListeners();
    deleteUsers.forEach(button => {
        button.addEventListener('click', () => {
            const uuid = button.getAttribute('data-uuid'); // Ambil UUID dari atribut tombol
            const user = usersData.find(u => u.UUID === uuid); // Cari user berdasarkan UUID
            if (!user) {
                alertBox('Kesalahan: Pengguna tidak ditemukan.');
                return;
            }
            deleteUser(uuid, user.username); // Panggil fungsi delete dengan UUID dan username
        });
    });   
    
   // Fungsi Refresh Data
const refreshUsers = document.getElementById('refreshUsers');
refreshUsers.addEventListener('click', () => {
    fetchUsers(); // Fungsi untuk mengambil dan menampilkan data pengguna
    
});



}
// Panggil fungsi untuk menampilkan daftar pengguna
fetchUsers();

// Fungsi untuk memuat dan menampilkan data role di rolesSection
async function fetchAndDisplayRoles() {
    try {
        const response = await fetch('/api/getUsersRoles');
        if (!response.ok) {
            throw new Error('Failed to load roles');
        }
        const roles = await response.json();
        const tbody = document.querySelector('#roleList tbody');
        tbody.innerHTML = ''; // Bersihkan tabel sebelum ditampilkan ulang

        roles.forEach(role => {
            const tr = document.createElement('tr');
            tr.innerHTML = `
            <td class="text-left px-4 py-2 text-wrap">${role.level}</td>
            <td class="text-left px-4 py-2 text-wrap">${role.permissions.join(', ')}</td>
            <td class="text-center px-4 py-2 text-wrap">
                <div class="flex gap-3 flex-row align-items-end relative w-full h-auto p-4">
                    <div class="w-6 h-6 relative cursor-pointer hover:bg-transparent active:bg-[#f4a3ba] lg:hover:bg-[#f4a3ba] rounded edit-Role" data-level="${role.level}">
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
                            <path d="M5.5 19H6.925L16.7 9.225L15.275 7.8L5.5 17.575V19ZM3.5 21V16.75L16.7 3.575C16.9 3.39167 17.121 3.25 17.363 3.15C17.605 3.05 17.859 3 18.125 3C18.391 3 18.6493 3.05 18.9 3.15C19.1507 3.25 19.3673 3.4 19.55 3.6L20.925 5C21.125 5.18333 21.271 5.4 21.363 5.65C21.455 5.9 21.5007 6.15 21.5 6.4C21.5 6.66667 21.4543 6.921 21.363 7.163C21.2717 7.405 21.1257 7.62567 20.925 7.825L7.75 21H3.5ZM15.975 8.525L15.275 7.8L16.7 9.225L15.975 8.525Z" fill="black"/>
                        </svg>
                    </div>
                    <div class="w-6 h-6 relative cursor-pointer hover:bg-transparent active:bg-[#f4a3ba] lg:hover:bg-[#f4a3ba] rounded delete-Role" data-level="${role.level}">
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
                            <path d="M7.5 21C6.95 21 6.47933 20.8043 6.088 20.413C5.69667 20.0217 5.50067 19.5507 5.5 19V6H4.5V4H9.5V3H15.5V4H20.5V6H19.5V19C19.5 19.55 19.3043 20.021 18.913 20.413C18.5217 20.805 18.0507 21.0007 17.5 21H7.5ZM9.5 17H11.5V8H9.5V17ZM13.5 17H15.5V8H13.5V17Z" fill="black"/>
                        </svg>
                    </div>
                </div>
            </td>
        `;
            tbody.appendChild(tr);
        });

        // Tambahkan event listener ke tombol Edit dan Hapus
        const editRoles = document.querySelectorAll('.edit-Role');
        const deleteRoles = document.querySelectorAll('.delete-Role');

        editRoles.forEach(button => {
            button.addEventListener('click', (event) => {
                const level = button.getAttribute('data-level');
                const role = roles.find(r => r.level === level);
                // Tampilkan form edit role dengan data role
                showRoleForm(role);
            });
        });
        const showRoleForm = (role = {}) => {
            roleIdInput.value = role.id || '';
            nameEventsInput.value = role.nameEvents || '';
            startInput.value = role.start || '';
            endInput.value = role.end || '';
            locationInput.value = role.location || '';
            posterInput.value = role.poster || '';
            editAddRoles.classList.remove('hidden');
        };
        deleteRoles.forEach(button => {
            button.addEventListener('click', async () => {
                const level = button.getAttribute('data-level');
                const confirmDelete = confirm(`Apakah Anda yakin ingin menghapus role dengan level: ${level}?`);
                if (confirmDelete) {
                    try {
                        const response = await fetch(`/api/deleteRole/${level}`, {
                            method: 'DELETE',
                            headers: {
                                'Content-Type': 'application/json',
                                'X-CSRF-TOKEN': csrfToken,
                            },
                        });

                        if (response.ok) {
                            alertBox(`Role dengan level ${level} berhasil dihapus!`);
                            fetchAndDisplayRoles(); // Perbarui daftar role setelah penghapusan
                        } else {
                            const errorData = await response.json();
                            alertBox(`Error: ${errorData.message}`);
                        }
                    } catch (error) {
                        console.error('Error deleting role:', error.message);
                        alertBox('Terjadi kesalahan saat menghapus role.');
                    }
                }
            });
        });
    } catch (error) {
        console.error('Error fetching roles:', error.message);
    }
}
const refreshRoles = document.getElementById('refreshRoles');
refreshRoles.addEventListener('click', () => {
    fetchAndDisplayRoles();
});
// Panggil fungsi untuk menampilkan daftar role
fetchAndDisplayRoles();






const deleteUserUrl = '/api/usersDelete'; // Pastikan URL endpoint sesuai dengan API di backend

// Fungsi untuk menghapus pengguna
// Fungsi untuk menghapus pengguna
async function deleteUser(uuid, username) {
    const confirmDelete = await confirmBox(`Apakah Anda yakin ingin menghapus pengguna dengan username: ${username}?`);

    if (confirmDelete) {
        try {
            const response = await fetch(deleteUserUrl, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    'X-CSRF-TOKEN': csrfToken, // Pastikan CSRF token dikirim jika diperlukan
                },
                body: JSON.stringify({ UUID: uuid }), // Kirim UUID pengguna yang ingin dihapus
            });

            if (response.ok) {
                alertBox(`User ${username} berhasil dihapus!`);
                fetchUsers(); // Perbarui daftar pengguna setelah penghapusan
            } else {
                const errorData = await response.json();
                alertBox(`Error: ${errorData.message}`);
            }
        } catch (error) {
        console.error('Error deleting user:', error.message);
            alertBox('Terjadi kesalahan saat menghapus pengguna.');
        }
    }
}

// console.log('Delete User URL:', deleteUserUrl);

// console.log('CSRF Token:', document.querySelector('meta[name="csrf-token"]').content);


// Fungsi untuk menyimpan pengguna ke server
async function updateUserToServer(updatedUser) {
    try {
        const response = await fetch('/api/updateUser', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'X-CSRF-TOKEN': csrfToken // Pastikan CSRF token dikirim jika diperlukan
            },
            body: JSON.stringify(updatedUser), // Kirim data pengguna
        });

        if (!response.ok) {
            throw new Error('Gagal memperbarui pengguna');
        }

        const data = await response.json();
        // alertBox(`Perubahan berhasil disimpan: ${data.message}`);
        alertBox(data.message); 
    } catch (error) {
       
        console.error('Error:', error.message);
        alertBox('Terjadi kesalahan saat menyimpan perubahan.');
    }
}








// Define the addUserFunction to handle adding the new user
async function addUserFunction(newUser) {
     // Send the data to Laravel backend using Fetch API
     try {
        const response = await fetch('/api/add-user', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-CSRF-TOKEN': csrfToken
            },
            body: JSON.stringify(newUser)
        });

        if (response.ok) {
            const result = await response.json();
            if (result.success) {
                alertBox('User added successfully!');
                // Optionally refresh the list of users or add the new user to the UI without reloading
            } else {
                alertBox('Failed to add user!');
            }
        }
    } catch (error) {
       alertBox('Failed to add user!');
       fetchUsers();
        console.error('Error adding user:', error);
    }
    
}





//Events table list

let eventsData = [];

    // const csrfToken = document.querySelector('meta[name="csrf-token"]').getAttribute('content');
    // const bodyDashboard = document.getElementById("bodyDashboard");

    const editAddEvents = document.getElementById('editAddEvents');
    const eventForm = document.getElementById('eventForm');
    const saveEventButton = document.getElementById('saveEvent');
    const cancelEventButton = document.getElementById('cancelEvent');
    const eventIdInput = document.getElementById('idEvent');
    const eventNameInput = document.getElementById('nameEvents');
    const eventKetInput = document.getElementById('KetEvents');
    const startDateInput = document.getElementById('startDate');
    const startTimeInput = document.getElementById('startTime');
    const endDateInput = document.getElementById('endDate');
    const endTimeInput = document.getElementById('endTime');
    const eventLocationInput = document.getElementById('location');
    const eventPosterInput = document.getElementById('poster');
    const hargaTiketInput  = document.getElementById('hargaTiket');




// Fungsi untuk menampilkan formulir dengan data event  
const showEventForm = (events = {}) => {  
    // Ubah format tanggal dari "YYYY-MM-DD" ke "DD/MM/YYYY"  
    // const formatDateToDDMMYYYY = (date) => {  
    //     if (!date) return '';  
    //     const [year, month, day] = date.split('-');  
    //     return `${day}/${month}/${year}`;  
    // };  

    eventIdInput.value = events.idEvent || ''; // Pastikan properti idEvent  
    eventNameInput.value = events.nameEvents || ''; // Pastikan properti nameEvents  
    eventKetInput.value = events.KetEvents || ''; // Pastikan properti nameEvents  
    startDateInput.value = events.startDate || ''; // Tanggal dalam format DD/MM/YYYY  
    startTimeInput.value = events.startTime?.substring(0, 5) || ''; // Jam (HH:MM)  
    endDateInput.value = events.endDate || ''; // Tanggal dalam format DD/MM/YYYY  
    endTimeInput.value = events.endTime|| ''; // Jam (HH:MM)  
    eventLocationInput.value = events.location || ''; // Pastikan properti location  
    eventPosterInput.value = events.poster || ''; // Pastikan properti poster  
    hargaTiketInput.value = events.hargaTiket || ''; // Pastikan properti hargaTiket  
    editAddEvents.classList.remove('hidden'); // Tampilkan form  
};  

    // Event listener untuk tombol tambah event
    document.getElementById('addEvents').addEventListener('click', () => {
        showEventForm(); // Tampilkan formulir kosong untuk event baru
    });

// Event listener untuk tombol edit
document.addEventListener('click', (event) => {
    if (event.target.closest('.edit-Events')) {
        const idEvent = event.target.closest('.edit-Events').getAttribute('data-idEvent');
        const events = eventsData.find(e => e.idEvent === idEvent); // Gunakan idEvent, bukan IDEVENT
        showEventForm(events); // Tampilkan formulir dengan data event
    }
});

   // Event listener untuk tombol simpan
eventForm.addEventListener('submit', async (event) => {
    event.preventDefault();

    const eventData = {  
        idEvent: document.getElementById('idEvent').value,  
        nameEvents: document.getElementById('nameEvents').value,  
        KetEvents: document.getElementById('KetEvents').value,  
        startDate: document.getElementById('startDate').value,  
        startTime: document.getElementById('startTime').value, // Tambahkan detik (HH:MM:SS)  
        endDate: document.getElementById('endDate').value,  
        endTime: document.getElementById('endTime').value, // Tambahkan detik (HH:MM:SS)  
        location: document.getElementById('location').value,  
        poster: document.getElementById('poster').value,  
        hargaTiket: document.getElementById('hargaTiket').value,  
    }; 
    if (eventData.idEvent) {
        // Update existing event
        await updateEventToServer(eventData);
    } else {
        // Add new event
        eventData.idEvent = generateRandomId();
        await addEventFunction(eventData);
    }

    editAddEvents.classList.add('hidden');
    fetchEvents(); // Refresh event list
});

    // Event listener untuk tombol batal
    cancelEventButton.addEventListener('click', () => {
        editAddEvents.classList.add('hidden');
    });

    // Fungsi untuk menambah event ke server
   // Fungsi untuk menambah event ke server
   async function addEventFunction(eventData) {  
    try {  
        const response = await fetch('/api/addEvent', {  
            method: 'POST',  
            headers: {  
                'Content-Type': 'application/json',  
                'X-CSRF-TOKEN': csrfToken,  
            },  
            body: JSON.stringify(eventData)  
        });  

        // Hapus debugging menggunakan .text()  
        if (!response.ok) {  
            const errorMessage = await response.text();  
            throw new Error(errorMessage || 'Failed to add event');  
        }  

        const data = await response.json(); // Langsung baca sebagai JSON  
        alertBox(data.message);  
        fetchEvents(); // Refresh event list  
    } catch (error) {  
        alertBox(`Error: ${error.message}`); // Tampilkan pesan error ke pengguna  
    }  
}  

    // Fungsi untuk memperbarui event di server
    async function updateEventToServer(eventData) {
        try {
            const response = await fetch(`/api/updateEvent/${eventData.idEvent}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'X-CSRF-TOKEN': csrfToken,
                },
                body: JSON.stringify(eventData)
            });
            if (!response.ok) {
                throw new Error('Failed to update event');
                
            }
            const data = await response.json();
                alertBox(data.message);
        } catch (error) {
            console.error('Error updating event:', error.message);
        }
    }

    // Fungsi untuk mengambil dan menampilkan daftar event
    async function fetchEvents() {
        try {
            const response = await fetch('/api/getEventsFile'); // Pastikan URL API sesuai
            if (!response.ok) {
                throw new Error('Gagal mengambil data event');
            }
            const events = await response.json();
            eventsData = events; // Simpan data event secara global
            displayEvents(events); // Tampilkan data event
        } catch (error) {
            console.error('Error fetching events:', error.message);
        }
    }

    // Panggil fungsi untuk menampilkan daftar event
    fetchEvents();

// Fungsi untuk menampilkan daftar pengguna
function displayEvents(events) {
    const tbody = document.querySelector('#eventList tbody');
    tbody.innerHTML = ''; // Bersihkan tabel sebelum ditampilkan ulang
// Urutkan event berdasarkan tanggal  
const today = new Date();  
const sortedEvents = events.sort((a, b) => {  
    const dateA = new Date(a.startDate);  
    const dateB = new Date(b.startDate);  

    // Jika tanggal event A sama dengan hari ini, munculkan di atas  
    if (dateA.toDateString() === today.toDateString()) return -1;  
    // Jika tanggal event B sama dengan hari ini, munculkan di atas  
    if (dateB.toDateString() === today.toDateString()) return 1;  
    // Urutkan berdasarkan tanggal yang lebih baru  
    return dateA - dateB;  
});  
sortedEvents.forEach(event => {
        const tr = document.createElement('tr');
        const startDate = new Date(event.startDate);  
        const endDate = event.endDate ? new Date(event.endDate) : null;  
        
        
        tr.innerHTML = `
    <td class="text-left px-4 py-2 text-wrap">${event.nameEvents}</td>
 <td class="text-left px-4 py-2 text-wrap">  
    ${event.hargaTiket === null || event.hargaTiket === "" || isNaN(parseFloat(event.hargaTiket))  
        ? 'Free'   
        : `Rp ${parseFloat(event.hargaTiket).toLocaleString('id-ID')}`  
    }  
</td>  
            <td class="text-left px-4 py-2 text-wrap">
                ${event.startDate || ''}${event.startDate && event.startTime ? ', ' : ''}${event.startTime?.substring(0, 5) || ''}
            </td>  
            <td class="text-left px-4 py-2 text-wrap">
                ${event.endDate || ''}${event.endDate && event.endTime ? ', ' : ''}${event.endTime?.substring(0, 5) || ''}
            </td>  
    <td class="text-left px-4 py-2 text-wrap">${event.location}</td>
    <td class="text-left px-4 py-2 text-wrap">${event.KetEvents}</td>
   <td class="text-center px-4 py-2 text-wrap">
    ${event.poster 
        ? `<img src="${event.poster}" alt="${event.nameEvents} Poster" 
             class="w-16 h-16 object-cover">`
        : `<div class="w-16 h-16 bg-gray-100 flex items-center justify-center">
               <span class="text-gray-400 text-xs">No Poster</span>
           </div>`
    }
</td>
        <td class="text-center px-4 py-2 text-wrap">
            <div class="flex gap-3 flex-row align-items-end relative w-full h-auto p-4">
                <div class="w-6 h-6 relative cursor-pointer hover:bg-transparent active:bg-[#f4a3ba] lg:hover:bg-[#f4a3ba] rounded edit-Events" data-idEvent="${event.idEvent}">
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
                        <path d="M5.5 19H6.925L16.7 9.225L15.275 7.8L5.5 17.575V19ZM3.5 21V16.75L16.7 3.575C16.9 3.39167 17.121 3.25 17.363 3.15C17.605 3.05 17.859 3 18.125 3C18.391 3 18.6493 3.05 18.9 3.15C19.1507 3.25 19.3673 3.4 19.55 3.6L20.925 5C21.125 5.18333 21.271 5.4 21.363 5.65C21.455 5.9 21.5007 6.15 21.5 6.4C21.5 6.66667 21.4543 6.921 21.363 7.163C21.2717 7.405 21.1257 7.62567 20.925 7.825L7.75 21H3.5ZM15.975 8.525L15.275 7.8L16.7 9.225L15.975 8.525Z" fill="black"/>
                    </svg>
                </div>
                <div class="w-6 h-6 relative cursor-pointer hover:bg-transparent active:bg-[#f4a3ba] lg:hover:bg-[#f4a3ba] rounded delete-Events" data-idEvent="${event.idEvent}">
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
                        <path d="M7.5 21C6.95 21 6.47933 20.8043 6.088 20.413C5.69667 20.0217 5.50067 19.5507 5.5 19V6H4.5V4H9.5V3H15.5V4H20.5V6H19.5V19C19.5 19.55 19.3043 20.021 18.913 20.413C18.5217 20.805 18.0507 21.0007 17.5 21H7.5ZM9.5 17H11.5V8H9.5V17ZM13.5 17H15.5V8H13.5V17Z" fill="black"/>
                    </svg>
                </div>
            </div>
        </td>
    `;
    
        //   }  
        scheduleAutoDelete(event);
        // testName(event);
        tbody.appendChild(tr);
    });
}

// async function testName(event){
// const nameEvents = event.nameEvents;
// console.log('test ' +nameEvents);
// }

// Fungsi untuk hapus otomatis event
// Fungsi untuk menghapus event otomatis
async function scheduleAutoDelete(event) {
    try {
        const startDate = new Date(event.startDate);
        const endDate = event.endDate ? new Date(event.endDate) : null;
        const nameEvents = event.nameEvents;
        // Tentukan tanggal target
        const targetDate = endDate || startDate;
        const deleteDate = new Date(targetDate);
        deleteDate.setDate(targetDate.getDate() + 1); // H+1
        
        // Hitung selisih waktu dalam milidetik
        const now = new Date();
        const timeDiff = deleteDate - now;
        
        // Jika waktu sudah lewat, hapus segera
        if (timeDiff <= 0) {
            await deleteEventOutdate(event.idEvent, nameEvents);
            return;
        }

        // Jadwalkan penghapusan
        setTimeout(((id, name) => {
            return async () => {
                await deleteEventOutdate(id, name);
            }
        })(event.idEvent, nameEvents), timeDiff);

    } catch (error) {
        console.error('Error scheduling delete:', error);
    }
}
// // Test case 2 - Event akan datang
// const futureEvent = {
//     idEvent: "A1P1A34ODA1",
//     startDate: new Date(Date.now() + 3600000).toISOString(), // 1 jam lagi
//     endDate: null
// };
// // Test case 1 - Event sudah lewat
// const oldEvent = {
//     idEvent: "KW19AP193AK",
//     startDate: "2023-01-01",
//     endDate: null
// };



// scheduleAutoDelete(oldEvent);  // Harus langsung terhapus
// scheduleAutoDelete(futureEvent); // Harus terhapus setelah 1 jam + 1 hari

// Periksa console log dan network tab
// Fungsi Refresh Data
const refreshEvents = document.getElementById('refreshBtnEvents');
refreshEvents.addEventListener('click', () => {
    fetchEvents(); // Fungsi untuk mengambil dan menampilkan data pengguna
});




 // Pastikan URL endpoint sesuai dengan API di backend


// Fungsi untuk menghapus Event
document.addEventListener('click', async (event) => {
    if (event.target.closest('.delete-Events')) {
        const idEvent = event.target.closest('.delete-Events').getAttribute('data-idEvent');
        const nameEvents = event.target.closest('tr').querySelector('td').textContent;
            await deleteEvent(idEvent, nameEvents);
    }
});


// Fungsi untuk menghapus event
async function deleteEvent(idEvent, nameEvents) {
    const confirmDelete = await confirmBox(`Apakah Anda yakin ingin menghapus event <b>${nameEvents}</b>?`);
    if (confirmDelete) {
        try {
            const response = await fetch(`/api/deleteEvent/${idEvent}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    'X-CSRF-TOKEN': csrfToken,
                },
            });
            if (response.ok) {
                alertBox(`Event ${nameEvents} berhasil dihapus!`);
                fetchEvents(); // Perbarui daftar event setelah penghapusan
            } else {
                alertBox('Gagal menghapus event.');
            }
        } catch (error) {
            console.error('Error deleting event:', error.message);
        }
    }
}
async function deleteEventOutdate(idEvent, nameEvents) {
    
        try {
            const response = await fetch(`/api/deleteEvent/${idEvent}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    'X-CSRF-TOKEN': csrfToken,
                },
            });
            if (response.ok) {
                // alertBox(`Event ${nameEvents} berhasil dihapus!`);
                fetchEvents(); // Perbarui daftar event setelah penghapusan
            } else {
                alertBox('Gagal menghapus event Otomatis.');
            }
        } catch (error) {
            console.error('Error deleting event Automatic:', error.message);
        }
}

// console.log('Delete User URL:', deleteUserUrl);

// console.log('CSRF Token:', document.querySelector('meta[name="csrf-token"]').content);

async function editEvent(eventData) {
    try {
        const response = await fetch(`/api/updateEvent/${eventData.idEvent}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'X-CSRF-TOKEN': csrfToken, 
            },
            body: JSON.stringify(updatedEvent),
        });

        if (!response.ok) {
            throw new Error('Failed to update event');
        }

        const result = await response.json();
        console.log(result.message);
    } catch (error) {
      
        console.error('Error updating event:', error);
    }
}

// Fungsi untuk menyimpan pengguna ke server
async function addEvent(eventData) {
    try {
        const response = await fetch('/api/addEvent', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-CSRF-TOKEN': csrfToken,
            },
            body: JSON.stringify(eventData),
        });

   
        // Debugging: Log the response status and text
        console.log('Response status:', response.status);
        const responseText = await response.text();
        console.log('Response text:', responseText);

        if (!response.ok) {
            throw new Error(responseText || 'Failed to add event');
        }
        
        const data = await response.json(); // Parse the response as JSON
        alertBox(data.message);
        fetchEvents(); // Refresh event list

        console.log(result.message);
    } catch (error) {
        alertBox(`Error: ${error.message}`); // Show the error message to the user
        console.error('Error adding event:', error.message);
    }
}


// Fungsi untuk menghasilkan ID acak
function generateRandomId() {
    return Math.random().toString(36).substring(2, 13).toUpperCase(); // ID acak 11 karakter
}


// //Member Registration List
// async function fetchMemberList() {
//     try {
//         const response = await fetch('/api/getMemberList'); // Mengambil data dari API
//         if (!response.ok) {
//             throw new Error('Gagal mengambil data member');
//         }
//         const members = await response.json();
//         displayMembers(members); // Menampilkan data member
//     } catch (error) {
//         console.error('Error fetching member list:', error.message);
//     }
// }

// // Fungsi untuk menampilkan daftar member di tabel
// function displayMembers(members) {
//     const tbody = document.querySelector('#registerMemberList tbody');
//     tbody.innerHTML = ''; // Bersihkan tabel sebelum menampilkan ulang

//     members.forEach(member => {
//         const tr = document.createElement('tr');
//         tr.innerHTML = `
//             <td class="text-left px-4 py-2 text-wrap">${member.timestamp}</td>
//             <td class="text-left px-4 py-2 text-wrap">${member.nama}</td>
//             <td class="text-left px-4 py-2 text-wrap">${member.jurusan}</td>
//             <td class="text-left px-4 py-2 text-wrap">${member.nim}</td>
//             <td class="text-center px-4 py-2 text-wrap">
//                 <div class="flex gap-3 flex-row align-items-end relative w-full h-auto p-4">
//                     <div class="w-6 h-6 relative cursor-pointer hover:bg-transparent active:bg-[#f4a3ba] lg:hover:bg-[#f4a3ba] rounded delete-Member" data-nim="${member.nim}">
//                         <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
//                             <path d="M7.5 21C6.95 21 6.47933 20.8043 6.088 20.413C5.69667 20.0217 5.50067 19.5507 5.5 19V6H4.5V4H9.5V3H15.5V4H20.5V6H19.5V19C19.5 19.55 19.3043 20.021 18.913 20.413C18.5217 20.805 18.0507 21.0007 17.5 21H7.5ZM9.5 17H11.5V8H9.5V17ZM13.5 17H15.5V8H13.5V17Z" fill="black"/>
//                         </svg>
//                     </div>
//                 </div>
//             </td>
//         `;
//         tbody.appendChild(tr);
//     });
// }

// // Memanggil fungsi untuk mengambil dan menampilkan daftar member
// fetchMemberList();

// // Fungsi untuk menghapus member berdasarkan NIM
// document.addEventListener('click', async (event) => {
//     if (event.target.closest('.delete-Member')) {
//         const nim = event.target.closest('.delete-Member').getAttribute('data-nim');
//         const nameMember = event.target.closest('tr').querySelector('td:nth-child(2)').textContent;
//         await deleteMember(nim, nameMember);
//     }
// });

// // Fungsi untuk menghapus member
// async function deleteMember(nim, nameMember) {
//     const confirmDelete = confirm(`Apakah Anda yakin ingin menghapus member dengan NIM <b>${nim}</b>?`);
//     if (confirmDelete) {
//         try {
//             const response = await fetch(`/api/deleteMember/${nim}`, {
//                 method: 'DELETE',
//                 headers: {
//                     'Content-Type': 'application/json',
//                     'X-CSRF-TOKEN': csrfToken, // Gantilah dengan token CSRF yang sesuai
//                 },
//             });
//             if (response.ok) {
//                 alert(`Member ${nameMember} berhasil dihapus!`);
//                 fetchMemberList(); // Perbarui daftar member setelah penghapusan
//             } else {
//                 alert('Gagal menghapus member.');
//             }
//         } catch (error) {
//             console.error('Error deleting member:', error.message);
//         }
//     }
// }



const alertQueue = [];
let isShowing = false;
const MAX_ALERTS = 0 ;
const alertBox = (message) => {

      if(alertQueue.length >= MAX_ALERTS) {
        alertQueue.shift(); // Hapus notifikasi tertua jika lebih dari MAX_ALERTS
    }
    alertQueue.push(message);
    // Jika sedang menampilkan notifikasi, skip
    if(isShowing) return;
    
    // Proses antrian
    const showNextAlert = () => {
        if(alertQueue.length === 0) {
            isShowing = false;
            return;
        }
        
        // Ambil pesan tertua
        const currentMessage = alertQueue.shift();
        
        // Tampilkan notifikasi
        const alertElement = document.getElementById('alert-box');
        const alertContent = document.getElementById('alert');
        
        alertContent.textContent = currentMessage;
        alertElement.style.top = '20px';
        isShowing = true;
        // Memainkan audio notifikasi  
        const audio = new Audio('/play-alert');  
        audio.play().catch(error => {  
            console.error('Gagal memainkan audio:', error);  
        });  
        // Animasi progress bar
        const progressBar = document.createElement('div');
        progressBar.style.height = '3px';
        progressBar.style.background = '#681034';
        progressBar.style.width = '100%';
        progressBar.style.transition = 'width 3s linear';
        alertElement.appendChild(progressBar);
        
        // Auto-close setelah 3 detik
        setTimeout(() => {
            alertElement.style.top = '-100%';
            progressBar.style.width = '0%';
            
            // Tunggu animasi selesai sebelum tampilkan berikutnya
            setTimeout(() => {
                alertElement.removeChild(progressBar);
                showNextAlert();
            }, 1000);
            
        }, 3000);
    };
    
    showNextAlert();
};

const confirmBox = (message) => {
    return new Promise((resolve) => {
        const alertContainer = document.getElementById('alert-box'); // Ambil elemen alert-box
        const alertMsg = document.getElementById('alert'); // Ambil elemen alert untuk pesan
        

        // Tambahkan pesan konfirmasi
        alertMsg.innerHTML = `
            <p>${message}</p>
            <div class="flex justify-center gap-4 mt-4">
                <button class="confirm-yes bg-green-500 text-white px-4 py-2 rounded">Ya</button>
                <button class="confirm-no bg-red-500 text-white px-4 py-2 rounded">Tidak</button>
            </div>
        `;

        // Tampilkan alert-box
        alertContainer.style.top = '5%';
         // Fungsi untuk menutup alert
         const closeAlert = () => {
            alertContainer.style.top = null;
        };
      
        // Event listener untuk tombol "Ya"
        const confirmYes = alertMsg.querySelector('.confirm-yes');
        confirmYes.onclick = () => {
            closeAlert(); // Sembunyikan alert-box
            setTimeout(() => {
                resolve(true); // Resolusi dengan nilai true setelah jeda
            }, 300); // Jeda 300ms sebelum resolusi
        };

        // Event listener untuk tombol "Tidak"
        const confirmNo = alertMsg.querySelector('.confirm-no');
        confirmNo.onclick = () => {
            closeAlert(); // Sembunyikan alert-box
            resolve(false); // Resolusi dengan nilai false
        };
    });
};

//Mengelola Tab Roles & Users
function showSection(section) {
    const usersSection = document.getElementById('usersSection');
    const rolesSection = document.getElementById('rolesSection');
    const usersTab = document.getElementById('usersTab');
    const rolesTab = document.getElementById('rolesTab');

    if (section === 'users') {
        usersSection.classList.remove('hidden');
        rolesSection.classList.add('hidden');
        usersTab.classList.add('bg-[#F1DEC6]');
        usersTab.classList.remove('bg-white');
        rolesTab.classList.add('bg-white');
        rolesTab.classList.remove('bg-[#F1DEC6]');
    } else if (section === 'roles') {
        usersSection.classList.add('hidden');
        rolesSection.classList.remove('hidden');
        rolesTab.classList.add('bg-[#F1DEC6]');
        rolesTab.classList.remove('bg-white');
        usersTab.classList.add('bg-white');
        usersTab.classList.remove('bg-[#F1DEC6]');
    }
}

// Set default active section
document.addEventListener("DOMContentLoaded", () => {
    showSection('users'); // Default to show users section
});


// console.log('Users:', user);
// const storedUUID = sessionStorage.getItem('uuid');
// console.log('UUID:', storedUUID);
// const userPermissionsString = sessionStorage.getItem('permissions');
//     console.log('User  Permissions:', userPermissionsString);


// Blog Editor
document.addEventListener('DOMContentLoaded', () => {
    // Format dasar
    document.getElementById('bold-btn').addEventListener('click', () => formatText('bold'));
    document.getElementById('italic-btn').addEventListener('click', () => formatText('italic'));
    document.getElementById('underline-btn').addEventListener('click', () => formatText('underline'));
    
    // Heading
    document.getElementById('h1-btn').addEventListener('click', () => formatText('formatBlock', '<h1>'));
    document.getElementById('h2-btn').addEventListener('click', () => formatText('formatBlock', '<h2>'));
    
    // Block elements
    document.getElementById('quote-btn').addEventListener('click', insertQuote);
    document.getElementById('ol-btn').addEventListener('click', () => formatText('insertOrderedList'));
    document.getElementById('ul-btn').addEventListener('click', () => formatText('insertUnorderedList'));
    document.getElementById('code-btn').addEventListener('click', insertCode);
    
    // Alignment
    document.getElementById('left-align-btn').addEventListener('click', () => formatText('justifyLeft'));
    document.getElementById('center-align-btn').addEventListener('click', () => formatText('justifyCenter'));
    document.getElementById('right-align-btn').addEventListener('click', () => formatText('justifyRight'));
    
    // Media
    document.getElementById('link-btn').addEventListener('click', insertLink);
    document.getElementById('image-btn').addEventListener('click', insertImage);
    
    // Save button
    document.getElementById('save-btn').addEventListener('click', saveContent);
});



function formatText(command, value = null) {
    document.execCommand(command, false, value);
    document.getElementById('editor').focus();
}

function insertQuote() {
    const selection = window.getSelection();
    if (selection.rangeCount > 0) {
        const range = selection.getRangeAt(0);
        const quote = document.createElement('blockquote');
        quote.className = 'quote-block';
        quote.innerHTML = range.extractContents().textContent || 'Kutipan';
        range.insertNode(quote);
    }
}

function insertCode() {
    const selection = window.getSelection();
    if (selection.rangeCount > 0) {
        const range = selection.getRangeAt(0);
        const pre = document.createElement('pre');
        const code = document.createElement('code');
        code.className = 'code-block';
        code.innerHTML = range.extractContents().textContent || '// Kode Anda di sini';
        pre.appendChild(code);
        range.insertNode(pre);
    }
}

function insertImage() {
    const url = prompt('Masukkan URL gambar:');
    if (url) {
        document.execCommand('insertImage', false, url);
    }
}

function insertLink() {
    const url = prompt('Masukkan URL:');
    if (url) {
        document.execCommand('createLink', false, url);
    }
}

function saveContent() {
    const content = document.getElementById('editor').innerHTML;
    // Kirim ke server atau simpan ke database
    console.log('Konten yang disimpan:', content);
    alert('Artikel berhasil disimpan!\n\n' + content);
}

// Handle heading levels
document.querySelectorAll('button').forEach(btn => {
    if (btn.textContent === 'H1') {
        btn.addEventListener('click', () => formatText('formatBlock', '<h1>'));
    }
    if (btn.textContent === 'H2') {
        btn.addEventListener('click', () => formatText('formatBlock', '<h2>'));
    }
});
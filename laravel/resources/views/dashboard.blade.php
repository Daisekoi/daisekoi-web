<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Dashboard Daisekoi</title>
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <link rel="stylesheet" href="{{ asset('./laravel/resources/css/app.css') }}">
    <script src="{{ asset('./laravel/resources/js/dashboard.js') }}" defer></script>
    
    <script src=""></script>
    <link
      rel="shortcut icon"
      href="/laravel/public/imgs/DaisekoiLogoBg.png"
      style="border-radius: 100%"
      type="image/jpg"
    />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link
      href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css"
      rel="stylesheet"
    />
    <script src="https://cdn.tailwindcss.com"></script>
  </head>
  <body class="bg-gradient-to-b from-[#E01668] to-[#681034]" id="bodyDashboard">

    <!-- Container Utama -->
    <div class="relative min-h-screen">
      <!-- Background Utama -->
      <div id="mainContainer"
        class="absolute w-full h-[93%] bg-neutral-50 rounded-bl-[50px] rounded-br-[50px]"
      ></div>

      <!-- Konten Wrapper -->
      <div
        class="relative w-full px-8 lg:px-[55px] py-[25px] flex flex-col lg:flex-row gap-[23px]"
      >
       <!-- Tombol untuk membuka sidebar di mobile -->
       <div class="lg:hidden gap-10 p-2  text-black flex justify-start items-center space-x-2">
       <button id="toggleSidebar" class="hover:bg-transparent active:bg-[#f4a3ba] rounded-1 p-2">
        <svg stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5">
            <path d="M3 5H21" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
            <path d="M3 12H16" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
            <path d="M3 19H21" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
        </svg>
        
    </button>
  
       </div>
       
        <!-- Sidebar -->
        <div id="sidebar" class="lg:w-max bg-gradient-to-b from-[#a3ddee] to-[#B1F0F7] rounded p-4 lg:p-[15px] flex flex-col gap-4 justify-between transition-transform transform -translate-x-full lg:translate-x-0 fixed inset-y-0 left-0 z-40 lg:relative">
        <div class="lg:hidden flex justify-between items-center sm:gap-10 lg:gap-0 bg-[#f4a3ba] p-3 rounded" >
            <div class="bg-center bg-cover max-w-[86px] max-h-[53px] w-[17vw] h-[10.5vw]" style="background-image: url('/laravel/public/imgs/LogoDaisekoi.png');"></div>
            <div id="userContainerMobile" class="flex flex-col gap-4 max-h-[53px]"></div>
        </div>
        <!-- Logo dan User Info -->
        <div class="sm:hidden lg:flex justify-between items-center sm:gap-15 lg:gap-20 p-2">
                <div class="bg-center bg-cover max-w-[86px] max-h-[53px] w-[17vw] h-[10.5vw] hidden lg:flex" style="background-image: url('/laravel/public/imgs/LogoDaisekoi.png');"></div>
                <div id="userContainer" class="flex flex-col gap-4 hidden lg:flex"></div>
            </div>
            <!-- Navigasi -->
            <div class="flex flex-col gap-3 w-auto">
                <a id="home" class="nav-link flex items-center px-4 py-3 rounded-md text-gray-700 text-xl font-semibold lg:hover:bg-[#f4a3ba]/50 ">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M4 19v-9q0-.475.213-.9t.587-.7l6-4.5q.525-.4 1.2-.4t1.2.4l6 4.5q.375.275.588.7T20 10v9q0 .825-.588 1.413T18 21h-3q-.425 0-.712-.288T14 20v-5q0-.425-.288-.712T13 14h-2q-.425 0-.712.288T10 15v5q0 .425-.288.713T9 21H6q-.825 0-1.412-.587T4 19"/></svg>
                    <span class="ml-3">Home</span>
                </a>
                <a
                 id="users" data-permission="viewUsers"
                class="nav-link flex items-center px-4 py-3 rounded-md text-gray-700 text-xl w-auto font-semibold lg:hover:bg-[#f4a3ba]/50 ">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><circle cx="12" cy="6" r="4" fill="currentColor"/><path fill="currentColor" d="M20 17.5c0 2.485 0 4.5-8 4.5s-8-2.015-8-4.5S7.582 13 12 13s8 2.015 8 4.5"/></svg>
                <span class="ml-3">Users Setup</span>
              </a>
              
              <a
                 id="events" data-permission="viewEvents"
                class="nav-link flex items-center px-4 py-3 rounded-md text-gray-700 text-xl w-auto font-semibold lg:hover:bg-[#f4a3ba]/50 ">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M19 4h-4.18a3 3 0 0 0-5.64 0H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2m-7 0a1 1 0 1 1-1 1a1 1 0 0 1 1-1m7 15H5v-4h14Zm0-6H5V9h14Z"/><circle cx="17" cy="11" r="1" fill="currentColor"/><circle cx="14" cy="11" r="1" fill="currentColor"/><circle cx="14" cy="17" r="1" fill="currentColor"/><circle cx="17" cy="17" r="1" fill="currentColor"/><path fill="currentColor" d="M6 10h5v2H6zm0 6h5v2H6z"/></svg>
                <span class="ml-3">Event Setting</span>
              </a>  
              
              <a
                 id="Gallery" data-permission="viewGallery"
                class="nav-link flex items-center px-4 py-3 rounded-md text-gray-700 text-xl w-auto font-semibold lg:hover:bg-[#f4a3ba]/50 ">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M18 8a2 2 0 1 1-4 0a2 2 0 0 1 4 0"/><path fill="currentColor" fill-rule="evenodd" d="M11.943 1.25h.114c2.309 0 4.118 0 5.53.19c1.444.194 2.584.6 3.479 1.494c.895.895 1.3 2.035 1.494 3.48c.19 1.411.19 3.22.19 5.529v.088c0 1.909 0 3.471-.104 4.743c-.104 1.28-.317 2.347-.795 3.235q-.314.586-.785 1.057c-.895.895-2.035 1.3-3.48 1.494c-1.411.19-3.22.19-5.529.19h-.114c-2.309 0-4.118 0-5.53-.19c-1.444-.194-2.584-.6-3.479-1.494c-.793-.793-1.203-1.78-1.42-3.006c-.215-1.203-.254-2.7-.262-4.558Q1.25 12.792 1.25 12v-.058c0-2.309 0-4.118.19-5.53c.194-1.444.6-2.584 1.494-3.479c.895-.895 2.035-1.3 3.48-1.494c1.411-.19 3.22-.19 5.529-.19m-5.33 1.676c-1.278.172-2.049.5-2.618 1.069c-.57.57-.897 1.34-1.069 2.619c-.174 1.3-.176 3.008-.176 5.386v.844l1.001-.876a2.3 2.3 0 0 1 3.141.104l4.29 4.29a2 2 0 0 0 2.564.222l.298-.21a3 3 0 0 1 3.732.225l2.83 2.547c.286-.598.455-1.384.545-2.493c.098-1.205.099-2.707.099-4.653c0-2.378-.002-4.086-.176-5.386c-.172-1.279-.5-2.05-1.069-2.62c-.57-.569-1.34-.896-2.619-1.068c-1.3-.174-3.008-.176-5.386-.176s-4.086.002-5.386.176" clip-rule="evenodd"/></svg>
                <span class="ml-3">Gallery Setting</span>
              </a>
              
              <a
                 id="blogs" data-permission="viewBlog" 
                class="nav-link flex items-center px-4 py-3 rounded-md text-gray-700 text-xl w-auto font-semibold lg:hover:bg-[#f4a3ba]/50 ">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M3 3v18h18V3zm15 15H6v-1h12zm0-2H6v-1h12zm0-4H6V6h12z"/></svg>
                <span class="ml-3">Blog</span>
              </a>
              
                <a
                 id="profile" data-permission="viewProfile"
                class="nav-link flex items-center px-4 py-3  rounded-md text-gray-700 text-xl font-semibold lg:hover:bg-[#f4a3ba]/50 ">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" fill-rule="evenodd" d="M12 4a8 8 0 0 0-6.96 11.947A4.99 4.99 0 0 1 9 14h6a4.99 4.99 0 0 1 3.96 1.947A8 8 0 0 0 12 4m7.943 14.076q.188-.245.36-.502A9.96 9.96 0 0 0 22 12c0-5.523-4.477-10-10-10S2 6.477 2 12a9.96 9.96 0 0 0 2.057 6.076l-.005.018l.355.413A9.98 9.98 0 0 0 12 22q.324 0 .644-.02a9.95 9.95 0 0 0 5.031-1.745a10 10 0 0 0 1.918-1.728l.355-.413zM12 6a3 3 0 1 0 0 6a3 3 0 0 0 0-6" clip-rule="evenodd"/></svg>
                <span class="ml-3">Profil</span>
              </a>
                <!-- Tambahkan link navigasi lainnya di sini -->
            </div>
    
            <!-- Footer/Extra Space -->
            <div id="logout" class="flex justify-content-end items-center">
                <div  class=" cursor-pointer hover:bg-transparent active:bg-[#f4a3ba] lg:hover:bg-[#f4a3ba] p-2 rounded gap-2">
                <svg 
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="24"
                    viewBox="0 0 25 24"
                    fill="none"
                >
                    <path
                        d="M5.5 21C4.95 21 4.47933 20.8043 4.088 20.413C3.69667 20.0217 3.50067 19.5507 3.5 19V5C3.5 4.45 3.696 3.97933 4.088 3.588C4.48 3.19667 4.95067 3.00067 5.5 3H11.5C11.7833 3 12.021 3.096 12.213 3.288C12.405 3.48 12.5007 3.71733 12.5 4C12.4993 4.28267 12.4033 4.52033 12.212 4.713C12.0207 4.90567 11.7833 5.00133 11.5 5H5.5V19H11.5C11.7833 19 12.021 19.096 12.213 19.288C12.405 19.48 12.5007 19.7173 12.5 20C12.4993 20.2827 12.4033 20.5203 12.212 20.713C12.0207 20.9057 11.7833 21.0013 11.5 21H5.5ZM17.675 13H10.5C10.2167 13 9.97933 12.904 9.788 12.712C9.59667 12.52 9.50067 12.2827 9.5 12C9.49933 11.7173 9.59533 11.48 9.788 11.288C9.98067 11.096 10.218 11 10.5 11H17.675L15.8 9.125C15.6167 8.94167 15.525 8.71667 15.525 8.45C15.525 8.18333 15.6167 7.95 15.8 7.75C15.9833 7.55 16.2167 7.44567 16.5 7.437C16.7833 7.42833 17.025 7.52433 17.225 7.725L20.8 11.3C21 11.5 21.1 11.7333 21.1 12C21.1 12.2667 21 12.5 20.8 12.7L17.225 16.275C17.025 16.475 16.7877 16.571 16.513 16.563C16.2383 16.555 16.0007 16.4507 15.8 16.25C15.6167 16.05 15.5293 15.8127 15.538 15.538C15.5467 15.2633 15.6423 15.034 15.825 14.85L17.675 13Z"
                        fill="black"
                    />
                </svg>
                </div>
                
                <div>
                
                </div>
            </div>
        </div>

        <!-- Main Content -->
        <div class="flex-1 bg-[#a3ddee] max-h-[615px] rounded shadow-md p-6 overflow-x-hidden lg:p-8" id="mainContent">
        <div id="alert-box" class="absolute top-[-100%] left-1/2 transform -translate-x-1/2 min-w-[150px] max-w-[90%] w-auto h-auto p-2 text-center bg-gradient-to-b from-[#2992C5] to-[#2277A0] rounded-lg text-[#505050] font-roboto transition-all duration-1000 z-[40000]">
    <p id="alert" class="font-bold text-white break-words capitalize p-6"></p>
    
</div>

            <div id="homeContent" class="content-section">
                <div class=" flex justify-start items-start">
                    <div class="justify-start items-center gap-2.5 inline-flex">
                        <div id="greetingMessage" class="text-black text-2xl font-normal font-['Inter'] text-wrap"></div>
                    </div>
                </div>
                
                <div class="flex flex-column flex-wrap flex-row-reverse align-items-end relative w-full h-auto bg-[#F1DEC6] border border-black border-2 rounded rounded-2 pt-4 overflow-y-auto overflow-hidden">
                <div class="h-6 justify-start items-end gap-2.5 inline-flex mr-4" >
                 
                
                <div class="w-6 h-6 relative cursor-pointer hover:bg-transparent active:bg-[#f4a3ba] lg:hover:bg-[#f4a3ba] rounded" id="refreshBtnRegisterMemb">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M12 20q-3.35 0-5.675-2.325T4 12t2.325-5.675T12 4q1.725 0 3.3.712T18 6.75V5q0-.425.288-.712T19 4t.713.288T20 5v5q0 .425-.288.713T19 11h-5q-.425 0-.712-.288T13 10t.288-.712T14 9h3.2q-.8-1.4-2.187-2.2T12 6Q9.5 6 7.75 7.75T6 12t1.75 4.25T12 18q1.7 0 3.113-.862t2.187-2.313q.2-.35.563-.487t.737-.013q.4.125.575.525t-.025.75q-1.025 2-2.925 3.2T12 20"/></svg>
                </div>
                    
                    
                </div>
                <div class="w-full max-h-[350px] overflow-y-auto overflow-x-auto mt-4">
                 
                
             <table id="registerMemberList" class="min-w-full table-auto border-collapse">
             
                    <thead>
                      <tr>
                      
                        <th class="text-left px-4 py-2 text-wrap">Nama Event</th>
                        <th class="text-left px-4 py-2 text-wrap">Harga Tiket</th>
                        <th class="text-left px-4 py-2 text-wrap">Event Start</th>
                        <th class="text-left px-4 py-2 text-wrap">Event End</th>
                        <th class="text-left px-4 py-2 text-wrap">Location</th>
                        <th class="text-left px-4 py-2 text-wrap">Keterangan</th>
                        <th class="text-left px-4 py-2 text-wrap">Poster Event</th>
                        <th class="text-left px-4 py-2 text-wrap text-center">Aksi</th>
                      </th>
                      </tr>
                    </thead>
                    <tbody>
                      <!-- Data pengguna akan diisi di sini -->
                    </tbody>
                  </table>
              
            </div>
            
    
            </div>
            </div>
            <div id="profileContent" class="flex flex-col content-section hidden">
                <h2 class="text-black text-2xl">Profil Pengguna</h2>
                <p>Ini adalah konten profil pengguna.</p>
                <div id="userProfiles" class="flex flex-col"></div>
                <div id="kaka" class="flex flex-col"></div>
                
            </div>
            
            
<div id="usersContent" class="flex flex-col content-section hidden gap-3">
    <h2 class="text-black text-2xl font-semibold">Users Setup</h2>
    <div id="editAddUsers" class="hidden fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
    <div class="bg-white rounded-lg shadow-lg p-6 w-full max-w-md mx-4">
        <form id="userForm">
            <input type="hidden" id="userUUID" disabled>
            <div class="mb-4">
                <label for="username" class="block text-sm font-medium text-gray-700">Username</label>
                <input type="text" id="username" name="username" class="w-full h-12 px-6 lg:h-14  mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" required>
            </div>
            <div class="mb-4">
                <label for="name" class="block text-sm font-medium text-gray-700">Name</label>
                <input type="text" id="name" name="name" class="w-full h-12 px-6 lg:h-14 mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" required>
            </div>
            <div class="mb-4">
                <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
                <input type="email" id="email" name="email" class="w-full h-12 px-6 lg:h-14 mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" required>
            </div>
            <div class="mb-4">
                <label for="role" class="block text-sm font-medium text-gray-700">Role</label>
                <input type="text" id="role" name="role" class="w-full h-12 px-6 lg:h-14 mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" required>
            </div>
            <div class="mb-4">
                <label for="level" class="block text-sm font-medium text-gray-700">Level</label>
                <select id="level" name="level" class="w-full h-12 px-6 lg:h-14 mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm cursor-pointer" required>
                    <!-- Options akan diisi oleh JavaScript -->
                </select>
            </div>
            <div class="flex justify-end space-x-4">
                <button type="button" id="cancelUser" class="bg-gray-500 text-white px-4 py-2 rounded-md">Cancel</button>
                <button type="submit" id="saveUser" class="bg-indigo-600 text-white px-4 py-2 rounded-md">Save</button>
            </div>
        </form>
    </div>
</div>
    <!-- Tab Navigasi untuk Users dan Roles -->
    <div class="flex space-x-4 mb-4">
        <div id="usersTab" class="cursor-pointer bg-[#F1DEC6] rounded-lg p-2 text-center" onclick="showSection('users')">
            Users
        </div>
        <div id="rolesTab" class="cursor-pointer bg-white rounded-lg p-2 text-center" onclick="showSection('roles')">
            Roles
        </div>
    </div>
    
            <div class="flex flex-column flex-wrap flex-row-reverse align-items-end relative w-full h-auto bg-[#F1DEC6] border border-black border-2 rounded-2 pt-4 overflow-hidden" id="usersSection">
                <div class="h-6 justify-start items-end gap-2.5 inline-flex mr-4" >
                  <div class="w-6 h-6 relative cursor-pointer hover:bg-transparent active:bg-[#f4a3ba] lg:hover:bg-[#f4a3ba] rounded" id="addUsers">
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
                        <path d="M19.5 12.998H13.5V18.998H11.5V12.998H5.5V10.998H11.5V4.998H13.5V10.998H19.5V12.998Z" fill="black"/>
                      </svg>
                </div>
                
                <div class="w-6 h-6 relative cursor-pointer hover:bg-transparent active:bg-[#f4a3ba] lg:hover:bg-[#f4a3ba] rounded" id="refreshUsers">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M12 20q-3.35 0-5.675-2.325T4 12t2.325-5.675T12 4q1.725 0 3.3.712T18 6.75V5q0-.425.288-.712T19 4t.713.288T20 5v5q0 .425-.288.713T19 11h-5q-.425 0-.712-.288T13 10t.288-.712T14 9h3.2q-.8-1.4-2.187-2.2T12 6Q9.5 6 7.75 7.75T6 12t1.75 4.25T12 18q1.7 0 3.113-.862t2.187-2.313q.2-.35.563-.487t.737-.013q.4.125.575.525t-.025.75q-1.025 2-2.925 3.2T12 20"/></svg>
                </div>
                    
                    
                </div>
                <div class="w-full max-h-[350px] overflow-y-auto overflow-x-auto mt-4">
                 
                
             <table id="userList" class="min-w-full table-auto border-collapse">
             
                    <thead>
                      <tr>
                      
                        <th class="text-left px-4 py-2 text-wrap">Username</th>
                        <th class="text-left px-4 py-2 text-wrap">Nama</th>
                        <th class="text-left px-4 py-2 text-wrap">Email</th>
                        <th class="text-left px-4 py-2 text-wrap">Role</th>
                        <th class="text-left px-4 py-2 text-wrap text-center">Aksi</th>
                      </th>
                      </tr>
                    </thead>
                    <tbody>
                      <!-- Data pengguna akan diisi di sini -->
                    </tbody>
                  </table>
              
            </div>
            
    
            </div>
            
           
            
            <div class="flex flex-column align-items-end relative w-full h-auto bg-[#F1DEC6] border border-black border-2 rounded rounded-2 py-4 overflow-hidden hidden"  id="rolesSection">
                <div class="h-6 justify-start items-end gap-2.5 inline-flex p-4" >
                  <div class="w-6 h-6 relative cursor-pointer hover:bg-transparent active:bg-[#f4a3ba] lg:hover:bg-[#f4a3ba] rounded" id="addRoles">
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
                        <path d="M19.5 12.998H13.5V18.998H11.5V12.998H5.5V10.998H11.5V4.998H13.5V10.998H19.5V12.998Z" fill="black"/>
                      </svg>
                </div>
                
                <div class="w-6 h-6 relative cursor-pointer hover:bg-transparent active:bg-[#f4a3ba] lg:hover:bg-[#f4a3ba] rounded" id="refreshRoles">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M12 20q-3.35 0-5.675-2.325T4 12t2.325-5.675T12 4q1.725 0 3.3.712T18 6.75V5q0-.425.288-.712T19 4t.713.288T20 5v5q0 .425-.288.713T19 11h-5q-.425 0-.712-.288T13 10t.288-.712T14 9h3.2q-.8-1.4-2.187-2.2T12 6Q9.5 6 7.75 7.75T6 12t1.75 4.25T12 18q1.7 0 3.113-.862t2.187-2.313q.2-.35.563-.487t.737-.013q.4.125.575.525t-.025.75q-1.025 2-2.925 3.2T12 20"/></svg>
                </div>
                    
                    
                </div>
                <div class="w-full max-h-[350px] overflow-y-auto overflow-x-auto">
                 
                
             <table id="roleList" class="min-w-full table-auto border-collapse">
             
             <thead>
            <tr>
                <th class="px-4 py-2">Level</th>
                <th class="px-4 py-2">Permissions</th>
                <th class="px-4 py-2">Actions</th>
            </tr>
        </thead>
                    <tbody>
                      <!-- Data pengguna akan diisi di sini -->
                    </tbody>
                  </table>
              
            </div>
            
    
            </div>
            </div>
            
            
            <div id="blogsContent" class="flex flex-col content-section hidden gap-3"> 
            <h2 class="text-black text-2xl font-semibold">Blog Editor</h2>
            <div class="max-w-3xl mx-auto my-8 p-4">
        <!-- Toolbar -->
        <div class="flex gap-2 p-3 bg-gray-100 rounded-t-lg flex-wrap">
            <button id="bold-btn"  class="px-3 py-1.5 border bg-white rounded hover:bg-gray-50 transition-colors">
                <strong class="font-bold">B</strong>
            </button>
            <button id="italic-btn"  class="px-3 py-1.5 border bg-white rounded hover:bg-gray-50">
                <em class="italic">I</em>
            </button>
            <button id="underline-btn" class="px-3 py-1.5 border bg-white rounded hover:bg-gray-50">
                <u class="underline">U</u>
            </button>
            <button id="h1-btn"  class="px-3 py-1.5 border bg-white rounded hover:bg-gray-50">H1</button>
            <button id="h2-btn" class="px-3 py-1.5 border bg-white rounded hover:bg-gray-50">H2</button>
            <button id="quote-btn" class="px-3 py-1.5 border bg-white rounded hover:bg-gray-50">❝</button>
            <button id="ol-btn" class="px-3 py-1.5 border bg-white rounded hover:bg-gray-50">OL</button>
            <button id="ul-btn"  class="px-3 py-1.5 border bg-white rounded hover:bg-gray-50">UL</button>
            <button id="link-btn" class="px-3 py-1.5 border bg-white rounded hover:bg-gray-50">🔗</button>
            <button id="image-btn" class="px-3 py-1.5 border bg-white rounded hover:bg-gray-50">🖼️</button>
            <button id="left-align-btn" class="px-3 py-1.5 border bg-white rounded hover:bg-gray-50">←</button>
            <button id="center-align-btn" class="px-3 py-1.5 border bg-white rounded hover:bg-gray-50">↔</button>
            <button id="right-align-btn" class="px-3 py-1.5 border bg-white rounded hover:bg-gray-50">→</button>
            <button id="code-btn" class="px-3 py-1.5 border bg-white rounded hover:bg-gray-50">{ }</button>
        </div>

        <!-- Editor Content -->
        <div 
            class="min-h-[500px] p-6 border border-gray-300 rounded-b-lg bg-white focus:border-gray-400 outline-none" 
            contenteditable="true" 
            id="editor"
            data-placeholder="Mulai menulis artikel Anda di sini..."
        ></div>

        <!-- Save Button -->
        <div class="mt-6">
            <button 
                  id="save-btn"
                class="px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors duration-200"
            >
                Simpan Artikel
            </button>
        </div>
    </div>
    
   
            </div>
            <div id="eventsContent" class="flex flex-col content-section hidden gap-3">
    <h2 class="text-black text-2xl font-semibold">Events Settings</h2>
    <div id="editAddEvents" class="hidden fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
    <div class="bg-white rounded-lg shadow-lg p-6 w-full max-w-md mx-4">
        <form id="eventForm" class="w-full max-h-[450px] overflow-y-auto overflow-x-auto">
            <input type="hidden" id="idEvent" disabled>
            <div class="mb-4">
                <label for="nameEvents" class="block text-sm font-medium text-gray-700">Event Name</label>
                <input type="text" id="nameEvents" name="nameEvents" class="w-full h-12 px-6 lg:h-14  mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" required>
            </div> 
            <div class="mb-4">  
                <label for="KetEvents" class="block text-sm font-medium text-gray-700">Keterangan</label>  
                <textarea id="KetEvents" name="KetEvents" rows="4" class="w-full px-2 leading-6 text-base resize-none py-2 mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"></textarea>  
            </div>  
            <div class="mb-4">
                <label for="hargaTiket" class="block text-sm font-medium text-gray-700">Harga Tiket</label>
                <input type="number" id="hargaTiket" name="hargaTiket" class="w-full h-12 px-6 lg:h-14  mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
            </div>
              <!-- Start Date and Time -->
    <div class="mb-4">
        <label class="block text-sm font-medium text-gray-700">Start Date and Time</label>
        <div class="flex gap-4">
            <input type="date" id="startDate" class="w-full h-12 px-6 lg:h-14 mt-1 block border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" required>
            <input type="time" id="startTime" class="w-full h-12 px-6 lg:h-14 mt-1 block border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
        </div>
    </div>

    <!-- End Date and Time -->
    <div class="mb-4">
        <label class="block text-sm font-medium text-gray-700">End Date and Time</label>
        <div class="flex gap-4">
            <input type="date" id="endDate" class="w-full h-12 px-6 lg:h-14 mt-1 block border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" >
            <input type="time" id="endTime" class="w-full h-12 px-6 lg:h-14 mt-1 block border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
        </div>
    </div>
            <div class="mb-4">
                <label for="location" class="block text-sm font-medium text-gray-700">Location</label>
                <input type="text" id="location" name="location" class="w-full h-12 px-6 lg:h-14 mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" required>
            </div>
            <div class="mb-4">
                <label for="poster" class="block text-sm font-medium text-gray-700">URL Poster</label>
                <input type="url" id="poster" name="poster" class="w-full h-12 px-6 lg:h-14 mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
            </div>
            
            <div class="flex justify-end space-x-4">
                <button type="button" id="cancelEvent" class="bg-gray-500 text-white px-4 py-2 rounded-md">Cancel</button>
                <button type="submit" id="saveEvent" class="bg-indigo-600 text-white px-4 py-2 rounded-md">Save</button>
            </div>
        </form>
    </div>
</div>
            <div class="flex flex-column flex-wrap flex-row-reverse align-items-end relative w-full h-auto bg-[#F1DEC6] border border-black border-2 rounded rounded-2 pt-4 overflow-y-auto overflow-hidden">
                <div class="h-6 justify-start items-end gap-2.5 inline-flex mr-4" >
                  <div class="w-6 h-6 relative cursor-pointer hover:bg-transparent active:bg-[#f4a3ba] lg:hover:bg-[#f4a3ba] rounded" id="addEvents">
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
                        <path d="M19.5 12.998H13.5V18.998H11.5V12.998H5.5V10.998H11.5V4.998H13.5V10.998H19.5V12.998Z" fill="black"/>
                      </svg>
                </div>
                
                <div class="w-6 h-6 relative cursor-pointer hover:bg-transparent active:bg-[#f4a3ba] lg:hover:bg-[#f4a3ba] rounded" id="refreshBtnEvents">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M12 20q-3.35 0-5.675-2.325T4 12t2.325-5.675T12 4q1.725 0 3.3.712T18 6.75V5q0-.425.288-.712T19 4t.713.288T20 5v5q0 .425-.288.713T19 11h-5q-.425 0-.712-.288T13 10t.288-.712T14 9h3.2q-.8-1.4-2.187-2.2T12 6Q9.5 6 7.75 7.75T6 12t1.75 4.25T12 18q1.7 0 3.113-.862t2.187-2.313q.2-.35.563-.487t.737-.013q.4.125.575.525t-.025.75q-1.025 2-2.925 3.2T12 20"/></svg>
                </div>
                    
                    
                </div>
                <div class="w-full max-h-[350px] overflow-y-auto overflow-x-auto mt-4">
                 
                
             <table id="eventList" class="min-w-full table-auto border-collapse">
             
                    <thead>
                      <tr>
                      
                        <th class="text-left px-4 py-2 text-wrap">Nama Event</th>
                        <th class="text-left px-4 py-2 text-wrap">Harga Tiket</th>
                        <th class="text-left px-4 py-2 text-wrap">Event Start</th>
                        <th class="text-left px-4 py-2 text-wrap">Event End</th>
                        <th class="text-left px-4 py-2 text-wrap">Location</th>
                        <th class="text-left px-4 py-2 text-wrap">Keterangan</th>
                        <th class="text-left px-4 py-2 text-wrap">Poster Event</th>
                        <th class="text-left px-4 py-2 text-wrap text-center">Aksi</th>
                      </th>
                      </tr>
                    </thead>
                    <tbody>
                      <!-- Data pengguna akan diisi di sini -->
                    </tbody>
                  </table>
              
            </div>
            
    
            </div>
            </div>
            
            
            <div id="galleryContent" class="flex flex-col content-section hidden gap-3">
            <h2 class="text-black text-2xl font-semibold">Gallery Settings</h2>
            </div>
            
            <!-- End Main Content -->
        </div>
        <footer class="footer fixed bottom-0 w-full h-[55px] py-[10px] ">
    <div class="justify-between flex-1 container flex flex-nowrap flex-row justify-items-center p-1 min-h-[calc(1vh_-_1px)]">
           
            <p class="text-white text-sm text-center break-words">Website created by <a class="text-[#0091c2] hover:text-[#00c0fa]" href="/">Daisekoi Team</a></p>
            <p class="text-white font-extrabold text-sm text-center break-words ">Dashboard</p>
        </div>
    </footer>
        <!-- End Konten Wrapper -->
      </div>
      
      
       <!-- End Container Utama -->
    </div>
    
    
    
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
  </body>
</html>

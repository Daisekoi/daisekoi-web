<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Daisekoi | Wujudkan Kreatifitasmu</title>
    <link rel="shortcut icon" href="laravel/public/imgs/DaisekoiLogoBg.png" style="border-radius: 100%;" type="image/jpg">
    <link rel="stylesheet" href="{{ asset('laravel/resources/css/styleIndexMobile.css') }}" defer>
    <link rel="stylesheet" href="{{ asset('laravel/resources/css/styleIndex.css') }}" defer>
    <script src="{{ asset('laravel/resources/js/index.js') }}" defer></script>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'>
    <script src="https://cdn.tailwindcss.com"></script>  
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Noto+Sans:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet">
</head>
<body>
    <div class="btnDarkmode-container">
        <button class="btn-mode"> 
        <svg class="dark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 57 57" fill="none">
            <path d="M37.6295 7.94201L34.238 9.79688L37.6295 11.6518L39.4844 15.0433L41.3393 11.6518L44.7307 9.79688L41.3393 7.94201L39.4844 4.55051L37.6295 7.94201ZM24.7285 9.87526C21.618 10.5064 18.7151 11.9067 16.285 13.9483C13.8549 15.9899 11.9749 18.6077 10.8168 21.5628C9.65863 24.5178 9.25921 27.7159 9.65498 30.865C10.0508 34.0142 11.2291 37.014 13.0824 39.5905C14.9358 42.1671 17.4051 44.2384 20.2648 45.6151C23.1245 46.9919 26.2836 47.6304 29.4536 47.4722C32.6235 47.314 35.7033 46.3643 38.4118 44.7097C41.1203 43.055 43.3711 40.7483 44.9588 38C39.3186 37.9561 33.9244 35.6848 29.9517 31.6809C25.979 27.6771 23.7498 22.2653 23.75 16.625C23.75 14.2975 24.0611 12.0246 24.7285 9.87526ZM4.75 28.5C4.75 15.3829 15.3829 4.75001 28.5 4.75001H32.6183L30.5568 8.31251C29.1816 10.6875 28.5 13.5138 28.5 16.625C28.4996 19.0798 29.0429 21.5043 30.0908 23.7242C31.1388 25.9442 32.6653 27.9045 34.5608 29.4644C36.4563 31.0243 38.6737 32.1451 41.0538 32.7462C43.4339 33.3474 45.9176 33.414 48.3265 32.9413L52.3213 32.1646L51.0316 36.0264C47.8847 45.4504 38.9904 52.25 28.5 52.25C15.3829 52.25 4.75 41.6171 4.75 28.5ZM48.6875 15.238L50.8582 19.2043L54.8245 21.375L50.8582 23.5458L48.6875 27.512L46.5168 23.5458L42.5505 21.375L46.5168 19.2043L48.6875 15.238Z" fill="#4F4F4F"/>
          </svg>
          <svg class="light" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 57 57" fill="none">
            <path d="M28.5 38C33.7467 38 38 33.7467 38 28.5C38 23.2533 33.7467 19 28.5 19C23.2533 19 19 23.2533 19 28.5C19 33.7467 23.2533 38 28.5 38Z" stroke="#fff" stroke-width="2" stroke-linejoin="round"/>
            <path d="M47.5 28.5H49.875M7.125 28.5H9.5M28.5 47.5V49.875M28.5 7.125V9.5M41.9354 41.9354L43.6145 43.6145M13.3855 13.3855L15.0646 15.0646M15.0646 41.9354L13.3855 43.6145M43.6145 13.3855L41.9354 15.0646" stroke="#fffF" stroke-width="2" stroke-linecap="round"/>
          </svg>
          </button>
    </div> 
    <div class="Dashboard-container"  id="dashboard">
        <button class="btn-mode"> 
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" fill-rule="evenodd" d="M14.208 4.83q.68.21 1.3.54l1.833-1.1a1 1 0 0 1 1.221.15l1.018 1.018a1 1 0 0 1 .15 1.221l-1.1 1.833q.33.62.54 1.3l2.073.519a1 1 0 0 1 .757.97v1.438a1 1 0 0 1-.757.97l-2.073.519q-.21.68-.54 1.3l1.1 1.833a1 1 0 0 1-.15 1.221l-1.018 1.018a1 1 0 0 1-1.221.15l-1.833-1.1q-.62.33-1.3.54l-.519 2.073a1 1 0 0 1-.97.757h-1.438a1 1 0 0 1-.97-.757l-.519-2.073a7.5 7.5 0 0 1-1.3-.54l-1.833 1.1a1 1 0 0 1-1.221-.15L4.42 18.562a1 1 0 0 1-.15-1.221l1.1-1.833a7.5 7.5 0 0 1-.54-1.3l-2.073-.519A1 1 0 0 1 2 12.72v-1.438a1 1 0 0 1 .757-.97l2.073-.519q.21-.68.54-1.3L4.27 6.66a1 1 0 0 1 .15-1.221L5.438 4.42a1 1 0 0 1 1.221-.15l1.833 1.1q.62-.33 1.3-.54l.519-2.073A1 1 0 0 1 11.28 2h1.438a1 1 0 0 1 .97.757zM12 16a4 4 0 1 0 0-8a4 4 0 0 0 0 8"/></svg>  
          </button>
    </div>
    
    
    <!-- Modal (Initially hidden) -->
    <div id="galleryModal" class="fixed inset-0 bg-gray-500 bg-opacity-75 flex justify-center items-center hidden">
        <div class="modalContent p-6 rounded-lg shadow-lg max-w-lg w-full">
            <!-- Close Button -->
            <button class="closeModal absolute top-4 right-4 p-2 rounded-full bg-gray-200 hover:bg-gray-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M6 18L18 6M6 6l12 12"></path>
                </svg>
            </button>
    
            <!-- Modal Content -->
            <div class="galleryContent">
                <img id="modalImage" class="w-full h-auto object-cover mb-4 rounded" src="" alt="Gallery Image">
                <h1 id="modalTitle" class="text-2xl font-bold mb-2"></h1>
                <p id="modalDescription" class="text-sm text-gray-700 mb-4 dark:text-gray-700"></p>
                <span id="modalId" class="text-sm text-gray-500"></span>
            </div>
        </div>
    </div>
    <nav class="navbar desktop justify flex items-center gap-[156px] p-[22px_398x] sticky top-0 z-50 transition-all duration-300 ease-in-out hidden lg:flex max-w-screen-lg mx-auto rounded-1" id="navbar-desktop">
        <!-- Link Galeri -->
        <a class="navlink text-gray-800 text-center font-bold text-sm transition-colors duration-300 ease-in-out hover:text-blue-500 hover:pt-2" href="/gallery">Galeri</a>
        
        <!-- Link Pendaftaran -->
        <a class="navlink text-gray-800 text-center font-bold text-sm transition-colors duration-300 ease-in-out hover:text-blue-500 hover:pt-2" href="/daftar">Pendaftaran</a>
        
        <!-- Logo -->
        <a class="logoNav bg-[url('laravel/public/imgs/LogoDaisekoi.png')] bg-center bg-cover w-[117px] h-[72.668px] flex-shrink-0 relative transform transition-all hover:translate-y-[5%]" href="/"></a>
        
        <!-- Link Portfolio -->
        <a class="navlink text-gray-800 text-center font-bold text-sm transition-colors duration-300 ease-in-out hover:text-blue-500 hover:pt-2" href="/portfolio">Portfolio</a>
        
        <!-- Link Shop -->
        <a class="navlink text-gray-800 text-center font-bold text-sm transition-colors duration-300 ease-in-out hover:text-blue-500 hover:pt-2" href="/dai-shop">Shop</a>
    </nav>
    
    
    <nav class="navbar mobile flex flex-col justify-center items-center w-full p-4 sticky-lg-top top-0 z-2000 lg:hidden" id="navbar-mobile">
        <div class="flex w-full justify-between items-center">
            <!-- Logo -->
            <a class="logoNav bg-[url('laravel/public/imgs/LogoDaisekoi.png')] bg-center bg-cover max-w-md max-h-md md:max-w-lg md:max-h-lg lg:max-w-xl lg:max-h-xl xl:max-w-2xl xl:max-h-2xl w-[17vw] h-[10.5vw]" href="/"></a>
            <!-- Tombol Menu (Hamburger) -->
            <!-- <button id="menu-toggle" class="menu-toggle flex justify-center items-center p-2">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 13 11" fill="none">
                    <path d="M0 1.27744C0 1.06746 0.0856023 0.866084 0.237976 0.717606C0.390349 0.569128 0.597012 0.485714 0.8125 0.485714H12.1875C12.403 0.485714 12.6097 0.569128 12.762 0.717606C12.9144 0.866084 13 1.06746 13 1.27744C13 1.48742 12.9144 1.6888 12.762 1.83728C12.6097 1.98576 12.403 2.06917 12.1875 2.06917H0.8125C0.597012 2.06917 0.390349 1.98576 0.237976 1.83728C0.0856023 1.6888 0 1.48742 0 1.27744ZM0 5.5C0 5.29002 0.0856023 5.08864 0.237976 4.94016C0.390349 4.79168 0.597012 4.70827 0.8125 4.70827H12.1875C12.403 4.70827 12.6097 4.79168 12.762 4.94016C12.9144 5.08864 13 5.29002 13 5.5C13 5.70998 12.9144 5.91136 12.762 6.05984C12.6097 6.20831 12.403 6.29173 12.1875 6.29173H0.8125C0.597012 6.29173 0.390349 6.20831 0.237976 6.05984C0.0856023 5.91136 0 5.70998 0 5.5ZM0 9.72256C0 9.51258 0.0856023 9.3112 0.237976 9.16272C0.390349 9.01424 0.597012 8.93083 0.8125 8.93083H12.1875C12.403 8.93083 12.6097 9.01424 12.762 9.16272C12.9144 9.3112 13 9.51258 13 9.72256C13 9.93254 12.9144 10.1339 12.762 10.2824C12.6097 10.4309 12.403 10.5143 12.1875 10.5143H0.8125C0.597012 10.5143 0.390349 10.4309 0.237976 10.2824C0.0856023 10.1339 0 9.93254 0 9.72256Z" fill="black"></path>
                </svg>
            </button> -->
            
            <button id="menu-toggle" class="menu-toggle flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 shadow-none hover:bg-blue-500 hover:text-white p-0 -ml-2 h-9 w-9">
                <svg stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5">
                    <path d="M3 5H21" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                    <path d="M3 12H16" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                    <path d="M3 19H21" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                </svg>
                <span class="sr-only">Toggle Sidebar</span>
            </button>
        </div>
    
        <!-- Navlinks -->
        <div id="navlinks" class="navlinks flex flex-col items-center gap-4  w-full text-center">
            <a class="navlink text-[#3A3A3A] font-bold text-[14px] transition-colors duration-300 ease-in-out hover:text-[#0091C2] hover:pt-[10px]" href="/comingSoon.html">Gallery</a>
            <a class="navlink text-[#3A3A3A] font-bold text-[14px] transition-colors duration-300 ease-in-out hover:text-[#0091C2] hover:pt-[10px]" href="/daftar">Pendaftaran</a>
            <a class="navlink text-[#3A3A3A] font-bold text-[14px] transition-colors duration-300 ease-in-out hover:text-[#0091C2] hover:pt-[10px]" href="/comingSoon.html">Portfolio</a>
            <a class="navlink text-[#3A3A3A] font-bold text-[14px] transition-colors duration-300 ease-in-out hover:text-[#0091C2] hover:pt-[10px]" href="/comingSoon.html">Shop</a>
        </div>
    </nav>

    
    



    
    
    <div class="overlay">
        <div class="txtContainer">
            <h1 class="betaH">Beta Tested v1.3.3</h1>
            <p1 class="betaP">Website masih dalam pengembangan</p>
            </div>
    </div>
    
    
    
    
    
    
    
    
    <div class="container mx-auto px-1 md:px-3 lg:px-8">
    
    
    
        <div class="heading flex flex-col justify-center items-center gap-20 p-0 mb-20 md:gap-30 lg:gap-40 ">
            
            <div id="pictHeadingDark" class="w-full h-[calc(100vw*548/585)] max-w-[585px] max-h-[548px] bg-cover bg-center bg-no-repeat" style="background-image: url('laravel/public/imgs/HomePage.png');"></div>

            <div class="flex flex-col items-center gap-2">
                <h2 class="text-lg md:text-2xl lg:text-3xl text-center font-normal">Apapun Kreatifitasmu</h2>
                <div class="marquee-container overflow-hidden w-300 h-90 relative">
                    <div class="marquee-content absolute top-0 w-full text-center" id="marquee">
                        <p class="text-2xl md:text-3xl lg:text-4xl">Fotografi</p>
                        <p class="text-2xl md:text-3xl lg:text-4xl">Videografi</p>
                        <p class="text-2xl md:text-3xl lg:text-4xl">Editing</p>
                        <p class="text-2xl md:text-3xl lg:text-4xl">Ilustrasi</p>
                    </div>
                </div>
            </div>
        </div>
        
        
        
        <div class="container mx-auto p-4">
        <!-- News Section -->
        <div class="mb-8">
            <h2 class="text-2xl font-bold mb-4 text-center">News</h2>
            <div id="news-container" class="space-y-4">
                <!-- News items will be dynamically inserted here -->
            </div>
            <a href="#" class="text-blue-500 hover:underline">View All News ></a>
        </div>
        <!-- bg-gradient-to-b from-[#F4A3BA] to-[#A3DDEE] -->
        <!-- Events Section -->
        <div class="mb-8 shadow rounded rounded-4 py-5">
            <h2 class="text-2xl font-bold mb-4 text-center">Event</h2>
            <p class="mb-4 text-center">Here are our updates of the events related to BINUS University</p>
            <div id="events-container" class="space-y-4 p-[32px]">
                <!-- Event items will be dynamically inserted here -->
            </div>
            <div class="flex justify-center">  
    <a href="#" class="text-blue-500 text-sm md:text-md lg:text-lg font-normal ml-4 md:ml-6 lg:ml-8">View All Event ></a>  
</div>  
        </div>
    </div>
        
        <!-- Galeri -->
        <div class="container mx-auto px-1 md:px-6 lg:px-8">

            <div class="headingGallery flex justify-center md:justify-start mb-4 md:mb-6 lg:mb-8">
        
                <div class="txtGallery flex flex-col items-center md:items-start">
        
                    <div class="Glr1 text-lg md:text-2xl lg:text-3xl font-bold mb-2">Gallery</div>
        
                    <div class="Glr2 text-lg md:text-2xl lg:text-3xl font-bold">Gallery</div>
        
                </div>
        
                <a class="linkGallery text-sm md:text-md lg:text-lg font-normal ml-4 md:ml-6 lg:ml-8">Show More</a>
                <div class="select-menu">
                    <div class="select-btn">
                        <span class="sBtn-text">Filter Gallery</span>
                        <i class="bx bx-chevron-down"></i>
                    </div>
                    <ul class="options">
                        <li class="option active" data-filter="iniKaryaku">
                            <span class="option-text">#IniKaryaku</span>
                        </li>
                        <li class="option active" data-filter="dokumentasi">
                            <span class="option-text">Dokumentasi</span>
                        </li>
                      
                    </ul>
                </div>
            </div>
            
            <div class="picturePlacement overflow-y-scroll scrollbar-none hover:overflow-y-scroll hover:scrollbar-width-normal">
                
                
                
                <div class="framePict gap-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-2 items-center" id="iniKaryaku">
                    
                    <!-- End -->
                </div>
                
                <div class="framePict gap-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-2 items-center" id="dokumentasi">
                    
                    <!-- End -->
                </div>
                
                
            </div>
        </div>


        <!-- Portfolio -->
        
        <div class="portfolioContainer mx-auto px-1 md:px-6 lg:px-8 items-center lg:items-start">
            <div class="headingPortfolio flex flex-col items-center lg:items-start mb-4 md:mb-6 lg:mb-8 text-center md:text-left">
                <div class="txtPortfolio flex flex-col items-center lg:items-start">
                <div class="Glr1">Portfolio</div>
            <div class="Glr2">Portfolio</div>
                </div>
                <a class="linkPortfolio">Show More</a>
            </div>
            
            <div class="itemPortfolio w-[calc(100vw*548/585)] ">
                <div class="arrowLeft ">
                    <svg xmlns="http://www.w3.org/2000/svg" width="29" height="16" viewBox="0 0 29 16" fill="none">
                        <path d="M22.375 8.88886H6.625C6.135 8.88886 5.75 8.49775 5.75 7.99997C5.75 7.5022 6.135 7.11108 6.625 7.11108H22.375C22.865 7.11108 23.25 7.5022 23.25 7.99997C23.25 8.49775 22.865 8.88886 22.375 8.88886Z" fill="#809197"/>
                        <path d="M11 15.1111C10.8852 15.1126 10.7715 15.0896 10.666 15.0436C10.5605 14.9977 10.4656 14.9299 10.3875 14.8445L4.2625 8.62225C3.9125 8.26669 3.9125 7.71558 4.2625 7.36003L10.3875 1.15558C10.7375 0.800027 11.28 0.800027 11.63 1.15558C11.98 1.51114 11.98 2.06225 11.63 2.4178L6.1175 8.01781L11.63 13.6178C11.98 13.9734 11.98 14.5245 11.63 14.88C11.455 15.0578 11.2275 15.1467 11.0175 15.1467L11 15.1111Z" fill="#809197"/>
                    </svg>
                </div>
                <div class="portfolioPlacement">
                    <div class="portoVid">
                        <div class="imgPorto">
                            <a href="https://www.youtube.com/watch?v=66b8VyVPi8o" target="_blank"   >
                            <img src="https://img.youtube.com/vi/66b8VyVPi8o/maxresdefault.jpg" />
                            </a>
                            
                        </div>
                        
                        <div class="descPorto">
                            <p class="headDesc">Daisekoi Next Gen Vtuber</p>
                            <p class="pDesc">Official Trailer 2024</p>
                        </div>
                    </div>
                    
                    <div class="portoVid">
                        <div class="imgPorto">
                            <a href="https://www.youtube.com/watch?v=pv8SRGKRO7Q" target="_blank">
                                <img src="https://img.youtube.com/vi/pv8SRGKRO7Q/maxresdefault.jpg" />
                            </a>
                            
                        </div>
                        
                        <div class="descPorto">
                            <p class="headDesc">Daisekoi Next Gen</p>
                            <p class="pDesc">Official Trailer 2024</p>
                        </div>
                    </div>
                    
                    
                    <div class="portoVid">
                        <div class="imgPorto">
                            <a href="https://www.youtube.com/watch?v=MPbyugTkP2w" target="_blank">
                            <img src="https://img.youtube.com/vi/MPbyugTkP2w/maxresdefault.jpg" />
                            </a>
                        </div>
                        
                        <div class="descPorto">
                            <p class="headDesc">DaiVlog Special</p>
                            <p class="pDesc">Dies Natalis 41th UNDIKA Surabaya</p>
                        </div>
                    </div>
                    
                    <div class="portoVid">
                        <div class="imgPorto">
                            <a href="https://www.youtube.com/watch?v=Q732JtfjsZ8" target="_blank">
                            <img src="https://img.youtube.com/vi/Q732JtfjsZ8/maxresdefault.jpg" />
                            </a>
                        </div>
                        
                        <div class="descPorto">
                            <p class="headDesc">DaiVlog | Eps 1</p>
                            <p class="pDesc"> Chibicon 2024</p>
                        </div>
                    </div>
                    
                    
                    <div class="portoVid">
                        <div class="imgPorto">
                            <a href="https://www.youtube.com/watch?v=EI8yWt9N7zs" target="_blank">
                            <img src="https://img.youtube.com/vi/EI8yWt9N7zs/maxresdefault.jpg" />
                            </a>
                        </div>
                        
                        <div class="descPorto">
                            <p class="headDesc">Daisekoi Ilustrasi</p>
                            <p class="pDesc">Belajar Anatomi ft.@misukaragi</p>
                        </div>
                    </div>
                    
                    
                    <div class="portoVid">
                        <div class="imgPorto">
                            <a href="https://www.youtube.com/watch?v=VE5sGhJyr_g" target="_blank">
                            <img src="https://img.youtube.com/vi/VE5sGhJyr_g/maxresdefault.jpg" />
                            </a>
                        </div>
                        
                        <div class="descPorto">
                            <p class="headDesc">Daisekoi Review | EP 2</p>
                            <p class="pDesc">Review Karya Member</p>
                        </div>
                    </div>
                    
                </div>
                
                <div class="arrowRight"><svg xmlns="http://www.w3.org/2000/svg" width="29" height="16" viewBox="0 0 29 16" fill="none">
                    <path d="M6.625 8.88886H22.375C22.865 8.88886 23.25 8.49775 23.25 7.99997C23.25 7.5022 22.865 7.11108 22.375 7.11108H6.625C6.135 7.11108 5.75 7.5022 5.75 7.99997C5.75 8.49775 6.135 8.88886 6.625 8.88886Z" fill="#809197"/>
                    <path d="M18 15.1111C18.1148 15.1126 18.2285 15.0896 18.334 15.0436C18.4395 14.9977 18.5344 14.9299 18.6125 14.8445L24.7375 8.62225C25.0875 8.26669 25.0875 7.71558 24.7375 7.36003L18.6125 1.15558C18.2625 0.800027 17.72 0.800027 17.37 1.15558C17.02 1.51114 17.02 2.06225 17.37 2.4178L22.8825 8.01781L17.37 13.6178C17.02 13.9734 17.02 14.5245 17.37 14.88C17.545 15.0578 17.7725 15.1467 17.9825 15.1467L18 15.1111Z" fill="#809197"/>
                  </svg></div>
              
            </div>
        </div>
        
        
        <!-- End Container -->
    </div>
    
   
    
    <footer class="flex flex-col justify-center items-center bg-[#FFEDA3] px-4 sm:px-10 md:px-16 lg:px-24  xl:px-60 py-4 gap-4 sm:gap-6 lg:gap-8">
        <div class="containerSocial flex flex-col justify-center items-center gap-3 sm:gap-5 md:gap-7">
            <p class="txtDanger text-black text-center text-sm sm:text-base font-bold mb-0">Follow Us on</p>
            
            <a href="https://www.instagram.com/daisekoi" target="_blank" class="social flex justify-center items-center gap-3 sm:gap-5">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 25 25" fill="none" class="fill-black">
                    <path d="M8.3 2.5H16.7C19.9 2.5 22.5 5.1 22.5 8.3V16.7C22.5 18.2383 21.8889 19.7135 20.8012 20.8012C19.7135 21.8889 18.2383 22.5 16.7 22.5H8.3C5.1 22.5 2.5 19.9 2.5 16.7V8.3C2.5 6.76174 3.11107 5.28649 4.19878 4.19878C5.28649 3.11107 6.76174 2.5 8.3 2.5ZM8.1 4.5C7.14522 4.5 6.22955 4.87928 5.55442 5.55442C4.87928 6.22955 4.5 7.14522 4.5 8.1V16.9C4.5 18.89 6.11 20.5 8.1 20.5H16.9C17.8548 20.5 18.7705 20.1207 19.4456 19.4456C20.1207 18.7705 20.5 17.8548 20.5 16.9V8.1C20.5 6.11 18.89 4.5 16.9 4.5H8.1ZM17.75 6C18.0815 6 18.3995 6.1317 18.6339 6.36612C18.8683 6.60054 19 6.91848 19 7.25C19 7.58152 18.8683 7.89946 18.6339 8.13388C18.3995 8.3683 18.0815 8.5 17.75 8.5C17.4185 8.5 17.1005 8.3683 16.8661 8.13388C16.6317 7.89946 16.5 7.58152 16.5 7.25C16.5 6.91848 16.6317 6.60054 16.8661 6.36612C17.1005 6.1317 17.4185 6 17.75 6ZM12.5 7.5C13.8261 7.5 15.0979 8.02678 16.0355 8.96447C16.9732 9.90215 17.5 11.1739 17.5 12.5C17.5 13.8261 16.9732 15.0979 16.0355 16.0355C15.0979 16.9732 13.8261 17.5 12.5 17.5C11.1739 17.5 9.90215 16.9732 8.96447 16.0355C8.02678 15.0979 7.5 13.8261 7.5 12.5C7.5 11.1739 8.02678 9.90215 8.96447 8.96447C9.90215 8.02678 11.1739 7.5 12.5 7.5ZM12.5 9.5C11.7044 9.5 10.9413 9.81607 10.3787 10.3787C9.81607 10.9413 9.5 11.7044 9.5 12.5C9.5 13.2956 9.81607 14.0587 10.3787 14.6213C10.9413 15.1839 11.7044 15.5 12.5 15.5C13.2956 15.5 14.0587 15.1839 14.6213 14.6213C15.1839 14.0587 15.5 13.2956 15.5 12.5C15.5 11.7044 15.1839 10.9413 14.6213 10.3787C14.0587 9.81607 13.2956 9.5 12.5 9.5Z"/>
                </svg>
                <p class="socialTxt text-black text-center text-sm sm:text-base font-normal mb-0 hover:text-[#0091C2]">@daisekoi</p>
            </a>
        </div>
    
        <div class="copyright flex items-center justify-center text-sm sm:text-base gap-2">
            <span class="text-[#9A9A9A]">© <script>document.write(new Date().getFullYear());</script>, Daisekoi Creative Media</span>
            <span class="boldTeam text-[#0091C2] border-l border-l-[rgba(154,154,154,0.5)] pl-4 font-bold">Create by Daisekoi Team</span>
        </div>
    </footer>
    
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    
</body>
</html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login Website Admin</title>
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <link rel="shortcut icon" href="imgs/DaisekoiLogoBg.png" style="border-radius: 100%;" type="image/jpg">
    <link rel="stylesheet" href="{{ asset('css/styleLogin.css') }}" defer> <!-- Jika ada CSS -->
    <script src="{{ asset('js/indexLogin.js') }}" defer></script>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'>
    <script src="https://cdn.tailwindcss.com"></script> 
</head>
<body id="bodyDashboard">
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
    <nav class="navbar desktop flex items-center justify-center gap-[156px] p-[22px] sticky top-0 z-50 transition-all duration-300 ease-in-out hidden lg:flex mx-auto max-w-screen-lg shadow-md rounded-lg" id="navbar-desktop">
      <!-- Logo -->
      <a class="logoNav bg-[url('imgs/LogoDaisekoi.png')] bg-center bg-cover w-[117px] h-[72.668px] flex-shrink-0 relative transform transition-transform hover:translate-y-[5%]" href="/"></a>
  </nav>
  <nav class="navbar mobile flex flex-col justify-center items-center w-full p-4 sticky-lg-top top-0 z-2000 lg:hidden" id="navbar-mobile">
    <div class="flex w-full justify-between items-center">
        <!-- Logo -->
        <a class="logoNav bg-[url('imgs/LogoDaisekoi.png')] bg-center bg-cover max-w-md max-h-md md:max-w-lg md:max-h-lg lg:max-w-xl lg:max-h-xl xl:max-w-2xl xl:max-h-2xl w-[17vw] h-[10.5vw]" href="/"></a>
        
</nav>


  
<div id="alert-box" class="absolute top-[-100%] left-1/2 transform -translate-x-1/2 min-w-[150px] max-w-[90%] w-auto h-auto p-2 text-center bg-gradient-to-b from-[#2992C5] to-[#2277A0] rounded-lg text-[#505050] font-roboto transition-all duration-1000 z-[40000]">
    <p id="alert" class="font-bold text-white break-words capitalize p-6"></p>
</div>
  <div class="flex flex-col lg:flex-row lg:gap-auto justify-between items-center w-full max-w-[1180px] h-auto mx-auto px-[20px] lg:px-[40px] py-[15px]">
    <!-- Kolom Kiri: Gambar -->
    <div class="relative w-full lg:w-[50%] h-[300px] lg:h-[510px] flex items-center justify-center mb-6 lg:mb-0">
        <div class="w-full h-full max-w-[300px] lg:max-w-none bg-cover bg-center" 
             style="background-image: url('imgs/HomePage.png');"></div>
    </div>


    <!-- Kolom Kanan: Form Login -->
    
    
    <form class="form w-full lg:w-[40%] h-auto lg:h-[444px] bg-[#a3ddee] rounded-lg shadow-lg flex flex-col hidden justify-center items-center gap-8 px-[20px] py-6 lg:px-[40px] lg:py-8" id="loginForm">
        @csrf
        <!-- Judul -->
        <h2 class="text-[24px] lg:text-[32px] text-[#2c2c2c] font-semibold text-center">Masuk ke Daisekoi Admin</h2>
<!-- Judul -->
<h2 class="text-[24px] lg:text-[32px] text-[#2c2c2c] font-semibold text-center hidden" id="inputPasswordH">Masukkan Password</h2>
        <!-- Input Username -->
        <div id="inputUsername" class="relative w-full">
          <input autocapitalize="sentences" autocorrect="on"
    type="text" 
    id="username" 
    placeholder=" "
        class="peer pb-2 w-full h-12 pt-3 lg:h-14 border border-black/50 rounded-lg px-6 text-sm lg:text-base focus:outline-none focus:ring-2 focus:ring-blue-500"
    required
  />
  <label  
  for="username"  
  class="absolute left-6 text-sm transition-all duration-200 pointer-events-none 
  peer-placeholder-shown:text-base peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-black/50 
      peer-focus:text-xs peer-focus:top-1 peer-focus:translate-y-0 peer-focus:text-blue-600 
    peer-valid:text-xs peer-valid:top-1 peer-valid:translate-y-0 peer-valid:text-blue-600" 
> 
  Username 
</label>
        </div>
       
         
         <!-- Input Password -->
        <div id="inputPassword" class="relative w-full hidden">
        
        <input 
    type="password" 
    id="loginPassword" 
    placeholder=""
        class="peer w-full h-12 pt-3 lg:h-14 border border-black/50 rounded-lg px-6 text-sm lg:text-base focus:outline-none focus:ring-2 focus:ring-blue-500"
    required
  />
  <label 
  for="password"  
  class="absolute left-6 text-sm transition-all duration-200 pointer-events-none 
  peer-placeholder-shown:text-base peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-black/50 
      peer-focus:text-xs peer-focus:top-1 peer-focus:translate-y-0 peer-focus:text-blue-600 
    peer-valid:text-xs peer-valid:top-1 peer-valid:translate-y-0 peer-valid:text-blue-600" 
> 
  Password 
</label>
        
          
      
              <!-- Tombol Toggle Password -->
        <button type="button" 
        id="togglePassword" 
        class="absolute right-4 top-1/2 transform -translate-y-1/2">
    <!-- Icon Mata Default -->
    <svg id="eyeOpen" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 9a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3m0 8a5 5 0 0 1-5-5a5 5 0 0 1 5-5a5 5 0 0 1 5 5a5 5 0 0 1-5 5m0-12.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5"/>
    </svg>
    <!-- Icon Mata Tertutup -->
    <svg id="eyeClosed" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 1200 1200" fill="currentColor" class="hidden">
        <path d="M669.727 273.516c-22.891-2.476-46.15-3.895-69.727-4.248c-103.025.457-209.823 25.517-310.913 73.536c-75.058 37.122-148.173 89.529-211.67 154.174C46.232 529.978 6.431 577.76 0 628.74c.76 44.162 48.153 98.67 77.417 131.764c59.543 62.106 130.754 113.013 211.67 154.174q4.126 2.003 8.276 3.955l-75.072 131.102l102.005 60.286l551.416-960.033l-98.186-60.008zm232.836 65.479l-74.927 129.857c34.47 44.782 54.932 100.006 54.932 159.888c0 149.257-126.522 270.264-282.642 270.264c-6.749 0-13.29-.728-19.922-1.172l-49.585 85.84c22.868 2.449 45.99 4.233 69.58 4.541c103.123-.463 209.861-25.812 310.84-73.535c75.058-37.122 148.246-89.529 211.743-154.174c31.186-32.999 70.985-80.782 77.417-131.764c-.76-44.161-48.153-98.669-77.417-131.763c-59.543-62.106-130.827-113.013-211.743-154.175c-2.731-1.324-5.527-2.515-8.276-3.807m-302.636 19.483c6.846 0 13.638.274 20.361.732l-58.081 100.561c-81.514 16.526-142.676 85.88-142.676 168.897c0 20.854 3.841 40.819 10.913 59.325c.008.021-.008.053 0 .074l-58.228 100.854c-34.551-44.823-54.932-100.229-54.932-160.182c.001-149.255 126.524-270.262 282.643-270.261m168.969 212.035L638.013 797.271c81.076-16.837 141.797-85.875 141.797-168.603c0-20.474-4.086-39.939-10.914-58.155"/>
    </svg>
</button>
      </div>
       

        <!-- Tombol Selanjutnya -->
        <button class="next-btn w-full h-[54px] lg:h-[68px] bg-[#c69c6d] text-[#f5f5dc] text-xl lg:text-2xl font-bold rounded-lg flex items-center justify-center">
            <span id="nextTxt">Selanjutnya</span>
            
            <span id="loadingNextTxt" class="h-6 w-6 lg:h-9 lg:w-9 flex justify-center hidden"><svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24">
	<circle cx="18" cy="12" r="0" fill="currentColor">
		<animate attributeName="r" begin=".67" calcMode="spline" dur="1.5s" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" repeatCount="indefinite" values="0;4;0;0" />
	</circle>
	<circle cx="12" cy="12" r="0" fill="currentColor">
		<animate attributeName="r" begin=".33" calcMode="spline" dur="1.5s" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" repeatCount="indefinite" values="0;4;0;0" />
	</circle>
	<circle cx="6" cy="12" r="0" fill="currentColor">
		<animate attributeName="r" begin="0" calcMode="spline" dur="1.5s" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" repeatCount="indefinite" values="0;4;0;0" />
	</circle>
</svg></span>
        </button>
        
        <button class="hidden submit-login w-full h-[54px] lg:h-[68px] bg-[#c69c6d] text-[#f5f5dc] text-xl lg:text-2xl font-bold rounded-lg flex items-center justify-center">
        <span id="loginTxt" class="hidden">Login</span>
            <span id="loadingLoginTxt" class="h-6 w-6 lg:h-9 lg:w-9 flex justify-center hidden"><svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24">
	<circle cx="18" cy="12" r="0" fill="currentColor">
		<animate attributeName="r" begin=".67" calcMode="spline" dur="1.5s" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" repeatCount="indefinite" values="0;4;0;0" />
	</circle>
	<circle cx="12" cy="12" r="0" fill="currentColor">
		<animate attributeName="r" begin=".33" calcMode="spline" dur="1.5s" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" repeatCount="indefinite" values="0;4;0;0" />
	</circle>
	<circle cx="6" cy="12" r="0" fill="currentColor">
		<animate attributeName="r" begin="0" calcMode="spline" dur="1.5s" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" repeatCount="indefinite" values="0;4;0;0" />
	</circle>
</svg></span>
            </button>
      </form>
      
      
      
      
      <!-- Memasukkan Password
      <form class="form w-full lg:w-[40%] h-auto lg:h-[444px] bg-[#a3ddee] hidden rounded-lg shadow-lg flex flex-col justify-center items-center gap-8 px-[20px] py-6 lg:px-[40px] lg:py-8" id="inputPassword"> 
        
       
      
        
    </form> -->
    
    <form class="form w-full lg:w-[40%] h-auto lg:h-[444px] bg-[#a3ddee] rounded-lg shadow-lg flex flex-col hidden justify-center items-center gap-8 px-[20px] py-6 lg:px-[40px] lg:py-8" id="setPasswordForm">
    <h2 class="text-[24px] lg:text-[32px] text-[#2c2c2c] font-semibold text-center">Create a New Password</h2>
        
       
         <!-- Input Password -->
        <div class="relative w-full">
          <label for="password">Masukkan Password Baru</label>
          <!-- Input Password -->
          <input   required
                 type="password" 
                 class="password w-full h-[48px] lg:h-[54px] border border-black rounded-lg px-[25px] text-[14px] lg:text-[15px] placeholder:text-black/25" 
                 placeholder="Enter new password" id="newPassword" />
                
              <!-- Tombol Toggle Password -->
        <button type="button" 
        id="AddtogglePassword1" 
        class="absolute right-4 top-[50%]">
    <!-- Icon Mata Default -->
    <svg id="AddeyeOpen1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 9a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3m0 8a5 5 0 0 1-5-5a5 5 0 0 1 5-5a5 5 0 0 1 5 5a5 5 0 0 1-5 5m0-12.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5"/>
    </svg>
    <!-- Icon Mata Tertutup -->
    <svg id="AddeyeClosed1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 1200 1200" fill="currentColor" class="hidden">
        <path d="M669.727 273.516c-22.891-2.476-46.15-3.895-69.727-4.248c-103.025.457-209.823 25.517-310.913 73.536c-75.058 37.122-148.173 89.529-211.67 154.174C46.232 529.978 6.431 577.76 0 628.74c.76 44.162 48.153 98.67 77.417 131.764c59.543 62.106 130.754 113.013 211.67 154.174q4.126 2.003 8.276 3.955l-75.072 131.102l102.005 60.286l551.416-960.033l-98.186-60.008zm232.836 65.479l-74.927 129.857c34.47 44.782 54.932 100.006 54.932 159.888c0 149.257-126.522 270.264-282.642 270.264c-6.749 0-13.29-.728-19.922-1.172l-49.585 85.84c22.868 2.449 45.99 4.233 69.58 4.541c103.123-.463 209.861-25.812 310.84-73.535c75.058-37.122 148.246-89.529 211.743-154.174c31.186-32.999 70.985-80.782 77.417-131.764c-.76-44.161-48.153-98.669-77.417-131.763c-59.543-62.106-130.827-113.013-211.743-154.175c-2.731-1.324-5.527-2.515-8.276-3.807m-302.636 19.483c6.846 0 13.638.274 20.361.732l-58.081 100.561c-81.514 16.526-142.676 85.88-142.676 168.897c0 20.854 3.841 40.819 10.913 59.325c.008.021-.008.053 0 .074l-58.228 100.854c-34.551-44.823-54.932-100.229-54.932-160.182c.001-149.255 126.524-270.262 282.643-270.261m168.969 212.035L638.013 797.271c81.076-16.837 141.797-85.875 141.797-168.603c0-20.474-4.086-39.939-10.914-58.155"/>
    </svg>
</button>
      </div>
      
      <!-- Input Confirm Password -->
        <div class="relative w-full">
          <label for="password">Konfirmasi password baru</label>
          <!-- Input Password -->
          <input required
                 type="password" 
                 class="password w-full h-[48px] lg:h-[54px] border border-black rounded-lg px-[25px] text-[14px] lg:text-[15px] placeholder:text-black/25" 
                 placeholder="Confirm new password" id="confirmPassword"/>
      
              <!-- Tombol Toggle Password -->
        <button type="button" 
        id="AddtogglePassword2"
        class="absolute right-4 top-[50%]">
    <!-- Icon Mata Default -->
    <svg id="AddeyeOpen2" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 9a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3m0 8a5 5 0 0 1-5-5a5 5 0 0 1 5-5a5 5 0 0 1 5 5a5 5 0 0 1-5 5m0-12.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5"/>
    </svg>
    <!-- Icon Mata Tertutup -->
    <svg id="AddeyeClosed2" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 1200 1200" fill="currentColor" class="hidden">
        <path d="M669.727 273.516c-22.891-2.476-46.15-3.895-69.727-4.248c-103.025.457-209.823 25.517-310.913 73.536c-75.058 37.122-148.173 89.529-211.67 154.174C46.232 529.978 6.431 577.76 0 628.74c.76 44.162 48.153 98.67 77.417 131.764c59.543 62.106 130.754 113.013 211.67 154.174q4.126 2.003 8.276 3.955l-75.072 131.102l102.005 60.286l551.416-960.033l-98.186-60.008zm232.836 65.479l-74.927 129.857c34.47 44.782 54.932 100.006 54.932 159.888c0 149.257-126.522 270.264-282.642 270.264c-6.749 0-13.29-.728-19.922-1.172l-49.585 85.84c22.868 2.449 45.99 4.233 69.58 4.541c103.123-.463 209.861-25.812 310.84-73.535c75.058-37.122 148.246-89.529 211.743-154.174c31.186-32.999 70.985-80.782 77.417-131.764c-.76-44.161-48.153-98.669-77.417-131.763c-59.543-62.106-130.827-113.013-211.743-154.175c-2.731-1.324-5.527-2.515-8.276-3.807m-302.636 19.483c6.846 0 13.638.274 20.361.732l-58.081 100.561c-81.514 16.526-142.676 85.88-142.676 168.897c0 20.854 3.841 40.819 10.913 59.325c.008.021-.008.053 0 .074l-58.228 100.854c-34.551-44.823-54.932-100.229-54.932-160.182c.001-149.255 126.524-270.262 282.643-270.261m168.969 212.035L638.013 797.271c81.076-16.837 141.797-85.875 141.797-168.603c0-20.474-4.086-39.939-10.914-58.155"/>
    </svg>
</button>
      </div>
       
        
        
        
        <button class="submit-addPassword w-full h-[54px] lg:h-[68px] bg-[#c69c6d] text-[#f5f5dc] text-xl lg:text-2xl font-bold rounded-lg flex items-center justify-center" id="toggleConfirmPassword">
        <span id="AddPwTxt">Set Password</span>
            <span id="loadingAddPwTxt" class="h-6 w-6 lg:h-9 lg:w-9 flex justify-center hidden"><svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24">
	<circle cx="18" cy="12" r="0" fill="currentColor">
		<animate attributeName="r" begin=".67" calcMode="spline" dur="1.5s" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" repeatCount="indefinite" values="0;4;0;0" />
	</circle>
	<circle cx="12" cy="12" r="0" fill="currentColor">
		<animate attributeName="r" begin=".33" calcMode="spline" dur="1.5s" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" repeatCount="indefinite" values="0;4;0;0" />
	</circle>
	<circle cx="6" cy="12" r="0" fill="currentColor">
		<animate attributeName="r" begin="0" calcMode="spline" dur="1.5s" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" repeatCount="indefinite" values="0;4;0;0" />
	</circle>
</svg></span>
            </button>
    </form>
    
</div>



    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
</body>
</html>
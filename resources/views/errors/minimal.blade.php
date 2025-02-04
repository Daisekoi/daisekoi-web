<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <script src="https://cdn.tailwindcss.com"></script>
        <title>@yield('title')</title>
        <link
      rel="shortcut icon"
      href="/laravel/public/imgs/DaisekoiLogoBg.png"
      style="border-radius: 100%"
      type="image/jpg"
    />
        <style>
              body {
            
            background-attachment: fixed;
        }
        .form-left, .form-right img {
            opacity: 0;
            transform: translateY(100%);
            transition: opacity 0.5s, transform 0.5s;
        }
        .form-left.show, .form-right img.show {
            opacity: 1;
            transform: translateY(0);
        }
      
        </style>

        <style>
            body {
                font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
                background-attachment: fixed;
            }
        </style>
    </head>
    
    <body class="bg-gradient-to-b from-[#E01668] to-[#681034]">
    <div class="relative min-h-screen">
      <!-- Background Utama -->
      <div id="mainContainer"
        class="absolute w-full h-[95%] bg-neutral-50 rounded-bl-[50px] rounded-br-[50px]"
      ></div>

      <!-- Konten Wrapper -->
      <div
        class="relative flex-1 w-full px-8 lg:px-[55px] py-[25px] flex flex-col gap-[10px]"
      >
       <!-- Modified Form Container -->
        <section class="form-container flex flex-col items-center justify-center gap-8 flex-1 justify-evenly">
            <!-- Gambar di Atas -->
            <div class="form-top">
                <img id="img" class="logo-header w-[250px] md:w-[200px] sm:w-[150px] transition-all duration-500 mx-auto" 
                     src="/./laravel/public/imgs/LogoDaisekoi.png" alt="logo">
            </div>

            <!-- Teks di Bawah -->
            <div class="form-bottom flex flex-col items-center text-center">
                <div class="form-title mb-5 max-w-full">
                    <h2 class="font-extrabold text-black text-3xl md:text-2xl sm:text-xl mb-1 break-words">@yield('code')</h2>
                    <p class=" text-black text-3xl md:text-2xl sm:text-xl mb-1 break-words">@yield('message')</p>
                </div>
            </div>
        </section>
        
       
      </div>
        
    </div>

    <!-- <footer class="footer fixed bottom-0 w-full h-[55px] bg-[#015eea] py-[10px] mt-[40px]">
        
    </footer> -->
   
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
</body>
    
    <!-- <body class="antialiased">
        <div class="relative flex items-top justify-center min-h-screen bg-gray-100 dark:bg-gray-900 sm:items-center sm:pt-0">
            <div class="max-w-xl mx-auto sm:px-6 lg:px-8">
                <div class="flex items-center pt-8 sm:justify-start sm:pt-0">
                    <div class="px-4 text-lg text-gray-500 border-r border-gray-400 tracking-wider">
                        @yield('code')
                    </div>

                    <div class="ml-4 text-lg text-gray-500 uppercase tracking-wider">
                        @yield('message')
                    </div>
                </div>
            </div>
        </div>
    </body> -->
</html>

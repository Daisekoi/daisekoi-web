

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Form Pendaftaran</title>
    <link rel="shortcut icon" href="laravel/public/imgs/DaisekoiLogoBg.png" class="rounded-full" type="image/jpg">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <script src="https://cdn.tailwindcss.com"></script>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
    <!-- Custom CSS untuk gradient dan efek khusus -->
    <style>
        body {
            background: linear-gradient(-21.11deg, #00c0fa 30%, #015eea);
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
        input[type="number"]::-webkit-outer-spin-button,
        input[type="number"]::-webkit-inner-spin-button {
            -webkit-appearance: none;
            margin: 0;
        }
        input[type="number"] {
            -moz-appearance: textfield;
        }
    </style>
</head>

<body class="bg-gradient-to-b from-[#E01668] to-[#681034] ">
    <div class="relative min-h-screen flex flex-col">
      <!-- Background Utama -->
      <div id="mainContainer"
        class="absolute w-full h-[93%] bg-neutral-50 rounded-bl-[50px] rounded-br-[50px]"
      ></div>

      <!-- Konten Wrapper -->
      <div
        class="relative flex-1 w-full h-full px-8 lg:px-[55px] py-[25px] flex flex-col gap-[10px]"
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
                    <h2 id="text-comingsoon" class="font-extrabold text-black text-3xl md:text-2xl sm:text-xl mb-1 break-words"></h2>
                </div>
            </div>
        </section>
        
       
      </div>
        
    </div>
<!-- bg-[#015eea] -->
    <footer class="footer fixed bottom-0 w-full h-[55px]  py-[10px] mt-[40px]">
    <div class="container flex flex-nowrap flex-row items-center w-full p-1 min-h-[calc(1vh_-_1px)]">
           
            <p class="text-white text-sm text-center break-words">Website created by <a class="text-[#0091c2] hover:text-[#00c0fa]" href="/">Daisekoi Team</a></p>
        </div>
    </footer>
   
    <script>
     const img = document.getElementById('img'); 
    const textContainer = document.getElementById('text-comingsoon');
const texts = ['Coming Soon', 'Tunggu Kejutan dari kami'];
img.classList.remove('show');
img.classList.add('show');
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
typeText();</script>
</body>

</html>
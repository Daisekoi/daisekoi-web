<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login Website Admin</title>
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <link rel="shortcut icon" href="laravel/public/imgs/DaisekoiLogoBg.png" style="border-radius: 100%;" type="image/jpg">
    <link rel="stylesheet" href="{{ asset('laravel/resources/css/styleLogin.css') }}" defer> <!-- Jika ada CSS -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'>
    <script src="https://cdn.tailwindcss.com"></script> 
</head>
<body>
    

<div class="relative">
  <input 
    type="time"
    id="datetime"
    class="peer w-full h-12 pt-3 lg:h-14 border border-black rounded-lg px-6 text-sm lg:text-base focus:outline-none focus:ring-2 focus:ring-blue-500"
    placeholder=" "
  />
  <label 
    for="datetime"
    class="absolute left-6 text-sm transition-all duration-200 pointer-events-none 
      peer-placeholder-shown:text-base peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-black/50 
      peer-focus:text-xs peer-focus:top-1 peer-focus:translate-y-0 peer-focus:text-blue-600"
  >
    Date and Time
  </label>
</div>
<script>
  const datetimeInput = document.getElementById('datetime');

  datetimeInput.addEventListener('change', function() {
    const selectedDateTime = this.value;
    console.log('Selected Date and Time:', selectedDateTime);
  });
</script>
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
</body>
</html>
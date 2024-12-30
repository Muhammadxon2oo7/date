document.getElementById('calculateBtn').addEventListener('click', function() {
    const birthdate = document.getElementById('birthdate').value;
    if (!birthdate) {
      alert("Iltimos, tug‘ilgan sanangizni kiriting.");
      return;
    }
    const birthDate = new Date(birthdate);
    setInterval(function() {
      const today = new Date();
      const timeDiff = today - birthDate;
      const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
      const minutes = Math.floor(timeDiff / (1000 * 60));
      const seconds = Math.floor(timeDiff / 1000);
      document.getElementById('days').querySelector('span').textContent = days;
      document.getElementById('minutes').querySelector('span').textContent = minutes;
      document.getElementById('seconds').querySelector('span').textContent = seconds;
    }, 1000); 
  });
  
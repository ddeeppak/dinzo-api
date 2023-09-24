document.addEventListener('DOMContentLoaded', function() {
  var dateInput = document.getElementById('preferredDate');
    var selectDate = document.getElementById('selectdate');
    var slotButtons = document.querySelectorAll('.slot');
    var slotselect = document.querySelector('.slotselect');
    
    dateInput.addEventListener('change', function() {
      slotselect.style.display = "block";
      var selectedDate = new Date(dateInput.value);
      var options = { weekday: 'long', month: 'long', day: 'numeric' };
      var formattedDate = selectedDate.toLocaleDateString('en-US', options);
      var dateWithoutYear = formattedDate.replace(/\s+\d{4}/, '');
      selectDate.innerText = dateWithoutYear;
    });
    
    slotButtons.forEach(function(button) {
      button.addEventListener('click', function() {
        slotButtons.forEach(function(btn) {
          btn.style.backgroundColor = '';
        });
        this.style.backgroundColor = 'blue';
      });
    });
  });


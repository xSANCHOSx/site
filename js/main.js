$( function() {
    $( "#datepicker" ).datepicker({ dateFormat: 'dd.mm.yy' });
  } );

  var currentStep = 0; // Current tab is set to be the first tab (0)
  showStep(currentStep);

  function showStep(n) {
    // This function will display the specified tab of the form ...
    var x = document.getElementsByClassName("step");
    x[n].style.display = "block";
    // ... and fix the Previous/Next buttons:
    if (n == 0) {
      document.getElementById("prevBtn").style.display = "none";
    } else {
      document.getElementById("prevBtn").style.display = "block";
    }
    if (n == (x.length - 1)) {
      document.getElementById("nextBtn").innerHTML = "Отправить";
    } else {
      document.getElementById("nextBtn").innerHTML = "Следующий шаг<img src='/img/arrow-left.svg' alt='arrow-left'>";
    }
  }
  function nextPrev(n) {
    // This function will figure out which tab to display
    var x = document.getElementsByClassName("step");
    // Exit the function if any field in the current tab is invalid:
    if (n == 1 && validateForm()) return false;
    // Hide the current tab:
    x[currentStep].style.display = "none";
    // Increase or decrease the current tab by 1:
    currentStep = currentStep + n;
    // if you have reached the end of the form... :
    if (currentStep >= x.length) {
      //...the form gets submitted:
      document.getElementById("quiz-form").submit();
      return false;
    }
    // Otherwise, display the correct tab:
    showStep(currentStep);
  }

  function validateForm() {
    // This function deals with validation of the form fields
    var x, y, i, valid = true;
    x = document.getElementsByClassName("step");
    y = x[currentStep].getElementsByTagName("input");
    // A loop that checks every input field in the current tab:
    for (i = 0; i < y.length; i++) {
      // If a field is empty...
      if (y[i].value == "") {
        // add an "invalid" class to the field:
        y[i].className += " invalid";
        // and set the current valid status to false:
        valid = false;
      }
    }
    // If the valid status is true, mark the step as finished and valid:
    if (valid) {
      document.getElementsByClassName("step")[currentTab].className += " finish";
    }
    return valid; // return the valid status
  }

  $('#two_in_room').on('click', function(){
    if($("#two_in_room").is(":checked")) {
      $('.choose-neighbor').css('display','block');
    }else{
      $('.choose-neighbor').css('display','none');
    }
  });

  $('#family').on('click', function(){
    if($("#family").is(":checked")) {
      $('.add_family_member').css('display','block');
    }else{
      $('.add_family_member').css('display','none');
    }
  });

  $('#cont_vac_family').on('click', function(){
    if($("#cont_vac_family").is(":checked")) {
      $('.add_family_member2').css('display','block');
    }else{
      $('.add_family_member2').css('display','none');
    }
  });
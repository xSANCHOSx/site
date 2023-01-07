$( function() {
    $( "#datepicker1" ).datepicker({ dateFormat: 'dd.mm.yy' });
    $( "#datepicker2" ).datepicker({ dateFormat: 'dd.mm.yy' });
  } );

  // function insertNameInList(names) {
  //   var list = $('select#selectName');
  //   var newOption =
  //       $('<option></option>')
  //       .text(names.name);

  //   list.append(newOption);
  // };
  function insertNameInList2(names) {
    var list2 = $('select#neighbor');
    var curent_name = localStorage.getItem("ls_var_name");
      if(curent_name == names.name){
        var newOption2 = $('<option></option>').text(names.name).attr("disabled", "disabled");
      }
      else{
        var newOption2 = $('<option></option>').text(names.name);
      }

    list2.append(newOption2);
  };

  var CSV_URL = '../data.csv';

  $.get(CSV_URL, function (data) {
    var lines = data.split("\n");

    lines.shift();

    var names = lines.map(function (line) {
      var fields = line.split(";");
      return {
        name: fields[0],
        phone: fields[1],
        email: fields[2],
      };
    });
    //names.forEach(insertNameInList);
    names.forEach(insertNameInList2);
      });


  // $('#theForm .submit_form1').on('click', function(e){
  //   e.preventDefault();
  //   var name_in_form = $('#selectName').val();
  //   var phone = $('#phone_check').val();
  //   $.get(CSV_URL, function (data) {
  //     var lines = data.split("\n");
  //     lines.shift();
  //     var names = lines.map(function (line) {
  //       var fields = line.split(";");
  //       return {
  //         name: fields[0],
  //         phone: fields[1],
  //         email: fields[2],
  //       };
  //     });
  //     var is_redirect = false;
  //     names.forEach(function(item) {
  //       if (item.phone.includes(phone)) {
  //         if(item.name.includes(name_in_form)){
  //           is_redirect = true;
  //           localStorage.setItem ("ls_var_name", item.name)
  //         }
  //       }
  //     });
  //     console.log(is_redirect);
  //     if (is_redirect){
  //       window.location.href = '/quiz.html';
  //     }else{alert("Не такого пользователя")};
  //   });
  // });

  $(document).ready(function(){
    $('input[type="tel"]').inputmask({"mask": "999 999 99 99"});
  });

    const $block = $('.add_family_member2 .member_block').clone();

    $('#add_member').click(function() {
      $('.add_family_member2 .field-radio').before($block.clone());
    });

    $(document).on('click', '.delete', function() {
      $(this).parent().remove();
    });

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
      document.getElementById("prevBtn").style.display = "none";
      document.getElementById("nextBtn").innerHTML = "Отправить";
      document.getElementById("nextBtn").classList.add('btn_submit');
    } else {
      document.getElementById("nextBtn").innerHTML = "Следующий шаг<img src='img/arrow-right.svg' alt='arrow-right'>";
    }
  }
  function nextPrev(n) {
    // This function will figure out which tab to display
    var x = document.getElementsByClassName("step");
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

  $('#commute_plane').on('click', function(){
    if($("#commute_plane").is(":checked")) {
      $('.plane_wrap').css('display','block');
    }else{
      $('.plane_wrap').css('display','none');
    }
  });

  $('#fly_member_yes').on('click', function(){
    if($("#fly_member_yes").is(":checked")) {
      $('.plane_member').css('display','block');
    }else{
      $('.plane_member').css('display','none');
    }
  });

  $('#fly_member_no').on('click', function(){
    if($("#fly_member_no").is(":checked")) {
      $('.plane_member').css('display','none');
    }
  });

  function cbChange(obj) {
    var cbs = document.getElementsByClassName("cb");
    for (var i = 0; i < cbs.length; i++) {
        cbs[i].checked = false;
    }
    obj.checked = true;
}
$('.btn_submit').css('pointer-events', 'none ');
$('.btn_submit').css('opacity', '0.5 ');

$("#policy").change(function() {
    if(this.checked) {
        $('.btn_submit').css('pointer-events', 'auto');
        $('.btn_submit').css('opacity', '1 ');
    }else{
	$('.btn_submit').css('pointer-events', 'none ');
	$('.btn_submit').css('opacity', '0.5 ');
}
});

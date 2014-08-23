$(function() {

  console.log('ready!');
  getValues();
  // get values
  function getValues(){
    $('.btn').click(function(e){
      e.preventDefault();
      $('#answer').hide();
      operator = $(this).attr('id');
        value1 = $('#value1').val();
        value2 = $('#value2').val();
        validateValues(operator, value1, value2);
    });
  }

  // validate values
  function validateValues(operator, value1, value2) {
    if ((is_valid = !/^[0-9]*(\.[0-9]+)?$/.test(value1)) || (is_valid = !/^[0-9]*(\.[0-9]+)?$/.test(value2))) {
      $('#alert').html('<span class="alert alert-danger">You must use valide integers!</span>');
    } else {
      $('#alert').html('');
      if (operator === 'add-btn') { addValues(value1, value2); }
      else if (operator === 'subtract-btn') { subtractValues(value1, value2);}
      }
  }

  // add
  function addValues(value1, value2) {
    value3 = parseFloat(value1) + parseFloat(value2);
    displayAnswer(operator="plus", value3, value1, value2);
  }

  // subtract
  function subtractValues(value1, value2) {
    value3 = parseFloat(value1) - parseFloat(value2);
    displayAnswer(operator="minus", value3, value1, value2);
  }

  // display answer
  function displayAnswer(operator, answer, value1, value2) {
    $('#answer').html('<span>'+value1+' '+operator+' '+value2+' '+'= '+
      value3 +'<span>');
    $('#answer').show();
  }

});
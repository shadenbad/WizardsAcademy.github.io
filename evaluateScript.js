function validateForm() {
  var course = document.getElementById('course').value;
  var rating = document.querySelector('input[name="star-radio"]:checked');
  
  if (course === '') {
    alert('Please select a course.');
    return false;
  }
  
  if (!rating) {
    alert('Please select a rating.');
    return false;
  }
  
  var courseName = document.querySelector('option[value="' + course + '"]').textContent;
  var userRating = rating.value;
  
  alert('Thank you for your feedback!\nYour rating for course ' + courseName + ' is ' + userRating);
  return true;
}

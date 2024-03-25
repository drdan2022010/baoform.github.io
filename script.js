function displayData() {
    var fullName = document.getElementById('fullName').value;
    var id = document.getElementById('id').value;
    var gender = document.querySelector('input[name="gender"]:checked').value;
    var fieldOfStudy = document.getElementById('fieldOfStudy').value;
    var subjects = Array.from(document.querySelectorAll('input[name="subjects"]:checked')).map(e => e.value);
    var comments = document.getElementById('comments').value;

    alert(`Full Name: ${fullName}\nID: ${id}\nGender: ${gender}\nField of Study: ${fieldOfStudy}\nSubjects: ${subjects.join(', ')}\nComments: ${comments}`);
}

function cancel() {
    document.getElementById('fullName').value = '';
    document.getElementById('id').value = '';
    var radios = document.getElementsByName('gender');
    for(var i = 0; i < radios.length; i++){
        radios[i].checked = false;
    }
    document.getElementById('fieldOfStudy').selectedIndex = 0;
    var checkboxes = document.getElementsByName('subjects');
    for(var i = 0; i < checkboxes.length; i++){
        checkboxes[i].checked = false;
    }
    document.getElementById('comments').value = '';
}
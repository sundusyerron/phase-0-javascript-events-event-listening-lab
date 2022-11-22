const div = document.getElementById('button');

function addingEventListener() {
    div.addEventListener('click', function() {
        alert('I was clicked!');
      });
}

addingEventListener()
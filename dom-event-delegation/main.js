var $taskList = document.querySelector('.task-list');
$taskList.addEventListener('click', taskList);

function taskList(event) {
  console.log('The event.target is', event.target);
  console.log('The event.target.tagName is', event.target.tagName);
  if (event.target && event.target.tagName === 'BUTTON') {
    // console.log('this is a button');
    var closestElement = event.target.closest('.task-list-item');
    console.log(closestElement);
    closestElement.remove(closestElement);
  }
}

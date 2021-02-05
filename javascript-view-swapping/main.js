var $tabcontainer = document.querySelector('.tab-container');
var tabNodeList = document.querySelectorAll('.tab');
var viewNodeList = document.querySelectorAll('.view');
$tabcontainer.addEventListener('click', languagesTab);

function languagesTab(event) {
  var result = event.target.matches('.tab');
  var i;
  var j;
  if (result) {
    for (i = 0; i < tabNodeList.length; i++) {
      if (tabNodeList[i] === event.target) {
        tabNodeList[i].className = 'tab active';
        var data = event.target.getAttribute('data-view');
        for (j = 0; j < viewNodeList.length; j++) {
          if (viewNodeList[j].getAttribute('data-view') === data) {
            viewNodeList[j].className = 'view';
          } else {
            viewNodeList[j].className = 'hidden';
          }
        }
      } else {
        tabNodeList[i].className = 'tab';
      }
    }
  }

}

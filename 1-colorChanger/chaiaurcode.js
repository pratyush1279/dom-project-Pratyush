const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach(function (button) {
  console.log(button);
  button.addEventListener('click', function (e) {
    console.log(e);
    console.log(e.target);

    switch (e.target.id) {
      case 'grey':
        document.body.style.backgroundColor = 'grey';
        break;
      case 'white':
        document.body.style.backgroundColor = 'white';
        break;
      case 'blue':
        document.body.style.backgroundColor = 'blue';
        break;
      case 'yellow':
        document.body.style.backgroundColor = 'yellow';
        break;
      default:
        document.body.style.backgroundColor = 'white';
    }
  });
});

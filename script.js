let a = '';
let clickListener = document.querySelector('.buttons');
let input = document.querySelector('input');

// Handle keyboard input: add keys to 'a' and update input
document.addEventListener('keydown', e => {
  const allowedKeys = ['0','1','2','3','4','5','6','7','8','9','.','+','-','*','/','x'];

  if (allowedKeys.includes(e.key)) {
    e.preventDefault(); 
    a += e.key;
    input.value = a;
    input.focus();
  }

  if (e.key === 'Enter') {
    e.preventDefault(); 
    equal();
 
  }

  if (e.key === 'Backspace') {
    e.preventDefault(); 
    a = a.slice(0, -1);
    input.value = a;
 
  }
});

clickListener.addEventListener('click', e => {
  let val = e.target.innerText;

  if (val === '=') {
    equal();
    return;
  }

  if (val === 'C') {
    input.value = '';
    a = '';
    return;
  }

  if (val === '⌫') {
    a = a.slice(0, -1);
    input.value = a;
    return;
  }

  a += val;
  input.value = a;
});

function equal() {
  try {
    const b = eval(a.replace(/x/g, '*'));
    a = b.toString();
    input.value = a;
  } catch {
    input.value = 'Error';
    a = '';
  }
}

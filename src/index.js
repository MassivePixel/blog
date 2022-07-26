let template = document.getElementById('r');
let templateContent = template.content;

function createGrid() {
  const cols = document.body.clientWidth / 32;
  const rows = document.body.clientHeight / 32;
  const dx = Math.floor(document.body.clientWidth / cols);
  const dy = Math.floor(document.body.clientHeight / rows);

  for (var i = 0; i < cols + 1; i++) {
    for (var j = 0; j < rows + 1; j++) {
      var div = document.createElement('div');
      div.appendChild(templateContent.cloneNode(true));
      div.style.position = 'absolute';
      div.style.left = `${i * dx}px`;
      div.style.top = `${j * dy}px`;
      container.appendChild(div);
      div.classList.add('wrapper');
    }
  }
}

function animate() {
  let current = 0;
  const states = ['animate-br', 'animate-tl', 'animate-tr', 'animate-bl'];

  container.classList.add(states[current]);
  setInterval(() => {
    container.classList.remove(states[current]);
    current = (current + 1) % states.length;
    container.classList.add(states[current]);
    console.log(`setting ${states[current]}`);
  }, 5000);
}

animate();

window.addEventListener('resize', handleResize, false);

function handleResize() {
  w = document.body.clientWidth;
  h = document.body.clientHeight;

  container.innerHTML = null;
  createGrid();
}

createGrid();

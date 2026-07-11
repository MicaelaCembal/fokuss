const io = new IntersectionObserver((es) => {
  es.forEach(e => {
    if(e.isIntersecting){
      e.target.classList.add('in');
      io.unobserve(e.target);
    }
  });
}, {threshold: .12});

document.querySelectorAll('.reveal').forEach((el, i) => {
  el.style.transitionDelay = (i % 3 * 0.08) + 's';
  io.observe(el);
});


function trySwap(id, file, alt){
  const box = document.getElementById(id); 
  if(!box) return;
  const img = new Image();
  img.onload = () => {
    box.innerHTML = '';
    const el = document.createElement('img');
    el.src = file;
    el.alt = alt;
    box.appendChild(el);
  };
  img.src = file;
}
trySwap('ph-metodos', 'media/metodos_estudio.jpeg', 'Métodos de estudio');
trySwap('ph-racha', 'media/recompensas.jpeg', 'Racha');
const PESOS = { 'scene.png': 41.6, 'scene_q90.jpg': 16.9, 'scene.webp': 4.0 };
const C = '#1F2A44';

const ICONOS = {
  compresion: 'M4 4l6 6M4 10h6V4M20 20l-6-6M20 14h-6v6',
  calidad: 'M12 3l2.6 5.6 6.1.7-4.5 4.2 1.2 6L12 16.6l-5.4 2.9 1.2-6-4.5-4.2 6.1-.7z',
  transparencia: 'M3 3h18v18H3zM3 9h6V3M9 9h6v6H9zM15 15h6M15 3v6h6M3 15h6v6',
  animacion: 'M3 5h18v14H3zM10 9l5 3-5 3z',
  color: 'M4 14a5 5 0 1 0 10 0a5 5 0 1 0-10 0M10 14a5 5 0 1 0 10 0a5 5 0 1 0-10 0M7 9a5 5 0 1 0 10 0a5 5 0 1 0-10 0',
  indexado: 'M4 4h7v7H4zM13 4h7v7h-7zM4 13h7v7H4zM13 13h7v7h-7z',
  vectorial: 'M4 18C8 4 16 20 20 6M3 17h2v2H3zM19 5h2v2h-2z',
  raster: 'M3 3h18v18H3zM9 3v18M15 3v18M3 9h18M3 15h18',
  mano: 'M9 11V5a2 2 0 0 1 4 0v6M13 10a2 2 0 0 1 4 0v2a2 2 0 0 1 4 0v3a6 6 0 0 1-6 6h-2a6 6 0 0 1-5-3l-3-5a2 2 0 0 1 3-2l1 1',
  tabla: 'M3 4h18v16H3zM3 10h18M9 4v16M15 4v16',
};

function icono(nombre, tam = 24) {
  return `<svg width="${tam}" height="${tam}" viewBox="0 0 24 24" fill="none" stroke="${C}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="${ICONOS[nombre]}"/></svg>`;
}

const VALORES = {
  si: ['Sí', '<rect x="3" y="3" width="18" height="18" rx="3"/><path d="M7 12l3.5 3.5L17 9"/>'],
  no: ['No', '<rect x="3" y="3" width="18" height="18" rx="3"/><path d="M8 8l8 8M16 8l-8 8"/>'],
  alta: ['Alta', '<circle cx="12" cy="12" r="9"/><path d="M8 14.5c1.2 1.6 2.6 2.3 4 2.3s2.8-.7 4-2.3M9 10h.01M15 10h.01"/>'],
  media: ['Media', '<circle cx="12" cy="12" r="9"/><path d="M8.5 15h7M9 10h.01M15 10h.01"/>'],
  baja: ['Baja', '<circle cx="12" cy="12" r="9"/><path d="M8 16.5c1.2-1.6 2.6-2.3 4-2.3s2.8.7 4 2.3M9 10h.01M15 10h.01"/>'],
};

function valor(v, tam = 28) {
  if (!VALORES[v]) return `<span class="val">${v}</span>`;
  return `<svg width="${tam}" height="${tam}" viewBox="0 0 24 24" fill="none" stroke="${C}" stroke-width="2" stroke-linecap="round" role="img" aria-label="${VALORES[v][0]}">${VALORES[v][1]}</svg>`;
}

const CONCEPTOS = [
  ['compresion', 'Compresión'],
  ['calidad', 'Calidad'],
  ['transparencia', 'Transparencia'],
  ['animacion', 'Animación'],
  ['color', 'Color verdadero'],
  ['indexado', 'Indexado'],
  ['vectorial', 'Vectorial'],
  ['raster', 'Raster'],
];

const LOGO_SVG = `<svg viewBox="0 0 240 240" role="img" aria-label="Logo SVG"><circle cx="120" cy="120" r="106" fill="#2E6FD8"/><path d="M75 125l30 30 60-65" fill="none" stroke="#FFFFFF" stroke-width="22" stroke-linecap="round" stroke-linejoin="round"/></svg>`;

const FORMATOS = {
  jpg: {
    nombre: 'JPG',
    img: 'scene_q90.jpg',
    uso: 'Fotos',
    compresion: 'Con pérdida',
    calidad: 'media',
    transparencia: 'no',
    animacion: 'no',
    color: 'si',
    indexado: 'no',
    vectorial: 'no',
    raster: 'si',
  },
  png: {
    nombre: 'PNG',
    img: 'logo.png',
    uso: 'Capturas',
    compresion: 'Sin pérdida',
    calidad: 'alta',
    transparencia: 'si',
    animacion: 'no',
    color: 'si',
    indexado: 'si',
    vectorial: 'no',
    raster: 'si',
  },
  webp: {
    nombre: 'WEBP',
    img: 'scene.webp',
    uso: 'Web',
    compresion: 'Ambas',
    calidad: 'alta',
    transparencia: 'si',
    animacion: 'si',
    color: 'si',
    indexado: 'no',
    vectorial: 'no',
    raster: 'si',
  },
  svg: {
    nombre: 'SVG',
    img: null,
    uso: 'Logos',
    compresion: 'XML',
    calidad: 'alta',
    transparencia: 'si',
    animacion: 'si',
    color: 'si',
    indexado: 'no',
    vectorial: 'si',
    raster: 'no',
  },
  gif: {
    nombre: 'GIF',
    img: 'scene.gif',
    uso: 'Animaciones',
    compresion: 'Sin pérdida',
    calidad: 'baja',
    transparencia: 'si',
    animacion: 'si',
    color: 'no',
    indexado: 'si',
    vectorial: 'no',
    raster: 'si',
  },
};

function imagen(nombre) {
  return `<img src="img/${nombre}" alt="${nombre}">`;
}

function ejemploDe(id) {
  const f = FORMATOS[id];
  return f.img ? imagen(f.img) : LOGO_SVG;
}

function pantallaInicio() {
  let html = `<h1>Elige formato</h1><div class="grid">`;
  for (const id in FORMATOS) {
    const f = FORMATOS[id];
    const ajustar = id === 'png' || id === 'svg' ? 'fit' : '';
    html += `<button class="card inicio ${ajustar}" data-ir="${id}" data-tip="${f.uso}">${ejemploDe(id)}<span class="ext">${f.nombre}</span></button>`;
  }
  html += `</div>`;
  return html;
}

function pantallaFormato(id) {
  const f = FORMATOS[id];
  let html = `<div class="tabs">`;
  for (const otro in FORMATOS) {
    html += `<button class="tab ${otro === id ? 'on' : ''}" data-ir="${otro}">${FORMATOS[otro].nombre}</button>`;
  }
  html += `</div><h1>${f.nombre}</h1><div class="ficha"><div class="ejemplo">${ejemploDe(id)}</div><div class="lista">`;
  for (const [c, nombre] of CONCEPTOS) {
    html += `<button class="item" data-ir="${c}" data-tip="Ver ${nombre.toLowerCase()}"><span>${icono(c)}${nombre}</span>${valor(f[c])}</button>`;
  }
  html += `</div></div>`;
  return html;
}

function pantallaConceptos() {
  let html = `<h1>Conceptos</h1><div class="grid">`;
  for (const [c, nombre] of CONCEPTOS) {
    html += `<button class="card" data-ir="${c}" style="flex-direction:row;align-items:center;font-weight:700;font-size:18px">${icono(c, 32)}${nombre}</button>`;
  }
  return html + `</div>`;
}

function caja(titulo, contenido, debajo = '', clase = '') {
  return `<div class="caja"><div class="foto ${clase}">${contenido}</div>${titulo}${debajo}</div>`;
}

function filaFormatos(c) {
  let html = `<h1 style="font-size:22px;margin-top:24px">Formatos</h1><div class="demo">`;
  for (const id in FORMATOS) html += `<div class="caja">${FORMATOS[id].nombre}${valor(FORMATOS[id][c], 34)}</div>`;
  return html + `</div>`;
}

function fotograma(y, num) {
  return `<div style="display:flex;flex-direction:column;align-items:center;gap:4px"><svg width="56" height="56" viewBox="0 0 56 56"><rect x="1" y="1" width="54" height="54" rx="6" fill="#FFFFFF" stroke="${C}" stroke-width="2"/><line x1="8" y1="46" x2="48" y2="46" stroke="${C}" stroke-width="2"/><circle cx="28" cy="${y}" r="7" fill="#2E6FD8"/></svg>${num}</div>`;
}

function tira(fotogramas) {
  return `<div style="display:flex;align-items:center;gap:6px">${fotogramas.join('<span style="font-size:20px">→</span>')}</div>`;
}

const DEMOS = {
  compresion: () =>
    `<div class="demo">${caja('PNG', imagen('scene.png'), `<span>${PESOS['scene.png']} KB</span>`)}${caja('JPG', imagen('scene_q90.jpg'), `<span>${PESOS['scene_q90.jpg']} KB</span>`)}${caja('WEBP', imagen('scene.webp'), `<span>${PESOS['scene.webp']} KB</span>`)}</div>`,
  calidad: () =>
    `<div class="demo">${caja('PNG', imagen('scene.png'), valor('alta'), 'zoom')}${caja('JPG', imagen('scene_q8.jpg'), valor('baja'), 'zoom')}</div>`,
  transparencia: () =>
    `<div class="demo">${caja('PNG', imagen('logo.png'), valor('si'), 'oscuro')}${caja('GIF', imagen('logo.gif'), valor('si'), 'oscuro')}${caja('JPG', imagen('logo.jpg'), valor('no'), 'oscuro')}</div>`,
  animacion: () =>
    `<div class="demo">${caja('GIF · WEBP · SVG', tira([fotograma(38, 1), fotograma(24, 2), fotograma(12, 3)]), valor('si'))}${caja('JPG · PNG', tira([fotograma(38, 1)]), valor('no'))}</div>`,
  color: () => `<div class="demo">${caja('Millones', imagen('grad.jpg'))}${caja('256', imagen('grad.gif'))}</div>`,
  indexado: () => `<div class="demo">${caja('16', imagen('grad16.png'))}${caja('256', imagen('grad.gif'))}</div>`,
  vectorial: () =>
    `<div class="demo">${caja('SVG', `<div style="width:140px;height:140px">${LOGO_SVG}</div>`, valor('si'))}${caja('PNG', `<img class="pix" src="img/logo32.png" alt="Logo PNG ampliado">`, valor('no'))}</div>`,
  raster: () =>
    `<div class="demo">${caja('PNG', `<img class="pix" src="img/logo32.png" alt="Logo PNG ampliado">`, valor('si'))}${caja('SVG', `<div style="width:140px;height:140px">${LOGO_SVG}</div>`, valor('no'))}</div>`,
};

function pantallaConcepto(c) {
  const nombre = CONCEPTOS.find((x) => x[0] === c)[1];
  return `<button class="volver" data-ir="conceptos">‹ Conceptos</button><h1 style="display:flex;align-items:center;gap:12px">${icono(c, 34)}${nombre}</h1>${DEMOS[c]()}${filaFormatos(c)}`;
}

function leyenda() {
  let html = `<div class="leyenda">`;
  for (const v in VALORES) html += `<span>${valor(v, 22)}${VALORES[v][0]}</span>`;
  return html + `</div>`;
}

function pantallaComparar() {
  let html = `<h1>Comparar</h1>${leyenda()}<div class="tabla"><table><thead><tr><th></th>`;
  for (const id in FORMATOS)
    html += `<th><button style="color:#FFFFFF;font-weight:700;font-size:18px" data-ir="${id}">${FORMATOS[id].nombre}</button></th>`;
  html += `</tr></thead><tbody>`;
  for (const [c, nombre] of CONCEPTOS) {
    html += `<tr><th><button data-ir="${c}" style="display:flex;align-items:center;gap:8px;font-weight:700">${icono(c, 20)}${nombre}</button></th>`;
    for (const id in FORMATOS) html += `<td>${valor(FORMATOS[id][c])}</td>`;
    html += `</tr>`;
  }
  return html + `</tbody></table></div>`;
}

function pantallaAyuda() {
  let html = `<h1>Ayuda</h1>${leyenda()}<div class="grid">`;
  for (const [c, nombre] of CONCEPTOS)
    html += `<div class="card" style="flex-direction:row;align-items:center;font-weight:700">${icono(c, 28)}${nombre}</div>`;
  return html + `</div><div class="btns"><button class="btn" id="verGuia">Ver guía</button></div>`;
}

function mostrar() {
  const id = location.hash.slice(1) || 'inicio';
  let html,
    menu = id;
  if (id === 'conceptos') html = pantallaConceptos();
  else if (id === 'comparar') html = pantallaComparar();
  else if (id === 'ayuda') html = pantallaAyuda();
  else if (FORMATOS[id]) {
    html = pantallaFormato(id);
    menu = 'inicio';
  } else if (DEMOS[id]) {
    html = pantallaConcepto(id);
    menu = 'conceptos';
  } else {
    html = pantallaInicio();
    menu = 'inicio';
  }
  document.getElementById('app').innerHTML = html;
  document.querySelectorAll('.nav').forEach((b) => b.classList.toggle('on', b.dataset.ir === menu));
  window.scrollTo(0, 0);
}

function mostrarGuia() {
  const g = document.getElementById('guia');
  g.innerHTML = `<div class="fondo"><div class="guia"><h1 style="font-size:24px;margin:0">Guía rápida</h1><div class="pasos">
<div class="paso">${icono('mano', 32)}Elige</div><div class="paso">${icono('tabla', 32)}Compara</div><div class="paso"><span class="help" style="display:flex;align-items:center;justify-content:center;background:#1F2A44;color:#FFFFFF">?</span>Ayuda</div>
</div><button class="btn main" id="cerrarGuia">Entendido</button></div></div>`;
}

document.addEventListener('click', (e) => {
  const boton = e.target.closest('[data-ir]');
  if (boton) location.hash = boton.dataset.ir;
  if (e.target.closest('#verGuia')) mostrarGuia();
  if (e.target.closest('#cerrarGuia')) {
    document.getElementById('guia').innerHTML = '';
    try {
      localStorage.setItem('guiaVista', 'si');
    } catch (err) {}
  }
});

window.addEventListener('hashchange', mostrar);
mostrar();
let vista = false;
try {
  vista = localStorage.getItem('guiaVista') === 'si';
} catch (err) {}
if (!vista) mostrarGuia();

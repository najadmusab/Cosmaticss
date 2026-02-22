/* ============================================================
   Luméra Cosmetics — Premium Beauty & Skincare
   main.js — All JavaScript
   ============================================================ */

'use strict';

/* ────────────────────────────────────────────
   PRODUCT & REVIEW DATA
──────────────────────────────────────────── */
const products = [
  {
    id: 1,
    name: 'Radiance Vitamin C Serum',
    brand: 'Aura Science',
    price: 499,
    original: 699,
    discount: 28,
    rating: 4.8,
    reviews: 248,
   images:[
    'images/serum 1.jpg',
    'images/serum 2.jpg',
    'images/serum 3.jpg',
    'images/serum 4.jpg',


   ],
    badge: 'bestseller',
    category: 'skincare',
    desc: 'A potent Vitamin C serum with 20% L-Ascorbic acid that brightens, firms and protects skin from free radical damage. Formulated with hyaluronic acid for deep hydration.',
    ingredients: ['L-Ascorbic Acid 20%', 'Hyaluronic Acid', 'Niacinamide', 'Rose Hip Oil', 'Vitamin E', 'Ferulic Acid', 'Collagen Peptides']
  },
  {
    id: 2,
    name: 'Black Rose Overnight Mask',
    brand: 'Maison Luxe',
    price: 299,
    original: 599,
    discount: 26,
    rating: 4.9,
    reviews: 185,
     images:[
    'images/mask 4.jpg.jfif',
    'images/mask 1.jpg.jfif',
    'images/mask 3.jpg.jpg',
    'images/mask 2.jpg.jfif',


   ],
    badge: 'new',
    category: 'skincare',
    desc: 'Infused with rare black rose extract and retinol, this luxurious overnight mask works while you sleep to deliver plump, luminous skin by morning.',
    ingredients: ['Black Rose Extract', 'Retinol 0.1%', 'Squalane', 'Ceramides', 'Peptide Complex', 'Jojoba Oil', 'Shea Butter']
  },
  {
    id: 3,
    name: 'Velvet Matte Lip Color',
    brand: 'Luméra Cosmetics',
    price: 199,
    original: 799,
    discount: 27,
    rating: 4.7,
    reviews: 432,
         images:[
    'images/lip 1.jpg.jfif',
    'images/lip 2.jpg.jfif',
    'images/lip 3.jpg.jfif',
    'images/lip 4 (1).jfif',
    'images/lip 5.jpg.jfif',


   ],
    badge: 'bestseller',
    category: 'makeup',
    desc: 'Ultra-comfortable long-wearing matte lipstick in 24 shades. Hydrating formula with vitamin E keeps lips soft and conditioned all day.',
    ingredients: ['Castor Oil', 'Vitamin E', 'Beeswax', 'Carnauba Wax', 'Pigment', 'Jojoba Butter']
  },
  {
    id: 4,
    name: 'Midnight Oud Eau de Parfum',
    brand: 'Parfum Luxe',
    price: 999,
    original: 1299,
    discount: 25,
    rating: 4.9,
    reviews: 96,
             images:[
    'images/perfume .jpg.jfif',
    'images/perfume 1.jpg.jfif',
    'images/perfume 2.jpg.jfif',
    'images/perfume 3.jpg.jfif',
    'images/perfume 4.jpg.jfif',


   ],
    badge: 'new',
    category: 'fragrance',
    desc: 'A heady oriental fragrance opening with bergamot and black pepper, settling into a rich heart of rose and jasmine, with a deep base of oud and sandalwood.',
    ingredients: ['Bergamot', 'Black Pepper', 'Rose Absolute', 'Jasmine Sambac', 'Oud Extract', 'Sandalwood', 'Musk', 'Benzyl Benzoate']
  },
  {
    id: 5,
    name: 'Gold Brightening Eye Cream',
    brand: 'Aura Science',
    price: 2199,
    original: 2999,
    discount: 26,
    rating: 4.6,
    reviews: 167,
    emoji: '✨',
    badge: '',
    category: 'skincare',
    desc: '24K gold particles combined with caffeine and peptides to visibly reduce dark circles, puffiness and fine lines around the delicate eye area.',
    ingredients: ['24K Gold Particles', 'Caffeine 3%', 'Retinyl Palmitate', 'Collagen', 'Vitamin K', 'Argan Oil', 'Hyaluronic Acid']
  },
  {
    id: 6,
    name: 'Hydra Glow Foundation',
    brand: 'Luméra Cosmetics',
    price: 1899,
    original: 2499,
    discount: 24,
    rating: 4.5,
    reviews: 312,
    emoji: '💫',
    badge: '',
    category: 'makeup',
    desc: 'Buildable medium-to-full coverage foundation with SPF 30. Dewy finish that lasts 24 hours. Available in 40 inclusive shades for all skin tones.',
    ingredients: ['SPF 30', 'Titanium Dioxide', 'Hyaluronic Acid', 'Glycerin', 'Niacinamide', 'Aloe Extract']
  },
  {
    id: 7,
    name: 'Coconut & Honey Body Oil',
    brand: 'Pure Rituals',
    price: 999,
    original: 1499,
    discount: 33,
    rating: 4.4,
    reviews: 88,
    emoji: '🌴',
    badge: 'sale',
    category: 'bath',
    desc: 'Luxurious dry body oil that absorbs instantly, leaving skin silky smooth with a subtle golden glow. Rich in omega fatty acids for deep nourishment.',
    ingredients: ['Coconut Oil', 'Honey Extract', 'Jojoba Oil', 'Vitamin E', 'Sweet Almond Oil', 'Frankincense', 'Ylang Ylang']
  },
  {
    id: 8,
    name: 'Keratin Silk Hair Serum',
    brand: 'Luxe Hair',
    price: 1499,
    original: 1999,
    discount: 25,
    rating: 4.7,
    reviews: 203,
    emoji: '🌟',
    badge: '',
    category: 'haircare',
    desc: 'Salon-quality keratin treatment serum that smooths frizz, adds mirror-like shine and protects against heat damage up to 230°C.',
    ingredients: ['Hydrolysed Keratin', 'Argan Oil', 'Panthenol', 'Biotin', 'Silk Amino Acids', 'Castor Oil', 'Heat Protectant']
  }
];

const reviewsData = [
  { name: 'Priya M.',   rating: 5, text: 'This serum has completely transformed my skin! After just 3 weeks I noticed my dark spots fading and my complexion is so much more radiant. Worth every penny.', helpful: 42 },
  { name: 'Ananya R.',  rating: 5, text: 'The overnight mask is absolutely divine. I wake up with plump, glowy skin every morning. The scent is subtle and luxurious. Repurchased 3 times already!', helpful: 38 },
  { name: 'Kavita S.',  rating: 4, text: 'Love the foundation coverage and finish. Goes on like a dream. Only minor issue is it needs touch-ups mid-afternoon but overall very impressed with the quality.', helpful: 27 },
  { name: 'Meera T.',   rating: 5, text: 'The Midnight Oud perfume is STUNNING. So many compliments everywhere I go. The longevity is incredible — still going strong after 12 hours.', helpful: 51 },
  { name: 'Deepa K.',   rating: 5, text: 'Best eye cream I have ever used. My dark circles are noticeably lighter and the under-eye area looks so much firmer. Love that it\'s dermatologically tested.', helpful: 33 },
  { name: 'Roshni P.',  rating: 4, text: 'The body oil is gorgeous — soaks in quickly with no greasy residue. My skin feels incredibly soft. The packaging is also very elegant and luxurious.', helpful: 19 }
];

/* ────────────────────────────────────────────
   CART STATE
──────────────────────────────────────────── */
let cart = [];
let currentProduct = null;
let deliveryType   = 'standard';
let discountAmount = 0;
let showing3d      = false;

try { cart = JSON.parse(localStorage.getItem('auraluxe_cart') || '[]'); } catch (e) { cart = []; }

/* ────────────────────────────────────────────
   INIT
──────────────────────────────────────────── */
window.addEventListener('load', () => {
  /* hide loader */
  setTimeout(() => {
    const loader = document.getElementById('loader');
    loader.style.opacity = '0';
    setTimeout(() => loader.style.display = 'none', 800);
  }, 1800);

  renderProducts();
  renderReviews();
  updateCartUI();
  initParticles();
  initHero3D();
  initScrollReveal();
  initCursor();
  renderAdminChart();
  renderAdminOrders();

  window.addEventListener('scroll', () => {
    document.getElementById('navbar').classList.toggle('scrolled', window.scrollY > 80);
  });

  /* modal close on overlay click */
  document.getElementById('productModal').addEventListener('click', e => {
    if (e.target === document.getElementById('productModal')) closeModal();
  });
  document.getElementById('invoiceModal').addEventListener('click', e => {
    if (e.target === document.getElementById('invoiceModal')) closeInvoice();
  });
});

/* ────────────────────────────────────────────
   PARTICLES (canvas)
──────────────────────────────────────────── */
function initParticles() {
  const canvas = document.getElementById('particles');
  const ctx = canvas.getContext('2d');

  const resize = () => {
    canvas.width  = window.innerWidth;
    canvas.height = window.innerHeight;
  };
  resize();
  window.addEventListener('resize', resize);

  const pts = Array.from({ length: 60 }, () => ({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    r: Math.random() * 2 + 0.5,
    dx: (Math.random() - 0.5) * 0.3,
    dy: (Math.random() - 0.5) * 0.3,
    o: Math.random() * 0.5 + 0.1
  }));

  (function loop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    pts.forEach(p => {
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(200,149,108,${p.o})`;
      ctx.fill();
      p.x += p.dx; p.y += p.dy;
      if (p.x < 0) p.x = canvas.width;
      if (p.x > canvas.width) p.x = 0;
      if (p.y < 0) p.y = canvas.height;
      if (p.y > canvas.height) p.y = 0;
    });
    requestAnimationFrame(loop);
  })();
}

/* ────────────────────────────────────────────
   THREE.JS HERO 3D
──────────────────────────────────────────── */
function initHero3D() {
  const canvas = document.getElementById('hero-canvas');
  if (!canvas || typeof THREE === 'undefined') return;

  const scene    = new THREE.Scene();
  const camera   = new THREE.PerspectiveCamera(45, canvas.offsetWidth / canvas.offsetHeight, 0.1, 100);
  camera.position.set(0, 0, 5);

  const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
  renderer.setSize(canvas.offsetWidth, canvas.offsetHeight);
  renderer.setPixelRatio(window.devicePixelRatio);

  /* lipstick group */
  const group = new THREE.Group();

  const body = new THREE.Mesh(
    new THREE.CylinderGeometry(0.35, 0.4, 2.5, 32),
    new THREE.MeshStandardMaterial({ color: 0x2A2018, metalness: 0.8, roughness: 0.2 })
  );
  group.add(body);

  const ring = new THREE.Mesh(
    new THREE.TorusGeometry(0.42, 0.06, 16, 32),
    new THREE.MeshStandardMaterial({ color: 0xC9A96E, metalness: 1, roughness: 0.1 })
  );
  ring.position.y = 0.8;
  group.add(ring);

  const tip = new THREE.Mesh(
    new THREE.CylinderGeometry(0.15, 0.33, 1, 32),
    new THREE.MeshStandardMaterial({ color: 0xC8956C, metalness: 0.3, roughness: 0.5 })
  );
  tip.position.y = 1.75;
  group.add(tip);

  const topMesh = new THREE.Mesh(
    new THREE.SphereGeometry(0.15, 16, 16),
    new THREE.MeshStandardMaterial({ color: 0xB07855, metalness: 0.2, roughness: 0.4 })
  );
  topMesh.position.y = 2.25;
  group.add(topMesh);

  scene.add(group);

  /* floating spheres */
  const colors  = [0xC8956C, 0xC9A96E, 0xE8C4A8, 0x8B7355];
  const spheres = colors.map((c, i) => {
    const s = new THREE.Mesh(
      new THREE.SphereGeometry(0.12, 16, 16),
      new THREE.MeshStandardMaterial({ color: c, metalness: 0.6, roughness: 0.3 })
    );
    const angle = (i / colors.length) * Math.PI * 2;
    s.position.set(Math.cos(angle) * 1.8, Math.sin(angle * 0.7) * 0.8, Math.sin(angle) * 1.8);
    s._angle  = angle;
    s._speed  = 0.5 + i * 0.1;
    s._radius = 1.8;
    scene.add(s);
    return s;
  });

  /* lights */
  scene.add(new THREE.AmbientLight(0xfff5ee, 0.5));
  const dl1 = new THREE.DirectionalLight(0xC8956C, 2);
  dl1.position.set(3, 5, 3);
  scene.add(dl1);
  const dl2 = new THREE.DirectionalLight(0xC9A96E, 1);
  dl2.position.set(-3, -2, -3);
  scene.add(dl2);

  /* drag rotate */
  let isDragging = false, prevX = 0;
  canvas.addEventListener('mousedown', e => { isDragging = true; prevX = e.clientX; });
  window.addEventListener('mouseup',   () => { isDragging = false; });
  window.addEventListener('mousemove', e => {
    if (isDragging) { group.rotation.y += (e.clientX - prevX) * 0.01; prevX = e.clientX; }
  });

  let t = 0;
  (function animate() {
    requestAnimationFrame(animate);
    t += 0.01;
    if (!isDragging) group.rotation.y += 0.005;
    group.position.y = Math.sin(t) * 0.15;
    spheres.forEach((s, i) => {
      s.position.x = Math.cos(t * s._speed + s._angle) * s._radius;
      s.position.z = Math.sin(t * s._speed + s._angle) * s._radius;
      s.position.y = Math.sin(t * 1.2 + i) * 0.6;
    });
    renderer.render(scene, camera);
  })();

  window.addEventListener('resize', () => {
    camera.aspect = canvas.offsetWidth / canvas.offsetHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(canvas.offsetWidth, canvas.offsetHeight);
  });
}

/* ────────────────────────────────────────────
   MODAL 3D VIEW (jar)
──────────────────────────────────────────── */
function toggle3DView() {
  const c   = document.getElementById('modal3dCanvas');
  const img = document.getElementById('modalMainImg');
  showing3d = !showing3d;
  c.style.display   = showing3d ? 'block' : 'none';
  img.style.display = showing3d ? 'none'  : 'flex';
  if (showing3d) initModal3D();
}

function initModal3D() {
  const canvas = document.getElementById('modal3dCanvas');
  if (!canvas || canvas._initialized || typeof THREE === 'undefined') return;
  canvas._initialized = true;
  canvas.width  = canvas.offsetWidth;
  canvas.height = canvas.offsetHeight;

  const scene    = new THREE.Scene();
  const cam      = new THREE.PerspectiveCamera(45, canvas.width / canvas.height, 0.1, 100);
  cam.position.set(0, 0, 4);
  const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
  renderer.setSize(canvas.width, canvas.height);

  const group2  = new THREE.Group();

  const jarBody = new THREE.Mesh(
    new THREE.CylinderGeometry(1, 1, 0.7, 64),
    new THREE.MeshStandardMaterial({ color: 0xF5EDE2, metalness: 0.1, roughness: 0.3, transparent: true, opacity: 0.9 })
  );
  group2.add(jarBody);

  const lid = new THREE.Mesh(
    new THREE.CylinderGeometry(1.05, 1.05, 0.25, 64),
    new THREE.MeshStandardMaterial({ color: 0xC9A96E, metalness: 1, roughness: 0.1 })
  );
  lid.position.y = 0.47;
  group2.add(lid);

  scene.add(group2);
  scene.add(new THREE.AmbientLight(0xfff5ee, 1));
  const dl = new THREE.DirectionalLight(0xC8956C, 2);
  dl.position.set(3, 3, 3);
  scene.add(dl);

  let drag = false, px2 = 0;
  canvas.addEventListener('mousedown', e => { drag = true; px2 = e.clientX; });
  window.addEventListener('mouseup',   () => { drag = false; });
  window.addEventListener('mousemove', e => { if (drag) { group2.rotation.y += (e.clientX - px2) * 0.01; px2 = e.clientX; } });

  let t2 = 0;
  (function loop() {
    requestAnimationFrame(loop);
    t2 += 0.01;
    if (!drag) group2.rotation.y += 0.008;
    group2.position.y = Math.sin(t2) * 0.1;
    renderer.render(scene, cam);
  })();
}

/* ────────────────────────────────────────────
   RENDER PRODUCTS
──────────────────────────────────────────── */
function renderProducts() {
  const grid = document.getElementById('productsGrid');
  grid.innerHTML = '';

  products.forEach(p => {
    const card = document.createElement('div');
    card.className = 'product-card';

    let badgeHTML = '';
    if (p.badge) {
      const cls = p.badge === 'new' ? 'new' : p.badge === 'sale' ? 'sold' : '';
      badgeHTML = `<div class="product-badge ${cls}">${p.badge}</div>`;
    }
card.innerHTML = `
  <div class="product-img-wrap">
    <div class="product-image">
     <img src="${p.images && p.images.length ? p.images[0] : p.image}" alt="${p.name}">
    </div>
        ${badgeHTML}
        <div class="product-actions">
          <div class="action-btn" onclick="addToCart(${p.id}, event)" title="Add to Bag">
            <svg width="14" height="14" fill="none" stroke="#8B7355" stroke-width="1.5" viewBox="0 0 24 24">
              <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4zM3 6h18M16 10a4 4 0 01-8 0"/>
            </svg>
          </div>
          <div class="action-btn" onclick="showToast('♡ Added to wishlist')">
            <svg width="14" height="14" fill="none" stroke="#8B7355" stroke-width="1.5" viewBox="0 0 24 24">
              <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/>
            </svg>
          </div>
        </div>
        <div class="product-quick" onclick="openProduct(${p.id})">Quick View</div>
      </div>
      <div class="product-info">
        <div class="product-brand">${p.brand}</div>
        <div class="product-name">${p.name}</div>
        <div class="product-price">
          <span class="price-current">₹${p.price.toLocaleString()}</span>
          <span class="price-original">₹${p.original.toLocaleString()}</span>
          <span class="price-off">-${p.discount}%</span>
        </div>
        <div style="display:flex;align-items:center">
          <div class="product-stars">${'★'.repeat(Math.floor(p.rating))}${p.rating % 1 ? '☆' : ''}</div>
          <span class="rating-count">(${p.reviews})</span>
        </div>
        <button class="add-to-cart" onclick="addToCart(${p.id}, event)"><span>Add to Bag</span></button>
      </div>
    `;

    /* 3D tilt effect */
    card.addEventListener('mousemove', e => {
      const r = card.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width  - 0.5;
      const y = (e.clientY - r.top)  / r.height - 0.5;
      card.style.transform = `translateY(-10px) rotateX(${-y * 8}deg) rotateY(${x * 8}deg)`;
    });
    card.addEventListener('mouseleave', () => { card.style.transform = ''; });

    grid.appendChild(card);
  });
}

function filterCategory(cat) {
  showToast(`Showing ${cat} products`);
  scrollToSection('shop');
}

function loadMoreProducts() {
  showToast('All products are loaded');
}

/* ────────────────────────────────────────────
   RENDER REVIEWS
──────────────────────────────────────────── */
function renderReviews() {
  const grid = document.getElementById('reviewsGrid');
  grid.innerHTML = '';

  reviewsData.forEach(r => {
    const card = document.createElement('div');
    card.className = 'review-card';
    card.innerHTML = `
      <div class="reviewer-info">
        <div class="reviewer-avatar">${r.name[0]}</div>
        <div>
          <div class="reviewer-name">${r.name}</div>
          <div class="verified-badge">✓ Verified Purchase</div>
        </div>
        <div style="margin-left:auto;color:var(--gold)">${'★'.repeat(r.rating)}</div>
      </div>
      <div class="review-text">${r.text}</div>
      <div class="review-helpful">
        Helpful?
        <button class="helpful-btn" onclick="this.textContent='✓ Thanks!'">👍 ${r.helpful}</button>
      </div>
    `;
    grid.appendChild(card);
  });
}

/* ────────────────────────────────────────────
   PRODUCT MODAL
──────────────────────────────────────────── */
function openProduct(id) {
  currentProduct = products.find(p => p.id === id);
  if (!currentProduct) return;
  const p = currentProduct;

  document.getElementById('modalBrand').textContent    = p.brand;
  document.getElementById('modalName').textContent     = p.name;
  document.getElementById('modalPrice').textContent    = '₹' + p.price.toLocaleString();
  document.getElementById('modalOrig').textContent     = '₹' + p.original.toLocaleString();
  document.getElementById('modalDiscount').textContent = '-' + p.discount + '%';
  document.getElementById('modalDesc').textContent     = p.desc;
  document.getElementById('modalQty').value            = 1;

/* hero image */
document.getElementById('modalMainImg').innerHTML =
  `<img src="${p.images[0]}" 
        id="mainProductImg"
        alt="${p.name}" 
        style="width:100%;height:100%;object-fit:cover;">`;

/* thumbnails */
const thumbsEl = document.getElementById('modalThumbs');
thumbsEl.innerHTML = '';

p.images.forEach((img, index) => {
  const t = document.createElement('div');
  t.className = 'thumb' + (index === 0 ? ' active' : '');

  t.innerHTML = `
    <img src="${img}" 
         style="width:100%;height:100%;object-fit:cover;">
  `;

  t.onclick = () => {
    document.querySelectorAll('.thumb')
      .forEach(x => x.classList.remove('active'));

    t.classList.add('active');

    // Change main image
    document.getElementById('mainProductImg').src = img;
  };

  thumbsEl.appendChild(t);
});

  /* ingredients */
  document.getElementById('modalIngr').innerHTML =
    p.ingredients.map(i => `<span class="ingredient-tag">${i}</span>`).join('');

  /* reset tabs */
  document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
  document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
  document.querySelector('.tab-btn').classList.add('active');
  document.getElementById('tab-desc').classList.add('active');

  /* reset 3D */
  showing3d = false;
  document.getElementById('modal3dCanvas').style.display = 'none';
  document.getElementById('modalMainImg').style.display  = 'flex';

  document.getElementById('productModal').classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  document.getElementById('productModal').classList.remove('active');
  document.body.style.overflow = '';
}

function switchTab(btn, tab) {
  document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
  document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
  btn.classList.add('active');
  document.getElementById('tab-' + tab).classList.add('active');
}

function changeQty(delta) {
  const input = document.getElementById('modalQty');
  input.value = Math.max(1, parseInt(input.value) + delta);
}

function addModalToCart() {
  if (!currentProduct) return;
  const qty      = parseInt(document.getElementById('modalQty').value);
  const existing = cart.find(x => x.id === currentProduct.id);
  if (existing) { existing.qty += qty; }
  else          { cart.push({ ...currentProduct, qty }); }
  saveCart();
  updateCartUI();
  showToast(`${currentProduct.name} added to bag`);
  closeModal();
  openCart();
}

/* ────────────────────────────────────────────
   CART
──────────────────────────────────────────── */
function addToCart(id, e) {
  if (e) e.stopPropagation();
  const p        = products.find(x => x.id === id);
  const existing = cart.find(x => x.id === id);
  if (existing) { existing.qty++; }
  else          { cart.push({ ...p, qty: 1 }); }
  saveCart();
  updateCartUI();
  animateCartFly(e);
  showToast(`${p.name} added to bag`);
}

function removeFromCart(id) {
  cart = cart.filter(x => x.id !== id);
  saveCart();
  updateCartUI();
}

function updateQty(id, delta) {
  const item = cart.find(x => x.id === id);
  if (!item) return;
  item.qty = Math.max(0, item.qty + delta);
  if (item.qty === 0) removeFromCart(id);
  else { saveCart(); updateCartUI(); }
}

function saveCart() {
  try { localStorage.setItem('auraluxe_cart', JSON.stringify(cart)); } catch (e) {}
}

function getTotal() {
  return cart.reduce((s, i) => s + i.price * i.qty, 0);
}

function updateCartUI() {
  const count = cart.reduce((s, i) => s + i.qty, 0);
  document.getElementById('cartCount').textContent = count;

  const total = Math.max(0, getTotal() - discountAmount);
  document.getElementById('cartTotal').textContent = '₹' + total.toLocaleString();

  const body = document.getElementById('cartBody');

  if (cart.length === 0) {
    body.innerHTML = `
      <div class="empty-cart">
        <div class="empty-cart-icon">🛍️</div>
        <p>Your bag is empty.<br>Start adding products!</p>
      </div>`;
    return;
  }

  body.innerHTML = cart.map(item => `
    <div class="cart-item">
      <div class="cart-item-img">
        <img src="${item.images && item.images.length ? item.images[0] : ''}" 
             style="width:100%;height:100%;object-fit:cover;">
      </div>

      <div style="flex:1">
        <div class="cart-item-name">${item.name}</div>
        <div class="cart-item-price">₹${item.price.toLocaleString()}</div>

        <div class="cart-qty">
          <button class="cqty-btn" onclick="updateQty(${item.id}, -1)">−</button>
          <span style="font-size:14px;min-width:20px;text-align:center">${item.qty}</span>
          <button class="cqty-btn" onclick="updateQty(${item.id}, 1)">+</button>
        </div>
      </div>

      <button class="cart-item-remove" onclick="removeFromCart(${item.id})">✕</button>
    </div>
  `).join('');
}

function animateCartFly(e) {
  if (!e || !e.target) return;
  const el   = document.createElement('div');
  el.style.cssText = 'position:fixed;width:12px;height:12px;background:var(--rose);border-radius:50%;z-index:9999;pointer-events:none;transition:all 0.8s cubic-bezier(0.25,0.46,0.45,0.94)';
  const rect = e.target.getBoundingClientRect();
  el.style.left = rect.left + 'px';
  el.style.top  = rect.top  + 'px';
  document.body.appendChild(el);
  setTimeout(() => {
    const cc   = document.querySelector('.cart-count');
    const cr   = cc.getBoundingClientRect();
    el.style.left      = cr.left + 'px';
    el.style.top       = cr.top  + 'px';
    el.style.opacity   = '0';
    el.style.transform = 'scale(0)';
  }, 50);
  setTimeout(() => el.remove(), 900);
}

function applyCoupon() {
  const code = document.getElementById('couponInput').value.trim().toUpperCase();
  const base = getTotal();
  if      (code === 'LUXE20')  { discountAmount = Math.round(base * 0.20); showToast('🎉 20% discount applied!'); }
  else if (code === 'FIRST10') { discountAmount = Math.round(base * 0.10); showToast('🎉 10% discount applied!'); }
  else { showToast('Invalid coupon code'); return; }
  updateCartUI();
}

function openCart() {
  document.getElementById('cartDrawer').classList.add('open');
  document.getElementById('cartOverlay').classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeCart() {
  document.getElementById('cartDrawer').classList.remove('open');
  document.getElementById('cartOverlay').classList.remove('active');
  document.body.style.overflow = '';
}

/* ────────────────────────────────────────────
   CHECKOUT
──────────────────────────────────────────── */
function goToCheckout() {
  if (cart.length === 0) { showToast('Add products to your bag first!'); return; }
  closeCart();
  scrollToSection('checkoutSection');
  updateCheckoutSummary();
}

function selectDelivery(el, type) {
  document.querySelectorAll('.delivery-opt').forEach(d => d.classList.remove('selected'));
  el.classList.add('selected');
  deliveryType = type;
  updateCheckoutSummary();
}

function selectPayment(el) {
  document.querySelectorAll('.pay-method').forEach(d => d.classList.remove('selected'));
  el.classList.add('selected');
  document.getElementById('cardFields').style.display =
    el.textContent.includes('Card') ? 'block' : 'none';
}

function updateCheckoutSummary() {
  const subtotal = Math.max(0, getTotal() - discountAmount);
  const delivery = deliveryType === 'express' ? 149 : 0;
  const tax      = Math.round(subtotal * 0.18);
  const total    = subtotal + delivery + tax;

  document.getElementById('checkoutSubtotal').textContent = '₹' + subtotal.toLocaleString();
  document.getElementById('deliveryFee').textContent      = delivery === 0 ? 'Free' : '₹' + delivery;
  document.getElementById('checkoutTax').textContent      = '₹' + tax.toLocaleString();
  document.getElementById('checkoutTotal').textContent    = '₹' + total.toLocaleString();

  document.getElementById('checkoutItems').innerHTML = cart.map(i => `
    <div class="order-row" style="margin-bottom:10px">
      <span>${i.emoji} ${i.name} × ${i.qty}</span>
      <span>₹${(i.price * i.qty).toLocaleString()}</span>
    </div>
  `).join('');
}

function placeOrder() {
  const firstName = document.getElementById('firstName').value.trim();

  if (!firstName) {
    showToast('Please enter your first name');
    return;
  }

  if (cart.length === 0) {
    showToast('Your cart is empty!');
    return;
  }

  // Show order option modal
  document.getElementById('orderOptionModal').classList.add('active');
}
/* ────────────────────────────────────────────
   INVOICE
──────────────────────────────────────────── */
function showInvoice() {
  const invNum = 'INV-' + Date.now().toString().slice(-6);
  document.getElementById('invoiceNum').textContent  = invNum;
  document.getElementById('invoiceDate').textContent = new Date().toLocaleDateString('en-IN', { day: '2-digit', month: 'long', year: 'numeric' });

  const firstName = document.getElementById('firstName').value || 'Customer';
  const lastName  = document.getElementById('lastName').value  || '';
  const email     = document.getElementById('email').value     || '';
  const phone     = document.getElementById('phone').value     || '';
  const address   = document.getElementById('address').value   || '';
  const city      = document.getElementById('city').value      || '';
  const pin       = document.getElementById('pincode').value   || '';

  document.getElementById('invoiceCustomer').innerHTML = `<strong>${firstName} ${lastName}</strong><br>${email}<br>${phone}`;
  document.getElementById('invoiceAddress').innerHTML  = `${address}<br>${city} – ${pin}`;

  const subtotal = Math.max(0, getTotal() - discountAmount);
  const delivery = deliveryType === 'express' ? 149 : 0;
  const tax      = Math.round(subtotal * 0.18);
  const total    = subtotal + delivery + tax;

  document.getElementById('invoiceItems').innerHTML = cart.map(i => `
    <tr>
      <td>${i.emoji} ${i.name}</td>
      <td>${i.qty}</td>
      <td>₹${i.price.toLocaleString()}</td>
      <td>₹${(i.price * i.qty).toLocaleString()}</td>
    </tr>
  `).join('');

  document.getElementById('invSubtotal').textContent = '₹' + subtotal.toLocaleString();
  document.getElementById('invDelivery').textContent = delivery === 0 ? 'Free' : '₹' + delivery;
  document.getElementById('invTax').textContent      = '₹' + tax.toLocaleString();
  document.getElementById('invTotal').textContent    = '₹' + total.toLocaleString();

  document.getElementById('invoiceModal').classList.add('active');
}

function closeInvoice() {
  document.getElementById('invoiceModal').classList.remove('active');
  cart           = [];
  discountAmount = 0;
  saveCart();
  updateCartUI();
  showToast('🎉 Order placed successfully! Thank you.');
  scrollToSection('home');
}

function downloadInvoice() {
  window.print();
  showToast('Preparing invoice for download…');
}

/* ────────────────────────────────────────────
   ADMIN PANEL
──────────────────────────────────────────── */
function showAdmin() {
  document.getElementById('adminPanel').classList.add('active');
  scrollToSection('adminPanel');
}

function adminNav(el, section) {
  document.querySelectorAll('.admin-nav-item').forEach(i => i.classList.remove('active'));
  el.classList.add('active');
  const content = document.getElementById('adminContent');

  if (section === 'overview') {
    content.innerHTML = `
      <div class="admin-title">Dashboard Overview</div>
      <div class="stats-grid">
        <div class="stat-card"><div class="stat-label">Total Revenue</div><div class="stat-value">₹4.2L</div><div class="stat-change">↑ 24% this month</div></div>
        <div class="stat-card"><div class="stat-label">Orders</div><div class="stat-value">1,248</div><div class="stat-change">↑ 18% this month</div></div>
        <div class="stat-card"><div class="stat-label">Products</div><div class="stat-value">130</div><div class="stat-change">↑ 6 new this week</div></div>
        <div class="stat-card"><div class="stat-label">Customers</div><div class="stat-value">8,490</div><div class="stat-change">↑ 412 new</div></div>
      </div>
      <div style="margin-bottom:8px;font-size:10px;letter-spacing:3px;text-transform:uppercase;color:var(--text-light)">Monthly Sales</div>
      <div class="chart-placeholder" id="adminChart"></div>`;
    renderAdminChart();

  } else if (section === 'products') {
    content.innerHTML = `
      <div class="admin-title">Manage Products</div>
      <button class="btn-primary" style="border:none;cursor:none;font-family:'Jost',sans-serif;margin-bottom:24px" onclick="showToast('Add product form — connect to your backend')">+ Add Product</button>
      <table class="admin-table">
        <thead><tr><th>Product</th><th>Category</th><th>Price</th><th>Stock</th><th>Actions</th></tr></thead>
        <tbody>${products.map(p => `
          <tr>
            <td>${p.emoji} ${p.name}</td>
            <td>${p.category}</td>
            <td>₹${p.price.toLocaleString()}</td>
            <td><span class="status-badge delivered">In Stock</span></td>
            <td><button onclick="showToast('Edit product — connect to your backend')"
              style="background:transparent;border:1px solid var(--glass-border);padding:6px 14px;cursor:none;font-size:11px;transition:all 0.2s"
              onmouseover="this.style.background='var(--rose)';this.style.color='white'"
              onmouseout="this.style.background='transparent';this.style.color='inherit'">Edit</button></td>
          </tr>`).join('')}
        </tbody>
      </table>`;

  } else if (section === 'orders') {
    content.innerHTML = `
      <div class="admin-title">Order Management</div>
      <table class="admin-table">
        <thead><tr><th>Order ID</th><th>Customer</th><th>Product</th><th>Amount</th><th>Status</th></tr></thead>
        <tbody id="adminOrders"></tbody>
      </table>`;
    renderAdminOrders();

  } else if (section === 'reports') {
    content.innerHTML = `
      <div class="admin-title">Reports & Analytics</div>
      <div class="stats-grid">
        <div class="stat-card"><div class="stat-label">Avg Order Value</div><div class="stat-value">₹3,360</div><div class="stat-change">↑ 12%</div></div>
        <div class="stat-card"><div class="stat-label">Conversion Rate</div><div class="stat-value">4.2%</div><div class="stat-change">↑ 0.8%</div></div>
        <div class="stat-card"><div class="stat-label">Return Rate</div><div class="stat-value">2.1%</div><div class="stat-change">↓ 0.3%</div></div>
        <div class="stat-card"><div class="stat-label">Customer LTV</div><div class="stat-value">₹18,400</div><div class="stat-change">↑ 31%</div></div>
      </div>
      <div style="padding:40px;text-align:center;border:1px solid rgba(200,149,108,0.1);color:var(--text-light)">
        Connect backend to view full analytics charts
      </div>`;

  } else {
    content.innerHTML = `
      <div class="admin-title">${el.textContent.trim()}</div>
      <div style="padding:40px;text-align:center;border:1px dashed rgba(200,149,108,0.2);color:var(--text-light)">
        Connect to your backend database to manage ${section}
      </div>`;
  }
}

function renderAdminChart() {
  const chart = document.getElementById('adminChart');
  if (!chart) return;
  const data   = [45, 62, 38, 75, 55, 88, 72, 95, 68, 82, 90, 110];
  const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  const max    = Math.max(...data);
  chart.innerHTML = data.map((v, i) => `
    <div style="flex:1;display:flex;flex-direction:column;align-items:center;position:relative;height:100%">
      <div style="position:absolute;bottom:24px;width:100%;display:flex;justify-content:center">
        <div style="background:linear-gradient(180deg,var(--rose),var(--rose-deep));width:70%;height:${(v / max) * 160}px;border-radius:2px 2px 0 0;transition:height 0.5s ease"></div>
      </div>
      <div style="position:absolute;bottom:0;font-size:9px;color:var(--text-light);letter-spacing:1px">${months[i]}</div>
    </div>
  `).join('');
}

function renderAdminOrders() {
  const tbody = document.getElementById('adminOrders');
  if (!tbody) return;
  const statuses = ['delivered', 'processing', 'shipped'];
  const sNames   = ['Delivered', 'Processing', 'Shipped'];
  const data = [
    { id: '#4821', cust: 'Priya M.',  prod: 'Vitamin C Serum',  amt: '₹2,499' },
    { id: '#4820', cust: 'Ananya R.', prod: 'Overnight Mask',   amt: '₹3,299' },
    { id: '#4819', cust: 'Kavita S.', prod: 'Foundation SPF30', amt: '₹1,899' },
    { id: '#4818', cust: 'Meera T.',  prod: 'Midnight Oud EDP', amt: '₹5,999' },
    { id: '#4817', cust: 'Deepa K.',  prod: 'Gold Eye Cream',   amt: '₹2,199' }
  ];
  tbody.innerHTML = data.map((o, i) => `
    <tr>
      <td style="font-family:'Cormorant Garamond',serif;font-size:15px">${o.id}</td>
      <td>${o.cust}</td>
      <td>${o.prod}</td>
      <td>${o.amt}</td>
      <td><span class="status-badge ${statuses[i % 3]}">${sNames[i % 3]}</span></td>
    </tr>
  `).join('');
}

/* ────────────────────────────────────────────
   CUSTOM CURSOR
──────────────────────────────────────────── */
function initCursor() {
  const cursor = document.getElementById('cursor');
  const ring   = document.getElementById('cursorRing');
  let mx = 0, my = 0, rx = 0, ry = 0;

  document.addEventListener('mousemove', e => {
    mx = e.clientX; my = e.clientY;
    cursor.style.left = mx - 6 + 'px';
    cursor.style.top  = my - 6 + 'px';
  });

  (function animRing() {
    rx += (mx - rx - 18) * 0.12;
    ry += (my - ry - 18) * 0.12;
    ring.style.left = rx + 'px';
    ring.style.top  = ry + 'px';
    requestAnimationFrame(animRing);
  })();

  document.querySelectorAll('button, a, [onclick]').forEach(el => {
    el.addEventListener('mouseenter', () => { cursor.style.transform = 'scale(2)';   ring.style.transform = 'scale(1.5)'; });
    el.addEventListener('mouseleave', () => { cursor.style.transform = 'scale(1)';   ring.style.transform = 'scale(1)';   });
  });
}

/* ────────────────────────────────────────────
   SCROLL REVEAL
──────────────────────────────────────────── */
function initScrollReveal() {
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
  }, { threshold: 0.1 });
  document.querySelectorAll('.reveal').forEach(el => obs.observe(el));
}

/* ────────────────────────────────────────────
   UTILITIES
──────────────────────────────────────────── */
function scrollToSection(id) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  if (id === 'checkoutSection') document.getElementById('checkoutSection').classList.add('active');
}

function showToast(msg) {
  const toast = document.getElementById('toast');
  document.getElementById('toastMsg').textContent = msg;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 3000);
}
function orderViaWhatsApp() {

  if (cart.length === 0) {
    showToast("Your cart is empty!");
    return;
  }

  const firstName = document.getElementById('firstName').value || '';
  const lastName  = document.getElementById('lastName').value || '';
  const phone     = document.getElementById('phone').value || '';
  const address   = document.getElementById('address').value || '';
  const city      = document.getElementById('city').value || '';
  const pin       = document.getElementById('pincode').value || '';

  const subtotal = Math.max(0, getTotal() - discountAmount);
  const delivery = deliveryType === 'express' ? 149 : 0;
  const tax      = Math.round(subtotal * 0.18);
  const total    = subtotal + delivery + tax;

  const orderId = "ALX" + Date.now().toString().slice(-6);

  let message = `✨ *Luméra Cosmetics — PREMIUM ORDER* ✨\n`;
  message += `━━━━━━━━━━━━━━━━━━━\n`;
  message += `🧾 Order ID: ${orderId}\n`;
  message += `📅 Date: ${new Date().toLocaleDateString('en-IN')}\n\n`;

  message += `👤 Customer Details\n`;
  message += `Name: ${firstName} ${lastName}\n`;
  message += `Phone: ${phone}\n`;
  message += `Address: ${address}\n`;
  message += `${city} - ${pin}\n\n`;

  message += `🛍️ Ordered Items\n`;
  message += `━━━━━━━━━━━━━━━━━━━\n`;

  cart.forEach(item => {
    message += `▪ ${item.name}\n`;
    message += `   Qty: ${item.qty}\n`;
    message += `   Subtotal: ₹${(item.price * item.qty).toLocaleString()}\n\n`;
  });

  message += `━━━━━━━━━━━━━━━━━━━\n`;
  message += `💰 Payment Summary\n`;
  message += `Subtotal: ₹${subtotal.toLocaleString()}\n`;
  message += `Delivery: ${delivery === 0 ? 'Free' : '₹' + delivery}\n`;
  message += `Tax (18% GST): ₹${tax.toLocaleString()}\n`;
  message += `━━━━━━━━━━━━━━━━━━━\n`;
  message += `🔴 Grand Total: ₹${total.toLocaleString()}\n`;
  message += `━━━━━━━━━━━━━━━━━━━\n`;
  message += `Thank you for shopping with Luméra Cosmetics 💖`;

  const whatsappNumber = "919526226011"; // your number
  const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  window.open(url, "_blank");

  document.getElementById('orderOptionModal').classList.remove('active');
}
function generateInvoice() {

  if (cart.length === 0) {
    showToast("Your cart is empty!");
    return;
  }

  document.getElementById('orderOptionModal').classList.remove('active');

  showInvoice();
}
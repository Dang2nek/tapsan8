// Engine dùng chung cho trang xem (index.html) và trang chỉnh sửa (admin.html)
const defCredit = 'Ảnh minh hoạ mặc định. Hãy thay bằng ảnh của bạn và ghi rõ nguồn.';
function ph(a, b, e) {
  const s = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300"><defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="${a}"/><stop offset="1" stop-color="${b}"/></linearGradient></defs><rect width="400" height="300" fill="url(#g)"/><circle cx="330" cy="60" r="90" fill="#fff2"/><circle cx="60" cy="270" r="110" fill="#0001"/><text x="200" y="185" font-size="110" text-anchor="middle">${e}</text></svg>`;
  return 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(s);
}
const DI = { i1: ph('#f6c453', '#e0733a', '📚'), i2: ph('#f29cb0', '#b3262e', '🌸'), i3: ph('#7fc8a9', '#2f6f73', '🏫'), i4: ph('#8fb4f0', '#4a5fb0', '✏️') };
const T = (x, y, w, h, k, o = {}) => ({ t: 't', x, y, w, k, h, a: 'up', ...o });
const I = (x, y, w, id, cap, o = {}) => ({ t: 'i', x, y, w, id, cap, a: 'zoom', ...o });
const D = () => [
  { cls: 'cover', items: [T(10, 12, 80, '🌸', 'p', { s: 2.4, al: 'center', a: 'bounce' }), T(10, 24, 80, 'Số đặc biệt', 's', { c: '#f6d98a', al: 'center' }), T(10, 31, 80, '20/11', 'big', { al: 'center', a: 'zoom' }), T(10, 50, 80, 'Tri ân thầy cô', 'h', { c: '#fff', al: 'center' }), T(10, 62, 80, 'Tập san lớp 12A1 · Năm học 2026–2027', 'p', { c: '#fbeed2', al: 'center', s: .9 })] },
  { cls: 'inside', items: [T(10, 28, 80, 'Gửi thầy cô,', 's', { al: 'center' }), T(12, 38, 76, '“Người thầy trung bình chỉ biết nói. Người thầy giỏi biết giải thích. Người thầy xuất sắc biết truyền cảm hứng.”', 'q', { al: 'center' })] },
  { cls: '', items: [T(8, 7, 84, 'Lời ngỏ', 'h'), T(8, 18, 84, 'Thầy cô kính mến,', 'p'), T(8, 24, 84, 'Mỗi dịp 20/11 về, chúng em lại nhớ những buổi sáng thầy cô đứng lớp khi trời còn se lạnh, những trang vở được sửa từng nét bút đỏ.', 'p'), T(8, 46, 84, 'Cuốn tập san này gom lại lời cảm ơn, kỷ niệm và sáng tác của cả lớp.', 'p', { a: 'fade' }), T(8, 76, 84, 'Ban biên tập', 's', { al: 'right' })] },
  { cls: '', items: [T(8, 7, 84, 'Thư tri ân', 'h'), T(8, 18, 84, 'Gửi cô chủ nhiệm,', 'p'), T(8, 25, 84, 'Cô không chỉ dạy kiến thức, cô còn dạy chúng em cách đứng dậy sau mỗi lần vấp ngã. Cảm ơn cô đã tin chúng em, ngay cả khi chính chúng em chưa tin mình.', 'p'), T(8, 77, 84, 'Học trò của cô', 's', { al: 'right' })] },
  { cls: '', items: [T(8, 7, 84, 'Kỷ niệm lớp mình', 'h'), I(11, 18, 78, 'i1', 'Một buổi học nhóm cuối tuần', { r: -2 }), T(8, 67, 84, 'Nhớ nhất là hôm cả lớp ở lại trường tập văn nghệ, thầy cô mang bánh mì và nước cam vào cho tụi em.', 'p', { s: .95 })] },
  { cls: '', items: [T(8, 7, 84, 'Sáng tác', 'h'), T(8, 17, 84, 'Cô giáo của em', 'h3', { al: 'center' }), T(8, 24, 84, 'Sáng nay cô đến sớm<br>Phấn trắng bay nhẹ nhàng<br>Từng dòng chữ cô viết<br>Là cả một trời xanh.<br><br>Mai này em khôn lớn<br>Đi khắp bốn phương trời<br>Vẫn nhớ nụ cười cô<br>Ấm như nắng ban mai.', 'poem', { al: 'center', s: .92 })] },
  { cls: '', items: [T(8, 7, 84, 'Khoảnh khắc', 'h'), I(8, 18, 62, 'i3', 'Sân trường mùa thu', { r: -3, a: 'left' }), I(30, 54, 62, 'i4', 'Buổi học cuối năm', { r: 3, a: 'right' })] },
  { cls: '', items: [T(8, 7, 84, 'Góc vui', 'h'), T(8, 19, 84, '<b>Thầy cô nói:</b> “Cả lớp im lặng nào!”<br><b>Cả lớp:</b> (im lặng 3 giây rồi lại rôm rả như cũ)', 'joke', { a: 'left' }), T(8, 41, 84, '<b>Câu đố:</b> Cái gì thầy cô chấm hoài không hết, học trò nhìn là run?<br><i>Đáp án: Bài kiểm tra!</i>', 'joke', { a: 'right' })] },
  { cls: '', items: [T(8, 7, 84, 'Lời kết', 'h'), T(8, 19, 84, 'Cảm ơn thầy cô đã đồng hành cùng chúng em. Dù mai sau đi đâu, chúng em vẫn luôn là học trò của thầy cô.', 'p'), T(8, 46, 84, 'Chúc mừng ngày Nhà giáo Việt Nam 20/11!', 's', { al: 'center', s: 1.25, a: 'zoom' }), T(8, 66, 84, '💐', 'p', { al: 'center', s: 2.2, a: 'float' })] },
  { cls: 'cover backc', items: [T(10, 28, 80, '📖', 'p', { s: 2.4, al: 'center', a: 'bounce' }), T(10, 42, 80, 'Xin cảm ơn', 'h', { c: '#fff', al: 'center' }), T(10, 54, 80, 'Tập san do tập thể lớp thực hiện<br>Hà Nội · 11/2026', 'p', { c: '#fbeed2', al: 'center', s: .9 })] }
];
export const defaultData = () => ({ pages: D(), c: '#b3262e', f: null });

export function initBook({ data, editable = false, onChange = () => {}, upload = null }) {
  const nul = document.createElement('div'), $ = id => document.getElementById(id) || nul;
  let S = data, cur = 0, N = 0, faces = [], sheets = [], sel = null, editing = editable, drag = null, moved = false, edIt = null, newSrc = null;
  const book = $('book'), save = () => onChange(S), pi = it => S.pages.findIndex(p => p.items.includes(it));
  const toast = (m, ms = 2500) => { let t = document.getElementById('toast'); if (!t) { t = document.createElement('div'); t.id = 'toast'; document.body.appendChild(t) } t.textContent = m; t.style.display = 'block'; clearTimeout(t._t); if (ms) t._t = setTimeout(() => t.style.display = 'none', ms) };
  const hideToast = () => { const t = document.getElementById('toast'); if (t) t.style.display = 'none' };

  function mk(it, k) {
    const d = document.createElement('div'); d.className = 'item' + (it === sel ? ' sel' : ''); d.dataset.a = it.a || 'none'; d._it = it;
    d.style.cssText = `left:${it.x}%;top:${it.y}%;width:${it.w}%;font-size:calc(var(--pw)/24*${it.s || 1});animation-delay:${.35 + k * .12}s`;
    const n = document.createElement('div'); n.className = 'in'; n.style.transform = `rotate(${it.r || 0}deg)`;
    if (it.t === 't') {
      n.innerHTML = `<div class="tx k-${it.k}" style="${it.c ? 'color:' + it.c + ';' : ''}${it.al ? 'text-align:' + it.al : ''}"></div>`;
      const tx = n.firstChild; tx.innerHTML = it.h; tx.contentEditable = editing; tx.oninput = () => { it.h = tx.innerHTML; save() };
    } else {
      n.innerHTML = '<figure class="ph"><img alt=""><span class="bd">ⓘ Nguồn</span><figcaption></figcaption></figure>';
      const im = n.querySelector('img'); im.src = it.src || DI[it.id] || DI.i1; im.draggable = false;
      const fc = n.querySelector('figcaption'); fc.textContent = it.cap || ''; fc.contentEditable = editing; fc.oninput = () => { it.cap = fc.textContent; save() };
    }
    d.appendChild(n); d.insertAdjacentHTML('beforeend', '<i class="mv">✥</i><i class="rs">◢</i>'); return d;
  }
  const fill = p => { const l = faces[p].querySelector('.layer'); l.innerHTML = ''; S.pages[p].items.forEach((it, k) => l.appendChild(mk(it, k))) };
  function build() {
    book.innerHTML = ''; faces = []; N = S.pages.length / 2;
    for (let s = 0; s < N; s++) {
      const sh = document.createElement('div'); sh.className = 'sheet';
      [0, 1].forEach(j => { const p = 2 * s + j, f = document.createElement('div'); f.className = 'face ' + (j ? 'back ' : 'front ') + (S.pages[p].cls || ''); f.innerHTML = '<div class="layer"></div>' + (S.pages[p].cls ? '' : `<div class="pn">— ${p} —</div>`); sh.appendChild(f); faces[p] = f; fill(p) });
      book.appendChild(sh);
    }
    sheets = [...book.children]; sheets.forEach((s, i) => { s.classList.toggle('flipped', i < cur); s.style.zIndex = i < cur ? i + 1 : N - i }); update();
  }
  const vis = () => cur === 0 ? [0] : cur === N ? [2 * N - 1] : [2 * cur - 1, 2 * cur];
  function playVis() { const v = vis(); faces.forEach((f, p) => f.querySelectorAll('.item').forEach(d => { if (v.includes(p)) setTimeout(() => d.classList.add('play'), 30); else d.classList.remove('play') })) }
  function update() {
    sheets.forEach((s, i) => { const fl = i < cur; if (fl !== s.classList.contains('flipped')) { s.classList.toggle('flipped', fl); s.style.zIndex = 100; s.classList.add('turning'); setTimeout(() => s.classList.remove('turning'), 1050); setTimeout(() => { s.style.zIndex = fl ? i + 1 : N - i }, 520) } });
    book.className = 'book' + (cur === 0 ? '' : cur === N ? ' end' : ' mid');
    $('ind').textContent = cur === 0 ? 'Bìa' : cur === N ? 'Bìa sau' : `Trang ${2 * cur - 1}–${2 * cur}`; playVis();
  }
  const go = n => { cur = Math.max(0, Math.min(N, n)); update() };
  $('next').onclick = () => go(cur + 1); $('prev').onclick = () => go(cur - 1);
  document.addEventListener('keydown', e => { if (document.querySelector('.modal.on') || e.target.isContentEditable || /INPUT|SELECT/.test(e.target.tagName)) return; if (e.key === 'ArrowRight') go(cur + 1); if (e.key === 'ArrowLeft') go(cur - 1) });

  // ---- Lướt để lật trang (kéo bằng chuột hoặc ngón tay, trang đi theo tay) ----
  function select(it) {
    sel = it; document.querySelectorAll('.item').forEach(d => d.classList.toggle('sel', d._it === it));
    $('sel').style.display = it && editing ? 'flex' : 'none'; if (!it) return;
    const tx = it.t === 't'; ['sk', 'sm', 'sp', 'scl'].forEach(id => $(id).style.display = tx ? '' : 'none'); $('ssrc').style.display = tx ? 'none' : '';
    $('sa').value = it.a || 'none'; $('sr').value = it.r || 0; if (tx) { $('sk').value = it.k; $('sc').value = /^#[0-9a-f]{6}$/i.test(it.c || '') ? it.c : '#2b2118' }
  }
  book.addEventListener('pointerdown', e => {
    if (editing) {
      const d = e.target.closest('.item'); if (!d) { select(null); return }
      const it = d._it; if (sel !== it) select(it);
      const h = e.target.closest('.mv,.rs'); if (!h && it.t !== 'i') return; e.preventDefault();
      const f = d.closest('.face'), W = f.offsetWidth, H = f.offsetHeight, x0 = e.clientX, y0 = e.clientY, ox = it.x, oy = it.y, ow = it.w, rs = h && h.classList.contains('rs');
      const mv = ev => { const dx = (ev.clientX - x0) / W * 100, dy = (ev.clientY - y0) / H * 100; if (rs) { it.w = Math.max(8, Math.min(100, ow + dx)); d.style.width = it.w + '%' } else { it.x = ox + dx; it.y = oy + dy; d.style.left = it.x + '%'; d.style.top = it.y + '%' } };
      window.addEventListener('pointermove', mv); window.addEventListener('pointerup', () => { window.removeEventListener('pointermove', mv); save() }, { once: true }); return;
    }
    const sh = e.target.closest('.sheet'), i = sheets.indexOf(sh); if (i !== cur && i !== cur - 1) return;
    drag = { sh, i, next: i === cur, x0: e.clientX, p: 0 }; moved = false;
  });
  window.addEventListener('pointermove', e => {
    if (!drag) return; const dx = e.clientX - drag.x0; if (Math.abs(dx) > 8) moved = true; if (!moved) return;
    const W = book.offsetWidth / 2 * 1.3, p = Math.max(0, Math.min(1, (drag.next ? -dx : dx) / W)); drag.p = p;
    drag.sh.style.transition = 'none'; drag.sh.style.zIndex = 100; drag.sh.style.transform = `rotateY(${drag.next ? -180 * p : -180 + 180 * p}deg)`;
  });
  window.addEventListener('pointerup', () => {
    if (!drag) return; const d = drag; drag = null; d.sh.style.transition = ''; d.sh.style.transform = '';
    if (!moved) return;
    if (d.p > .3) go(d.next ? cur + 1 : cur - 1); else setTimeout(() => { d.sh.style.zIndex = d.i < cur ? d.i + 1 : N - d.i }, 520);
    window._noClick = true; setTimeout(() => window._noClick = false, 60);
  });
  window.addEventListener('pointercancel', () => { if (drag) { drag.sh.style.transition = ''; drag.sh.style.transform = ''; drag = null } });
  book.addEventListener('click', e => {
    if (editing || window._noClick) return;
    const f = e.target.closest('figure.ph');
    if (f) {
      const it = f.closest('.item')._it; $('lbi').src = it.src || DI[it.id] || DI.i1;
      const u = it.u && /^https?:\/\//.test(it.u) ? `<br><a href="${it.u.replace(/"/g, '')}" target="_blank" rel="noopener">${it.u.replace(/</g, '')}</a>` : '';
      $('lbs').innerHTML = `<b>Nguồn ảnh:</b> ${(it.cr || defCredit).replace(/</g, '&lt;')}${u}`; $('lb').classList.add('on'); return;
    }
    const i = sheets.indexOf(e.target.closest('.sheet')); if (i >= 0) go(i < cur ? i : i + 1);
  });
  document.addEventListener('click', e => { if (e.target.matches('[data-close]') || e.target.classList.contains('modal') && e.target.id !== 'login') document.querySelectorAll('.modal:not(#login)').forEach(m => m.classList.remove('on')) });

  // ---- Công cụ chỉnh sửa (chỉ hoạt động khi trang có thanh công cụ, tức admin.html) ----
  const refresh = it => fill(pi(it));
  $('sk').onchange = e => { sel.k = e.target.value; refresh(sel); save() };
  $('sa').onchange = e => { sel.a = e.target.value; refresh(sel); save(); demo() };
  $('sm').onclick = () => { sel.s = Math.max(.4, +((sel.s || 1) / 1.1).toFixed(2)); refresh(sel); save() };
  $('sp').onclick = () => { sel.s = Math.min(5, +((sel.s || 1) * 1.1).toFixed(2)); refresh(sel); save() };
  $('sc').oninput = e => { sel.c = e.target.value; refresh(sel); save() };
  $('sr').oninput = e => { sel.r = +e.target.value; refresh(sel); save() };
  $('sdel').onclick = () => { const p = pi(sel); S.pages[p].items = S.pages[p].items.filter(x => x !== sel); sel = null; select(null); fill(p); save() };
  function demo() { const d = document.querySelector('.item.sel'); if (!d) return; d.classList.remove('demo', 'play'); void d.offsetWidth; d.classList.add('demo'); setTimeout(() => d.classList.remove('demo'), 3500) }
  $('spy').onclick = demo;
  const target = () => cur < N ? 2 * cur : 2 * N - 1;
  $('addt').onclick = () => { const p = target(), it = T(15, 40, 70, 'Nhấp để sửa chữ…', 'p'); S.pages[p].items.push(it); sel = it; fill(p); select(it); save() };
  function shrink(file, cb) { const r = new FileReader(); r.onload = () => { const im = new Image(); im.onload = () => { const k = Math.min(1, 1400 / im.width), c = document.createElement('canvas'); c.width = im.width * k; c.height = im.height * k; c.getContext('2d').drawImage(im, 0, 0, c.width, c.height); c.toBlob(cb, 'image/jpeg', .85) }; im.src = r.result }; r.readAsDataURL(file) }
  async function toUrl(blob) { toast('Đang tải ảnh lên…', 0); try { const u = upload ? await upload(blob) : URL.createObjectURL(blob); hideToast(); return u } catch (e) { toast('Tải ảnh lỗi: ' + e.message, 5000); throw e } }
  $('addi').onchange = e => { const f = e.target.files[0]; e.target.value = ''; if (!f) return; shrink(f, async b => { const src = await toUrl(b), p = target(), it = I(20, 30, 60, 'i1', 'Chú thích ảnh', { src, cr: '', u: '' }); S.pages[p].items.push(it); sel = it; fill(p); select(it); save(); openEd(it) }) };
  $('addp').onclick = () => { const np = () => ({ cls: '', items: [T(8, 7, 84, 'Tiêu đề trang mới', 'h'), T(8, 19, 84, 'Nhấp vào đây để viết nội dung…', 'p')] }), old = N; S.pages.splice(S.pages.length - 1, 0, np(), np()); save(); cur = old - 1; build(); setTimeout(() => go(old), 80) };
  $('delp').onclick = () => { if (cur < 1 || cur > N - 2) { alert('Hãy lật tới một trang ở giữa sách rồi xoá. Bìa và tờ cuối không xoá được.'); return } if (!confirm('Xoá tờ giấy đang hiển thị bên phải (gồm cả mặt sau của nó)?')) return; S.pages.splice(2 * cur, 2); sel = null; save(); build() };
  function openEd(it) { edIt = it; newSrc = null; $('edf').value = ''; $('edc').value = it.cr || ''; $('edu').value = it.u || ''; $('ed').classList.add('on') }
  $('ssrc').onclick = () => openEd(sel);
  $('edf').onchange = e => { const f = e.target.files[0]; if (f) shrink(f, async b => { newSrc = await toUrl(b) }) };
  $('eds').onclick = () => { edIt.cr = $('edc').value.trim(); edIt.u = $('edu').value.trim(); if (newSrc) edIt.src = newSrc; refresh(edIt); save(); $('ed').classList.remove('on') };
  function setEditing(on) {
    editing = on; document.body.classList.toggle('editing', on); $('edt').classList.toggle('tg', !on); $('edt').textContent = on ? '👁 Xem thử' : '✎ Quay lại chỉnh sửa';
    document.querySelectorAll('.tx,figcaption').forEach(el => el.contentEditable = on); select(null);
    if (!on) { faces.forEach(f => f.querySelectorAll('.item').forEach(d => d.classList.remove('play'))); playVis() }
  }
  $('edt').onclick = () => setEditing(!editing);
  function theme() { document.documentElement.style.setProperty('--accent', S.c || '#b3262e'); if (S.f) document.documentElement.style.setProperty('--fh', S.f); $('col').value = S.c || '#b3262e'; if (S.f) $('fnt').value = S.f }
  $('col').oninput = e => { S.c = e.target.value; theme(); save() };
  $('fnt').onchange = e => { S.f = e.target.value; theme(); save() };
  $('rst').onclick = () => { if (confirm('Thay toàn bộ nội dung bằng bản mẫu ban đầu?')) { S = defaultData(); cur = 0; sel = null; theme(); build(); save() } };
  theme(); build(); if (editable) setEditing(true);
  return { getData: () => S };
}

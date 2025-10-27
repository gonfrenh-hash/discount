<!-- Markup produk -->
<div class="product" data-unit-price="100000">
  <div>Harga satuan: <strong id="unit-price"></strong></div>

  <label>
    Kuantitas
    <input id="qty" type="number" min="1" value="1" inputmode="numeric">
  </label>

  <div>Total: <strong id="total"></strong></div>
</div>

<script>
(function(){
  const container   = document.querySelector('.product');
  const unitPrice   = Number(container.dataset.unitPrice); // IDR
  const qtyInput    = container.querySelector('#qty');
  const unitEl      = container.querySelector('#unit-price');
  const totalEl     = container.querySelector('#total');

  const fmt = new Intl.NumberFormat('id-ID', { style:'currency', currency:'IDR', maximumFractionDigits:0 });

  function clampQty(v){ return Math.max(1, Math.floor(Number(v)||1)); }

  function render(){
    const qty = clampQty(qtyInput.value);
    qtyInput.value = qty;
    unitEl.textContent  = fmt.format(unitPrice);
    totalEl.textContent = fmt.format(unitPrice * qty);
  }

  qtyInput.addEventListener('input', render);
  render();
})();
</script>

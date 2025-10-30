document.addEventListener('DOMContentLoaded', function() {

  /* --- BASE DE DATOS DE PRODUCTOS --- */
  const productos = [
    // --- Velas ---
    { id: 1, nombre: "Vela Cacao Divino", precio: 12000, tipo: 'vela' },
    { id: 2, nombre: "Vela Brisa de Citrus", precio: 15000, tipo: 'vela' },
    { id: 3, nombre: "Vela Nébula Vainilla", precio: 12000, tipo: 'vela' },
    { id: 4, nombre: "Vela Jardín Secreto (Floral)", precio: 13500, tipo: 'vela' },
    { id: 5, nombre: "Vela Palo Santo Paz", precio: 14000, tipo: 'vela' },
    { id: 6, nombre: "Vela Café Matutino", precio: 13000, tipo: 'vela' },
    { id: 7, nombre: "Vela Sándalo y Coco", precio: 15500, tipo: 'vela' },
    { id: 8, nombre: "Vela Eucalipto Fresco", precio: 13500, tipo: 'vela' },
    { id: 9, nombre: "Vela Higo y Miel", precio: 14200, tipo: 'vela' },
    { id: 10, nombre: "Vela Océano Profundo (Marino)", precio: 14000, tipo: 'vela' },

    // --- Jabones ---
    { id: 11, nombre: "Jabon Lavanda Serena", precio: 6500, tipo: 'jabon' },
    { id: 12, nombre: "Jabon Citrus Glow", precio: 6900, tipo: 'jabon' },
    { id: 13, nombre: "Jabon Carbón Activado Detox", precio: 7500, tipo: 'jabon' },
    { id: 14, nombre: "Jabon Avena y Miel (Exfol.)", precio: 7200, tipo: 'jabon' },
    { id: 15, nombre: "Jabon Rosa Mosqueta", precio: 8200, tipo: 'jabon' },
    { id: 16, nombre: "Jabon Té Verde y Jengibre", precio: 7500, tipo: 'jabon' },
    { id: 17, nombre: "Jabon Verbena Exfoliante", precio: 7900, tipo: 'jabon' },
    { id: 18, nombre: "Jabon Caléndula Suave (Bebés)", precio: 7200, tipo: 'jabon' },
    { id: 19, nombre: "Jabon Almendra Cremosa", precio: 7000, tipo: 'jabon' },
    { id: 20, nombre: "Jabon Lemongrass Energizante", precio: 6800, tipo: 'jabon' },

    // --- Aceites & Esencias  ---
    { id: 21, nombre: "Aceite de Menta Boreal", precio: 9800, tipo: 'aceite' },
    { id: 22, nombre: "Aceite de Naranja Dulce", precio: 10200, tipo: 'aceite' },
    { id: 23, nombre: "Esencia de Lavanda", precio: 10500, tipo: 'esencia' },
    { id: 24, nombre: "Esencia de Sándalo", precio: 11500, tipo: 'esencia' },
    { id: 25, nombre: "Aceite de Eucalipto", precio: 9900, tipo: 'aceite' },
    { id: 26, nombre: "Aceite de Bergamota", precio: 10800, tipo: 'aceite' },
    { id: 27, nombre: "Esencia 'Foco Total' (Menta, Romero)", precio: 13000, tipo: 'esencia' },
    { id: 28, nombre: "Esencia 'Dulces Sueños' (Lavanda, Manzanilla)", precio: 13000, tipo: 'esencia' },
    { id: 29, nombre: "Esencia de Jazmín", precio: 12000, tipo: 'esencia' },
    { id: 30, nombre: "Aceite de Árbol de Té (Tea Tree)", precio: 10500, tipo: 'aceite' },

    // --- Difusores ---
    { id: 31, nombre: "Difusor 'Bosque Claro' (Varillas)", precio: 14500, tipo: 'difusor' },
    { id: 32, nombre: "Difusor 'Alba de Té' (Varillas)", precio: 15200, tipo: 'difusor' },
    { id: 33, nombre: "Brisa Marina (Varillas)", precio: 14800, tipo: 'difusor' },
    { id: 34, nombre: "Verbena y Limón (Varillas)", precio: 14500, tipo: 'difusor' },
    { id: 35, nombre: "Vainilla y Caramelo (Varillas)", precio: 15000, tipo: 'difusor' },
    { id: 36, nombre: "Flores Blancas (Varillas)", precio: 14800, tipo: 'difusor' },
    { id: 37, nombre: "Repuesto Difusor Citrus", precio: 9500, tipo: 'difusor' },
    { id: 38, nombre: "Repuesto Difusor Floral", precio: 9500, tipo: 'difusor' },
    { id: 39, nombre: "Repuesto Difusor Vainilla", precio: 9500, tipo: 'difusor' },
    { id: 40, nombre: "Set Varillas de Bambú (x20)", precio: 2500, tipo: 'difusor' },

    // --- Inciensos  ---
    { id: 41, nombre: "Incienso Sándalo Místico", precio: 3200, tipo: 'incienso' },
    { id: 42, nombre: "Incienso Lavanda Zen", precio: 3500, tipo: 'incienso' },
    { id: 43, nombre: "Incienso Palo Santo (Varillas)", precio: 4000, tipo: 'incienso' },
    { id: 44, nombre: "Incienso Copal Sagrado", precio: 3800, tipo: 'incienso' },
    { id: 45, nombre: "Incienso Mirra Pura", precio: 3800, tipo: 'incienso' },
    { id: 46, nombre: "Incienso Canela y Naranja", precio: 3600, tipo: 'incienso' },
    { id: 47, nombre: "Incienso Romero (Limpieza)", precio: 3500, tipo: 'incienso' },
    { id: 48, nombre: "Incienso Rosas", precio: 3500, tipo: 'incienso' },
    { id: 49, nombre: "Incienso Mix Aromatika (Surtido)", precio: 4200, tipo: 'incienso' },
    { id: 50, nombre: "Porta-incienso de Cerámica", precio: 4500, tipo: 'ceramica' }
  ];

  /* --- Carritos para las Promos --- */
  let carritoTotal = []; 
  let carritoPromo1 = [];
  let carritoPromo2 = [];
  let carritoPromo3 = [];
  let carritoPromo4 = [];
  let carritoPromo5 = []; 

  /* --- Selectores Módulo Total --- */
  const selectTotal = document.getElementById('total-producto');
  const cantidadTotal = document.getElementById('total-cantidad');
  const btnAgregarTotal = document.getElementById('btn-total-agregar');
  const btnCalcularTotal = document.getElementById('btn-total-calcular');
  const btnLimpiarTotal = document.getElementById('btn-total-limpiar');
  const listaCarritoTotal = document.getElementById('cart-list-total')?.querySelector('ul');
  const checkMP = document.getElementById('check-mp');
  const resultadoElTotal = document.getElementById('resultado-total');

  /* --- Selectores Promos Individuales (1-5) --- */
  const selectPromo1 = document.getElementById('promo1-producto');
  const cantidadPromo1 = document.getElementById('promo1-cantidad');
  const btnAgregarPromo1 = document.getElementById('btn-promo1-agregar');
  const btnCalcularPromo1 = document.getElementById('btn-promo1-calcular');
  const btnLimpiarPromo1 = document.getElementById('btn-promo1-limpiar');
  const listaCarritoPromo1 = document.getElementById('cart-list-promo1')?.querySelector('ul');
  const resultadoElPromo1 = document.getElementById('resultado-promo1');
  const selectPromo2 = document.getElementById('promo2-producto');
  const cantidadPromo2 = document.getElementById('promo2-cantidad');
  const btnAgregarPromo2 = document.getElementById('btn-promo2-agregar');
  const btnCalcularPromo2 = document.getElementById('btn-promo2-calcular');
  const btnLimpiarPromo2 = document.getElementById('btn-promo2-limpiar');
  const listaCarritoPromo2 = document.getElementById('cart-list-promo2')?.querySelector('ul');
  const resultadoElPromo2 = document.getElementById('resultado-promo2');
  const selectPromo3 = document.getElementById('promo3-producto');
  const cantidadPromo3 = document.getElementById('promo3-cantidad');
  const btnAgregarPromo3 = document.getElementById('btn-promo3-agregar');
  const btnCalcularPromo3 = document.getElementById('btn-promo3-calcular');
  const btnLimpiarPromo3 = document.getElementById('btn-promo3-limpiar');
  const listaCarritoPromo3 = document.getElementById('cart-list-promo3')?.querySelector('ul');
  const resultadoElPromo3 = document.getElementById('resultado-promo3');
  const selectPromo4 = document.getElementById('promo4-producto');
  const cantidadPromo4 = document.getElementById('promo4-cantidad');
  const btnAgregarPromo4 = document.getElementById('btn-promo4-agregar');
  const btnCalcularPromo4 = document.getElementById('btn-promo4-calcular');
  const btnLimpiarPromo4 = document.getElementById('btn-promo4-limpiar');
  const listaCarritoPromo4 = document.getElementById('cart-list-promo4')?.querySelector('ul');
  const resultadoElPromo4 = document.getElementById('resultado-promo4');
  const selectPromo5 = document.getElementById('promo5-producto');
  const cantidadPromo5 = document.getElementById('promo5-cantidad');
  const btnAgregarPromo5 = document.getElementById('btn-promo5-agregar');
  const btnCalcularPromo5 = document.getElementById('btn-promo5-calcular');
  const btnLimpiarPromo5 = document.getElementById('btn-promo5-limpiar');
  const listaCarritoPromo5 = document.getElementById('cart-list-promo5')?.querySelector('ul');
  const resultadoElPromo5 = document.getElementById('resultado-promo5');
  
  /* --- Funciones Helper (Formato y Errores) --- */
  function formatCurrency(value) {
    return value.toLocaleString('es-AR', { style: 'currency', currency: 'ARS', minimumFractionDigits: 2 });
  }

  function mostrarResultado(elementoResultado, subtotal, descuento, total, promoNombre = null) {
    if (!elementoResultado) return; 
    elementoResultado.innerHTML = '';
    const subtotalF = formatCurrency(subtotal);
    const descuentoF = formatCurrency(descuento);
    const totalF = formatCurrency(total);
    
    let html = `<p>Total sin descuento: <strong>${subtotalF}</strong></p>`;
    
    if (promoNombre) {
      if (promoNombre === "Sin promo base") {
         html += `<p>No se aplicó ninguna promoción base.</p>`;
      } else {
        const promosHtml = promoNombre.split(' + ').map(p => `<strong>${p}</strong>`).join(' + ');
        html += `<p class="promo-aplicada">Promos aplicadas: ${promosHtml}</p>`;
      }
    }

    if (descuento > 0) {
      html += `<p class="ahorro">Ahorro (descuento): <strong>${descuentoF}</strong></p><hr><p class="total-final">Total a pagar: <strong>${totalF}</strong></p>`;
    } else {
      let msg = 'Esta compra no aplica para el descuento.';
      if (elementoResultado && elementoResultado.id === 'resultado-promo5') {
        msg = 'Aún no aplica el descuento. (Recordá agregar al menos 1 Vela y 1 Jabón)';
      }
      html += `<p>${msg}</p><hr><p class="total-final">Total a pagar: <strong>${totalF}</strong></p>`;
    }
    const styleId = 'promo-style';
    if (!document.getElementById(styleId)) {
        const style = document.createElement('style');
        style.id = styleId;
        style.innerHTML = `.promo-aplicada { color: #059669; font-weight: 500; } .promo-aplicada strong { color: #047857; }`;
        document.head.appendChild(style);
    }
    elementoResultado.innerHTML = html;
  }
  
  function mostrarError(elementoResultado, mensaje = 'Por favor, ingresá valores válidos.') {
    if (elementoResultado) {
      elementoResultado.innerHTML = `<p class="error">${mensaje}</p>`;
    }
  }

  /* --- INICIALIZACIÓN: Cargar productos en los dropdowns --- */
  function cargarProductosEnSelect(selectElement) {
    if (selectElement) {
      while (selectElement.options.length > 1) {
        selectElement.remove(1);
      }
      productos.forEach(producto => {
        const option = document.createElement('option');
        option.value = producto.id;
        option.textContent = `${producto.nombre} (${formatCurrency(producto.precio)})`;
        selectElement.appendChild(option);
      });
    }
  }
  
  [selectTotal, selectPromo1, selectPromo2, selectPromo3, selectPromo4, selectPromo5].forEach(cargarProductosEnSelect);

  
  
  // PROMO 1: 60% OFF en 2da
  function calcularDescuentoPromo1(carrito) {
    let descuentoTotal = 0;
    carrito.forEach(item => {
      const { producto, cantidad } = item;
      const cantidadConDescuento = Math.floor(cantidad / 2);
      const descuentoDelItem = cantidadConDescuento * (producto.precio * 0.6); 
      descuentoTotal += descuentoDelItem;
    });
    return descuentoTotal;
  }

  // PROMO 2: 3x2
  function calcularDescuentoPromo2(carrito) {
    let descuentoTotal = 0;
    carrito.forEach(item => {
      const { producto, cantidad } = item;
      const itemsGratis = Math.floor(cantidad / 3);
      const descuentoDelItem = itemsGratis * producto.precio;
      descuentoTotal += descuentoDelItem;
    });
    return descuentoTotal;
  }

  // PROMO 3: 10% OFF > $100.000
  function calcularDescuentoPromo3(subtotal) {
    let descuentoTotal = 0;
    if (subtotal > 100000) {
      descuentoTotal = subtotal * 0.10;
    }
    return descuentoTotal;
  }
  
  // PROMO 5: Kit Vela + Jabón
  function calcularDescuentoPromo5(carrito) {
    let descuentoTotal = 0;
    let baseDescuento = 0;
    const velasEnCarrito = [];
    const jabonesEnCarrito = [];

    carrito.forEach(item => {
      for (let i = 0; i < item.cantidad; i++) {
        if (item.producto.tipo === 'vela') {
          velasEnCarrito.push(item.producto.precio);
        } else if (item.producto.tipo === 'jabon') {
          jabonesEnCarrito.push(item.producto.precio);
        }
      }
    });

    velasEnCarrito.sort((a, b) => a - b);
    jabonesEnCarrito.sort((a, b) => a - b);
    
    const combosPosibles = Math.min(velasEnCarrito.length, jabonesEnCarrito.length);
    
    if (combosPosibles > 0) {
      for (let i = 0; i < combosPosibles; i++) {
        baseDescuento += velasEnCarrito[i]; 
        baseDescuento += jabonesEnCarrito[i];
      }
      descuentoTotal = baseDescuento * 0.05;
    }
    return descuentoTotal;
  }


 
  function actualizarVistaCarritoTotal() {
    if (!listaCarritoTotal) return;
    listaCarritoTotal.innerHTML = '';
    if (carritoTotal.length === 0) {
      listaCarritoTotal.innerHTML = '<li>Aún no hay productos.</li>';
      return;
    }
    carritoTotal.forEach((item, index) => {
      const li = document.createElement('li');
      li.innerHTML = `
        <span><strong>${item.cantidad}</strong> x ${item.producto.nombre}</span>
        <button class="btn-delete-item" data-index="${index}">Borrar</button>
      `;
      listaCarritoTotal.appendChild(li);
    });
  }

  if (btnAgregarTotal) {
    btnAgregarTotal.addEventListener('click', function() {
      const productoId = parseInt(selectTotal.value);
      const cantidad = parseInt(cantidadTotal.value);
      if (isNaN(productoId) || !productoId || isNaN(cantidad) || cantidad <= 0) {
        mostrarError(resultadoElTotal, 'Seleccioná un producto y una cantidad válida.');
        return;
      }
      const productoSeleccionado = productos.find(p => p.id === productoId);
      if (!productoSeleccionado) {
        mostrarError(resultadoElTotal, 'Error: Producto no encontrado.');
        return;
      }
      const itemExistente = carritoTotal.find(item => item.producto.id === productoId);
      if (itemExistente) {
        itemExistente.cantidad += cantidad;
      } else {
        carritoTotal.push({ producto: productoSeleccionado, cantidad: cantidad });
      }
      actualizarVistaCarritoTotal();
      selectTotal.value = "";
      cantidadTotal.value = 1;
      resultadoElTotal.innerHTML = ''; // Limpia al agregar
    });
  }


  if (btnCalcularTotal) {
    btnCalcularTotal.addEventListener('click', function() {
      if (carritoTotal.length === 0) {
        mostrarError(resultadoElTotal, 'Agregá productos para calcular.');
        return;
      }
      
      let totalSinDescuento = 0;
      carritoTotal.forEach(item => {
        totalSinDescuento += item.producto.precio * item.cantidad;
      });

      const promosBase = [
        { nombre: "60% OFF en 2da Unidad", descuento: calcularDescuentoPromo1(carritoTotal) },
        { nombre: "3x2 en Seleccionados", descuento: calcularDescuentoPromo2(carritoTotal) },
        { nombre: "10% OFF (Compra > $100k)", descuento: calcularDescuentoPromo3(totalSinDescuento) },
        { nombre: "5% OFF Kit (Vela + Jabón)", descuento: calcularDescuentoPromo5(carritoTotal) }
      ];
      
      let mejorPromo = { nombre: "Sin promo base", descuento: 0 };
      
      for (const promo of promosBase) {
        if (promo.descuento > mejorPromo.descuento) {
          mejorPromo = promo;
        }
      }
      
      let descuentoBaseTotal = mejorPromo.descuento;
      let nombrePromoFinal = mejorPromo.nombre;
      
      const precioConDescuentoBase = totalSinDescuento - descuentoBaseTotal;
      let descuentoMP = 0;
      
      if (checkMP.checked) {
        descuentoMP = precioConDescuentoBase * 0.20;
      }

      const descuentoTotal = descuentoBaseTotal + descuentoMP;
      const totalFinal = totalSinDescuento - descuentoTotal;
      
      
      if (descuentoMP > 0) {
        
        if (descuentoBaseTotal === 0) { 
          nombrePromoFinal = "20% OFF Mercado Pago";
        } else {
          nombrePromoFinal += " + 20% OFF Mercado Pago";
        }
      }

      mostrarResultado(resultadoElTotal, totalSinDescuento, descuentoTotal, totalFinal, nombrePromoFinal);
    });
  }

  if (btnLimpiarTotal) {
    btnLimpiarTotal.addEventListener('click', function() {
      carritoTotal = [];
      actualizarVistaCarritoTotal();
      resultadoElTotal.innerHTML = '';
      if(checkMP) checkMP.checked = false; 
    });
  }
  
  if (listaCarritoTotal) {
    listaCarritoTotal.addEventListener('click', function(event) {
      if (event.target.classList.contains('btn-delete-item')) {
        const index = parseInt(event.target.dataset.index);
        carritoTotal.splice(index, 1);
        actualizarVistaCarritoTotal();
        resultadoElTotal.innerHTML = ''; 
      }
    });
  }


  
  // --- Promo 1 ---
  function actualizarVistaCarritoPromo1() {
    if (!listaCarritoPromo1) return;
    listaCarritoPromo1.innerHTML = '';
    if (carritoPromo1.length === 0) {
      listaCarritoPromo1.innerHTML = '<li>Aún no hay productos.</li>';
      return;
    }
    carritoPromo1.forEach((item, index) => {
      const li = document.createElement('li');
      li.innerHTML = `<span><strong>${item.cantidad}</strong> x ${item.producto.nombre}</span><button class="btn-delete-item" data-index="${index}">Borrar</button>`;
      listaCarritoPromo1.appendChild(li);
    });
  }
  if (btnAgregarPromo1) {
    btnAgregarPromo1.addEventListener('click', function() {
      const productoId = parseInt(selectPromo1.value);
      const cantidad = parseInt(cantidadPromo1.value);
      if (isNaN(productoId) || !productoId || isNaN(cantidad) || cantidad <= 0) {
        mostrarError(resultadoElPromo1, 'Seleccioná un producto y una cantidad válida.');
        return;
      }
      const productoSeleccionado = productos.find(p => p.id === productoId);
      const itemExistente = carritoPromo1.find(item => item.producto.id === productoId);
      if (itemExistente) { itemExistente.cantidad += cantidad; } else { carritoPromo1.push({ producto: productoSeleccionado, cantidad: cantidad }); }
      actualizarVistaCarritoPromo1();
      selectPromo1.value = "";
      cantidadPromo1.value = 2;
      resultadoElPromo1.innerHTML = '';
    });
  }
  if (btnCalcularPromo1) {
    btnCalcularPromo1.addEventListener('click', function() {
      if (carritoPromo1.length === 0) { mostrarError(resultadoElPromo1, 'Agregá productos para calcular.'); return; }
      let totalSinDescuento = 0;
      carritoPromo1.forEach(item => { totalSinDescuento += item.producto.precio * item.cantidad; });
      const descuentoTotal = calcularDescuentoPromo1(carritoPromo1); 
      const totalFinal = totalSinDescuento - descuentoTotal;
      mostrarResultado(resultadoElPromo1, totalSinDescuento, descuentoTotal, totalFinal, "60% OFF en 2da Unidad"); 
    });
  }
  if (btnLimpiarPromo1) {
    btnLimpiarPromo1.addEventListener('click', function() {
      carritoPromo1 = [];
      actualizarVistaCarritoPromo1();
      resultadoElPromo1.innerHTML = '';
    });
  }
  if (listaCarritoPromo1) {
    listaCarritoPromo1.addEventListener('click', function(event) {
      if (event.target.classList.contains('btn-delete-item')) {
        const index = parseInt(event.target.dataset.index);
        carritoPromo1.splice(index, 1);
        actualizarVistaCarritoPromo1();
        resultadoElPromo1.innerHTML = '';
      }
    });
  }

  
  // --- Promo 2 ---
  function actualizarVistaCarritoPromo2() {
    if (!listaCarritoPromo2) return;
    listaCarritoPromo2.innerHTML = '';
    if (carritoPromo2.length === 0) {
      listaCarritoPromo2.innerHTML = '<li>Aún no hay productos.</li>';
      return;
    }
    carritoPromo2.forEach((item, index) => {
      const li = document.createElement('li');
      li.innerHTML = `<span><strong>${item.cantidad}</strong> x ${item.producto.nombre}</span><button class="btn-delete-item" data-index="${index}">Borrar</button>`;
      listaCarritoPromo2.appendChild(li);
    });
  }
  if (btnAgregarPromo2) {
    btnAgregarPromo2.addEventListener('click', function() {
      const productoId = parseInt(selectPromo2.value);
      const cantidad = parseInt(cantidadPromo2.value);
      if (isNaN(productoId) || !productoId || isNaN(cantidad) || cantidad <= 0) {
        mostrarError(resultadoElPromo2, 'Seleccioná un producto y una cantidad válida.');
        return;
      }
      const productoSeleccionado = productos.find(p => p.id === productoId);
      const itemExistente = carritoPromo2.find(item => item.producto.id === productoId);
      if (itemExistente) { itemExistente.cantidad += cantidad; } else { carritoPromo2.push({ producto: productoSeleccionado, cantidad: cantidad }); }
      actualizarVistaCarritoPromo2();
      selectPromo2.value = "";
      cantidadPromo2.value = 3;
      resultadoElPromo2.innerHTML = '';
    });
  }
  if (btnCalcularPromo2) {
    btnCalcularPromo2.addEventListener('click', function() {
      if (carritoPromo2.length === 0) { mostrarError(resultadoElPromo2, 'Agregá productos para calcular.'); return; }
      let totalSinDescuento = 0;
      carritoPromo2.forEach(item => { totalSinDescuento += item.producto.precio * item.cantidad; });
      const descuentoTotal = calcularDescuentoPromo2(carritoPromo2); 
      const totalFinal = totalSinDescuento - descuentoTotal;
      mostrarResultado(resultadoElPromo2, totalSinDescuento, descuentoTotal, totalFinal, "3x2 en Seleccionados");
    });
  }
  if (btnLimpiarPromo2) {
    btnLimpiarPromo2.addEventListener('click', function() {
      carritoPromo2 = [];
      actualizarVistaCarritoPromo2();
      resultadoElPromo2.innerHTML = '';
    });
  }
  if (listaCarritoPromo2) {
    listaCarritoPromo2.addEventListener('click', function(event) {
      if (event.target.classList.contains('btn-delete-item')) {
        const index = parseInt(event.target.dataset.index);
        carritoPromo2.splice(index, 1);
        actualizarVistaCarritoPromo2();
        resultadoElPromo2.innerHTML = '';
      }
    });
  }

  // --- Promo 3 ---
  function actualizarVistaCarritoPromo3() {
    if (!listaCarritoPromo3) return;
    listaCarritoPromo3.innerHTML = '';
    if (carritoPromo3.length === 0) {
      listaCarritoPromo3.innerHTML = '<li>Aún no hay productos.</li>';
      return;
    }
    carritoPromo3.forEach((item, index) => {
      const li = document.createElement('li');
      li.innerHTML = `<span><strong>${item.cantidad}</strong> x ${item.producto.nombre}</span><button class="btn-delete-item" data-index="${index}">Borrar</button>`;
      listaCarritoPromo3.appendChild(li);
    });
  }
  if (btnAgregarPromo3) {
    btnAgregarPromo3.addEventListener('click', function() {
      const productoId = parseInt(selectPromo3.value);
      const cantidad = parseInt(cantidadPromo3.value);
      if (isNaN(productoId) || !productoId || isNaN(cantidad) || cantidad <= 0) {
        mostrarError(resultadoElPromo3, 'Seleccioná un producto y una cantidad válida.');
        return;
      }
      const productoSeleccionado = productos.find(p => p.id === productoId);
      const itemExistente = carritoPromo3.find(item => item.producto.id === productoId);
      if (itemExistente) { itemExistente.cantidad += cantidad; } else { carritoPromo3.push({ producto: productoSeleccionado, cantidad: cantidad }); }
      actualizarVistaCarritoPromo3();
      selectPromo3.value = "";
      cantidadPromo3.value = 1;
      resultadoElPromo3.innerHTML = '';
    });
  }
  if (btnCalcularPromo3) {
    btnCalcularPromo3.addEventListener('click', function() {
      if (carritoPromo3.length === 0) { mostrarError(resultadoElPromo3, 'Agregá productos para calcular.'); return; }
      let totalSinDescuento = 0;
      carritoPromo3.forEach(item => { totalSinDescuento += item.producto.precio * item.cantidad; });
      const descuentoTotal = calcularDescuentoPromo3(totalSinDescuento); 
      const totalFinal = totalSinDescuento - descuentoTotal;
      mostrarResultado(resultadoElPromo3, totalSinDescuento, descuentoTotal, totalFinal, "10% OFF (Compra > $100k)");
    });
  }
  if (btnLimpiarPromo3) {
    btnLimpiarPromo3.addEventListener('click', function() {
      carritoPromo3 = [];
      actualizarVistaCarritoPromo3();
      resultadoElPromo3.innerHTML = '';
    });
  }
  if (listaCarritoPromo3) {
    listaCarritoPromo3.addEventListener('click', function(event) {
      if (event.target.classList.contains('btn-delete-item')) {
        const index = parseInt(event.target.dataset.index);
        carritoPromo3.splice(index, 1);
        actualizarVistaCarritoPromo3();
        resultadoElPromo3.innerHTML = '';
      }
    });
  }

  // --- Promo 4 ---
  function actualizarVistaCarritoPromo4() {
    if (!listaCarritoPromo4) return;
    listaCarritoPromo4.innerHTML = '';
    if (carritoPromo4.length === 0) {
      listaCarritoPromo4.innerHTML = '<li>Aún no hay productos.</li>';
      return;
    }
    carritoPromo4.forEach((item, index) => {
      const li = document.createElement('li');
      li.innerHTML = `<span><strong>${item.cantidad}</strong> x ${item.producto.nombre}</span><button class="btn-delete-item" data-index="${index}">Borrar</button>`;
      listaCarritoPromo4.appendChild(li);
    });
  }
  if (btnAgregarPromo4) {
    btnAgregarPromo4.addEventListener('click', function() {
      const productoId = parseInt(selectPromo4.value);
      const cantidad = parseInt(cantidadPromo4.value);
      if (isNaN(productoId) || !productoId || isNaN(cantidad) || cantidad <= 0) {
        mostrarError(resultadoElPromo4, 'Seleccioná un producto y una cantidad válida.');
        return;
      }
      const productoSeleccionado = productos.find(p => p.id === productoId);
      const itemExistente = carritoPromo4.find(item => item.producto.id === productoId);
      if (itemExistente) { itemExistente.cantidad += cantidad; } else { carritoPromo4.push({ producto: productoSeleccionado, cantidad: cantidad }); }
      actualizarVistaCarritoPromo4();
      selectPromo4.value = "";
      cantidadPromo4.value = 1;
      resultadoElPromo4.innerHTML = '';
    });
  }
  if (btnCalcularPromo4) {
    btnCalcularPromo4.addEventListener('click', function() {
      if (carritoPromo4.length === 0) { mostrarError(resultadoElPromo4, 'Agregá productos para calcular.'); return; }
      let totalSinDescuento = 0;
      carritoPromo4.forEach(item => { totalSinDescuento += item.producto.precio * item.cantidad; });
      const descuentoTotal = totalSinDescuento * 0.20; 
      const totalFinal = totalSinDescuento - descuentoTotal;
      mostrarResultado(resultadoElPromo4, totalSinDescuento, descuentoTotal, totalFinal, "20% OFF con Mercado Pago");
    });
  }
  if (btnLimpiarPromo4) {
    btnLimpiarPromo4.addEventListener('click', function() {
      carritoPromo4 = [];
      actualizarVistaCarritoPromo4();
      resultadoElPromo4.innerHTML = '';
    });
  }
  if (listaCarritoPromo4) {
    listaCarritoPromo4.addEventListener('click', function(event) {
      if (event.target.classList.contains('btn-delete-item')) {
        const index = parseInt(event.target.dataset.index);
        carritoPromo4.splice(index, 1);
        actualizarVistaCarritoPromo4();
        resultadoElPromo4.innerHTML = '';
      }
    });
  }

  // --- Promo 5 ---
  function actualizarVistaCarritoPromo5() {
    if (!listaCarritoPromo5) return;
    listaCarritoPromo5.innerHTML = '';
    if (carritoPromo5.length === 0) {
      listaCarritoPromo5.innerHTML = '<li>Aún no hay productos.</li>';
      return;
    }
    carritoPromo5.forEach((item, index) => {
      const li = document.createElement('li');
      li.innerHTML = `<span><strong>${item.cantidad}</strong> x ${item.producto.nombre}</span><button class="btn-delete-item" data-index="${index}">Borrar</button>`;
      listaCarritoPromo5.appendChild(li);
    });
  }
  if (btnAgregarPromo5) {
    btnAgregarPromo5.addEventListener('click', function() {
      const productoId = parseInt(selectPromo5.value);
      const cantidad = parseInt(cantidadPromo5.value);
      if (isNaN(productoId) || !productoId || isNaN(cantidad) || cantidad <= 0) {
        mostrarError(resultadoElPromo5, 'Seleccioná un producto y una cantidad válida.');
        return;
      }
      const productoSeleccionado = productos.find(p => p.id === productoId);
      const itemExistente = carritoPromo5.find(item => item.producto.id === productoId);
      if (itemExistente) { itemExistente.cantidad += cantidad; } else { carritoPromo5.push({ producto: productoSeleccionado, cantidad: cantidad }); }
      actualizarVistaCarritoPromo5();
      selectPromo5.value = "";
      cantidadPromo5.value = 1;
      resultadoElPromo5.innerHTML = '';
    });
  }
  if (btnCalcularPromo5) {
    btnCalcularPromo5.addEventListener('click', function() {
      if (carritoPromo5.length === 0) { mostrarError(resultadoElPromo5, 'Agregá productos para calcular.'); return; }
      let totalSinDescuento = 0;
      carritoPromo5.forEach(item => { totalSinDescuento += item.producto.precio * item.cantidad; });
      const descuentoTotal = calcularDescuentoPromo5(carritoPromo5); 
      const totalFinal = totalSinDescuento - descuentoTotal;
      mostrarResultado(resultadoElPromo5, totalSinDescuento, descuentoTotal, totalFinal, "5% OFF Kit (Vela + Jabón)");
    });
  }
  if (btnLimpiarPromo5) {
    btnLimpiarPromo5.addEventListener('click', function() {
      carritoPromo5 = [];
      actualizarVistaCarritoPromo5();
      resultadoElPromo5.innerHTML = '';
    });
  }
  if (listaCarritoPromo5) {
    listaCarritoPromo5.addEventListener('click', function(event) {
      if (event.target.classList.contains('btn-delete-item')) {
        const index = parseInt(event.target.dataset.index);
        carritoPromo5.splice(index, 1);
        actualizarVistaCarritoPromo5();
        resultadoElPromo5.innerHTML = '';
      }
    });
  }

});
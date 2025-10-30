/* Espera a que todo el HTML esté cargado antes de ejecutar el script */
document.addEventListener('DOMContentLoaded', function() {

  /* --- BASE DE DATOS DE PRODUCTOS --- */
  const productos = [
    { id: 1, nombre: "Vela Cacao Divino", precio: 12000 },
    { id: 2, nombre: "Vela Brisa de Citrus", precio: 15000 },
    { id: 3, nombre: "Nébula Vainilla", precio: 12000 },
    { id: 4, nombre: "Jabón Artesanal", precio: 8000 },
    { id: 5, nombre: "Aceite Esencial", precio: 10000 },
    { id: 6, nombre: "Difusor", precio: 18000 },
    { id: 7, nombre: "Inciensos", precio: 5000 }
  ];

  /* --- Carritos para las Promos --- */
  let carritoPromo1 = [];
  let carritoPromo2 = [];
  let carritoPromo3 = []; 
  let carritoPromo4 = [];

  /* --- Selectores de la Promo 1 --- */
  const selectPromo1 = document.getElementById('promo1-producto');
  const cantidadPromo1 = document.getElementById('promo1-cantidad');
  const btnAgregarPromo1 = document.getElementById('btn-promo1-agregar');
  const btnCalcularPromo1 = document.getElementById('btn-promo1-calcular');
  const btnLimpiarPromo1 = document.getElementById('btn-promo1-limpiar');
  const listaCarritoPromo1 = document.getElementById('cart-list-promo1').querySelector('ul');
  const resultadoElPromo1 = document.getElementById('resultado-promo1');
  
  /* --- Selectores de la Promo 2 --- */
  const selectPromo2 = document.getElementById('promo2-producto');
  const cantidadPromo2 = document.getElementById('promo2-cantidad');
  const btnAgregarPromo2 = document.getElementById('btn-promo2-agregar');
  const btnCalcularPromo2 = document.getElementById('btn-promo2-calcular');
  const btnLimpiarPromo2 = document.getElementById('btn-promo2-limpiar');
  const listaCarritoPromo2 = document.getElementById('cart-list-promo2').querySelector('ul');
  const resultadoElPromo2 = document.getElementById('resultado-promo2');
  
  /* --- Selectores de la Promo 3 (NUEVO) --- */
  const selectPromo3 = document.getElementById('promo3-producto');
  const cantidadPromo3 = document.getElementById('promo3-cantidad');
  const btnAgregarPromo3 = document.getElementById('btn-promo3-agregar');
  const btnCalcularPromo3 = document.getElementById('btn-promo3-calcular');
  const btnLimpiarPromo3 = document.getElementById('btn-promo3-limpiar');
  const listaCarritoPromo3 = document.getElementById('cart-list-promo3').querySelector('ul');
  const resultadoElPromo3 = document.getElementById('resultado-promo3');

  /* --- Selectores de la Promo 4 (NUEVO) --- */
  const selectPromo4 = document.getElementById('promo4-producto');
  const cantidadPromo4 = document.getElementById('promo4-cantidad');
  const btnAgregarPromo4 = document.getElementById('btn-promo4-agregar');
  const btnCalcularPromo4 = document.getElementById('btn-promo4-calcular');
  const btnLimpiarPromo4 = document.getElementById('btn-promo4-limpiar');
  const listaCarritoPromo4 = document.getElementById('cart-list-promo4').querySelector('ul');
  const resultadoElPromo4 = document.getElementById('resultado-promo4');

  
  /* --- Funciones Helper (Formato y Errores) --- */
  function formatCurrency(value) {
    return value.toLocaleString('es-AR', { style: 'currency', currency: 'ARS', minimumFractionDigits: 2 });
  }

  function mostrarResultado(elementoResultado, subtotal, descuento, total) {
    // ... (sin cambios)
    elementoResultado.innerHTML = '';
    const subtotalF = formatCurrency(subtotal);
    const descuentoF = formatCurrency(descuento);
    const totalF = formatCurrency(total);
    let html = `<p>Total sin descuento: <strong>${subtotalF}</strong></p>`;
    if (descuento > 0) {
      html += `<p class="ahorro">Ahorro (descuento): <strong>${descuentoF}</strong></p><hr><p class="total-final">Total a pagar: <strong>${totalF}</strong></p>`;
    } else {
      html += `<p>Esta compra no aplica para el descuento.</p><hr><p class="total-final">Total a pagar: <strong>${totalF}</strong></p>`;
    }
    elementoResultado.innerHTML = html;
  }
  
  function mostrarError(elementoResultado, mensaje = 'Por favor, ingresá valores válidos.') {
    // ... (sin cambios)
    elementoResultado.innerHTML = `<p class="error">${mensaje}</p>`;
  }

  /* --- INICIALIZACIÓN: Cargar productos en los dropdowns --- */
  function cargarProductosEnSelect(selectElement) {
    if (selectElement) {
      productos.forEach(producto => {
        const option = document.createElement('option');
        option.value = producto.id;
        option.textContent = `${producto.nombre} (${formatCurrency(producto.precio)})`;
        selectElement.appendChild(option);
      });
    }
  }
  
  cargarProductosEnSelect(selectPromo1);
  cargarProductosEnSelect(selectPromo2);
  cargarProductosEnSelect(selectPromo3);
  cargarProductosEnSelect(selectPromo4);

  
  /* =======================================================
     LÓGICA PROMO 1: 50% OFF en 2da
     ======================================================= */
  
  function actualizarVistaCarritoPromo1() {
    listaCarritoPromo1.innerHTML = '';
    if (carritoPromo1.length === 0) {
      listaCarritoPromo1.innerHTML = '<li>Aún no hay productos.</li>';
      return;
    }
    carritoPromo1.forEach((item, index) => {
      const li = document.createElement('li');
      li.innerHTML = `
        <span><strong>${item.cantidad}</strong> x ${item.producto.nombre}</span>
        <button class="btn-delete-item" data-index="${index}">Borrar</button>
      `;
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
      if (itemExistente) {
        itemExistente.cantidad += cantidad;
      } else {
        carritoPromo1.push({ producto: productoSeleccionado, cantidad: cantidad });
      }
      actualizarVistaCarritoPromo1();
      selectPromo1.value = "";
      cantidadPromo1.value = 2;
      resultadoElPromo1.innerHTML = '';
    });
  }

  if (btnCalcularPromo1) {
    btnCalcularPromo1.addEventListener('click', function() {
      if (carritoPromo1.length === 0) {
        mostrarError(resultadoElPromo1, 'Agregá productos para calcular.');
        return;
      }
      let totalSinDescuento = 0;
      let descuentoTotal = 0;
      carritoPromo1.forEach(item => {
        const { producto, cantidad } = item;
        totalSinDescuento += producto.precio * cantidad;
        const cantidadConDescuento = Math.floor(cantidad / 2);
        const descuentoDelItem = cantidadConDescuento * (producto.precio * 0.6);
        descuentoTotal += descuentoDelItem;
      });
      const totalFinal = totalSinDescuento - descuentoTotal;
      mostrarResultado(resultadoElPromo1, totalSinDescuento, descuentoTotal, totalFinal);
    });
  }

  if (btnLimpiarPromo1) {
    btnLimpiarPromo1.addEventListener('click', function() {
      carritoPromo1 = [];
      actualizarVistaCarritoPromo1();
      resultadoElPromo1.innerHTML = '';
    });
  }
  
  listaCarritoPromo1.addEventListener('click', function(event) {
    if (event.target.classList.contains('btn-delete-item')) {
      const index = parseInt(event.target.dataset.index);
      carritoPromo1.splice(index, 1);
      actualizarVistaCarritoPromo1();
      resultadoElPromo1.innerHTML = '';
    }
  });

  
  /* =======================================================
     LÓGICA PROMO 2: 3x2
     ======================================================= */
  
  function actualizarVistaCarritoPromo2() {
    listaCarritoPromo2.innerHTML = '';
    if (carritoPromo2.length === 0) {
      listaCarritoPromo2.innerHTML = '<li>Aún no hay productos.</li>';
      return;
    }
    carritoPromo2.forEach((item, index) => {
      const li = document.createElement('li');
      li.innerHTML = `
        <span><strong>${item.cantidad}</strong> x ${item.producto.nombre}</span>
        <button class="btn-delete-item" data-index="${index}">Borrar</button>
      `;
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
      if (itemExistente) {
        itemExistente.cantidad += cantidad;
      } else {
        carritoPromo2.push({ producto: productoSeleccionado, cantidad: cantidad });
      }
      actualizarVistaCarritoPromo2();
      selectPromo2.value = "";
      cantidadPromo2.value = 3;
      resultadoElPromo2.innerHTML = '';
    });
  }

  if (btnCalcularPromo2) {
    btnCalcularPromo2.addEventListener('click', function() {
      if (carritoPromo2.length === 0) {
        mostrarError(resultadoElPromo2, 'Agregá productos para calcular.');
        return;
      }
      let totalSinDescuento = 0;
      let descuentoTotal = 0;
      carritoPromo2.forEach(item => {
        const { producto, cantidad } = item;
        totalSinDescuento += producto.precio * cantidad;
        const itemsGratis = Math.floor(cantidad / 3);
        const descuentoDelItem = itemsGratis * producto.precio;
        descuentoTotal += descuentoDelItem;
      });
      const totalFinal = totalSinDescuento - descuentoTotal;
      mostrarResultado(resultadoElPromo2, totalSinDescuento, descuentoTotal, totalFinal);
    });
  }

  if (btnLimpiarPromo2) {
    btnLimpiarPromo2.addEventListener('click', function() {
      carritoPromo2 = [];
      actualizarVistaCarritoPromo2();
      resultadoElPromo2.innerHTML = '';
    });
  }

  listaCarritoPromo2.addEventListener('click', function(event) {
    if (event.target.classList.contains('btn-delete-item')) {
      const index = parseInt(event.target.dataset.index);
      carritoPromo2.splice(index, 1);
      actualizarVistaCarritoPromo2();
      resultadoElPromo2.innerHTML = '';
    }
  });


  /* =======================================================
     LÓGICA PROMO 3: 10% OFF > $30.000 (NUEVA LÓGICA)
     ======================================================= */
  
  /* --- FUNCIÓN: Actualizar la lista (UL) del carrito de la promo 3 --- */
  function actualizarVistaCarritoPromo3() {
    listaCarritoPromo3.innerHTML = '';
    if (carritoPromo3.length === 0) {
      listaCarritoPromo3.innerHTML = '<li>Aún no hay productos.</li>';
      return;
    }
    carritoPromo3.forEach((item, index) => {
      const li = document.createElement('li');
      li.innerHTML = `
        <span><strong>${item.cantidad}</strong> x ${item.producto.nombre}</span>
        <button class="btn-delete-item" data-index="${index}">Borrar</button>
      `;
      listaCarritoPromo3.appendChild(li);
    });
  }

  /* --- Botón "Añadir Producto" (Promo 3) --- */
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
      if (itemExistente) {
        itemExistente.cantidad += cantidad;
      } else {
        carritoPromo3.push({ producto: productoSeleccionado, cantidad: cantidad });
      }
      actualizarVistaCarritoPromo3();
      selectPromo3.value = "";
      cantidadPromo3.value = 1; // Default de 1
      resultadoElPromo3.innerHTML = '';
    });
  }

  /* --- Botón "Calcular Total" (Promo 3) --- */
  if (btnCalcularPromo3) {
    btnCalcularPromo3.addEventListener('click', function() {
      if (carritoPromo3.length === 0) {
        mostrarError(resultadoElPromo3, 'Agregá productos para calcular.');
        return;
      }
      
      let totalSinDescuento = 0;
      let descuentoTotal = 0;

      // 1. Sumamos el total de todos los productos del carrito 3
      carritoPromo3.forEach(item => {
        totalSinDescuento += item.producto.precio * item.cantidad;
      });

      // 2. Comprobamos si el total supera los $30.000
      if (totalSinDescuento > 30000) {
        descuentoTotal = totalSinDescuento * 0.10; // Aplicamos el 10%
      }
      
      // 3. Calculamos el final
      const totalFinal = totalSinDescuento - descuentoTotal;
      
      // 4. Mostramos el resultado
      mostrarResultado(resultadoElPromo3, totalSinDescuento, descuentoTotal, totalFinal);
    });
  }

  /* --- Botón "Limpiar" (Promo 3) --- */
  if (btnLimpiarPromo3) {
    btnLimpiarPromo3.addEventListener('click', function() {
      carritoPromo3 = [];
      actualizarVistaCarritoPromo3();
      resultadoElPromo3.innerHTML = '';
    });
  }

  /* --- Listener para borrar items (Promo 3) --- */
  listaCarritoPromo3.addEventListener('click', function(event) {
    if (event.target.classList.contains('btn-delete-item')) {
      const index = parseInt(event.target.dataset.index);
      carritoPromo3.splice(index, 1);
      actualizarVistaCarritoPromo3();
      resultadoElPromo3.innerHTML = '';
    }
  });



  /* =======================================================
     LÓGICA PROMO 4: 20% OFF con Mercado Pago (NUEVA)
     ======================================================= */
  
  /* --- FUNCIÓN: Actualizar la lista (UL) del carrito de la promo 4 --- */
  function actualizarVistaCarritoPromo4() {
    listaCarritoPromo4.innerHTML = '';
    if (carritoPromo4.length === 0) {
      listaCarritoPromo4.innerHTML = '<li>Aún no hay productos.</li>';
      return;
    }
    carritoPromo4.forEach((item, index) => {
      const li = document.createElement('li');
      li.innerHTML = `
        <span><strong>${item.cantidad}</strong> x ${item.producto.nombre}</span>
        <button class="btn-delete-item" data-index="${index}">Borrar</button>
      `;
      listaCarritoPromo4.appendChild(li);
    });
  }

  /* --- Botón "Añadir Producto" (Promo 4) --- */
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
      if (itemExistente) {
        itemExistente.cantidad += cantidad;
      } else {
        carritoPromo4.push({ producto: productoSeleccionado, cantidad: cantidad });
      }
      actualizarVistaCarritoPromo4();
      selectPromo4.value = "";
      cantidadPromo4.value = 1; // Default de 1
      resultadoElPromo4.innerHTML = '';
    });
  }

  /* --- Botón "Calcular Total" (Promo 4) --- */
  if (btnCalcularPromo4) {
    btnCalcularPromo4.addEventListener('click', function() {
      if (carritoPromo4.length === 0) {
        mostrarError(resultadoElPromo4, 'Agregá productos para calcular.');
        return;
      }
      
      let totalSinDescuento = 0;

      // 1. Sumamos el total de todos los productos del carrito 4
      carritoPromo4.forEach(item => {
        totalSinDescuento += item.producto.precio * item.cantidad;
      });

      // 2. Aplicamos el 20% de descuento (sin condición)
      const descuentoTotal = totalSinDescuento * 0.20;
      
      // 3. Calculamos el final
      const totalFinal = totalSinDescuento - descuentoTotal;
      
      // 4. Mostramos el resultado
      mostrarResultado(resultadoElPromo4, totalSinDescuento, descuentoTotal, totalFinal);
    });
  }

  /* --- Botón "Limpiar" (Promo 4) --- */
  if (btnLimpiarPromo4) {
    btnLimpiarPromo4.addEventListener('click', function() {
      carritoPromo4 = [];
      actualizarVistaCarritoPromo4();
      resultadoElPromo4.innerHTML = '';
    });
  }

  /* --- Listener para borrar items (Promo 4) --- */
  listaCarritoPromo4.addEventListener('click', function(event) {
    if (event.target.classList.contains('btn-delete-item')) {
      const index = parseInt(event.target.dataset.index);
      carritoPromo4.splice(index, 1);
      actualizarVistaCarritoPromo4();
      resultadoElPromo4.innerHTML = '';
    }
  });

});
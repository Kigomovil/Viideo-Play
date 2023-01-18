document.querySelector("#submit").addEventListener("click", e => {
  e.preventDefault();

  //INGRESE UN NUMERO DE WHATSAPP VALIDO AQUI:
  let telefono = "573215351395";

  let cliente = document.querySelector("#cliente").value;
  let celular = document.querySelector("#celular").value;
  let fecha = document.querySelector("#fecha").value;
  let ciudad = document.querySelector("#ciudad").value;
  let dinero = document.querySelector("#dinero").value;
  let tigo = document.querySelector("#tigo").value;
  let claro = document.querySelector("#claro").value;
  let movistar = document.querySelector("#movistar").value;
 
  let resp = document.querySelector("#respuesta");

  resp.classList.remove("fail");
  resp.classList.remove("send");

  let url = `https://api.whatsapp.com/send?phone=${telefono}&text=
                 *_🔻VIDEO © PLAY🔻_*%0A
  ====== *_Datos del cliente_* ======%0A
	 *Nombre del cliente*: _${cliente}_%0A
	 *Numero de celular*: _${celular}_%0A
	 *Fecha del pedido*: _${fecha}_%0A
	 *Ciudad*: _${ciudad}_%0A
	 *Tipo de pago*: _${dinero}_%0A
 _____________________________________
                 *PEDIDO*%0A%0A
   *_Tigo_*: _${tigo}_%0A
   *_Claro_*: _${claro}_%0A
   *_Movistar_*: _${movistar}_%0A_______________________________%0A%0A%0A%0A
   
   *ENVIAR PEDIDO AL CHAT SIN MODIFICAR👉🏻*`;

  if (cliente === "" || celular === "" || fecha === "" || tigo === "" || claro === "" || movistar === "" || ciudad === "" || dinero === "" ) {
    resp.classList.add("fail");
    resp.innerHTML = `Faltan algunos datos, ${cliente}`;
    return false;
  }
  resp.classList.remove("fail");
  resp.classList.add("send");
  resp.innerHTML = `Se ha enviado tu reserva, ${cliente}`;

  window.open(url);
});

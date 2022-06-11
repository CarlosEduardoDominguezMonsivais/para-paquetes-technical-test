<template>
  <div class="home">
     <div class="row d-flex justify-content-center">
        <div class="container mx-auto px-4">
            <div class="py-12">
                <div class="py-4">
                    <h4 class="text-2xl text-azul-default pb-4">Documentación del Examen</h4>
                    <h5 class="text-xl text-azul-default pb-4">Herramientas Usadas</h5>
                    <p>Para el desarrollo de esta prueba técnica se utilizó el framework de Front-end "Vue.js" para la maquetación de la parte visual se uso <strong>Tailwind CSS</strong>. Para
                        la parte de los iconos visuales se decidio usar <strong>FontAwesome v6</strong>. En cuanto a las alertas se inclino por el uso de <strong>SweetAlert2</strong> y por último se útilizo la herramienta de <strong>Netlify</strong> para alojar y mantener la aplicación web.</p>
                    <h6 class="text-lg text-azul-default pt-4">Links de Herramientas</h6>
                    <ul class="flex flex-col py-4 text-blue-600">
                        <li><a target="_blank" href="https://vuejs.org/">Vue.js</a> </li>
                        <li><a target="_blank" href="https://tailwindcss.com/">Tailwind v3</a></li>
                        <li><a target="_blank" href="https://fontawesome.com/">FontAwesome v6</a></li>
                        <li><a target="_blank" href="https://sweetalert2.github.io/">SweetAlert2</a> </li>
                        <li><a target="_blank" href="https://www.netlify.com/">Netlify</a> </li>
                    </ul>
                    <hr>
                </div>
                <div class="py-4">
                    <h5 class="text-xl text-azul-default pb-4">Descripción</h5>
                    <p>Usted deberá realizar una interfaz de usuario con un diseño que tenga buena usabilidad, sea intuitivo y cumpla con las especificaciones que se describen a continuación:</p>
                    <ol class="list-decimal list-inside p-4">
                        <li class="pb-1">Crear una tabla de pago donde se listaran los productos de la orden de compra.</li>
                        <li class="pb-1">Crear un formulario donde se pueda agregar productos a la tabla antes mencionada.</li>
                    </ol>
                    <h6 class="text-lg text-azul-default">Especificaciones</h6>
                    <ol class="list-decimal list-inside p-4">
                        <li class="pb-1">Para obtener la información de la orden de compra, así como los productos, usted deberá realizar
                        una petición (request) usando el método GET a la siguiente URL: <a target="_blank" class="text-blue-600" href="https://eshop-deve.herokuapp.com/api/v2/orders">https://eshop-deve.herokuapp.com/api/v2/orders</a></li>
                        <li class="pb-1">Enlistar las ordenes y al hacer click podamos ver el detalle de cada una.</li>
                        <li class="pb-1">Es importante que tenga en cuenta que para acceder al API debera enviar el token en el
                            Authorization header de la petición: Oculto por Privacidad, Usted obtendrá un JSON con la información de la orden y deberá desplegar los productos en la
                            tabla del punto 1 de la descripción del examen, los cuales se encuentran en el atributo items del JSON.</li>
                        <li class="pb-1">Los campos que debe considerar para mostrar de los productos son: sku, name, quantity y price.</li>
                        <li class="pb-1">También deberá indicar en alguna parte al principio de la página web el número de la orden indicado en el atributo number.</li>
                        <li class="pb-1">En el formulario ya mencionado debe incluir los mismos campos de los productos mostrados, es
                            decir, sku, name, quantity y price, al igual que un botón de agregar que al hacer click, la
                            información capturada se agregue a la tabla de productos de la orden.</li>
                        <li class="pb-1">(Opcional) Agregar todos los campos del formulario como requeridos y si no se captura
                            información en alguno de éstos, marcarlo de color rojo e indicar que es requerido.</li>
                        <li>(Opcional) Agregar boton de pagar y que al hacer click, muestre una alerta indicando que el
                            proceso fue exitoso, esta alerta deberá tener un diseño agradable.</li>
                    </ol>
                    <hr>
                </div>
            </div>
        </div>
     </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'HomeView',
  components: {
  }
}
</script>

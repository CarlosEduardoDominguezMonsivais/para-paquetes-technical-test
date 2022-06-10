<template>
  <div class="min-h-screen bg-gray-100">
    <Head>
      <template #header>
        <div class="flex justify-between items-center">
            <h2 class="font-semibold text-xl text-gray-800 leading-tight">
                Ordenes de Compra
            </h2>
        </div>
      </template>
    </Head>
    <div class="py-12">
        <div class="max-w-6xl mx-auto sm:px-6 lg:px-8">
            <div class="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                <div class="p-6 bg-white border-b border-gray-200">
                    <div class="overflow-x-auto">
                        <table class="table-auto w-full">
                          <thead class="text-left text-sm">
                              <tr class="border-b border-gray-200">
                                  <th class="px-6 py-3">ID</th>
                                  <th class="px-8">Name</th>
                                  <th class="px-8">Number</th>
                                  <th class="px-8">Status</th>
                                  <th class="text-center">Agregar productos</th>
                              </tr>
                          </thead>
                            <tbody class="text-sm" v-if="!loading">
                              <tr v-for="(item) in pays" :key="item.id" class="odd:bg-gray-50">
                                  <td class="px-6 py-3">{{item.id}}</td>
                                  <td class="px-8">{{item.name}}</td>
                                  <td class="px-8">{{item.number}}</td>
                                  <td class="px-8">{{item.payment.status}}</td>
                                  <td class="text-sm text-center">
                                      <button @click="show(item)" class="py-2 px-4 bg-white text-gray-500 font-semibold text-sm text-center rounded-lg shadow-md border border-gray-300 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-opacity-75">
                                          <font-awesome-icon icon ="cart-shopping" class="text-xs"></font-awesome-icon>
                                          <span class="hidden sm:inline ml-2">Agregar</span>
                                      </button>
                                  </td>
                              </tr>
                          </tbody>
                          <tfoot v-else>
                              <tr>
                                <td colspan="7" class="py-12 text-center">
                                  <font-awesome-icon icon ="spinner" class="fa-3x fa-pulse text-gray-300"></font-awesome-icon>
                                    <i class="far fa-folder-open fa-4x text-gray-300"></i>
                                </td>
                              </tr>
                          </tfoot>
                      </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </div>
  <Modal :toogle="toogleModal">
      <template #header>
        <h2 class="text-xl">Productos</h2>
      </template>
      <template #content>
          <div class="flex justify-between text-gray-600 text-sm mb-6">
              <div class="flex items-center space-x-4">
                  <span class="text-base">Numero de la orden: #{{products.number}}</span>
              </div>
          </div>
          <div class="text-left">
            <div class="grid gap-2 grid-cols-1 sm:grid-cols-6">
              <div class="mt-4 col-span-6 sm:col-span-3">
                  <Label for="sku" value="Sku *" />
                  <Input id="sku" type="text" class="mt-1 block w-full"  autocomplete="sku" placeholder="TEST1" required v-model="form.sku"/>
                  <small class="text-red-400" v-if="errors.sku">{{errors.sku[0]}}</small>
              </div>     
              <div class="mt-4 col-span-6 sm:col-span-3">
                  <Label for="name" value="Name *" />
                  <Input id="name" type="text" class="mt-1 block w-full"  autocomplete="name" placeholder="Pantalón" required v-model="form.name"/>
                  <small class="text-red-400" v-if="errors.name">{{errors.name[0]}}</small>
              </div>  
              <div class="mt-4 col-span-6 sm:col-span-2">
                  <Label for="quantity" value="Quantity *" />
                  <Input id="quantity" type="number" class="mt-1 block w-full" autocomplete="quantity" placeholder="1" required v-model="form.quantity"/>
                  <small class="text-red-400" v-if="errors.quantity">{{errors.quantity[0]}}</small>
              </div>
              <div class="mt-4 col-span-6 sm:col-span-2">
                  <Label for="price" value="Price *" />
                  <Input id="price" type="number" class="mt-1 block w-full" autocomplete="price" placeholder="1000" required v-model="form.price"/>
                  <small class="text-red-400" v-if="errors.price">{{errors.price[0]}}</small>
              </div>
              <div class="mt-4 col-span-6 sm:col-span-2">
                <Label for="total" value="Total" />
                <Input id="total" type="number" class="mt-1 block w-full bg-gray-50" v-model="formItemTotal" autocomplete="total" required readonly disabled />
              </div>
              <div class="col-span-5"></div>
              <div class="flex items-center justify-end">
                <Button type="button" class="ml-4 mt-4" @click="submit">
                    Crear
                </Button>
              </div>
            </div>
          </div>
          <div class="pt-16 overflow-x-auto overflow-y-auto">
              <table class="table-auto w-full whitespace-nowrap">
                <thead class="text-left text-sm">
                    <tr class="border-b border-gray-200">
                        <th class="px-2 py-3">Sku</th>
                        <th class="px-2">Name</th>
                        <th class="px-2">Quantity</th>
                        <th class="px-2">Price</th>
                        <th class="px-2">Total</th>
                    </tr>
                </thead>
                <tbody class="text-xs">
                    <tr v-for="item in products.items" :key="item.id" class="odd:bg-gray-50">
                        <td class="px-2 py-3">{{item.sku}}</td>
                        <td class="px-2">{{item.name}}</td>
                        <td class="px-2">{{item.quantity}}</td>
                        <td class="px-2">{{item.price}}</td>
                        <td class="px-2" v-if ="item.total != null">{{item.total}}</td>
                        <td class="px-2" v-else>{{item.price}}</td>
                    </tr>
                </tbody>
              </table>
          </div>
      </template>
      <template #footer>
          <div class="flex items-center justify-end">
              <Button type="button" class="ml-4" bgColor="bg-celeste-default" @click="pay">
                  Pagar
              </Button>
          </div>
      </template>
  </Modal>
</template>

<script>
import Head from '../components/Head.vue'
import axios from "axios"
import Modal from '../components/Modal.vue'
import Label from '@/components/Label.vue'
import Input from '@/components/Input.vue'
import Button from '@/components/Button.vue'
import Swal from 'sweetalert2'

export default {
  name: 'Pays',
  
  components: {
    Head,
    Modal,
    Label,
    Input,
    Button
  },

  data () {
    return {
      pays: [],
      loading: false,
      toogleModal: false,
      products: [],
      total: 0,
      errors: {},
      form: {}
    }
  },
  mounted () {
    this.getAll()
  },

  methods: {
    getAll() {
        this.loading = true
        const token = 'eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJwUGFINU55VXRxTUkzMDZtajdZVHdHV3JIZE81cWxmaCIsImlhdCI6MTYyMDY2Mjk4NjIwM30.lhfzSXW9_TC67SdDKyDbMOYiYsKuSk6bG6XDE1wz2OL4Tq0Og9NbLMhb0LUtmrgzfWiTrqAFfnPldd8QzWvgVQ';
        axios.get(`https://eshop-deve.herokuapp.com/api/v2/orders`, { 
          headers: {
            "Authorization": `Bearer ${token}`
          }
        })
        .then(response => {
          this.pays = response.data.orders
          this.loading = false
        })
    },

    submit() {
        this.errors = {}
        if (!this.form.sku) {
          this.errors.sku = ['El campo sku es requerido']
          return false
        }
         if (!this.form.name) {
          this.errors.name = ['El campo name es requerido']
          return false
        }
         if (!this.form.quantity) {
          this.errors.quantity = ['El campo quantity es requerido']
          return false
        }
         if (!this.form.price) {
          this.errors.price = ['El campo price es requerido']
          return false
        }
        else {
          this.loading = true
          this.form.id = Math.random().toString(36).substr(2, 18)
          this.products.items.push(this.form);
          localStorage.setItem(this.products.number,JSON.stringify(this.products));
          Swal.fire({
            title: '¡Producto creado con éxito!',
            icon: 'success',
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000
          })
          this.form = {};
          this.loading = false
        }
    },

    show(itemProduct){
      if(JSON.parse(localStorage.getItem(itemProduct.number)) != null) {
        this.products = JSON.parse(localStorage.getItem(itemProduct.number))
      }else{
        this.products = itemProduct
      }
      this.toogleModal = !this.toogleModal      
    },

    pay() {
       Swal.fire({
          title: "¡Se ha efectuado el pago!",
          icon: "success",
      })
      this.toogleModal = !this.toogleModal      
    }

  },

  computed: {
    formItemTotal: function () {
        let total = (this.form.quantity * this.form.price)
        this.form.total = total.toFixed(2)
        return  total.toFixed(2)
    }
  }
}
</script>

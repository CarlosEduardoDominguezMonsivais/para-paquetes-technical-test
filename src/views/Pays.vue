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
        <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <div class="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                <div class="p-6 bg-white border-b border-gray-200">
                    <div class="overflow-x-auto">
                      <table class="table-auto w-full whitespace-nowrap">
                          <thead class="text-left">
                              <tr class="border-b border-gray-200">
                                  <th class="px-2 py-3">ID</th>
                                  <th class="px-2">Name</th>
                                  <th class="px-2">Number</th>
                                  <th class="px-2">Status</th>
                                  <th class="px-2"></th>
                              </tr>
                          </thead>
                            <tbody v v-if="!loading">
                              <tr v-for="(item, index) in pays" :key="item.id" class="cursor-pointer odd:bg-gray-50">
                                  <td class="px-2 py-3" @click="show(item)">{{item.id}}</td>
                                  <td class="px-2" @click="show(item)">{{item.name}}</td>
                                  <td class="px-2" @click="show(item)">{{item.number}}</td>
                                  <td class="px-2" @click="show(item)">{{item.payment.status}}</td>
                                  <td class="px-2"></td>
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
  <Modal v-show="isModalVisible" @close="closeModal" sizeModal="max-w-7xl">
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
            <div class="grid gap-2 grid-cols-1 sm:grid-cols-2">
              <div class="mt-4">
                  <Label for="sku" value="Sku *" />
                  <Input id="sku" type="text" class="mt-1 block w-full"  autocomplete="sku" placeholder="TEST1" required v-model="form.sku"/>
                  <small class="text-red-400" v-if="errors.sku">{{errors.sku[0]}}</small>
              </div>     
              <div class="mt-4">
                  <Label for="name" value="Name *" />
                  <Input id="name" type="text" class="mt-1 block w-full"  autocomplete="name" placeholder="Pantalón" required v-model="form.name"/>
                  <small class="text-red-400" v-if="errors.name">{{errors.name[0]}}</small>
              </div>  
              <div class="mt-4">
                  <Label for="quantity" value="Quantity *" />
                  <Input id="quantity" type="number" class="mt-1 block w-full" autocomplete="quantity" placeholder="1" required v-model="form.quantity"/>
                  <small class="text-red-400" v-if="errors.quantity">{{errors.quantity[0]}}</small>
              </div>
              <div class="mt-4">
                  <Label for="price" value="Price *" />
                  <Input id="price" type="number" class="mt-1 block w-full" autocomplete="price" placeholder="1000" required v-model="form.price"/>
                  <small class="text-red-400" v-if="errors.price">{{errors.price[0]}}</small>
              </div>
              <div></div>
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
                    </tr>
                </thead>
                <tbody class="text-xs">
                    <tr v-for="item in products.items" :key="item.id" class="odd:bg-gray-50">
                        <td class="px-2 py-3">{{item.sku}}</td>
                        <td class="px-2">{{item.name}}</td>
                        <td class="px-2">{{item.quantity}}</td>
                        <td class="px-2">{{item.price}}</td>
                    </tr>
                </tbody>
                <!--<tfoot class="text-sm" v-if="current.total > 0">
                    <tr>
                        <td colspan="4"></td>
                        <th class="px-2 py-3 text-center">Total</th>
                        <th class="px-2 text-right">{{formatCurrency(current.subtotal)}}</th>
                        <th class="px-2 text-right">{{formatCurrency(current.tax)}}</th>
                        <th class="px-2 text-right">{{formatCurrency(current.total)}}</th>
                    </tr>
                </tfoot>-->
              </table>
          </div>
      </template>
      <template #footer>
          <div class="flex items-center justify-end">
              <Button type="button" class="ml-4" bgColor="bg-blue-400">
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
        isModalVisible: false,
        products: [],
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
        this.form.id = Math.random().toString(36).substr(2, 18);
        this.products.items.push(this.form);

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
      this.isModalVisible = true
      this.products = itemProduct      
    },

    closeModal() {
      this.isModalVisible = false;
    },

  }
}
</script>

<template>
<div class="pos" >
    <form @submit.prevent="save">
  <div class="top">
    <div class="form-group">
      <label for="nama">Nama Pelanggan</label>
      <input type="text" name="nama" id="name" v-model="form.name">
    </div>

    <div class="two-column">
        <div class="form-group">
          <label for="tanggal">Tanggal</label>
          <input type="tanggal" name="tanggal" id="date" v-model="form.date">
        </div>

          <div class="form-group">
            <label for="waktu">Jam</label>
            <input type="waktu" name="waktu" id="time" v-model="form.time">
        </div>

    </div>
  </div>
  <div class="middle">
    <label for="">Item yang dijual</label>
    <table>
      <tr>
        <th>Item</th>
        <th>Qty</th>
        <th>Harga Satuan</th>
        <th>SubTotal</th>
        <th></th>
      </tr>
      <tr>
        <td><input type="text" name="item" id="item" v-model="item" ></td>
        <td><input type="number" name="qty" id="qty" v-model="qty" min="1"></td>
        <td><input type="number" name="price" id="price" v-model="price" min="0.00" max="100000" step="0.01"></td>
        <td><input type="number" name="subtotal" id="subtotal" v-model="subtotal"></td>
        <td><button>Trash</button></td>
      </tr>
  <div class="add-item"><button>+ Tambah item lain</button></div>
    </table>
  </div>

  <div class="bottom">
    <div class="form-group">
      <label for="total">Total</label>
      <input type="number" name="total" id="total" v-model="total">
    </div>
    <div class="form-group">
      <label for="cash">Bayar Tunai</label>
      <input type="number" name="cash" id="cash" v-model="cash">
    </div>
    <div class="form-group">
      <label for="cashback">Kembali</label>
      <input type="number" name="cashback" id="cashback" v-model="cashback">
    </div>
    <button class="btn btn-cancel">Cancel</button>
    <button type="submit" class="btn btn-submit">Submit</button>
  </div>
    </form>


    <ul>
      <li v-for="pembelian in pembelian" :key="pembelian.id">
        {{ pembelian.name }} <br>
        {{ pembelian.date }} <br>
        {{ pembelian.time }} <br>
        {{ pembelian.total }} <br>
        {{ pembelian.cash }} <br>
        {{ pembelian.cashback }} <br>
        {{ pembelian.item }} <br>
        {{ pembelian.price }} <br>
        {{ pembelian.subtotal }} <br>
      </li>
    </ul>
    <button @click="load">load</button>

</div>
</template>
<script>
import axios from 'axios'

export default {
  
  data(){
    return {
      form: {
        name: '',
        date: '',
        time: '',
        total: '',
        cash: '',
        cashback: '',
        item: '',
        price: '',
        subtotal: '',

      },
      pembelian : []

    }
  },
  async mounted(){

    // this.load()

  },

  methods: {

    async load(){

      const response = await axios.get('http://localhost:3000/Pembelian')
      this.pembelian = response.data

    },

    async save() {
        const response = await axios.post('http://localhost:3000/Pembelian', this.form)
        this.pembelian = response.data
        this.name =''
        this.date =''
        this.jam =''
        this.total =''
        this.cash =''
        this.cashbcak =''
        this.item =''
        this.price =''
        this.subtotal =''
        this.load()
      },


  }


}
</script>

<style>
.pos {
    width: 900px;
    margin: 0 auto;
    border: 1px solid #8a8a8a;
    border-radius: 4px;
    padding: 20px;
}

.top {
    max-width: 50%;
}
.two-column {
    display: flex;
    align-items: center;
}

.two-column .form-group:last-child {
    width: 100px;
    margin-left: auto;
}

.form-group {
    display: flex;
    padding-bottom: 10px;
    align-items: center;
}

.form-group input {
    margin-left: auto;
    width: 70%;
    border: 1px solid #bfbebe;
    border-radius: 4px;
    padding: 8px;
}

.form-group label {
    font-size: 12px;
}


.form-group {
    display: flex;
    padding-bottom: 10px;
}

.form-group input {
    margin-left: auto;
    width: 70%;
    border: 1px solid #bfbebe;
    border-radius: 4px;
    padding: 8px;
}

.form-group label {
    font-size: 12px;
}

.middle {
    display: flex;
    /* align-items: center; */
}

.middle table {
    width: 87%;
    margin-left: auto;
    border: 1px solid #bfbebe;
    border-radius: 4px;
    padding: 0;
    /* background: white; */
}

.middle table th {
    /* border: 0; */
    font-weight: normal;
    text-align: left;
    padding: 3px 10px;
    background: #fff;
    font-size: 15px;
}

.middle table input {
    padding: 10px;
    border-radius: 4px;
    border: 1px solid #bfbebe;
}

.middle table button {
    background: #fdfbfb;
    border: 1px solid #bfbebe;
}

.middle table td {
    text-align: center;
    padding: 5px;
    background: #dcdada;
}


.middle  table .add-item button {
    background: transparent !important;
    color: #09988c;
    border: 0 !important;
    box-shadow: none;
}

.middle table .add-item {
    padding: 10px;
    border: 0;
}

.two-column .form-group:first-child {
    width: 70%;
}

.two-column .form-group:first-child input {
    width: 57%;
}

.two-column .form-group:last-child input#time {
    width: 50%;
}


table, th, td {
    border: 1px solid #bfbebe;
    border-collapse: collapse;
}
.bottom {
    max-width: 35%;
}



</style>
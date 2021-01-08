app.component('table-form', {
  template:
  /*html*/
  `<form class="review-form" @submit.prevent="onSubmit">
    <h3>Add New Store</h3>
    <label for="storeName">Store Name:</label>
    <input id="storeName" v-model="storeName" required>

    <label for="minCustomer">Minimum Customer:</label>      
    <input type="number"
    id="minCustomer" v-model="minCustomer" min=0 required></input>

    <label for="maxCustomer">Maximum Customer:</label>      
    <input type="number" id="maxCustomer" v-model="maxCustomer" min=0 required></input>

    <label for="avgCookieSale">Average Cookie Sale per Hour:</label>      
    <input type="number"
    id="avgCookieSale" v-model="avgCookieSale" min=0 required></input>

    <input class="button" type="submit" value="Submit">  

  </form>`,
  data() {
    return {
      storeName: '',
      minCustomer: 0,
      maxCustomer: 0,
      avgCookieSale: 0
    }
  },
  methods: {
    onSubmit() {
      let store = {
        storeName: this.storeName,
        minCustomer: this.minCustomer,
        maxCustomer: this.maxCustomer,
        avgCookieSale: this.avgCookieSale 
      }

      this.$emit('create-store', store)

      this.storeName = ''
      this.minCustomer = ''
      this.maxCustomer = ''
      this.avgCookieSale = '' 
    }
  }
})


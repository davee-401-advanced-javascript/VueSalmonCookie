app.component('table-list', {
  template: 
  /*html*/
  `
  <table-form @create-store="addToStore"></table-form>
  
  <h2> This is list </h2>

  <table>
  
    <thead>
      <tr> 
        <th v-for="hour in hours">
          {{hour}}
        </th>
      </tr>
    </thead>

    <tbody>
      <tr v-for="store in storesArr">
        <td>
          {{store.storeName}}
        </td>
        <td v-for="sales in store.hourlySalesArr">
          {{sales}}
        </td>
        <td>
          {{store.locationTotal}}
        </td>
      </tr>
    </tbody>

  </table>

  `,
  data() {
    return {
      hours: [ 'Store Name','6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm', 'Total'],
      storesArr: []
    }
  },
  methods: {
    addToStore(store) {
      let salesArray = []
      for (var i = 0; i < 14; i++) {
        salesArray.push(Math.round(generateRandomNum(store.minCustomer, store.maxCustomer) * store.avgCookieSale));
      }
      store.hourlySalesArr = salesArray;
      store.locationTotal = salesArray.reduce((acc, val) => {
        return acc + val;
      }, 0);
      this.storesArr.push(store);
      console.log('this.stores:', this.storesArr)
    }
  }
})


function generateRandomNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
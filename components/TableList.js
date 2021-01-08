// HarcCoded Store Data

const seattle = {
  storeName: "Seattle",
  minCustomer: 23,
  maxCustomer: 65,
  avgCookieSale: 6,
  hourlySalesArr:[54, 120, 138, 78, 204, 66, 168, 240, 12, 210, 246, 24, 246, 72],
  locationTotal: 1878,
}

const tokyo = {
  storeName: "Tokyo",
  minCustomer: 3,
  maxCustomer: 24,
  avgCookieSale: 2,
  hourlySalesArr:[20, 40, 34, 30, 40, 34, 2, 8, 28, 40, 16, 8, 42, 42],
  locationTotal: 384,
}

const dubai = {
  storeName: "Dubai",
  minCustomer: 11,
  maxCustomer: 38,
  avgCookieSale: 4,
  hourlySalesArr:[0, 96, 84, 100, 8, 68, 108, 32, 44, 76, 108, 16, 108, 52],
  locationTotal: 900,
}

const paris = {
  storeName: "paris",
  minCustomer: 20,
  maxCustomer: 38,
  avgCookieSale: 3,
  hourlySalesArr:[12, 36, 54, 51, 9, 0, 51, 48, 45, 3, 54, 12, 24, 42],
  locationTotal: 441,
}

const lima = {
  storeName: "lima",
  minCustomer: 2,
  maxCustomer: 16,
  avgCookieSale: 5,
  hourlySalesArr:[45, 30, 25, 35, 65, 0, 40, 5, 40, 45, 35, 50, 45, 10],
  locationTotal: 470,
}

//----------------------------------------------------------------------------//

app.component('table-list', {
  template: 
  /*html*/
  `
  <table-form @create-store="addToStore"></table-form>
  
  <h2> Sales Table </h2>

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

    <tfoot>
      <tr>
        <td>
          Hourly Total
        </td>

        <td>
          {{ hourlyTotal }}
        </td>

        <td>
          {{ allTotals }}
        </td>

      </tr>
    </tfoot>

  </table>

  `,
  data() {
    return {
      hours: [ 'Store Name','6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm', 'Total'],
      storesArr: [seattle, tokyo, dubai, paris, lima],
    };
  },
  methods: {
    addToStore(store) {
      let salesArray = [];
      for (var i = 0; i < 14; i++) {
        salesArray.push(Math.round(generateRandomNum(store.minCustomer, store.maxCustomer) * store.avgCookieSale));
      }
      store.hourlySalesArr = salesArray;
      store.locationTotal = salesArray.reduce((acc, val) => {
        return acc + val;
      }, 0);
      this.storesArr.push(store);
      console.log('this.stores:', this.storesArr);
    },
  },
  computed: {
    hourlyTotal() {
      // function to compute totals per hour Array will go here
      // for now return a string
      return 'This should be an array'
    },
    allTotals() {
      // function to compute all totals will go here
      // for now return a string
      return 'All Totals Array'
    },
  }
});


function generateRandomNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}




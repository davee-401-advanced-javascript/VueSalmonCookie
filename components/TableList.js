app.component('table-list', {
  template: 
  /*html*/
  `
  <table-form @create-store="addToStore"></table-form>
  
  <h2> This is list </h2>
  `,
  data() {
    return {
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
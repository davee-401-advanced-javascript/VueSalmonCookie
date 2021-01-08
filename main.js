const app = Vue.createApp({
  data() {
    return{

      hours: [ '6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm',],

      stores: []
      // Store object goes into this array?
      /*
        storeObj{
          storeName
          minHourlyCustomer
          maxHourlyCustomer
          avgCookie
          hourlySalesArr  >> []
          locationTotal >> num
        }

      */
              
      
    }
  },
  methods: {
    /*
  for (var i = 0; i < 14; i++) {
    this.cookieSaleEveryHour.push(Math.round(generateRandomNum(this.minHourlyCustomer, this.maxHourlyCustomer) * this.avgCookiePerCustomer));
    */
    createStore(formInput) {
      // take form input
      // add to storeArray
      
    }
  }
})






/*

Store: 

  States?? 
  - storeName
  - minHourlyCustomer
  - maxHourlyCustomer
  - avgCookePercustomer

  - cookieSaleEveryHour >> Array
    - take random number between min & max and multiply  by avg
  - dailyStoreTotal 
    - add all the numbers in the Hourly Array
  

  - companytotal  >> create method

  - createFakeAmount
*/
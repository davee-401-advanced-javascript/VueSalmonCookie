app.component('table-list', {
  template: 
  /*html*/
  `
  <table-form @create-store="addToStore"></table-form>
  
  <h2> This is list </h2>
  `,
  data() {
    return {
      stores: []
    }
  },
  methods: {
    addToStore(store) {
      console.log('store:', store)
    
    }
  }
})
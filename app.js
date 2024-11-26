const { createApp } = Vue;

createApp({
  data() {
    return {
      drinks: [],
      typeMapping: {
        0: 'Regular',
        1: 'SugarFree',
        2: 'Caffeinated',
        3: 'Decaffeinated'
      }
    };
  },
  methods: {
    async fetchDrinks() {
      try {
        const response = await fetch('https://energydrinkapi2024.azurewebsites.net/energydrink');
        if (response.ok) {
          this.drinks = await response.json();
        } else {
          console.error('Failed to fetch drinks.');
        }
      } catch (error) {
        console.error('Error:', error);
      }
    },
    translateType(typeValue) {
      return this.typeMapping[typeValue] || 'Unknown';
    }
  },
  created() {
    this.fetchDrinks();
  }
}).mount('#app');





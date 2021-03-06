new Vue({
  el: '#app',
  data: {
    title: 'Becoming a Vue ninja',
    name: 'Sameer Khan',
    url: 'http://www.youtube.com',
    classes: ['one', 'two'],
    wage: 10,
    coords: {
      x: 0,
      y: 0,
    },
    showName: true,
    items: ['Mushroom', 'Green Shells', 'Red Shells', 'Bananas', 'Star'],
  },
  methods: {
    greet(x) {
      return `Hello and good ${x}, ${this.name}`;
    },
    changeWage(amount) {
      this.wage += amount;
    },
    logEvent(e) {
      console.log(e);
    },
    logCoords(e) {
      this.coords.x = e.offsetX;
      this.coords.y = e.offsetY;
    },
    updateName(e) {
      console.log(e.target.value);
      this.name = e.target.value;
    },
    logMessage() {
      console.log('Clicked');
    },
    toggleShowName() {
      this.showName = !this.showName;
    },
  },
});

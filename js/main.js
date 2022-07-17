class Counter {
   constructor(selector, valueDefault){
      this.$count = document.querySelector(selector)
      this.valueDefault = valueDefault
   }
   init(){
      this.$count.textContent = this.valueDefault
   }

   minus(){
      this.$count.textContent = +this.$count.textContent - 1
   }
   plus(){this.$count.textContent = +this.$count.textContent + 1
   }

}

const counter = new Counter('span', 10)

counter.init()

const $buttonPlus = document.querySelector('.plus')
const $buttonMinus = document.querySelector('.minus')

$buttonPlus.addEventListener('click', () => {
   counter.plus()
})
$buttonMinus.addEventListener('click', () => {
   counter.minus()
})
import getData from "./getData";
import renderGoods from "./renderGoods";
import {
  priceFilterMin,
  priceFilterMax,
} from "./filters";

const filterPrice = () => {

  const priceMin = document.getElementById('min')
  const priceMax = document.getElementById('max')



  priceMin.addEventListener('input', (event) => {
    const priceMinValue = event.target.value

    getData().then((data) => {
      renderGoods(priceFilterMin(data, priceMinValue));
    })

  })

  priceMax.addEventListener('input', (event) => {
    const priceMaxValue = event.target.value

    getData().then((data) => {
      renderGoods(priceFilterMax(data, priceMaxValue));
    })

  })


}

export default filterPrice
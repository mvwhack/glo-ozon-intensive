export const searchFilter = (goods, value) => {
  return goods.filter((goodsItem) => {
    return goodsItem.title.toLowerCase().includes(value.toLowerCase())
  })
}

export const categoryFilter = (goods, value) => {
  return goods.filter((goodsItem) => {
    return goodsItem.category === value
  })
}

export const priceFilterMin = (goods, priceMinValue) => {
  return goods.filter((goodsItem) => {
    return goodsItem.price >= priceMinValue;
  })
}

export const priceFilterMax = (goods, priceMaxValue) => {
  return goods.filter((goodsItem) => {
    return goodsItem.price <= priceMaxValue;
  })
}

// export const priceFiltre = (goods, priceMinValue, priceMaxValue) => {
//   return goods.filter(goodsItem => goodsItem.price >= priceMinValue && goodsItem.price <= priceMaxValue)
// }
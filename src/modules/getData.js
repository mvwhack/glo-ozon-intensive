const getData = () => {
  return fetch('https://glo-ozon-intensive-default-rtdb.firebaseio.com/goods.json')
    .then((response) => {
      return response.json();
    });
}

export default getData;
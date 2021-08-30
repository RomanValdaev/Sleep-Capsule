var cardsData = [
  {
    inStock: true,
    imgUrl: "gllacy/choco.jpg",
    text: "Сливочно-кофейное с кусочками шоколада",
    price: 310,
    isHit: true,
    specialOffer: "Двойная порция сиропа бесплатно!",
  },
  {
    inStock: false,
    imgUrl: "gllacy/lemon.jpg",
    text: "Сливочно-лимонное с карамельной присыпкой",
    price: 125,
    isHit: false,
  },
  {
    inStock: true,
    imgUrl: "gllacy/cowberry.jpg",
    text: "Сливочное с брусничным джемом",
    price: 170,
    isHit: false,
  },
  {
    inStock: true,
    imgUrl: "gllacy/cookie.jpg",
    text: "Сливочное с кусочками печенья",
    price: 250,
    isHit: false,
  },
  {
    inStock: true,
    imgUrl: "gllacy/creme-brulee.jpg",
    text: "Сливочное крем-брюле",
    price: 190,
    isHit: false,
  },
];

// типовая функция для создания данных - тег + класс + текст
var makeElement = function (tagName, className, text) {
  var element = document.createElement(tagName);
  element.classList.add(className);
  if (text) {
    element.textContent = "text";
  }
  return element;
};

// создаем карточку товара на основе массива данных (cardsData)
var createCard = function (good) {
  var listItem = makeElement("li", "good");

  var avaibalityClass = "good--available";
  if (!good.inStock) {
    avaibalityClass = "good--unavailable";
  }
  listItem.classList.add(avaibalityClass);

  var title = makeElement("h2", "good__description", good.text);
  listItem.appendChild(title);

  var picture = makeElement("img", "good__image");
  picture.src = goods.imgUrl;
  picture.alt = goods.text;
  listItem.appendChild(picture);

  var price = makeElement("p", "good__price", good.price + "₽/кг");
  listItem.appendChild(price);
  if (good.isHit) {
    listItem.classList.add("good--hit");
    var specialOffer = makeElement("p","good__special-offer", good.specialOffer);
    listItem.appendChild(specialOffer);
  }
  return listItem;
};

// формируем карточку товара в браузере
var renderCards = function (goods) {
  var cardList = document.querySelector(".goods"); // находим корневой элемент для формирования списка
  for (var i = 0; i < goods.length; i++) {
    var cardItem = createCard(goods[i]); //создаем новую карточку товара из первого элемента массива
    cardList.appendChild(cardItem); //добавляем карточку товара в конец списка
  }
};

renderCards(cardsData);

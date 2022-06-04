//================== Header-Menu =================//

let menuItems = document.querySelectorAll('.menu-catalog__item');
let itemSubs = document.querySelectorAll('[data-sub]');
let menuLinks = document.querySelectorAll('.menu-catalog__link');
let menuSubs = document.querySelectorAll('.sub-menu-catalog');
let sliderTop = document.querySelector(".slider-top");

// Выпадающее меню
const mediaQuery = window.matchMedia('(min-width: 1024px)');
if (mediaQuery.matches) {
  if(itemSubs.length > 0){
    for (let index = 0; index < itemSubs.length; index++) {
      const itemSub = itemSubs[index];
      const menuSub = menuSubs[index];
      itemSub.addEventListener("mouseover", function(){
        menuSub.classList.add("active");
        if(sliderTop){sliderTop.classList.add("no-active");} // Затемнение слайдера при открытие меню.
      })
      itemSub.addEventListener("mouseout", function(){
        menuSub.classList.remove("active");
        if(sliderTop){sliderTop.classList.remove("no-active");}
      })
    }
  }
}

// Ховеры при наведении
if(menuItems.length > 0) {
  for (let index = 0; index < menuItems.length; index++) {
    const menuItem = menuItems[index];
    const menuSub = menuSubs[index];
    const menuLink = menuLinks[index];
    menuItem.addEventListener("mouseover", function (e){
      menuItem.classList.add("hover");
      menuLink.classList.add("hover");
      
    });
    menuItem.addEventListener("mouseout", function (e){
      if(menuSubs[index]){
          menuSub.classList.remove("active");
      }
      menuItem.classList.remove("hover");
      menuLink.classList.remove("hover");
      
    });
  }
}

//====================== BURGER ====================//

let menu = document.querySelector('.icon-menu');
let menuCatalog = document.querySelector('.menu-catalog__list')

menu.addEventListener("click", function (e) {
  menu.classList.toggle('active');
  menuCatalog.classList.toggle('active');
});

/*====================== Popular-products ====================*/

// Анимация смены видимого блока
let popularButtons = document.querySelectorAll('.popular-products__button-category');
let popularContents = document.querySelectorAll('.popular-products__body');

if(popularButtons.length > 0) {
  for (let index = 0; index < popularButtons.length; index++) {
    const popularButton = popularButtons[index];
    const popularContent = popularContents[index];
    popularButton.addEventListener('click', function(){
      removeClass();
      popularButton.classList.add('active');
      animation();
      function removeHidden(){
        popularContent.classList.remove('hidden');
      }
      setTimeout(removeHidden, 400)
      popularContent.classList.remove('no-active');
      popularContent.classList.add('active');
    })
  }
  function removeClass(){
    for (let index = 0; index < popularButtons.length; index++) {
      const popularButton = popularButtons[index];
      if(popularButton.classList.contains("active")) {
         popularButton.classList.remove('active');
      }
    }
  }
  // Присвоение класса с задержкой
  function animation(){
    for (let index = 0; index < popularContents.length; index++) {
      const popularContent = popularContents[index];
      if(popularContent.classList.contains("active")) {
        popularContent.classList.remove('active');
        popularContent.classList.add('no-active');
        function hidden(){
          popularContent.classList.add('hidden');
        }
        setTimeout(hidden, 400);
      }
    }
  }
}
//================= Placeholder =======================//

let inputs = document.querySelectorAll('[data-input]');
let placeholders = document.querySelectorAll('[data-placeholder]');

for (let index = 0; index < inputs.length; index++) {
  const input = inputs[index];
  const placeholder = placeholders[index];
  input.addEventListener('focus', function(){
      removeFocus();
      placeholder.classList.add('focus');
      
  })
  function removeFocus(){
    for (let index = 0; index < placeholders.length; index++) {
      const placeholder = placeholders[index];
      if(placeholder.classList.contains("focus")){
        placeholder.classList.remove('focus');
      }
    }
  }
}

//================== Сheck ========================//
// Галочка в форме
let check = document.querySelector('.form__check')
if(check){
  check.addEventListener('click', function(){
    check.classList.toggle('active');
  })
}

let checkPopup = document.querySelector('.popup__check')
if(checkPopup){
  checkPopup.addEventListener('click', function(){
    checkPopup.classList.toggle('active');
  })
}
//================= Sidebar-Category ===================//

let categoryLists = document.querySelectorAll('.sidebar-category__list'); 
let categoryItems = document.querySelectorAll('.sidebar-category__item');

if(categoryItems.length > 0){
  for (let index = 0; index < categoryItems.length; index++) {
    const categoryItem = categoryItems[index];
    categoryItem.addEventListener("click", function(){
      removeClass();
      categoryItem.classList.add('active');
      // Поведение блока на мобильных
      for (let index = 0; index < categoryItems.length; index++) {
        const categoryItem = categoryItems[index];
        categoryItem.classList.toggle('open');
        categoryItem.classList.toggle('down-arrow')
      }
    });
  }

  function removeClass(){
    for (let index = 0; index < categoryItems.length; index++) {
      const categoryItem = categoryItems[index];
      if(categoryItem.classList.contains("active")){
        categoryItem.classList.remove('active');
      }
    }
  }
}


//================== Product-page =========================// 

let productImage = document.querySelector('.image-block-product__image'); // Большое изображение в блоке
let slideImages = document.querySelectorAll('[data-image]'); // Маленькие изображения слайдера

// Изображение из слайдера при наведении показываеться в основном блоке.
if(slideImages.length > 0){
  for (let index = 0; index < slideImages.length; index++) {
    const slideImage = slideImages[index];
    slideImage.addEventListener("mouseover", function(){
      productImage.innerHTML = slideImage.innerHTML;
    })
  }
}
//================== Tab =========================//

let tabButtons = document.querySelectorAll('.tab-product__button');
let tabContents = document.querySelectorAll('.tab-product__content');

if(tabButtons.length > 0){
  for (let index = 0; index < tabButtons.length; index++) {
    const tabButton = tabButtons[index];
    tabButton.addEventListener('click', function(){
      const tabContent = tabContents[index];
      removeClass();
      tabContent.classList.add('active');
      tabButton.classList.add('active');
    })
  }
  function removeClass(){
    for (let index = 0; index < tabButtons.length; index++) {
      const tabButton = tabButtons[index];
      const tabContent = tabContents[index];
      if(tabButton.classList.contains("active")){
        tabButton.classList.remove('active');
        tabContent.classList.remove('active');
      }
      
    }
  }
}

//==================== Popup ==================//

let popupButtons = document.querySelectorAll('[data-popup]'); // кнопки по которым открываеться попап

if(popupButtons.length > 0){
  let popupFeedback = document.querySelector('.popup');
  let popupCloseArea = document.querySelector('.popup__area');
  let popupClose = document.querySelector('.popup__close');
  // Открытие попапа
  for (let index = 0; index < popupButtons.length; index++) {
    const popupButton = popupButtons[index];
    popupButton.addEventListener('click', function(){
      popupFeedback.classList.add("open");
    })
  }
  // Закрываем попап при нажатии на крестик
  popupClose.addEventListener("click", function(){
    popupFeedback.classList.remove("open");
  })
  // Закрытие попапа при нажатии на темную область
  popupCloseArea.addEventListener("click", function(){
    popupFeedback.classList.remove("open");
  })
}

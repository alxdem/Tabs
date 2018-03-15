'use strict'; // этот код будет работать по современному стандарту ES5

function dingoTabs() {
  var dingoTabsButtonsBlock = document.querySelector('.dingo-tabs-toggle'); // Блок с кнопками-переключателями
  var dingoTabsButtons = document.querySelectorAll('.dingo-tabs-toggle button'); // Массив кнопок-переключателей
  var dingoTabsContents = document.querySelectorAll('.dingo-tabs-item'); // Массив блоков с контентом


  var tabClickHandler = function(e) {
    var target = e.target;

    // Всплытие: пока элемент не равен dingoTabsButtonsBlock всплываем дальше
    while (target !== dingoTabsButtonsBlock){
      if(target.tagName === 'BUTTON'){
        var targetId = 'dingo-tabs-content-' + target.id.slice(18); // Получаем ID кнопки, убираем слова кроме номера, спереди дописываем ID блока с контентом
        for (var i = 0; i < dingoTabsContents.length; i++) {
          dingoTabsContents[i].classList.remove('active');
        }
        document.querySelector('#' + targetId).classList.add('active');
      }

      target = target.parentNode;

    }
  }

  dingoTabsButtonsBlock.addEventListener('click', tabClickHandler); // Вешаем обработчик на блок с кнопками

}

dingoTabs();

import {Validator} from 'js-form-validator/js-form-validator.js';


document.addEventListener('DOMContentLoaded', () => {
  //ищем все формы
  const forms = Array.from(document.getElementsByClassName('js-form-ajax'))
  
 
  //идем по ним
  forms.forEach(form => {
    //создаем новый инстант валидатора, подвязав к нему форму
    const validator = new Validator(form, async function (err, is_valid) {
      //если форма валидна
      if (is_valid){
        // берем метод с дата-атрибута
        const method = form.dataset.method
        // берем ссылку с дата-атрибута
        const action = form.dataset.action
        // получаем все с полей в виде форм даты
        const body = new FormData(form)
        // преобразовываем в JSON, смотря, что хочет сервер
        const value = Object.fromEntries(body.entries());
        // создаем запрос на тот action, что нашли
        const response = await fetch(action, {
          // с тем методом, что нашли. Сокращенная запись method
          method: method,
          // так надо
          headers: {
            'Content-Type': 'application/JSON;charset=utf-8',
          },
          // превращаем наш обьект с данными в строку. так надо
          body: JSON.stringify(value),
        });
        // если все ок
        if (response.ok) {
          let result = await response.json();
          console.log(result)
          form.reset()
        }
      }
    })
    
  });

})
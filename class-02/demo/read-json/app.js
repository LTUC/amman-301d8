'use strict';

function Dog(dog) {
  this.name = dog.name;
  this.image_url = dog.image_url;
  this.hobbies = dog.hobbies;
}

//Rendering Manually
// Dog.prototype.render = function() {

//   $('main').append(`
//     <div class=${this.name}>
//       <h2>${this.name}</h2>
//       <img src="${this.image_url}" />
//       <p>${this.hobbies}</p>
//     </div>
//   `);
// };

// Using a clone
Dog.prototype.render = function () {
  let template = $('.dog-template').clone();
  $('main').append(template);
  template.find('h2').text(this.name);
  template.find('img').attr('src', this.image_url);
  template.find('p').text(this.hobbies);
  template.removeClass('dog-template');
};

Dog.readJson = () => {
  const ajaxSettings = {
    method: 'get',
    dataType: 'json'
  };

  $.ajax('data.json', ajaxSettings).then((data) => {
      data.forEach((item) => {
        let dog = new Dog(item);
        dog.render();
      });
    });
};

 $(() => Dog.readJson());


'use strict';

function Dog(dog) {
  this.name = dog.name;
  this.image_url = dog.image_url;
  this.hobbies = dog.hobbies;
}

//Rendering Manually
// Dog.prototype.render = function(){
//     $('main').append(`
//     <div class = ${this.name}>
//         <h2>${this.name}</h2>
//         <img src = ${this.image_url}>
//         <p>${this.hobbies}</p>
//     </div>
//     `);
// }


// Using a clone
Dog.prototype.render = function () {
  let template = $('.dog-template').clone(); //select the div by its class and clon it, so we're not working on the class itself, every time we make a new copy.
  $('main').append(template);
  template.find('h2').text(this.name);
  template.find('img').attr('src', this.image_url);
  template.find('p').text(this.hobbies);
  template.removeClass('dog-template');
};

//getting the data from external file(data.json)
Dog.readJson = () => { //readJson is a method associated with the constructor itself
 
    const ajaxSettings = {
    method: 'get', 
    dataType: 'json'
  };

  
  $.ajax('data.json', ajaxSettings)//$ refers to JQuery //ajax is sth to interact with web //ajaxSetting getting the json from the file
  .then((data) => { 
    data.forEach((item) => { //looping over the data array //item is each object in the data array
        let dog = new Dog(item);
        dog.render(); //call the render function
      });
    });

};


 $(() => Dog.readJson()); //alternative for ----- $(document).ready(function(){Dog.readJson()});
'use strict';

let neighborhoods = [];

// REVIEW: This is another way to use a constructor to duplicate an array of raw data objects

function Neighborhood(rawDataObject) {
  for (let key in rawDataObject) {
    this[key] = rawDataObject[key];
  }
}

// Demo Part 1: Build it all with jQuery
Neighborhood.prototype.toHtml = function () {
  let template = $('#mustache-template').html();
  let html = Mustache.render(template, this);
  return html;
};


// Demo Part 2: Use jQuery to clone

// Demo Part 3: Mustache
// 1. Get the template from the HTML document
// 2. Use Mustache to "render" new html by merging the template with the data
// 3. Do not forget to return the HTML from this method


//data source in the other JS file
neighborhoodDataSet.forEach(neighborhoodObject => {
  neighborhoods.push(new Neighborhood(neighborhoodObject));
});

neighborhoods.forEach(ourNewNeighborhoodObject => {
  $('#neighborhoods').append(ourNewNeighborhoodObject.toHtml());
});

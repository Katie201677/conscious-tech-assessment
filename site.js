// move bxslider content to right column. 

const footer = document.querySelector("#footer");
const rotator = document.querySelector("#staff-rotator");
const sidebar = document.querySelector("#sidebar");

footer.removeChild(rotator);
sidebar.appendChild(rotator);

// helper functions for bxslider callback:

const extractName = (inputString) => {
  const regex = /(?<=people\/).*(?=\.jpg)/g;
  let name = inputString.match(regex);
  return name[0];
}

const formatName = (name) => {
  return name.replace("_", " ");
}

const formatNameForLink = (name) => {
  return name.replace("_", "-");
}

//bxslider:

$(document).ready(function(){
  $('.bxslider').bxSlider({
    controls: false,
    responsive: true,
    slideWidth: 250,
    buildPager: function(index) {
      img = $('#staff-rotator img').eq(index);
      const src = img.attr('src');
      const name = extractName(src);
      const formatted = formatName(name);
      const nameForLink = formatNameForLink(name);
      return `<a class="name" href="https://www.conscious.co.uk/site/people/${nameForLink}">${formatted}</a>`;
    }
  });
});
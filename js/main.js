$(function(){
  
  $($('.menu a')[0]).on('click', (e) => {
    e.preventDefault()
    $('.portfolio').show()
    $('.contacts').hide()
  })

  $($('.menu a')[1]).on('click', (e) => {
    e.preventDefault()
    $('.portfolio').hide()
    $('.contacts').show()
  })

})
$(function(){

  const projects = {
    projects: [
      {
        img: 'img/p1.jpg',
        desc: 'Scroll Effects, 360° Images, Masonry, Google Maps API',
        desc2: 'TerraDesign',
        link: 'https://terra-design.com.ua'
      },
      {
        img: 'img/p5.jpg',
        desc: 'Custom Form Inputs',
        desc2: 'AstroVeil',
        link: 'https://astroveil.com/'
      },
      {
        img: 'img/p8.jpg',
        desc: 'jQuery Accordion, YouTube API',
        desc2: 'Tooligram Academy',
        link: 'https://tooligram.academy/kurs/'
      },        
      {
        img: 'img/p2.jpg',
        desc: 'Sticky Header, Smooth Nav Scroll',
        desc2: 'SMM Hero',
        link: 'http://smmhero.su/'
      },      
      {
        img: 'img/p4.png',
        desc: 'Chrome extension, AliExpress API',
        desc2: 'Dropified',
        link: 'https://chrome.google.com/webstore/detail/dropified/andfkdmajakgfaegeepffdpejahkphje'
      },
      {
        img: 'img/p7.jpg',
        desc: 'First Commercial Project, PHP Forms',
        desc2: 'AnyTimeTaxi',
        link: 'http://www.ezmanagement.net/'
      },      
      {
        img: 'img/p3.jpg',
        desc: 'Various Sliders',
        desc2: 'Segmento',
        link: 'https://segmento-target.ru'
      },             
      {
        img: 'img/p6.jpg',
        desc: 'Fullscreen Layout, Sticky Sidebar, Google Maps API',
        desc2: 'Viven',
        link: 'http://viven.com.ua/'
      },
      {
        img: 'img/p9.jpg',
        desc: 'Form Validation, Relative Dashed Background',
        desc2: 'Bizwebinar',
        link: 'http://bizwebinar.ru/'
      }
    ]
  }

  var template = $('#template').html();
  Mustache.parse(template);   // optional, speeds up future uses
  var rendered = Mustache.render(template, projects);
  $('.portfolio').html(rendered);

})
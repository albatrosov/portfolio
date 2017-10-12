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
        img: 'img/portf-7.jpg',
        desc: 'WordPress, WP Template customization',
        desc2: 'Bluetelcom',
        link: 'http://bluetelcom.cl/'
      },
      {
        img: 'img/portf-5.jpg',
        desc: 'First commercial project, PHP-mailing, Adaptive design',
        desc2: 'AnyTimeTaxi',
        link: 'http://anytimetaxipcb.com/'
      },
      {
        img: 'img/portf-8.png',
        desc: 'Chrome extension, AliExpress API',
        desc2: 'Dropified',
        link: 'https://chrome.google.com/webstore/detail/dropified/andfkdmajakgfaegeepffdpejahkphje'
      },
      {
        img: 'img/portf-2.png',
        desc: 'Adaptive and Responsive elements, Sprites',
        desc2: 'MilliDesign (Demo)',
        link: '/MilliDesign/index.html'
      },
      {
        img: 'img/portf-1.png',
        desc: 'jQuery-UI, Slider with customization',
        desc2: 'Build Home (Demo)',
        link: '/Build-Home/index.html'
      },
      {
        img: 'img/portf-6.jpg',
        desc: 'Bootstrap',
        desc2: 'EzManagement',
        link: 'http://www.ezmanagement.net/'
      }
    ]
  }

  var template = $('#template').html();
  Mustache.parse(template);   // optional, speeds up future uses
  var rendered = Mustache.render(template, projects);
  $('.portfolio').html(rendered);


  console.log()
})
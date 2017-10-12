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



$(document).on('turbolinks:load',function(){
  $('.progress_change').on('change', function(e){
      e.preventDefault()
      console.log($(this).attr('id'))
      $(this).submit()
    });
  }
)

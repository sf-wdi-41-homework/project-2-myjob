


$(document).on('turbolinks:load',function(){
  console.log("test")
  $('.progress_change').on('change', function(e){
      e.preventDefault()
      console.log($(this).attr('id'))
      $(this).submit()
    });
  }
)

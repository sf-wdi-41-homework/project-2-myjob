$( document ).ready(function() {
    console.log("jquery working")


    $('.progress_change').on('change', function(e){
      e.preventDefault()
      console.log($(this).attr('id'))
      $(this).submit()

    })

  });

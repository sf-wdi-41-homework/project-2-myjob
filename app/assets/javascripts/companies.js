$( document ).ready(function() {
    console.log("jquery working")
    $('#progress_edit').on('click', function(){
      $('.progress_icon').hide()
      $('.progress_change').append('')
    })
});

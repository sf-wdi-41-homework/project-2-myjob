$( document ).ready(function() {
    console.log("jquery working")
    // $('.progress_icon').on('click', function(){
    //   $('.progress_icon').hide()
    //   $('.progress_change').append(`
    //     <form class="form-horizontal" action="/company/4" accept-charset="UTF-8" data-remote="true" method="post"><input name="utf8" type="hidden" value="✓"><input type="hidden" name="_method" value="patch"><input type="hidden" name="authenticity_token" value="3rP3/CkK0y8Ri8PXTH903qy7oL0YIji906CzpPFLxAmnlT5PxkzJX9vH7kXvMe3aeNR52VbAsM3mq2bemALz0w==">
    //       <div class="form-group">
    //       		<select name="companies[progress]"><option value="Resume Sent">Resume Sent</option>
    //       <option value="Screen">Screen</option>
    //       <option value="Interview">Interview</option>
    //       <option value="Negotiation">Negotiation</option>
    //       <option selected="selected" value="Completed">Completed</option></select>
    //       </div>
    //       <div class="form-group">
    //       		<input type="submit" name="commit" value="Submit" class="btn-sm btn-primary" data-disable-with="Submit">
    //       </div>
    //     </form>`)
    $('.progress_change select').on('change', function(event){
      let div = $(this).parent()
      div.parent('form').submit()
      
    })
  });

$( document ).ready(function() {
    console.log("jquery working")


    $('.progress_change').on('change', function(e){
      e.preventDefault()
      console.log($(this).attr('id'))
      $(this).submit()

    })

  });

  // $.ajax({
  //      method: 'GET',
  //      url: '/companies/1.json',
  //      // data: ,
  //      success: renderProgress,
  //      error: handleError
  //  })
  //
  //
  // function handleError(a, b, c) {
  //     console.log(a, b, c);
  // }
  //
  // function renderProgress(json){
  //   json.forEach(function(company){
  //     let progress_bar = ""
  //     if(company.progress === "Resume Sent"){
  //       progress_bar = `
  //       <div class="col-xs-1 text-center progress_bar row" >
  //       </div>
  //       <div class="col-xs-4">
  //       </div>
  //       <div class="col-xs-5">
  //         <form class="progress_change form-horizontal" id="${company.id}" action="/company/${company.id}" accept-charset="UTF-8" data-remote="false" method="post">
  //           <div class="form-group">
  //               <select name="companies[progress]">
  //                 <option value="Resume Sent">Resume Sent</option>
  //                 <option value="Screen">Screen</option>
  //                 <option value="Interview">Interview</option>
  //                 <option value="Negotiation">Negotiation</option>
  //                 <option value="Completed">Completed</option>
  //               </select>
  //               <a rel="nofollow" data-method="delete" href="/company/${company.id}" remote-data="true">
  //                 <span class="glyphicon glyphicon-trash"></span>
  //               </a>
  //           </div>
  //         </form>
  //       </div>
  //       `
  //     }
  //     if(company.progress === "Screen"){
  //       progress_bar = `
  //       <div class="col-xs-2 text-center progress_bar row" >
  //       </div>
  //       <div class="col-xs-3">
  //       </div>
  //       <div class="col-xs-5">
  //         <form class="form-horizontal progress_change" id="${company.id}"action="/company/${company.id}" accept-charset="UTF-8" data-remote="true" method="post">
  //           <div class="form-group">
  //               <select name="companies[progress]">
  //                 <option value="Resume Sent">Resume Sent</option>
  //                 <option selected="selected" value="Screen">Screen</option>
  //                 <option value="Interview">Interview</option>
  //                 <option value="Negotiation">Negotiation</option>
  //                 <option value="Completed">Completed</option>
  //               </select>
  //               <a rel="nofollow" data-method="delete" href="/company/${company.id}" remote-data="true">
  //                 <span class="glyphicon glyphicon-trash"></span>
  //               </a>
  //           </div>
  //         </form>
  //       </div>
  //       `
  //     }
  //
  //     $('#progress_display').append(`
  //       <div class="row" style="height:7vh;">
  //         <div class="col-xs-2">
  //           <h4>
  //             <a href='/company/${company.id}'>${company.company_name}</a>
  //           </h4>
  //         </div>
  //         ${progress_bar}
  //       </div>
  //       `)
  //   })
  // }

$( document ).on('turbolinks:load', function() {
    console.log("jquery working")


    $('.progress_change').on('change', function(e){
      e.preventDefault()
      console.log($(this).attr('id'))
      $(this).submit()

    })

    google.charts.load("current", {packages:["corechart"]});
    google.charts.load('current', {packages:['gauge']});


    console.log('app.js loaded!');

    $.ajax({
        method: 'GET',
        url: '/companies/1.json',
        // data: ,
        success: renderChart,
        error: handleError
    })

    function renderChart(json) {
        justNumbs = [];
        arrayUpdates = [['Company','Date']];
        if (json.length<5) {
            arrayUpdates = arrayUpdates.concat([
                ['Acme Company',20171121],
                ['Funny Company',20171124],
                ['Uber Eats',20171122],
                ['General Assembly',20171124],
                ['Acme Company',20171124] ]);
            justNumbs = [20171121,20171124,20171122,20171124,20171124];
        }

        json.forEach(function(entry) {
            var compactDate = entry.created_at;
            compactDate = compactDate.slice(0,4) + compactDate.slice(5,7) + compactDate.slice(8,10);
            arrayUpdates.push([entry.company_name,parseInt(compactDate)]);
            justNumbs.push(parseInt(compactDate));
        })

        // for (var i=0; i<justNumbs.length; i++) {
        // 	console.log(justNumbs[i]);
        // }

        var smallest = Math.min.apply(null,justNumbs);
        var biggest  = Math.max.apply(null,justNumbs);
        var numbDays = biggest-smallest+1;
        var perDay   = justNumbs.length / numbDays;
        var workAmt = perDay>0.5 ? "Good Job!" : "Maybe some more";
        $('#status').append(workAmt);
        // console.log(smallest,biggest,numbDays,perDay);

        google.charts.setOnLoadCallback(drawChart);

        function drawChart() {
            var data = google.visualization.arrayToDataTable(arrayUpdates);

            var formatter = new google.visualization.NumberFormat({pattern: '#'});
            formatter.format(data, 1);

            var options = {
                histogram: {bucketSize: 1},
                title: 'Company Updates Per Day (mouse over)',
                legend: { position: 'none' },
                hAxis: {textPosition: 'none'},
            };

            var chart = new google.visualization.Histogram(document.getElementById('progress_chart'));
            chart.draw(data, options);


            var data = google.visualization.arrayToDataTable([
                ['Label', 'Value'],
                ["AvgPerDay", perDay],
            ]);
            var options = {
                yellowFrom: 0,
                yellowTo: 0.5,
                greenFrom: 0.5,
                greenTo: 4,
                max: 4,
                min: 0,
                yellowColor: 'yellow',
            };
            var chart = new google.visualization.Gauge(document.getElementById('assess_meter'));
            chart.draw(data, options);
        }		//draw chart
    }			//render chart


    //This function handles all the error occured in ajax
    function handleError(a, b, c) {
        console.log(a, b, c);
    }
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

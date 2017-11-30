google.charts.load("current", {packages:["corechart"]});
google.charts.load('current', {packages:['gauge']});

$(document).ready(function() {
    //sanity check!
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
    		var compactDate = entry.updated_at;
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

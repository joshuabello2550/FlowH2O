function tips() {
	var factsArr = ["While you wait for hot water, collect the running water and use it to water plants.", "Minimize evaporation by watering during the early morning hours when temperatures are cooler and winds are lighter.", "Turn off the water while you brush your teeth and save up to 4 gallons a minute. That’s up to 200 gallons a week for a family of four.","Wash your pets outdoors, in an area of your lawn that needs water.","Take 5-minute showers instead of baths. A full bathtub requires up to 70 gallons of water.","Designate one glass for your drinking water each day, or refill a water bottle. This will cut down on the number of glasses to wash.","Washing dark clothes in cold water saves water and energy, and helps your clothes retain their color.","When washing dishes by hand, don’t let the water run. Fill one basin with wash water and the other with rinse water.","Use a broom instead of a hose to clean patios, sidewalks and driveways, and save water every time.","When doing laundry, match the water level to the size of the load.","Wash your fruits and vegetables in a pan of water instead of running water from the tap.","Use the garbage disposal sparingly. Instead, compost vegetable food waste and save gallons every time.","Use a commercial car wash that recycles water. Or, wash your car on the lawn, and you’ll water your grass at the same time.","Leave lawn clippings on your grass, this cools the ground and holds in moisture.","Don’t water your lawn on windy days when most of the water blows away or evaporates.","Next time you add or replace a flower or shrub, choose a low-water-use plant and save up to 550 gallons each year.","Some commercial refrigerators and ice-makers are cooled with water. Upgrade to air-cooled appliances for significant water savings.","Water only when necessary. More plants die from over-watering than from under-watering.","When shopping for a new washing machine, compare resource savings among Energy Star models. Some can save up to 20 gallons of water per load.","For more immediate hot water and energy savings, insulate hot water pipes."];
	console.log(factsArr);
	var slcFact = Math.floor((Math.random() * 19) + 0);
	var gottenFact = factsArr[slcFact];
	document.getElementById('tipstosave').innerHTML = "Did you know? " + gottenFact;
}

function scatterGraphFunction() {
	var lineArr = window.lineArr;
    var timestampArr = window.timestampArr;
    var vlflArr = window.vlflArr;
    var epochTimeArr = window.epochTimeArr;
    var sGVArr = [];
    var sGVString = "";

    var lengthBoi = 0;
    lengthBoi = lineArr.length;
    lengthBoi = lengthBoi - 1;
    var biglengthBoi = lineArr.length - 1;

    var todaySum = 0;

    for(var i=0; i<vlflArr.length; i++)
    {
        todaySum = Number(todaySum) + Number(vlflArr[i]);
    }
    todaySum /= 1000;
    todaySum = todaySum.toFixed(2);
    var todaySumGallon = todaySum * 0.264172;
    todaySumGallon = todaySumGallon.toFixed(2);

    for(var i=0; i<vlflArr.length; i++)
    {
        vlflArr[i] = Number(vlflArr[i]);
        epochTimeArr[i] *=1000;
    }

    console.log(vlflArr);
    console.log(lengthBoi);

    var firstTime = epochTimeArr[0];

    var dps = []; //dataPoints.

	for (var i = 0; i < epochTimeArr.length; i++) {
		dps.push({
	      x: epochTimeArr[i],
	      y: vlflArr[i]
	    });
	}

	console.log(dps);
	    
	var chart = new CanvasJS.Chart("chartContainer", {
		  height:300,
		  axisX: {
		    title: "Time"
		  },
		  axisY: {
		    title: "Water Usage (mL/sec)"
		  },
		  data: [{
		    type: "line",
		    xValueType: "dateTime",
		    dataPoints: dps
		  }]
	});

	chart.render();

	document.getElementById('totalToday').innerHTML =  "Your Total Water Usage Today: " + todaySum + " Liters (" + todaySumGallon + " Gallons).";

	window.todaySum = todaySum;
}

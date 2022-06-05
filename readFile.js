function readTextFile(file)
{
	Date.prototype.getUnixTime = function() { return this.getTime()/1000|0 };
    if(!Date.now) Date.now = function() { return new Date(); }
    Date.time = function() { return Date.now().getUnixTime(); }

    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", file, false);
    rawFile.onreadystatechange = function ()
    {
        if(rawFile.readyState === 4)
        {
            if(rawFile.status === 200 || rawFile.status == 0)
            {
                var allText = rawFile.responseText; //reading text
                var lineArr = allText.split('\n'); 	// into array; spliting terms by new lines
                lineArr = lineArr.filter(Boolean);

                var parsedUnixTime;

                var timestampArr = [];
				var vlflArr = [];
				var epochTimeArr = [];

                for (var i = 0; i < lineArr.length; i++) {
                	lineArr[i] = lineArr[i].replace('\r', '');
				    var split = lineArr[i].split(";");  // just split once
				    timestampArr.push(split[0]); // before
				    vlflArr.push(split[1]); // after
				}
                
				for (var i=0; i<timestampArr.length;i++) {
					// Parse a date and get it as Unix time
					var parsedUnixTime = new Date(timestampArr[i]).getUnixTime();
					epochTimeArr.push(parsedUnixTime);
				}

                window.lineArr = lineArr;
                window.timestampArr = timestampArr;
                window.vlflArr = vlflArr; 
                window.epochTimeArr = epochTimeArr;      
            }
        }
    }
    rawFile.send(null);
}
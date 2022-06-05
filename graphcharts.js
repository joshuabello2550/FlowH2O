function lineGraphFunction() {

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

        for(var i=0; i<lineArr.length; i++)
        {
            sGVArr.push("{" + epochTimeArr[i] + "," + vlflArr[i] + "}");
        }

        console.log('sGVArr');
        console.log(sGVArr);

        console.log(lengthBoi);

        for(var i=0; i<lengthBoi; i++)
        {
            sGVString = sGVString + sGVArr[i] + " ,\n ";
        }

        sGVString = sGVString + sGVArr[biglengthBoi];

        console.log(sGVString);
        var firstTime = epochTimeArr[0];

        var myConfig1 = {
              "type": "scatter", 
              "utc":true,
              "timezone":-8,
              "scale-x":{
                "step":"2day",
                "transform":{
                  "type":"date",
                  "all":"%m/%d/%y"
                }
              },
              "series": [
                    {
                      "values": [sGVString],
                    }          
                ]
            }

        zingchart.render({
          id: 'myChart',
          data: myConfig1,
          height: 400,
          width: "100%"
        });
}
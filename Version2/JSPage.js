// JavaScript source code
/*Runs the code once the webpage is open*/
$(document).ready(function () {
    RandomTip();
});

/*Calls the other functions to run and insertRandom tip on to the page*/
function RandomTip() {
    console.log('Inserting Random Tip On Page')
    var tip1 = randomTip1();
    console.log(tip1);
    insertRandomTip1(tip1);
    var tip2 = randomTip2();
    console.log(tip2);
    insertRandomTip2(tip2);
    var tip3 = randomTip3();
    console.log(tip3);
    insertRandomTip3(tip3);

}
/*Tips and tricks to save water that are randomly displayed each time you acces the webpage*/
var dailyTips = [
    "Turn off the tap while brushing your teeth. You can save almost 150 gallons of water each month when you turn the water off.",
    "Take shorter showers. Shaving a few minutes off your shower time will greatly reduce the amount of water used.",
    "Fix leaks and leaky appliances. Whether you do it yourself or hire a plumber, fixing leaks will save lots of water.",
    "Monitor your water bill. If your bill goes up one month, check for leaks and extra unnecessary usage.",
    "Buy water efficient appliances like sinks, showers, and washing machines. The more efficient the machine, the less water they use.",
    "Flush less water. Older toilets use a lot of water. Fill a half gallon jug with water and put it in the toilet tank to use less water when you flush.",
    "Turn off the tap while you scrub your hands. Keeping water from running while you wash your hands will save several gallons each month.",
    "Wash only full loads of laundry. Doing fewer large loads of laundry can save a lot of water.",
    "Run your dishwasher only when it it is full for the same reason as with the washing machine.",
    "Using a dishwasher is more efficient than washing dishes by hand.",
    "Insulating your pipes will keep them from freezing in the winter and will also help your water heat up faster.",
    "Do not use water to defrost food. This popular method of defrosting uses a lot of water.",
    "Avoid flushing the toilet for little things. Doing this can save 5-6 gallons per flush.",
    "When you wash dishes by hand, fill up the sink instead of letting the water run while you scrub.",
    "Carefully water your lawn. Place sprinklers to avoid overlap and watering things that do not need watering (like sidewalks and the road).",
    "Water your lawn only when it needs to be watered.",
    "Using less electricity can also save water. Power plants are cooled on thousands of gallons of water. By using less electricity, you help save water.",
    "Harvesting rainwater is becoming more popular. There are a lot of things you can do with it.",
    "Keep a pitcher with water in the fridge, or use a water bottle instead of turning on the tap when you need a drink.",
    "Teach your kids how to save water. Every little bit helps.",
    "Learn where the emergency water shut off for your home is and how to use it.",
    "Have your plumbing and pipes inspected regularly? This can prevent major problems from happening.",
    "Clean your sidewalks and driveways with brooms instead of the hose.",
    "Use mulch in your garden and flower beds to help keep water in the soil longer.",
    "Adding clay into the dirt in your garden and flower bed helps water move through the soil more slowly.",
    "Water your plants and grass in the early morning to avoid losing water to evaporation",
    "Evaluate your use of water for lawn decorations like birdbaths and water fountains.",
    "Reduce the amount of grass and plants in your yard. Xeriscaping is becoming a popular, water saving way to decorate your yard.",
    "Wash your car in a car wash, not at home. Car washes recycle the water they use, which is something you can not do at home.",
    "Save the water you cook pasta in to water your plants. Just make sure it is cool first.",
    "Cook food in as little water as possible.",
    "Washing clothes in cooler water reduces water usage and energy",
    "Check to see if city or county codes will let you cycle your used washing machine water to water your plants.",
    "When filling the bathtub, plug the tub as soon as the water starts, then adjust the temperature as the tub fills.",
    "Plug the sink when you shave instead of running water to rinse your razor.",
    "Taking a shower instead of a bath saves several gallons of water.",
    "Make sure to check for leaks in your faucets. If your faucets drip once a second, that can total up to five gallons each day.",
    "Mow your lawn between 1.5 to 2 inches. Taller grass shades the roots and helps prevent water from evaporating.",
    "Aerating your lawn will help water reach the roots of the grass more quickly.",
    "Fertilizing your lawn increases the need for water. Only use as much fertilizer as you need.",
    "Make sure to weed regularly. Weeds compete with grass and plants for water and nutrients.",
    "If you have a swimming pool, use a pool cover to reduce evaporation and maintain pool chemistry.",
    "Do not overfill your pool. Lower water levels reduce spilling and keep water from splashing out.",
    "If you have the option, join a community rec center and use their pool.",
    "Winterize outdoor spigots to keep pipes from freezing or bursting in the winter.",
    "Wash your pets on parts of your lawn that need water.",
    "Do not throw out your pets old drinking water.Use it to water trees or plants.",
    "Install an instant water heater by your kitchen sink. This way, the water does not need to run to heat up.",
    "Put leftover ice cubes in potted plants instead of throwing them out.",
    "Reusing your towels is a great way to save water."
]
/*Gets the first random tip form the array*/
function randomTip1() {
    console.log('Inserting randomTip1');
     return dailyTips[Math.floor(Math.random() * dailyTips.length)];
}
/*Gets the second random tip form the array*/
function randomTip2() {
    console.log('Inserting randomTip2');
    return dailyTips[Math.floor(Math.random() * dailyTips.length)];
}
/*Gets the thrid random tip form the array*/
function randomTip3() {
    console.log('Inserting randomTip3');
    return dailyTips[Math.floor(Math.random() * dailyTips.length)];
}
/*inserts the random tip onto the screen*/
function insertRandomTip1(text) {
    var p = document.createElement('p1');
    var text = document.createTextNode(text);
    p.appendChild(text);
    var ListOfTips = document.getElementById('Tip1');
    ListOfTips.appendChild(p);
}
function insertRandomTip2(text) {
    var p = document.createElement('p1');
    var text = document.createTextNode(text);
    p.appendChild(text);
    var ListOfTips = document.getElementById('Tip2');
    ListOfTips.appendChild(p);
}
function insertRandomTip3(text) {
    var p = document.createElement('p1');
    var text = document.createTextNode(text);
    p.appendChild(text);
    var ListOfTips = document.getElementById('Tip3');
    ListOfTips.appendChild(p);
}


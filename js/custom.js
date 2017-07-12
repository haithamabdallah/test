
document.getElementById('sc1').addEventListener('click', function() {
    
    var order = ITEMS[1];

    if (this.checked) {

        barChartData.labels.push(order);
        window.myBar.update();

    } else {

    	barChartData.labels.splice(order, 1);
    	window.myBar.update();

    }
});
document.getElementById('pipe').addEventListener('click', function() {
    
    var order = ITEMS[2];

    if (this.checked) {

        barChartData.labels.push(order);
        window.myBar.update();

    } else {

    	barChartData.labels.splice(order, 1);
    	window.myBar.update();

    }
});
document.getElementById('map').addEventListener('click', function() {
    
    var order = ITEMS[3];

    if (this.checked) {

        barChartData.labels.push(order);
        window.myBar.update();

    } else {

    	barChartData.labels.splice(order, 1);
    	window.myBar.update();

    }
});
document.getElementById('rawex').addEventListener('click', function() {
    
    var order = ITEMS[4];

    if (this.checked) {

        barChartData.labels.push(order);
        window.myBar.update();

    } else {

    	barChartData.labels.splice(order, 1);
    	window.myBar.update();

    }
});
document.getElementById('water').addEventListener('click', function() {
    
    var order = ITEMS[5];

    if (this.checked) {

        barChartData.labels.push(order);
        window.myBar.update();

    } else {

    	barChartData.labels.splice(order, 1);
    	window.myBar.update();

    }
});
document.getElementById('windp').addEventListener('click', function() {
    
    var order = ITEMS[6];

    if (this.checked) {

        barChartData.labels.push(order);
        window.myBar.update();

    } else {

    	barChartData.labels.splice(order, 1);
    	window.myBar.update();

    }
});
document.getElementById('minig').addEventListener('click', function() {
    
    var order = ITEMS[7];

    if (this.checked) {

        barChartData.labels.push(order);
        window.myBar.update();

    } else {

    	barChartData.labels.splice(order, 1);
    	window.myBar.update();

    }
});


 //DOM loaded 
$('#la-left-icon').click(function()
{   
    $("#left-col").toggle();     
});
$('#la-right-icon').click(function()
{   
    $("#right-col").toggle();     
});
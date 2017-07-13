// Initialize your app
var myApp = new Framework7({
    modalTitle: 'Bluejob',
    material: true,
});

// Export selectors engine
var $$ = Dom7;

// Add view
var mainView = myApp.addView('.view-main', {
    // Because we use fixed-through navbar we can enable dynamic navbar
});

// Callbacks to run specific code for specific pages, for example for About page:
myApp.onPageInit('jobs', function (page) {
    myApp.showIndicator();
	setTimeout(function () {
	    myApp.hideIndicator();
	}, 2000);
});

myApp.onPageInit('profile', function (page) {
     myApp.showIndicator();
    setTimeout(function () {
        myApp.hideIndicator();
    }, 2000);
});

myApp.onPageInit('index', function (page) {
    myApp.showIndicator();
    setTimeout(function () {
        myApp.hideIndicator();
    }, 2000);
});


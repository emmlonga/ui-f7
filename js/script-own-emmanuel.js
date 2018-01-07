// Initialize app and store it to myApp variable for futher access to its methods
var myApp = new Framework7({
    modalTitle: 'Attention!',
    calendar: {
    inputEl: '#demo-calendar-date-format',
    dateFormat: 'dd.mm.yyyy',
  }
, });
// We need to use custom DOM library, let's save it to $$ variable:
var $$ = Dom7;
// Add view
var mainView = myApp.addView('.view-main', {});


// Now we need to run the code that will be executed only for About page.
// Using page callback for page (for "about" page in this case) (recommended way):
myApp.onPageInit('about', function (page) {
        // Do something here for "about" page
    })
    /** App initialization**/
$(document).ready(function () {
    console.log("App is initialized");
    $('.tab-link-active')[0].click();
    c1status=0;
    c2status=0;
});
// Using page callback for page (for "index" page in this case) (recommended way):
myApp.onPageInit('index', function (page) {
        // Do something here for "index" page
        console.log(page.name + ' initialized');
        $('.tab-link-active')[0].click()

    })

myApp.onPageInit('clients', function (page) {
        // Do something here for "index" page
        console.log(page.name + ' initialized');
    if (c1status==1){
        console.log(page.name + ' aaaa');
        $('#1 i').toggleClass('fa fa-circle-o');
        $('#1 i').toggleClass('fa fa-check-circle-o');
        $('#1 div').css('color', '#4CAF50');
    }
    if (c2status==1){
        $('#2 i').toggleClass('fa fa-circle-o');
        $('#2 i').toggleClass('fa fa-check-circle-o');
        $('#2 div').css('color', '#4CAF50');
    }
    })

myApp.onPageInit('component', function (page) {
        // Do something here for "index" page
    console.log(page.name + ' initialized');
        
    if (c1status==1){
        $('.maintCard').remove();
        $('#sStat').html('On Technician <u onclick="javascript:mainView.router.loadPage(\'index2.html\')">Inventory</u>');
        $('#oStat').html('MTU Technical Service');
        $('#dStat').html('10/01/2018');
        console.log(page.name + ' status 0');
    }
    
    })

myApp.onPageInit('component2', function (page) {
        // Do something here for "index" page
    console.log(page.name + ' initialized');
    $('.mCheck').click(function(){
        $(this).toggleClass('fa fa-circle-o');
        $(this).toggleClass('fa fa-check-circle-o');
    });
    
    if (c1status==1){
        $('.blueCard .accordion-list').remove();
      $('.mTask').html('No maintenance task available');
    }
    
    $$('.open-confirm').on('click', function () {
  myApp.confirm('Is the maintenance task complete?', function () {
      c1status=1
      $('.blueCard .accordion-list').remove();
      $('.mTask').html('No maintenance task available');
    });
    });
    
    })

myApp.onPageInit('component3', function (page) {
        // Do something here for "index" page
    console.log(page.name + ' initialized');
    listHis(C);
    
    if (c1status==1){
        $("#lUl").prepend('<li class="item-content" style="padding-left:0px;"><div class="item-inner" style="padding-right: 0px;"><div class="listItem">                                                <div>10/01/2018</div><div class="listJus">Removed</div><div>MTU</div></div></div></li>');
    }    
    })

myApp.onPageInit('componentb', function (page) {
        // Do something here for "index" page
    console.log(page.name + ' initialized');
        
    if (c2status==1){
        $('.maintCard').remove();
        $('#sStat').html('On Technician <u onclick="javascript:mainView.router.loadPage(\'index2.html\')">Inventory</u>');
        $('#oStat').html('MTU Technical Service');
        $('#dStat').html('10/01/2018');
        console.log(page.name + ' status 0');
    }
    
    })

myApp.onPageInit('componentb2', function (page) {
        // Do something here for "index" page
    console.log(page.name + ' initialized');
    $('.mCheck').click(function(){
        $(this).toggleClass('fa fa-circle-o');
        $(this).toggleClass('fa fa-check-circle-o');
    });
    
    if (c2status==1){
        $('.blueCard .accordion-list').remove();
      $('.mTask').html('No maintenance task available');
    }
    
    $$('.open-confirm').on('click', function () {
  myApp.confirm('Is the maintenance task complete?', function () {
      c2status=1;
      $('.blueCard .accordion-list').remove();
      $('.mTask').html('No maintenance task available');
    });
    });
    
    })

myApp.onPageInit('componentb3', function (page) {
        // Do something here for "index" page
    console.log(page.name + ' initialized');
    listHis(Cb);
    
    if (c2status==1){
        $("#lUl").prepend('<li class="item-content" style="padding-left:0px;"><div class="item-inner" style="padding-right: 0px;"><div class="listItem">                                                <div>10/01/2018</div><div class="listJus">Installed</div><div>CDTM</div></div></div></li>');
    }    
    })

myApp.onPageInit('engine', function (page) {
        // Do something here for "index" page
        console.log(page.name + ' initialized');
    if (c2status==1){
        $('.maintCard').remove();
    }
    })

myApp.onPageInit('engine3', function (page) {
        // Do something here for "index" page
        console.log(page.name + ' initialized');
        if (c1status==1) {
            $("#lUl").prepend('<li class="item-content" style="padding-left:0px;" onclick="javascript:mainView.router.reloadPage(\'componentb.html\')"><div class="item-inner" style="padding-right: 0px;">                                            <div style="color:#EC192F; font-size: 14px"><i class="material-icons">arrow_downward</i></div>                                        <div class="listItem"><div>24/04/17</div><div class="listJus">Oil Filter</div><div>MTU</div></div></div></li>');
        }
        if (c2status==1) {
            $("#lUl").prepend('<li class="item-content" style="padding-left:0px;" onclick="javascript:mainView.router.reloadPage(\'component.html\')"><div class="item-inner" style="padding-right: 0px;">                                            <div style="color:#263884; font-size: 14px"><i class="material-icons">arrow_upward</i></div>                                        <div class="listItem"><div>24/04/17</div><div class="listJus">Oil Filter</div><div>MTU</div></div></div></li>');
        }
    })


    /*rateCourseReview*/
    /*Delete Tags*/
var $$ = Dom7;
function goBack() {
    window.history.go(-1);
}




/**NEW STARTS HERE**/





//*OLD*//

// Open Links popover
function createPopover() {
    var a = -1;
    var popoverHTML = '<div class="popover popover-links">' + '<div class="popover-inner">' + '<div class="list-block">' + '<ul>' + '<li onclick="printNumber(' + "-1" + ');listCourseElement(' + "all_Courses" + ')"><a href="detailedCourseView.html" class="item-link list-button close-popover">My Courses</li>' + '<li><a href="#" class="item-link list-button">My Ratings</li>' + '<li><a href="#" class="item-link list-button">Sign out</li>' + '</ul>' + '</div>' + '</div>' + '</div>';
    myApp.popover(popoverHTML, ".fa-ellipsis-v");
    $(".popover-links").attr("style", "display:block; width:160px; top:56px; right: 6px");
}

/*Compare functions*/
function compareAlphabetical(a, b) {
    if (b.name > a.name) {
        return -1;
    }
    else if (b.name < a.name) {
        return 1;
    }
    else {
        return 0
    }
}

function compareECTS(a, b) {
    return (b.ECTS - a.ECTS)
}

function compareLanguage(a, b) {
    if (b.language > a.language) {
        return -1;
    }
    else if (b.language < a.language) {
        return 1;
    }
    else {
        return 0
    }
}

function compareRating(a, b) {
    return (b.rating - a.rating)
}

function compareFavorites(a, b) {
    if (a.starred & !b.starred) {
        return -1;
    }
    else if (!a.starred & b.starred) {
        return 1;
    }
    else {
        return 0
    }
}
/*COURSE REVIEW*/
//function Rating(text) {
// copy my location
//this.createdBy = user.name;
//this.createdOn = new Date() //now
//this.text = text;
//this.comment = "HELLO"
//this.
// own message
//this.own = true;}
//
/*Slider scales*/
function scaleRating(value) {
    var qualityName = {};
    if (value == 0) {
        qualityName = "very bad";
        x = "0";
    }
    else if (value == 1) {
        qualityName = "bad";
        x = "1";
    }
    else if (value == 2) {
        qualityName = "average";
        x = "2";
    }
    else if (value == 3) {
        qualityName = "good";
        x = "3";
    }
    else if (value == 4) {
        qualityName = "very good";
        x = "4";
    }
    return qualityName, x
}

function filterECTS(value) {
    var lim = parseInt(myApp.formToData("#filterForm").ECTS)
    if (myApp.formToData("#filterForm").limit == "equal") {
        return value.ECTS == lim;
    }
    else {
        return value.ECTS >= lim;
    }
}

function filterRating(value) {
    var lim = parseInt(myApp.formToData("#filterForm").Rating)
    return value.rating >= lim;
}

function filterLanguage(value) {
    var lim = myApp.formToData("#filterForm").Language;
    if (lim == "all") {
        return value.language;
    }
    else {
        return value.language == lim;
    }
}

function filterFavorites(value) {
    var lim = myApp.formToData("#filterForm").viewFavorites[0];
    if (lim == "yes") {
        return value.starred == lim;
    }
    else {
        return value.starred;
    }
}

function filterAttended() {
    var lim = myApp.formToData("#filterForm").hideAttended[0];
    if (lim == "yes") {
        return true;
    }
    else {
        return false;
    }
}


function filterList(asa) {
    var inner = selectedNumber;
    if (inner == -1) {
        inner = 0
    };
    var a = asa[inner][2];
    var a = a.filter(filterECTS);
    var a = a.filter(filterLanguage);
    var a = a.filter(filterFavorites);
    var a = a.filter(filterRating);
    i = asa.length;
    b = Array(i);
    while (i--) {
        if (i == inner) {
            b[i] = [0, 1, 2];
            b[i][0] = asa[i][0];
            b[i][1] = asa[i][1];
            b[i][2] = a;
        }
        else {
            b[i] = asa[i];
        };
    }
    return b
}

function resetFilter(id) {
    $(id).each(function () {
        this.reset();
    });
}
//*SWIPING OUT COMMANDS*//
function LoadCommand() {
    $$('.swipeout-actions-right').on('opened', function () {
        myApp.alert('Item removed');
    });
}

function makeFavorite(b) {
    if (b.starred == "no") {
        b.starred = "yes";
        console.log(b.name + " is now Favorite");
    }
    else {
        b.starred = "no";
        console.log(b.name + " is no longer Favorite");
    }
    listListElement(filterList(degree_Ergonomics), myApp.formToData('#sortForm').myradio);
}

function storeIndex(b) {
    currentCourse = b;
}
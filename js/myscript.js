// Initialize app and store it to myApp variable for futher access to its methods
var myApp = new Framework7({
    modalTitle: 'Attention!',
    material: true
});

// We need to use custom DOM library, let's save it to $$ variable:
var $$ = Dom7;

// Add view
var mainView = myApp.addView('.view-main', {
    dynamicNavbar: true
});

var idleTime=0;

 /** App initialization**/

$(document).ready(function () {
    console.log("App is initialized");
    Sports=[]; Field=[]; Goal=[]; Mode=[];
    spMode = "OR";
        fpMode = "OR";
        gpMode = "OR";
        updateFilter();
    var idleInterval = setInterval(timerIncrement, 60000); // REFRESHING INTERVAL

    //Zero the idle timer on mouse movement.
    window.onmousemove = resetTimer;
    window.onload = resetTimer;
    window.onclick = resetTimer;
});

 /** sports.html initialization**/
myApp.onPageInit('sports', function (page) {
        // Do something here for "index" page
        console.log(page.name + ' initialized');
        spMode = "OR";
        fpMode = "OR";
        gpMode = "OR";
    updateCounter();
    $('.sSwitch').click(function(){
        toggleMode(".sSwitch");
         updateFilter();
    });
    $('.gSwitch').click(function(){
        toggleMode(".gSwitch");
         updateFilter();
    });
    $('.fSwitch').click(function(){
        toggleMode(".fSwitch");
         updateFilter();
    });
     $('.spCard').click(function(){
        $(this).toggleClass("spSel");
         updateFilter();
    });
    $('.spBG').click(function(){
        $(this).toggleClass("spSelG");
        updateFilter();
    });
    $('.spBR').click(function(){
        $(this).toggleClass("spSelR");
        updateFilter();
    });
    $('#spReset').click(function(){
        $('.spCard').removeClass('spSel');
        $('.spBG').removeClass('spSelG');
        $('.spBR').removeClass('spSelR');
        updateFilter()
    });
});

myApp.onPageBeforeAnimation('sports', function (page) {
    rememberClicked();
    updateFilter();
});


myApp.onPageInit('sports_DE', function (page) {
        // Do something here for "index" page
        console.log(page.name + ' initialized');
        spMode = "OR";
        fpMode = "OR";
        gpMode = "OR";
    updateCounter();
    $('.sSwitch').click(function(){
        toggleMode(".sSwitch");
         updateFilter();
    });
    $('.gSwitch').click(function(){
        toggleMode(".gSwitch");
         updateFilter();
    });
    $('.fSwitch').click(function(){
        toggleMode(".fSwitch");
         updateFilter();
    });
     $('.spCard').click(function(){
        $(this).toggleClass("spSel");
         updateFilter();
    });
    $('.spBG').click(function(){
        $(this).toggleClass("spSelG");
        updateFilter();
    });
    $('.spBR').click(function(){
        $(this).toggleClass("spSelR");
        updateFilter();
    });
    $('#spReset').click(function(){
        $('.spCard').removeClass('spSel');
        $('.spBG').removeClass('spSelG');
        $('.spBR').removeClass('spSelR');
        updateFilter()
    });
});

myApp.onPageBeforeAnimation('sports_DE', function (page) {
    rememberClicked();
    updateFilter();
});

 /** courses.html initialization**/
myApp.onPageInit('courses', function (page) {
        // Do something here for "index" page
        console.log(page.name + ' initialized');
    listCourses(courseList);
    var Panel = document.getElementsByClassName('coursePanel')[0];
    
    $('.item-click2').click(function(){
        $('.item-title').removeClass('leftNav_selected')
        $(this).children('.item-click').addClass("leftNav_selected");
        openClose();
    });
    $('.wsCourses li:first-child div').click();
});

myApp.onPageInit('courses_DE', function (page) {
        // Do something here for "index" page
        console.log(page.name + ' initialized');
    listCourses_DE(courseList);
    var Panel = document.getElementsByClassName('coursePanel_DE')[0];
    
    $('.item-click2').click(function(){
        $('.item-title').removeClass('leftNav_selected')
        $(this).children('.item-click').addClass("leftNav_selected");
        openClose_DE();
    });
    $('.wsCourses li:first-child div').click();
});

 /** offers.html initialization**/
myApp.onPageInit('offers', function (page) {
        // Do something here for "index" page
        console.log(page.name + ' initialized');
    listOffer(offersList);
});


myApp.onPageInit('offers_DE', function (page) {
        // Do something here for "index" page
        console.log(page.name + ' initialized');
    listOffer_DE(offersList);
});

 /** news.html initialization**/
myApp.onPageInit('news', function (page) {
        // Do something here for "index" page
        console.log(page.name + ' initialized');
    listNews(newsList);
});

myApp.onPageInit('news_DE', function (page) {
        // Do something here for "index" page
        console.log(page.name + ' initialized');
    listNews_DE(newsList);
});

 /** researchers.html initialization**/
myApp.onPageInit('researchers', function (page) {
    // Do something here for "index" page
    console.log(page.name + ' initialized');
    listRes(listResearchers);
    loadSlick();
});

myApp.onPageInit('researchers_DE    ', function (page) {
    // Do something here for "index" page
    console.log(page.name + ' initialized');
    listRes_DE(listResearchers);
    loadSlick();
});

 /** students.html initialization**/
myApp.onPageInit('students', function (page) {
    // Do something here for "index" page
    console.log(page.name + ' initialized');
    listStu(listStudents);
    loadSlick();
});

myApp.onPageInit('students_DE', function (page) {
    // Do something here for "index" page
    console.log(page.name + ' initialized');
    listStu(listStudents);
    loadSlick();
});


 /** researchNew.html initialization**/
myApp.onPageInit('researchNew', function (page) {
    // Do something here for "index" page
    console.log(page.name + ' initialized');
    listElement(pObj);
    
    $('.menuEle2').click(function(){
        $('.menuEle2').removeClass('menuEle_selected');
        $('.menuEle2').removeClass('shadow--4dp');        
        $(this).addClass("menuEle_selected");
        $(this).addClass("shadow--4dp");
        var index =  $(this).attr("id");
        storeIndex(index);
        listProjectInfo(pObj[currentCourse]);
    });
    $('.projectList li:first-child').click();
});

myApp.onPageInit('researchNew_DE', function (page) {
    // Do something here for "index" page
    console.log(page.name + ' initialized');
    listElement(pObj);
    
    $('.menuEle2').click(function(){
        $('.menuEle2').removeClass('menuEle_selected');
        $('.menuEle2').removeClass('shadow--4dp');        
        $(this).addClass("menuEle_selected");
        $(this).addClass("shadow--4dp");
        var index =  $(this).attr("id");
        storeIndex(index);
        listProjectInfo_DE(pObj[currentCourse]);
    });
    $('.projectList li:first-child').click();
});

 /** listProjects.html initialization**/
myApp.onPageInit('listProjects', function (page) {
    // Do something here for "index" page
    console.log(page.name + ' initialized');
    listElement(rObj);
    
    $('.menuEle2').click(function(){
        $('.menuEle2').removeClass('menuEle_selected');
        $(this).addClass("menuEle_selected");
        var index =  $(this).attr("id");
        storeIndex(index);
        listResearchInfo(rObj[currentCourse]);
    });
    $('.projectList li:first-child').click();
});

myApp.onPageInit('listProjects_DE', function (page) {
    // Do something here for "index" page
    console.log(page.name + ' initialized');
    listElement(rObj);
    
    $('.menuEle2').click(function(){
        $('.menuEle2').removeClass('menuEle_selected');
        $(this).addClass("menuEle_selected");
        var index =  $(this).attr("id");
        storeIndex(index);
        listResearchInfo_DE(rObj[currentCourse]);
    });
    $('.projectList li:first-child').click();
});

 /** projectNew.html initialization**/
myApp.onPageInit('projectNew', function (page) {
    // Do something here for "index" page
    console.log(page.name + ' initialized');
    listProject(pObj[currentCourse]);
});

myApp.onPageInit('projectNew_DE', function (page) {
    // Do something here for "index" page
    console.log(page.name + ' initialized');
    listProject_DE(pObj[currentCourse]);
});


function resetTimer(){
    idleTime=0;
}
function timerIncrement() {
    idleTime = idleTime + 1;
    if (idleTime > 14) { // 20 minutes
        mainView.router.loadPage('index.html'); //CHange which page to refresh to here
    }
}

function reloadDe(){
    mainView.router.reloadPage('index.html');
    mainView.router.loadPage('sports_DE.html');
}



function storeIndex(b) {
    currentCourse = b;
}

function loadSlick () {
    $('.your-class').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3      });
}

function openPanel () {
    var Panel = document.getElementsByClassName('coursePanel')[0];
    document.getElementsByClassName('item-title')[0].onclick = function() {
      if(!Panel.classList.contains('on'))
      {
        Panel.classList.add('on');
      } 
}
}

function closePanel () {
    myApp.closePanel();
}

function openClose () {
    var Panel = document.getElementsByClassName('coursePanel')[0];
    if(!Panel.classList.contains('on')){
        Panel.classList.add('on');
      } else {
        Panel.classList.remove('on');
        setTimeout('document.getElementsByClassName("coursePanel")[0].classList.add("on")', 600);
      }
}

function openClose_DE () {
    var Panel = document.getElementsByClassName('coursePanel_DE')[0];
    if(!Panel.classList.contains('on')){
        Panel.classList.add('on');
      } else {
        Panel.classList.remove('on');
        setTimeout('document.getElementsByClassName("coursePanel_DE")[0].classList.add("on")', 600);
      }
}


function toggleFilter () {
    var Filter = document.getElementsByClassName('pLeft')[0];
    if(!Filter.classList.contains('on')){
        Filter.classList.add('on');
      } else {
        Filter.classList.remove('on');
      }
}

$('.item-inner').click(function(){
    $('.item-title').removeClass('leftNav_selected')
    $(this).children('.item-title').addClass("leftNav_selected");
    openClose();
});

/**OFFERS**/
function createOffer (offer) {
    var OfferEle = '<li class="news-list__item"><article class="news-list__content"><div style="margin-bottom:5px">                                <div style="float: right;">'+offer.date+'</div><div style="font-weight:bold">'+offer.type+'</div><a style="font-size:30px; margin-top:5px" href="#"><div>'+offer.title+'</div></a></div><p>'+offer.description+'</p><footer><span>Contact:&nbsp<span id="contactName">'+offer.contact+'&nbsp</span><a title="Contact email" id="contactEmail" style="border-bottom: 1px solid #777">'+offer.email+'</a></span><div class="news-list__morelink"><a class="" href="#" title="Forschen unter barocken Fresken" style="border-bottom: 1px solid #777"></a></div></footer></article></li>'
    return OfferEle;
}

function listOffer (type) {
    $(".news-list").empty();
    for (i in type) {
        $(createOffer(type[i])).appendTo(".news-list")
    }
}

 /*DE*/
function createOffer_DE (offer) {
    var OfferEle = '<li class="news-list__item"><article class="news-list__content"><div style="margin-bottom:5px">                                <div style="float: right;">'+offer.date+'</div><div style="font-weight:bold">'+offer.type_de+'</div><a style="font-size:30px; margin-top:5px" href="#"><div>'+offer.title_de+'</div></a></div><p>'+offer.description_de+'</p><footer><span>Contact:&nbsp<span id="contactName">'+offer.contact+'&nbsp</span><a title="Contact email" id="contactEmail" style="border-bottom: 1px solid #777">'+offer.email+'</a></span><div class="news-list__morelink"><a class="" href="#" title="Forschen unter barocken Fresken" style="border-bottom: 1px solid #777"></a></div></footer></article></li>'
    return OfferEle;
}

function listOffer_DE (type) {
    $(".news-list").empty();
    for (i in type) {
        $(createOffer_DE(type[i])).appendTo(".news-list")
    }
}



/**NEWS**/
function createNews (news) {
    var NewsEle = '<li class="news-list__item"><article class="news-list__content"><header class="news-list__header">                            <span><time class="news-list__date">'+news.date+'</time></span><a href="#" title=""><h3>'+news.title+'</h3></a></header>                          <figure class="news-list__image img-caption-float"><a href="#" title=""><img src="'+news.picture+'"title=""></a>                          </figure><p class="bodytext">'+news.description+'</p><footer><div class="news-list__morelink"><a class="" href="#" style="border-bottom: 1px solid #777"></a></div></footer></article></li>'
    return NewsEle;
}

function listNews (type) {
    $(".news-list").empty();
    for (i in type) {
        $(createNews(type[i])).appendTo(".news-list")
    }
}

/*DE*/
function createNews_DE (news) {
    var NewsEle = '<li class="news-list__item"><article class="news-list__content"><header class="news-list__header">                            <span><time class="news-list__date">'+news.date+'</time></span><a href="#" title=""><h3>'+news.title_de+'</h3></a></header>                          <figure class="news-list__image img-caption-float"><a href="#" title=""><img src="'+news.picture+'"title=""></a>                          </figure><p class="bodytext">'+news.description_de+'</p><footer><div class="news-list__morelink"><a class="" href="#" style="border-bottom: 1px solid #777"></a></div></footer></article></li>'
    return NewsEle;
}

function listNews_DE (type) {
    $(".news-list").empty();
    for (i in type) {
        $(createNews_DE(type[i])).appendTo(".news-list")
    }
}

/**COURSES**/
function createCoursePanel (course){
    var PanelEle ='<div class="content-block" style="margin:auto;padding:0"><p class="cName">'+course.title+'</p><ul class="cInfo" style="margin:auto"><li><div style="font-size:22px">Course Description</div><div class="cDescription">'+course.description+'</div></li><li><span style="font-size:22px">Lecturer:&nbsp</span><span class="cLecturer">'+course.teacher+'</span></li><li>                                <span style="font-size:22px">Language:&nbsp</span><span class="cLanguage">'+course.language+'</span></li></ul></div>'
    return PanelEle;
}

function coursePanel (i,j) {
    $(".coursePanel").empty();
    selectedCourse = courseList[i][j];
    $(createCoursePanel(selectedCourse)).appendTo(".coursePanel");
}

function createCourse (i,j, course) {
    var CourseEle = '<li class="item-content" onclick="coursePanel('+i+','+j+')"><div class="item-inner item-click2"><div class="item-title item-click">'+course.title+'</div></div></li>'
    return CourseEle;
}

function listCourses (type) {
    $(".wsCourses").empty();
    $(".ssCourses").empty();
    
    for (i in type) {
        for (j in type[i]) {
            if (i==0) {
                $(createCourse(i,j,type[i][j])).appendTo(".wsCourses")
            } else {
                $(createCourse(i,j,type[i][j])).appendTo(".ssCourses")
            }
        }
    }
}

/*DE*/
function createCoursePanel_DE (course){
    var PanelEle ='<div class="content-block" style="margin:auto;padding:0"><p class="cName">'+course.title_de+'</p><ul class="cInfo" style="margin:auto"><li><div style="font-size:22px">Kursbeschreibung</div><div class="cDescription">'+course.description_de+'</div></li><li><span style="font-size:22px">Lehrer:&nbsp</span><span class="cLecturer">'+course.teacher+'</span></li><li>                                <span style="font-size:22px">Sprache:&nbsp</span><span class="cLanguage">'+course.language_de+'</span></li></ul></div>'
    return PanelEle;
}

function coursePanel_DE (i,j) {
    $(".coursePanel_DE").empty();
    selectedCourse = courseList[i][j];
    $(createCoursePanel_DE(selectedCourse)).appendTo(".coursePanel_DE");
}

function createCourse_DE (i,j, course) {
    var CourseEle = '<li class="item-content" onclick="coursePanel_DE('+i+','+j+')"><div class="item-inner item-click2"><div class="item-title item-click">'+course.title_de+'</div></div></li>'
    return CourseEle;
}

function listCourses_DE (type) {
    $(".wsCourses").empty();
    $(".ssCourses").empty();
    
    for (i in type) {
        for (j in type[i]) {
            if (i==0) {
                $(createCourse_DE(i,j,type[i][j])).appendTo(".wsCourses")
            } else {
                $(createCourse_DE(i,j,type[i][j])).appendTo(".ssCourses")
            }
        }
    }
}

/**STUDENTS**/

function createStudent (stu) {
    var NewsEle = '<div class="rCard shadow--4dp"><div class="rImgDiv"><img src="'+stu.pic+'"></div><ul><li class="sName">'+stu.name+'</li><li><span class="lCat">Email</span><span>'+stu.email+'</span></li></ul></div>'
    return NewsEle;
}

function listStu (type) {
    $(".your-class").empty();
    for (i in type) {
        $(createStudent(type[i])).appendTo(".your-class")
    }
}

/**RESEARCHERS**/

function createResearcher (res) {
    var NewsEle = '<div class="rCard shadow--4dp"><div class="rImgDiv"><img src="'+res.picture+'"></div><ul><li class="rName">'+res.title+' '+res.name+'</li><li class="rCat2"><span>Research field: </span><span>'+res.research+'</span></li>                           <li><span class="rCat">Room</span><span>'+res.room+'</span></li><li><span class="rCat">Email</span><span>'+res.email+'</span></li>                           <li><span class="rCat">Tel</span><span>'+res.tel+'</span></li></ul></div>'
    return NewsEle;
}

function listRes (type) {
    $(".your-class").empty();
    for (i in type) {
        $(createResearcher(type[i])).appendTo(".your-class")
    }
}

function loadResearchers () {
    mainView.router.loadPage('researchers.html');
}

/*DE*/
function createResearcher_DE (res) {
    var NewsEle = '<div class="rCard shadow--4dp"><div class="rImgDiv"><img src="'+res.picture+'"></div><ul><li class="rName">'+res.title+' '+res.name+'</li><li class="rCat2"><span>Forschungsfeld: </span><span>'+res.research+'</span></li>                           <li><span class="rCat">Raum</span><span>'+res.room+'</span></li><li><span class="rCat">Email</span><span>'+res.email+'</span></li>                           <li><span class="rCat">Tel</span><span>'+res.tel+'</span></li></ul></div>'
    return NewsEle;
}

function listRes_DE (type) {
    $(".your-class").empty();
    for (i in type) {
        $(createResearcher_DE(type[i])).appendTo(".your-class")
    }
}


/**RESEARCH**/
function nameSort(a,b) {
  if (a.Thema < b.Thema)
    return -1;
  if (a.Thema > b.Thema)
    return 1;
  return 0;
}

function dateSort(a,b) {
  if (a.Abgabe > b.Abgabe)
    return -1;
  if (a.Abgabe < b.Abgabe)
    return 1;
  return 0;
}

function listElement(source) {
    /*source.sort(nameSort);*/  
    $(".projectList").empty();
    var i;
    for (i in source) {
        storeI (i);
        if (source[i].Thema!="") {
            $(createListElement(source[i].Thema)).appendTo(".projectList")

            
        } 
    }
}


function listCat (project) {
    var elementCat;
    if (project != "") {
        elementCat =  '<li>'+ project +'</li>';
    } else if (project == "") {
        elementCat = ''
    };
    return elementCat
}

function convDate (project) {
    var date = new Date(project);
    var nd = (date.getMonth() + 1) + '/' + date.getDate() + '/' +  date.getFullYear();
    return nd
}

function createResearchInfo(project) {
    var elementList = '<div id="rName">'+ project.Thema +'</div><div id="rTitle">Type: '+ project.Art +'</div><div id="rLeader"><span>Authors: '+ project.Name +'</span></div><div id="pSup"><span>Supervisor: '+ project.Betreuer +'</span></div><div id="pDate"><span>Date: '+ convDate(project.Abgabe) +'</span></div><div id="rClass"><ul id="pSport"><span class="">Sport Disciplines</span>'+ listCat(project["Forschungsziel 2"]) + listCat(project["Sportart 1"]) + listCat(project["Sportart 2"])+'</ul><ul id="pField"><span class="">Research Fields</span>'+ listCat(project["Datum"]) + listCat(project["Forschungsfeld 1"]) + '</ul><ul id="pGoal"><span class="">Research Goals</span>'+ listCat(project["Forschungsfeld 2"]) + listCat(project["Forschungsziel 1"]) + '</ul></div>'
    return elementList;
}

function listResearchInfo(project) {
    $(".pRight").empty();
    $(createResearchInfo(project)).appendTo(".pRight")
}

/*DE*/
function createResearchInfo_DE(project) {
    var elementList = '<div id="rName">'+ project.Thema +'</div><div id="rTitle">Art: '+ project.Art +'</div><div id="rLeader"><span>Name: '+ project.Name +'</span></div><div id="pSup"><span>Betreuer: '+ project.Betreuer +'</span></div><div id="pDate"><span>Abgabe: '+ convDate(project.Abgabe) +'</span></div><div id="rClass"><ul id="pSport"><span class="">Sportart</span>'+ listCat(project["Forschungsziel 2"]) + listCat(project["Sportart 1"]) + listCat(project["Sportart 2"])+'</ul><ul id="pField"><span class="">Forschungsfeld</span>'+ listCat(project["Datum"]) + listCat(project["Forschungsfeld 1"]) + '</ul><ul id="pGoal"><span class="">Forschungsziel</span>'+ listCat(project["Forschungsfeld 2"]) + listCat(project["Forschungsziel 1"]) + '</ul></div>'
    return elementList;
}

function listResearchInfo_DE(project) {
    $(".pRight").empty();
    $(createResearchInfo_DE(project)).appendTo(".pRight")
}



/**LIST PROJECTS**/
function createProjectInfo(project) {
    var projEle = '<div id="pName">'+ project.Thema +'</div><div id="pTitle">'+ project.title +'</div><div id="pDescription">Description                        <p>'+ project.description +'</p></div><div id="pLeader"><span>Leaders: '+ project.leader +'</span></div><footer><div class="news-list__morelink"><a class="" href="projectNew.html" style="border-bottom: 1px solid #777">read more</a></div></footer>'
    return projEle;
}

function listProjectInfo(project) {
    $(".pRight").empty();
    $(createProjectInfo(project)).appendTo(".pRight")
}

/*DE*/
function createProjectInfo_DE(project) {
    var projEle = '<div id="pName">'+ project.Thema +'</div><div id="pTitle">'+ project.title +'</div><div id="pDescription">Beschreibung                        <p>'+ project.description_de +'</p></div><div id="pLeader"><span>Führer: '+ project.leader +'</span></div><footer><div class="news-list__morelink"><a class="" href="projectNew_DE.html" style="border-bottom: 1px solid #777">mehr lesen</a></div></footer>'
    return projEle;
}

function listProjectInfo_DE(project) {
    $(".pRight").empty();
    $(createProjectInfo_DE(project)).appendTo(".pRight")
}

/**READ MORE PROJECT**/
function createProject(project) {
    var projEle = '<div style="overflow:auto"><div><div id="pName">'+ project.Thema +'</div><div id="pTitle">'+ project.title +'</div>                    <div id="pDescription"><span class="pSub">Description</span><p>'+ project.description +'</p></div><div id="p2">                        <div id="pTeam" style="width:3000px"><div id=""><span class="pSub">Leader </span><span>'+ project.leader +'</span></div><div id="pPartner"><span class="pSub">Partner </span><span>'+ project.partner +'</span></div><div id="pFund"><span class="pSub">Funding </span><span>'+ project.funding +'</span></div></div><div id="pCal">                            <div id="pStatus"><span class="pSub">Status</span> <span>'+ project.status +'</span></div><div id="pStart"><span class="pSub">Start</span> <span>'+ project.start +'</span></div>                            <div id="pEnd"><span class="pSub">End</span> <span>'+ project.end +'</span></div></div></div><div id="pClass">                        <ul id="pSport"><span class="">Sport Disciplines</span>'+ listCat(project["Sportart 0"]) + listCat(project["Sportart 1"]) + listCat(project["Sportart 2"])+'</ul><ul id="pField"><span class="">Research Fields</span>'+ listCat(project["Forschungsziel 2"]) + listCat(project["Forschungsziel 1"]) + listCat(project["Forschungsziel 0"])+'</ul><ul id="pGoal"><span class="">Research Goals</span>'+ listCat(project["Forschungsfeld 2"]) + listCat(project["Forschungsfeld 1"]) + listCat(project["Forschungsfeld 0"])+'</ul></div></div></div>'
    return projEle;
}

function listProject(project) {
    $(".innerContent").empty();
    $(createProject(project)).appendTo(".innerContent")
}

/*DE*/
function createProject_DE(project) {
    var projEle = '<div style="overflow:auto"><div><div id="pName">'+ project.Thema_de +'</div><div id="pTitle">'+ project.title_de +'</div>                    <div id="pDescription"><span class="pSub">Beschreibung</span><p>'+ project.description_de +'</p></div><div id="p2">                        <div id="pTeam" style="width:3000px"><div id=""><span class="pSub" style="width: 180px">Führer </span><span>'+ project.leader +'</span></div><div id="pPartner"><span class="pSub" style="width: 180px">Partner </span><span>'+ project.partner +'</span></div><div id="pFund"><span class="pSub" style="width: 180px">Finanzierung </span><span>'+ project.funding_de +'</span></div></div><div id="pCal">                            <div id="pStatus"><span class="pSub">Status</span> <span>'+ project.status_de +'</span></div><div id="pStart"><span class="pSub">Start</span> <span>'+ project.start +'</span></div>                            <div id="pEnd"><span class="pSub">Ende</span> <span>'+ project.end +'</span></div></div></div><div id="pClass">                        <ul id="pSport"><span class="">Sportart</span>'+ listCat(project["Sportart 0"]) + listCat(project["Sportart 1"]) + listCat(project["Sportart 2"])+'</ul><ul id="pField"><span class="">Forschungsfeld</span>'+ listCat(project["Forschungsziel 2"]) + listCat(project["Forschungsziel 1"]) + listCat(project["Forschungsziel 0"])+'</ul><ul id="pGoal"><span class="">Forschungsziel</span>'+ listCat(project["Forschungsfeld 2"]) + listCat(project["Forschungsfeld 1"]) + listCat(project["Forschungsfeld 0"])+'</ul></div></div></div>'
    return projEle;
}

function listProject_DE(project) {
    $(".innerContent").empty();
    $(createProject_DE(project)).appendTo(".innerContent")
}

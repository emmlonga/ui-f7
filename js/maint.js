//var root = 'https://jsonplaceholder.typicode.com';

//var root = 'https://jsonplaceholder.typicode.com/posts/';

var root = 'http://localhost:3000/posts'



 $.ajax({
          url: root,
          method: 'GET'
        }).then(function(data) {
          saveData(data);
        });



$.ajax({
          url: 'http://localhost:3000/profile',
          method: 'GET'
        }).then(function(data) {
          saveData2(data);
        });



function saveData (data){
    dummy = data;
}

function saveData2 (data){
    hey = data;
}

dummy2 = [
  {
    "$class": "org.brix.Component",
    "componentId": "129244889",
    "name": "Oil Filter",
    "owner": "resource:org.brix.Owner#andre",
    "batchNumber":"029304839",
    "date": "2018-01-16T20:47:01.756Z",
    "status": "CREATED"
  },
    {
    "$class": "org.brix.Component",
    "componentId": "129244889",
    "name": "Camshaft",
    "owner": "resource:org.brix.Owner#andre",
    "batchNumber":"029304839",
    "date": "2018-01-16T20:46:01.756Z",
    "status": "CREATED"
  }
]

var H1 = {
    id: "dunno",
    name: "CDTM",
    date: 1493060404000,
    action: "Installed",
};

var H2 = {
    id: "dunno",
    name: "MTU",
    date: 1493060404000,
    action: "Technician",
};

var H3 = {
    id: "dunno",
    name: "K&W",
    date: 1492110004000,
    action: "Distribution",
};

var H4 = {
    id: "dunno",
    name: "MTU",
    date: 1486062004000,
    action: "Manufacturing",
};

var CH = [H1,H2,H3,H4];

var C ={
    id: "1000029402017",
    time: 1515351544226,
    transactions: CH,
}


//Component B//

var H2b = {
    id: "dunno",
    name: "MTU",
    date: 1515610804000,
    action: "Technician",
};

var H3b = {
    id: "dunno",
    name: "K&W",
    date: 1513623604000,
    action: "Distribution",
};

var H4b = {
    id: "dunno",
    name: "MTU",
    date: 1511204404000,
    action: "Manufacturing",
};
var CHb = [H2b,H3b,H4b];

var Cb ={
    id: "1000029402017",
    time: 1515351544226,
    transactions: CHb,
}

//JQuery functions//

//Com//
function convDate_old (project) {
    var date = new Date(project);
    var nd =  ('0'+ date.getDate()).slice(-2) + '/' + ('0'+(date.getMonth() + 1)).slice(-2) + '/' + ('0'+ date.getFullYear()).slice(-2);
    return nd
}

function convDate (date){
    var nd = date.split("T")[0].split("-")[2]+'/'+date.split("T")[0].split("-")[1]+'/'+date.split("T")[0].split("-")[0]+" "+date.split("T")[1].split(":")[0]+":"+date.split("T")[1].split(":")[1];
    return nd;
}

function cutName (s) {
    return s.split('#')[1];
}

function toTitleCase(str) {
    return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
}




//New Component 3//
function cHis (offer) {
    var hisEle = '<li class="item-content" style="padding-left:0px;"><div class="item-inner" style="padding-right: 0px;"><div class="listItem">                                                <div>'+offer.timestamp+'</div><div class="listJus">'+offer.action+'</div><div>'+toTitleCase(offer.toOwner)+'</div></div></div></li>'
    return hisEle;
}

function lHis (type) {
    $("#lUl").empty();
    for (i in type) {
        $(cHis(type[i])).appendTo("#lUl")
    }
}


//Component2 - Maintenance//

function callbackOk () {
    demountComponent(engines[0].missingComponents[0],engines[0].engineId);
    console.log("okk");
    
    c1status=1
    $('.blueCard .accordion-list').remove();
    $('.mTask').html('No maintenance task available');
}

function callbackCancel () {
    c1status=0;
    console.log("no ok");
}

function componentRemoved (engine) {
    if (engine.missingComponents.length!=0 && c1status==0){
        c1status=1;
        myApp.confirm("The engine can no longer recognize this component. Please confirm the operation.", "Demounting alert", callbackOk, callbackCancel);
    }
}


//Component2b - Adding a component//
function callbackOk2 () {
    mountComponent(engines[0].newComponents[0],engines[0].engineId);
    console.log("ok");
    c2status=1
    $('.blueCard .accordion-list').remove();
    $('.mTask').html('No maintenance task available');
}

function callbackCancel2 () {
    c2status=0;
    console.log("no ok");
}

function componentAdded (engine) {
    if (engine.newComponents.length!=0 && c2status==0){
        c2status=1;
        myApp.confirm("New component identified. Please confirm the operation.", "Mounting alert", callbackOk2, callbackCancel2);
    }
}



//Component3//
function createHis (offer) {
    var hisEle = '<li class="item-content" style="padding-left:0px;"><div class="item-inner" style="padding-right: 0px;"><div class="listItem">                                                <div>'+convDate_old(offer.date)+'</div><div class="listJus">'+offer.action+'</div><div>'+offer.name+'</div></div></div></li>'
    return hisEle;
}

function listHis (type) {
    $("#lUl").empty();
    for (i in type.transactions) {
        $(createHis(type.transactions[i])).appendTo("#lUl")
    }
}

//Engine 3//
function createHis (offer) {
    var hisEle = '<li class="item-content" style="padding-left:0px;"><div class="item-inner" style="padding-right: 0px;"><div class="listItem">                                                <div>'+convDate_old(offer.date)+'</div><div class="listJus">'+offer.action+'</div><div>'+offer.name+'</div></div></div></li>'
    return hisEle;
}

function listHis (type) {
    $("#eUl").empty();
    for (i in type.transactions) {
        $(createHis(type.transactions[i])).appendTo("#lUl")
    }
}



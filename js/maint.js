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
    console.log("ok");
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


//-----------------------------------Start Sergiu Code-----------------------------------

function createDisplayTransactionsArray() {
    var newArray = mountComponents
        .map((mntComp) => {
            return fromAbstractTransaction(
                'MountComponent', 
                mntComp.component, 
                findComponent(mntComp.component).name,
                findEngine(mntComp.engine).name,
                mntComp.timestamp,
                mntComp.transactionId
            );
        })
        .concat(demountComponents.map((demntComp) => {
            return fromAbstractTransaction(
                'DemountComponent',
                demntComp.component,
                findComponent(demntComp.component).name,
                findEngine(demntComp.engine).name,
                demntComp.timestamp,
                demntComp.transactionId
            );
        }))
        .concat(componentTransactions.map((compTrans) => {
            return fromAbstractTransaction(
                'Handover',
                compTrans.componentId,
                findComponent(compTrans.componentId).name,
                findOwner(compTrans.toOwnerId).name,
                compTrans.timestamp,
                compTrans.transactionId
            );
        })).sort(compareDisplayTransactions);
    displayTransactionsArray = newArray;
}

function fromAbstractTransaction(type, componentId, componentName, to, timestamp, transactionId) {
    return {
        "type": type,
        "componentId": componentId,
        "componentName": componentName,
        "To": to,
        "timestamp": timestamp,
        "transactionId": transactionId
    };
}

function compareDisplayTransactions(a,b) {
    if (a.timestamp < b.timestamp)
      return -1;
    if (a.timestamp > b.timestamp)
      return 1;
    return 0;
  }

function findComponent(compId) {
    return components.find((c) => c.componentId == compId);
}

function findEngine(engId) {
    return engines.find((e) => e.engineId == engId);
}

function findOwner(ownerId) {
    return owners.find((o) => o.ownerId == ownerId);
}

/////////////////////////// MountComponent
function mountComponent(componentId, engineId){
    jsonObj = {
        $class: "org.brix.MountComponent",
        component: "resource:org.brix.Component#" + componentId,
        engine: "resource:org.brix.Engine#" + engineId
    };
    postToRest('MountComponent', jsonObj)
}

function getMountComponents(){
    getFromRest('MountComponent',saveMountComponents, parseMountComponents)
}

function parseMountComponents (transactions) {
    return transactions.map(function (t) {
        return {
            "component": cutName(t.component),
            "engine": cutName(t.engine),
            "transactionId": t.transactionId,
            "timestamp": new Date(t.timestamp)
        }
    });
}

function saveMountComponents(mntTrans) {
    mountComponents = mntTrans;
}

/////////////////////////// DemountComponent
function demountComponent(componentId, engineId){
    jsonObj = {
        $class: "org.brix.DemountComponent",
        component: "resource:org.brix.Component#" + componentId,
        engine: "resource:org.brix.Engine#" + engineId
    };
    postToRest('DemountComponent', jsonObj)
}

function getDemountComponents(){
    getFromRest('DemountComponent',saveDemountComponents, parseDemountComponents)
}

function parseDemountComponents (transactions) {
    return transactions.map(function (t) {
        return {
            "component": cutName(t.component),
            "engine": cutName(t.engine),
            "transactionId": t.transactionId,
            "timestamp": new Date(t.timestamp)
        }
    });
}

function saveDemountComponents(demntTrans) {
    demountComponents = demntTrans;
}

/////////////////////////// GetComponentTransactions
function componentTransaction(componentId, toOwnerId, action) {
    jsonObj = {
        "$class": "org.brix.ComponentTransaction",
        "component": "resource:org.brix.Component#" + componentId,
        "toOwner": "resource:org.brix.Owner#" + toOwnerId,
        "action": action
    };
    postToRest('ComponentTransaction', jsonObj)
}

function getComponentTransactions(){
    getFromRest('ComponentTransaction', saveComponentTransactions, parseComponentTransactions)
}

function parseComponentTransactions (transactions) {
    return transactions.map(function (t) {
        return {
            "componentId": cutName(t.component),
            "toOwnerId": cutName(t.toOwner),
            "action": toTitleCase(t.action),
            "transactionId": t.transactionId,
            "timestamp": new Date(t.timestamp)
        }
    });
}

function saveComponentTransactions(compTrans) {
    componentTransactions = compTrans;
}

// The transactions you pass here must be already parsed
function filterComponentTransaction(parsedTransactions, id) {
    return parsedTransactions.filter(function(t){return t.component==id})
}

/////////////////////////// GetComponents
function getComponents () {
    getFromRest('Component', saveComponents, parseComponents);
}

function parseComponents (transactions) {
    return transactions.map(function (t) {
        return {
            "componentId": t.componentId,
            "ownerId": cutName(t.owner),
            "status": toTitleCase(t.status),
            "name": t.name
        }
    });
}

function saveComponents(comp) {
    components = comp;
}

/////////////////////////// GetEngines
function getEngines () {
    getFromRest('Engine', saveEngines, parseEngines);
}

function parseEngines (transactions) {
    return transactions.map(function (t) {
        return {
            "engineId": t.engineId,
            "name": t.name,
            "ownerId": cutName(t.owner),
            "batchNumber": t.batchNumber,
            "serialNumber": t.serialNumber,
            "components": t.components.map(function(comp) {return cutName(comp)}),
            "missingComponents": t.missingComponents.map(function(comp) {return cutName(comp)}),
            "newComponents": t.newComponents.map(function(comp) {return cutName(comp)}),
        }
    });
}

function saveEngines(eng) {
    engines = eng;
}

/////////////////////////// GetOwners

function getOwners () {
    getFromRest('Owner', saveOwners, parseOwners);
}

function parseOwners (owner) {
    return owner.map(function (t) {
        return {
            "ownerId": t.ownerID,
            "name": t.name
        }
    });
}

function saveOwners(own) {
    owners = own;
}

//HelpFunctions
function getFromRest(resourceName, saveFunction, parseFunction) {
    $.ajax({
        url: 'http://localhost:3000/api/' + resourceName,
        method: 'GET',
        async: false
      }).then(function(data) {
          //console.log(data);
          saveFunction(parseFunction(data));   
      });
}

function postToRest(resourceName, jsonObj) {
    $.post("http://localhost:3000/api/" + resourceName,
        jsonObj,
    function(data, status){
        alert("Data: " + data + "\nStatus: " + status);
    });
}

function cutName (s) {
    return s ? s.split('#')[1] : s;
}

function toTitleCase(str) {
    return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
}

function convDate (date){
    var nd = date.split("T")[0].split("-")[2]+'/'+date.split("T")[0].split("-")[1]+'/'+date.split("T")[0].split("-")[0]+" "+date.split("T")[1].split(":")[0]+":"+date.split("T")[1].split(":")[1];
    return nd;
}
//------------------------------End Sergiu Code------------------------------

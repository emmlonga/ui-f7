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


//rawdata
var components = [];
var componentTransactions = [];
var engines = [];
var mountComponents = [];
var demountComponents = [];
var owners = [];

//Display stuff
var displayTransactionsArray = [];


// Now we need to run the code that will be executed only for About page.
// Using page callback for page (for "about" page in this case) (recommended way):
myApp.onPageInit('about', function (page) {
        // Do something here for "about" page
    })
    /** App initialization**/
$(document).ready(function () {
    console.log("App is initialized");
    $(window).keypress(function(e) {
        if (e.which == 49) {
         identifyComponent(["resource:org.brix.Component#E2000016540C019524401FD2"],["resource:org.brix.Component#E2000016540C019524401FB9","E2000016540C019524401FB9"]);
            setTimeout(function(){
                demountCall();
            },500);
        } else if (e.which == 53) {
         identifyComponent(["resource:org.brix.Component#E2000016540C019624401FB2","resource:org.brix.Component#E2000016540C019624401FB2"],["resource:org.brix.Component#E2000016540C021224401FB9"]);
            mountCall();
        } 
    });
    c1status=0;
    c2status=0;
    c3status=0;
    window.setInterval(function(){
        getComponents();
        getComponentTransactions();
        getEngines();
        getMountComponents();
        getDemountComponents();
        getOwners();

        setTimeout(function() {
            createDisplayTransactionsArray()
            //console.log(displayTransactionsArray);
       }, 5000);
    }, 6000);
});
// Using page callback for page (for "index" page in this case) (recommended way):
myApp.onPageInit('index', function (page) {
        // Do something here for "index" page
        console.log(page.name + ' initialized');
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
     var interval1= setInterval(function(){
         console.log("oi");
        demountCall();
         if (c1status==1){
             clearInterval(interval1);
         }
    }, 500);
    
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

function demountCall(){
    componentRemoved(engines[0]);

}

myApp.onPageInit('component3', function (page) {
        // Do something here for "index" page
    console.log(page.name + ' initialized');
    $.ajax({
          url: 'http://localhost:3333/componenttransaction',
          method: 'GET'
        }).then(function(data) {
            //lHis(filterComponentTransaction(parseComponentTransaction(data),"comp1"));
        });
    if (c1status==1){
        $("#lUl").prepend('<li class="item-content" style="padding-left:0px;"><div class="item-inner" style="padding-right: 0px;"><div class="listItem">                                                <div>10/01/18</div><div class="listJus">Demounted</div><div>MTU</div></div></div></li>');
    }
    //lHis(dummy);
    })

myApp.onPageInit('componentb', function (page) {
        // Do something here for "index" page
    console.log(page.name + ' initialized');
        
    if (c2status==1){
        $('.maintCard').remove();
        $('#sStat').html('Installed on <u onclick="javascript:mainView.router.loadPage(\'engine.html\')">Engine 10V1600</u>');
        $('#oStat').html('MTU Technical Service');
        $('#dStat').html('10/01/2018');
        console.log(page.name + ' status 0');
    }
    
    })


function mountCall(){
    componentAdded(engines[0]);
}


myApp.onPageInit('engine', function (page) {
        // Do something here for "index" page
        console.log(page.name + ' initialized');
    console.log(page.name + ' initialized');
     var interval1= setInterval(function(){
        demountCall();
         if (c2status==1){
             mountCall();
         }
    }, 200);
    
    })


    /*rateCourseReview*/
    /*Delete Tags*/
var $$ = Dom7;
function goBack() {
    window.history.go(-1);
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
        url: 'http://localhost:3333/api/' + resourceName,
        method: 'GET',
        async: false
      }).then(function(data) {
          //console.log(data);
          saveFunction(parseFunction(data));   
      });
}

function postToRest(resourceName, jsonObj) {
    $.post("http://localhost:3333/api/" + resourceName,
        jsonObj,
    );
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



/**NEW STARTS HERE**/

function displayRemoveConfirm(){
    var one = '<div style="padding: 0px 8px; color: white; position: absolute; left:0px"><div style="text-align: center"><img style="height: 110px" class="" src="Images/minus.svg"></div></div><div class="list-block attending showMe" style="margin-left: 110px"><ul>       <li class="swipeout">       <div class="swipeout-content"><a href=""><div class="item-inner" style="margin:0px 8px;justify-content:flex-start; padding-right: 0px">                                                          <div  style="font-size: 20px; margin-top: 10px; margin-bottom: -10px; color: white;">Confirm Demounting</div></div></a></div></li></ul> </div><!-- This block will be displayed if anything found, and this list block is used a searbar target --><div class="list-block list-block-search searchbar-found showMe" style="margin-left: 110px"><ul id="courseList" style="">                                    <li class="swipeout" id="removeMe" style="color:white; background-color: #EF5350"><div class="swipeout-content"><a onclick="callbackOk()" class="item-content item-link" style="background-image: none; padding-left: 0px"><div class="item-inner"  style="background-image: none; padding: 0px 8px"><div class="item-title-row"><div class="item-after" style="margin-left: 0px;color:white"><b>24/04/17</b></div></div><div class="item-subtitle"><b>Oil Filter</b></div><div class="item-title-row"><div style="text-align: right; justify-content: flex-end; color:white" class="item-after"><b>HRMW-580</b></div><div class="item-after" style="color:white"><b>100029402017</b></div></div></div></a></div></li></ul></div>'
    return one;
}

function displayAddConfirm(){
    var one = '<div style="padding: 0px 8px; color: white; position: absolute; left:0px"><div style="text-align: center"><img style="height: 110px" class="" src="Images/plus.svg"></div></div><div class="list-block attending showMe" style="margin-left: 110px"><ul>       <li class="swipeout">       <div class="swipeout-content"><a href=""><div class="item-inner" style="margin:0px 8px;justify-content:flex-start; padding-right: 0px">                                                          <div  style="font-size: 20px; margin-top: 10px; margin-bottom: -10px; color: white;">Confirm Mounting</div></div></a></div></li></ul> </div><!-- This block will be displayed if anything found, and this list block is used a searbar target --><div class="list-block list-block-search searchbar-found showMe" style="margin-left: 110px"><ul id="courseList" style="">                                    <li class="swipeout" id="removeMe" style="color:white; background-color: #EF5350"><div class="swipeout-content"><a onclick="callbackOk2()" class="item-content item-link" style="background-image: none; padding-left: 0px"><div class="item-inner"  style="background-image: none; padding: 0px 8px"><div class="item-title-row"><div class="item-after" style="margin-left: 0px;color:white"><b>26/01/18</b></div></div><div class="item-subtitle"><b>Oil Filter</b></div><div class="item-title-row"><div style="text-align: right; justify-content: flex-end; color:white" class="item-after"><b>HRMW-580</b></div><div class="item-after" style="color:white"><b>019624401FB2</b></div></div></div></a></div></li></ul></div>'
    return one;
}

function displaySuccess(){
    var one = '<div style="padding: 0px 8px; color: white;position: absolute;left:0px"><div style="text-align: center"><img class="attIcon" style="height: 110px" src="Images/check.svg"></div></div>                                <div style="padding: 0px 8px; color: white;"><div class="cStatus maStatus showMe" style="font-size:22px; margin-left: 65px; line-height: 92.8px"><b id="maAlert"> Maintenance Complete</b></div></div>'
    return one;
}


function identifyComponent(newComponent, missingComponent){
    jsonObj = {      
        "missingComponents": missingComponent,
        "newComponents": newComponent,
    };
    console.log(jsonObj);
    postToRest('mockchain/componentIdentified', jsonObj)
}

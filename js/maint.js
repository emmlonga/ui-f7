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

//Component3//
function convDate (project) {
    var date = new Date(project);
    var nd =  ('0'+ date.getDate()).slice(-2) + '/' + ('0'+(date.getMonth() + 1)).slice(-2) + '/' + ('0'+ date.getFullYear()).slice(-2);
    return nd
}

function createHis (offer) {
    var hisEle = '<li class="item-content" style="padding-left:0px;"><div class="item-inner" style="padding-right: 0px;"><div class="listItem">                                                <div>'+convDate(offer.date)+'</div><div class="listJus">'+offer.action+'</div><div>'+offer.name+'</div></div></div></li>'
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
    var hisEle = '<li class="item-content" style="padding-left:0px;"><div class="item-inner" style="padding-right: 0px;"><div class="listItem">                                                <div>'+convDate(offer.date)+'</div><div class="listJus">'+offer.action+'</div><div>'+offer.name+'</div></div></div></li>'
    return hisEle;
}

function listHis (type) {
    $("#lUl").empty();
    for (i in type.transactions) {
        $(createHis(type.transactions[i])).appendTo("#lUl")
    }
}
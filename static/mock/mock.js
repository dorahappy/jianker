var poslist = require("./posList.json")
var partentry = require("./partTime.json")
var poscontent = require("./posListContent.json")
var message = require("./message.json")

module.exports = function(){
    return {
        list: poslist,
        ptCircle: partentry,
        listContent: poscontent,
        info: message
    }
}
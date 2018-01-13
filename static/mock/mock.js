var poslist = require("./posList.json")
var partentry = require("./partTime.json")
var poscontent = require("./posListContent.json")

module.exports = function(){
    return {
        list: poslist,
        ptCircle: partentry,
        listContent: poscontent
    }
}
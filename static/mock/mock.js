var poslist = require("./posList.json")
var message = require("./message.json")

module.exports = function(){
    return {
        list: poslist,
        info: message
    }
}
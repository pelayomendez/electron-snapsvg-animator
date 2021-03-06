/* -------------------------------------------------------------------------------------------------
[ Snap SVG animator]
------------------------------------------------------------------------------------------------- */

const path      = require('path')

var animationModel
var animationNode
var domContainer = undefined

module.exports =  {

    setup: function() 
    {

        // TODO: Check if scripts are already added (¿Singleton?) 
        this.addScripts('./libs/snap.svg-cjs.js')
        this.addScripts('./libs/SnapSVGAnimator.min.js')

    },

    loadAnimation: function(fps, width, height, filePath) 
    {

        var relativeFilePath = path.resolve(__dirname, filePath)
        var jsonRaw = require(relativeFilePath)

        if(document.readyState != 'complete') {
            window.onload = function() {
                module.exports.parseAnimationFile(jsonRaw, width, height, fps)
            }
        } else {
            module.exports.parseAnimationFile(jsonRaw, width, height, fps)
        }

    },

    parseAnimationFile: function(jsonRaw, width, height, fps) {

        animationModel = new SVGAnim(jsonRaw, width, height, fps)
        animationNode = animationModel.s.node
        document.body.removeChild(animationNode)

    },

    addAnimation: function(object) 
    {

        domContainer = document.getElementById(object)
        domContainer.appendChild(animationNode)

    },

    removeAnimation: function() 
    {
        if(domContainer != undefined) {
            domContainer.removeChild(animationNode)
            domContainer = undefined
        }
    },

    setStyle: function(name, value) 
    {

        animationNode.style[name] = value

    },

    addScripts: function (fileName) {
 
         const abs = path.join ( __dirname , fileName)

         var head = document.head
         var link = document.createElement("script")

         link.src = abs
 
         head.appendChild(link)
 
     }

};

(function () {
    // Excuted on require    
    module.exports.setup()
})();

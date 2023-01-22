AFRAME.registerComponent("player-movement",{
init:function(){
this.movement() ;
},

movement:function(){
    var yPos=0;
    window.addEventListener('keydown',function(e){
        var man=document.querySelector("#man-running")
        
        if(e.code=="ArrowUp"){
            yPos+=1
            console.log()
            man.setAttribute("position",{x:0,y:yPos,z:0})
        }
    })
}

})
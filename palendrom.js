var pal=[];
var isPallendrom=function(pal){
    var h=pal.length-1;
    var l=0;
    while(h>l)
    {
        if(pal[l++]!=pal[h--])
        {
            console.log("not a pallendrom",pal);
            return;
        }

    }
   
        console.log("it's a pallendrom");
   

}
isPallendrom("radar");
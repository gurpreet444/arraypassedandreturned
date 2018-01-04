export  class arraypassedtofunction
{

public $df:number;

public  constructor($f:number)
{

 this.$df  =   $f;  

}

public   PassData($ff:string[]) 
{
    var   s;
    for(s=0;s<$ff.length;s++)
    {

          console.log($ff[s]);

    }
}



}


var  namess:string[] =   Array('a','b','c')

 var  objarray=  new arraypassedtofunction(1)
       
         objarray.PassData(namess);
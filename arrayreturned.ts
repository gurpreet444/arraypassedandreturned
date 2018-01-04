 class  arrayreturned
{


    public  $result:string;
   public constructor(na:string)
  {
    
      this.$result  =  na;
      

  }



   public   av():string[] {

        return  new Array("Mary","Tom","Jacki")

    }



}

var  arryobjec =    new arrayreturned('ddd')
console.log(arryobjec.$result);
    var  num:string[]=   arryobjec.av();
        for(var  s  in  num)
        {
              
            
                   console.log(num[s]);


        }

      

import SideBar from "./SideBar";




const Skimmer = () =>
    {
    
        //creating a array of length 25 with(0-24 in it)
        const loop = Array.from( {length:25 }, (_,x) => x);
     
    
        return(
            
               <div className="flex ">
                 <SideBar/>
                <div  style={{ width: 'calc(100% - 200px)' }} className=" mt-[80px] flex flex-wrap m-auto  justify-center  gap-8  ">
        
                 {
                 loop.map( (obj) => {
                          return( 
                                  <div key={obj} className="h-[250px] w-[300px]  border rounded-lg bg-gray-200">
                                     
                                     <div className="w-full h-[150px] bg-gray-300"> </div>
                                     <div className="w-[80%] h-8 ml-2  my-2 bg-gray-300" > </div>
                                     <div className="w-[80%] h-4  ml-2 my-2 bg-gray-300" > </div>
                                     {/* <div className="w-1/2 h-8  my-4 bg-gray-300" > </div> */}
                                    
                                     </div>
                                );
                              }
                         )}
                 
    
    
                </div>
    
               </div>
    
              );
    }
    
    export default Skimmer;
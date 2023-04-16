import { useState } from "react";

const useList =()=>  {
    const [list, setList] = useState([
            {
              review: "nice food",
              name: "Aman ",
              
            }, 
            {
              review: "good food",
              name: "himansu ",
              
            }, 
            {
              review: "delicious",
              name: "aaditya ",
              
            }, 
            
        
        
        
       ]);

    const push=(value)=>{
        const newList = [...list, value];
        setList(newList);

    }
     
    const pull=(index)=>{
    const newList=list.filter((listitem,listindex)=>{
        return listindex!==index;
        
    })
    setList(newList);
    }
return {
    list: list,
    push: push,
    pull: pull
    
}

}
export default useList;
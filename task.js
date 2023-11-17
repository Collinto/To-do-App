// let objName = {
//     firstname: "amp",
//     lastname: "lpt"
// }

// for (propName in objName) {
//     console.log(objName [propName])
// }


window.addEventListener('load', ()=>{
    const form = document.getElementById('new-task');
    const input = document.getElementById('a-new-task');
    const submit = document.getElementById('sub');
    const main = document.querySelector(".main")

    // console.log(form)

    form.addEventListener('submit', (e)=>{
       e.preventDefault(); // this stops it from refreshing the page
        
        const task = input.value;


      /*
        -------- Another Method of creating elements in JS -----------
        const New = document.createElement("div");
        New.classList.add("new");
        New.innerHTML= `<div id="fresh">
        <div id="free">
            <p id="fresh-task"> ${task} </p>
        </div>
        <span>
        <button id="edit">Edit</button>
        <button id="Delete" onclick= "del()">Delete</button>
    </span>;
    </div>`;
    
        main.appendChild(New);
       
        container.appendChild(fresh);*/

        input.value = " ";  
        if(!task){
            alert("Please input a task")
            return
            // submit.disabled = true;
        }
        else{
            
            const fresh = document.createElement("div");
            fresh.setAttribute("id", "fresh" );
            const free = document.createElement("div");
            free.setAttribute("id", "free" ); 
            const fresht = document.createElement("input");
            fresht.setAttribute("id", "fresh-task" );
            fresht.setAttribute("readonly", "readonly")
            fresht.value= task;
        
            const span = document.createElement("span");
            const edit = document.createElement("button");
            edit.setAttribute("id", "edit" ); 
            edit.setAttribute("class", "fas fa-edit");
            edit.value = "edit"
        
            const Delete = document.createElement("button");
            Delete.setAttribute("id", "Delete" );
            Delete.setAttribute("class", "fas fa-trash-alt"); 
        
            span.appendChild(edit);
            span.appendChild(Delete);
        
            free.appendChild(fresht);
            fresh.appendChild(free);
            fresh.appendChild(span);
        
             main.appendChild(fresh)
             

            Delete.addEventListener("click", ()=>{
                fresh.parentNode.removeChild(fresh)
            })
            edit.addEventListener('click', ()=>{
                fresht.removeAttribute("readonly");
                console.log(edit.id)

            if(edit.id === "edit"){
                edit.setAttribute("id", "save" );
                edit.setAttribute("class", "fas fa-save" );
            }
            else{
                edit.setAttribute('class', "fas fa-edit"); 
                // edit.value === "edit";
                edit.setAttribute("id", "edit" );
                fresht.setAttribute("readonly", "readonly");
            } 
                
             /*for(count=0; count<2; count++) {
                edit.setAttribute("id", "save"); 
                edit.textContent = "Save";

                save.addEventListener("click", ()=>{
                    if(count==2){
                        edit.setAttribute("id", "edit" ); 
                        edit.textContent = "EDIT";
                        fresht.setAttribute("readonly", "readonly");
                        
                    }
                    count = 0;
                    console.log(count)
                    return
                })
             }
            /*   let count = " ";
                    
                function save(){
                    count = count + 1;
                    if (count == 1){
                        // edit.removeAttribute("id", "edit" ); 
                        
                    }
                }
                save(); 
                console.log(count)*/
            })


            alert(`                        
                                     Task added successfully 
                                             ✅`);
     
                                    
                                             submit.disabled = false;                                          console.log(task);                                           
             
        }
        
       
        

        // const del = New.getElementById("Delete")
        // del.addEventListener("click", (e)=>{
        //     alert("clicked")
            // if (e.target.classList.contains("#Delete"))
        //  {
                // e.target.parentElement.remove();
                

        // }
         //    })
         
    })
    }
)

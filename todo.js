    const fs=require('fs')
    const filePath="./tasks.json"

    const loadTask=()=>{
        try {
            const dataBuffer=fs.readFileSync(filePath)
            const dataJSON=dataBuffer.toString()
            return JSON.parse(dataJSON)
        } catch (error) {
            return []
        }
    }

    const saveTasks=(tasks)=>{
        const dataJSON=JSON.stringify(tasks)
        fs.writeFileSync(filePath,dataJSON)
    }

    const listTasks=()=>{
        const tasks=loadTask()
        tasks.forEach((task,index)=>{
            console.log(`${index+1}-${task.task}`);
        })
    }

    const removeTasks=(argument)=>{
        const tasks=loadTask()
        const newTasks=tasks.filter((task,index)=>{
            return index!==argument-1
        })
        saveTasks(newTasks)
        console.log("Task Removed from index : ",argument);
    }

    const addTask=(task)=>{
        const tasks=loadTask()
        tasks.push({task})
        saveTasks(tasks)
        console.log("Task Added ",task);   
    }

    const command=process.argv[2]          //this is to take commandline input of command and usually it starts from index 2 as 0->node 1->file name.
    const argument=process.argv[3]          //this will take name of the task or the argument of the command

    if(command==='add'){
        addTask(argument)
    }else if(command==='list'){
        listTasks()
    }else if(command==='remove'){
        removeTasks(parseInt(argument))
    }else{
        console.log("Command not found");
        
    }
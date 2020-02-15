### Challenge 1
```
function job1(callback){
    setTimeout(function(){
        callback();
    },2000)
}

function job(callback1, callback2) {
   job1(callback1)
    
     setTimeout(function(){
        callback2()
        setTimeout(function(){
            callback2()
                setTimeout(function(){
            callback2()
            }, 1000)
        }, 1000)
    }, 1000)
    
}

module.exports = job;
```

como a Patricia resovleu

```
function job(callback1, callback2) {
    return new Promise(resolve => {
        setTimeout(() => callback1(), 2000);
        setTimeout(() => callback2(), 1000);
        setTimeout(() => callback2(), 2000);
        setTimeout(() => callback2(), 3000);
    });
}
```

### Challenge 2

function job() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('hello world')
        }, 2000)
    })
}

module.exports = job;

### challenge 4

async function job(result, database, errorManager) {
    try{
        const id =  await result
        const info = await database.get(id)
        return info.name
    }catch(error){
        errorManager.notify(error);
        throw error;
    }
}

module.exports = job;
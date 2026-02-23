// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler


var fetchData = new Promise((resolve, reject) => {
    setTimeout(() => {
        const apiResponse = { status: 200, payload: [{"name":"sample_fec998e7-4d43-4364-8a46-08622d487280","age":290,"email":"user_209@example.com","id":"7940dda7-169b-497e-92fe-63c171bcee7f","department":"sample_5bf65c2b-897b-40f0-ae37-0111712fd642"},{"name":"sample_3cf53e0b-7010-467a-8efa-a5488fd393d3","age":894,"email":"user_938@example.com","id":"eb327d95-2f8f-4448-a226-9c7b083c8017","department":"sample_8d974168-8660-47b0-885f-770a3973c91d"}] };;
        if (apiResponse.status == 200){
            resolve(apiResponse)
        }else { reject(new Error('No data arrived...'))
        }
    }, 5000);
});

fetchData.then((data)=> {console.log(data)})
.catch((error)=> {console.log(error) })
.finally(()=>{console.log('finally arrived')});


// console.log("Try programiz.pro");
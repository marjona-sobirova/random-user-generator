
let API = 'https://randomuser.me/api/?results=9';
 
const toggleModeLoader = (toggle) => {
    if (toggle) {
        overlay.classlist.remove('hidden')
    } else {
        overlay.classlist.add('hidden')
    }
}



 const getDAta = function(resource) {
return new Promise((resolve,reject) => {
    const request = new XMLHttpRequest()
    request.addEventListener('readystatechange', function(){
        if(request.readyState <4) {
            toggleModeLoader(true);
        } else if (request.readyState == 4 && request.status == 200){
            const data = JSON.parse(request.responseText)
            resolve(data.results);
            toggleModeLoader(false)
        }  else if(request.readyState == 4) {
            reject('err!!!');
            toggleModeLoader(false)
        }
    })
    request.open('GET', resource);
    request.send();

});
 }
 const reload = () => {
    getDAta(API).then(data => {
        console.log('data');
        updateUI(data)
    }).catch(err => {
        console.log('err');
        
    })
 }

document.addEventListener('DOMContentLoaded', reload);







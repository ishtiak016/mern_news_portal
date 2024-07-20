const development ='development';
const production ='production';

const mode='development';

let base_url=''
if(mode== production){
base_url=''
}else{
    base_url='http://localhost:5000'
}
export {base_url}
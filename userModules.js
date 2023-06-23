 const USER_DATA =[
    {
        id:1,
        name:'ram',
        age: 20,email:'dodo@.do.com'
    }
    
];

//CRUD
export const addUser =(new_user) =>{
    //add a new user in USER_DATA
    USER_DATA.push(new_user);

}
/*const new_user = (
    {
        id:2,
        name:'kavi',
        age:20,
        email:'kavi@gmail.com'

    }
    )*/

//addUser(new_user);
//console.log(USER_DATA);
export const editUser = (id=1,key='name',value='xyz') => {
 //edit
 const user_index = USER_DATA.findIndex((user)=> user.id===id);
 if(user_index != -1){
    USER_DATA[user_index][key]=value;
 }

}
export const editMultipleParamInUser =(id =1,updateValue ={
    name:'da'
    ,age:60
}) => {
    //edit
    const user_index = USER_DATA.findIndex((user)=> user.id===id);
 if(user_index != -1){
    USER_DATA[user_index] = {
        ...USER_DATA[user_index],
        ...updateValue
    }
}
}
export const deleteUser =(id) => {
    //delete the particular user object from array
    const user_index = USER_DATA.findIndex((user)=> user.id===id);
    if(user_index != -1){
        USER_DATA.splice(user_index,1);
}
}
//export default USER_DATA

export default USER_DATA;
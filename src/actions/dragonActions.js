export const ADD_MEMBER = "ADD_MEMBER";//This is the "action type"
//1. create and export an action constant for ADD_NEW_MEMBER.

export const addMember = (name)=> {
    console.log('dragonAction.js ln:5 name:', name);
    return({type:ADD_MEMBER, payload:name});//this is the action creator function
}
//2. create and export an action creator for addNewMember.

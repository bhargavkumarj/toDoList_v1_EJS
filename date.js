//No parenthesis given at the end of getDate as to give more control to when to call the func from the app.js
module.exports.getDate=function(){
    const today=new Date;
    const options={
        weekday:"long",
        day:"numeric",
        month:"long"
    };
    return today.toLocaleDateString("en-US",options);
};

// module.exports and exports both have smae functionality
exports.getDay=function(){
    const today=new Date;
    const options={
        weekday:"long",
    };
    return today.toLocaleDateString("en-US",options);
}

/**
 * [part 1] this:  context of an object 
 * 
 */

const userObj = {
    name: "asd-abc-mno",
    age: -1,
    signup: function(name, age){
        
    },
    login: function(){
        var that = this;
        const checkLoginDetails = () => {
            // server method will be called for authentication
        
            console.log(`User details are : ${that.name}, ${that.age}`)
        }
        return checkLoginDetails;
    }
}

document.getElementById("clickBtn1").addEventListener("click", function (e1) {
    var that = this;
    document.getElementById("clickBtn2").addEventListener("click", (e2) => {
    // debugger
    // console.log(that);
    // console.log(e2);
    // console.log(this)
    // that.
  });
});
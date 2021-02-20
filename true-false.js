/**
 * ! Falsely Value For String
 * ?    false
 * ?    ""
 * ?    0
 * ?    null
 * ?    NaN
 * ?    undefine
 */
/**
 * ! Truthy
 * ?    "0"
 * ?    []
 * ?    {}
 * ?    " "
 * ?    true
 */

 const name=`0`;

 if (name) {
     console.log("condition is true");
 }else{
    console.log("condition is false");
 }
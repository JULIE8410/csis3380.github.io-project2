//querySelectorAll() method returns all li elements
//Array from() method create an array from the return values and save them in lists variable
const lists = Array.from(document.querySelectorAll('li'));

// The length of the array 
const lengthofArr = lists.length;

// Call a display function to display the first 10 profiles when the program is loaded
display(1);

// Call a function to create buttons
createButtons();

// querySelectorAll() method returns all button elements within an element whose class name is .btnArea
// Array from() method create an array from the return values and save them in buttons variable
const buttons = Array.from(document.querySelectorAll('.btnArea button'));

// using map() method, traverse each button element
buttons.map(btn => {

    // Give a CSS rule to each button
    btn.style.margin = '0px 2px';

    // Add a changePage event listener to each button element
    btn.addEventListener('click', changePage);

});


// Define a function that creates buttons
function createButtons() {

    // To figure out how many pages we need,
    // divide length of the array by 10, use Math.floor() method, and add 1 to the result
    const numOfPages = Math.floor(lengthofArr / 10) + 1;

    // Create an <div> element
    var a = document.createElement("div");

    // Give CSS rules to the element to make buttons to be in the center
    a.style.display = 'flex';
    a.style.justifyContent = 'center';
    a.style.alignItems = 'center';
    a.style.marginTop = '20px';
    
    // Add a class name to <div> element
    a.classList.add('btnArea');

    // Create buttons based on number of pages 
    for (var i = 1; i <= numOfPages; i++) {

        // Create a <button> element
        var x = document.createElement("button");

        // Add text string to the button
        var t = document.createTextNode(i);
       
        // Append the <button> element to <div> element
        a.appendChild(x);

        // Append the text string to <button> element
        x.appendChild(t);

        // Find <div> element whose class name is page,
        // Append <div> element we made to it
        document.querySelector('div.page').appendChild(a);

    }

}

// Define a function that displays profiles based on a button clicked
function display(btnClicked) {

    // Create variables to find starting index and ending index
    var endNum = btnClicked * 10;   // e.g., if a user clicked page 1, then endNum is equals to 10
    var startNum = endNum - 10;     //       startNum is equals to 0

    // If there are less than 10 profiles for the last page, then we need to change endNum to the length of the array
    if (endNum > lengthofArr) {
        endNum = lengthofArr;
    }

    // By using startNum and endNum as an index of the array, 
    // we traverse each element and change its CSS rule (display : block)
    lists.forEach((itme, index) => {
        
        // If the index of an element in the array is greater than or equals to startNum, and less than endNum
        if(index >= startNum && index < endNum){

            itme.style.display = 'block';  // visible

        }else{

            itme.style.display = 'none';   // invisible

        }
    });


}

// Define a event listener - it is called when a button is clicked
function changePage(e) {
    
    // Call a display() function and pass a text of a button clicked
    display(this.innerText);
}
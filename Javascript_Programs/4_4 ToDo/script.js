//Create form for inputting new list items
newForm = document.createElement("form")

//Create a text field which will have new items added
textInput = document.createElement("input");
textInput.type = "text";
textInput.placeholder = "Next task";

//Create a button that will allow the user to submit completed text
subButton = document.createElement("input")
subButton.type = "submit";
subButton.innerText = "Add to list";

//Add the form and its elements to the document
document.querySelector("#main").append(newForm);
newForm.append(textInput);
newForm.append(subButton);


//This function will handle the creation of new list elements
function makeNewListItem(LIText) {
    let newListItem = document.createElement("li");
    console.log(textInput.value);
    newListItem.innerText = LIText;
    document.querySelector("#coreList").append(newListItem);

    //This will add the code to make the text cross out when clicked
    newListItem.addEventListener("click", function(event) {
        newListItem.classList.toggle("stricken");
        console.log("You clicked me!");
    })

    //This will add the code to make the text delete 
    //itself when double-clicked
    newListItem.addEventListener("dblclick", function(event) {
        newListItem.remove();
        console.log("You double clicked me!");
    })
}

//This function will handle the submission of the list-adding form
newForm.addEventListener("submit", function(event) { 
    event.preventDefault();

    makeNewListItem(textInput.value);

    newForm.reset();
    console.log("Form submitted");
})
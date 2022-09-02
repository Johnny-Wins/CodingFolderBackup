// categories is the main data structure for the app; it looks like this:

//  [
//    { title: "Math",
//      clues: [
//        {question: "2+2", answer: 4, showing: null},
//        {question: "1+1", answer: 2, showing: null}
//        ...
//      ],
//    },
//    { title: "Literature",
//      clues: [
//        {question: "Hamlet Author", answer: "Shakespeare", showing: null},
//        {question: "Bell Jar Author", answer: "Plath", showing: null},
//        ...
//      ],
//    },
//    ...
//  ]

let categories = [];

gameStarter = document.createElement("button")
gameStarter.innerText = "Start a new game of Jeopardy";
gameStarter.addEventListener('click',setupAndStart);
document.querySelector("body").appendChild(gameStarter);


/** Get NUM_CATEGORIES random category from API.
 *
 * Returns array of category ids
 */

async function getCategoryIds() {
    check = true;
    while(check == true){
        newList = await axios.get("http://jservice.io/api/random",{params: {count:6}});

        parsedList = newList.data.map(async function(catObj) {
            console.log("adding " + catObj.category_id + " to list of category IDS")
            return catObj.category_id
        })

        try
        {

        for(count = 0; count < newList.data.length; count++){
            
            foundCategory = await axios.get("http://jservice.io/api/category",{params: {id: newList.data[count].category_id}})

            if (foundCategory.data.clues.length < 5){
                console.log("Category with ID " + cur.category_id + " is too small, with " + foundCategory.data.clues.length + "clues.")
                check = true;
                break;
            }
            else{
                console.log("Category with ID " + cur.category_id + " is berified, with " + foundCategory.data.clues.length + "clues.");
            }
        }
        }

        catch{
            console.log(newList);
        }

        console.log("check variable reads " +check);
        check = false;

    };
    
    return parsedList;
}

/** Return object with data about a category:
 *
 *  Returns { title: "Math", clues: clue-array }
 *
 * Where clue-array is:
 *   [
 *      {question: "Hamlet Author", answer: "Shakespeare", showing: null},
 *      {question: "Bell Jar Author", answer: "Plath", showing: null},
 *      ...
 *   ]
 */

async function getCategory(inputId) {
    catId = await inputId;

    console.log("Starting getcategory function with ID " + catId);

    // cat = await axios.get("http://jservice.io/api/category",{params: {id: catId}})

    cat = await axios.get("http://jservice.io/api/category?id="+catId)

    console.log("Ready to return new category based on " + cat.data.title)


    resultCat = {
        title: "",
        clues: []
    };

    resultCat.title = /*await*/ cat.data.title;

    resultCat.clues = await cat.data.clues.map(function(curClue){
        newClue = {
            question: "",
            answer: "",
            showing: null
        }

        //console.log(curClue)

        newClue.question = curClue.question
        newClue.answer = curClue.answer

        //console.log(newClue);

        return newClue;
    })

    console.log("This should be a category:")
    console.log(resultCat);

    return resultCat;
}

/** Fill the HTML table#jeopardy with the categories & cells for questions.
 *
 * - The <thead> should be filled w/a <tr>, and a <td> for each category
 * - The <tbody> should be filled w/NUM_QUESTIONS_PER_CAT <tr>s,
 *   each with a question for each category in a <td>
 *   (initally, just show a "?" where the question/answer would go.)
 */

async function fillTable(IdList,clueList) {

    
    console.log(IdList);
    console.log("Clue list is ");
    console.log(clueList);

    //make rows
    for(let count = 0; count < 6; count++){
        let newRow = document.createElement("tr")
        //append row
        jeopTable.appendChild(newRow)

        //make columns
        for(let count2 = 0; count2 < 6; count2++){

            console.log("working in the " + count2 +"th category")

            let newField = ""

            if(count == 0){
                newField = document.createElement("th")
                    newField.innerText = clueList[count2].title;
                
            }
            else{
                newField = document.createElement("td")

                console.log("This should be in the " +count2+ " category:")
                console.log(clueList[count2]);

                console.log("And this should be a " +count+" clue")
                console.log(clueList[count2].clues[count]);

                try {
                    console.log(clueList[(count2)].clues[count -1].answer);
                }
                catch{
                    console.log("ERROR! At category " +count + " and clue # " + count2);
                }

                let curClue = clueList[count2].clues[count - 1];

                newField.innerText = "?";

                newField.addEventListener('click',function getQuestion(){
                    newField.innerHTML = curClue.question;

                    newField.addEventListener('click',function getAnswer(){
                        newField.innerHTML = curClue.answer;

                        newField.removeEventListener('click',getAnswer);
                    })

                    newField.removeEventListener('click',getQuestion);
                })

                
            }

            //append column
            newRow.appendChild(newField);
        }
    }

}

/** Start game:
 *
 * - get random category Ids
 * - get data for each category
 * - create HTML table
 * */

async function setupAndStart() {

    try{
        document.querySelector("body").removeChild(document.querySelector("table"));
    }
    catch{
        console.log("Must be the first loop.")
    }

    //make table
    jeopTable = document.createElement("table")
    jeopTable.setAttribute('id','jeopardy');

    //append table
    document.querySelector("body").appendChild(jeopTable);

    //get IDs 
    idList = await getCategoryIds();

    //get clues for each category
    clueList = []
    for(count = 0; count < 6 ;count++){
        newCat = await getCategory(idList[count]);
        
        console.log(getCategory(idList[count]));

        clueList.push(newCat);
    }

    
    fillTable(idList,clueList);

}

setupAndStart();
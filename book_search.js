/** 
 * RECOMMENDATION
 * 
 * To test your code, you should open "tester.html" in a web browser.
 * You can then use the "Developer Tools" to see the JavaScript console.
 * There, you will see the results unit test execution. You are welcome
 * to run the code any way you like, but this is similar to how we will
 * run your code submission.
 * 
 * The Developer Tools in Chrome are available under the "..." menu, 
 * futher hidden under the option "More Tools." In Firefox, they are 
 * under the hamburger (three horizontal lines), also hidden under "More Tools." 
 */

/**
 * Searches for matches in scanned text.
 * @param {string} searchTerm - The word or term we're searching for. 
 * @param {JSON} scannedTextObj - A JSON object representing the scanned text.
 * @returns {JSON} - Search results.
 * */ 
 function findSearchTermInBooks(searchTerm, scannedTextObj) {
    /** You will need to implement your search and 
     * return the appropriate object here. */

    // search through the scannedTextObj and find every occurence of the searchTerm
    // return an object with the searchTerm and an array of objects with the ISBN, Page, and Line number of each occurence
    var resultObj = {
        "SearchTerm": searchTerm,
        "Results": []
    };
    for (var i = 0; i < scannedTextObj.length; i++) {
        var book = scannedTextObj[i];
        var bookContent = book.Content;
        for (var j = 0; j < bookContent.length; j++) {
            var line = bookContent[j];
            if (line.Text.includes(searchTerm)) {
                var result = {
                    "ISBN": book.ISBN,
                    "Page": line.Page,
                    "Line": line.Line
                };
                resultObj.Results.push(result);
            }
        }
    }
    return resultObj;
}

/** Example input object. */
const twentyLeaguesIn = [
    {
        "Title": "Twenty Thousand Leagues Under the Sea",
        "ISBN": "9780000528531",
        "Content": [
            {
                "Page": 31,
                "Line": 8,
                "Text": "now simply went on by her own momentum.  The dark-"
            },
            {
                "Page": 31,
                "Line": 9,
                "Text": "ness was then profound; and however good the Canadian\'s"
            },
            {
                "Page": 31,
                "Line": 10,
                "Text": "eyes were, I asked myself how he had managed to see, and"
            } 
        ] 
    }
]
    
/** Example output object */
const twentyLeaguesOut = {
    "SearchTerm": "the",
    "Results": [
        {
            "ISBN": "9780000528531",
            "Page": 31,
            "Line": 9
        }
    ]
}

/*
 _   _ _   _ ___ _____   _____ _____ ____ _____ ____  
| | | | \ | |_ _|_   _| |_   _| ____/ ___|_   _/ ___| 
| | | |  \| || |  | |     | | |  _| \___ \ | | \___ \ 
| |_| | |\  || |  | |     | | | |___ ___) || |  ___) |
 \___/|_| \_|___| |_|     |_| |_____|____/ |_| |____/ 
                                                      
 */

/* We have provided two unit tests. They're really just `if` statements that 
 * output to the console. We've provided two tests as examples, and 
 * they should pass with a correct implementation of `findSearchTermInBooks`. 
 * 
 * Please add your unit tests below.
 * */

/** We can check that, given a known input, we get a known output. */
const test1result = findSearchTermInBooks("the", twentyLeaguesIn);
if (JSON.stringify(twentyLeaguesOut) === JSON.stringify(test1result)) {
    console.log("PASS: Test 1");
} else {
    console.log("FAIL: Test 1");
    console.log("Expected:", twentyLeaguesOut);
    console.log("Received:", test1result);
}

/** We could choose to check that we get the right number of results. */
const test2result = findSearchTermInBooks("the", twentyLeaguesIn); 
if (test2result.Results.length == 1) {
    console.log("PASS: Test 2");
} else {
    console.log("FAIL: Test 2");
    console.log("Expected:", twentyLeaguesOut.Results.length);
    console.log("Received:", test2result.Results.length);
}



/** Example input object. */
const inputObj2 = [
    {
        "Title": "Twenty Thousand Leagues Under the Sea",
        "ISBN": "9780000528531",
        "Content": [
            {
                "Page": 31,
                "Line": 8,
                "Text": "now simply went on by her own momentum.  The dark-"
            },
            {
                "Page": 31,
                "Line": 9,
                "Text": "ness was then profound; and however good the Canadian\'s"
            },
            {
                "Page": 31,
                "Line": 10,
                "Text": "eyes were, I asked myself how he had managed to see, and"
            } 
        ] 
    }, 
    {
        "Title": "Diary of a Wimpy Kid",
        "ISBN": "9780000528525",
        "Content": [
            {
                "Page": 321,
                "Line": 8,
                "Text": "now simply went on, the darkness and the light, the"
            },
            {
                "Page": 131,
                "Line": 12,
                "Text": "hello Mr. Potato Head, how are you today?"
            },
            {
                "Page": 24,
                "Line": 10,
                "Text": "dawn and dusk, the day and the night, the good and the bad, the potato"
            } 
        ] 
    }
]

/**
 * Positive tests: tests that return a match.
 */
const positiveResult = {
    "SearchTerm": "the",
    "Results": [
        {
            "ISBN": "9780000528531",
            "Page": 31,
            "Line": 9
        },
        {
            "ISBN": "9780000528525",
            "Page": 321,
            "Line": 8
        },
        {
            "ISBN": "9780000528525",
            "Page": 24,
            "Line": 10
        }
    ]
}

const test3result = findSearchTermInBooks("the", inputObj2);
if (JSON.stringify(positiveResult) === JSON.stringify(test3result)) {
    console.log("PASS: Test 3");
} else {
    console.log("FAIL: Test 3");
    console.log("Expected:", twentyLeaguesOut);
    console.log("Received:", test1result);
}


/**
 * Negative tests: tests that do not return a match.
 */
const negativeResult = {
    "SearchTerm": "thejfl",
    "Results": []
}

const test4result = findSearchTermInBooks("thejfl", inputObj2);
if (JSON.stringify(negativeResult) === JSON.stringify(test4result)) {
    console.log("PASS: Test 4");
} else {
    console.log("FAIL: Test 4");
    console.log("Expected:", negativeResult);
    console.log("Received:", test4result);
}

/**
 * Case sensitive test.
 */
const caseSensitiveResult = {
    "SearchTerm": "Potato",
    "Results": [
        {
            "ISBN": "9780000528525",
            "Page": 131,
            "Line": 12
        }
    ]
}

const test5result = findSearchTermInBooks("Potato", inputObj2);
if (JSON.stringify(caseSensitiveResult) === JSON.stringify(test5result)) {
    console.log("PASS: Test 5");
}   else {
    console.log("FAIL: Test 5");
    console.log("Expected:", caseSensitiveResult);
    console.log("Received:", test5result);
}   


const caseSensitiveResult2 = {
    "SearchTerm": "potato",
    "Results": [
        {
            "ISBN": "9780000528525",
            "Page": 24,
            "Line": 10
        }
    ]
}

const test6result = findSearchTermInBooks("potato", inputObj2);
if (JSON.stringify(caseSensitiveResult2) === JSON.stringify(test6result)) {
    console.log("PASS: Test 6");
}   else {
    console.log("FAIL: Test 6");
    console.log("Expected:", caseSensitiveResult2);
    console.log("Received:", test6result);
}   
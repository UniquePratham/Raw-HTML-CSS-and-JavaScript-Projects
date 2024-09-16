console.log("This is Exercise-5i");
// Pretend that this data is coming from server
const data = {
    "word": "example",
    "results": [
        {
            "definition": "a representative form or pattern",
            "partOfSpeech": "noun",
            "synonyms": [
                "model"
            ],
            "typeOf": [
                "representation",
                "internal representation",
                "mental representation"
            ],
            "hasTypes": [
                "prefiguration",
                "archetype",
                "epitome",
                "guide",
                "holotype",
                "image",
                "loadstar",
                "lodestar",
                "microcosm",
                "original",
                "paradigm",
                "pilot",
                "prototype",
                "template",
                "templet",
                "type specimen"
            ],
            "derivation": [
                "exemplify"
            ],
            "examples": [
                "I profited from his example"
            ]
        },
        {
            "definition": "something to be imitated",
            "partOfSpeech": "noun",
            "synonyms": [
                "exemplar",
                "good example",
                "model"
            ],
            "typeOf": [
                "ideal"
            ],
            "hasTypes": [
                "pacemaker",
                "pattern",
                "beauty",
                "prodigy",
                "beaut",
                "pacesetter"
            ],
            "derivation": [
                "exemplify",
                "exemplary"
            ]
        },
        {
            "definition": "an occurrence of something",
            "partOfSpeech": "noun",
            "synonyms": [
                "case",
                "instance"
            ],
            "typeOf": [
                "happening",
                "natural event",
                "occurrence",
                "occurrent"
            ],
            "hasTypes": [
                "clip",
                "mortification",
                "piece",
                "time",
                "humiliation",
                "bit"
            ],
            "derivation": [
                "exemplify"
            ],
            "examples": [
                "but there is always the famous example of the Smiths"
            ]
        },
        {
            "definition": "an item of information that is typical of a class or group",
            "partOfSpeech": "noun",
            "synonyms": [
                "illustration",
                "instance",
                "representative"
            ],
            "typeOf": [
                "information"
            ],
            "hasTypes": [
                "excuse",
                "apology",
                "specimen",
                "case in point",
                "sample",
                "exception",
                "quintessence",
                "precedent"
            ],
            "derivation": [
                "exemplify",
                "exemplary"
            ],
            "examples": [
                "this patient provides a typical example of the syndrome",
                "there is an example on page 10"
            ]
        },
        {
            "definition": "punishment intended as a warning to others",
            "partOfSpeech": "noun",
            "synonyms": [
                "deterrent example",
                "lesson",
                "object lesson"
            ],
            "typeOf": [
                "monition",
                "admonition",
                "word of advice",
                "warning"
            ],
            "derivation": [
                "exemplary"
            ],
            "examples": [
                "they decided to make an example of him"
            ]
        },
        {
            "definition": "a task performed or problem solved in order to develop skill or understanding",
            "partOfSpeech": "noun",
            "synonyms": [
                "exercise"
            ],
            "typeOf": [
                "lesson"
            ],
            "examples": [
                "you must work the examples at the end of each chapter in the textbook"
            ]
        }
    ],
    "syllables": {
        "count": 3,
        "list": [
            "ex",
            "am",
            "ple"
        ]
    },
    "pronunciation": {
        "all": "ɪɡ'zæmpəl"
    },
    "frequency": 4.67
}
let check;
let inputSearch = document.getElementById('inputSearch');
inputSearch.addEventListener('input', inputeventHandler);
function inputeventHandler() {
    let isearch = inputSearch.value;
    if (isearch.length == 0) {
        check = false;
    }
    else {
        check = true;
    }
}
let search = document.getElementById('search');
search.addEventListener('click', buttonClickHandler);
function buttonClickHandler() {
    if (check == true) {
        tableBody = document.getElementById('tableBody');
        let str = ``;
        for (let i = 0; i < data.results.length; i++) {
            str += `
            <tr>
                <th scope="col" class="p-2 m-2">${i + 1}</th>
                <th scope="col" class="p-2 m-2">${data.results[i].definition}</th>
            </tr>`
            tableBody.innerHTML = str;
        };
    }
    else {
        console.error("Input is empty");
    }
}
// Things I can do 
// 1. If input is empty then show a alert
// 2. To show dropdown-menu for the required item to show
// 3. To check input value & show the results accordingly
// 4. To remove table headings before search 
// 5. And Many More
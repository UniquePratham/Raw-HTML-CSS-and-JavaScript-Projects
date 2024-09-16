console.log('This is C.V. Screener Website Js File');
// Data is an array of objects which contains information about the candidates
const data = [
    {
        name: 'Pratham Agarwal',
        age: 20,
        city: 'Guwahati',
        language: 'Python',
        framework: 'Django',
        image: "https://randomuser.me/api/portraits/men/50.jpg"
    },
    {
        name: 'Adarsh Agarwal',
        age: 19,
        city: 'Siliguri',
        language: 'Java',
        framework: 'Play',
        image: "https://randomuser.me/api/portraits/men/55.jpg"
    },
    {
        name: 'Bijay Jiwrajka',
        age: 19,
        city: 'Mankachar',
        language: 'C++',
        framework: 'POCO C++',
        image: "https://randomuser.me/api/portraits/men/60.jpg"
    },
    {
        name: 'Ankita Chakraborty',
        age: 20,
        city: 'Guwahati',
        language: 'JavaScript',
        framework: 'Angular & Node.js',
        image: "https://randomuser.me/api/portraits/women/50.jpg"
    },
    {
        name: 'Nawadeep Athreya',
        age: 19,
        city: 'Bangalore',
        language: 'Go',
        framework: 'Go',
        image: "https://randomuser.me/api/portraits/men/65.jpg"
    },
]

// Ternary Operator 
// After return if true then ? else : will be implement; example below

// CV Iterator
function cvIterator(profiles) {
    let nextIndex = 0;
    return {
        next: function () {
            return nextIndex < profiles.length ?
                { value: profiles[nextIndex++], done: false } :
                { done: true }
        }
    }
}

const nextBtn = document.getElementById('nextBtn');
nextBtn.addEventListener('click', nextCV);
const candidates = cvIterator(data);
nextCV();
function nextCV() {
    const currentCandidate = candidates.next().value;
    let image = document.getElementById('image');
    let profile = document.getElementById('profile');
    if (currentCandidate != undefined) {
        image.innerHTML = `<img src='${currentCandidate.image}'>`;
        profile.innerHTML = `<ul class="list-group">
    <li class="list-group-item">Name: ${currentCandidate.name}</li>
    <li class="list-group-item">${currentCandidate.age} Years Old</li>
    <li class="list-group-item">Lives in ${currentCandidate.city}</li>
    <li class="list-group-item">Primarily works on ${currentCandidate.language}</li>
    <li class="list-group-item">Uses ${currentCandidate.framework} Framework</li>
  </ul>`;
    }
    else {
        alert("End of Candidate's Applications");
        // Below command helps to reload the window
        window.location.reload();
    }
}
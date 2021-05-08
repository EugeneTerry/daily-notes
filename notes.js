//these are the original notes
const myNotes = [
  {
    id: 1,
    subject: "JavaScript",
    date: "5/4/2013",
    feeling: "Good",
    timeSpent: "3 hours"
  },
  {
    id: 2,
    subject: "CSS",
    date: "5/5/2013",
    feeling: "OK",
    timeSpent: "2 hours"
  }
];
// this is a new note outside the array
const noteAboutToday = {
  id: 3,
    subject: "HTML",
    date: "5/6/2013",
    feeling: "Fine",
    timeSpent: "0.5 hours"
};

const d = new Date();
// this is another note outside the array
const autoUpdateNote = {
  id: 3,
    subject: "FlexBox",
    date: (`${d.getMonth()+1}/${d.getDate()+1}/${d.getFullYear()} ${d.toLocaleTimeString()}`),
    feeling: "Crazy",
    timeSpent: "5 hours"
};
myNotes.push(noteAboutToday); // this added the first new note 

const searchTerm = "Fine"; // this is term I want to find in my notes as a variable(const)

//this for loop will find all of the occurences of the variable. 
for(const notes of myNotes) {
  if (notes.feeling === searchTerm) {
    console.log(`On ${notes.date} you felt ${notes.feeling}.`);// this part of the loop will console a phrase using the properties of the note that had the variable in it.
   }; 
};
// this will add the second new note or any other note to made from now on in the array and place a new number in sequence in the id property. 
const createNote = (note) => {
  note.id = myNotes[myNotes.length -1].id + 1; //this takes the last item and adds one to the id for the new note.
  myNotes.push(note);
}

createNote(autoUpdateNote);
console.log(myNotes);

for(const notes of myNotes) {
    console.log(`On ${notes.date} you felt ${notes.feeling}.`);// this part of the loop will console a phrase using the properties of the note that had the variable in it.
  };

const createDate =() => {
  const d = new Date();
  console.log(`${d.getMonth()+1}/${d.getDate()+1}/${d.getFullYear()} ${d.toLocaleTimeString()}`)
}
createDate();

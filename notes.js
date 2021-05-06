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
]

const noteAboutToday = {
  id: 3,
    subject: "HTML",
    date: "5/6/2013",
    feeling: "Fine",
    timeSpent: "0.5 hours"
}

for (notes of myNotes) {
  console.log(`Note ${notes.id} 
  I learned ${notes.subject}.
  I spent ${notes.timeSpent} working on it.
  I felt ${notes.feeling}.
  ---------------
  `)
}

console.log(myNotes)
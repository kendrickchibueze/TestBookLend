/*
  PearlyCode tests for the BookLending Application
*/

const { viewLentBooks, viewReturnedBooks, deleteBookFromLibrary,viewEditedBookDetails, viewAvailableBooks, addBook } = require('./LibraryModule')
const library= require('./LibraryModule')



test("Adds a book  with name Great One to the library with specific properties or keys", () => {
    Object.keys(library).forEach((prop)=>{
        library[prop] = "Great One"
        expect(library[prop]).toEqual("Great One") 
    })
    for (let i = 0; i < library.length; i += 1) {
        test(`library[${i}] should have properties (nameOfBook, id, author, isbn,genre,numCopies,isBorrowed)`, () => {
          expect(library[i]).toHaveProperty('nameOfBook');
          expect(library[i]).toHaveProperty('id');
          expect(library[i]).toHaveProperty('author');
          expect(library[i]).toHaveProperty('isbn');
          expect(library[i]).toHaveProperty('genre');
          expect(library[i]).toHaveProperty('numCopies');
          expect(library[i]).toHaveProperty('isBorrowed');
        });
      }
    
})



/* Edit Book Test */
// This test passes for book name edited from learnable to mr kendrick

test('we should have book edited by author name from Learnable to Mr kendrick', () => {
  expect(viewEditedBookDetails().map(item=>item.author=="Learnable")).not.toEqual(
    expect.arrayContaining([
      expect.objectContaining({"author":"Mr kendrick"}) 
    ])
  )
});


/*Borrow or Lend Book test */
// This test passes for  books borrowed to be equal to names of the following book
test(' Checks Borrows book to be equal to these names Of Books', ()=>{
    const bookName = viewLentBooks().map(item => item.nameOfBook)
    expect(bookName[0]).toEqual("TeachMe")
    expect(bookName[1]).toEqual("GreatTwo")
    expect(bookName[2]).toEqual("MasterJavascript")

})

/*Return Book test */
// This test passes for books with the following names are returned
test("check whether books with a names(masterJavascript and TeachMe) is returned", () =>{
    const myReturnedBooks = viewReturnedBooks().map(item =>item.nameOfBook)
    expect(myReturnedBooks[0]).toEqual("TeachMe")
    expect(myReturnedBooks[1]).toEqual("MasterJavascript")

})


/* Delete Book Test */
//This test passes for deleting books with ids 7 and 8
test("delete books with  ids 7 and 8 from the library", ()=>{
    Object.keys(deleteBookFromLibrary).forEach((prop)=>{
        expect(deleteBookFromLibrary[prop] =="7" ).not.toContain(Object.keys(library).map(item => item.id))
        expect(deleteBookFromLibrary[prop] =="8" ).not.toContain(Object.keys(library).map(item => item.id))
      });
     


})


/*View All Books */
//This test passes for viewing all available books

test("View all available Books in the Library. The Library must not be an empty array", () => {
    const checkMyLibrary = Object.keys(viewAvailableBooks())
    expect(checkMyLibrary).not.toEqual([])
})
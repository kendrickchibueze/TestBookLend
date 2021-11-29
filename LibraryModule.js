
// Pearly codes By Kendrick
// IIFE (MODULE PATTERN)

 let libraryModule = (function(){

   //initialize arrays and variable (private)
     let library = []

    let lentBooks =[]

    let returnedBooks =[]

    let editedLibraryBooks = []

    let deletedLibraryBooks = []

    let allLibraryBooksInStock = []

    let filterBooks
    let checkCondition = true

    

    

  
    
  return {
    //The functions here are public
    //adding a book to library and see all the details
    addBook : function (nameOfBook, id, author, isbn,genre,numCopies) {
         return library.push({
            nameOfBook:nameOfBook,
            id:id,
            author:author,
            isbn:isbn,
            genre:genre,
            numCopies:numCopies,
            isBorrowed:false

        })
     
    
}, 

//Edit a book details(by author,genre and numCopies)
    editBookDetails:function(name){
      let editBook 
     return  editBook = library.map(obj => obj.nameOfBook == name ? editedLibraryBooks.push( {
        ...obj,
        isBorrowed:false,
        author: "Mr Kendrick",
        genre:"programmable",
        numCopies: 1000
      }): obj)
      
    },


//lend a book to clients
lendBook : function(name){
  for(let i=0; i<library.length; i++){
    let bookName = library[i]
    if(name  == bookName.nameOfBook){
      return lentBooks.push({
        nameOfBook:bookName.nameOfBook,
        id:bookName.id,
        author:bookName.author,
        isbn:bookName.isbn,
        genre:bookName.genre,
        numCopies:bookName.numCopies-1,
        isBorrowed:true
              

      })
    }

  }

},
    //return book to the library 
    returnBookToLibrary:function(name){
      let newLibrary 
     return  newLibrary = library.map(obj => obj.nameOfBook == name ? returnedBooks.push( {
        ...obj,
        isBorrowed:false
      }): obj)
      
    },



    //delete a book from the library
    deleteBookFromLibrary : function (id){
      for(let i = 0; i <library.length; i++) {
        let bookId = library[i]
        bookId.isBorrowed = true //This shows it is no longer available but deleted from the library
        if(id== bookId.id) {
           return deletedLibraryBooks.push(library.splice(i,1))
        }
        
         
      }
      
        },

        //filter the books that are remaining in library after borrowing a book name called with this function
      booksAvailableAfterLending:function(name){
        for(let i=0;i<library.length;i++){
          let borrowedBooks= library[i]
          if(name == borrowedBooks.nameOfBook){
            return filterBooks = library.filter(function (currentElement) {
             return currentElement.nameOfBook !== borrowedBooks.nameOfBook
            })
          }
        }
       

      },

      //shows the whole books available in the library(initial books in  stock and deleted books)
      allBooksAvailableInLibrary : function (checkCondition){
         allLibraryBooksInStock.push(...library, ...deletedLibraryBooks) //displays update of initial books in library with the deleted ones
        for(let i=0; i<allLibraryBooksInStock.length; i++){
          let checkState = allLibraryBooksInStock[i]
          if(checkCondition == checkState.isBorrowed){
            return allLibraryBooksInStock.push(checkState.isBorrowed =false)
          }
        }


      },

  



       // view available books in the library
       viewAvailableBooks: function () {
        return allLibraryBooksInStock
        },

        //view borrowed books
        viewLentBooks: function () {
          return lentBooks
          },

          //view returned books 
          viewReturnedBooks : function () {
            return returnedBooks
          },

          //view edited books
          viewEditedBookDetails:function () {
            return editedLibraryBooks
          },
          
          //View the number of  unique books in the  library
          checkTotalNumberOfBooks: function () {
            return allLibraryBooksInStock.length
          },

          //view deleted books from the library
          viewDeletedBooks: function () {
            return deletedLibraryBooks
          },

          //view latest library updates without the borrowed books
          viewFilteredBooks: function () {
            return filterBooks
          }

  

  } 
  



})()

module.exports = libraryModule


// module.exports ={
//   addBook,
//   editBookDetails,
//   lendBook,
//   returnBookToLibrary,
//   editBookDetails,
//   deleteBookFromLibrary,
//   booksAvailableAfterLending

// }

// Add book to our library
libraryModule.addBook("GreatOne", 1, "Jerry", 3245, "mystical", 15)
libraryModule.addBook("GreatTwo", 2, "Joshua Mba", 2300, "mystical", 20)
libraryModule.addBook("GreatThree", 3, "EzeLivinus", 3243, "comical", 12)
libraryModule.addBook("TeachMe", 4, "Jerry", 2243, "mystical", 15)
libraryModule.addBook("MasterJavascript", 5, "Oreilly", 3345, "Tech", 60)
libraryModule.addBook("Learnable", 6, "Sir Kay", 4507, "Teachable", 180)
libraryModule.addBook("Game of Thrones", 7, "Yvonne", 5073, "myth", 580)
libraryModule.addBook("Strong Will", 8, "Delsy", 7233, "comical", 80)



//lendBook
libraryModule.lendBook("TeachMe")
libraryModule.lendBook("GreatTwo")
libraryModule.lendBook("MasterJavascript")


//return borrowed book to the  library 
libraryModule.returnBookToLibrary("TeachMe")
libraryModule.returnBookToLibrary("MasterJavascript")



//Edit Book Details
libraryModule.editBookDetails("Learnable")
libraryModule.editBookDetails("GreatOne")


//delete books from the library
libraryModule.deleteBookFromLibrary(7)
libraryModule.deleteBookFromLibrary(8)


//filter books remaining in the library after borrowing the following bookNames
libraryModule.booksAvailableAfterLending("TeachMe")
libraryModule.booksAvailableAfterLending("Learnable")
libraryModule.booksAvailableAfterLending("GreatOne")

//shows the whole books available in the library
libraryModule.allBooksAvailableInLibrary()





//log out details

console.log(`========================================================`)
console.log("BOOK LENDING SERVICE USING THE MODULE PATTERN")
console.log(`========================================================`)
console.log(`========================================================` + "\n\n\n")


console.log(`========================================================`)
console.log("These are Books added and Available in the Library Store")
console.log(`=========================================================`)
console.log(libraryModule.viewAvailableBooks())

console.log(`=======================================================================================================`)
console.log("The Total Number Of Different Books Available in the Library : " + libraryModule.checkTotalNumberOfBooks())
console.log(`=========================================================================================================` + "\n\n")



console.log(`============================================================`)
console.log("These are Borrowed Books")
console.log(`==============================================================`)
console.log(libraryModule.viewLentBooks())


console.log(`===============================================================`)
console.log("These are  Borrowed Books that are  Returned Back To the Library")
console.log(`===============================================================`)
console.log(libraryModule.viewReturnedBooks())


console.log(`===============================================================`)
console.log(" These Book Details has been Edited, Check them Up")
console.log(`===============================================================`)
console.log(libraryModule.viewEditedBookDetails())



console.log(`=================================================================`)
console.log("These are Deleted books and are no longer available in the library")
console.log(`=================================================================`)
console.log(libraryModule.viewDeletedBooks())



console.log(`===========================================================================`)
console.log("These are Books remaining in the Library Store After Lending out some books")
console.log(`===========================================================================`)
console.log(libraryModule.viewFilteredBooks())















// Задание 1
// Представьте, что у вас есть класс для управления библиотекой. В этом классе будет приватное свойство для хранения списка книг, а также методы для добавления книги, удаления книги и получения информации о наличии книги.

// Класс должен содержать приватное свойство #books, которое инициализируется пустым массивом и представляет собой список книг в библиотеке.

// Реализуйте геттер allBooks, который возвращает текущий список книг.

// Реализуйте метод addBook(title), который позволяет добавлять книгу в список. Если книга с таким названием уже существует в списке, выбросьте ошибку с соответствующим сообщением.

// Реализуйте метод removeBook(title), который позволит удалять книгу из списка по названию. Если книги с таким названием нет в списке, выбросьте ошибку с соответствующим сообщением.

// Реализуйте метод hasBook(title), который будет проверять наличие книги в библиотеке и возвращать true или false в зависимости от того, есть ли такая книга в списке или нет.

// Реализуйте конструктор, который принимает начальный список книг (массив) в качестве аргумента. Убедитесь, что предоставленный массив не содержит дубликатов; в противном случае выбрасывайте ошибку.

class Library {
    #books = [];

    get allBooks() {
        return this.#books;
    }

    addBook(title) {
        if(this.#books.includes(title)) {
            throw new Error('Книга с таким названием уже существует в списке');
        } else {
            this.#books.push(title);
        }
    }

    removeBook(title) {
        if(this.#books.includes(title)) {
            this.#books.splice(this.#books.indexOf(title) , 1);
        }
        else {
            throw new Error('Книги с таким названием нет в списке');
        }
    }

    hasBook(title) {
        return this.#books.includes(title);
    }

    constructor(booksArr) {
        if(this.checkDuplicates(booksArr) === false) {
            throw new Error('Массив содержит дубликаты');
        } else {
            this.#books = booksArr;
        }
        
    }

    checkDuplicates(arr) {
        let uniques = [];
        let res = true;
        for(let book of arr) {
            if(!uniques.includes(book)) uniques.push(book);
            else {
                res = false;
                break;
            }
        }
        return res;
    }
}

// let newLibrary = new Library(['Книга один', 'Книга два', 'Книга три']);
// console.log(newLibrary.allBooks);
// newLibrary.addBook('Книга четыре');
// console.log(newLibrary.allBooks);
// newLibrary.addBook('Книга два');
// newLibrary.removeBook('Книга пять');
// newLibrary.removeBook('Книга три');
// console.log(newLibrary.allBooks);
// console.log(newLibrary.hasBook('Книга пять'));
// console.log(newLibrary.hasBook('Книга два'));
// let secondLibrary = new Library('Книга один', 'Книга один');
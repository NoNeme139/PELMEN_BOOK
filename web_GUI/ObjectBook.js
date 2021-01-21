let myLibrary = []; // Массив

function book(name="", autor="", pages=12) { // Прототип для создания обьекта
	this.name = name // Параметр обьекта
	this.autor = autor
	this.pages = pages
	this.read = false // Параметр обьекта

	this.read = function(read) { // Функция обьекта для изменения параметра
		this.read = read
	}

	this.info = function(name, autor, pages){ // Функция для вывода информации кникги
		if (this.read === true){
			console.log("Название книги:" + this.name + ", Автор:" + this.autor + ", страниц:" + this.pages + ", книга прочитанна")
		}
		else{
			console.log("Название книги:" + this.name + ", Автор:" + this.autor + ", страниц:" + this.pages + ", книга не прочитанна")
		}
	}
}

function addMyBookTolibrary(anyBookObt){ // Функция которая не работает БЛЯТЬ
	myLibrary.push(anyBookObt)
}

let book1 = new book("NAME BOOK", "AUTOR BOOK", 45)
addMyBookTolibrary(book1)
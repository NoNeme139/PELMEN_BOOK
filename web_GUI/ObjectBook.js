let myLibrary = [];

function book(name="", autor="", pages=12) {
	this.name = name
	this.autor = autor
	this.pages = pages
	this.read = false

	this.read = function(read) {
		this.read = read
	}

	this.info = function(name, autor, pages){
		if (this.read === true){
			console.log("Название книги:" + this.name + ", Автор:" + this.autor + ", страниц:" + this.pages + ", книга прочитанна")
		}
		else{
			console.log("Название книги:" + this.name + ", Автор:" + this.autor + ", страниц:" + this.pages + ", книга не прочитанна")
		}
	}
}

function addMyBookTolibrary(anyBookObt){
	myLibrary.push(anyBookObt)
}

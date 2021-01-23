let id_input=0


document.getElementById("clearButton").onclick = function() {
	nameBook = document.getElementById("nameBock").value // передача данных из поля ввода имя книга в переменную nameBook
	autorBook = document.getElementById("autorBock").value // передача данных из поля ввода имя книга в переменную 
	statusBook = document.getElementById("statusBook").value

	document.getElementById("nameBock").value = ""; // очистить значения в поле ввода названия книги
	document.getElementById("autorBock").value = ""; // очистить значения в поле ввода автора книги
	document.getElementById("statusBook").value = ""
	console.log("Name: "+ nameBook + "| Autor: " + autorBook + "| checkbox: " + statusBook) // запись в логи
	//if ((nameBook !== "")  & (autorBook !== "")){
	addElement(nameBook, autorBook, statusBook)
	//}
	// document.body.onload = addElement(value);
}

function eventForm(value){ // Логи
	console.log("CORRECT " + value)
}

function addElement(nameBook, autorBook, statusBook) { // Функция вызывающаяя функции для добавления обьектов
	addNameBook(nameBook) // Добавления имени
	addAutorBook(autorBook)	// Добавление автора
	addstatusBook()

}

function addNameBook(nameBook){ // Функция добавления имени 
	let p = document.createElement('div');

	let name_Book_in_html = document.querySelector('#nameBook')
	p.innerHTML = nameBook;
	name_Book_in_html.appendChild(p)
}

function addAutorBook(autorBook){ // Функция добавления автора
	let p = document.createElement('div');
	
	let autor_Book_in_html = document.querySelector('#autorBook')
	p.innerHTML = autorBook
	autor_Book_in_html.appendChild(p)
}

function addstatusBook(){
	let p = document.createElement('div');
	
	let autor_Book_in_html = document.querySelector('#statusBook')
	p.innerHTML = "БЛЯ"
	autor_Book_in_html.appendChild(p)
}
// - - - //

function book(name="", autor="", read=false, pages=12) { // Прототип для создания обьекта
	this.name = name // Параметр обьекта
	this.autor = autor
	this.pages = pages
	this.read = read // Параметр обьекта

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
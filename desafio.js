class Usuario {
  constructor (nombre, apellido, libros, mascotas){
    this.nombre = nombre;
    this.apellido = apellido;
    this.libros = libros;
    this.mascotas = mascotas;
  }
  getFullName(){
    let resultado = `${this.nombre} ${this.apellido}`
    return resultado
  }
  addMascota(mascota){
    this.mascotas = [...this.mascotas, mascota]
  }
  addBook(nombre, autor){
    this.libros.push({'nombre': nombre, 'autor': autor })
  }
  getBookNames(){
    const bookNames = this.libros.map(libro => libro.nombre)
    return bookNames
  }
}


const usuario1 = new Usuario('lio', 'messi', [{nombre: 'Bilardo, Nacido para ganar', autor: 'osvaldo fanjul'}, {nombre: 'yo soy el diego', autor:'Diego A. Maradona'}],['Hulk','Abú'])

console.log(usuario1)

console.log(usuario1.getFullName())

console.log(usuario1.mascotas)

usuario1.addMascota('toby')
console.log(usuario1.mascotas)

console.log(usuario1.libros)
usuario1.addBook('México 86. Mi mundial, Mi verdad: Asi ganamos la copa', 'Diego A. Maradona')
console.log(usuario1.libros)

console.log(usuario1.getBookNames())
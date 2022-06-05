import React from 'react'

const Month = () => {

  var año = 2022;
  var mes = 6;

  var diasMes = new Date(año, mes, 0).getDate(); //30 dias en el mes 6
  var diasSemana = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
  var diasSemanaNumero = [1, 2, 3, 4, 5, 6, 7];

  const dia_numero = []
  for (var dia = 1; dia <= diasMes; dia++) {
    // Ojo, hay que restarle 1 para obtener el mes correcto
    var indice = new Date(año, mes - 1, dia).getDay();
    console.log(`El día número ${dia} del mes ${mes} del año ${año} es ${diasSemana[indice]}`);
    dia_numero.push({ 'dn': diasSemanaNumero[indice], 'd': diasSemana[indice], n: dia })
  }
  console.log(dia_numero)
  console.log(diasMes);
  const fi = []
  const fs=[]
  const ft=[]
  const ff=[]
  const ffi=[]
  const f0 = 7 - dia_numero[0].dn
  for (let index = 0; index < 3; index++) {
    fi.push({'d':0,'dia':diasSemana[index]})
  }
  console.log(fi,"esto fi")
  for (let index = 0; index <= 7 - dia_numero[0].dn; index++) {
    //  console.log(index+1,dia_numero[index].d)
    fi.push({ 'd': index + 1, 'dia': dia_numero[index].d })

  }
  console.log(fi.map(item => item.d))
   const a = fi.map(item => item.d)
   const  ultimo = a.at(-1)
   console.log(ultimo,"esto es lo ultimo")
 for (let index = ultimo; index< (ultimo+7); index++) {
  fs.push({ 'd': index + 1, 'dia': dia_numero[index].d })

 }
 console.log(fs,"segunda linea")

 const b = fs.map(item => item.d)
 const  ultimo2 = b.at(-1)
 for (let index = ultimo2; index< (ultimo2+7); index++) {
  ft.push({ 'd': index + 1, 'dia': dia_numero[index].d })
 }

 console.log(ft,"tercera linea")


 const c = ft.map(item => item.d)
 const  ultimo3 = c.at(-1)
 for (let index = ultimo3; index< (ultimo3+7); index++) {
  ff.push({ 'd': index + 1, 'dia': dia_numero[index].d })
 }
console.log(ff,"cuarta linea");

const d = ff.map(item => item.d)
const  ultimo4 = d.at(-1)
console.log(ultimo4);
const ultimoFinal = (diasMes - ultimo4);
 for (let index = ultimo4; index< diasMes; index++) {
  ffi.push({ 'd': index + 1, 'dia': dia_numero[index].d })
 }
 console.log(ffi);
  return (
    <div>Month</div>
  )
}

export default Month
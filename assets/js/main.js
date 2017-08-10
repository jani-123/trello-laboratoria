var todoList = [];
var inserta = document.getElementById('insertaLista');
var lista = document.createElement('div');
var listaTexto = document.createElement('h4');
var textito = document.createTextNode('Añadir Lista...');
  lista.setAttribute('class','lista');
	//lista.setAttribute('onclick','ingresa(this)');
	listaTexto.appendChild(textito);
  lista.appendChild(listaTexto);
  inserta.appendChild(lista);
//
lista.onclick = function(){
  var cajaLista = document.createElement('div');
      cajaLista.setAttribute('class','cajaLista');
  var ingresaTexto = document.createElement('input');
      ingresaTexto.setAttribute('type','text');
      ingresaTexto.setAttribute('id','ingresa');
      ingresaTexto.setAttribute('placeholder','Añadir Lista...');
  var btnTexto = document.createElement('button');
  //var btnTexto_1 = document.createTextNode("Guardar");
      btnTexto.setAttribute('type','button');
      btnTexto.setAttribute('id','btnTexto');
      btnTexto.innerHTML = 'Guardar';
  var btnElimina = document.createElement('button');
  //var btnElimina_1 = document.createTextNode("X");
      btnElimina.setAttribute('type','button');
      btnElimina.setAttribute('id','btnElimina');
      btnElimina.innerHTML = 'X';
      btnTexto.appendChild(btnElimina);
      ingresaTexto.appendChild(btnTexto);
      cajaLista.appendChild(ingresaTexto);
}

// function ingresa(e)
// {
// 	 inserta.appendChild(e);
// 	 var cajaLista = document.createElement('div');
//        cajaLista.setAttribute('class','cajaLista');
// 	 var ingresaTexto = document.createElement('input');
//        ingresaTexto.setAttribute('type','text');
//        ingresaTexto.setAttribute('id','ingresa');
//        ingresaTexto.setAttribute('placeholder','Añadir Lista...');
// 	 var btnTexto = document.createElement('button');
//    //var btnTexto_1 = document.createTextNode("Guardar");
//        btnTexto.setAttribute('type','button');
//        btnTexto.setAttribute('id','btnTexto');
//        btnTexto.innerHTML = 'Guardar';
// 	 var btnElimina = document.createElement('button');
// 	 //var btnElimina_1 = document.createTextNode("X");
//        btnElimina.setAttribute('type','button');
//        btnElimina.setAttribute('id','btnElimina');
//        btnElimina.innerHTML = 'X';
//
//
// 	 //btnElimina.appendChild(btnElimina_1);
// 	 //btnTexto.appendChild(btnTexto_1);
// 	 btnTexto.appendChild(btnElimina);
// 	 ingresaTexto.appendChild(btnTexto);
// 	 cajaLista.appendChild(ingresaTexto);
// 	 e.removeAttribute('onclick');
// 	 e.replaceChild(cajaLista, e.firstChild);
// 	 inserta.appendChild(e);
// }

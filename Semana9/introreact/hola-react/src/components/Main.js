//Reglas del componente
//.1 función o clase
//.2 el nombre de la función/componente tiene que comenzar en Mayúsculas
//.3 esa función/componente tiene que retornar algo
//.3.1 el return sera el JSX(HTML) que se dibujará
//.3.2 JSX utiliza (<html></html>) para indicar que dibujará elementos
//.4 tiene que exportarse por defecto, para que otros componentes, lo puedan reutilizar

function Main(props) {
	console.log("estos son los props",props);

    return (<main>
		<div>
			<h2>{props.subtitulo}</h2>
			<p>Lorem ipsum dolor sit amet.</p>
		</div>
	</main>);
}

export default Main;

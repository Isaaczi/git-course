const father = document.querySelector(`.main`);

const paragraphInstructions = document.createElement(`P`)

paragraphInstructions.innerHTML = `
<b>git init : </b> Crea un nuevo repositorio de Git. Puede utilizarse para convertir un proyecto existente y sin versión en un repositorio de Git<br><br>
<b>git status : </b> Muestra el estado del directorio de trabajo y del área del entorno de ensayo. Permite ver los cambios que se han preparado, los que no y los archivos en los que Git no va a realizar el seguimiento.<br><br>
<b>git add . : </b> Indica a Git que quieres incluir actualizaciones en un archivo concreto en la próxima confirmación, el "." indica que se añaden todos los que se encuentren sin añadir<br><br>
<b>git commit -m "example" : </b> Guarda todos los cambio hechos en la zona de montaje o área de preparación (staging area), junto con una breve descripción del usuario<br><br>
<b>git config --global user.email "mail@mail.com": </b>Establece el correo del usuario<br><br>
<b>git config --global user.name "user": </b>Establece el nombre de usuario<br><br>
<b>git log : </b> Sirve para explorar el historial del repositorio.<br><br>
<b>git diff route.ext : </b> Lleva a cabo una función para establecer las diferencias en los orígenes de datos de Git. Dichos orígenes de datos pueden ser confirmaciones; ramas y archivos; entre otros<br><br>
<b>git branch : </b> Permite crear, enumerar y eliminar ramas, así como cambiar su nombre. No te permite cambiar entre ramas o volver a unir un historial bifurcado. Por este motivo, está estrechamente relacionado con los comandos git checkout y git merge<br><br>
<b>git branch newBranch : </b> Crea una rama alternativa<br><br>
<b>git checkout selectBranch : </b>Te posiciona en una rama distinta del proyecto<br><br>
<b>git remote add origin https://link.git : </b> Añade un nuevo repositorio con el proyecto<br><br>
<b>git push -u origin master : </b> Se actualiza la información del proyecto en la página cargada<br><br>
<b>git clone https://repostory.git : </b> Crea un clon del proyecto según la ruta en que se encuentre<br><br>
`;

father.appendChild(paragraphInstructions);


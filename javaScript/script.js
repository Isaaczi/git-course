const father = document.querySelector(`.main`);

const paragraphInstructions = document.createElement(`P`)

paragraphInstructions.innerHTML = `
<b>git init :</b> Inicializa un proyecto en git mientras se está en la ruta del proyecto<br>
<b>git status :</b>Hola buenas tardesbr>
<b>git add . :</b><br>
<b>git commit -m "example" :</b><br>
<b>git config --global user.email "mail@mail.com":</b><br>
<b>git config --global user.name "user":</b><br>
<b>git log :</b><br>
<b>git diff route.ext :</b><br>
<b>git branch :</b><br>
<b>git branch newBranch :</b><br>
<b>git checkout selectBranch :</b><br>
<b>git remote add origin https://link.git :</b><br>
<b>git push -u origin master :</b><br>
<b>git clone https://repostory.git :</b><br>
`;

father.appendChild(paragraphInstructions);


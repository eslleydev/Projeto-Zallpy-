// URL API contributors

const urlContributors = ("https://api.github.com/repos/twbs/bootstrap/contributors")


function fazGet(url) {
    let request = new XMLHttpRequest();
    request.open("GET", url, false);
    request.send();
    return request.responseText;
};

// criar tabela de forma dinâmica
function criaLinha(usuario) {
    console.log(usuario.contributions);
    linha = document.createElement("tr");
    tdId = document.createElement("td");
    tdNome = document.createElement("td");

    if(usuario.contributions >= 100 && usuario.contributions < 200) {        
        tdId.innerHTML = usuario.contributions;
        tdNome.innerHTML = usuario.login;
        tdId.style.backgroundColor = "#535D89"; 
        tdNome.style.backgroundColor = "#535D89"; 
        
        
    }; 

    if(usuario.contributions >= 200 && usuario.contributions < 500) {        
        tdId.innerHTML = usuario.contributions;
        tdNome.innerHTML = usuario.login;
        tdId.style.backgroundColor = "#3C4C8E"; 
        tdNome.style.backgroundColor = "#3C4C8E";
    };

    if(usuario.contributions > 200 && usuario.contributions >= 500) {        
        tdId.innerHTML = usuario.contributions;
        tdNome.innerHTML = usuario.login;   
        tdId.style.backgroundColor = "#263B93"; 
        tdNome.style.backgroundColor = "#263B93"; 

    } else if (usuario.contributions < 100){
        tdId.innerHTML = document.createElement();
        tdNome.innerHTML = document.createElement();
    };
        
    linha.appendChild(tdId);
    linha.appendChild(tdNome);

    return linha;
};

// Função de chamamento principal

function main() {
    let data = fazGet(urlContributors);
    let usuarios = JSON.parse(data);
    let contributorsContent = document.getElementById("lower");
    usuarios.forEach(element => {
        let linha = criaLinha(element);
        contributorsContent.appendChild(linha);
    });
        // Para cada usuario
        // criar uma linha
        // adicionar na tabela
};


main()
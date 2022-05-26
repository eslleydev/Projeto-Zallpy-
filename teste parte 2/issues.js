// URL API issues
const urlIssues = ("https://api.github.com/repos/twbs/bootstrap/issues")

// GET API

function fazGet(url) {
    let request = new XMLHttpRequest();
    request.open("GET", url, false);
    request.send();
    return request.responseText;
};

// criar linhas de forma dinâmica

function criaLinhaIssues(usuario) {
    let estado = usuario.state;   
    let body = usuario.body;
    

    if(estado == "open") {
        linha = document.createElement("tr"); 
        linha.innerHTML = `Status: ${estado}`;       
        
        comment = document.createElement("tr");
        comment.innerHTML = `Comentário: ${body}`;
        comment.style.color = "#aaadef";        
               
        console.log("Open");
        
    }else {
        linha = document.createElement("tr"); 
        linha.innerHTML = estado;
        console.log("Close");        
    }
    
    
    return linha;
};

// apenas issues Open
function issuesOpen() {     
        let data = fazGet(urlIssues);
        let usuarios = JSON.parse(data);
        let issues = document.getElementById("issuesContent");
        usuarios.forEach(element => {
            let linha = criaLinhaIssues(element);
            issues.appendChild(linha);           
        });          
    };
         
// erro issues Close 
function issuesClose() {
    
    alert("***ERROR*** \nNÃO EXISTE STATUS CLOSE NESTA APLICAÇãO ")
};

// Comentários body

function comments() {
    let data = fazGet(urlIssues);
    let usuarios = JSON.parse(data);
    let issues = document.getElementById("issuesContent");
    usuarios.forEach(element => {
        let linha = criaLinhaIssues(element);        
        issues.appendChild(comment);        
    })
};       


// Função de chamamento principal
function issuesMain() {
    let data = fazGet(urlIssues);
    let usuarios = JSON.parse(data);
    let issues = document.getElementById("issuesContent");
    usuarios.forEach(element => {
        let linha = criaLinhaIssues(element);
        issues.appendChild(linha);
        issues.appendChild(comment);
        
    })
        // Para cada usuario
        // criar uma linha
        // adicionar na tabela
};


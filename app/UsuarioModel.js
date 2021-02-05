class Usuario {
    
    constructor() {
        this._user = "";
        this._imagem = ""; 
        this._repositorios = [];
    }

    get user() {
        return this._user;
    }
    
    get imagem() {
        return this._imagem;
    }
    
    get repositorios() {
        return [].concat(this._repositorios);
    }

    buscarDados() {
        let xhr = new XMLHttpRequest();
        let username = document.getElementById("username").value;
        const url = "https://api.github.com/users";
        xhr.open("GET", `${url}/${username}/repos`, false);
        xhr.addEventListener("load", () => {
            if(xhr.status == 200) {
                let dadosRespos = JSON.parse(xhr.responseText);
                dadosRespos.forEach((objeto) => {
                    let repositorio = {
                        imagem: objeto.owner.avatar_url,
                        nome: objeto.owner.login,
                        repositorio: objeto.name,
                        link: objeto.html_url,
                        linguagem: objeto.owner.language
                    }
                    this._repositorios.push(repositorio)
                    console.log(this._repositorios);
                })
                
            }   else {
                    throw new Error("Erro")
                }
        })
        xhr.send();
    }
}
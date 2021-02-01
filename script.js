const campoGit = document.getElementById("campo-git")

class Usuario {
    
    constructor() {
        this._login = "";
        this._imagem = ""; 
        this._bio = ""
        this._repositorios = "";
        this._linguagemProgramacao = "";
    }

    get login() {
        return this._login;
    }
    
    get imagem() {
        return this._imagem;
    }

    get bio() {
        return this._bio;
    }
    
    get repositorios() {
        return this._repositorios;
    }
    get linguagemProgramacao() {
        return this._linguagemProgramacao;
    }
    
    buscarDadosLogin() {
        let xhr = new XMLHttpRequest();
        let username = document.getElementById("username").value;
        const url = "https://api.github.com/users";
        xhr.open("GET", `${url}/${username}`);
        xhr.addEventListener("load", () => {
            if(xhr.status == 200) {
                let dadosAPI = JSON.parse(xhr.responseText);
                this._login = dadosAPI.login;
                this._imagem = dadosAPI.avatar_url;
                this._bio = dadosAPI.bio;
                console.log(dadosAPI);
                console.log(this._bio);
                
            } else {
                throw new Error("Erro! Não foi possível realizar sua solicitação");
            }
        })
        xhr.send();    
    }

    buscarDadosRepos() {
        let xhr = new XMLHttpRequest();
        let username = document.getElementById("username").value;
        const url = "https://api.github.com/users";
        xhr.open("GET", `${url}/${username}/repos`);
        xhr.addEventListener("load", () => {
            if(xhr.status == 200) {
                let dadosRespos = JSON.parse(xhr.responseText);
                this._repositorios = dadosRespos[6].html_url;                
                console.log(this._repositorios);
            }
        })
        xhr.send();
    }

}

class UsuarioController {
    buscarPessoa() {
        let usuario = new Usuario();
        usuario.buscarDadosLogin();
        usuario.buscarDadosRepos();

        // let visualizar = new UsuarioView();
        // visualizar.desenhar();
    }
}

class UsuarioView {
    // constructor() {
    //     this._imagem = document.createElement("img")

    // }
    
    // desenhar() {
    //     campoGit.appendChild(this._imagem)
    // }

}

let controller = new UsuarioController();
const btn = document.getElementById("procurar");
btn.addEventListener("click", () => {
    controller.buscarPessoa();
})
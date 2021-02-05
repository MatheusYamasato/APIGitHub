class UsuarioView {
    constructor(elemento) {
        this._elemento = elemento;
    }

    desenhar(model) {
        return `
            <h3>${model.repositorios} </h3>
        `
    }

    update(model) {
        this._elemento.innerHTML = this.desenhar(model);
    }

}


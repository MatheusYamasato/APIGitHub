class UsuarioController {
    buscarPessoa() {

        let $ = document.querySelector.bind(document)
        let usuario = new Usuario();
        usuario.buscarDados();

        let view = new UsuarioView($("#campo-git"));
        view.update(usuario)
    }
}

let controller = new UsuarioController();
const btn = document.getElementById("procurar");
btn.addEventListener("click", () => {
    controller.buscarPessoa();
})
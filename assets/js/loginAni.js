const body = document.querySelector("body");
const checkbox = document.getElementById('chk');
const img = document.getElementById("logoMod");

const pegarCores = (element, style) => window.getComputedStyle(element).getPropertyValue(style);

const coresIniciais = {
    bgBody: pegarCores(body, "--bg-body"),
    bgLogin: pegarCores(body, "--bg-login"),
    bgPlaceholder: pegarCores(body, "--bg-placeholder"),
    textColor: pegarCores(body, "--text-color"),
    textPlacehold: pegarCores(body, "--text-placeholder"),
    linear1: pegarCores(body, "--linear1"),
    linear2: pegarCores(body, "--linear2"),
    inputFocus: pegarCores(body, "--input-focus"),
}

const modoEscuro = {
    bgBody: "#1c243c",
    bgLogin: "#2e2e2e",
    bgPlaceholder: "#5a5a5a",
    textColor: "#f5f5f5",
    textPlacehold: "#343434",
    linear1: "#002d52",
    linear2: "#0058a1",
    inputFocus: "#3c3c3c",
}

const transformarChave = key => "--" + key.replace(/([A-Z])/, "-$1").toLowerCase()

const mudarCores = (cores) => {
    Object.keys(cores).map(key => 
        body.style.setProperty(transformarChave(key), cores[key])
    )
}

const CorModo = JSON.parse(localStorage.getItem('color-mode'))

if (CorModo) {
    checkbox.checked = CorModo
    mudarCores(modoEscuro)
}

checkbox.addEventListener("change", ({target}) =>{
    if(checkbox.checked == true){
        img.setAttribute("src","assets/imagens/Logo modavo modo escuro.svg")
    } else {
        img.setAttribute("src", "assets/imagens/Logo modavo modo claro.svg")
    }


    localStorage.setItem('color-mode', target.checked)
    target.checked ? mudarCores(modoEscuro) : mudarCores(coresIniciais)
    
})


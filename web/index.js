// Recebendo dados do Python para o front em JS
async function PyToJs_get_data(){
    document.getElementById("text").innerText = await eel.getData_from_backend()();
}
// Executando a função de receber dados do backend ao clicar o Button
document.getElementById("bt1").addEventListener("click", () => {
    PyToJs_get_data()
})

// -----------------------------------------------------------------

// Enviando dados do front para o backend em Python
document.getElementById("bt2").addEventListener("click", async() => {
    await eel.sendData_to_frontend('Dados recebidos do front! Olá mundo')
})

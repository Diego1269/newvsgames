if("serviceWorker" in navigator){
    window.addEventListener("load", () => {
        navigator.serviceWorker
            .register("/sw.js")
            .then(respuesta => console.log("SW registrado"))
            .catch(error => console.log(("SW no registrado", err)))
    });
}
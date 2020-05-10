

//con el self tengo acceso a la api del serviceWorker

self.addEventListener('install', e=>{
    console.log("serviceWorker instalado");
});

self.addEventListener('activate', e=>{
    console.log("serviceWorker actualizado");
});


self.addEventListener('fetch', e=>{
    console.log("serviceWorker peticion");
});


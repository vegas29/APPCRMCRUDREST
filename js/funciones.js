export function mostrarAlerta(msg){
    const alerta = document.querySelector('.bg-red-100');

    if(!alerta){
        const mensajeDiv = document.createElement('P');
        mensajeDiv.classList.add('bg-red-100', 'border-red-400', 'text-red-700', 'px-4', 'py-3', 'rounded', 'max-w-lg', 'mx-auto', 'text-center', 'mt-6');

        mensajeDiv.innerHTML = `
            <strong class="font-bold">Error</strong>
            <span class="block sm:inline">${msg}</span>
        `;

        const formulario = document.querySelector('#formulario');
        formulario.appendChild(mensajeDiv);

        setTimeout(() =>{
            mensajeDiv.remove();
        }, 3000);
    }

}
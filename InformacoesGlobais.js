const url= 'https://raw.gituhubusercontent.com/guilhermeonrails/api/main/dados-globai.json'

async function visualizarInformaçõesGlobais() {
    const res = await fetch(url);
    const daos = await res.json
}
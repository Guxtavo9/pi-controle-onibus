setInterval(async () => {
    const motoristaCount = await axios.get('http://localhost:3000/admin/motorista/count');
    const passageiroCount = await axios.get('http://localhost:3000/admin/passageiro/count');
    const lihaCount = await axios.get('http://localhost:3000/admin/linha/count');
    const onibusCount = await axios.get('http://localhost:3000/admin/onibus/count');
    
    document.getElementById('motorista').innerHTML = motoristaCount.data;
    document.getElementById('passageiro').innerHTML = passageiroCount.data;
    document.getElementById('linha').innerHTML = lihaCount.data;
    document.getElementById('onibus').innerHTML = onibusCount.data;
    }, 1000);
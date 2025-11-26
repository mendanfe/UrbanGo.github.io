function mostrarHome() {
    document.getElementById("conteudo").innerHTML = `
        <h2>Bem-vindo ao UrbanGo</h2>
        <p>Informações rápidas sobre mobilidade urbana da sua cidade.</p>

        <div class="card">
            <h3>Linhas mais usadas</h3>
            <p>Veja horários e rotas das linhas populares.</p>
        </div>

        <div class="card">
            <h3>Pontos próximos</h3>
            <p>Encontre o ponto mais perto de você.</p>
        </div>
    `;
}

function mostrarLinhas() {
    document.getElementById("conteudo").innerHTML = `
        <h2>Linhas de Ônibus</h2>

        <div class="card">
            <h3>Linha 101 - Centro</h3>
            <p>Saídas a cada 15 minutos.</p>
            <div class="button-fav">Adicionar aos Favoritos ⭐</div>
        </div>

        <div class="card">
            <h3>Linha 204 - Terminal Norte</h3>
            <p>Saídas a cada 20 minutos.</p>
            <div class="button-fav">Adicionar aos Favoritos ⭐</div>
        </div>

        <div class="card">
            <h3>Linha 330 - Bairro Verde</h3>
            <p>Saídas a cada 30 minutos.</p>
            <div class="button-fav">Adicionar aos Favoritos ⭐</div>
        </div>
    `;
}

function mostrarPontos() {
    document.getElementById("conteudo").innerHTML = `
        <h2>Pontos Próximos</h2>

        <div class="card">
            <h3>Ponto 12 - Av. Central</h3>
            <p>Distância: 250m</p>
        </div>

        <div class="card">
            <h3>Ponto 44 - Rua das Flores</h3>
            <p>Distância: 400m</p>
        </div>

        <div class="card">
            <h3>Ponto 78 - Terminal</h3>
            <p>Distância: 600m</p>
        </div>
    `;
}

function mostrarConta() {
    document.getElementById("conteudo").innerHTML = `
        <h2>Minha Conta</h2>

        <div class="card">
            <h3>Usuário</h3>
            <p>Você ainda não está logado.</p>
            <div class="button-fav">Entrar / Criar Conta</div>
        </div>
    `;
}

// Carrega a Home ao abrir o app
mostrarHome();

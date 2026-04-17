# Script para adicionar itens ao site Matilha Thai
# Executar no diretório raiz do site (D:\academia-site)

Write-Host "Bem-vindo ao Adicionar Item ao Site!"
Write-Host "Escolha a categoria:"
Write-Host "1 - Professor"
Write-Host "2 - Competidor"
Write-Host "3 - Bandagens (Loja)"
Write-Host "4 - Luvas (Loja)"
Write-Host "5 - Caneleiras (Loja)"
Write-Host "6 - Roupas da Marca (Loja)"

$categoria = Read-Host "Digite o número da categoria"

switch ($categoria) {
    "1" {
        $tipo = "professor"
        $pasta = "img/professores"
        $jsonFile = "atletas.json"
        $tag = "professor"
    }
    "2" {
        $tipo = "campeao"
        $pasta = "img/competidores"
        $jsonFile = "atletas.json"
        $tag = "campeao"
    }
    "3" {
        $tipo = "bandagens"
        $pasta = "img/loja"
        $jsonFile = "produtos.json"
        $tag = "Mais Vendido"
    }
    "4" {
        $tipo = "luvas"
        $pasta = "img/loja"
        $jsonFile = "produtos.json"
        $tag = "Mais Vendido"
    }
    "5" {
        $tipo = "caneleiras"
        $pasta = "img/loja"
        $jsonFile = "produtos.json"
        $tag = $null
    }
    "6" {
        $tipo = "roupas"
        $pasta = "img/loja"
        $jsonFile = "produtos.json"
        $tag = "Produto Oficial"
    }
    default {
        Write-Host "Categoria inválida."
        exit
    }
}

$nome = Read-Host "Digite o nome do item"

# Para atletas, perguntar mais detalhes
if ($tipo -in @("professor", "campeao")) {
    $lutas = Read-Host "Número de lutas"
    $vitorias = Read-Host "Número de vitórias"
    $derrotas = Read-Host "Número de derrotas"
    $bio = Read-Host "Biografia curta"
}

# Para produtos, perguntar specs
if ($tipo -in @("bandagens", "luvas", "caneleiras", "roupas")) {
    $specs = Read-Host "Digite as especificações do produto (ex: Tamanhos, material, etc.)"
}

$caminhoImagem = Read-Host "Digite o caminho completo da imagem a ser copiada (ex: C:\Users\...\foto.jpg)"

if (!(Test-Path $caminhoImagem)) {
    Write-Host "Imagem não encontrada!"
    exit
}

# Copiar imagem
$novoNome = "$tipo" + "_" + $nome.ToLower().Replace(" ", "_") + ".jpg"
$novoCaminho = "$pasta/$novoNome"
Copy-Item $caminhoImagem $novoCaminho

Write-Host "Imagem copiada para $novoCaminho"

# Atualizar JSON
if ($tipo -in @("professor", "campeao")) {
    $json = Get-Content $jsonFile -Raw | ConvertFrom-Json
    $novoItem = @{
        nome = $nome
        lutas = [int]$lutas
        vitorias = [int]$vitorias
        derrotas = [int]$derrotas
        foto = $novoCaminho
        bio = $bio
        type = $tipo
    }
    if ($tipo -eq "professor") {
        $json.professores += $novoItem
    } else {
        $json.campeoes += $novoItem
    }
    $json | ConvertTo-Json -Depth 10 | Set-Content $jsonFile
} else {
    $json = Get-Content $jsonFile -Raw | ConvertFrom-Json
    $novoItem = @{
        nome = $nome
        foto = $novoCaminho
        tag = $tag
        specs = $specs
    }
    $json += $novoItem
    $json | ConvertTo-Json -Depth 10 | Set-Content $jsonFile
}

Write-Host "Item adicionado com sucesso! Recarregue o site para ver as mudanças."
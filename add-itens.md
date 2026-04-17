# Guia para Adicionar Itens ao Site Matilha Thai

Este guia explica como adicionar professores, competidores ou produtos da loja ao site sem precisar editar o código HTML/CSS/JS diretamente. Usamos um script PowerShell simples para automatizar o processo.

## 📋 Pré-requisitos

- **PowerShell**: Execute o script em um ambiente Windows com PowerShell.
- **Imagens**: Tenha as imagens prontas no seu computador (formatos JPG recomendados).
- **Diretório**: Execute o script no diretório raiz do site (`D:\academia-site` ou equivalente).

## 🚀 Como Adicionar um Item

1. **Abra o PowerShell** e navegue até o diretório do site:
   ```
   cd D:\academia-site
   ```

2. **Execute o script**:
   ```
   .\add-item.ps1
   ```

3. **Siga as instruções**:
   - O script mostrará as categorias disponíveis:
     - 1 - Professor
     - 2 - Competidor
     - 3 - Bandagens (Loja)
     - 4 - Luvas (Loja)
     - 5 - Caneleiras (Loja)
     - 6 - Roupas da Marca (Loja)
   - Digite o número da categoria desejada.

4. **Digite o nome** do item (ex.: "Carlos Silva" para professor).

5. **Para atletas (professores ou competidores)**, forneça:
   - Número de lutas
   - Número de vitórias
   - Número de derrotas
   - Biografia curta

6. **Forneça o caminho da imagem**:
   - Digite o caminho completo (ex.: `C:\Users\SeuNome\Desktop\carlos.jpg`).

7. **Para produtos**, forneça as especificações:
   - Digite detalhes como tamanhos, material, cor, etc.

7. O script:
   - Copia a imagem para a pasta correta (ex.: `img/professores/professor_carlos_silva.jpg`).
   - Atualiza o arquivo JSON correspondente (`atletas.json` ou `produtos.json`).
   - Confirma o sucesso.

8. **Recarregue o site** no navegador para ver as mudanças.

## 📁 Estrutura de Pastas e Nomes

O script organiza automaticamente as imagens:

- **Professores**: `img/professores/professor_nome.jpg`
- **Competidores**: `img/competidores/competidor_nome.jpg`
- **Produtos da Loja**: `img/loja/tipo_nome.jpg` (ex.: `luvas_nome.jpg`)

Nomes são formatados automaticamente (minúsculo, underscores para espaços).

## 🏷️ Tags Automáticas

- **Professores**: Aparecem na seção Professores.
- **Competidores**: Aparecem na seção Campeões.
- **Produtos**:
  - Bandagens e Luvas: Tag "Mais Vendido".
  - Roupas: Tag "Produto Oficial".
  - Caneleiras: Sem tag.

## 📄 Arquivos Atualizados

- **atletas.json**: Atualizado para professores e competidores.
- **produtos.json**: Atualizado para itens da loja.
- O site carrega esses JSON dinamicamente via JavaScript.

## 💡 Exemplos

### Adicionando um Professor
- Categoria: 1
- Nome: Carlos Silva
- Lutas: 15
- Vitórias: 12
- Derrotas: 3
- Bio: Carlos é especialista em clinch.
- Imagem: C:\fotos\carlos.jpg
- Resultado: Aparece na seção Professores com imagem em `img/professores/professor_carlos_silva.jpg`.

### Adicionando Luvas
- Categoria: 4
- Nome: Luvas Premium
- Imagem: C:\fotos\luvas.jpg
- Especificações: Tamanhos P, M, G. Material couro. Cor preta.
- Resultado: Aparece na loja com tag "Mais Vendido" em `img/loja/luvas_luvas_premium.jpg`, e modal mostra specs.

## ⚠️ Dicas e Cuidados

- **Caminho da Imagem**: Certifique-se de que o caminho existe e a imagem é acessível.
- **Formato**: Use JPG para consistência.
- **Nomes Únicos**: Evite nomes idênticos para não sobrescrever arquivos.
- **Teste**: Após adicionar, recarregue o site e verifique se aparece.
- **Backup**: Faça backup dos JSON antes de alterações manuais (se necessário).

## 🔧 Solução de Problemas

- **Erro de Permissões**: Execute PowerShell como Administrador.
- **Imagem Não Copiada**: Verifique se o caminho da imagem está correto.
- **Site Não Atualiza**: Limpe cache do navegador ou use Ctrl+F5.
- **JSON Corrompido**: Restaure de backup ou edite manualmente.

Se tiver dúvidas, consulte o README.md principal ou entre em contato!</content>
<parameter name="filePath">D:\academia-site\add-itens.md
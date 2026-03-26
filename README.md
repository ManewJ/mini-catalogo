# 📱 Mini Catálogo Fitness

Aplicativo mobile desenvolvido com **React Native + Expo** para a disciplina de
Programação para Dispositivos Móveis.

---

## 🎯 Sobre o Projeto

Mini catálogo de produtos fitness com navegação entre telas, desenvolvido
sem Android Studio, utilizando VSCode + Expo Go.

---

## 📋 Requisitos Atendidos

- ✅ Stack Navigation (Lista → Detalhes)
- ✅ Tab Navigation (Catálogo e Perfil)
- ✅ Rotas organizadas em arquivos separados
- ✅ Tela de Lista de Produtos (5 produtos)
- ✅ Tela de Detalhes do Produto
- ✅ Tela de Perfil em Tab separada
- ✅ Navegação ao clicar no produto

---

## 🗂️ Estrutura do Projeto
```
mini-catalogo/
├── App.js
├── src/
│   ├── data/
│   │   └── produtos.js       # dados dos produtos
│   ├── routes/
│   │   ├── StackRoutes.js    # navegação Stack
│   │   └── TabRoutes.js      # navegação Tab
│   └── screens/
│       ├── ListaProdutos.js  # tela de lista
│       ├── DetalhesProduto.js # tela de detalhes
│       └── Perfil.js         # tela de perfil
```

---

## Como Rodar o Projeto

### Pré-requisitos
- [Node.js](https://nodejs.org) instalado
- App **Expo Go** instalado no celular (Android ou iOS)
- Celular e PC na **mesma rede Wi-Fi**

### Passo a Passo

**1. Clone o repositório:**
```bash
git clone https://github.com/SEU_USUARIO/mini-catalogo.git
cd mini-catalogo
```

**2. Instale as dependências:**
```bash
npm install
```

**3. Inicie o projeto:**
```bash
npx expo start --clear
```

**4. Abra no celular:**
- Abra o app **Expo Go**
- Escaneie o QR Code que aparecer no terminal

---

## Tecnologias Utilizadas

- [React Native](https://reactnative.dev/)
- [Expo](https://expo.dev/)
- [React Navigation](https://reactnavigation.org/)
  - Stack Navigator
  - Bottom Tab Navigator

---

## Observações

- O projeto **não requer Android Studio**
- Testado com Expo SDK 51
- Caso a porta 8081 esteja ocupada, o Expo usará a 8082 automaticamente
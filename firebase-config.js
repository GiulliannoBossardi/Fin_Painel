/* ════════════════════════════════════════════
   CONFIGURAÇÃO DO FIREBASE
   
   1. Acesse: https://console.firebase.google.com
   2. Crie um projeto (ou use um existente)
   3. Clique em "Adicionar app" → Web (</>)
   4. Copie os valores do objeto firebaseConfig e cole abaixo
   5. No console Firebase, ative o Firestore:
      Firestore Database → Criar banco de dados → Modo de produção
   6. Configure as Regras do Firestore (aba "Regras"):
   
      rules_version = '2';
      service cloud.firestore {
        match /databases/{database}/documents {
          match /{document=**} {
            allow read, write: if true;
          }
        }
      }
   
   ⚠️  As regras acima permitem acesso total (adequado para uso pessoal).
       Para produção com múltiplos usuários, restrinja por autenticação.
════════════════════════════════════════════ */

const firebaseConfig = {
  apiKey:            "COLE_AQUI_SUA_API_KEY",
  authDomain:        "COLE_AQUI.firebaseapp.com",
  projectId:         "COLE_AQUI_SEU_PROJECT_ID",
  storageBucket:     "COLE_AQUI.appspot.com",
  messagingSenderId: "COLE_AQUI_SENDER_ID",
  appId:             "COLE_AQUI_APP_ID"
};

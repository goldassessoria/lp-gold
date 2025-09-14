
import admin from "firebase-admin";

export async function initializeFirebaseAdmin() {
  if (admin.apps.length > 0) {
    return admin.app();
  }
  
  try {
    // Utiliza as Credenciais Padrão do Aplicativo.
    // Isso funciona automaticamente em ambientes do Google Cloud como o Firebase Studio e App Hosting,
    // desde que as permissões IAM corretas estejam configuradas.
    const app = admin.initializeApp({
      credential: admin.credential.applicationDefault(),
    });
    return app;
  } catch (error) {
    console.error("Firebase admin initialization error", error);
    // Lançar o erro novamente para que a função que chamou saiba que falhou
    throw new Error("Failed to initialize Firebase Admin SDK. Check server logs and IAM permissions.");
  }
}

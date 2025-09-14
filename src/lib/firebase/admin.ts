
import admin from "firebase-admin";

// Variáveis de ambiente devem ser configuradas no seu ambiente de hospedagem (Vercel, etc.)
const privateKey = process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, '\n');
const clientEmail = process.env.FIREBASE_CLIENT_EMAIL;
const projectId = process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID;

const credentials = {
  clientEmail,
  privateKey,
  projectId,
};

export async function initializeFirebaseAdmin() {
  if (admin.apps.length > 0) {
    return admin.app();
  }
  
  try {
    const app = admin.initializeApp({
      credential: admin.credential.cert(credentials as admin.ServiceAccount),
    });
    return app;
  } catch (error) {
    console.error("Firebase admin initialization error", error);
    // Lançar o erro novamente para que a função que chamou saiba que falhou
    throw new Error("Failed to initialize Firebase Admin SDK.");
  }
}

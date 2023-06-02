import * as admin from 'firebase-admin';
import * as proaca from './proaca';

// initialize
admin.initializeApp();
export const db = admin.firestore();

export { proaca };

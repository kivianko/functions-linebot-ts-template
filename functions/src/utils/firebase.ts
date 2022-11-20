import { initializeApp } from "firebase-admin/app";
import { getFirestore, FieldValue, Timestamp } from "firebase-admin/firestore";

initializeApp();

export const db = getFirestore();
export const fieldValue = FieldValue;
export const timestamp = Timestamp;

import mongoose from 'mongoose';
import dotenv from 'dotenv'

dotenv.config()

const MONGO_URI = process.env.MONGODB_URL_STRING as string;

export default (async () => {
  try {
    await mongoose.connect(MONGO_URI);
    console.log('✅ Conectado a MongoDB');
  } catch (error) {
    console.error('❌ Error de conexión:', error);
    process.exit(1);
  }
})()

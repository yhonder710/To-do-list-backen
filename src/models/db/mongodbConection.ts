import mongoose from 'mongoose';

const MONGO_URI = 'mongodb+srv://YhonderAguero:ALHHf2qFX9UIwIiX@cluster710.5pzf4xn.mongodb.net/?retryWrites=true&w=majority&appName=Cluster710'

const url = 'localhost:27017'

export async function connectDB() {
  try {
    await mongoose.connect(url);
    console.log('✅ Conectado a MongoDB');
  } catch (error) {
    console.error('❌ Error de conexión:', error);
    process.exit(1);
  }
}

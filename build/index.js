import mongoose from 'mongoose';
import app from './app.js';
import { PORT, MONGO_URI } from './config.js';
// Connected Database
mongoose.set({ strictQuery: true });
await mongoose.connect(MONGO_URI)
    .then(() => console.log('MongoDB Database is Connected'))
    .catch(err => console.error('An error has occurred with mongo:', err));
// Server Listener
app.listen(PORT, () => console.log('Server running in port', PORT));

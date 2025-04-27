import { db, storage} from '../firebase';
import { collection, addDoc, getDocs, updateDoc, deleteDoc } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { Beat } from '../../types/beat';

export class BeatService {
  private beatsCollection = collection(db, 'beats');

  async getBeats() {
    const snapshot = await getDocs(this.beatsCollection);
    return snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
  }

  async createBeat(beat: Omit<Beat, 'id'>, audioFile: File, coverFile: File) {
    // Subir archivos al storage
    const audioRef = ref(storage, `beats/${audioFile.name}`);
    const coverRef = ref(storage, `covers/${coverFile.name}`);
    
    await uploadBytes(audioRef, audioFile);
    await uploadBytes(coverRef, coverFile);

    const audioUrl = await getDownloadURL(audioRef);
    const coverUrl = await getDownloadURL(coverRef);

    // Crear documento en Firestore
    return addDoc(this.beatsCollection, {
      ...beat,
      audioUrl,
      coverUrl,
      createdAt: new Date()
    });
  }
}
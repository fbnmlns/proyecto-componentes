import { redirect } from '@sveltejs/kit';
import { authUser } from '../../authstore/authstore';
import { auth, db } from "../../lib/firebase/firebase";
import { getDoc, doc, setDoc, type DocumentData } from "firebase/firestore";
import { goto } from '$app/navigation';

export const load = async () => {
    
    const unsubscribe = authUser.subscribe(async (user) => {
        if (!user) {
            throw redirect(302, '/login');
        }
        let userData;
        
        
        let dataTasks: DocumentData
        const docRef = doc(db, "users", user.uid);
        const docSnap = await getDoc(docRef);
        
        if(!docSnap.exists()) {
            const userRef = doc(db, "users", user.uid);
            
            dataTasks = {
                email: user.email,
                tasks: []
            };

            await setDoc(userRef, dataTasks, {merge:true});
            
        } else {
            const userData = docSnap.data();
            dataTasks = userData;
        }
        
        authUser.update((curr: any) => {
            return {
                ...curr,
                user,
                email: user.email,
                data: dataTasks
            };
        });
        
    });
    unsubscribe();
    
    return {};
}

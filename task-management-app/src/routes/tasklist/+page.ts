import { redirect } from '@sveltejs/kit';
import { authUser } from '../../authstore/authstore';
import { db } from '$lib/firebase';
import { getDoc, doc, setDoc, type DocumentData } from "firebase/firestore";

export const load = async () => {
    const unsubscribe = authUser.subscribe((user) => {
        if (!user) {
            throw redirect(302, '/login');
        }

        let dataTasks: DocumentData;
        const docRef = doc(db, "users", user.uid);
        const docSnap = getDoc(docRef);

        docSnap.then((snapshot) => {
            if (!snapshot.exists()) {
                const userRef = doc(db, "users", user.uid);

                dataTasks = {
                    email: user.email,
                    tasks: []
                };

                setDoc(userRef, dataTasks, { merge: true })
                    .then(() => {
                        authUser.update((curr: any) => {
                            return {
                                ...curr,
                                user,
                                email: user.email,
                                data: dataTasks
                            };
                        });
                    })
                    .catch((error) => {
                        const errorCode = error.code;
                        const errorMessage = error.message;
                        console.log(errorCode, errorMessage);
                    });

            } else {
                dataTasks = snapshot.data();
                authUser.update((curr: any) => {
                    return {
                        ...curr,
                        user,
                        email: user.email,
                        data: dataTasks
                    };
                });
            }
        }).catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage);
        });
    });

    unsubscribe();

    return {};
};
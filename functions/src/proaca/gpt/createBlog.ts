import * as functions from 'firebase-functions';
import { db } from '../..';
import { regionFunctions } from '../../helper';
import { getContent } from '../../lib/getContent';

const runtimeOpts: functions.RuntimeOptions = {
  timeoutSeconds: 540,
  memory: '1GB',
};

export const createBlog = regionFunctions
  .runWith(runtimeOpts)
  .firestore.document('theme/{docId}')
  .onCreate(async (snap, context) => {
    const theme = snap.data().theme;
    const post: any = await getContent(theme);
    console.log('🚀 ~ file: createBlog.ts:15 ~ .onCreate ~ post:', post);
    const collectionRef = db.collection('posts');
    await collectionRef.add({ post });
  });

import { db } from '../..';
import { regionFunctions } from '../../helper';
import { getTheme } from '../../lib/getTheme';

/**
 * chatGPT
 */
export const getBlogPost = regionFunctions.pubsub
  .schedule('every 1 hours')
  .onRun(async () => {
    // theme を get
    const theme: any = await getTheme();
    const collectionRef = db.collection('theme');
    await collectionRef.add({ theme });
  });

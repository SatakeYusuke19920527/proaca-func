import * as functions from 'firebase-functions';
import { db } from '../..';
import { regionFunctions } from '../../helper';
import { getTheme } from '../../lib/getTheme';

const runtimeOpts: functions.RuntimeOptions = {
  timeoutSeconds: 540,
  memory: '1GB',
};

/**
 * chatGPT
 */
export const getBlogPost = regionFunctions
  .runWith(runtimeOpts)
  .pubsub.schedule('every 10 minutes')
  .onRun(async () => {
    // theme を get
    const theme: any = await getTheme();
    const collectionRef = db.collection('theme');
    await collectionRef.add({ theme });
  });

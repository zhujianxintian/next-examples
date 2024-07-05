import { articleApis } from '@/api';
import { cache } from 'react';

export const listArticleInfos = cache(async () => {
    // try {
    return await articleApis.listArticleInfos();
    // } catch (error) {
    //     // 处理错误
    //     console.error(error);
    // }
});

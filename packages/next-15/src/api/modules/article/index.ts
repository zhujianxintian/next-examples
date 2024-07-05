import { Mock } from '@/api/mock';

export const listArticleInfos = async () => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    const articles = Array.from({ length: 10 }).map((_, index) => ({
        id: index,
        title: `Article ${index}`,
        content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut unde amet hic sed vitae cumque reprehenderit rerum iusto dolores aliquam sunt necessitatibus, quis laborum eius animi odio doloribus illum maiores.`,
    }));
    // 模拟接口请求延时
    return Mock.Business.response(articles);
};

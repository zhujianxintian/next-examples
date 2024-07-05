import { articleServices } from '@/services';
import { unstable_after as after } from 'next/server';
import React from 'react';

interface ArticlesProps {}

const Articles: React.FC<ArticlesProps> = async ({}) => {
    const response = await articleServices.listArticleInfos();

    after(() => {
        console.log('通知服务端, listArticleInfos 请求状态: ', response.data.success);
    });

    if (!response.data.success) {
        return <div>Oh! Request failure</div>;
    }

    const articles = response.data.data;

    return (
        <div className="flex w-full flex-col items-center justify-center p-4">
            <div className="mb-6 text-2xl text-gray-900">Article List</div>
            <ul className="w-[500px]">
                {articles.map((article) => {
                    return (
                        <li key={article.id} className="mb-4 rounded-md px-8 py-4 shadow-md">
                            <div className="text-md mb-2 max-w-full overflow-hidden text-ellipsis text-gray-700">{article.title}</div>
                            <div className="line-clamp-3 max-w-full text-sm text-gray-500">{article.content}</div>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default Articles;

import React from 'react';

interface PublishArticleProps {}

const PublishArticle: React.FC<PublishArticleProps> = ({}) => {
    const handleSubmit = async (formData: FormData) => {
        // must use `use server`
        'use server';
        console.log('Form data:', formData);
    };

    return (
        <div className="flex h-full w-full flex-col items-center justify-center">
            <section className="w-1/3 rounded-lg bg-white px-20 py-10 shadow-xl transition-shadow hover:shadow-2xl">
                <h1 className="mb-8 text-2xl font-normal">Publish Article</h1>
                <form className="flex flex-col" action={handleSubmit}>
                    <input
                        name="title"
                        className="mb-4 rounded-md border-2 border-solid border-gray-300 p-2 text-sm outline-2 outline-blue-500"
                        type="text"
                        placeholder="Title"
                    />
                    <textarea
                        name="content"
                        className="mb-6 rounded-md border-2 border-solid border-gray-300 p-2 text-sm outline-2 outline-blue-500"
                        placeholder="Content"
                        rows={10}
                    />
                    <button className="rounded-md bg-blue-300 p-4 text-white transition-colors hover:bg-blue-500" type="submit">
                        Publish
                    </button>
                </form>
            </section>
        </div>
    );
};

export default PublishArticle;

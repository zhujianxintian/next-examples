import React from 'react';
import { updateUserInfo } from './update-user-info';

interface UpdateUserInfoProps {}

const UpdateUserInfo: React.FC<UpdateUserInfoProps> = ({}) => {
    return (
        <div className="flex h-full w-full flex-col items-center justify-center">
            <section className="w-1/3 rounded-lg bg-white px-20 py-10 shadow-xl transition-shadow hover:shadow-2xl">
                <h1 className="mb-8 text-2xl font-normal">Update User Information</h1>
                <form className="flex flex-col" action={updateUserInfo}>
                    <input
                        name="username"
                        className="mb-4 rounded-md border-2 border-solid border-gray-300 p-2 text-sm outline-2 outline-blue-500"
                        type="text"
                        placeholder="Username"
                    />
                    <textarea
                        name="signature"
                        className="mb-6 rounded-md border-2 border-solid border-gray-300 p-2 text-sm outline-2 outline-blue-500"
                        placeholder="Signature"
                        rows={10}
                    />
                    <button className="rounded-md bg-blue-300 p-4 text-white transition-colors hover:bg-blue-500" type="submit">
                        Confirm
                    </button>
                </form>
            </section>
        </div>
    );
};

export default UpdateUserInfo;

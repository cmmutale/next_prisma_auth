import React from 'react'
import { getServerSession } from 'next-auth'
import { authOptions } from '../api/auth/[...nextauth]/route'


async function ProtectedServer() {
    const session = await getServerSession(authOptions);
    if (!session) {
        return <div className='w-full min-h-screen flex items-center justify-center'>Not Authenticated</div>
    }
    return (
        <div className='w-full min-h-screen flex items-center justify-center'>
            <div className='text-center flex flex-col gap-6'>
                <p>{JSON.stringify(session)}</p>
                <a href={process.env.NEXTAUTH_SIGNOUT}>
                    <button
                        className='bg-blue-500 text-white px-4 py-2 rounded-md'>
                        Signout
                    </button>
                </a>
            </div>
        </div>
    )
}

export default ProtectedServer
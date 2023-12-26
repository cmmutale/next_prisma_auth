'use client'
import React from 'react'
import { useSession } from 'next-auth/react'

function ProtectedClient() {
    const { data: session, status } = useSession();

    if (status === "loading") {
        return <div className='w-full min-h-screen flex items-center justify-center'>Loading...</div>
    }

    if (status === "unauthenticated") {
        return <div className='w-full min-h-screen flex items-center justify-center'>Access denied</div>
    }

    return (
        <div className='w-full min-h-screen flex items-center justify-center'>
            <div className='flex flex-col text-center gap-6'>
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

export default ProtectedClient
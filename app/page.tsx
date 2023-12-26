import React from 'react'

export default function Home() {
    return (
        <div className='min-h-screen w-full flex items-center justify-center'>
            <a href={process.env.NEXTAUTH_SIGNIN}>
                <button
                    className='bg-blue-500 text-white px-4 py-2 rounded-md'>
                    Github Signin
                </button>
            </a>
        </div>
    )
}

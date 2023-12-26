import React from 'react'

function Protected() {
    return (
        <div className='w-full min-h-screen flex items-center justify-center'>
            <a href={process.env.NEXTAUTH_SIGNOUT}>
                <button
                    className='bg-blue-500 text-white px-4 py-2 rounded-md'>
                    Signout
                </button>
            </a>
        </div>
    )
}

export default Protected
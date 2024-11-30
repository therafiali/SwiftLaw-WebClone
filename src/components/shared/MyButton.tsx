import Link from 'next/link'
import React from 'react'

const MyButton = ({button_text}:{button_text:string}) => {
    return (
        <div className="flex gap-4 items-center flex-col sm:flex-row">
            <Link
                className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
                href="/"
                target="_blank"
                rel="noopener noreferrer"
            >
                {button_text}
            </Link>

        </div>
    )
}

export default MyButton
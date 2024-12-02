import Link from 'next/link'
import React from 'react'

const MyButton = ({button_text}:{button_text:string}) => {
    return (
        <div className="flex gap-4 items-center flex-col sm:flex-row">
            <Link
                className="items-center justify-center whitespace-nowrap rounded-md text-sm  font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary hover:bg-primary/90 h-10 px-4 py-2 w-full sm:w-auto text-background flex gap-2"
                href="https://chat.yourmunshi.net/login"
                target="_blank"
                rel="noopener noreferrer"
            >
                {button_text}
            </Link>

        </div>
    )
}

export default MyButton
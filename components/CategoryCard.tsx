import Link from 'next/link'
import React from 'react'

interface CategoryCardProps {
    imagePath : string,
    title : string,
    description : string
    link : string
}

export default function CategoryCard({ imagePath, title, description, link } : CategoryCardProps) {

  return (
    <Link href = {link}>
    <div className = "flex flex-col shadow-md h-full">
        <div>
          <img src={imagePath}/>
        </div>
        <div className = "m-8 flex flex-col gap-2">
            <div className = "font-bold text-xl">
                {title}
            </div>
            <div className = "text-gray-400">
                {description}
            </div>
        </div>

    </div>
    </Link>
  )
}

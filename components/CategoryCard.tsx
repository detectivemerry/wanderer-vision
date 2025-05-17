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
    <div className = "flex flex-col shadow-lg hover:shadow-xl h-full pt-8">
        <div className = "flex justify-center">
          <img src={imagePath} className = "max-h-[20rem] overflow-hidden"/>
        </div>
        <div className = "lg:m-8 mx-8 my-4 flex flex-col gap-2">
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

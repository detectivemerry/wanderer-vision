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
    <div className = "flex">
        <div>
          <img src={imagePath}/>
        </div>
        <div>
            <div className = "font-bold">
                {title}
            </div>
            <div>
                {description}
            </div>
        </div>

    </div>
    </Link>
  )
}

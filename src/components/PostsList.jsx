import { formatDate } from "../utils/formatters";
import Card from "./Card.astro";

export default function PostsList({ posts }) {
  console.log(posts)
  return (
    <ul>
      {
        posts.map(post => {
          const {title, image, category, description, author, date} = post.frontmatter
          return (
            <li key={title}>
              {title}
              {/* <Card 
                title={title}
                image={image.src}
                category={category}
                description={description}
                author={author.name}
                date={formatDate(date)}
                imgAlt={image.alt}
                postSrc={post.url}
              /> */}
            </li>
          )
        })
      }
    </ul>
  )
}

import { slugify } from "./formatters"
import { CATEGORIES_ICONS } from '../constants/icons'

export async function filterPostsBy(allPosts, matchCondition) {
  // const allPosts = await Astro.glob("../pages/post/*.md")

  const allMatches = await getUniqueMatches(allPosts, matchCondition)

  return allMatches.map(match => {
    const matchPosts = allPosts.filter(post => post.frontmatter[matchCondition] === match)
    return {
      params: { [matchCondition]: slugify(match) },
      props: {
        [matchCondition]: match,
        posts: matchPosts
      }
    }
  })
}

export async function getMatchData(allPosts, matchCondition) {
  const allMatches = await getUniqueMatches(allPosts, matchCondition)

  return allMatches.map(match => (
    {
      // [matchCondition]: match,
      name: match,
      href: `${matchCondition}/${slugify(match)}`,
      icon: CATEGORIES_ICONS[match] ?? CATEGORIES_ICONS.DEFAULT
    }
  ))
}

async function getUniqueMatches(allPosts, matchCondition) {
  return [
    ...new Set(allPosts.map(post => {
      return post.frontmatter[matchCondition]
    }
    ).flat())
  ]
}
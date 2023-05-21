import { slugify } from "./formatters"
import { CATEGORIES_ICONS } from '../constants/icons'

const POST_FRONTMATTER_PAGES = {
  CATEGORY: {
    pageRoute: "category",
    path: ["category"]
  },
  AUTHOR: {
    pageRoute: "author",
    path: ["author", "name"]
  }
}

export async function getPagesFor(allPosts, matchCondition, filterPostsOptions) {

  const pageRoute = POST_FRONTMATTER_PAGES[matchCondition].pageRoute
  const pagePath = POST_FRONTMATTER_PAGES[matchCondition].path

  // const allUniquePages = await getUniquesForCondition(allPosts, matchCondition)
  const allUniquePages = await getUniquesForCondition(allPosts, matchCondition)

  return allUniquePages.map(page => {
    // const matchPosts = allPosts.filter(post => post.frontmatter[matchCondition] === page)
    const matchPosts = allPosts.filter(post => getValue(post.frontmatter, pagePath) === page)
    const filteredPosts = filterBlogPosts(matchPosts, filterPostsOptions)

    return {
      params: { [pageRoute]: slugify(page) },
      props: {
        [pageRoute]: page,
        posts: filteredPosts
      }
    }
  })
}

export async function getMatchData(allPosts, matchCondition) {
  const pageRoute = POST_FRONTMATTER_PAGES[matchCondition].pageRoute

  const allUniqueValues = await getUniquesForCondition(allPosts, matchCondition)

  return allUniqueValues.map(match => (
    {
      // [matchCondition]: match,
      name: match,
      href: `${pageRoute}/${slugify(match)}`,
      icon: CATEGORIES_ICONS[match] ?? CATEGORIES_ICONS.DEFAULT
    }
  ))
}

async function getUniquesForCondition(allPosts, matchCondition) {
  const pagePath = POST_FRONTMATTER_PAGES[matchCondition].path
  return [
    ...new Set(allPosts.map(post => {
      // return post.frontmatter[matchCondition]
      return getValue(post.frontmatter, pagePath)
    }
    ).flat())
  ]
}


export function filterBlogPosts(posts, {
  filterOutDrafts = true,
  filterOutFuturePosts = true,
  sortByDate = true,
  limit = undefined,
} = {}) {

  // Filter draft and future posts
  const filteredPosts = posts.reduce((acc, post) => {
    const { date, draft } = post.frontmatter

    if (filterOutDrafts && draft) return acc

    if (filterOutFuturePosts && new Date(date) > new Date()) return acc

    // Post passed the filter
    acc.push(post)

    return acc
  }, [])

  // Sort by date or randomize
  if (sortByDate) {
    filteredPosts.sort((a,b) => new Date(b.frontmatter.date) - new Date(a.frontmatter.date))
  } else {
    filteredPosts.sort(() => Math.random() - 0.5)
  }

  // console.log({limit, filteredPosts});

  // Limit the number of posts passed
  if (typeof limit === 'number') {
    return filteredPosts.slice(0, limit)
    // return filteredPosts.slice(limit)
  }

  return filteredPosts
}

function getValue(obj, keyPath) {
  let value = obj;
  keyPath.forEach(key => {
    value = value[key]
  })
  return value
}
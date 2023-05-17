import { getPostList } from "@/lib/notion"
import SITE_CONFIG from "@/site.config"

export default async function sitemap() {
	const allBlogs = await getPostList()
	const blogs =
		allBlogs?.map((post) => ({
			url: `${SITE_CONFIG.siteUrl}/post/${post.id}`,
			lastModified: post.updatedTime.split("T")[0],
		})) ?? []

	return [
		{
			url: SITE_CONFIG.siteUrl,
			lastModified: new Date().toISOString().split("T")[0],
		},
		...blogs,
	]
}

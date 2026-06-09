import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { blogPosts, blogCategories } from "@/lib/content";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { createBreadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Blog - Safari Tips & Travel Guides",
  description:
    "Expert safari advice, travel guides, and stories from Namibia, Botswana, Zimbabwe & Zambia. Learn about wildlife, best times to visit, and safari preparation.",
  openGraph: {
    title: "Safari Journal | Cluster Leaf Safaris",
    description:
      "Expert safari advice, travel guides, and stories from Namibia, Botswana, Zimbabwe & Zambia.",
    url: "https://www.clusterleafsafaris.com/blog",
  },
  alternates: {
    canonical: "https://www.clusterleafsafaris.com/blog",
  },
};

const breadcrumbSchema = createBreadcrumbSchema([
  { name: "Home", url: "/" },
  { name: "Blog", url: "/blog" },
]);

export default function BlogPage() {
  const featuredPost = blogPosts.find((post) => post.featured);
  const regularPosts = blogPosts.filter((post) => !post.featured);

  return (
    <main className="min-h-screen pt-32 pb-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {/* Hero Section */}
      <section className="relative py-16 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-desert/20 to-transparent" />
        <div className="container mx-auto relative z-10 text-center">
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-charcoal mb-4">
            Safari Journal
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Stories, tips, and insights from the African wilderness
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4">
        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {blogCategories.map((category) => (
            <Link
              key={category.slug}
              href={category.slug === "all" ? "/blog" : `/blog?category=${category.slug}`}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                category.slug === "all"
                  ? "bg-savanna text-white"
                  : "bg-gray-100 text-gray-600 hover:bg-savanna/10 hover:text-savanna"
              }`}
            >
              {category.name}
            </Link>
          ))}
        </div>

        {/* Featured Post */}
        {featuredPost && (
          <article className="mb-16">
            <Link href={`/blog/${featuredPost.slug}`} className="group block">
              <div className="grid md:grid-cols-2 gap-8 items-center bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                {/* Image */}
                <div className="relative aspect-[4/3] md:aspect-square overflow-hidden">
                  <Image
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <Badge className="absolute top-4 left-4 bg-sunset text-white rounded-full px-4 py-1">
                    Featured
                  </Badge>
                </div>
                {/* Content */}
                <div className="p-6 md:p-8 lg:p-12">
                  <Badge variant="outline" className="mb-4 rounded-full text-savanna border-savanna">
                    {blogCategories.find((c) => c.slug === featuredPost.category)?.name}
                  </Badge>
                  <h2 className="font-serif text-2xl md:text-3xl font-bold text-charcoal mb-4 group-hover:text-savanna transition-colors">
                    {featuredPost.title}
                  </h2>
                  <p className="text-gray-600 mb-6 line-clamp-3">
                    {featuredPost.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 text-sm text-gray-500">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {new Date(featuredPost.date).toLocaleDateString("en-US", {
                          month: "short",
                          day: "numeric",
                          year: "numeric",
                        })}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {featuredPost.readTime}
                      </span>
                    </div>
                    <span className="inline-flex items-center text-savanna font-medium group-hover:gap-2 transition-all">
                      Read More
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          </article>
        )}

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {regularPosts.map((post) => (
            <article key={post.id} className="group">
              <Link href={`/blog/${post.slug}`}>
                <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  {/* Image */}
                  <div className="relative aspect-[16/9] overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  {/* Content */}
                  <div className="p-6">
                    <Badge variant="outline" className="mb-3 rounded-full text-savanna border-savanna text-xs">
                      {blogCategories.find((c) => c.slug === post.category)?.name}
                    </Badge>
                    <h3 className="font-serif text-xl font-bold text-charcoal mb-2 line-clamp-2 group-hover:text-savanna transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center gap-4 text-xs text-gray-500">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {new Date(post.date).toLocaleDateString("en-US", {
                          month: "short",
                          day: "numeric",
                        })}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {post.readTime}
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </article>
          ))}
        </div>

        {/* Load More / Pagination */}
        <div className="text-center mt-12">
          <Button variant="outline" className="rounded-full px-8 border-2 border-savanna text-savanna hover:bg-savanna hover:text-white">
            Load More Articles
          </Button>
        </div>
      </div>
    </main>
  );
}

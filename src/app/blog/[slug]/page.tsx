import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { blogPosts, blogCategories, companyInfo } from "@/lib/content";
import { Calendar, Clock, ArrowLeft, Share2, Facebook, Twitter } from "lucide-react";
import { createBlogPostSchema, createBreadcrumbSchema } from "@/lib/schema";

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  
  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  return {
    title: `${post.title} | Safari Journal`,
    description: post.excerpt,
    alternates: {
      canonical: `https://www.clusterleafsafaris.com/blog/${post.slug}`,
    },
    openGraph: {
      title: `${post.title} | Cluster Leaf Safaris`,
      description: post.excerpt,
      url: `https://www.clusterleafsafaris.com/blog/${post.slug}`,
      type: 'article',
      publishedTime: post.date,
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  // Get related posts (same category, excluding current)
  const relatedPosts = blogPosts
    .filter((p) => p.category === post.category && p.id !== post.id)
    .slice(0, 3);

  const blogPostSchema = createBlogPostSchema({
    title: post.title,
    description: post.excerpt || post.title,
    author: post.author.name,
    datePublished: post.date,
    image: post.image,
    slug: post.slug,
  });

  const breadcrumbSchema = createBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Blog", url: "/blog" },
    { name: post.title, url: `/blog/${post.slug}` },
  ]);

  // Parse markdown-like content to HTML
  const renderContent = (content: string) => {
    const lines = content.split("\n");
    return lines.map((line, index) => {
      // Headings
      if (line.startsWith("# ")) {
        return (
          <h2 key={index} className="font-serif text-3xl md:text-4xl font-bold text-charcoal mt-8 mb-4">
            {line.replace("# ", "")}
          </h2>
        );
      }
      if (line.startsWith("## ")) {
        return (
          <h2 key={index} className="font-serif text-2xl font-bold text-charcoal mt-8 mb-4">
            {line.replace("## ", "")}
          </h2>
        );
      }
      if (line.startsWith("### ")) {
        return (
          <h3 key={index} className="font-serif text-xl font-bold text-charcoal mt-6 mb-3">
            {line.replace("### ", "")}
          </h3>
        );
      }
      // Bold text
      if (line.startsWith("**") && line.endsWith("**")) {
        return (
          <p key={index} className="font-bold text-charcoal mt-4 mb-2">
            {line.replace(/\*\*/g, "")}
          </p>
        );
      }
      // List items
      if (line.startsWith("- ")) {
        return (
          <li key={index} className="ml-6 mb-2 text-gray-700 list-disc">
            {line.replace("- ", "")}
          </li>
        );
      }
      // Numbered list
      if (/^\d+\.\s/.test(line)) {
        return (
          <li key={index} className="ml-6 mb-2 text-gray-700 list-decimal">
            {line.replace(/^\d+\.\s/, "")}
          </li>
        );
      }
      // Empty line
      if (line.trim() === "") {
        return <div key={index} className="h-4" />;
      }
      // Regular paragraph
      return (
        <p key={index} className="text-gray-700 leading-relaxed mb-4">
          {line}
        </p>
      );
    });
  };

  return (
    <main className="min-h-screen pt-32 pb-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <article className="container mx-auto px-4 max-w-4xl">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <Link href="/" className="hover:text-savanna transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-savanna transition-colors">
              Blog
            </Link>
            <span>/</span>
            <span className="text-gray-400">
              {blogCategories.find((c) => c.slug === post.category)?.name}
            </span>
          </div>
        </nav>

        {/* Header */}
        <header className="mb-8">
          <Badge variant="outline" className="mb-4 rounded-full text-savanna border-savanna">
            {blogCategories.find((c) => c.slug === post.category)?.name}
          </Badge>
          <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-charcoal mb-6">
            {post.title}
          </h1>
          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
            <div className="flex items-center gap-3">
              {post.author.avatar && (
                <Image
                  src={post.author.avatar}
                  alt={post.author.name}
                  width={32}
                  height={32}
                  className="rounded-full"
                />
              )}
              <span className="font-medium text-charcoal">{post.author.name}</span>
            </div>
            <span className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              {new Date(post.date).toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
              })}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              {post.readTime}
            </span>
          </div>
        </header>

        {/* Share Buttons */}
        <div className="flex items-center gap-2 mb-8 pb-8 border-b border-gray-200">
          <span className="text-sm text-gray-500 mr-2">Share:</span>
          <Button variant="ghost" size="icon" className="rounded-full h-9 w-9 hover:bg-savanna/10">
            <Facebook className="w-4 h-4 text-savanna" />
          </Button>
          <Button variant="ghost" size="icon" className="rounded-full h-9 w-9 hover:bg-savanna/10">
            <Twitter className="w-4 h-4 text-savanna" />
          </Button>
          <Button variant="ghost" size="icon" className="rounded-full h-9 w-9 hover:bg-savanna/10">
            <Share2 className="w-4 h-4 text-savanna" />
          </Button>
        </div>

        {/* Featured Image */}
        <div className="relative aspect-video rounded-2xl overflow-hidden mb-12">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover"
          />
        </div>

        {/* Content */}
        <div className="blog-content">
          {renderContent(post.content)}
        </div>

        {/* Author Bio */}
        <div className="mt-12 p-8 bg-cream rounded-2xl">
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
            {post.author.avatar && (
              <Image
                src={post.author.avatar}
                alt={post.author.name}
                width={80}
                height={80}
                className="rounded-full"
              />
            )}
            <div className="text-center sm:text-left">
              <h3 className="font-serif text-xl font-bold text-charcoal mb-2">
                {post.author.name}
              </h3>
              {post.author.bio && (
                <p className="text-gray-600 text-sm">{post.author.bio}</p>
              )}
            </div>
          </div>
        </div>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <div className="mt-16">
            <h2 className="font-serif text-2xl font-bold text-charcoal mb-8">
              Continue Your Reading
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {relatedPosts.map((relatedPost) => (
                <Link
                  key={relatedPost.id}
                  href={`/blog/${relatedPost.slug}`}
                  className="group"
                >
                  <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                    <div className="relative aspect-video">
                      <Image
                        src={relatedPost.image}
                        alt={relatedPost.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="font-serif text-lg font-bold text-charcoal group-hover:text-savanna transition-colors line-clamp-2">
                        {relatedPost.title}
                      </h3>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* CTA */}
        <div className="mt-16 p-8 bg-savanna rounded-2xl text-center text-white">
          <h2 className="font-serif text-2xl font-bold mb-4">
            Ready for Your Safari Adventure?
          </h2>
          <p className="text-white/80 mb-6 max-w-md mx-auto">
            Let us help you plan an unforgettable African experience
          </p>
          <Button asChild className="btn-sunset text-white rounded-full px-8">
            <Link href="/contact">Plan My Safari</Link>
          </Button>
        </div>

        {/* Back to Blog */}
        <div className="mt-8">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-savanna hover:text-savanna-dark transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Safari Journal
          </Link>
        </div>
      </article>
    </main>
  );
}

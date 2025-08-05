import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Calendar, Clock, User, Tag } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CommentSection from "@/components/CommentSection";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { blogPosts } from "@/data/blogPosts";

const BlogPost = () => {
  const { id } = useParams<{ id: string }>();
  const post = blogPosts.find(p => p.id === id);

  if (!post) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="pt-24 pb-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl font-bold text-foreground mb-4">Article Not Found</h1>
            <p className="text-muted-foreground mb-8">
              The article you're looking for doesn't exist or has been moved.
            </p>
            <Link to="/blog">
              <Button>
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Blog
              </Button>
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Article Header */}
      <article className="pt-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Navigation */}
          <div className="mb-8">
            <Link to="/blog">
              <Button variant="outline" size="sm">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Blog
              </Button>
            </Link>
          </div>

          {/* Article Meta */}
          <div className="mb-8">
            <Badge variant="secondary" className="bg-primary/10 text-primary mb-4">
              {post.category}
            </Badge>
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
              {post.title}
            </h1>
            
            <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center">
                <User className="w-4 h-4 mr-2" />
                <div>
                  <span className="font-medium text-foreground">{post.author}</span>
                  <div className="text-xs">{post.authorRole}</div>
                </div>
              </div>
              
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-1" />
                {new Date(post.publishDate).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long", 
                  day: "numeric"
                })}
              </div>
              
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-1" />
                {post.readTime}
              </div>
            </div>
          </div>

          {/* Featured Image Placeholder */}
          <div className="w-full h-64 md:h-96 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl flex items-center justify-center mb-12">
            <div className="text-8xl opacity-30">📝</div>
          </div>
        </div>

        {/* Article Content */}
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div 
            className="prose prose-lg max-w-none text-foreground"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Tags */}
          <div className="mt-12 pt-8 border-t border-border">
            <div className="flex items-center mb-4">
              <Tag className="w-4 h-4 mr-2 text-muted-foreground" />
              <span className="text-sm font-medium text-foreground">Tags</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag, index) => (
                <Badge key={index} variant="outline">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>

          {/* Author Bio */}
          <Card className="mt-12 p-6 bg-gradient-to-br from-primary/5 to-accent/5 border-none">
            <div className="flex items-start space-x-4">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center flex-shrink-0">
                <User className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-1">
                  {post.author}
                </h3>
                <p className="text-sm text-muted-foreground mb-3">
                  {post.authorRole}
                </p>
                <p className="text-sm text-foreground">
                  An experienced healthcare professional and educator dedicated to advancing 
                  nursing practice and education. Passionate about sharing knowledge and 
                  inspiring the next generation of nurses.
                </p>
              </div>
            </div>
          </Card>

          {/* Related Articles */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold text-foreground mb-8">Related Articles</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {blogPosts
                .filter(p => p.id !== post.id && p.category === post.category)
                .slice(0, 2)
                .map((relatedPost) => (
                  <Card key={relatedPost.id} className="group hover:shadow-lg transition-shadow">
                    <div className="p-6">
                      <Badge variant="secondary" className="bg-primary/10 text-primary mb-3">
                        {relatedPost.category}
                      </Badge>
                      <h4 className="font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                        {relatedPost.title}
                      </h4>
                      <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                        {relatedPost.excerpt}
                      </p>
                      <Link to={`/blog/${relatedPost.id}`}>
                        <Button variant="outline" size="sm">
                          Read More
                        </Button>
                      </Link>
                    </div>
                  </Card>
                ))}
            </div>
          </div>

          {/* Comments Section */}
          <CommentSection postId={post.id} />
        </div>
      </article>

      <Footer />
    </div>
  );
};

export default BlogPost;
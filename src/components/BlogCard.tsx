import { Calendar, Clock, User, ArrowRight } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { BlogPost } from "@/data/blogPosts";
import { Link } from "react-router-dom";

interface BlogCardProps {
  post: BlogPost;
}

const BlogCard = ({ post }: BlogCardProps) => {
  return (
    <Card className="group hover:shadow-lg transition-all duration-300 overflow-hidden">
      {/* Image placeholder */}
      <div className="w-full h-48 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
        <div className="text-6xl opacity-30">📝</div>
      </div>
      
      <div className="p-6">
        {/* Category and read time */}
        <div className="flex items-center justify-between mb-3">
          <Badge variant="secondary" className="bg-primary/10 text-primary">
            {post.category}
          </Badge>
          <div className="flex items-center text-sm text-muted-foreground">
            <Clock className="w-4 h-4 mr-1" />
            {post.readTime}
          </div>
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors line-clamp-2">
          {post.title}
        </h3>

        {/* Excerpt */}
        <p className="text-muted-foreground mb-4 line-clamp-3">
          {post.excerpt}
        </p>

        {/* Author and date */}
        <div className="flex items-center justify-between mb-4 text-sm">
          <div className="flex items-center">
            <User className="w-4 h-4 mr-2 text-muted-foreground" />
            <div>
              <span className="font-medium text-foreground">{post.author}</span>
              <div className="text-muted-foreground text-xs">{post.authorRole}</div>
            </div>
          </div>
          <div className="flex items-center text-muted-foreground">
            <Calendar className="w-4 h-4 mr-1" />
            {new Date(post.publishDate).toLocaleDateString()}
          </div>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {post.tags.slice(0, 3).map((tag, index) => (
            <Badge key={index} variant="outline" className="text-xs">
              {tag}
            </Badge>
          ))}
        </div>

        {/* Read more button */}
        <Link to={`/blog/${post.id}`}>
          <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
            Read More
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </Link>
      </div>
    </Card>
  );
};

export default BlogCard;
import { useState, useEffect } from "react";
import { MessageCircle, Send, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Comment, sampleComments } from "@/data/blogPosts";

interface CommentSectionProps {
  postId: string;
}

const CommentSection = ({ postId }: CommentSectionProps) => {
  const [comments, setComments] = useState<Comment[]>([]);
  const [newComment, setNewComment] = useState({
    author: "",
    email: "",
    content: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    // Load existing comments for this post
    const postComments = sampleComments.filter(comment => comment.postId === postId);
    setComments(postComments);
  }, [postId]);

  const handleSubmitComment = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!newComment.author.trim() || !newComment.email.trim() || !newComment.content.trim()) {
      return;
    }

    setIsSubmitting(true);

    // Simulate API call delay
    setTimeout(() => {
      const comment: Comment = {
        id: `c${Date.now()}`,
        postId,
        author: newComment.author,
        email: newComment.email,
        content: newComment.content,
        timestamp: new Date().toISOString()
      };

      setComments(prev => [comment, ...prev]);
      setNewComment({ author: "", email: "", content: "" });
      setIsSubmitting(false);
    }, 1000);
  };

  const formatDate = (timestamp: string) => {
    return new Date(timestamp).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long", 
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit"
    });
  };

  return (
    <div className="mt-12">
      <div className="flex items-center mb-8">
        <MessageCircle className="w-6 h-6 text-primary mr-3" />
        <h3 className="text-2xl font-bold text-foreground">
          Comments ({comments.length})
        </h3>
      </div>

      {/* Comment Form */}
      <Card className="p-6 mb-8">
        <h4 className="text-lg font-semibold text-foreground mb-4">Leave a Comment</h4>
        
        <form onSubmit={handleSubmitComment} className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Name *
              </label>
              <Input
                value={newComment.author}
                onChange={(e) => setNewComment(prev => ({ ...prev, author: e.target.value }))}
                placeholder="Your full name"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Email *
              </label>
              <Input
                type="email"
                value={newComment.email}
                onChange={(e) => setNewComment(prev => ({ ...prev, email: e.target.value }))}
                placeholder="your.email@example.com"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              Comment *
            </label>
            <Textarea
              value={newComment.content}
              onChange={(e) => setNewComment(prev => ({ ...prev, content: e.target.value }))}
              placeholder="Share your thoughts about this article..."
              rows={4}
              required
            />
          </div>

          <Button 
            type="submit" 
            disabled={isSubmitting}
            className="bg-gradient-to-r from-primary to-accent hover:opacity-90"
          >
            {isSubmitting ? "Posting..." : "Post Comment"}
            <Send className="w-4 h-4 ml-2" />
          </Button>
        </form>
      </Card>

      {/* Comments List */}
      <div className="space-y-6">
        {comments.length === 0 ? (
          <Card className="p-8 text-center">
            <MessageCircle className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
            <p className="text-muted-foreground">
              No comments yet. Be the first to share your thoughts!
            </p>
          </Card>
        ) : (
          comments.map((comment) => (
            <Card key={comment.id} className="p-6">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center flex-shrink-0">
                  <User className="w-5 h-5 text-white" />
                </div>
                
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h5 className="font-semibold text-foreground">{comment.author}</h5>
                    <span className="text-sm text-muted-foreground">
                      {formatDate(comment.timestamp)}
                    </span>
                  </div>
                  
                  <p className="text-foreground leading-relaxed">
                    {comment.content}
                  </p>
                </div>
              </div>
            </Card>
          ))
        )}
      </div>
    </div>
  );
};

export default CommentSection;
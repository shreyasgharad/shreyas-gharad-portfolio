
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Calendar, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface Post {
  title: string;
  date: string;
  category: string;
  excerpt: string;
  slug: string;
  readTime: string;
}

interface RecentPostsProps {
  posts: Post[];
  limit?: number;
}

const RecentPosts = ({ posts, limit = 5 }: RecentPostsProps) => {
  const recentPosts = posts
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, limit);

  return (
    <Card className="sticky top-8">
      <CardHeader>
        <CardTitle className="text-lg">Recent Posts</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {recentPosts.map((post, index) => (
          <div key={index} className="group">
            <Link 
              to={`/insights/${post.slug}`}
              className="block space-y-2 p-3 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <h4 className="font-medium text-sm leading-tight group-hover:text-blue transition-colors line-clamp-2">
                {post.title}
              </h4>
              <div className="flex items-center justify-between text-xs text-gray-500">
                <div className="flex items-center space-x-1">
                  <Calendar size={12} />
                  <span>{new Date(post.date).toLocaleDateString()}</span>
                </div>
                <span className="bg-blue/10 text-blue px-2 py-1 rounded-full text-xs">
                  {post.category}
                </span>
              </div>
              <div className="flex items-center text-xs text-blue group-hover:text-blue-dark">
                <span>Read more</span>
                <ArrowRight size={12} className="ml-1 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

export default RecentPosts;


import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, User } from "lucide-react";

interface BlogCardProps {
  id: number;
  title: string;
  excerpt: string;
  image: string;
  category: string;
  author: string;
  date: string;
  readTime: string;
}

const BlogCard = ({
  id,
  title,
  excerpt,
  image,
  category,
  author,
  date,
  readTime,
}: BlogCardProps) => {
  return (
    <Card className="overflow-hidden hover:shadow-md transition-shadow h-full">
      <CardContent className="p-0">
        <Link to={`/blog/${id}`} className="block">
          <div className="aspect-video overflow-hidden">
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
            />
          </div>
        </Link>
        <div className="p-6">
          <div className="mb-3">
            <Badge className="bg-job-blue-100 hover:bg-job-blue-200 text-job-blue-700 border-none">
              {category}
            </Badge>
          </div>
          <Link to={`/blog/${id}`}>
            <h3 className="font-semibold text-xl mb-2 hover:text-job-blue-600 transition-colors line-clamp-2">
              {title}
            </h3>
          </Link>
          <p className="text-gray-600 mb-4 line-clamp-3">{excerpt}</p>
          
          <div className="flex items-center justify-between text-sm text-gray-500">
            <div className="flex items-center">
              <User className="h-4 w-4 mr-1" />
              {author}
            </div>
            <div className="flex items-center">
              <Calendar className="h-4 w-4 mr-1" />
              {date}
            </div>
            <div className="flex items-center">
              <Clock className="h-4 w-4 mr-1" />
              {readTime}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default BlogCard;

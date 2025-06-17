
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { LinkedinIcon } from 'lucide-react';

interface TeamMember {
  id: number;
  name: string;
  role: string;
  bio: string;
  photo: string;
  linkedinUrl: string;
}

interface TeamCardProps {
  member: TeamMember;
}

const TeamCard = ({ member }: TeamCardProps) => {
  return (
    <Card className="group overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 animate-fade-in">
      <div className="h-64 overflow-hidden">
        <img 
          src={member.photo} 
          alt={member.name} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      
      <CardContent className="p-6">
        <h3 className="text-xl font-bold mb-2 group-hover:text-blue transition-colors duration-300">
          {member.name}
        </h3>
        
        <p className="text-blue font-medium mb-3">{member.role}</p>
        
        <p className="text-gray-600 mb-4 text-sm leading-relaxed">{member.bio}</p>
        
        <a 
          href={member.linkedinUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-blue hover:text-blue-dark transition-colors"
        >
          <LinkedinIcon size={18} className="mr-2" />
          Connect on LinkedIn
        </a>
      </CardContent>
    </Card>
  );
};

export default TeamCard;

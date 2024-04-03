import React from 'react';
import { Card, CardHeader, Image} from "@nextui-org/react";

interface CardProps {
    imageUrl: string;
    title: string;
    subtitle: string;
    link: string;
}

const LinkCard: React.FC<CardProps> = ({ imageUrl, title, subtitle, link }) => {
    return (
        <a href={link} target="_blank" rel="noopener noreferrer">
            <Card>
                <CardHeader className="flex gap-3">
                    <Image height={40} width={40} radius="sm" src={imageUrl}/>
                    <div className="flex flex-col">
                    <p className="text-md">{title}</p>
                    <p className="text-small text-default-500">{subtitle}</p>
                    </div>
                </CardHeader>
            </Card>
        </a>
    );
};

export default LinkCard;
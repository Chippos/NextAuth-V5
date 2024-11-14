import { CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

interface CardHeaderProps {
  title: string;
  description: string;
}

const Header = ({ title, description }: CardHeaderProps) => {
  return (
    <CardHeader>
      <CardTitle className='text-2xl'>{title}</CardTitle>
      <CardDescription>{description}</CardDescription>
    </CardHeader>
  );
};

export default Header;

import { HomeIcon } from 'lucide-react';

const Home = () => {
  return (
    <div className='container mx-auto h-screen flex items-center justify-center gap-1'>
      <div className='bg-grid h-screen' />
      <HomeIcon size={22} />
      <p className='text-xl'>Home</p>
    </div>
  );
};

export default Home;

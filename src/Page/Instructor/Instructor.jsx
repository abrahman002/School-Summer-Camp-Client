import { useQuery } from '@tanstack/react-query';
import InstractorCard from './InstractorCard';
import { Helmet } from 'react-helmet-async';

const Instructor = () => {

    const { data: instractors = [], refetch } = useQuery(['instructor'], async () => {
        const res = await fetch('https://islamic-school-server.vercel.app/instructor');

        return res.json();

    })


    return (
        <div className='mt-32'>
             <Helmet>
                <title>Islamic School | Instractors</title>
            </Helmet>
            <h1 className='text-2xl text-center font-semibold mt-10'> All Instructor</h1>
            <div className='grid md:grid-cols-3 gap-10 mt-10 container mx-auto'>
                {
                    instractors.map(instractor => <InstractorCard
                        key={instractor._id}
                        instractor={instractor}
                    ></InstractorCard>)
                }
            </div>
        </div>
    );
};

export default Instructor;
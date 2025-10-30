import { Bar, Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Legend, Tooltip, ArcElement } from 'chart.js';
import { useEventContext } from '../context/EventContext';
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, ArcElement, Tooltip, Legend);
function StatsChart() {
    const { events, likedEvents } = useEventContext()
    // Calcul des stats
    
    const categoryCounts = events.reduce((acc, event) => {
        acc[event.category] = (acc[event.category] || 0) + 1;
        return acc;
    }, {});

    const eventsLiked = [];
    for (let i = 0; i < events.length; i++) {
        if (likedEvents.includes(events[i].id)){
            eventsLiked.push(events[i])
        }
    }
    console.log(eventsLiked);
    
    const categoryLikes = eventsLiked.reduce((acc, eventLiked) => {
        acc[eventLiked.category] = (acc[eventLiked.category] || 0) + 1;
        return acc;
    }, {});
    console.log(categoryLikes);
    
    const data = {
        labels: ["Soirée","Concert","Festival","Open Air"],
        datasets: [
            {
                label: 'Nombre d\'événements',
                data: Object.values(categoryCounts),
                backgroundColor: [
                    '#2f8ea3',
                    '#bc5cc3',
                    '#DF9F07',
                    '#0DA62C',
                ]
            }
        ]
    };

    const dataLike = {
        labels: ["Soirée","Concert","Festival","Open Air"],
        datasets: [
            {
                label: 'Nombre d\'événements likés',
                data: Object.values(categoryLikes),
                backgroundColor: [
                    '#2f8ea3',
                    '#bc5cc3',
                    '#DF9F07',
                    '#0DA62C',
                ]
            }
        ]
    };

    return (
        <>
            <Bar data={data} />
            <Doughnut data={dataLike} />
        </>
    )

}

export default StatsChart;
import { Bar, Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Legend, Tooltip, ArcElement } from 'chart.js';
import { useEventContext } from '../context/EventContext';
import "../styles/components/stats-chart.css"
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
        if (likedEvents.includes(events[i].id)) {
            eventsLiked.push(events[i])
        }
    }

    const categoryLikes = eventsLiked.reduce((acc, eventLiked) => {
        acc[eventLiked.category] = (acc[eventLiked.category] || 0) + 1;
        return acc;
    }, {});

    const data = {
        labels: ["Soirée", "Concert", "Festival", "Open Air"],
        datasets: [
            {
                label: 'Nombre d\'événements',
                data: Object.values(categoryCounts),
                backgroundColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                ],
                borderColor: '#fff',
                borderWidth: 0,
            }
        ]
    };

    const dataLike = {
        labels: ["Soirée", "Concert", "Festival", "Open Air"],
        datasets: [
            {
                label: 'Nombre d\'événements likés',
                data: Object.values(categoryLikes),

                backgroundColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                ],
                borderColor: '#fff',
                borderWidth: 2,
            }
        ]
    };

    return (
        <>
            <div className='chart'>
                <Bar className='chart__bar' data={data} />
                <Doughnut className='chart__rad' data={dataLike} />
            </div>
        </>
    )

}

export default StatsChart;
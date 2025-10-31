import { Bar, Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Legend, Tooltip, ArcElement } from 'chart.js';
import { useEventContext } from '../context/EventContext';
import "../styles/components/stats-chart.css"
import { Grid } from '@mui/material';
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
                color: '#fff',
                backgroundColor: [
                    'rgb(255, 99, 132)',
                    'rgb(54, 162, 235)',
                    'rgb(255, 206, 86)',
                    'rgb(87, 202, 131)',
                ],
            }
        ]
    };

    const dataLike = {
        labels: ["Soirée", "Concert", "Festival", "Open Air"],
        datasets: [
            {
                label: 'Nombre d\'événements likés',
                data: Object.values(categoryLikes),
                color: '#fff',
                backgroundColor: [
                    'rgb(255, 99, 132)',
                    'rgb(54, 162, 235)',
                    'rgb(255, 206, 86)',
                    'rgb(87, 202, 131)',
                ],
                hoverOffset: 20,
                borderColor: 'var(--bg-elev, #fff);',
                borderWidth: 2,
            }
        ]
    };

    return (
        <>
            <Grid container spacing={4} sx={{ justifyContent: "space-evenly", alignItems: "center", }}>
                <Grid className='chart__background' size={{ lg: 6, sm: 8, xs: 12 }} display="flex" justifyContent="center">
                    <Bar className='chart' data={data} options={{plugins:{legend:{labels:{color:"white",},},},scales:{y:{ticks:{color:"white",},},x:{ticks:{color:"white",},},},}} />
                </Grid>
                <Grid className='chart__background' size={{ lg: 6, sm: 8, xs: 12 }} display="flex" justifyContent="center">
                    <Doughnut className='chart' data={dataLike} options={{plugins:{legend:{labels:{color:"white",},},},}} />
                </Grid>
            </Grid>
        </>
    )

}

export default StatsChart;
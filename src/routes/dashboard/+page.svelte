<script>
    import PieChart from '../../components/PieChart.svelte'
    import BarGraph from '../../components/BarGraph.svelte';

    let data = [
        { id: 1, label: 'Category A', value: 8 },
        { id: 2, label: 'Category B', value: 5 },
        { id: 3, label: 'Category C', value: 12 },
        { id: 4, label: 'Category D', value: 10 },
        // Add more data as needed
    ];
</script>


<h1>Dashboard</h1>
<br>
<h2>Metrics</h2>
<div class="flex-container">
    <div class="chart-container">
        <PieChart name_1="Category 1" name_2="Category 2" q_1={25} q_2={75} />
    </div>
    <div class="graph-container">
        <BarGraph {data} />
    </div>
    


</div>


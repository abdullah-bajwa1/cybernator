<script>
import {slide} from 'svelte/transition'
</script>

<style>
/* Add your sidebar styles here */
.container{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: start;
    justify-content: left;
    padding: 0;
}
.sidebar {
    width: 3.5rem;
    background-color: #333;
    color: white;
    padding: 0px;
    height: 100%;
    transition: width 0.5s ease-in-out;
    overflow-x: hidden;
}

.sidebar:hover {
    width: 15rem;
    background-color: #333;
    color: white;
    padding: 0px;
    height: 100%;
}

/* Style links inside the sidebar */

.sidebar ul {
    list-style: none;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;
    padding: 10px;
  }
 
  
  .sidebar li {
    margin-right: 10px;
    margin-left: 0px;
    font-size: 1.25rem;
    height: 3rem;
    display: flex;
    align-items: start; 
    justify-content: center;
  }
  
  .sidebar a {
    text-decoration: none;
    color: #ffffff;
  }

  .sidebar i {
    width: 30px;
    height: 1.5rem;
    font-size: 1.5rem;
    text-align: center;
    margin-right: 30px;
    padding-top: 0.3rem;
  }

/* Add your main content styles here */
.content {
    padding: 20px;
    overflow-x: hidden;
}
</style>

<div class="container">
    
    <div class="sidebar">
        <!-- Sidebar content goes here -->
         <ul>
            <li><a href="/dashboard"><i class="fa-solid fa-house"></i></a><a href="/dashboard">Dashboard</a></li>
            <li><a href="/dashboard/avatars"><i class="fa-solid fa-shapes"></i></a><a href="/dashboard/avatars">Avatars</a></li>
            <li><a href="/dashboard/investigate"><i class="fa-solid fa-magnifying-glass-chart"></i></a><a href="/dashboard/investigate">Investigate</a></li>
        </ul>
    </div>
        
    <div class="content">
        <slot></slot>
    </div>
        
</div>
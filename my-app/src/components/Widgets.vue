<template>
    <div class="container">
        <h2>Widgets</h2>
        <table class="table table-bordered">
            <thead>
            <tr>
                <th>Widget Id</th>
                <th>Item name</th>
                <th>Alternate name</th>
                <th>Description</th>
            </tr>
            </thead>
            <tbody>
              <tr v-for="item in widgets" :key="item.id">
                  <td>{{ item.id }}</td>
                  <td>{{ item.itemName }}</td>
                  <td>{{ item.altName }}</td>
                  <td>{{ item.description }}</td>
              </tr>
            </tbody>
        </table>
    </div>
</template>

<script>

    export default {
        name: 'Widgets',
        props: ['widgets']
     }
</script>
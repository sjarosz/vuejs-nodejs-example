<template>
    <div class="display-board">
        <h4>Widgets Created</h4>
        <div class="number">
        {{numberOfWidgets}}
        </div>
        <div class="btn">
            <button @click='getAllWidgets()' type="button" class="btn btn-warning">Get all Widgets</button>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'DisplayBoard',
        props: ['numberOfWidgets'],
        methods: {
            getAllWidgets() {
                this.$emit('getAllWidgets')
            }
        }
    }
</script>
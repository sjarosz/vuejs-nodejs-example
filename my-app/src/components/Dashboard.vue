<template>
  <div class="hello">
    <Header />
    <div class="container mrgnbtm">
          <div class="row">
            <div class="col-md-8">
                <CreateWidget @createWidget="widgetCreate($event)" />
            </div>
            <div class="col-md-4">
                <DisplayBoard :numberOfWidgets="numberOfWidgets" @getAllWidgets="getAllWidgets()" />
            </div>
          </div>
    </div>
    <div class="row mrgnbtm">
        <Widgets v-if="widgets.length > 0" :widgets="widgets" />
    </div>
  </div>
</template>

<script>
import Header from './Header.vue'
import CreateWidget from './CreateWidget.vue'
import DisplayBoard from './DisplayBoard.vue'
import Widgets from './Widgets.vue'
import { getAllWidgets, createWidget } from '../services/WidgetService'

export default {
  name: 'Dashboard',
  components: {
    Header,
    CreateWidget,
    DisplayBoard,
    Widgets
  },
  data() {
      return {
          widgets: [],
          numberOfWidgets: 0
      }
  },
  methods: {
    getAllWidgets() {
      getAllWidgets().then(response => {
        console.log(response)
        this.widgets = response
        this.numberOfWidgets = this.widgets.length
      })
    },
    widgetCreate(data) {
      console.log('data:::', data)
      createWidget(data).then(response => {
        console.log(response);
        this.getAllWidgets();
      });
    }
  },
  mounted () {
    this.getAllWidgets();
  }
}
</script>
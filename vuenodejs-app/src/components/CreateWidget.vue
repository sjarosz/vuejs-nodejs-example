<template>
  <div class="container">
    <div class="row">
        <div class="col-md-7 mrgnbtm">
        <h2>Create Widget</h2>
            <form>
                <div class="row">
                    <div class="form-group col-md-6">
                        <label htmlFor="exampleInputItem1">Item Name</label>
                        <input type="text" class="form-control" v-model="itemName" name="itemname" id="itemname" aria-describedby="descriptionHelp" placeholder="Item Name" />
                    </div>
                    <div class="form-group col-md-6">
                        <label htmlFor="exampleInputAlt1">Alternate Name</label>
                        <input type="text" class="form-control" v-model="altName" name="altname" id="altname" placeholder="Alternate Name" />
                    </div>
                </div>
                <div class="row">
                    <div class="form-group col-md-12">
                        <label htmlFor="exampleInputDesc1">Description</label>
                        <input type="text" class="form-control" v-model="description" name="description" id="description" aria-describedby="descriptionHelp" placeholder="Description" />
                    </div>
                </div>
                <button type="button" @click='createWidget()' class="btn btn-danger">Create</button>
            </form>
        </div>
    </div>
    </div>
</template>

<script>
export default {
  name: 'CreateWidget',
  data() {
    return {
      itemName: '',
      altName: '',
      description: ''
    }
  },
  methods: {
      createWidget() {
          console.log(this.itemName)
          const payload = {
              itemName: this.itemName,
              altName: this.altName,
              description: this.description
          }
          this.$emit('createWidget', payload)
          this.clearForm();
      },
      clearForm() {
          this.itemName = "";
          this.altName = "";
          this.description = "";
      }
  }
}
</script>
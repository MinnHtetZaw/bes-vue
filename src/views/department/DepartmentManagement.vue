<template>
  <SideNav>
    <!--    Edit-->
    <div v-if="isEdit == true" class="row">
      <div class="col-4 m-auto">
        <div class="card mb-3 p-3 shadow-sm rounded border-0">
          <div class="d-flex justify-content-between align-items-center">
            <h5 class="text-secondary mb-3">Edit Category</h5>

            <button @click="isEdit = false" type="button" class="btn-close" aria-label="Close"></button>
          </div>

          <!--          <form @submit.prevent="" ref="updateCategory">-->
          <!--            <div class="mb-3">-->
          <!--              <label class="form-label">Code</label>-->
          <!--              <form-element type="text" class="form-control form-control-sm" name="code" :value="edit_category.code">-->
          <!--              &lt;!&ndash;            <span v-if="error_message.code" class="small my-1 text-danger">{{this.error_message.code[0] }}</span>&ndash;&gt;-->

          <!--            </div>-->
          <!--            <div class="mb-3">-->
          <!--              <label class="form-label">Name</label>-->
          <!--              <form-element type="text" class="form-control form-control-sm" name="name" :value="edit_category.name">-->
          <!--              &lt;!&ndash;            <span v-if="error_message.name" class="small my-1 text-danger">{{this.error_message.name[0] }}</span>&ndash;&gt;-->
          <!--            </div>-->
          <!--            <div class="mb-3">-->
          <!--              <label class="form-label">Description</label>-->
          <!--              <textarea name="description" rows="3" class="form-control form-control-sm" :value="edit_category.description"></textarea>-->
          <!--            </div>-->
          <!--            <div>-->
          <!--              <button @click="updateCategory(edit_category.id)" :disabled="isLoading == true" class="btn btn-success w-100">-->
          <!--                  <span v-if="isLoading == true">-->
          <!--                     <span class="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span>-->
          <!--                      Updating...-->
          <!--                  </span>-->
          <!--                <span v-else>-->
          <!--                    Update-->
          <!--                  </span>-->
          <!--              </button>-->
          <!--            </div>-->
          <!--          </form>-->
        </div>
      </div>
    </div>
    <!--    ==========-->
    <!--    Create-->
    <!--    ==============-->
    <div v-else class="row">
      <div class="col-9">
        <div class="card mb-3 p-3 shadow-sm rounded border-0">
          <h5 class="text-secondary mb-3">Department List</h5>
          <div v-if="this.floors.length > 0">
            <table class="table table-sm table-striped table-hover table-borderless">
              <thead>
              <tr>
                <th class="fw-normal text-secondary text-center">#</th>
                <th class="fw-normal text-secondary text-center">Code</th>
                <th class="fw-normal text-secondary text-center">Name</th>
                <th class="fw-normal text-secondary text-center">Description</th>
                <th class="fw-normal text-secondary text-center">Action</th>
              </tr>
              </thead>
              <tbody>
              <!--              <tr v-for="category in categories">-->
              <!--                <td class="text-center">{{category.id}}</td>-->
              <!--                <td class="text-start">{{category.code}}</td>-->
              <!--                <td class="text-start">{{category.name}}</td>-->
              <!--                <td class="text-start">{{category.description}}</td>-->
              <!--                <td class="d-flex justify-content-center gap-3">-->
              <!--                  <button v-if="isEdit== false" @click="editCategory(category.id)" class="btn btn-outline-warning btn-sm">-->
              <!--                    <i class="fa-solid fa-pen-to-square"></i>-->
              <!--                  </button>-->
              <!--                  <button v-if="isEdit == false" @click="deleteCategory(category.id)" class="btn btn-sm btn-outline-danger" :disabled="isLoading == true">-->
              <!--                    <i class="fa-solid fa-trash"></i>-->
              <!--                  </button>-->
              <!--                </td>-->
              <!--              </tr>-->
              </tbody>
            </table>

          </div>
          <div v-else>
            <div class="d-flex justify-content-center">
              <img src="../../assets/logo.png" style="width: 300px;" class="" alt="">
            </div>
          </div>


        </div>
      </div>
      <div class="col-3">
        <div class="card mb-3 p-3 shadow-sm rounded border-0">
          <h5 class="text-secondary mb-3">Department Register</h5>
          <div>
            <form @submit.prevent="" ref="storeFloor">
              <!--              <div class="mb-3">-->
              <!--                <label class="form-label">Code</label>-->
              <!--                <form-element type="text" class="form-control form-control-sm" name="code">-->
              <!--                <span v-if="error_message.code" class="small my-1 text-danger">{{this.error_message.code[0] }}</span>-->

              <!--              </div>-->
              <div class="mb-3">
                <label class="form-label">Name</label>
                <input type="text" class="form-control form-control-sm" name="name">
                <span v-if="error_message.name" class="small my-1 text-danger">{{this.error_message.name[0] }}</span>
              </div>
              <div class="mb-3">
                <label class="form-label">Description</label>
                <textarea name="description" rows="3" class="form-control form-control-sm"></textarea>
              </div>
              <div>
                <button @click="storeCategory" :disabled="isLoading == true" class="btn btn-primary w-100">
                  <span v-if="isLoading == true">
                     <span class="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span>
                      Saving...
                  </span>
                  <span v-else>
                    Save
                  </span>
                </button>
              </div>
            </form>
          </div>


        </div>
      </div>
    </div>
  </SideNav>
</template>

<script>
import SideNav from "@/components/layout/SideNav";
export default {
  name: "DepartmentManagement",
  components: {SideNav},
  data() {
    return {
      isLoading: false,
      isEdit: false,
      error_message: {},
      floors: {},
    }
  },
}
</script>

<style scoped>

</style>
<template>
  <li>
    <label>
      <input
        type="checkbox"
        :checked="todo.done"
        @change="checkTodoObj(todo.id)"
      />
      <span v-show="!todo.isEdit">{{ todo.title }}</span>
      <input
        v-show="todo.isEdit"
        type="text"
        v-model="todo.title"
        @blur="handleEditInput(todo, $event)"
        ref="editInput"
      />
    </label>
    <button class="btn btn-danger" @click="deleteTodoObj(todo.id)">删除</button>
    <button class="btn btn-danger" @click="editTodoObj(todo.id)">编辑</button>
  </li>
</template>

<script>
export default {
  name: "MyItem",
  props: ["todo"],
  methods: {
    checkTodoObj(id) {
      this.$bus.$emit("checkTodo", id);
    },
    deleteTodoObj(id) {
      this.$bus.$emit("deleteTodo", id);
    },
    editTodoObj(id) {
      this.$bus.$emit("editTodo", id);
      // 等dom更新之后再执行里面语句
      this.$nextTick(() => {
        this.$refs.editInput.focus();
      });
    },
    handleEditInput(todo, e) {
      todo.title = e.target.value;
      todo.isEdit = false;
    },
  },
};
</script>

<style scoped>
/*item*/
li {
  list-style: none;
  height: 36px;
  line-height: 36px;
  padding: 0 5px;
  border-bottom: 1px solid #ddd;
}

li label {
  float: left;
  cursor: pointer;
}

li label li input {
  vertical-align: middle;
  margin-right: 6px;
  position: relative;
  top: -1px;
}

li button {
  float: right;
  display: none;
  margin-top: 3px;
}

li:before {
  content: initial;
}

li:last-child {
  border-bottom: none;
}

li:hover {
  background-color: #ddd;
}

li:hover button {
  display: block;
}
</style>
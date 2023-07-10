<script lang="ts">
	import type { TodoItem } from '../authstore/authstore';

	export let index: number;
	export let task: TodoItem;
	export let editTask: (index: number) => void;
	export let removeTask: (index: number) => void;
</script>

<div class="task-list">
	<p>
		<span hidden>{index + 1}</span>
		<input bind:checked={task.status} type="checkbox">
		<span class:checked={task.status}>{task.text}</span>
	</p>
	<div class="task-actions">
		<span
			on:click={() => {
				editTask(index);
			}}
			on:keydown={() => {}}
			role="button"
			tabindex="0"
			class="material-symbols-outlined"
		>
			edit_note
		</span>

		<span
			on:click={() => {
				removeTask(index);
			}}
			on:keydown={() => {}}
			role="button"
			tabindex="0"
			class="material-symbols-outlined"
		>
			delete
		</span>
	</div>
</div>

<style lang="scss">
	.task-list {
		border-left: 1px solid cyan;
		padding: 8px 14px;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	.checked {
      text-decoration: line-through;
    }

	.task-actions {
		display: flex;
		align-items: center;
		gap: 14px;
		font-size: 1.3rem;

		span {
			cursor: pointer;

			&:hover {
				color: coral;
			}
		}
	}
</style>

<script lang="ts">
	import type { TodoItem } from '../store/authstore';

	export let index: number;
	export let task: TodoItem;
	export let editTask: (index: number) => void;
	export let removeTask: (index: number) => void;
</script>

<div class="task-list">
	<p>
		<span hidden>{index + 1}</span>
		<input bind:checked={task.status} type="checkbox" class="checkmark" />
		<span class:checked={task.status}>{task.text}</span>
	</p>
	<div class="task-actions">
		<a href="#editor">
			<span
				on:click={() => {
					editTask(index);
				}}
				on:keydown={() => {}}
				role="button"
				tabindex="0"
				class="material-symbols-outlined edit-icon"
			>
				edit_note
			</span>
		</a>

		<span
			on:click={() => {
				removeTask(index);
			}}
			on:keydown={() => {}}
			role="button"
			tabindex="0"
			class="material-symbols-outlined delete-icon"
		>
			delete
		</span>
	</div>
</div>

<style lang="scss">
	.task-list {
		color: #132740;
		border: 1px solid #d4dde9;
		padding: 20px 20px;
		display: flex;
		align-items: center;
		justify-content: space-between;
		background-color: #f5f7fa;
		border-radius: 5px;
		font-weight: 600;
	}

	.checkmark {
		accent-color: #8895a7;
		cursor: pointer;
	}

	.checked {
		color: #8895a7;
		accent-color: #8895a7;
		text-decoration: line-through;
	}

	.task-actions {
		display: flex;
		align-items: center;
		gap: 25px;

		.edit-icon {
			color: #2368a2;
			cursor: pointer;
			font-size: 1.7rem;

			&:hover {
				text-shadow: 0 0 2px #63a2d8;
				font-size: 2rem;
			}
		}

		.delete-icon {
			color: #b82020;
			cursor: pointer;
			font-size: 1.7rem;

			&:hover {
				text-shadow: 0 0 2px #e36363;
				font-size: 2rem;
			}
		}
	}
</style>

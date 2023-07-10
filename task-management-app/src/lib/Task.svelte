<script lang="ts">
	export let index: number;
	export let task: string;
	export let editTask: (index: number) => void;
	export let removeTask: (index: number) => void;
</script>

<div class="task-list">
	<p>
		{index + 1}. {task}
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

<script lang="ts">
	import { db } from '$lib/firebase';
	import { getDoc, doc, setDoc } from 'firebase/firestore';
	import { authUser } from '../../store/authstore';
	import Task from '$lib/Task.svelte';
	import type { TodoItem } from '../../store/authstore';
	import themeColor from '../../store/themestore';

	let taskList: TodoItem[] = [];
	let currTask: string | undefined;
	let error = false;

	currTask = '';

	authUser.subscribe((user) => {
		taskList = user?.data?.tasks ?? [];
	});

	async function addTask() {
		error = false;

		if (!currTask) {
			error = true;
		}

		taskList = [...(taskList ?? []), { text: currTask ?? '', status: false }];
		currTask = '';

		await saveTasks();
	}

	async function editTask(index: number) {
		let newTaskList = [...(taskList ?? [])].filter(({ text: string, status: boolean }, i) => {
			return i != index;
		});

		currTask = taskList?.[index].text;
		taskList = newTaskList;

		await saveTasks();
	}

	async function removeTask(index: number) {
		let newTaskList = [...(taskList ?? [])].filter((value, i) => {
			return i != index;
		});

		taskList = newTaskList;

		await saveTasks();
	}

	async function saveTasks() {
		try {
			const userRef = doc(db, 'users', $authUser!.uid);

			await setDoc(
				userRef,
				{
					tasks: taskList
				},
				{ merge: true }
			);
		} catch (error) {}
	}
</script>
<svelte:head>
	<title>Tasklist</title>
</svelte:head>

<div class="mainContainer">
	<main on:change={saveTasks}>
		{#each taskList as task, index}
			<Task {index} {task} {editTask} {removeTask} />
		{:else}
			<p class="no-tasks">Woohoo! Nothing to do...</p>
		{/each}
	</main>
	<div class={'enterTask'}>
		<input bind:value={currTask} type="text" id="editor" placeholder="Enter to-do" />
		<span
			on:click={addTask}
			on:keydown={() => {}}
			role="button"
			tabindex="0"
			class="material-symbols-outlined add-icon {$themeColor}"
		>
			add
		</span>
	</div>
</div>

<style lang="scss">
	.mainContainer {
		font-size: 1.2rem;
		display: flex;
		flex-direction: column;
		min-height: 100vh;
		gap: 24px;
		padding: 24px;
		width: 100%;
		max-width: 1000px;
		margin: 0 auto;
	}

	main {
		display: flex;
		flex-direction: column;
		gap: 8px;
		flex: 1;
	}

	.no-tasks {
		font-size: 3rem;
		font-weight: 600;
		color: white;
	}

	.enterTask {
		display: flex;
		align-items: stretch;
		border: 1px solid #d4dde9;
		border-radius: 5px;
		overflow: hidden;

		input {
			font-size: 1rem;
			background: transparent;
			border: none;
			padding: 20px;
			color: white;
			flex: 1;
			font-family: 'Roboto Mono', monospace;

			&::placeholder {
				color: white;
			}

			&:focus {
				outline: none;
			}
		}

		.add-icon {
			display: flex;
			padding: 0 28px;
			border-left: 1px solid #d4dde9;
			color: #f9d29b;
			font-weight: 600;
			font-size: 1.7rem;
			cursor: pointer;
			align-items: center;

			&:hover {
				border: none;
				background-color: #f9d29b;
				color: #4739ff;
			}
		}

		.add-icon.barbie {
			color: #f9d29b;

			&:hover {
				border: none;
				background-color: #f9d29b;
				color: #ff3e8d;
			}
		}

		.add-icon.seaFoam {
			color: #bbf7d0;

			&:hover {
				border: none;
				background-color: #bbf7d0;
				color: #3b82f6;
			}
		}

		.add-icon.innocent {
			color: #d4dde9;

			&:hover {
				border: none;
				background-color: #d4dde9;
				color: #ff99b4;
			}
		}

		#editor {
			scroll-behavior: smooth;
		}
	}
</style>

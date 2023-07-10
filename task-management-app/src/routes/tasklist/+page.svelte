<script lang="ts">
	import { db } from '$lib/firebase';
	import { getDoc, doc, setDoc } from 'firebase/firestore';
	import { authUser } from '../../authstore/authstore';
	import Task from '$lib/Task.svelte';
	import type { TodoItem } from '../../authstore/authstore';

	let taskList: TodoItem[] = [];
	let currTask: string | undefined;
	let error = false;

	currTask = "";

	authUser.subscribe((user) => {
		taskList = user?.data?.tasks ?? [];
	});

	async function addTask() {
		error = false;

		if (!currTask) {
			error = true;
		}

		taskList = [...(taskList ?? []), {text: currTask ?? "", status: false}];
		currTask = "";

		await saveTasks();
	}

	async function editTask(index: number) {
		let newTaskList = [...(taskList ?? [])].filter(({text: string, status: boolean}, i) => {
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
			const userRef = doc(db, "users", $authUser!.uid);

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

<main>
	{#each taskList as task, index}
		<Task {index} {task} {editTask} {removeTask} />
	{:else}
		<p>Woohoo! Nothing to do</p>
	{/each}
</main>
<div>
  <input bind:value={currTask} type="text" placeholder="Enter todo" />
	<button on:click={addTask}>Add</button>
</div>

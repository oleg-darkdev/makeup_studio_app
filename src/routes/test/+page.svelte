<script>
	// import { env } from '$env/dynamic/private';
	// console.log(import.meta.env.GOOGLE_SERVICE_ACCOUNT_JSON)
	
	// let files = [];
	// let selectedId = null;

	// onMount(async () => {
	// 	const res = await fetch('/api/videos/list');
	// 	const data = await res.json();
	// 	files = data.files || [];
	// });

	// function select(id) {
	// 	selectedId = id;
	// }
</script>

<!-- <h1 class="mb-4 text-xl font-bold">🎬 Видео из Google Drive</h1> -->
<!-- 
{#if files.length === 0}
	<p>Загрузка видео...</p>
{:else}
	<ul>
		{#each files as f}
			<li>
				<button on:click={() => select(f.id)} class="text-blue-500 underline">
					{f.name}
				</button>
			</li>
		{/each}
	</ul>
{/if}

{#if selectedId}
	<div class="mt-4">
		<video controls width="800" src={`/api/videos/stream/${selectedId}`}></video>
	</div>
{/if} -->

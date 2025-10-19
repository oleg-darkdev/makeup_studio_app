<script lang="ts">
</script>

<h2>Ваш текущий урок</h2>

<div class="video-wrapper">
	<!-- https://drive.google.com/file/d/1CIhhFNk5gVtyPS9Uz6MWQjy1s7GkQrcz/view?usp=drivesdk -->
	<!-- <iframe
		src="https://drive.google.com/uc?id=1CIhhFNk5gVtyPS9Uz6MWQjy1s7GkQrcz"
    width="640"
		height="480"
		title="Видео из Google Drive"
	></iframe> -->
	<video src="https://drive.google.com/uc?id=1CIhhFNk5gVtyPS9Uz6MWQjy1s7GkQrcz" controls> </video>
	<!-- <iframe
		src="https://drive.google.com/uc?export=preview&id=1ssL926puTac1XCDXV2H8Vi-9Nml5GUxs"
		width="640"
		height="480"
		allow="autoplay"
	></iframe> -->
</div>

<style lang="postcss">
	.video-wrapper {
		position: relative;
		width: 100%;
		max-width: 900px; /* можно менять */
		margin: 0 auto;
		padding-bottom: 56.25%; /* 16:9 */
		height: 0;
	}
	.video-wrapper iframe {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		border: 0;
	}
</style>

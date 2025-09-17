<script lang="ts">
	// import {  } from '$shared';
	// import {  } from '$widgets';
	// import {  } from '$entities'

	let { post } = $props();
</script>

<!-- 	class="insta-card eapps-instagram-feed-posts-item-template-tile eapps-instagram-feed-posts-item es-post eapps-instagram-feed-posts-item-type-video eapps-instagram-feed-posts-item-visible eapps-instagram-feed-posts-item-with-data eapps-instagram-feed-posts-item-image-ratio-1-1 eapps-instagram-feed-posts-item-image-portrait eapps-instagram-feed-posts-item-loaded"
 -->
<div
	class="insta-card eapps-instagram-feed-posts-item-template-tile eapps-instagram-feed-posts-item es-post eapps-instagram-feed-posts-item-type-carousel eapps-instagram-feed-posts-item-visible eapps-instagram-feed-posts-item-with-data eapps-instagram-feed-posts-item-image-ratio-1-1 eapps-instagram-feed-posts-item-image-portrait eapps-instagram-feed-posts-item-loaded"
	style=""
>
	<a
		class="eapps-instagram-feed-posts-item-link"
		href="/"
		target="_blank"
		rel="noopener noreferrer nofollow"
	>
		<div class="eapps-instagram-feed-posts-item-media">
			<div class="eapps-instagram-feed-posts-item-image-wrapper">
				<picture>
					<source
						class="eapps-instagram-feed-posts-item-image bg-black"
						src={post.avif}
						type="image/avif"
					/>
					<img class="eapps-instagram-feed-posts-item-image bg-black" src={post.media} alt="" />
				</picture>
				<span
					class="eapps-instagram-feed-posts-item-image-icon-video eapps-instagram-feed-posts-item-image-icon es-post-type"
				>
					<svg viewBox="0 0 24 24">
						<path
							d="M23.467,5.762c-0.118-0.045-0.232-0.068-0.342-0.068c-0.246,0-0.451,0.087-0.615,0.26l-3.76,3.217v5.766l3.76,3.578c0.164,0.173,0.369,0.26,0.615,0.26c0.109,0,0.223-0.023,0.342-0.068C23.822,18.552,24,18.284,24,17.901V6.57C24,6.186,23.822,5.917,23.467,5.762z"
						></path>
						<path
							d="M16.33,4.412c-0.77-0.769-1.696-1.154-2.78-1.154H3.934c-1.084,0-2.01,0.385-2.78,1.154C0.385,5.182,0,6.108,0,7.192v9.616c0,1.084,0.385,2.01,1.154,2.78c0.77,0.77,1.696,1.154,2.78,1.154h9.616c1.084,0,2.01-0.385,2.78-1.154c0.77-0.77,1.154-1.696,1.154-2.78v-3.076v-3.478V7.192C17.484,6.108,17.099,5.182,16.33,4.412z M8.742,17.229c-2.888,0-5.229-2.341-5.229-5.229c0-2.888,2.341-5.229,5.229-5.229S13.971,9.112,13.971,12C13.971,14.888,11.63,17.229,8.742,17.229z"
						></path>
						<circle cx="8.742" cy="12" r="3.5"></circle>
					</svg>
				</span>

				<span
					class="eapps-instagram-feed-posts-item-image-icon-carousel eapps-instagram-feed-posts-item-image-icon es-post-type"
				>
					<svg viewBox="0 0 45.964 45.964">
						<path
							d="M32.399,40.565H11.113v1.297c0,2.24,1.838,4.051,4.076,4.051h26.733c2.239,0,4.042-1.811,4.042-4.051V15.13c0-2.237-1.803-4.068-4.042-4.068h-1.415v21.395C40.507,36.904,36.845,40.566,32.399,40.565z"
						></path>
						<path
							d="M0,4.102l0,28.355c0,2.241,1.814,4.067,4.051,4.067h28.365c2.237,0,4.066-1.826,4.066-4.067l0-28.356c0-2.238-1.828-4.051-4.066-4.051H4.051C1.814,0.05,0,1.862,0,4.102z"
						></path>
					</svg>
				</span>
				<!-- <span
					class="eapps-instagram-feed-posts-item-image-icon-video eapps-instagram-feed-posts-item-image-icon es-post-type"
				>
					<svg viewBox="0 0 24 24">
						<path
							d="M23.467,5.762c-0.118-0.045-0.232-0.068-0.342-0.068c-0.246,0-0.451,0.087-0.615,0.26l-3.76,3.217v5.766l3.76,3.578c0.164,0.173,0.369,0.26,0.615,0.26c0.109,0,0.223-0.023,0.342-0.068C23.822,18.552,24,18.284,24,17.901V6.57C24,6.186,23.822,5.917,23.467,5.762z"
						></path>
						<path
							d="M16.33,4.412c-0.77-0.769-1.696-1.154-2.78-1.154H3.934c-1.084,0-2.01,0.385-2.78,1.154C0.385,5.182,0,6.108,0,7.192v9.616c0,1.084,0.385,2.01,1.154,2.78c0.77,0.77,1.696,1.154,2.78,1.154h9.616c1.084,0,2.01-0.385,2.78-1.154c0.77-0.77,1.154-1.696,1.154-2.78v-3.076v-3.478V7.192C17.484,6.108,17.099,5.182,16.33,4.412z M8.742,17.229c-2.888,0-5.229-2.341-5.229-5.229c0-2.888,2.341-5.229,5.229-5.229S13.971,9.112,13.971,12C13.971,14.888,11.63,17.229,8.742,17.229z"
						></path>
						<circle cx="8.742" cy="12" r="3.5"></circle>
					</svg>
				</span> -->

				<!-- <span
					class="eapps-instagram-feed-posts-item-image-icon-carousel eapps-instagram-feed-posts-item-image-icon es-post-type"
				>
					<svg viewBox="0 0 45.964 45.964">
						<path
							d="M32.399,40.565H11.113v1.297c0,2.24,1.838,4.051,4.076,4.051h26.733c2.239,0,4.042-1.811,4.042-4.051V15.13c0-2.237-1.803-4.068-4.042-4.068h-1.415v21.395C40.507,36.904,36.845,40.566,32.399,40.565z"
						></path>
						<path
							d="M0,4.102l0,28.355c0,2.241,1.814,4.067,4.051,4.067h28.365c2.237,0,4.066-1.826,4.066-4.067l0-28.356c0-2.238-1.828-4.051-4.066-4.051H4.051C1.814,0.05,0,1.862,0,4.102z"
						></path>
					</svg>
				</span> -->
			</div>
		</div>

		<div class="eapps-instagram-feed-posts-item-overlay">
			<div class="eapps-instagram-feed-posts-item-content">
				<div class="eapps-instagram-feed-posts-item-counters">
					<div class="eapps-instagram-feed-posts-item-likes-count es-post-likes-count">
						<svg class="eapps-instagram-feed-posts-item-likes-count-icon" viewBox="0 0 24 24">
							<title>Likes Count</title>
							<path
								d="M17.7,1.5c-2,0-3.3,0.5-4.9,2.1c0,0-0.4,0.4-0.7,0.7c-0.3-0.3-0.7-0.7-0.7-0.7c-1.6-1.6-3-2.1-5-2.1C2.6,1.5,0,4.6,0,8.3
        c0,4.2,3.4,7.1,8.6,11.5c0.9,0.8,1.9,1.6,2.9,2.5c0.1,0.1,0.3,0.2,0.5,0.2s0.3-0.1,0.5-0.2c1.1-1,2.1-1.8,3.1-2.7
        c4.8-4.1,8.5-7.1,8.5-11.4C24,4.6,21.4,1.5,17.7,1.5z M14.6,18.6c-0.8,0.7-1.7,1.5-2.6,2.3c-0.9-0.7-1.7-1.4-2.5-2.1
        c-5-4.2-8.1-6.9-8.1-10.5c0-3.1,2.1-5.5,4.9-5.5c1.5,0,2.6,0.3,3.8,1.5c1,1,1.2,1.2,1.2,1.2C11.6,5.9,11.7,6,12,6.1
        c0.3,0,0.5-0.2,0.7-0.4c0,0,0.2-0.2,1.2-1.3c1.3-1.3,2.1-1.5,3.8-1.5c2.8,0,4.9,2.4,4.9,5.5C22.6,11.9,19.4,14.6,14.6,18.6z"
							></path>
						</svg>

						<div class="eapps-instagram-feed-posts-item-likes-count-label">{post.likesCount}</div>
					</div>

					<div class="eapps-instagram-feed-posts-item-comments-count es-post-comments-count">
						<svg class="eapps-instagram-feed-posts-item-comments-count-icon" viewBox="0 0 24 24">
							<title>Comments Count</title>
							<path
								d="M1,11.9C1,17.9,5.8,23,12,23c1.9,0,3.7-1,5.3-1.8l5,1.3l0,0c0.1,0,0.1,0,0.2,0c0.4,0,0.6-0.3,0.6-0.6c0-0.1,0-0.1,0-0.2
        l-1.3-4.9c0.9-1.6,1.4-2.9,1.4-4.8C23,5.8,18,1,12,1C5.9,1,1,5.9,1,11.9z M2.4,11.9c0-5.2,4.3-9.5,9.5-9.5c5.3,0,9.6,4.2,9.6,9.5
        c0,1.7-0.5,3-1.3,4.4l0,0c-0.1,0.1-0.1,0.2-0.1,0.3c0,0.1,0,0.1,0,0.1l0,0l1.1,4.1l-4.1-1.1l0,0c-0.1,0-0.1,0-0.2,0
        c-0.1,0-0.2,0-0.3,0.1l0,0c-1.4,0.8-3.1,1.8-4.8,1.8C6.7,21.6,2.4,17.2,2.4,11.9z"
							></path>
						</svg>

						<div class="eapps-instagram-feed-posts-item-comments-count-label">
							{post.commentsCount}
						</div>
					</div>
				</div>

				<div class="eapps-instagram-feed-posts-item-text es-post-text">
					{#each post.desc as text}
						<p>{text}</p>
					{/each}
				</div>

				<div
					class="eapps-instagram-feed-posts-item-text es-post-text eapps-instagram-feed-posts-item-text-clone"
				>
					{#each post.desc as text}
						<p>{text}</p>
					{/each}
				</div>
			</div>
		</div>
	</a>
</div>

<!-- 
media: '',
		postLink: 'https://www.instagram.com/p/DIik5btNN5J/?img_index=1',
		desc: [
			'Когда я только узнала,что я еду на конгресс в Румынию - я хладнокровно посмотрела на свой календарь-расписание и внесла коррективы!'
		],
		commentsCount: 0,
		likesCount: 0,
		type: 0,


-->

<!-- <div
	class="insta-card eapps-instagram-feed-posts-item-template-tile eapps-instagram-feed-posts-item es-post eapps-instagram-feed-posts-item-type-carousel eapps-instagram-feed-posts-item-visible eapps-instagram-feed-posts-item-with-data eapps-instagram-feed-posts-item-image-ratio-1-1 eapps-instagram-feed-posts-item-image-portrait eapps-instagram-feed-posts-item-loaded"
	style=""
>
	<a
		class="eapps-instagram-feed-posts-item-link"
		href="/"
		target="_blank"
		rel="noopener noreferrer nofollow"
	>
		<div class="eapps-instagram-feed-posts-item-media">
			<div class="eapps-instagram-feed-posts-item-image-wrapper">
				<img class="eapps-instagram-feed-posts-item-image" src="" alt="" />

				<span
					class="eapps-instagram-feed-posts-item-image-icon-video eapps-instagram-feed-posts-item-image-icon es-post-type"
				>
					<svg viewBox="0 0 24 24">
						<path
							d="M23.467,5.762c-0.118-0.045-0.232-0.068-0.342-0.068c-0.246,0-0.451,0.087-0.615,0.26l-3.76,3.217v5.766l3.76,3.578c0.164,0.173,0.369,0.26,0.615,0.26c0.109,0,0.223-0.023,0.342-0.068C23.822,18.552,24,18.284,24,17.901V6.57C24,6.186,23.822,5.917,23.467,5.762z"
						></path>
						<path
							d="M16.33,4.412c-0.77-0.769-1.696-1.154-2.78-1.154H3.934c-1.084,0-2.01,0.385-2.78,1.154C0.385,5.182,0,6.108,0,7.192v9.616c0,1.084,0.385,2.01,1.154,2.78c0.77,0.77,1.696,1.154,2.78,1.154h9.616c1.084,0,2.01-0.385,2.78-1.154c0.77-0.77,1.154-1.696,1.154-2.78v-3.076v-3.478V7.192C17.484,6.108,17.099,5.182,16.33,4.412z M8.742,17.229c-2.888,0-5.229-2.341-5.229-5.229c0-2.888,2.341-5.229,5.229-5.229S13.971,9.112,13.971,12C13.971,14.888,11.63,17.229,8.742,17.229z"
						></path>
						<circle cx="8.742" cy="12" r="3.5"></circle>
					</svg>
				</span>

				<span
					class="eapps-instagram-feed-posts-item-image-icon-carousel eapps-instagram-feed-posts-item-image-icon es-post-type"
				>
					<svg viewBox="0 0 45.964 45.964">
						<path
							d="M32.399,40.565H11.113v1.297c0,2.24,1.838,4.051,4.076,4.051h26.733c2.239,0,4.042-1.811,4.042-4.051V15.13c0-2.237-1.803-4.068-4.042-4.068h-1.415v21.395C40.507,36.904,36.845,40.566,32.399,40.565z"
						></path>
						<path
							d="M0,4.102l0,28.355c0,2.241,1.814,4.067,4.051,4.067h28.365c2.237,0,4.066-1.826,4.066-4.067l0-28.356c0-2.238-1.828-4.051-4.066-4.051H4.051C1.814,0.05,0,1.862,0,4.102z"
						></path>
					</svg>
				</span>
			</div>
		</div>

		<div class="eapps-instagram-feed-posts-item-overlay">
			<div class="eapps-instagram-feed-posts-item-content">
				<div class="eapps-instagram-feed-posts-item-counters">
					<div class="eapps-instagram-feed-posts-item-likes-count es-post-likes-count">
						<svg class="eapps-instagram-feed-posts-item-likes-count-icon" viewBox="0 0 24 24">
							<title>Likes Count</title>
							<path
								d="M17.7,1.5c-2,0-3.3,0.5-4.9,2.1c0,0-0.4,0.4-0.7,0.7c-0.3-0.3-0.7-0.7-0.7-0.7c-1.6-1.6-3-2.1-5-2.1C2.6,1.5,0,4.6,0,8.3
        c0,4.2,3.4,7.1,8.6,11.5c0.9,0.8,1.9,1.6,2.9,2.5c0.1,0.1,0.3,0.2,0.5,0.2s0.3-0.1,0.5-0.2c1.1-1,2.1-1.8,3.1-2.7
        c4.8-4.1,8.5-7.1,8.5-11.4C24,4.6,21.4,1.5,17.7,1.5z M14.6,18.6c-0.8,0.7-1.7,1.5-2.6,2.3c-0.9-0.7-1.7-1.4-2.5-2.1
        c-5-4.2-8.1-6.9-8.1-10.5c0-3.1,2.1-5.5,4.9-5.5c1.5,0,2.6,0.3,3.8,1.5c1,1,1.2,1.2,1.2,1.2C11.6,5.9,11.7,6,12,6.1
        c0.3,0,0.5-0.2,0.7-0.4c0,0,0.2-0.2,1.2-1.3c1.3-1.3,2.1-1.5,3.8-1.5c2.8,0,4.9,2.4,4.9,5.5C22.6,11.9,19.4,14.6,14.6,18.6z"
							></path>
						</svg>

						<div class="eapps-instagram-feed-posts-item-likes-count-label">214</div>
					</div>

					<div class="eapps-instagram-feed-posts-item-comments-count es-post-comments-count">
						<svg class="eapps-instagram-feed-posts-item-comments-count-icon" viewBox="0 0 24 24">
							<title>Comments Count</title>
							<path
								d="M1,11.9C1,17.9,5.8,23,12,23c1.9,0,3.7-1,5.3-1.8l5,1.3l0,0c0.1,0,0.1,0,0.2,0c0.4,0,0.6-0.3,0.6-0.6c0-0.1,0-0.1,0-0.2
        l-1.3-4.9c0.9-1.6,1.4-2.9,1.4-4.8C23,5.8,18,1,12,1C5.9,1,1,5.9,1,11.9z M2.4,11.9c0-5.2,4.3-9.5,9.5-9.5c5.3,0,9.6,4.2,9.6,9.5
        c0,1.7-0.5,3-1.3,4.4l0,0c-0.1,0.1-0.1,0.2-0.1,0.3c0,0.1,0,0.1,0,0.1l0,0l1.1,4.1l-4.1-1.1l0,0c-0.1,0-0.1,0-0.2,0
        c-0.1,0-0.2,0-0.3,0.1l0,0c-1.4,0.8-3.1,1.8-4.8,1.8C6.7,21.6,2.4,17.2,2.4,11.9z"
							></path>
						</svg>

						<div class="eapps-instagram-feed-posts-item-comments-count-label">9</div>
					</div>
				</div>

				<div class="eapps-instagram-feed-posts-item-text es-post-text">
					We are so excited to be joining the festivities and celebrating our good neighbors
					@moderngamesbend as they turn 10!💖 On 8/23 from 11am-6pm we will be offering flash
					tattoos and piercing! First come first serve, everyone leaves with a goody bag! Swipe to
					check out flash, we can’t wait to see you! 🧩🎲🃏♟️🤍
				</div>

				<div
					class="eapps-instagram-feed-posts-item-text es-post-text eapps-instagram-feed-posts-item-text-clone"
				>
					We are so excited to be joining the festivities and celebrating our good neighbors
					@moderngamesbend as they turn 10!💖 On 8/23 from 11am-6pm we will be offering flash
					tattoos and piercing! First come first serve, everyone leaves with a goody bag! Swipe to
					check out flash, we can’t wait to see you! 🧩🎲🃏♟️🤍
				</div>
			</div>
		</div>

		<div class="eapps-instagram-feed-posts-item-red-like-container es-post-like-notification"></div>
	</a>
</div> -->

<style lang="postcss">
	.insta-card {
		width: calc(25% - 0px);
		margin: 0;
	}
	@media screen and (max-width: 767px) {
		.insta-card {
			width: calc(50% - 0px);
			margin: 0;
		}
	}
	a {
		background-color: #0000;
	}
	a:active,
	a:hover {
		outline: 0;
	}
	img {
		border: 0;
	}
	svg:not(:root) {
		overflow: hidden;
	}
	* {
		box-sizing: border-box;
	}
	img {
		vertical-align: middle;
		max-width: 100%;
		display: inline-block;
	}
	[type='button'] {
		cursor: pointer;
		-webkit-appearance: button;
		border: 0;
	}
	a {
		border-color: var(--black);
		color: var(--black);
		text-decoration: underline;
	}
	img {
		max-width: 100%;
		display: inline-block;
	} /*! CSS Used from: Embedded */
	* {
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
	} /*! CSS Used from: Embedded */
	.eapps-instagram-feed-container div:empty {
		display: block;
	}
	.eapps-instagram-feed {
		font-size: 14px;
		font-family:
			-apple-system,
			BlinkMacSystemFont,
			Poppins,
			Open Sans,
			Helvetica Neue,
			sans-serif;
		line-height: 18px;
		font-weight: 400;
		width: 100%;
		max-height: 100%;
		position: relative;
		box-sizing: border-box;
		min-width: 150px;
		min-height: 100px;
	}
	.eapps-instagram-feed-title {
		font-size: 24px;
		font-weight: 600;
		text-align: center;
		line-height: 32px;
		padding: 24px 10px;
	}
	.eapps-instagram-feed-content {
		position: relative;
		width: 100%;
	}
	.eapps-instagram-feed-container {
		width: 100%;
	}
	.eapps-instagram-feed a {
		text-decoration: none;
		color: #000;
		margin: 0;
	}
	.eapps-instagram-feed a:hover {
		text-decoration: underline;
	}
	.eapps-instagram-feed-posts {
		width: 100%;
	}
	.eapps-instagram-feed-posts-container {
		width: 100%;
	}
	.eapps-instagram-feed-posts-item {
		box-sizing: border-box;
		display: flex;
		flex-direction: column;
		position: relative;
		background: #fff;
		transition:
			opacity 0.2s ease,
			visibility 0.2s ease;
		opacity: 0;
		overflow: hidden;
		visibility: hidden;
		flex-grow: 0;
		flex-shrink: 0;
	}
	.eapps-instagram-feed-posts-item-visible.eapps-instagram-feed-posts-item-loaded {
		opacity: 1;
		visibility: visible;
	}
	.eapps-instagram-feed-posts-item a,
	.eapps-instagram-feed-posts-item a:hover {
		color: #003569;
	}
	.eapps-instagram-feed-posts-item-link {
		cursor: pointer;
		overflow: hidden;
	}
	.eapps-instagram-feed-posts-item-image {
		position: absolute !important;
		margin: 0 !important;
		width: auto;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%) !important;
	}
	.eapps-instagram-feed-posts-item-image-portrait .eapps-instagram-feed-posts-item-image {
		width: 100%;
	}
	.eapps-instagram-feed-posts-item-image-wrapper {
		position: relative;
		overflow: hidden;
		margin: -1px;
	}
	.eapps-instagram-feed-posts-item-image-ratio-1-1 .eapps-instagram-feed-posts-item-image-wrapper {
		padding-top: 100%;
	}
	.eapps-instagram-feed-posts-item-image-icon {
		display: none;
		position: absolute;
		z-index: 2;
		top: 0.6em;
		right: 0.6em;
		width: 24px;
		height: 24px;
		transition: all 0.3s ease;
	}
	.eapps-instagram-feed-posts-item-image-icon svg {
		display: block;
		width: 24px;
		height: 24px;
		fill: rgba(255, 255, 255, 0.8);
	}
	.eapps-instagram-feed-posts-item-type-video .eapps-instagram-feed-posts-item-image-icon-video {
		display: block;
	}
	.eapps-instagram-feed-posts-item-type-carousel
		.eapps-instagram-feed-posts-item-image-icon-carousel {
		display: block;
	}
	.eapps-instagram-feed-posts-item-comments-count,
	.eapps-instagram-feed-posts-item-likes-count {
		display: inline-flex;
		align-items: center;
	}
	.eapps-instagram-feed-posts-item-comments-count-icon,
	.eapps-instagram-feed-posts-item-likes-count-icon {
		fill: currentColor;
		width: 24px;
		height: 24px;
	}
	.eapps-instagram-feed-posts-item-comments-count-label,
	.eapps-instagram-feed-posts-item-likes-count-label {
		margin-left: 6px;
		font-size: 14px;
	}
	.eapps-instagram-feed-posts-item-template-tile {
		user-select: none;
	}
	.eapps-instagram-feed-posts-item-template-tile .eapps-instagram-feed-posts-item-link {
		width: 100%;
		box-sizing: border-box;
		display: flex;
	}
	.eapps-instagram-feed-posts-item-template-tile .eapps-instagram-feed-posts-item-overlay {
		position: absolute;
		z-index: 2;
		top: -1px;
		right: -1px;
		bottom: -1px;
		left: -1px;
		opacity: 0;
		visibility: hidden;
		pointer-events: none;
		transition:
			opacity 0.3s,
			visibility 0.3s;
		text-align: center;
		box-sizing: border-box;
		color: #fff;
		background: rgba(0, 0, 0, 0.8);
		display: flex;
		align-items: center;
	}
	@media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {
		.eapps-instagram-feed-posts-item-template-tile .eapps-instagram-feed-posts-item-overlay {
			transition: none;
		}
	}
	.eapps-instagram-feed-posts-item-with-data:hover.eapps-instagram-feed-posts-item-template-tile
		.eapps-instagram-feed-posts-item-overlay {
		opacity: 1;
		visibility: visible;
		pointer-events: all;
		padding-top: 0;
	}
	.eapps-instagram-feed-posts-item-template-tile .eapps-instagram-feed-posts-item-content {
		transform: translateY(10%);
		width: 80%;
		max-height: 80%;
		margin: 0 auto;
		position: relative;
		transition: 0.3s all ease;
	}
	.eapps-instagram-feed-posts-item-with-data:hover.eapps-instagram-feed-posts-item-template-tile
		.eapps-instagram-feed-posts-item-content {
		transform: translateY(0);
	}
	.eapps-instagram-feed-posts-item-template-tile .eapps-instagram-feed-posts-item-media {
		width: 100%;
	}
	.eapps-instagram-feed-posts-item-template-tile .eapps-instagram-feed-posts-item-image {
		transition:
			transform 0.3s ease,
			filter 0.3s;
		left: 50%;
		transform: scale(1) translate(-50%, -50%);
		transform-origin: 0 0;
		backface-visibility: hidden;
	}
	@media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {
		.eapps-instagram-feed-posts-item-template-tile .eapps-instagram-feed-posts-item-image {
			transition: none;
		}
	}
	.eapps-instagram-feed-posts-item-with-data:hover.eapps-instagram-feed-posts-item-template-tile
		.eapps-instagram-feed-posts-item-image {
		transform: scale(1.1) translate(-50%, -50%);
		transform-origin: 0 0;
		filter: grayscale(1);
	}
	@media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {
		.eapps-instagram-feed-posts-item-with-data:hover.eapps-instagram-feed-posts-item-template-tile
			.eapps-instagram-feed-posts-item-image {
			transform: scale(1.05) translate(-50%, -50%);
		}
	}
	.eapps-instagram-feed-posts-item-with-data:hover.eapps-instagram-feed-posts-item-template-tile
		.eapps-instagram-feed-posts-item-image-icon {
		opacity: 0;
	}
	.eapps-instagram-feed-posts-item-template-tile .eapps-instagram-feed-posts-item-comments-count,
	.eapps-instagram-feed-posts-item-template-tile .eapps-instagram-feed-posts-item-likes-count {
		min-width: 70px;
		justify-content: center;
	}
	.eapps-instagram-feed-posts-item-template-tile
		.eapps-instagram-feed-posts-item-comments-count-label,
	.eapps-instagram-feed-posts-item-template-tile
		.eapps-instagram-feed-posts-item-likes-count-label {
		font-size: 16px;
	}
	.eapps-instagram-feed-posts-item-template-tile
		.eapps-instagram-feed-posts-item-comments-count-icon,
	.eapps-instagram-feed-posts-item-template-tile .eapps-instagram-feed-posts-item-likes-count-icon {
		width: 24px;
		height: 24px;
	}
	.eapps-instagram-feed-posts-item-template-tile
		.eapps-instagram-feed-posts-item-likes-count
		+ .eapps-instagram-feed-posts-item-comments-count {
		margin-left: 20px;
	}
	.eapps-instagram-feed-posts-item-template-tile .eapps-instagram-feed-posts-item-text {
		font-size: 14px;
		line-height: 21px;
		display: inline-block;
		overflow: hidden;
		margin-top: 12%;
		text-align: center;
		max-height: 84px;
		width: 100%;
	}
	.eapps-instagram-feed-posts-item-template-tile .eapps-instagram-feed-posts-item-text-clone {
		opacity: 0;
		visibility: hidden;
		position: absolute;
		left: 0;
		right: 0;
		max-height: none;
	} /*! CSS Used from: Embedded */
	a {
		color: inherit;
		text-decoration: inherit;
		font-size: inherit;
	} /*! CSS Used from: Embedded */
	#eapps-instagram-feed-1 a {
		text-decoration: none;
		color: #000;
		margin: 0;
	}
	#eapps-instagram-feed-1 a:hover {
		text-decoration: underline;
	}
	#eapps-instagram-feed-1 {
		width: 100%;
		max-width: 100%;
	}
	#eapps-instagram-feed-1 .eapps-instagram-feed-posts-item,
	#eapps-instagram-feed-1 .eapps-instagram-feed-posts-item a,
	#eapps-instagram-feed-1 .eapps-instagram-feed-posts-item a:hover,
	#eapps-instagram-feed-1 .eapps-instagram-feed-posts-item-content,
	#eapps-instagram-feed-1 .eapps-instagram-feed-posts-item-text {
		color: #000;
	}
	#eapps-instagram-feed-1
		.eapps-instagram-feed-posts-item-overlay
		.eapps-instagram-feed-posts-item-content,
	#eapps-instagram-feed-1
		.eapps-instagram-feed-posts-item-overlay
		.eapps-instagram-feed-posts-item-text {
		color: #fff;
	}
	#eapps-instagram-feed-1 .eapps-instagram-feed-posts-item-overlay {
		background: rgba(0, 0, 0, 0.8);
	} /*! CSS Used keyframes */
	@-moz-keyframes eapps-instagram-feed-loader {
		0% {
			transform: rotate(0);
		}
		100% {
			transform: rotate(360deg);
		}
	}
	@-webkit-keyframes eapps-instagram-feed-loader {
		0% {
			transform: rotate(0);
		}
		100% {
			transform: rotate(360deg);
		}
	}
	@keyframes eapps-instagram-feed-loader {
		0% {
			transform: rotate(0);
		}
		100% {
			transform: rotate(360deg);
		}
	}
</style>

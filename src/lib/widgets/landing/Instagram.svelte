<script lang="ts">
	import { postsPl } from '$sharedData';
	// import {  } from '$widgets';
	import { InstagramCard } from '$entitiesLanding';
</script>

<section class="w-full">
	<div class=" eapps-instagram-feed" id="eapps-instagram-feed-1">
		<div class="eapps-instagram-feed-container">
			<div class="eapps-instagram-feed-content">
				<div class="eapps-instagram-feed-header-container">
					<div class="eapps-instagram-feed-header" style="margin-bottom: 0px;">
						<div class="eapps-instagram-feed-header-inner">
							<div class="eapps-instagram-feed-header-user">
								<div class="eapps-instagram-feed-header-user-picture-wrapper">
									<a
										href="https://www.instagram.com/vasilyeva_pmu/"
										title="Tnstagram profile"
										target="_blank"
										rel="noopener noreferrer nofollow"
									>
										<!-- insta avatar -->
										<picture>
											<source srcset="/images/inst_avatar.avif" type="image/avif" />
											<img
												class="eapps-instagram-feed-header-user-picture"
												src="/images/inst_avatar.jpg"
												alt=""
											/>
										</picture>
									</a>
								</div>

								<div class="eapps-instagram-feed-header-user-info">
									<div class="eapps-instagram-feed-header-user-info-name">
										<!-- link for insta -->
										<a
											href="https://www.instagram.com/vasilyeva_pmu/"
											title=""
											target="_blank"
											rel="noopener noreferrer nofollow"
										>
											<div class="-user-username">@vasilyeva_pmu</div>
										</a>
									</div>
								</div>
							</div>

							<div class="eapps-instagram-feed-header-follow-button-wrapper">
								<a
									class="eapps-instagram-feed-header-follow-button -follow-button"
									href="https://www.instagram.com/vasilyeva_pmu/"
									target="_blank"
									rel="noopener noreferrer nofollow"
								>
									<svg
										class="eapps-instagram-feed-header-follow-button-icon"
										width="24"
										height="24"
										viewBox="0 0 24 24"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											fill-rule="evenodd"
											clip-rule="evenodd"
											d="M13.245 2.00046C14.2283 2.00292 14.7561 2.00941 15.2163 2.02313L15.4105 2.02946C15.6348 2.03738 15.8561 2.04722 16.1228 2.05939C17.1872 2.10794 17.9141 2.27701 18.5502 2.52424C19.2079 2.77976 19.7656 3.12171 20.3215 3.67766C20.8775 4.23365 21.2194 4.79135 21.475 5.44897C21.7222 6.08506 21.8913 6.81203 21.9398 7.87645C21.9815 8.79072 21.996 9.17154 21.9992 10.972V13.0272C21.996 14.8277 21.9815 15.2085 21.9398 16.1227C21.8913 17.1872 21.7222 17.9141 21.475 18.5502C21.2194 19.2078 20.8775 19.7655 20.3215 20.3215C19.7656 20.8775 19.2079 21.2194 18.5502 21.475C17.9141 21.7222 17.1872 21.8913 16.1228 21.9398C15.2085 21.9815 14.8277 21.9959 13.0272 21.9992H10.972C9.17155 21.9959 8.79073 21.9815 7.87646 21.9398C6.81204 21.8913 6.08507 21.7222 5.44897 21.475C4.79136 21.2194 4.23366 20.8775 3.67767 20.3215C3.12172 19.7655 2.77977 19.2078 2.52425 18.5502C2.27702 17.9141 2.10795 17.1872 2.0594 16.1227C2.04723 15.8561 2.03739 15.6348 2.02946 15.4104L2.02313 15.2162C2.00942 14.7561 2.00293 14.2282 2.00047 13.245V10.7542C2.00293 9.77097 2.00942 9.24311 2.02313 8.78295L2.02946 8.58876C2.03739 8.3644 2.04723 8.14311 2.0594 7.87645C2.10795 6.81203 2.27702 6.08506 2.52425 5.44897C2.77977 4.79135 3.12172 4.23365 3.67767 3.67766C4.23366 3.12171 4.79136 2.77976 5.44897 2.52424C6.08507 2.27701 6.81204 2.10794 7.87646 2.05939C8.14312 2.04722 8.36441 2.03738 8.58877 2.02946L8.78296 2.02313C9.24312 2.00941 9.77098 2.00292 10.7542 2.00046H13.245ZM13.0414 3.80184H10.9578C9.21948 3.80493 8.85687 3.81841 7.95859 3.85939C6.98357 3.90385 6.45405 4.06677 6.10167 4.20372C5.63487 4.38514 5.30174 4.60184 4.95181 4.9518C4.60185 5.30173 4.38514 5.63486 4.20373 6.10166C4.06678 6.45404 3.90386 6.98356 3.8594 7.95858C3.81842 8.85686 3.80494 9.21947 3.80185 10.9578V13.0414C3.80494 14.7797 3.81842 15.1423 3.8594 16.0406C3.90386 17.0156 4.06678 17.5452 4.20373 17.8975C4.38514 18.3643 4.60189 18.6975 4.95181 19.0474C5.30174 19.3974 5.63487 19.6141 6.10167 19.7955C6.45405 19.9324 6.98357 20.0953 7.95859 20.1398C8.85677 20.1808 9.2193 20.1943 10.9577 20.1974L11.4437 20.1979C11.6169 20.1981 11.8018 20.1981 11.9996 20.1981L12.2868 20.1981C12.3794 20.198 12.4689 20.198 12.5556 20.1979L13.0415 20.1974C14.2508 20.1952 14.7944 20.188 15.3155 20.1701L15.5112 20.1628C15.6754 20.1563 15.8454 20.1487 16.0406 20.1398C17.0157 20.0953 17.5452 19.9324 17.8976 19.7955C18.3643 19.6141 18.6975 19.3974 19.0474 19.0474C19.3974 18.6975 19.6141 18.3643 19.7955 17.8975C19.9324 17.5452 20.0954 17.0156 20.1398 16.0406C20.1487 15.8453 20.1563 15.6754 20.1628 15.5111L20.1701 15.3154C20.188 14.7942 20.1952 14.2507 20.1974 13.0414L20.198 12.5555C20.1981 12.3823 20.1981 12.1974 20.1981 11.9996L20.1981 11.7125C20.1981 11.6199 20.198 11.5303 20.198 11.4437L20.1974 10.9578C20.1943 9.21947 20.1808 8.85686 20.1398 7.95858C20.0954 6.98356 19.9324 6.45404 19.7955 6.10166C19.6141 5.63486 19.3974 5.30173 19.0474 4.9518C18.6975 4.60184 18.3643 4.38514 17.8976 4.20372C17.5452 4.06677 17.0157 3.90385 16.0406 3.85939C15.1423 3.81841 14.7797 3.80493 13.0414 3.80184ZM11.9996 6.86427C14.8358 6.86427 17.1349 9.16342 17.1349 11.9996C17.1349 14.8358 14.8358 17.1349 11.9996 17.1349C9.16343 17.1349 6.86428 14.8358 6.86428 11.9996C6.86428 9.16342 9.16343 6.86427 11.9996 6.86427ZM11.9996 8.66614C10.1586 8.66614 8.66615 10.1586 8.66615 11.9996C8.66615 13.8406 10.1586 15.3331 11.9996 15.3331C13.8406 15.3331 15.3331 13.8406 15.3331 11.9996C15.3331 10.1586 13.8406 8.66614 11.9996 8.66614ZM17.3378 5.46131C18.0006 5.46131 18.5379 5.9986 18.5379 6.66138C18.5379 7.32415 18.0006 7.86141 17.3378 7.86141C16.6751 7.86141 16.1378 7.32415 16.1378 6.66138C16.1378 5.9986 16.6751 5.46131 17.3378 5.46131Z"
										></path>
									</svg>

									<!-- Follow -->
									<div class="eapps-instagram-feed-header-follow-button-label">Obserwuj</div>
								</a>
							</div>
						</div>
					</div>
				</div>
				<div class="eapps-instagram-feed-posts-container">
					<div
						class="eapps-instagram-feed-posts-slider eapps-instagram-feed-posts eui-slider es-layout es-layout-carousel eapps-instagram-feed-posts-medium"
					>
						<div
							class="eapps-instagram-feed-posts-slider-inner eapps-instagram-feed-posts-inner eui-slider-inner es-layout-carousel-content w-full"
						>
							<!-- <div class="eapps-instagram-feed-posts-view eui-slider-slide"></div> -->
						</div>

						<!-- <button
							class="eapps-instagram-feed-posts-slider-prev eapps-instagram-feed-posts-slider-nav eui-slider-arrow-prev eui-slider-arrow es-layout-carousel-arrow es-layout-carousel-arrow-prev"
							aria-label="Previous slide"
							type="button"
						>
							<svg
								viewBox="4 0 8 16"
								width="12"
								height="16"
								class="eapps-instagram-feed-posts-slider-nav-icon"
							>
								<path
									d="M4.3,8.7l6,5.9c0.4,0.4,1.1,0.4,1.5,0c0.4-0.4,0.4-1.1,0-1.5L6.5,8l5.2-5.2c0.4-0.4,0.4-1.1,0-1.5
        c-0.4-0.4-1.1-0.4-1.5,0l-6,6C3.9,7.7,3.9,8.3,4.3,8.7z"
								></path>
							</svg>
						</button>

						<button
							class="eapps-instagram-feed-posts-slider-next eapps-instagram-feed-posts-slider-nav eui-slider-arrow-next eui-slider-arrow es-layout-carousel-arrow es-layout-carousel-arrow-next eui-slider-arrow-enabled"
							type="button"
						>
							<svg
								viewBox="4 0 8 16"
								width="12"
								height="16"
								class="eapps-instagram-feed-posts-slider-nav-icon"
							>
								<path
									d="M11.7,7.3l-6-5.9c-0.4-0.4-1.1-0.4-1.5,0c-0.4,0.4-0.4,1.1,0,1.5L9.5,8l-5.2,5.2
        c-0.4,0.4-0.4,1.1,0,1.5c0.4,0.4,1.1,0.4,1.5,0l6-6C12.1,8.3,12.1,7.7,11.7,7.3z"
								></path>
							</svg>
						</button> -->
					</div>

					<div class="flex flex-row flex-wrap">
						{#each postsPl as post}
							<InstagramCard {post} />
						{/each}
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<style>
	.insta-card {
		width: calc(25% - 0px);
		margin: 0px;
	}

	@media screen and (max-width: 479px) {
		.insta-card {
			width: calc(50% - 0px);
			margin: 0px;
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
	button {
		color: inherit;
		font: inherit;
		margin: 0;
	}
	button {
		overflow: visible;
	}
	button {
		text-transform: none;
	}
	button {
		-webkit-appearance: button;
		cursor: pointer;
	}
	* {
		box-sizing: border-box;
	}
	img {
		vertical-align: middle;
		max-width: 100%;
		display: inline-block;
	}
	.w-embed:before,
	.w-embed:after {
		content: ' ';
		grid-area: 1/1/2/2;
		display: table;
	}
	.w-embed:after {
		clear: both;
	}
	button,
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
	}
	/*! CSS Used from: Embedded */
	* {
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
	}
	/*! CSS Used from: Embedded */
	.eui-slider {
		position: relative;
		height: 100%;
		user-select: none;
		overflow: hidden;
	}
	.eui-slider-inner {
		z-index: 1;
		position: relative;
		height: 100%;
		display: flex;
		transition-property: transform;
	}
	.eui-slider-slide {
		width: 100%;
		height: 100%;
		display: inline-block;
		overflow: hidden;
		flex-grow: 1;
		flex-shrink: 0;
	}
	.eui-slider-arrow {
		opacity: 0;
		visibility: hidden;
		pointer-events: none;
	}
	.eui-slider-arrow-enabled {
		opacity: 1;
		visibility: visible;
		pointer-events: all;
	}
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
	.eapps-instagram-feed-content-loader {
		color: rgba(0, 0, 0, 0.2);
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
	.eapps-instagram-feed-loader {
		box-sizing: border-box;
		display: block;
		position: absolute;
		top: 50%;
		left: 50%;
		border-radius: 50%;
		border-style: solid;
		border-top-color: transparent;
		animation: eapps-instagram-feed-loader 1s infinite linear;
		opacity: 0;
		visibility: hidden;
		width: 32px;
		height: 32px;
		margin: -16px 0 0 -16px;
		border-width: 2px;
		z-index: 1;
	}
	.eapps-instagram-feed-data-status {
		position: fixed;
		bottom: 20px;
		right: 20px;
		padding: 16px;
		border-radius: 8px;
		background: #fff;
		box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
		z-index: 99999999;
		opacity: 0;
		visibility: hidden;
		pointer-events: none;
		transition: all 0.2s ease;
		max-width: 320px;
	}
	.eapps-instagram-feed-header {
		background: #fff;
		padding: 20px;
	}
	.eapps-instagram-feed-header-inner {
		display: flex;
		flex-wrap: nowrap;
		justify-content: center;
		align-items: center;
		margin: 0 auto;
		padding: 0 50px;
		max-width: 600px;
	}
	.eapps-instagram-feed-header-user {
		display: flex;
		align-items: center;
	}
	.eapps-instagram-feed-header-user-picture {
		display: block;
		width: 40px;
		height: 40px;
		max-width: none;
		box-shadow: 0 0 0 2px #fff;
		box-sizing: border-box;
		transition: all 0.2s ease;
		margin: 0 !important;
	}
	.eapps-instagram-feed-header-user-picture:hover {
		opacity: 0.95;
	}
	.eapps-instagram-feed-header-user-picture-wrapper {
		background: linear-gradient(40deg, #f99b4a 15%, #dd3071 50%, #c72e8d 85%);
		width: 48px;
		height: 48px;
		border-radius: 50%;
		padding: 4px;
		box-sizing: border-box;
		margin-right: 12px;
	}
	.eapps-instagram-feed-header-user-picture-wrapper > a {
		width: 100%;
		height: 100%;
		display: block;
		border-radius: 50%;
	}
	.eapps-instagram-feed-header-user-info-name {
		display: flex;
		align-items: center;
		font-size: 16px;
		font-weight: bold;
		color: currentColor;
	}
	.eapps-instagram-feed-header-follow-button {
		display: flex;
		align-items: center;
		position: relative;
		height: 32px;
		line-height: 32px;
		border-radius: 4px;
		overflow: hidden;
		padding: 0 12px;
		border: none;
		background: #0095f6;
		color: #fff;
		text-align: center;
		outline: none;
		cursor: pointer;
		margin-left: 40px;
		font-size: 14px;
		transition: background 0.2s ease;
		text-decoration: none;
	}
	.eapps-instagram-feed-header-user + .eapps-instagram-feed-header-follow-button-wrapper {
		margin-left: 40px;
	}
	.eapps-instagram-feed-header-follow-button::after {
		content: '';
		position: absolute;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		background: currentColor;
		opacity: 0;
		visibility: hidden;
		transition: all 0.2s ease;
	}
	.eapps-instagram-feed-header-follow-button:hover {
		text-decoration: none;
	}
	.eapps-instagram-feed-header-follow-button:hover::after {
		opacity: 0.1;
		visibility: visible;
	}
	.eapps-instagram-feed-header-follow-button-icon {
		width: 16px;
		height: 16px;
		display: block;
		fill: currentColor;
		margin-right: 8px;
	}
	.eapps-instagram-feed-header-follow-button-label {
		color: currentColor;
	}
	.eapps-instagram-feed-posts {
		width: 100%;
	}
	.eapps-instagram-feed-posts-container {
		width: 100%;
	}
	.eapps-instagram-feed-posts-inner {
		box-sizing: border-box;
		position: relative;
	}
	.eapps-instagram-feed-posts-view {
		display: inline-flex;
		flex-direction: row;
		justify-content: flex-start;
		flex-wrap: wrap;
		box-sizing: border-box;
		width: 100%;
		height: auto;
	}
	.eapps-instagram-feed-posts-view.eui-slider-slide {
		display: inline-flex;
		width: 100%;
		height: auto;
	}
	.eapps-instagram-feed-posts-slider {
		position: relative;
		height: auto;
		user-select: none;
		cursor: -webkit-grab;
		cursor: grab;
		width: 100%;
	}
	.eapps-instagram-feed-posts-slider-inner {
		z-index: 1;
		position: relative;
		height: auto;
		display: flex;
		width: 100%;
	}
	.eapps-instagram-feed-posts-slider-nav {
		background: #000;
		position: absolute;
		top: 50%;
		width: 60px;
		height: 60px;
		justify-content: center;
		align-items: center;
		border-radius: 50%;
		z-index: 1;
		cursor: pointer;
		opacity: 0.85;
		transition: all 0.2s;
		backface-visibility: hidden;
		border: none;
	}
	.eapps-instagram-feed-posts-slider-nav-icon {
		width: 12px;
		height: 16px;
		fill: #fff;
		display: block;
		position: absolute;
		top: 50%;
		transform: translateY(-50%);
	}
	.eapps-instagram-feed-posts-slider-nav:hover {
		opacity: 1;
	}
	.eapps-instagram-feed-posts-slider-prev {
		left: 0;
		transform: translate3d(-50%, -50%, 0);
		box-shadow: 2px 0 5px rgba(0, 0, 0, 0.3);
	}
	.eapps-instagram-feed-posts-slider-prev .eapps-instagram-feed-posts-slider-nav-icon {
		right: 12px;
	}
	.eapps-instagram-feed-posts-slider-prev:active {
		transform: translate3d(-50%, -50%, 0) scale(0.9);
	}
	.eapps-instagram-feed-posts-slider-next {
		right: 0;
		transform: translate(50%, -50%);
		box-shadow: -2px 0 5px rgba(0, 0, 0, 0.3);
	}
	.eapps-instagram-feed-posts-slider-next .eapps-instagram-feed-posts-slider-nav-icon {
		left: 12px;
	}
	.eapps-instagram-feed-posts-slider-next:active {
		transform: translate3d(50%, -50%, 0) scale(0.9);
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
	.eapps-instagram-feed-posts-item-image-landscape .eapps-instagram-feed-posts-item-image {
		height: 100% !important;
		min-width: 100%;
		max-width: inherit !important;
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
	.eapps-instagram-feed-posts-item-likes-count,
	.eapps-instagram-feed-posts-item-comments-count {
		display: inline-flex;
		align-items: center;
	}
	.eapps-instagram-feed-posts-item-likes-count-icon,
	.eapps-instagram-feed-posts-item-comments-count-icon {
		fill: currentColor;
		width: 24px;
		height: 24px;
	}
	.eapps-instagram-feed-posts-item-likes-count-label,
	.eapps-instagram-feed-posts-item-comments-count-label {
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
	.eapps-instagram-feed-posts-item-template-tile .eapps-instagram-feed-posts-item-likes-count,
	.eapps-instagram-feed-posts-item-template-tile .eapps-instagram-feed-posts-item-comments-count {
		min-width: 70px;
		justify-content: center;
	}
	.eapps-instagram-feed-posts-item-template-tile .eapps-instagram-feed-posts-item-likes-count-label,
	.eapps-instagram-feed-posts-item-template-tile
		.eapps-instagram-feed-posts-item-comments-count-label {
		font-size: 16px;
	}
	.eapps-instagram-feed-posts-item-template-tile .eapps-instagram-feed-posts-item-likes-count-icon,
	.eapps-instagram-feed-posts-item-template-tile
		.eapps-instagram-feed-posts-item-comments-count-icon {
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
	}
	/*! CSS Used from: Embedded */
	a {
		color: inherit;
		text-decoration: inherit;
		font-size: inherit;
	}
	/*! CSS Used from: Embedded */
	#eapps-instagram-feed-1 a {
		text-decoration: none;
		color: #000;
		margin: 0;
	}
	#eapps-instagram-feed-1 a:hover {
		text-decoration: underline;
	}
	#eapps-instagram-feed-1 .eapps-instagram-feed-header-user-picture {
		border-radius: 50%;
	}
	#eapps-instagram-feed-1 {
		width: 100%;
		max-width: 100%;
	}
	#eapps-instagram-feed-1 .eapps-instagram-feed-header {
		background: rgba(17, 17, 17, 0);
	}
	#eapps-instagram-feed-1 .eapps-instagram-feed-header-user-picture {
		box-shadow: 0 0 0 2px rgba(17, 17, 17, 0);
	}
	#eapps-instagram-feed-1 .eapps-instagram-feed-header,
	#eapps-instagram-feed-1 .eapps-instagram-feed-header a {
		color: rgb(255, 255, 255);
	}
	#eapps-instagram-feed-1 a.eapps-instagram-feed-header-follow-button,
	#eapps-instagram-feed-1 a.eapps-instagram-feed-header-follow-button:hover {
		text-decoration: none;
		background: #f1a5c3;
	}
	#eapps-instagram-feed-1 a.eapps-instagram-feed-header-follow-button,
	#eapps-instagram-feed-1 a.eapps-instagram-feed-header-follow-button:hover {
		color: rgb(17, 17, 17);
	}
	#eapps-instagram-feed-1 .eapps-instagram-feed-posts-item,
	#eapps-instagram-feed-1 .eapps-instagram-feed-posts-item-content,
	#eapps-instagram-feed-1 .eapps-instagram-feed-posts-item-text,
	#eapps-instagram-feed-1 .eapps-instagram-feed-posts-item a,
	#eapps-instagram-feed-1 .eapps-instagram-feed-posts-item a:hover {
		color: rgb(0, 0, 0);
	}
	#eapps-instagram-feed-1
		.eapps-instagram-feed-posts-item-overlay
		.eapps-instagram-feed-posts-item-content,
	#eapps-instagram-feed-1
		.eapps-instagram-feed-posts-item-overlay
		.eapps-instagram-feed-posts-item-text {
		color: rgb(255, 255, 255);
	}
	#eapps-instagram-feed-1 .eapps-instagram-feed-posts-item-overlay {
		background: rgba(0, 0, 0, 0.8);
	}
	#eapps-instagram-feed-1 .eapps-instagram-feed-posts-slider-nav-icon {
		fill: #f1a5c3;
	}
	#eapps-instagram-feed-1 .eapps-instagram-feed-posts-slider-nav {
		background: rgba(0, 0, 0, 0.9);
	}
	/*! CSS Used keyframes */
	@-moz-keyframes eapps-instagram-feed-loader {
		0% {
			transform: rotate(0deg);
		}
		100% {
			transform: rotate(360deg);
		}
	}
	@-webkit-keyframes eapps-instagram-feed-loader {
		0% {
			transform: rotate(0deg);
		}
		100% {
			transform: rotate(360deg);
		}
	}
	@keyframes eapps-instagram-feed-loader {
		0% {
			transform: rotate(0deg);
		}
		100% {
			transform: rotate(360deg);
		}
	}
</style>

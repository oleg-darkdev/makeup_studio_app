<script lang="ts">
	import { navigation } from '$sharedData';
	// import {  } from '$widgets';
	// import {  } from '$entities'

	import { fade } from 'svelte/transition';

	let menuIsOpen = $state(true);
</script>

<header class="section_header cards_dropdown-wrapper w-nav" role="banner">
	<div class="container-large">
		<div class="navbar_container">
			<div class="wrapper flex w-full flex-row content-center items-center justify-between">
				<a href="/" aria-current="page" class="navbar_logo-link">
					<img src="images/logo.PNG" loading="lazy" alt="" class="header_logo" />
				</a>

				<div class="navbar1_menu-button">
					<div class="menu-icon1">
						{#if !menuIsOpen}
							<img
								src="images/open_menu_icon.png"
								class=""
								alt=""
								on:click={() => (menuIsOpen = !menuIsOpen)}
							/>
						{:else}
							<img
								src="images/close_menu_icon.png"
								class=""
								alt=""
								on:click={() => (menuIsOpen = !menuIsOpen)}
							/>
						{/if}
					</div>
				</div>
			</div>

			<nav role="navigation" class="navbar_menu_desc space-between flex w-full">
				{#each navigation as { title, link }}
					<div class="navbar_link-wrap">
						<a href={link} class="header_link-block w-inline-block group">
							<div
								class="header_link tex-center mx-auto transform text-lg text-white transition duration-300 group-hover:scale-105 group-hover:text-rose-300"
							>
								{title}
							</div>

							<div
								class=" mx-auto mt-2 h-2 w-14 bg-rose-300 opacity-0 transition-transform duration-300 group-hover:scale-x-100 group-hover:opacity-100"
							></div>
						</a>
					</div>
				{/each}

				<div class="">
					<div class="navbar_link-wrap">
						<div class="navbar1_menu-buttons">
							<a href="#" class="button is-small noise-effect w-inline-block">
								<div>Kup dostep</div>
							</a>
						</div>
					</div>
				</div>
			</nav>
			{#if menuIsOpen}
				<!-- navbar_menu -->
				<!-- 			background-color: var(--main-black);
			border-bottom: 1px solid #fdf9fa1a;
			 -->
				<nav
					role="navigation"
					transition:fade
					class="navbar_menu-mobile static z-50 flex h-screen w-full flex-col"
				>
					<div class="mb-4">
						{#each navigation as { title, link }}
							<div class="navbar_link-wrap">
								<a href={link} class="header_link-block w-inline-block">
									<div
										class="header_link mx-auto my-3 transform
             text-center text-4xl text-white
             transition duration-300 group-hover:scale-105 group-hover:text-rose-300"
									>
										{title}
									</div>
								</a>
							</div>
						{/each}
					</div>

					<div class="navbar_link-wrap mx-auto mb-20">
						<div class="navbar1_menu-buttons">
							<a href="#" class="button is-small noise-effect w-inline-block">
								<div>Kup dostep</div>
							</a>
						</div>
					</div>

					<div class="text-style-signature noise-effect mx-auto mt-12">
						<img src="/images/signature_1.png" class="h-6 w-64" alt="" />
					</div>

					<!-- <div class="navbar_link-wrap">
					<div
						data-hover="true"
						data-delay="200"
						class="dropdown1_component w-dropdown"
					>
						<div class="dropdown1_toggle w-dropdown-toggle">
							<a href="/" class="header_link-block w-inline-block">
								<div class="header_link">Artists</div>
								<div class="header_link-underline"></div>
							</a>
							<div class="dropdown-chevron w-embed">
								<svg
									width=" 100%"
									height=" 100%"
									viewBox="0 0 16 16"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										fill-rule="evenodd"
										clip-rule="evenodd"
										d="M2.55806 6.29544C2.46043 6.19781 2.46043 6.03952 2.55806 5.94189L3.44195 5.058C3.53958 4.96037 3.69787 4.96037 3.7955 5.058L8.00001 9.26251L12.2045 5.058C12.3021 4.96037 12.4604 4.96037 12.5581 5.058L13.4419 5.94189C13.5396 6.03952 13.5396 6.19781 13.4419 6.29544L8.17678 11.5606C8.07915 11.6582 7.92086 11.6582 7.82323 11.5606L2.55806 6.29544Z"
										fill="currentColor"
									></path>
								</svg>
							</div>
						</div>
						<nav class="header-menu-dropdown-list w-dropdown-list">
							<a href="/" class="header-menu-dropdown w-dropdown-link">Lorem impsum</a>
						</nav>
					</div>
				</div> -->

					<div transition:fade class="w-layout-grid social_icons-list mx-auto mb-16">
						<a
							href="https://www.facebook.com/vasilyevavaleriapmu"
							target="_blank"
							class="social_icons-link noise-effect w-inline-block"
						>
							<div class="hero_content-social-icon w-embed">
								<svg
									width="100%"
									height="100%"
									viewBox="0 0 28 28"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										fill-rule="evenodd"
										clip-rule="evenodd"
										d="M14 28C21.732 28 28 21.732 28 14C28 6.26801 21.732 0 14 0C6.26801 0 0 6.26801 0 14C0 21.732 6.26801 28 14 28ZM17.6333 9.32402H16.3173C15.2813 9.32402 15.0853 9.80002 15.0853 10.535V12.124H17.5493L17.2273 14.616H15.0853V21H12.5093V14.616H10.3604V12.124H12.5093V10.29C12.5093 8.16202 13.8113 7.00002 15.7153 7.00002C16.356 6.99905 16.9962 7.03176 17.6333 7.09802V9.32402Z"
										fill="CurrentColor"
									></path>
								</svg>
							</div>
						</a>
						<a
							href="https://www.instagram.com/vasilieva.pmu/"
							target="_blank"
							class="social_icons-link noise-effect w-inline-block"
						>
							<div class="hero_content-social-icon w-embed">
								<svg
									width="100%"
									height="100%"
									viewBox="0 0 28 28"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										fill-rule="evenodd"
										clip-rule="evenodd"
										d="M14 28C21.732 28 28 21.732 28 14C28 6.26801 21.732 0 14 0C6.26801 0 0 6.26801 0 14C0 21.732 6.26801 28 14 28ZM19.6875 8.31251C19.0629 7.68791 18.2165 7.33585 17.3332 7.33321H10.6668C9.78348 7.33585 8.9371 7.68791 8.31251 8.31251C7.68791 8.9371 7.33585 9.78348 7.33321 10.6668V17.3332C7.33585 18.2165 7.68791 19.0629 8.31251 19.6875C8.9371 20.3121 9.78348 20.6641 10.6668 20.6668H17.3332C18.2165 20.6641 19.0629 20.3121 19.6875 19.6875C20.3121 19.0629 20.6641 18.2165 20.6668 17.3332V10.6668C20.6641 9.78348 20.3121 8.9371 19.6875 8.31251ZM10.6668 6H17.3332C19.9 6 22 8.1 22 10.6668V17.3332C22 19.9 19.9 22 17.3332 22H10.6668C8.1 22 6 19.9 6 17.3332V10.6668C6 8.1 8.1 6 10.6668 6ZM17.7776 10.4983C17.9421 10.6081 18.1354 10.6668 18.3332 10.6668C18.4646 10.6671 18.5948 10.6414 18.7162 10.5912C18.8377 10.5411 18.948 10.4674 19.041 10.3745C19.1339 10.2816 19.2075 10.1713 19.2577 10.0498C19.3078 9.92835 19.3335 9.79819 19.3332 9.66679C19.3332 9.469 19.2746 9.27567 19.1647 9.11122C19.0548 8.94677 18.8986 8.81859 18.7159 8.74291C18.5332 8.66722 18.3321 8.64742 18.1381 8.686C17.9441 8.72459 17.766 8.81983 17.6261 8.95968C17.4863 9.09953 17.391 9.27771 17.3524 9.4717C17.3138 9.66568 17.3336 9.86674 17.4093 10.0495C17.485 10.2322 17.6132 10.3884 17.7776 10.4983ZM15.4816 11.7826C15.043 11.4896 14.5274 11.3332 14 11.3332C13.293 11.334 12.6151 11.6152 12.1151 12.1151C11.6152 12.6151 11.334 13.293 11.3332 14C11.3332 14.5274 11.4896 15.043 11.7826 15.4816C12.0757 15.9201 12.4922 16.2619 12.9795 16.4638C13.4668 16.6656 14.003 16.7184 14.5203 16.6155C15.0376 16.5126 15.5127 16.2587 15.8857 15.8857C16.2587 15.5127 16.5126 15.0376 16.6155 14.5203C16.7184 14.003 16.6656 13.4668 16.4638 12.9795C16.2619 12.4922 15.9201 12.0757 15.4816 11.7826ZM11.7777 10.6741C12.4355 10.2346 13.2089 10 14 10C15.0609 10 16.0783 10.4214 16.8284 11.1716C17.5786 11.9217 18 12.9391 18 14C18 14.7911 17.7654 15.5645 17.3259 16.2223C16.8864 16.8801 16.2616 17.3928 15.5307 17.6955C14.7998 17.9983 13.9956 18.0775 13.2196 17.9231C12.4437 17.7688 11.731 17.3878 11.1716 16.8284C10.6122 16.269 10.2312 15.5563 10.0769 14.7804C9.92252 14.0044 10.0017 13.2002 10.3045 12.4693C10.6072 11.7384 11.1199 11.1136 11.7777 10.6741Z"
										fill="CurrentColor"
									></path>
								</svg>
							</div>
						</a>
					</div>
				</nav>
			{/if}
		</div>
	</div>
</header>

<style lang="postcss">
	.header_link {
		text-transform: capitalize;
		padding-left: 0;
		padding-right: 0;
		font-family: Caveat, sans-serif;
		font-size: 1.35rem;
		font-weight: 700;
		position: relative;
	}

	.navbar_menu_desc {
		grid-column-gap: 3rem;
		grid-row-gap: 4rem;
		align-items: center;
		display: flex;
		position: static;
	}
	.header_logo {
		max-height: 5rem;
		margin: 1.5em;
	}
	.navbar_menu {
		grid-column-gap: 3rem;
		grid-row-gap: 4rem;
		align-items: center;
		display: flex;
		position: static;
	}
	.navbar1_link {
		padding: 0.5rem 1rem;
	}
	.navbar1_link.w--current {
		color: var(--black);
	}

	.success-message-2 {
		background-color: var(--main-white);
		color: var(--main-black);
	}
	.navbar1_menu-buttons {
		grid-column-gap: 1rem;
		grid-row-gap: 1rem;
		grid-template-rows: auto;
		grid-template-columns: 1fr 1fr;
		grid-auto-columns: 1fr;
		align-items: center;
		display: flex;
	}
	@media screen and (min-width: 991px) {
		.navbar1_menu-button {
			display: none;
		}
		.navbar_menu-mobile {
			display: none;
		}
		.navbar_container {
			justify-content: space-between;
			align-items: center;
			width: 100%;
			height: 100%;
			margin-left: auto;
			margin-right: auto;
			display: flex;
		}
	}
	@media screen and (max-width: 991px) {
		.header_link {
			width: auto;
			/* font-size: 1.125rem; */
		}

		.navbar_menu_desc {
			display: none;
		}

		.navbar1_menu-button {
			padding: 0;
		}
		.menu-icon1 {
			/* border: 2px solid var(--pink); */
			flex-direction: column;
			justify-content: center;
			align-items: center;
			width: 48px;
			height: 48px;
			margin-right: -0.5rem;
			padding-bottom: 0;
			padding-right: 0;
			display: flex;
			position: relative;
			z-index: 99;
		}

		.navbar_menu {
			background-color: var(--main-black);
			border-bottom: 1px solid #fdf9fa1a;
			flex-direction: column;
			padding: 1rem 5% 2rem;
			position: absolute;
			overflow: auto;
		}
		.navbar_menu {
			/* height: 100vh; */
			/* padding-bottom: 15rem; */
		}
		.navbar1_link {
			width: auto;
			padding: 0.75rem 0;
			font-size: 1.125rem;
		}
		.navbar1_menu-buttons {
			grid-template-rows: auto auto;
			grid-template-columns: 1fr;
		}
		.navbar1_menu-button.w--open {
			background-color: #0000;
		}
		.navbar_link-wrap {
			text-align: left;
			margin-top: 0.1rem;
			margin-bottom: 0.1rem;
		}
	}
	@media screen and (max-width: 767px) {
	}

	@media screen and (max-width: 479px) {
		.header_logo {
			max-height: 3rem;
		}

		.navbar_container {
			/* height: 10%; */
			/* flex-direction: row; */
			/* width: 100%; */
			/* background-color: orange; */
		}
	}
</style>

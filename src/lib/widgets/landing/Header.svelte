<script lang="ts">
	// import {  } from '$shared';
import {
	fade,

} from 'svelte/transition';
	import type { NavigationLink } from '$sharedTypes';

	interface NavigationProps {
		navigation: NavigationLink[];
	}
	let { navigation, boardgamesList }: NavigationProps = $props();


	let showMenu = $state(false);
</script>

<div role="banner" class="navbar w-nav">
	<div class="container-full w-container">
		<div class="navbar-grid">
			{#if showMenu}
			<div transition:fade class="sm-menu flex h-screen flex-col" onclick={()=> showMenu = !showMenu}>
				<div class="flex flex-col text-center my-auto">
					{#each navigation as { title, link }}<a
							href={link}
							aria-current="page"
							class="w-nav-link text-white"><h2>{title}</h2></a
						>{/each}
					<!-- <a href="/" class="button-link">more about us</a> -->
				</div>
				<!-- <div class="footer-item px-10">
					<div class="footer-title-wrap">
						<img src="/images/boardgames-icon.svg" loading="lazy" alt="" class="footer-shape-1" />
						<h6 class="footer-title">Lista gier</h6>
					</div>
					<div class="w-layout-grid grid-footer-menu ">
						{#each boardgamesList as { title, progress, linkLanding, icon }}
							<a href={progress.landing ? linkLanding : '#'} target="_blank" class="footer-link">
								<img src={icon} class="h-8" alt={title} />
								{title}
							</a>
						{/each}
					</div>
				</div> -->
			</div>
			{/if}

			<div class="nav-left">
				<nav class="nav-menu w-nav-menu">
					<!-- w--current -->
					{#each navigation as { title, link }}
						<a href={link} aria-current="page" class="nav-link w-nav-link">{title}</a>
					{/each}
					<!-- <div class="w-dropdown">

<div class="dropdown-toggle nav-link w-dropdown-toggle">

<div>Pages</div>

<div class="dropdown-icon w-icon-dropdown-toggle"></div>

</div>

<nav class="dropdown-list w-dropdown-list">

<a href="/" aria-current="page" class="dropdown-link w-dropdown-link">Home</a>

</nav>
                    </div> -->
				</nav>
			</div>

			<div class="nav-menu-wrap">
				<a href="/" class="button-primary-2 nav-button w-inline-block">
					<div>Contact</div>
					<img src="/images/arrow-icon-left.svg" loading="lazy" alt="" />
				</a>
			</div>

			<a href="/" aria-current="page" class="brand w-nav-brand w--current">
				<img
					src="/images/logos/puzzle_management.svg"
					loading="lazy"
					alt="Logo"
					class="logo lg:h-[360px]"
				/>
			</a>

			<div class="menu-button w-nav-button  {showMenu ? 'w--open rotate-45': ''} transition delay-150 duration-300 ease-in-out" onclick={()=> showMenu = !showMenu}>
				<!-- <div class="w-icon-nav-menu"></div> -->
				<!-- <h4 class='my-auto'>=</h4> -->
				 <img src="/images/menu-icon.svg" class='h-10 w-auto' alt="">
			</div>
		</div>
	</div>
</div>

<style lang="postcss">
	@media screen and (min-width: 991px) {
		.sm-menu,
		.w-nav-button {
			display: none;
		}
	}
	@media screen and (max-width: 991px) {
		.w-nav-button {
			float: right;
			cursor: pointer;
			-webkit-tap-highlight-color: #0000;
			tap-highlight-color: #0000;
			-webkit-user-select: none;
			user-select: none;
			padding: 18px;
			font-size: 24px;
			/* display: none; */
			position: relative;
			color: #fff;
			background-color: #c8c8c8;
		}

		.w-nav-button:focus {
			outline: 0;
		}

		.menu-button {
			border-radius: var(--border-radius--border-radius);
			background-color: var(--color--primary-1);
			color: var(--color--black);
			margin-left: auto;
		}

		.menu-button.w--open {
			background-color: var(--color--primary-2);
			color: var(--color--black);
		}

		.sm-menu {
			background: var(--color--gray-2);
			min-width: 200px;
			position: absolute;
			top: 100%;
			left: 0;
			right: 0;
			overflow: visible;
		}
	}

	@media screen and (max-width: 479px) {
		.menu-button {
			padding: 12px;
		}
	}
</style>

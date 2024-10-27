<script lang="ts">
	// import {  } from '$shared';

	import type { NavigationLink } from '$sharedTypes';

	interface NavigationProps {
		navigation: NavigationLink[];
	}
	let { navigation }: NavigationProps = $props();
</script>

<div role="banner" class="navbar w-nav">
	<div class="container-full w-container">
		<div class="navbar-grid">
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

			<div class="menu-button w-nav-button">
				<div class="w-icon-nav-menu"></div>
			</div>
		</div>
	</div>
</div>

<style lang="postcss">
</style>

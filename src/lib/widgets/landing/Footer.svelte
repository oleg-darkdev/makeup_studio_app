<script lang="ts">
	import { boardgamesList } from '$sharedData';

	import { BigContaciDivider } from '$sharedUi';
	import type { NavigationLink } from '$sharedTypes';

	interface NavigationProps {
		navigation: NavigationLink[];
	}

	let { navigation, categories } = $props();
</script>

<footer class="footer">
	<div class="w-layout-blockcontainer container-full w-container">
		<div class="footer-wrap">
			<a href="/" aria-current="page" class="footer-logo-link w-inline-block w--current">
				<img
					src="/images/logos/puzzle_management.svg"
					loading="lazy"
					alt="Logo"
					class="footer-logo h-64"
				/>
			</a>
			<div class="footer-block">
				<div class="footer-menu-big">
					{#each categories as { title, anchor }}
						<a
							href="#{anchor}"
							class="footer-menu-big-item w-inline-block group transition delay-150 duration-300 ease-in-out hover:-translate-y-8"
						>
							<div class="footer-menu-text-small">. pomoc przy</div>
							<h6>{title}</h6>
						</a>
					{/each}
					<!-- <a href="/service" class="footer-menu-big-item w-inline-block">
                        <div class="footer-menu-text-small">. What we do</div>
                        <h6>Services</h6>
                    </a>
                    <a href="/about" class="footer-menu-big-item w-inline-block">
                        <div class="footer-menu-text-small">. Who we are</div>
                        <h6>About</h6>
                    </a>
                    <a href="/blog" class="footer-menu-big-item w-inline-block">
                        <div class="footer-menu-text-small">. Insights &amp; Ideas</div>
                        <h6>Blog</h6>
                    </a> -->
				</div>
			</div>
			<div class="w-layout-grid grid-footer">
				<div class="">
					<!-- <div class="footer-title-wrap">
						<img src="/images/social-icon.svg" loading="lazy" alt="" class="footer-shape-1" />
						<h6 class="footer-title">Social media</h6>
					</div>
					<div class="footer-social mb-20">
						<a
							href="https://www.facebook.com/"
							target="_blank"
							class="footer-social-item w-inline-block"
						>
							<img src="images/facebook.svg" loading="lazy" alt="" class="footer-social-icon" />
						</a>
					
					</div> -->
					<!-- images/66d0464eec8062a3c7b9f08b_twitter.svg -->
					<!-- 66d0464eec8062a3c7b9f089_facebook.svg -->
					<!-- images/66d0464eec8062a3c7b9f08a_instagram.svg -->

					<div class="footer-title-wrap">
						<img src="/images/contact-icon.svg" loading="lazy" alt="" class="footer-shape-1" />
						<h6 class="footer-title">Kontact</h6>
					</div>
					<div class="footer-contact">
						<p class="no-margin">
							Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
						</p>
						<a href="tel:+48000000000" class="text-white">+48 000 000 000</a>
						<a href="mailto:darkdev_brand@riseup.net" class="text-white">darkdev_brand@riseup.net</a
						>
					</div>
				</div>

				<div class="">
					<div class="footer-title-wrap">
						<img src="/images/boardgames-icon.svg" loading="lazy" alt="" class="footer-shape-1" />
						<h6 class="footer-title">Lista gier</h6>
					</div>
					<!-- w-layout-grid grid-footer-menu -->
					<div class="grid xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-6">
						{#each categories as { title, games, abstractIcon }}
							<div class="mb-12">
								<div class="mb-4">
									<h6 class="footer-title">{title}</h6>
								</div>
								<!-- :  : Boardgame -->
								<!-- w-layout-grid grid-footer-menu -->
								<div class="">
									{#each games as { progress, title, icon, linkLanding }}
										<!-- <BoardgameCard {boardgame} /> -->
										<a
											href={progress.landing ? linkLanding : '#'}
											target="_blank"
											class="footer-link mb-6 flex flex-row"
										>
											<img src={icon} class="mr-2 h-8" alt={title} />
											{title}
										</a>
									{/each}
								</div>
							</div>
						{/each}
						<!-- {#each boardgamesList as { title, progress, linkLanding, icon }}
							<a href={progress.landing ? linkLanding : '#'} target="_blank" class="footer-link">
								<img src={icon} class="h-8" alt={title} />
								{title}
							</a>
						{/each} -->
					</div>
				</div>
				<div class="footer-item">
					<div class="footer-title-wrap">
						<img src="/images/navigation-icon-1.svg" loading="lazy" alt="" class="footer-shape-1" />
						<h6 class="footer-title">Nawigacja</h6>
					</div>
					<div class="footer-menu">
						<!-- : NavigationLink -->
						{#each navigation as { title, link }}
							<a href={link} aria-current="page" class="footer-link">{title}</a>
						{/each}
					</div>
				</div>
			</div>

			<div class="footer-bottom">
				<div class="footer-menu-inline">
					<a href="/" class="footer-link">Privacy Policy</a>
				</div>
				<div>
					Development by
					<a href="https://oleg-darkdev.vercel.app/" target="_blank">oleg_darkDev</a>, 
					Production by
					<a href="https://forty-four.games" target="_blank">44Games</a>
				</div>
			</div>

			<BigContaciDivider />
		</div>
	</div>
</footer>

<!-- <div class="marquee-footer-medium-wrap">

<div class="marquee-big-items">

<a href="/" class="marquee-medium-item">Get in touch.</a>

<a href="/" class="marquee-medium-item">Get in touch.</a>

<a href="/" class="marquee-medium-item">Get in touch.</a>

<a href="/" class="marquee-medium-item">Get in touch.</a>

<a href="/" class="marquee-medium-item">Get in touch.</a>

<a href="/" class="marquee-medium-item">Get in touch.</a>

<a href="/" class="marquee-medium-item">Get in touch.</a>

<a href="/" class="marquee-medium-item">Get in touch.</a>

<a href="/" class="marquee-medium-item">Get in touch.</a>

<a href="/" class="marquee-medium-item">Get in touch.</a>

</div>

<div class="marquee-big-items">

<a href="/" class="marquee-medium-item">Get in touch.</a>

<a href="/" class="marquee-medium-item">Get in touch.</a>

<a href="/" class="marquee-medium-item">Get in touch.</a>

<a href="/" class="marquee-medium-item">Get in touch.</a>

<a href="/" class="marquee-medium-item">Get in touch.</a>

<a href="/" class="marquee-medium-item">Get in touch.</a>

<a href="/" class="marquee-medium-item">Get in touch.</a>

<a href="/" class="marquee-medium-item">Get in touch.</a>

<a href="/" class="marquee-medium-item">Get in touch.</a>

<a href="/" class="marquee-medium-item">Get in touch.</a>

</div>
</div> -->

<style lang="postcss">
	.footer-block {
		width: 60%;
		margin: 40px auto 50px;
	}

	.footer-menu-big {
		justify-content: space-between;
		margin-top: 30px;
		display: flex;
	}

	.footer-menu-big-item {
		color: var(--color--white);
		text-decoration: none;
	}

	.footer-menu-text-small {
		font-size: 12px;
	}

	.grid-footer {
		grid-column-gap: 30px;
		grid-row-gap: 30px;
		grid-template-rows: auto;
		grid-template-columns: 1fr 2.5fr 1fr;
		/* grid-template-columns: 1fr 1.25fr 1fr 1fr; */
	}

	.footer-title-wrap {
		grid-column-gap: 10px;
		grid-row-gap: 10px;
		align-items: center;
		margin-bottom: 40px;
		display: flex;
	}

	.footer-menu {
		grid-column-gap: 10px;
		grid-row-gap: 10px;
		flex-direction: column;
		display: flex;
	}

	.footer-link {
		color: var(--color--white);
		font-size: 14px;
		text-decoration: none;
	}

	.footer-link:hover {
		color: var(--color--primary-1);
	}

	.footer-link.w--current {
		text-decoration: underline;
	}

	.footer-shape-1 {
		z-index: 0;
		height: 36px;
	}

	.footer-title {
		z-index: 1;
		margin-bottom: 0;
		position: relative;
	}

	.grid-footer-menu {
		grid-template-rows: auto;
	}

	.footer-contact {
		grid-column-gap: 15px;
		grid-row-gap: 15px;
		flex-direction: column;
		display: flex;
	}
	.footer-social {
		grid-column-gap: 15px;
		grid-row-gap: 15px;
		flex-direction: column;
		display: flex;
	}

	.footer-social-item {
		border: 1px solid var(--color--white);
		border-radius: var(--border-radius--round);
		justify-content: center;
		align-items: center;
		width: 30px;
		height: 30px;
		display: flex;
	}

	.footer-social-icon {
		height: 18px;
	}

	.footer-bottom {
		border-top: 1px solid var(--color--border-color);
		justify-content: space-between;
		margin-top: 40px;
		padding-top: 30px;
		padding-bottom: 30px;
		display: flex;
	}

	.footer-menu-inline {
		grid-column-gap: 30px;
		grid-row-gap: 30px;
		display: flex;
	}

	.footer-logo {
		/* height: 70px; */
	}

	.footer-logo-link {
		text-align: center;
		justify-content: center;
		display: flex;
	}

	.subscribe-footer-form {
		grid-column-gap: 10px;
		grid-row-gap: 10px;
		align-items: center;
		display: flex;
		position: relative;
	}

	.footer-wrap {
		border-top: 1px solid var(--color--border-color);
		padding-top: 100px;
		padding-bottom: 50px;
	}

	@media screen and (max-width: 991px) {
		.footer-block {
			width: 100%;
		}
		.footer-wrap {
			padding-top: 70px;
			padding-bottom: 20px;
		}
	}

	@media (max-width: 768px) {
		.empty-title {
			display: none;
		}
		.footer-wrap {
			padding-top: 60px;
			padding-bottom: 10px;
		}

		.footer-menu-big {
			grid-column-gap: 10px;
			grid-row-gap: 10px;
			flex-wrap: wrap;
			grid-template-rows: auto;
			grid-template-columns: 1fr 1fr;
			grid-auto-columns: 1fr;
			display: grid;
		}

		.grid-footer {
			grid-template-columns: 1fr 1.25fr;
		}
	}

	@media screen and (max-width: 479px) {
		.footer-block {
			margin-bottom: 40px;
		}
		.footer-wrap {
			padding-top: 40px;
		}
		.grid-footer {
			grid-template-columns: 1fr;
		}

		.footer-title-wrap {
			margin-bottom: 30px;
		}

		.footer-bottom {
			margin-top: 30px;
			padding-bottom: 20px;
		}
	}
</style>

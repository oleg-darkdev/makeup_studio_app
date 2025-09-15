<script lang="ts">
	// import { pricesPl } from '$sharedData';
	// import {  } from '$widgets';
	// import {  } from '$entities'

	import LL from '$i18n/i18n-svelte';

	// console.log($LL.footer.contactDataTitle())
	// console.log($LL.footer.empty)
</script>

<footer class="section_footer" id="contact">
	<div class="padding-global">
		<div class="container-large">
			<div class="padding-vertical padding-xxlarge">
				<div class="padding-bottom padding-xxlarge">
					<div class="w-layout-grid footer_grid">
						<div class="footer_grid-item">
							<div class="margin-bottom margin-medium">
								<div class="footer_details-wrap margin-bottom margin-xsmall">
									<div class="footer_details-item">
										<div class="margin-bottom margin-xsmall">
											<h3 class="footer_heading">{$LL.footer.contactDataTitle()}:</h3>
										</div>
										<div>
											<a href="tel:+48451143933" class="footer_details-link text-color-pink"
												>(48) 451-143-933</a
											>
										</div>
										<div>
											<a
												href="mailto:vasilyeva.pmu@gmail.com"
												class="text-color-pink footer_details-link">vasilyeva.pmu@gmail.com</a
											>
										</div>
									</div>
								</div>
								<div class=" footer_details-item">
									<a
										href="https://www.google.pl/maps/place/Makija%C5%BC+Permanentny+Gda%C5%84sk+Valeria+Vasilyeva/@54.3564161,18.6501469,15z/data=!4m6!3m5!1s0x46fd73fc1ad206d9:0xd1fb0408db22dab9!8m2!3d54.3564916!4d18.650074!16s%2Fg%2F11s3zwzgr7?hl=ru&entry=ttu&g_ep=EgoyMDI1MDgxOS4wIKXMDSoASAFQAw%3D%3D"
										target="_blank"
										class="footer_details-link text-color-pink"
										>{$LL.footer.address()} <br /> 80-890 Gdańsk
									</a>
								</div>
							</div>
							<div class="w-layout-grid social_icons-grid">
								<a
									href={$LL.footer.social.facebook()}
									target="_blank"
									class="social_icons-link noise-effect w-inline-block"
								>
									<div class="hero_content-social-icon">
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
									href={$LL.footer.social.instagram()}
									target="_blank"
									class="social_icons-link noise-effect w-inline-block"
								>
									<div class="hero_content-social-icon">
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
						</div>
						<div class="footer_grid-item text-align-center">
							<a href="/" aria-current="page" class="footer3_logo-link">
								<img
									src="images/logo.PNG"
									loading="lazy"
									alt=" Logo"
									class="h-auto w-24 transform transition duration-300 hover:scale-105"
								/>
							</a>
						</div>
						<div class="grid-gap-4 grid w-full grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
							<div class="mb-10 w-full md:mb-0 lg:mb-0">
								<div class="margin-bottom margin-small">
									<h3 class="footer_heading">{$LL.footer.pricesTitle()}</h3>
								</div>
								<div class="">
									<div class="footer_link-list">
										{#each $LL.prices as { title, link }}
											<!-- <a href={link} aria-current="page" class="footer_link"
												>Taryfa <span class="text-color-pink">"{title}"</span></a
											> -->
											<a href={link} aria-current="page" class="footer_link">{title}</a>
										{/each}
									</div>
								</div>
							</div>
							<div class="w-full">
								<div class="margin-bottom margin-small">
									<h3 class="footer_heading">{$LL.footer.navigationTitle()}</h3>
								</div>
								<div class="">
									<div class="footer_link-list">
										{#each $LL.navigation as { title, link }}
											<a href={link} aria-current="page" class="footer_link">{title}</a>
										{/each}
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="line-divider"></div>
				<!-- <div class="padding-top padding-medium">
					<div class="footer_bottom-wrapper ">
						<div class="footer_copyright">
							<div class="footer_credit-text">
								©2025 Valeria Vasilyeva. All rights reserved.
							</div>
							<a href="/privacy-policy" class="footer_details-link">Privacy Policy</a>
						</div>
						<div class="w-layout-grid footer_legal-list">
							<div  class="text-size-tiny">
								Website design and development by
							</div>
							<a
								href="/"
								target="_blank"
								class="footer3_legal-link w-inline-block"
							>
								<img
									src=""
									loading="lazy"
									sizes="(max-width: 741px) 100vw, 741px"
									alt=""
									class="fm-logo"
								/>
							</a>
						</div>
					</div>
				</div> -->
			</div>
		</div>
	</div>
</footer>

<style lang="postcss">
	.footer_grid {
		grid-column-gap: 3rem;
		grid-row-gap: 3rem;
		grid-template-rows: auto;
		grid-template-columns: 1fr 1fr 1fr;
		align-items: start;
	}
	.footer_grid-item {
		grid-template-rows: auto;
	}
	.footer3_logo-link {
		float: none;
		padding-left: 0;
	}
	.footer_details-wrap {
		grid-column-gap: 2rem;
		grid-row-gap: 2rem;
		grid-template-rows: auto;
		grid-template-columns: 1fr;
		grid-auto-columns: 1fr;
		display: grid;
	}
	.footer3_social-list {
		grid-column-gap: 0.75rem;
		grid-row-gap: 0rem;
		white-space: normal;
		grid-template-rows: auto;
		grid-template-columns: max-content;
		grid-auto-columns: max-content;
		grid-auto-flow: column;
		place-items: start;
		display: grid;
	}

	.footer3_menu-wrapper {
		grid-column-gap: 2rem;
		grid-template-rows: auto;
		grid-template-columns: 1fr 1fr;
		align-items: start;
	}
	.footer_link-list {
		grid-column-gap: 0.5rem;
		grid-row-gap: 0.5rem;
		flex-direction: column;
		grid-template-rows: auto;
		grid-template-columns: 100%;
		grid-auto-columns: 100%;
		place-items: flex-start start;
		display: flex;
	}
	.footer_link {
		color: var(--white);
		padding-top: 0.5rem;
		padding-bottom: 0.5rem;
		transition: opacity 0.2s;
	}
	.footer_link:hover {
		opacity: 0.5;
	}
	.section_footer {
		border-top: 1px solid #fdf9fa1a;
	}
	.footer3_bottom-wrapper {
		justify-content: space-between;
		align-items: center;
		display: flex;
	}
	.footer3_credit-text {
		font-size: 0.875rem;
	}
	.footer3_legal-list {
		grid-column-gap: 1.5rem;
		grid-row-gap: 0rem;
		white-space: normal;
		grid-template-rows: auto;
		grid-template-columns: max-content;
		grid-auto-columns: max-content;
		grid-auto-flow: column;
		justify-content: center;
		display: grid;
	}
	.footer3_legal-link {
		font-size: 0.875rem;
		text-decoration: underline;
	}
	.footer_bottom-wrapper {
		justify-content: space-between;
		align-items: center;
		font-size: 0.833rem;
		display: flex;
	}
	.footer_copyright {
		grid-column-gap: 5px;
		grid-row-gap: 5px;
		white-space: normal;
		grid-template-rows: auto;
		grid-template-columns: max-content;
		grid-auto-columns: max-content;
		grid-auto-flow: column;
		place-items: start;
		display: grid;
	}
	.footer_credit-text {
		font-size: 0.875rem;
	}
	.footer_legal-list {
		grid-column-gap: 0.5rem;
		grid-row-gap: 0.5rem;
		white-space: normal;
		grid-template-rows: auto;
		grid-template-columns: max-content;
		grid-auto-columns: max-content;
		grid-auto-flow: column;
		justify-content: center;
		align-items: center;
		display: grid;
	}

	.footer_social-list {
		grid-column-gap: 0.75rem;
		grid-row-gap: 0rem;
		white-space: normal;
		grid-template-rows: auto;
		grid-template-columns: max-content;
		grid-auto-columns: max-content;
		grid-auto-flow: column;
		place-items: start;
		display: grid;
	}
	.footer_details-link {
		/* color: var(--white); */
		font-size: 0.875rem;
		transition: opacity 0.2s;
	}
	.footer_details-link:hover {
		opacity: 0.5;
	}

	.footer_social-link {
		align-items: center;
		font-size: 14px;
		text-decoration: none;
		display: flex;
	}

	.footer_link-wrap {
		grid-column-gap: 8rem;
		grid-row-gap: 8rem;
		color: var(--white);
		grid-template-rows: auto;
	}
	.footer_heading {
		background-image: url(/images/text-underline-7.svg);
		background-position: 0 100%;
		background-repeat: no-repeat;
		background-size: auto;
		padding-bottom: 5px;
		font-family: Quicksilver, sans-serif;
		font-size: 1.333rem;
		font-weight: 400;
	}
	.footer_right-max-width {
		width: 100%;
		max-width: 25rem;
		margin-left: auto;
	}

	@media screen and (max-width: 991px) {
		.footer_grid {
			grid-row-gap: 4rem;
			grid-template-columns: 1fr 1fr;
		}
		.footer_bottom-wrapper {
			grid-column-gap: 1rem;
			grid-row-gap: 1rem;
			flex-direction: column;
			justify-content: flex-start;
			align-items: flex-start;
		}
		.footer_social-list {
			margin-bottom: 1rem;
		}
		.footer_link-wrap {
			grid-column-gap: 5rem;
			grid-row-gap: 5rem;
		}
	}

	@media screen and (max-width: 767px) {
		.footer_grid {
			grid-row-gap: 3rem;
		}
		.footer3_menu-wrapper {
			grid-column-gap: 1.5rem;
		}
		.footer3_bottom-wrapper {
			flex-direction: column-reverse;
			align-items: flex-start;
			padding-bottom: 1rem;
		}
		.footer3_credit-text {
			margin-top: 2rem;
		}
		.footer3_legal-list {
			grid-column-gap: 0rem;
			grid-row-gap: 1rem;
			grid-auto-flow: row;
		}
		.footer_bottom-wrapper {
			flex-direction: column;
			align-items: flex-start;
		}
	}

	@media screen and (max-width: 479px) {
		.footer3_menu-wrapper {
			grid-row-gap: 40px;
			grid-template-columns: 1fr;
		}
		.footer_bottom-wrapper {
			align-items: center;
		}
		.footer_copyright {
			grid-column-gap: 10px;
			grid-row-gap: 10px;
			text-align: center;
			grid-template-columns: 1fr;
			grid-auto-columns: 1fr;
			grid-auto-flow: row;
			justify-items: center;
		}
		.footer_legal-list {
			grid-column-gap: 0.5rem;
			grid-row-gap: 0.5rem;
			flex-direction: column;
			display: flex;
		}
		.footer_details-link {
			color: var(--white);
		}
	}
</style>
